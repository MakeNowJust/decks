(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RDyo:function(e,n,a){"use strict";a("HAE/"),Object.defineProperty(n,"__esModule",{value:!0});var t,m=a("rFnP"),o=(t=m)&&t.__esModule?t:{default:t};n.default=o.default},SVLc:function(e,n,a){"use strict";function t(e){!function(e){e.languages.ruby=e.languages.extend("clike",{comment:[/#.*/,{pattern:/^=begin\s[\s\S]*?^=end/m,greedy:!0}],keyword:/\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var n={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.languages.ruby}};delete e.languages.ruby.function,e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:{pattern:/(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,lookbehind:!0},"method-definition":{pattern:/(\bdef\s+)[\w.]+/,lookbehind:!0,inside:{function:/\w+$/,rest:e.languages.ruby}}}),e.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z]\w*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,greedy:!0,inside:{interpolation:n}},{pattern:/("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:n}}],e.languages.rb=e.languages.ruby}(e)}e.exports=t,t.displayName="ruby",t.aliases=["rb"]},"mY+G":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),m=a.n(t),o=a("OZqU"),r=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("6qfE")),c=a("t2WP"),l=a.n(c),s=a("EJm5"),p=a.n(s),i=a("RDyo"),g=a.n(i);function u(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}var d=Object.assign({},l.a,{prism:{style:p.a,languages:{crystal:g.a}}}),E=(new Date("2019-05-13T00:00:00.000Z"),[function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h1",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h1"},"crystal tool implementation"),"の話"),m.a.createElement(r.MDXTag,{name:"h2",components:n},"さっき作った (@MakeNowJust)"))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"自己紹介"),m.a.createElement(r.MDXTag,{name:"ul",components:n},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},"HN: さっき作った (make now just)"),m.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"GitHub: ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/MakeNowJust"}},"@MakeNowJust")),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Twitter: ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://twitter.com/make_now_just"}},"@make_now_just")))),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"最近は普通に大学生をしている")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"crystal tool implementation"),"とは？"))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"crystal tool implementation"),"とは？"),m.a.createElement(r.MDXTag,{name:"ul",components:n},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"crystal tool 何とか"),"で使えるコマンドの 1 つ"),m.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"crystal tool format"),"もこの仲間"))),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"メソッドの呼び出し位置から実装を検索できる"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"なんかエディタから使って定義位置へジャンプとかしたりできるらしい")),m.a.createElement(r.MDXTag,{name:"p",components:n},"使い方:"),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"$ crystal tool implementation -c ファイル:行:列 エントリーファイル\n")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"例"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"foo.cr")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-crystal",metaString:""}},"def foo(x)\n  p x\nend\n\nfoo 42\n")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"$ crystal tool implementation -c foo.cr:5:1 foo.cr\n1 implementation found\n/Users/makenowjust/foo.cr:1:1\n")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"例 (オーバーロード)"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bar.cr")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-crystal",metaString:""}},'def bar(x : Int32)\nend\n\ndef bar(x : String)\nend\n\nx = rand() < 0.5 ? 1 : "x"\nbar x\n')),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"$ crystal tool implementation -c bar.cr:8:1 bar.cr\n2 implementations found\n/Users/makenowjust/bar.cr:1:1\n/Users/makenowjust/bar.cr:4:1\n")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"便利そう 🤔"))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"失敗例 (マクロ)"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mac.cr")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-crystal",metaString:""}},"macro mac(x)\n  p {{x}}\nend\n\nmac 42\n")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"$ crystal tool implementation -c mac.cr:5:1 mac.cr\nno implementations or method call found\n")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"失敗例 (呼び出されてないメソッドの中)"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"in-call.cr")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-crystal",metaString:""}},"def foo\n  bar\nend\n\ndef bar\nend\n")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"$ crystal tool implementation -c in-call.cr:2:3 in-call.cr\nno implementations or method call found\n")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"上手くいかない例"),m.a.createElement(r.MDXTag,{name:"ol",components:n},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"マクロ"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"呼び出されていないメソッドの中の呼び出し"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"クラスなどの型"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"型エイリアス"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"定数"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"メソッドの型制約")),m.a.createElement(r.MDXTag,{name:"p",components:n},"世知辛いのじゃ〜"))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"進捗パート"),m.a.createElement(r.MDXTag,{name:"p",components:n},"ここ一週間くらい",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"crystal tool implementation"),"を弄っていた。"))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"上手くいかない例"),m.a.createElement(r.MDXTag,{name:"p",components:n},"色々直した。"),m.a.createElement(r.MDXTag,{name:"ol",components:n},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"マクロ"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"呼び出されていないメソッドの中の呼び出し"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(r.MDXTag,{name:"del",components:n,parentName:"li"},"クラスなどの型")),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(r.MDXTag,{name:"del",components:n,parentName:"li"},"型エイリアス")),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(r.MDXTag,{name:"del",components:n,parentName:"li"},"定数")),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"メソッドの型制約")),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/crystal-lang/crystal/pull/7742"}},"https://github.com/crystal-lang/crystal/pull/7742")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"例 (型)"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cls.cr")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-crystal",metaString:""}},"class Foo\nend\n\nFoo.new\n")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"$ bin/crystal tool implementation -c cls.cr:4:1 cls.cr\nFoo\n1 implementation found\n/Users/makenowjust/cls.cr:1:1\n")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"例 (型エイリアス)"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"als.cr")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-crystal",metaString:""}},"class Foo\nend\n\nclass Bar\nend\n\nalias Baz = Foo | Bar\n\nBaz\n")),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash",metaString:""}},"$ bin/crystal tool implementation -c als.cr:9:1 als.cr\nBaz\n1 implementation found\n/Users/makenowjust/als.cr:7:1\n")))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"乞うご期待"),m.a.createElement(r.MDXTag,{name:"p",components:n},"まだマージされてないです"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/crystal-lang/crystal/pull/7742"}},"https://github.com/crystal-lang/crystal/pull/7742")),m.a.createElement(r.MDXTag,{name:"p",components:n},"マージされるといいですね"))},function(e){var n=e.components;u(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h2",components:n},"上手くいかない例(展望)"),m.a.createElement(r.MDXTag,{name:"ol",components:n},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"マクロ ← がんばればどうにか。"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"呼び出されていないメソッドの中の呼び出し ← 原理的に無理"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(r.MDXTag,{name:"del",components:n,parentName:"li"},"クラスなどの型")),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(r.MDXTag,{name:"del",components:n,parentName:"li"},"型エイリアス")),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(r.MDXTag,{name:"del",components:n,parentName:"li"},"定数")),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"メソッドの型制約 ← 大変そうだけど不可能じゃない？")))}]);a.d(n,"query",function(){return M});n.default=function(e){var n=e.data;return m.a.createElement(o.a,{data:n,slides:E,theme:d})};var M="2617449398"},rFnP:function(e,n,a){"use strict";var t=a("SVLc");function m(e){e.register(t),function(e){e.languages.crystal=e.languages.extend("ruby",{keyword:[/\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/}),e.languages.insertBefore("crystal","string",{attribute:{pattern:/@\[.+?\]/,alias:"attr-name",inside:{delimiter:{pattern:/^@\[|\]$/,alias:"tag"},rest:e.languages.crystal}},expansion:[{pattern:/\{\{.+?\}\}/,inside:{delimiter:{pattern:/^\{\{|\}\}$/,alias:"tag"},rest:e.languages.crystal}},{pattern:/\{%.+?%\}/,inside:{delimiter:{pattern:/^\{%|%\}$/,alias:"tag"},rest:e.languages.crystal}}]})}(e)}e.exports=m,m.displayName="crystal",m.aliases=[]}}]);
//# sourceMappingURL=component---cache-mdx-deck-template-117-b-0-c-54-a-6-fecd-4-e-36-d-5-fea-64208-b-305-js-ad935c7793d894ac82f9.js.map