/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "86dcf9bc350a785b982c76d391453142"
  },
  {
    "url": "assets/css/0.styles.84ce4d99.css",
    "revision": "5d03c9029d64ef8474911de81be4ceb5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b5faa87e.js",
    "revision": "b7dad75ece558e70dd0475926eab4a0b"
  },
  {
    "url": "assets/js/11.185616a3.js",
    "revision": "984a2d195fd316c19d8db682a3250843"
  },
  {
    "url": "assets/js/12.e294a975.js",
    "revision": "454bcabbedebfc7ce5ea0f51eefc131b"
  },
  {
    "url": "assets/js/13.d73e40ad.js",
    "revision": "4e568eaaee15de48e186d9fd87c897ee"
  },
  {
    "url": "assets/js/14.357c51b6.js",
    "revision": "6ac29ff04c0b7326f7b229e75a4f0431"
  },
  {
    "url": "assets/js/15.cba78987.js",
    "revision": "ec899b7c0cbb82bea6bc5d5cd9c2113d"
  },
  {
    "url": "assets/js/16.b4836390.js",
    "revision": "0a304653654fd93384681297d8d8fa7b"
  },
  {
    "url": "assets/js/17.fcf126dd.js",
    "revision": "8b18c5a22cc1b38a0ff1db28bd96173a"
  },
  {
    "url": "assets/js/18.2453d72e.js",
    "revision": "1012cf2bdbf96e93027409dfc4d42120"
  },
  {
    "url": "assets/js/19.18df1de6.js",
    "revision": "cc3606c01c532202728dd9c645405e60"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.ae80d447.js",
    "revision": "4677901b5bc9cdc4c55ddc86cd5be385"
  },
  {
    "url": "assets/js/21.f0823df5.js",
    "revision": "38466328df616e7db2da4240953759c6"
  },
  {
    "url": "assets/js/22.6ac9acc7.js",
    "revision": "6a8814f37a442ab5f43244e42d73d641"
  },
  {
    "url": "assets/js/23.1f660a22.js",
    "revision": "e0c0e5ef5f3042adb9468d9d26ba00ff"
  },
  {
    "url": "assets/js/24.188e1537.js",
    "revision": "1a961066cdf0deec34204f5155653c39"
  },
  {
    "url": "assets/js/25.1e01fdc9.js",
    "revision": "2d696ec602cb76799c4ba695fcbd7c9f"
  },
  {
    "url": "assets/js/26.625f19b5.js",
    "revision": "58ca7c86a7313e858248b8af9ba699eb"
  },
  {
    "url": "assets/js/27.6706d7cf.js",
    "revision": "684b632038b84b9a1493286d71f48369"
  },
  {
    "url": "assets/js/28.11972615.js",
    "revision": "77ac5a5635b4a12a6f99e29c5bf4bf72"
  },
  {
    "url": "assets/js/29.d93ea215.js",
    "revision": "58c5ca6dc0888a47cef3e68490238dc9"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.60d85dc8.js",
    "revision": "fb711cb70da8d1f24a46b850f50cb7df"
  },
  {
    "url": "assets/js/31.bc44f9f6.js",
    "revision": "80e7e06a0ba1172a6136c8b0398031a2"
  },
  {
    "url": "assets/js/32.f77c2fd2.js",
    "revision": "3473cc547f443ee4752774344b26d9a9"
  },
  {
    "url": "assets/js/33.c9e30085.js",
    "revision": "58412e7fa497b84e6e3a3f002006c2e5"
  },
  {
    "url": "assets/js/34.cf25d462.js",
    "revision": "419e800e60a46c7eb7740f1b867ea874"
  },
  {
    "url": "assets/js/35.c7787f80.js",
    "revision": "4d82114c969b77d038e0dc031d56884b"
  },
  {
    "url": "assets/js/36.766d1a91.js",
    "revision": "184679a81500c981b01ea579760a4454"
  },
  {
    "url": "assets/js/37.1025b1fc.js",
    "revision": "f0b0ff248858973eea3aa4f9bb54d412"
  },
  {
    "url": "assets/js/38.e06af158.js",
    "revision": "c47c5caccfaa5c7d699be512535d5c04"
  },
  {
    "url": "assets/js/39.a95eee0b.js",
    "revision": "7422bfed776b6321ecbb09a30610168d"
  },
  {
    "url": "assets/js/4.3ffbc82a.js",
    "revision": "190745d99b9b8197b506d52ef8953908"
  },
  {
    "url": "assets/js/40.3b49c83c.js",
    "revision": "eac32ce3d4e897ce98c513d470de6260"
  },
  {
    "url": "assets/js/41.0b5fc74e.js",
    "revision": "d175e3b67c01e9bdff123b790e67d72b"
  },
  {
    "url": "assets/js/42.449411d7.js",
    "revision": "53b5395ebb9bfaad4912ed66fb694a54"
  },
  {
    "url": "assets/js/43.1753e4d0.js",
    "revision": "5efdce74589f403c5563882c9782c9ee"
  },
  {
    "url": "assets/js/44.26bf9a71.js",
    "revision": "9d3e654863429f56c384c56937b78c1e"
  },
  {
    "url": "assets/js/45.e8ccdefd.js",
    "revision": "b2cf4baae941ed68bb2ce104b438d055"
  },
  {
    "url": "assets/js/46.56d2813b.js",
    "revision": "431b85eeb250cefcad1047681b0dad40"
  },
  {
    "url": "assets/js/47.7d22cc54.js",
    "revision": "f90bc3d22b75c5b9af4681898e1e9ee7"
  },
  {
    "url": "assets/js/48.13a19f32.js",
    "revision": "fd90c2a18a6ec1d78539fccd210094bf"
  },
  {
    "url": "assets/js/49.4cb9c188.js",
    "revision": "06c260d6719337cd7cc1c5997c50ac33"
  },
  {
    "url": "assets/js/5.4527858b.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.f126e081.js",
    "revision": "1e6c8331151f9a3f6677cee11c0ee2f6"
  },
  {
    "url": "assets/js/51.fcf53e27.js",
    "revision": "17fa4b5a55fdac7105326566e3049aa8"
  },
  {
    "url": "assets/js/52.a50d37c5.js",
    "revision": "4744685abbf3c34da697db21840a82c6"
  },
  {
    "url": "assets/js/53.750987c1.js",
    "revision": "a2b84a1e7fbbe02be09cdae8c3c2e31f"
  },
  {
    "url": "assets/js/54.830627cb.js",
    "revision": "d83e794ca662953d9dc8035aa691bb72"
  },
  {
    "url": "assets/js/55.4ea2ee4d.js",
    "revision": "4d259f9d5c471a96be570d782f924249"
  },
  {
    "url": "assets/js/56.f0fcf572.js",
    "revision": "41d65958f5c9c82b2339ffa6f854cabf"
  },
  {
    "url": "assets/js/57.15dcea1e.js",
    "revision": "3835a5b8055fe00d02f8875c7fa942e2"
  },
  {
    "url": "assets/js/58.b5b3eeeb.js",
    "revision": "285dd0857e4341d4a18813ded68a423c"
  },
  {
    "url": "assets/js/59.5a12c6ca.js",
    "revision": "7e6963a12e6c025851ac561fed5f67eb"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.952c9b0e.js",
    "revision": "cb90ef30d8eb80c957576ebf40c69f74"
  },
  {
    "url": "assets/js/61.867ea586.js",
    "revision": "b5ad8a0678293eb9ca10eaca7a5d9b56"
  },
  {
    "url": "assets/js/62.2e33e297.js",
    "revision": "16732203d1035cf03afe82ca96fe995c"
  },
  {
    "url": "assets/js/63.bd3236f0.js",
    "revision": "e1fb8f55b720b342ac949cfd9a201a66"
  },
  {
    "url": "assets/js/64.28ca10c7.js",
    "revision": "2d99e6df2aab857deb8a4e4d00169258"
  },
  {
    "url": "assets/js/65.a870c1a5.js",
    "revision": "23e7b87c93937910390765b945683809"
  },
  {
    "url": "assets/js/66.56de3ad1.js",
    "revision": "24391ef02bf4ce18016603a00812b52f"
  },
  {
    "url": "assets/js/67.e177cc9f.js",
    "revision": "7ae853da42b827a42a34fe764293cd6b"
  },
  {
    "url": "assets/js/68.15aa65bd.js",
    "revision": "05658d6e643831f7770022084faaf2d5"
  },
  {
    "url": "assets/js/69.a12543cb.js",
    "revision": "17067659f145a754366743c8d229b07b"
  },
  {
    "url": "assets/js/7.574db714.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.2e416821.js",
    "revision": "2958c74256882fce7d24758eff5a35cc"
  },
  {
    "url": "assets/js/71.3edf3444.js",
    "revision": "8ac20244d349ae96365f0168083c9d9d"
  },
  {
    "url": "assets/js/8.43051b52.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.4e0a4085.js",
    "revision": "41857b39f7727b5b9461e2b29dc1e825"
  },
  {
    "url": "assets/js/app.a5e1c8df.js",
    "revision": "600ffe6079276d70d2519f51942e3e99"
  },
  {
    "url": "basis/ysyx-xsyx.png",
    "revision": "7067ff639c4a081689df60fd361f795c"
  },
  {
    "url": "basis/yx.png",
    "revision": "3817e52b3a04fa3d53ac019d88038924"
  },
  {
    "url": "basis/yxl1.png",
    "revision": "84b0f2b4f1f82852be9b4495df3609d7"
  },
  {
    "url": "basis/yxl2.png",
    "revision": "f12bd4abbecc09a4448c109acd331fc3"
  },
  {
    "url": "basis/yxl3.png",
    "revision": "80282b6893887a41cdc8009bf2024e7f"
  },
  {
    "url": "basis/yylx.png",
    "revision": "da1612d5c92392abd7cab57fb4ece2e7"
  },
  {
    "url": "basis/zlx.png",
    "revision": "6cd42b5272b4d4422e7ba5b7d9bc938f"
  },
  {
    "url": "basis/zyy.png",
    "revision": "a4bb9c36515f9b9416156277529a4311"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "6d545152441ed5a7e312083362cc8580"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "3fca43ff2e018666d1f5f014f60c41d6"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "a141f88b609ecd4fc1c893f153f3de02"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "1ccedb2c05f2e63387e11f0a42f42747"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "594c0e6e91705dfdb7c2c42d8e622a9c"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "1bce498b213d3f7f572b936a2ba76e6b"
  },
  {
    "url": "logo.png",
    "revision": "f2d49389c00b6f6aa98183a99dd11916"
  },
  {
    "url": "note.png",
    "revision": "50b88a885cc09b3d5cb79a16326f756b"
  },
  {
    "url": "notebook.png",
    "revision": "88e925d3e1b9c3c8cd2d52cdaa73608e"
  },
  {
    "url": "other/upset.html",
    "revision": "bcb08565723af5fe75c1b7c4c7cf4706"
  },
  {
    "url": "other/偏激.html",
    "revision": "087c8c08a468fc8d2da83d66e9a79574"
  },
  {
    "url": "plan.html",
    "revision": "40f3b2cc025c02ffc515802f5236dc42"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "e85e031bfe0adc3df84330397ef3f537"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "2854dcf4b8abc281e5be7253bc750951"
  },
  {
    "url": "projects/testhub.html",
    "revision": "4f3f57891c725a71618fcee4419ddc68"
  },
  {
    "url": "react/redux/index.png",
    "revision": "290d6ebaab229e5f85d93a651f3dc35c"
  },
  {
    "url": "react/redux/redux-data-flow.png",
    "revision": "f458b0f260f562e14947aba72ef866d3"
  },
  {
    "url": "react/redux/redux-flow.png",
    "revision": "03a5575bd43665790b9c8752bac49e6d"
  },
  {
    "url": "server/index.html",
    "revision": "9c0d32ed25cff1f640081e2c7d9abc2e"
  },
  {
    "url": "server/java/index.html",
    "revision": "6e2c376ae1128fe16bf76a67087f3f19"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "d2650da5570ef348cf122926ebc2db10"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "930ebefdc14795e54a3c14f519cdbc2a"
  },
  {
    "url": "server/mysql/full.png",
    "revision": "48ed2a9d929f221ed26bba1ab016b6df"
  },
  {
    "url": "server/mysql/inner.png",
    "revision": "8c51781dbdd93ee12436907f58cbc4cf"
  },
  {
    "url": "server/mysql/left.png",
    "revision": "ddecc55f1f2a926531008b28054498fc"
  },
  {
    "url": "server/mysql/right.png",
    "revision": "0701df576f3ca89b3f45f20975a53837"
  },
  {
    "url": "server/node/koa.html",
    "revision": "5f356fb5ecca349fd27b971bab975a26"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "bc057bd4b749eee9b804e03ee248d74a"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "873b166aff73819be37532b06867fdfd"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "53fd12a9cdfb360110f857d90bce8bb7"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "53d272b831d1ec06bd60ff643d79cab5"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "b295a977054e3367e4a44d0a08670c17"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "9e294751ca76149cbfe9fa248494e4ab"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "af46023fcc47e64b710b7c7b4583df51"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "597d08d8bf0433b594018fc85925d5f2"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "61454126e67ef818782951f419e2fb49"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "969fbb61db586db72f6b27f57f8aa071"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "a779ff02438c3bdc4b64c6f76a4026c7"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "f69995eeb5cb998ffe9ba95916eb0466"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "c413d3b2d4e5e1f120b6f66822fe0d6f"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "fafc0639b1c0d5352fe1d36c13030ed6"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "830c7f62dd413bb04eb33d8886ddd5a6"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "1e203dd7593d8960bd014e5663bfae17"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "6c6ae2058e9992572abd1cee676adba4"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "c241acbb54bc2ac4b2d93550b53cf392"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "86d674e16386eeb8a86ae53e5eec0c4c"
  },
  {
    "url": "server/python/index.html",
    "revision": "53882a38e14aa2857fb6a9df54d873a5"
  },
  {
    "url": "server/server/index.html",
    "revision": "f897ad968c7bbf530ef79e449d207c5d"
  },
  {
    "url": "server/socket/index.html",
    "revision": "7fda367af9926411ff3ced77d545fedd"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "cc788dd2c073f9a5f752b33be73967cb"
  },
  {
    "url": "tools/git.html",
    "revision": "7a4de58436e24300909aa539b977585d"
  },
  {
    "url": "tools/git/branch.png",
    "revision": "7bfa104aa21f548fcb9b9accc186eec0"
  },
  {
    "url": "tools/git/git-stage.jpg",
    "revision": "3e759b0d8e43aa9f4bf0efd2ca091e92"
  },
  {
    "url": "web/advanced/libs/index.html",
    "revision": "cdf7f0522c7fbd67c0eadc92c8fa80ef"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "23c36118b54c7f70ab307cbfdc3ba9b8"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "3eb0a4e65852cf8adddad7cebb8eaed7"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "82a5417c9dd110f76c3faa751f0692e3"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "5fe834d590a8acbe51f70e1a4ff72c76"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "34bf214fdddd4a9cfb0304c67180f5c1"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "436d3fe73602443c5784742301d71fa6"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "8e1e123bf277106fe6c71f141c417f41"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "28746ebebf151c662344ba5d0f337f25"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "10478b9c48f76c886ec42d815a2dbdf7"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "bb736fb5a24c09a4e9d955da7f8bd477"
  },
  {
    "url": "web/basis/async.html",
    "revision": "68b658de6dbcc895e15124eddf9a295e"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "7e2a2a9b8bc1d123998347e366879fca"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "13279d1027545073eb6e8486ddabbd25"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "bd105004f7acefe4311d30f11a17054a"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "2474d610fa0c6ffbce7a97e58c21e676"
  },
  {
    "url": "web/basis/html.html",
    "revision": "542f47cd4f87b3488f3d20bb1abe07e8"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "c008ffeebe6fc0b875dc0208e6d5222c"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "4e130463ff3c6d9eca24fea6a6f20a39"
  },
  {
    "url": "web/framework/index.html",
    "revision": "b1630b1abee72bdbc64c217a5c7d6b3e"
  },
  {
    "url": "web/framework/React.html",
    "revision": "dbd8aabfdab07c75f6eb6180e5381a22"
  },
  {
    "url": "wechat/index.html",
    "revision": "b2d2b171230351193dc01a7b263ba7bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
