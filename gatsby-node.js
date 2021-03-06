const path = require('path');

const execa = require('execa');
const fs = require('fs-extra');
const grayMatter = require('gray-matter');
const {createFilePath} = require('gatsby-source-filesystem');
const getPort = require('get-port');

const createMdxDeckTemplate = require('./src/utils/create-mdx-deck-template');

exports.onCreateNode = async ({node, getNode, loadNodeContent, actions, pathPrefix}) => {
  const {createNodeField} = actions;

  // Process for mdx.
  if (node.internal.type === 'File' && node.extension === 'mdx') {
    // Create slug from file path.
    const slug = createFilePath({node, getNode, basePath: 'src/decks/'});
    createNodeField({
      node,
      name: 'slug',
      value: `/deck${slug}`,
    });

    // Capture screenshot by `mdx-deck`.
    const screenshotUrl = `/static/mdx-deck/${node.internal.contentDigest}/screenshot.png`;
    const outDir = path.join(__dirname, `public${path.dirname(screenshotUrl)}`);
    const outFile = path.basename(screenshotUrl);
    if (!(await fs.pathExists(path.join(outDir, outFile)))) {
      // Run `mdx-deck screenshot` command.
      await execa('mdx-deck', [
        'screenshot',
        `--port=${await getPort()}`,
        '--webpack=./webpack.config.mdx-deck.js',
        `--out-dir=${outDir}`,
        `--out-file=${outFile}`,
        node.absolutePath,
      ]);
    }

    createNodeField({
      node,
      name: 'screenshotUrl',
      value: `${pathPrefix}${screenshotUrl}`,
    });

    // Load frontmatter.
    const content = await loadNodeContent(node);
    const frontmatter = grayMatter(content);
    createNodeField({
      node,
      name: 'frontmatter',
      value: frontmatter.data,
    });
  }
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const result = await graphql(`
    query {
      allFile(filter: {extension: {eq: "mdx"}}) {
        edges {
          node {
            id
            absolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  await Promise.all(
    result.data.allFile.edges.map(async ({node}) => {
      createPage({
        path: node.fields.slug,
        component: await createMdxDeckTemplate(node.absolutePath),
        context: {id: node.id},
      });
    }),
  );
};

exports.onCreateWebpackConfig = ({actions, loaders}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.mdx$/,
          exclude: /node_modules/,
          use: [
            loaders.js(),
            {
              loader: require.resolve('mdx-deck/loader.js'),
              options: {
                mdPlugins: [require('remark-emoji'), require('remark-unwrap-images')],
              },
            },
          ],
        },
      ],
    },
  });
};
