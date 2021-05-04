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
    "revision": "ce748f2e82fe2c1b8889a789397d784a"
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
    "url": "assets/js/10.c67550d0.js",
    "revision": "c808b0ab6169476f10d49492f8bd3e8b"
  },
  {
    "url": "assets/js/11.0ad36a4a.js",
    "revision": "324dfe7d3781d39c9f3e57f42ad4febc"
  },
  {
    "url": "assets/js/12.28a7302c.js",
    "revision": "2d7d604a11d2d36c1843bebcc2927d25"
  },
  {
    "url": "assets/js/13.172d0d5b.js",
    "revision": "f6effc650fccb26c28fc493d423f3775"
  },
  {
    "url": "assets/js/14.c37cb6fd.js",
    "revision": "30e7439825ccd53702cdc88f3e3ebf78"
  },
  {
    "url": "assets/js/15.b2ff661a.js",
    "revision": "61f2f16e95a0ad9d79950d202b39af8d"
  },
  {
    "url": "assets/js/16.b6dddc00.js",
    "revision": "0a304653654fd93384681297d8d8fa7b"
  },
  {
    "url": "assets/js/17.caa7cbb3.js",
    "revision": "cbc15b5dd2cbd9ec5674802f3fe699d6"
  },
  {
    "url": "assets/js/18.70b223ae.js",
    "revision": "3d6c77543c0fb3da986806f8e560a17c"
  },
  {
    "url": "assets/js/19.c3bcfaf5.js",
    "revision": "ceda8cbe34d6d772ef40adc446854dcb"
  },
  {
    "url": "assets/js/2.e85ab9f3.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.d14d7d8e.js",
    "revision": "b5b85a3b6c8ebf42db5515f3405c7e36"
  },
  {
    "url": "assets/js/21.c7816f0c.js",
    "revision": "3ca52582c3df7dd74e528238e18aae62"
  },
  {
    "url": "assets/js/22.e86eb588.js",
    "revision": "6a8814f37a442ab5f43244e42d73d641"
  },
  {
    "url": "assets/js/23.655be2f1.js",
    "revision": "e0c0e5ef5f3042adb9468d9d26ba00ff"
  },
  {
    "url": "assets/js/24.ef4fd7ac.js",
    "revision": "3b94145eb741177e89290af7e85267e5"
  },
  {
    "url": "assets/js/25.8a8f5b3f.js",
    "revision": "2b8b3a4f7c5cd11b71113500903ac321"
  },
  {
    "url": "assets/js/26.2b65ee10.js",
    "revision": "89b17ca6c02d1ba25a04f6db57a078e7"
  },
  {
    "url": "assets/js/27.c45af0ca.js",
    "revision": "3c0806c6cfcf3fd9356237ff5c69503f"
  },
  {
    "url": "assets/js/28.6b31a783.js",
    "revision": "4bbb8fb4021dadded94e93087a86da82"
  },
  {
    "url": "assets/js/29.5f228350.js",
    "revision": "58c5ca6dc0888a47cef3e68490238dc9"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.e9fa8bbd.js",
    "revision": "81fcc181710e9257b69f80a65d0b3ccb"
  },
  {
    "url": "assets/js/31.3c874b15.js",
    "revision": "3897ea2e3bab7557533d71b223624f19"
  },
  {
    "url": "assets/js/32.f4ed3a90.js",
    "revision": "3473cc547f443ee4752774344b26d9a9"
  },
  {
    "url": "assets/js/33.7f7089fb.js",
    "revision": "58412e7fa497b84e6e3a3f002006c2e5"
  },
  {
    "url": "assets/js/34.56af27f6.js",
    "revision": "5b890231ea1d3b1518c7d4e838fface2"
  },
  {
    "url": "assets/js/35.685977ce.js",
    "revision": "4d82114c969b77d038e0dc031d56884b"
  },
  {
    "url": "assets/js/36.1cb612c4.js",
    "revision": "1a2a72e6dd724ca21e8d214e8840aee2"
  },
  {
    "url": "assets/js/37.3481b785.js",
    "revision": "26c310b941727ceba61396c9bde2fd7c"
  },
  {
    "url": "assets/js/38.29bb57bc.js",
    "revision": "cb3ae0dc5cd305101d7293b2dc0ac401"
  },
  {
    "url": "assets/js/39.dabfbd34.js",
    "revision": "cd06d6546518b679c107f6cfeeb23554"
  },
  {
    "url": "assets/js/4.3ffbc82a.js",
    "revision": "190745d99b9b8197b506d52ef8953908"
  },
  {
    "url": "assets/js/40.3dfce953.js",
    "revision": "fb8255c64eaced4d2176d4283334de15"
  },
  {
    "url": "assets/js/41.699cd2b1.js",
    "revision": "de92283ea231275f8b168823c7eeb4e4"
  },
  {
    "url": "assets/js/42.fe713929.js",
    "revision": "75c6c3d2a5a42659ab821bbe28ccd70f"
  },
  {
    "url": "assets/js/43.6925334a.js",
    "revision": "0f7b6f93eb5e1591b509e1d8e7189e65"
  },
  {
    "url": "assets/js/44.5656bd01.js",
    "revision": "b1d4a9256eab448794a2212720fbd3be"
  },
  {
    "url": "assets/js/45.8a262c94.js",
    "revision": "1421091c367e52267d1bf7560c503098"
  },
  {
    "url": "assets/js/46.5a0f0ce6.js",
    "revision": "cc7e72781cd573bf838717fa9309c504"
  },
  {
    "url": "assets/js/47.83cda9ea.js",
    "revision": "f90bc3d22b75c5b9af4681898e1e9ee7"
  },
  {
    "url": "assets/js/48.67704a59.js",
    "revision": "fd90c2a18a6ec1d78539fccd210094bf"
  },
  {
    "url": "assets/js/49.7409084a.js",
    "revision": "12b09ce7fc3e0e3983994ae0f5a6c0af"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.83c5b7dc.js",
    "revision": "e00a4243535a66a81d0bdb83bd289c1c"
  },
  {
    "url": "assets/js/51.66b412a0.js",
    "revision": "016322bd491b4d5c70b4617f7ca5e398"
  },
  {
    "url": "assets/js/52.03502b74.js",
    "revision": "b1e1d8015999eabfd8a9925c0d548776"
  },
  {
    "url": "assets/js/53.905f385a.js",
    "revision": "e907de4331d50c0a6c6bcf085a0cd43a"
  },
  {
    "url": "assets/js/54.bf05513e.js",
    "revision": "ef8d92badf78e577ef210abb36e95738"
  },
  {
    "url": "assets/js/55.f7a083b8.js",
    "revision": "4d259f9d5c471a96be570d782f924249"
  },
  {
    "url": "assets/js/56.a15f4090.js",
    "revision": "41d65958f5c9c82b2339ffa6f854cabf"
  },
  {
    "url": "assets/js/57.c3c78bb3.js",
    "revision": "3f6449aea95d66eb0a67b9f2c5cf6bbc"
  },
  {
    "url": "assets/js/58.4aeefa15.js",
    "revision": "4be484c4d27f43a1f5015eeb22e43f4b"
  },
  {
    "url": "assets/js/59.3887bc5a.js",
    "revision": "870201473a0e6acd242052145483d090"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.5edee196.js",
    "revision": "0499a30fd1ed3ee092355af5aa5f2dec"
  },
  {
    "url": "assets/js/61.b367ef12.js",
    "revision": "4d4c4e66fa67a26ebfba3d21c74874e4"
  },
  {
    "url": "assets/js/62.893aadce.js",
    "revision": "b4d92975609795ebf07221fd2089f35c"
  },
  {
    "url": "assets/js/63.51d82fef.js",
    "revision": "e1fb8f55b720b342ac949cfd9a201a66"
  },
  {
    "url": "assets/js/64.c11e7598.js",
    "revision": "fa2197c2d70903c660c7eeef63dabd74"
  },
  {
    "url": "assets/js/65.84fc00eb.js",
    "revision": "020d666cad29536e8fc6ae70e15c4987"
  },
  {
    "url": "assets/js/66.e047e5c5.js",
    "revision": "056eb8e0ed918f492958de5b5099cf62"
  },
  {
    "url": "assets/js/67.3cd85d6f.js",
    "revision": "7ae853da42b827a42a34fe764293cd6b"
  },
  {
    "url": "assets/js/68.1bc0857d.js",
    "revision": "64fad75dd629c2ee6beb1b8453c4ea71"
  },
  {
    "url": "assets/js/69.4fa11af0.js",
    "revision": "17067659f145a754366743c8d229b07b"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.5a67b93a.js",
    "revision": "2958c74256882fce7d24758eff5a35cc"
  },
  {
    "url": "assets/js/71.3edf3444.js",
    "revision": "8ac20244d349ae96365f0168083c9d9d"
  },
  {
    "url": "assets/js/8.6d4ff2f9.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.13d7aea4.js",
    "revision": "41857b39f7727b5b9461e2b29dc1e825"
  },
  {
    "url": "assets/js/app.4e62aa75.js",
    "revision": "c855d36c7c598d847011f3bfbcf3c270"
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
    "revision": "1d27981ff80eb873e1abe147e1e64b54"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "4eaa94809b2698b2746ab440a2f145d1"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "8ae395a2d79703043e345e126471fee9"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "2245b9c8356a8781a39aa39b19467055"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "9d61f314f5b4ebe92166694f1c92110b"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "41e3bbef7f78141bfc61c3f93a0a01a3"
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
    "revision": "f493d7d3371bb8d7ca59bae26e8c8bca"
  },
  {
    "url": "other/偏激.html",
    "revision": "bbc1252ab95dadeb14483640a8545696"
  },
  {
    "url": "plan.html",
    "revision": "781d8017b96c44870308bf03b70cfce3"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "d2caa1b1b8d5fbc9765ce80d2a23ff38"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "2b1a17084123c842b7b4dde99283e690"
  },
  {
    "url": "projects/testhub.html",
    "revision": "e1aa77e8350286771edac4af67600e8c"
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
    "revision": "606ff8c713829e83daf4b11ade13171a"
  },
  {
    "url": "server/java/index.html",
    "revision": "61e6f49447850cc96f8a0332ba4d97d0"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "9bfe70db02bdcdc52c4a611996a64797"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "bb8ccc740111ada673dfc73b4a9ee8be"
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
    "revision": "2fcd492b0944469c2a37212632367b7e"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "a62715b2892f781297de8ae1cb4dc30d"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "d5853c334de3f0b44d9ebd4dd8c80489"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "ac804dbaa6c3a99dca479b51945f2c7b"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "d3dee9380e1e13d0257b4967a26c87ec"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "24ff848e83588ae34e8c3b1d6cd6bcec"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "2731133dfe3e305702cf35fe4e399cce"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "a09b51337be00b19ee22460d5ce54842"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "1eac6f4bf43abad11b644a3237a7f0d0"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "8bcf8460ff058a49d520b62086ed23bf"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "2672df17fa1c3f5aa221ce090285bba1"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "c2038a43c493bfaf17269e2fee5e28b2"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "39ccb86330da1768b1b2649ba4df53cf"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "ece572ede537e65697137e38b2055af1"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "39f4fad2a5e29fd8bc8fb586c0e177c4"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "a2d33a277c8a62f4232c26f09d417cdb"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "d40537cc81c38dc24101c155757ecb19"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "df27de4539f5f7dbe73dd0c3fae9ccb6"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "2c4e295503d1cb8ab50e38f05bc5b7b8"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "8a435bcf838776e7f2bb3af83df724a5"
  },
  {
    "url": "server/python/index.html",
    "revision": "518d755382775ccfdf46c31c3aec6d79"
  },
  {
    "url": "server/server/index.html",
    "revision": "637a3cdfa324ef7c4f24eccaa4e37e04"
  },
  {
    "url": "server/socket/index.html",
    "revision": "200824f41ed32f54893e260a8d624b25"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "659101bc870c24ab268077826fc9b4cf"
  },
  {
    "url": "tools/git.html",
    "revision": "496f5f99a2dad5343f6877f86549d823"
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
    "revision": "84cbd669f1c063cf6a27866d754f7b95"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "de050965508ae4ec2231e8a7307f2dc8"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "74d6ac33c6c302856cdc575166466058"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "44d2f52a6633ffffbedb4fe4dae1554b"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "ef30e32b09c541898296c68c26e247e6"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "de9e4933d7477a8e865ef099f418687e"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "29b7337001ade1ac8a54ac9eaf1c79ce"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "6368857ef8b462b02e7fa94092c4b811"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "ebb9019bdc6a491673ca438580ce5ba6"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "03d53a8ec57706d36e26d62a5bb05495"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "c9f887029e6e832c22146ed813dcb05a"
  },
  {
    "url": "web/basis/async.html",
    "revision": "2b4cc51435a532f616248f7a9d698613"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "b3ab9fc4c53d2fbc784fdfc4bf737259"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "2f4b56c66b059db8a5ba6be5f0bb0c97"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "3bb98d4728075aa8bf2fc0664aff2269"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "734e5935dc0cd53dd0b3eb581d1de116"
  },
  {
    "url": "web/basis/html.html",
    "revision": "7e7ca87361ba8794e8f78c22d2cc3063"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "59f5f428d4a1e04b5a611d0cf06f69a6"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "8933d299900e56b2c1797672af62dead"
  },
  {
    "url": "web/framework/index.html",
    "revision": "9d9548a74d1d455b4e12369fd9af5600"
  },
  {
    "url": "web/framework/React.html",
    "revision": "f95b505ea0e50c8c4fde1c77c7a6196b"
  },
  {
    "url": "wechat/index.html",
    "revision": "cb71d703e7e505e91362fb458341f9f2"
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
