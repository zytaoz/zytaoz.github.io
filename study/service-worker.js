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
    "revision": "a0f633a90f658eee9d8a0cbcf560b804"
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
    "url": "assets/js/10.bf537021.js",
    "revision": "6e2b61b73c6591038bd9cef0a1cdb12d"
  },
  {
    "url": "assets/js/11.15edcf04.js",
    "revision": "da489638daebee068824aba3a6f14532"
  },
  {
    "url": "assets/js/12.87d19375.js",
    "revision": "3b160729962afe6cd4db644932a43960"
  },
  {
    "url": "assets/js/13.82b7a24b.js",
    "revision": "bb7e0ea38bf72857630e3ce55788231e"
  },
  {
    "url": "assets/js/14.5e2757e4.js",
    "revision": "2232f17182ffa1b8b3b6c7a4059fa44b"
  },
  {
    "url": "assets/js/15.2460f3a3.js",
    "revision": "221f3ebbc14d29040da606aff7b854d8"
  },
  {
    "url": "assets/js/16.57624658.js",
    "revision": "c2aab722c9e76b23f2f4606cb89cf08f"
  },
  {
    "url": "assets/js/17.18ae9e07.js",
    "revision": "cbc15b5dd2cbd9ec5674802f3fe699d6"
  },
  {
    "url": "assets/js/18.7beb9dcf.js",
    "revision": "aeaabaef3030448bce538514f8bfd728"
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
    "url": "assets/js/20.d6c2d1ae.js",
    "revision": "8d5d304e5c5b20269087ada939ba1e34"
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
    "url": "assets/js/24.e94352d5.js",
    "revision": "3b94145eb741177e89290af7e85267e5"
  },
  {
    "url": "assets/js/25.d411452e.js",
    "revision": "2b8b3a4f7c5cd11b71113500903ac321"
  },
  {
    "url": "assets/js/26.e786d2d4.js",
    "revision": "89b17ca6c02d1ba25a04f6db57a078e7"
  },
  {
    "url": "assets/js/27.9b47bc2b.js",
    "revision": "3c0806c6cfcf3fd9356237ff5c69503f"
  },
  {
    "url": "assets/js/28.f6650aef.js",
    "revision": "22521c988d2dda713edd93a2293a7748"
  },
  {
    "url": "assets/js/29.90e29a9b.js",
    "revision": "46558e427d0ade0439d9c52e28e4feaf"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.3d9e8fe4.js",
    "revision": "ecee4924b1101a8ecca9d3fa8f077a57"
  },
  {
    "url": "assets/js/31.9ef236f6.js",
    "revision": "3897ea2e3bab7557533d71b223624f19"
  },
  {
    "url": "assets/js/32.07b6c434.js",
    "revision": "3465952580a10dbe813ee4412e9d3b01"
  },
  {
    "url": "assets/js/33.c9e30085.js",
    "revision": "58412e7fa497b84e6e3a3f002006c2e5"
  },
  {
    "url": "assets/js/34.87ffd38a.js",
    "revision": "64105b7dbf495603f151c92b47b6cc80"
  },
  {
    "url": "assets/js/35.183375f8.js",
    "revision": "602928b8999395afc6ae86abb5edeb90"
  },
  {
    "url": "assets/js/36.9bfedc77.js",
    "revision": "beb5b970929d0aa5dacb017ba3c2ddf3"
  },
  {
    "url": "assets/js/37.53aff030.js",
    "revision": "e10f8a62be9368254c012d2a9d7996cf"
  },
  {
    "url": "assets/js/38.61c3750d.js",
    "revision": "5a744d5db762a69613fc90b24915e391"
  },
  {
    "url": "assets/js/39.967b1823.js",
    "revision": "cd06d6546518b679c107f6cfeeb23554"
  },
  {
    "url": "assets/js/4.3ffbc82a.js",
    "revision": "190745d99b9b8197b506d52ef8953908"
  },
  {
    "url": "assets/js/40.d9b1e783.js",
    "revision": "fb8255c64eaced4d2176d4283334de15"
  },
  {
    "url": "assets/js/41.fbd26792.js",
    "revision": "445a696474c4cab7610b00335b0947de"
  },
  {
    "url": "assets/js/42.449411d7.js",
    "revision": "53b5395ebb9bfaad4912ed66fb694a54"
  },
  {
    "url": "assets/js/43.22879d35.js",
    "revision": "1c89627b18a0f147a37c48e7459284cb"
  },
  {
    "url": "assets/js/44.1a5a4c34.js",
    "revision": "2f36270f467b333d6f36caad96bad5b2"
  },
  {
    "url": "assets/js/45.d51ca27d.js",
    "revision": "abd671b316b8ca9b0403fda8c2ee3f8e"
  },
  {
    "url": "assets/js/46.1fbc4533.js",
    "revision": "0434d9a120573a7841c0d74d242eb722"
  },
  {
    "url": "assets/js/47.8dcb55a4.js",
    "revision": "83e3e43a2afea48523a6a3d20cb2b575"
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
    "url": "assets/js/50.ce7f26d4.js",
    "revision": "ec8d965d930ce03891a40e613d119c34"
  },
  {
    "url": "assets/js/51.09b96257.js",
    "revision": "c9f63de810ac9e59a2c30e70b6a855bb"
  },
  {
    "url": "assets/js/52.07ba160c.js",
    "revision": "b1e1d8015999eabfd8a9925c0d548776"
  },
  {
    "url": "assets/js/53.fe7dbd29.js",
    "revision": "6d77ef4b8cfcf8897a1f8af8633bf040"
  },
  {
    "url": "assets/js/54.a6112b75.js",
    "revision": "ef8d92badf78e577ef210abb36e95738"
  },
  {
    "url": "assets/js/55.72b16317.js",
    "revision": "63e3838f80c9656376619d42c2da81f0"
  },
  {
    "url": "assets/js/56.6d1d1642.js",
    "revision": "a9ada719490880a2330de5b09cbdf994"
  },
  {
    "url": "assets/js/57.925a4682.js",
    "revision": "3f6449aea95d66eb0a67b9f2c5cf6bbc"
  },
  {
    "url": "assets/js/58.f7315357.js",
    "revision": "f6dc362b9f2dc0ba3650e2ae9dc03b07"
  },
  {
    "url": "assets/js/59.ae141ecc.js",
    "revision": "74ebdf0136d699381cf13323f02bb43e"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.6a1a7b7d.js",
    "revision": "5db1427b0ef0de21f8bcc04f53d1299f"
  },
  {
    "url": "assets/js/61.8024ba5b.js",
    "revision": "889f314b0e49486f0ee67509f4e0581a"
  },
  {
    "url": "assets/js/62.1e3eaeaf.js",
    "revision": "f62397a28c3ab728ab7615de0917a482"
  },
  {
    "url": "assets/js/63.00825fe8.js",
    "revision": "7198fdc82077980d8c219e4b8b0f0a79"
  },
  {
    "url": "assets/js/64.8715476a.js",
    "revision": "ec41e4ed8d3b59f5fe164891329e5961"
  },
  {
    "url": "assets/js/65.7a139371.js",
    "revision": "db4c2fb0fcd9154513f628fd9b8c5015"
  },
  {
    "url": "assets/js/66.61a9c602.js",
    "revision": "056eb8e0ed918f492958de5b5099cf62"
  },
  {
    "url": "assets/js/67.e177cc9f.js",
    "revision": "7ae853da42b827a42a34fe764293cd6b"
  },
  {
    "url": "assets/js/68.fa398b4b.js",
    "revision": "a5c20259b5264647390eab07518d9be0"
  },
  {
    "url": "assets/js/69.8e7b676c.js",
    "revision": "153789f664fe6e1bf66bfd8d0ba52fff"
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
    "url": "assets/js/8.cbcd92d4.js",
    "revision": "868415a1611a52cda85358ab0792e3f3"
  },
  {
    "url": "assets/js/9.79bfbba5.js",
    "revision": "3a21a4456e14f25781a63e7b3f1d4156"
  },
  {
    "url": "assets/js/app.26ed0edb.js",
    "revision": "9fd9855fc35c5cc0b55449b391b0adca"
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
    "revision": "798ec8942fd79cd1329990308ce5022b"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "3df4aaa5a8f53857addec786f0c63c65"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "b553868f41cbf9d840db671e4602fc4e"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "d22f8a348a9bb14674ca05be9ac74a0b"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "44b523d2d33ef08ce4e7cc0e3a6fdc23"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "ce19a314efb7db5ba0e4b366c9c42894"
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
    "revision": "11dafc133f4a2cd73b814d4f25ee8a08"
  },
  {
    "url": "other/偏激.html",
    "revision": "d9d5bfc20126c3d0a155b7c0c74f0679"
  },
  {
    "url": "plan.html",
    "revision": "b3c5e79aab052a837608af217df2e946"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "4f109daa697d3f4e1e46de14a2c5d86d"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "18d3394e5ff7b089d7804b2095918641"
  },
  {
    "url": "projects/testhub.html",
    "revision": "fc98f34c2dddd61ee10c9a31be81bf87"
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
    "revision": "7c4fca13231a0399ed3ab51c5a884b75"
  },
  {
    "url": "server/java/index.html",
    "revision": "994ef6631f302ba96f1cd26f0458d6c1"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "816be6d16bc58ee05fd29c5dad8ae4c3"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "5d2ff6138125a9386bfdd7e04af6d067"
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
    "revision": "81301913be462580402d49425de373ea"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "61da78dacf33c170c9c221dfc966e769"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "fb6962448963e08de33e9d3888e403b9"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "e2d7e6cedc2aa009d52cc06dad6427e2"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "fbed07400d62a616ab4dcda1a015a9c5"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "a22321273fe7501586621e8eef20a125"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "8d519745f7ca5da7a1a7b5012df673d7"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "47187ceca24060fb25bed339a7fe8376"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "46c495cad026ecd6dc41b408d52015e2"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "f997871643e2aebc2155c1e3dd6c3f09"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "3a4a09a7cc1a84e1cb30f3c09fc21e55"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "df16d01b69cd2ca6ef0d2e5947d1712b"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "901fcdc4369ad778ccbb908c8ca79830"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "d3729578e07123cdcae490cc3ff4ff58"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "df358b555ffa1b09f6016f5669ad5c57"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "9478b3e475b04204d68906f960907377"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "938106ab3da82fc1d6797f69c416811d"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "6a9fe0608a43004b3e1217fd34588da3"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "408bdb873f97493024767bcf5a4adedd"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "05ab575c2bf7f18e318262cd075874e8"
  },
  {
    "url": "server/python/index.html",
    "revision": "0cb9429b63b6dccdcb0cd5ffe1ac3eef"
  },
  {
    "url": "server/server/index.html",
    "revision": "2972ceda9b6acf3f8201e5cbf5376dfd"
  },
  {
    "url": "server/socket/index.html",
    "revision": "11a41e18d8edce510ce0420bedaaa8ed"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "f86cb828130cc1af40f59b6ddb9c4cab"
  },
  {
    "url": "tools/git.html",
    "revision": "59a3b93f7553ed1f04476ecda8a3041a"
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
    "revision": "e91c2337e749fd4c194b1086b71242a1"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "12e48d22e5c68ecf39364922adc2a8ed"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "2d45dbd6d7c4bdd889025513a6c4c970"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "484d5b445108422bd56ab8389548f4a5"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "f6d1845048ec0f81b6bf8b2b205dbd87"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "0bb4855ae71e7097bcf1262d69228cf8"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "e379d8cc37ce5aba3022496d03d07a66"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "5a38cee456e61ce27f60e08b4feada39"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "0feae6bb1ef6dba71f01727bec9997df"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "acfecb1b22d393d51360f76654d63cb7"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "e213b9806f5e5164c8d3373955b8be38"
  },
  {
    "url": "web/basis/async.html",
    "revision": "49aca80b25b952096ad095a29b736562"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "0fc4665d37a3fbde8cb7012554607509"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "cad938a453d1d48f75201f2ad567f9d5"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "dea357ef4d273ddea9c7d2a258e4b489"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "e0e4bfa521bef41fef8dc8f4d97a441c"
  },
  {
    "url": "web/basis/html.html",
    "revision": "ed8416d91978c549983602eb67bc88d6"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "2649f4f1afee130d15a5d8b5d7cdcc7d"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "41f0d3fb1cc14a98d39bcfa539d2cdc1"
  },
  {
    "url": "web/framework/index.html",
    "revision": "9a374fd875c6655618b79b162d139257"
  },
  {
    "url": "web/framework/React.html",
    "revision": "a1e1b127154d9c2df3edd6cc82e1d8d8"
  },
  {
    "url": "wechat/index.html",
    "revision": "fd4f3d64dd61a71974acafe3decfbbaa"
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
