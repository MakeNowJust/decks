# maidfile

## dev

Start development server.

```bash
set -ex
gatsby develop --open "$@"
```

## build

Build with using [Gatsby](https://gatsbyjs.org).

```bash
set -ex
gatsby build "$@"
```

## lint

Run linter for source codes.

When `--fix` option is given, linters try to fix errors automatically.

```bash
if [[ $1 == --fix ]]; then
  lint_opt=--fix
  prettier_opt=--write
else
  lint_opt=
  prettier_opt=--list-different
fi
set -ex
prettier-package-json 'package.json' 'plugins/*/package.json' $prettier_opt
prettier --ignore-path .gitignore '**/*.{js,json,md,mdx,yml}' '!src/decks/*/examples/**' $prettier_opt
eslint --ignore-path .gitignore '**/*.js' $lint_opt
# `stylelint` against `styled-components` does not support auto fixing, so don't pass `$lint_opt`.
stylelint --ignore-path .gitignore '**/*.js'
```

## build-dockerfile

Build `.circleci/Dockerfile` for CircleCI.

```bash
set -ex
docker build -t makenowjust/decks:11-browsers .circleci
```
