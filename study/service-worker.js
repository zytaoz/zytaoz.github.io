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
    "revision": "d170c561c871004435b6ac2ebfe59707"
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
    "url": "assets/js/10.d698001e.js",
    "revision": "efa65947e7144bddeeaa5fdf9ed94b2f"
  },
  {
    "url": "assets/js/11.3e6edf1d.js",
    "revision": "324dfe7d3781d39c9f3e57f42ad4febc"
  },
  {
    "url": "assets/js/12.bd476482.js",
    "revision": "88d9d6f2b3bcd774f3826111b1c7d2ba"
  },
  {
    "url": "assets/js/13.dda21dc9.js",
    "revision": "9e21e0c2d0493c33cf305a3cae3e39b5"
  },
  {
    "url": "assets/js/14.ce2e60fb.js",
    "revision": "9100e8ecc6646972d6822271baeb4ab0"
  },
  {
    "url": "assets/js/15.3a65b1e1.js",
    "revision": "be51798533a131c895e2539f9df6e144"
  },
  {
    "url": "assets/js/16.c4a1ab2a.js",
    "revision": "0dd1c2ca2906be27fca1b46bf0059cd6"
  },
  {
    "url": "assets/js/17.261242cb.js",
    "revision": "2c8a62fbf5d69c4f6e911eedca6f01b8"
  },
  {
    "url": "assets/js/18.c94f2f66.js",
    "revision": "5ad3ca1883300ebbff790d804354e0d9"
  },
  {
    "url": "assets/js/19.37e57f99.js",
    "revision": "64aa270b0120923ad7d2375d45e4c0f6"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.b03e75d0.js",
    "revision": "265a19b15075f78c8f198181e68172e1"
  },
  {
    "url": "assets/js/21.bdd51c4c.js",
    "revision": "cfbae1c468f6ccc3f113b184fcec2a35"
  },
  {
    "url": "assets/js/22.cf21d524.js",
    "revision": "efe0e68865096656d545eaca290a777b"
  },
  {
    "url": "assets/js/23.6fee6406.js",
    "revision": "a648b301c708918a7eb20d3a70c0f339"
  },
  {
    "url": "assets/js/24.03641b20.js",
    "revision": "51e19878f10139baca22a57e8f277390"
  },
  {
    "url": "assets/js/25.ad9c05e0.js",
    "revision": "6271f12587a03272003758b97381dcf4"
  },
  {
    "url": "assets/js/26.18897db2.js",
    "revision": "0694ea40cfd566032e674269d5534c75"
  },
  {
    "url": "assets/js/27.ff921933.js",
    "revision": "d49a71357f1e550c857c574e13143db7"
  },
  {
    "url": "assets/js/28.7b671324.js",
    "revision": "ff5d880084eb30a3ceb7b116e5eabdc4"
  },
  {
    "url": "assets/js/29.998d8cb3.js",
    "revision": "af5fdbd2769ef861cb8b60bd47e0b2b5"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.51bf3ced.js",
    "revision": "42d70bcf0c141854c664eab5df2753a9"
  },
  {
    "url": "assets/js/31.7c206eaf.js",
    "revision": "7884b3733c826c81e6c2abd4be681a21"
  },
  {
    "url": "assets/js/32.dabd9751.js",
    "revision": "7ebf4dfd127a3689a8970cfc31f90450"
  },
  {
    "url": "assets/js/33.c6faeb92.js",
    "revision": "810bbeca76dbd13916bab362d841cd8a"
  },
  {
    "url": "assets/js/34.972888e5.js",
    "revision": "3ce43b4bc1ec3ca1e0a148103a4282a8"
  },
  {
    "url": "assets/js/35.6fbafead.js",
    "revision": "6e7bc2adb125abf94540115d92fe78ce"
  },
  {
    "url": "assets/js/36.701c982d.js",
    "revision": "650ebbb66f299f57c740a1d3ff5dccd3"
  },
  {
    "url": "assets/js/37.b7bb22df.js",
    "revision": "e160499fe160c0ff1671523cf9878c1f"
  },
  {
    "url": "assets/js/38.c0ff71c1.js",
    "revision": "a0cf77e682c26d0f3e004dea8cdd887d"
  },
  {
    "url": "assets/js/39.2e0ffe85.js",
    "revision": "93aee5f277d2539688425bbb188469cb"
  },
  {
    "url": "assets/js/4.b6dc4f46.js",
    "revision": "3d4ec50a5378004cead94380c7e79635"
  },
  {
    "url": "assets/js/40.f5c8d4c1.js",
    "revision": "59298e6fbdf71b10bc0dee8723cf7b3c"
  },
  {
    "url": "assets/js/41.847f8e28.js",
    "revision": "8919934d050f6100d0f255c42fd2413d"
  },
  {
    "url": "assets/js/42.db90d207.js",
    "revision": "16d56f597324d85a2ed7d18a1e9b0d80"
  },
  {
    "url": "assets/js/43.163ba545.js",
    "revision": "bca2b823bb4be5a3c4e8e65250686598"
  },
  {
    "url": "assets/js/44.995bf7fc.js",
    "revision": "172bbc076a1e1d34e2bc7efb24eb395c"
  },
  {
    "url": "assets/js/45.db81e993.js",
    "revision": "77262f053f886b6221116cabda8a3654"
  },
  {
    "url": "assets/js/46.ce8da0ce.js",
    "revision": "47a6ad33da95cb9b36b9f538a606a821"
  },
  {
    "url": "assets/js/47.9fa8e0eb.js",
    "revision": "0b1978492c81a2394a2ed895884524a0"
  },
  {
    "url": "assets/js/48.db386cec.js",
    "revision": "9f15f425537255e8a7d5d69c77b2518e"
  },
  {
    "url": "assets/js/49.8dc3c2bb.js",
    "revision": "66ea31295c19cb7f57c6de3f4651ed3b"
  },
  {
    "url": "assets/js/5.4527858b.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.156b09e3.js",
    "revision": "6176e65595fe6dd27d03d73c14174687"
  },
  {
    "url": "assets/js/51.ea31cd12.js",
    "revision": "5d067bdf545bea8f92a03d6a681ffbd3"
  },
  {
    "url": "assets/js/52.b6abf1a8.js",
    "revision": "b1dcee90a044434c14bea44da68beef1"
  },
  {
    "url": "assets/js/53.05a28b68.js",
    "revision": "ec167e5538d508dec35dc0a0987790c0"
  },
  {
    "url": "assets/js/54.04f314fa.js",
    "revision": "ab460ec58ca2fc7ad4bfc9302a062d37"
  },
  {
    "url": "assets/js/55.68afe7cf.js",
    "revision": "ce3763f7deb959c89735912b27595bbb"
  },
  {
    "url": "assets/js/56.6c5a2185.js",
    "revision": "46642bad6ee0dbc9ec9f53fa172a4996"
  },
  {
    "url": "assets/js/57.d36d0518.js",
    "revision": "5f7c9c12b013c172190ee6fec354a4b2"
  },
  {
    "url": "assets/js/58.4c2daa9b.js",
    "revision": "9d334d47dfb731dee71970569548cbae"
  },
  {
    "url": "assets/js/59.906b3e61.js",
    "revision": "118580dd5ea57f3c7bf130f1ca6ed214"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.aa36be0a.js",
    "revision": "b47feb3fe1c6ab098682960cf7bb82b9"
  },
  {
    "url": "assets/js/61.4d061d17.js",
    "revision": "c43b06f5c838377e0d05f8cc8b1385b9"
  },
  {
    "url": "assets/js/62.09eca724.js",
    "revision": "bbbdeaffb1785c86b41833cdef65c55e"
  },
  {
    "url": "assets/js/63.b6a80299.js",
    "revision": "f9ac4b68bbc81fe8db20d82e7fae37e9"
  },
  {
    "url": "assets/js/64.0a9898c1.js",
    "revision": "e24365760834842169f36f7de5fe4159"
  },
  {
    "url": "assets/js/65.3c01c7d0.js",
    "revision": "3f5830d1b0f0c701da8cf2fcdbaf68bb"
  },
  {
    "url": "assets/js/66.a47166b6.js",
    "revision": "4d153e35c70989a13f75de18a0560894"
  },
  {
    "url": "assets/js/67.deda03fe.js",
    "revision": "b89d17359d385db378f734b4e46a7a7a"
  },
  {
    "url": "assets/js/68.c0b75349.js",
    "revision": "b226dbebefe6d66a9a05c4afc87f3440"
  },
  {
    "url": "assets/js/69.a3854a4a.js",
    "revision": "618749072b5bb7031613a8dc0d93405e"
  },
  {
    "url": "assets/js/7.574db714.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.765cd314.js",
    "revision": "daf1376a86a7895561446f2750f9d64c"
  },
  {
    "url": "assets/js/71.dd4c6720.js",
    "revision": "343521d89a9b536747ff646e40e86472"
  },
  {
    "url": "assets/js/72.ee2c4084.js",
    "revision": "a37077846b58d1b070ee6ed8d2396ec8"
  },
  {
    "url": "assets/js/73.e50d5c01.js",
    "revision": "d3f59fba1b86c2e378aa704024e97de3"
  },
  {
    "url": "assets/js/74.5c9a3c5c.js",
    "revision": "52e94f9cb2f2cf4cb6f3267d3518654c"
  },
  {
    "url": "assets/js/75.36656fae.js",
    "revision": "d6985a1f1ab3258c809645e3d9bacb74"
  },
  {
    "url": "assets/js/8.43051b52.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.79bfbba5.js",
    "revision": "3a21a4456e14f25781a63e7b3f1d4156"
  },
  {
    "url": "assets/js/app.cd8beb93.js",
    "revision": "3e7ad9454da80cf58e472b84b0f26b8a"
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
    "revision": "d22010b93ca2f03d11bf3c3746cd299e"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "6ebaea984471f3fe38f9adc7d8eb1218"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "b6a7aa118108709f61939f071af60a02"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "cac5faef674895ef20da0d5d4c02e260"
  },
  {
    "url": "course/lagou/path1/js-optimize-1.html",
    "revision": "22b2f8ba0f341974eee0698f7017f249"
  },
  {
    "url": "course/lagou/path1/js-optimize-2.html",
    "revision": "e364fc553b43df44f0f911d06e07ddf7"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "1bf79ad6d2a2b823d3adace7f30e9fd7"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "b27114103ab6e94d1299e926120b5ed5"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "bb9a91829dbeabf384baaed42323a411"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "81f2e75c798e2d1acbf990572ea3e15e"
  },
  {
    "url": "lagou/event-loop.jpg",
    "revision": "34fd442793faa9a8003d31533e44a856"
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
    "revision": "61e145c85aa37da40fdff129bf2fe391"
  },
  {
    "url": "other/偏激.html",
    "revision": "2d6001cfb28331642f2317a8108c7ac0"
  },
  {
    "url": "plan.html",
    "revision": "0d73bb231b0a93bf24874426bf680069"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "0b235cb912af826d3162ebc24ba35e37"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "08944165ff1e75ed8ed45c9ea99a8e35"
  },
  {
    "url": "projects/testhub.html",
    "revision": "ee08b1f4cc52a41ca212ffa077e4ce4d"
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
    "revision": "786b8fc91cff9e7563d453aed87ede79"
  },
  {
    "url": "server/java/index.html",
    "revision": "cca261a692f87e4a392fe198700531f7"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "1afbf5c4814eec142dbf2a06e83a319a"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "316e523654c1b8d27b6a8d9160642218"
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
    "revision": "5b1768c874ed38f793434f81b53bccaf"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "292f02e30e78eea20eb3c9ab98e58858"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "b38d971c55b328279e0a0406345ab820"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "f9425b419d5f0bae47ad795906c38a87"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "5a2c3f4036f721085afb09e69b407ab1"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "d73ab10099fe45b06d3722e6943c4422"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "921d2b0e4c25684dd690b5ea351259ff"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "76b328d551824f234b9fab29f955366b"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "f9aab0e1cb5cb541cfe2c9168d50f24f"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "6cf96acd2e5186a24a3c69059bcf95d5"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "f68cc81808fe7237f5eded18c3399c27"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "d904363e49f05b817a339264e79a5523"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "015b55786361eaa37e7052e594881a99"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "05f4c8a19886cebf0cd7778210f27b01"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "2d0f4977cd821f46352a205fdbad8a78"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "8a65786fb342ae1d5bacd28791047dad"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "c7905223a7f81d7199d23467436d01a8"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "bec3408afe3768e10379c47c42e54453"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "b3981dfbfe7fac65000d52035bec20b1"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "2c8c494bb74c4122a11e4f999c47bff6"
  },
  {
    "url": "server/python/index.html",
    "revision": "6b64d034e70a9c8af2653474cbff267c"
  },
  {
    "url": "server/server/index.html",
    "revision": "d8ac249acbc08461f2296784d1d6bf1e"
  },
  {
    "url": "server/socket/index.html",
    "revision": "d69da3b90731903a908005ede5c09c7c"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "cfd9d2acf582c536b5926d5f926782b2"
  },
  {
    "url": "tools/git.html",
    "revision": "761c3fde1da64b1f4db916a6ea4babe8"
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
    "revision": "7ae0672ae123f1f67f558eab3ff54e09"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "673e8ff0b8cb929bb93eed6fdb60aa48"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "17b78b8b247c958fdc2a98ff1a4e32e9"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "2a70a7929d5415c51e9bbd5a08ef63ca"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "d85762d6918f0812145e1adbbd220cb3"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "4873ded7ba18cb4c007e28b5dd29761e"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "b0b17f6436b484036eb05a1559bf34aa"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "c14389e7d7d4cc03cd6f54d9ad4827bd"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "f1dd99f2f72b9dfdfc5ae720becf6ed1"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "2d2eb6913ebb9770c26221f09c58fe29"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "9b49febd34c3e333a2b998523f8b0c3f"
  },
  {
    "url": "web/basis/async.html",
    "revision": "c602f2272ab23b6609ea48817de8f4bf"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "e06df361658ee4ff738b0d361ae8e039"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "d78e5154a60496f3ea288f8e6254d8b1"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "aa6b7228c5fb4f36c822268ce74f7c24"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "37d70d717cf1bf90f1779c7de6e55c5e"
  },
  {
    "url": "web/basis/html.html",
    "revision": "6a717cad9455fdc7ca006be8a8b01845"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "c76e6d5024e4730b2f578bb2277e7f42"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "afa32df28f14d19279c11b443c4e89a1"
  },
  {
    "url": "web/framework/index.html",
    "revision": "01fb00648de44b8e4669dc4c6cf3a956"
  },
  {
    "url": "web/framework/React.html",
    "revision": "2098057a580041813137982edebe4a61"
  },
  {
    "url": "wechat/index.html",
    "revision": "c5d763cd8571941df7615f55978ccf0b"
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
