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
    "revision": "63de3591e00280a94c8efaca2e562503"
  },
  {
    "url": "assets/css/0.styles.afc797a5.css",
    "revision": "e320cdb0d40a75434a410f6ec9fe4270"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.185fbb50.js",
    "revision": "d9ea9e7c15ff9fc11656f0cf71c9433b"
  },
  {
    "url": "assets/js/11.bce2d282.js",
    "revision": "66192c4397f0cee4ac88e278c91a73f2"
  },
  {
    "url": "assets/js/12.5988c581.js",
    "revision": "2d7d604a11d2d36c1843bebcc2927d25"
  },
  {
    "url": "assets/js/13.236c680d.js",
    "revision": "ce4956144fe2863cdceebf640d9775a3"
  },
  {
    "url": "assets/js/14.71f55978.js",
    "revision": "e788270f128f3468d99653e0b9a6a37e"
  },
  {
    "url": "assets/js/15.ab7deeb0.js",
    "revision": "ecc919febe76ed556e7e1023ce9b9e32"
  },
  {
    "url": "assets/js/16.2f53ad33.js",
    "revision": "22de57832e79dc19a15da750b4d6c916"
  },
  {
    "url": "assets/js/17.8c0ca6e3.js",
    "revision": "7b907e94c1223a657f5466d3b30e77cd"
  },
  {
    "url": "assets/js/18.2453d72e.js",
    "revision": "1012cf2bdbf96e93027409dfc4d42120"
  },
  {
    "url": "assets/js/19.0569e031.js",
    "revision": "40fcdf7b80ffc18e67784e028074b7a9"
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
    "url": "assets/js/21.13b8cf2e.js",
    "revision": "789cf94e36f306fba9055ce5d2a352d6"
  },
  {
    "url": "assets/js/22.90d94933.js",
    "revision": "bc75eebaa7dbb4bb434c54a81ae2e32e"
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
    "url": "assets/js/25.1fd6bbef.js",
    "revision": "2a84ce1437aea75cc0c504e130f30832"
  },
  {
    "url": "assets/js/26.e786d2d4.js",
    "revision": "89b17ca6c02d1ba25a04f6db57a078e7"
  },
  {
    "url": "assets/js/27.352b9335.js",
    "revision": "191b93ca6c6fc4b936a83db85075efca"
  },
  {
    "url": "assets/js/28.925b234f.js",
    "revision": "4bbb8fb4021dadded94e93087a86da82"
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
    "url": "assets/js/30.730c99a0.js",
    "revision": "e37a74312a50a3466a61da3feaaff82d"
  },
  {
    "url": "assets/js/31.9ef236f6.js",
    "revision": "3897ea2e3bab7557533d71b223624f19"
  },
  {
    "url": "assets/js/32.a4750492.js",
    "revision": "114fcaa294aeaa1ebd8fbdaefd163edf"
  },
  {
    "url": "assets/js/33.8b3c8ac8.js",
    "revision": "306fd71e19c23323eab478f36d20a85a"
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
    "url": "assets/js/36.e27a5b65.js",
    "revision": "2fe31064c5bcdd4d109980ca46c7c499"
  },
  {
    "url": "assets/js/37.aa34adb5.js",
    "revision": "6d89c251150d15f688f9c84fe4206378"
  },
  {
    "url": "assets/js/38.26761a8e.js",
    "revision": "0cfbd5caba7083c5d1502806690a8ea6"
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
    "url": "assets/js/40.ab5d694d.js",
    "revision": "dc99cb51d9a40bad65cd5db9d3cec759"
  },
  {
    "url": "assets/js/41.0314bf7c.js",
    "revision": "9f88ac5e786ad9ccfbd36011cb492013"
  },
  {
    "url": "assets/js/42.767c2cd8.js",
    "revision": "795f9c3765be977222f15176c0adefd9"
  },
  {
    "url": "assets/js/43.6e9ca9ed.js",
    "revision": "b9eb74b5aff795f2f2d3c4c8ccc347f0"
  },
  {
    "url": "assets/js/44.14686193.js",
    "revision": "5ca646a75fe94acecf94f3e46e1841eb"
  },
  {
    "url": "assets/js/45.6a1a0a44.js",
    "revision": "0e03ebc7a0e6948285e51330431606d5"
  },
  {
    "url": "assets/js/46.edbc7f22.js",
    "revision": "90386e38cf02469d0c0137d58a722b32"
  },
  {
    "url": "assets/js/47.30460174.js",
    "revision": "d22a083ca810f75abf731c6ea44ddc17"
  },
  {
    "url": "assets/js/48.a2c4af6a.js",
    "revision": "f6a4a521f8ead83e256b6f9cfca44b42"
  },
  {
    "url": "assets/js/49.4cb9c188.js",
    "revision": "06c260d6719337cd7cc1c5997c50ac33"
  },
  {
    "url": "assets/js/5.7e81b0c9.js",
    "revision": "830885768e0511b0037059fccf1c0e9f"
  },
  {
    "url": "assets/js/50.28683eee.js",
    "revision": "9917f372abc3dfc0dfe149745f00e08a"
  },
  {
    "url": "assets/js/51.5ec050ff.js",
    "revision": "4b09bab4b7115b3814371712e7fec02d"
  },
  {
    "url": "assets/js/52.a50d37c5.js",
    "revision": "4744685abbf3c34da697db21840a82c6"
  },
  {
    "url": "assets/js/53.d3c46d6e.js",
    "revision": "f129b97e736edb12b427436e652f7535"
  },
  {
    "url": "assets/js/54.830627cb.js",
    "revision": "d83e794ca662953d9dc8035aa691bb72"
  },
  {
    "url": "assets/js/55.72b16317.js",
    "revision": "63e3838f80c9656376619d42c2da81f0"
  },
  {
    "url": "assets/js/56.4a0a5d9b.js",
    "revision": "ec0239d16574d2a538a8c7f4fdaaf16c"
  },
  {
    "url": "assets/js/57.bf8282bc.js",
    "revision": "f3e360fccca2a2a22e14e567d0d52a87"
  },
  {
    "url": "assets/js/58.f7315357.js",
    "revision": "f6dc362b9f2dc0ba3650e2ae9dc03b07"
  },
  {
    "url": "assets/js/59.457f75e5.js",
    "revision": "1471b91eab140b4c2c45b603a65572f0"
  },
  {
    "url": "assets/js/6.13d81d02.js",
    "revision": "b7eaf7db508321c1e536c1956712c52a"
  },
  {
    "url": "assets/js/60.d26a34e3.js",
    "revision": "a3f309d92c82c64d0817fbf86ab2bb1e"
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
    "url": "assets/js/63.fe13c302.js",
    "revision": "4b0d9035d84d8638cdfb8e55bbb12a81"
  },
  {
    "url": "assets/js/64.70002462.js",
    "revision": "29fa38c8d3cd6f8232fe02c73ef84528"
  },
  {
    "url": "assets/js/65.a870c1a5.js",
    "revision": "23e7b87c93937910390765b945683809"
  },
  {
    "url": "assets/js/66.61a9c602.js",
    "revision": "056eb8e0ed918f492958de5b5099cf62"
  },
  {
    "url": "assets/js/67.4352acde.js",
    "revision": "a8ba907373774d8e92a7b5743c8a1973"
  },
  {
    "url": "assets/js/68.d489125c.js",
    "revision": "2a9bd6214a4439d409ee1481583047ed"
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
    "url": "assets/js/app.2d78c499.js",
    "revision": "38479a8116d52e208c50714938dcaea1"
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
    "revision": "52a7ac22d0a86467d0de9f217a3fc4f5"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "35a1076792742422c4f021fce322fafe"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "3e8f33c21450feec4192c86f0b50ad8c"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "6286ef3b3e54c1898c03fe923f8014f0"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "90fd1da661f450b2b101b25869a53fa2"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "8bb14827f799705e245e2de6391f0b64"
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
    "revision": "da8cc44141e4bf39372fa90f271e985a"
  },
  {
    "url": "other/偏激.html",
    "revision": "58a9ff23040b71566bd03d4a2b154dcc"
  },
  {
    "url": "plan.html",
    "revision": "49a6081439fb4600d8424f3bae458dd2"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "695922947d7fb530ab915bfb2dbaa570"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "02eaef8d14c381278d83ba57e99ce240"
  },
  {
    "url": "projects/testhub.html",
    "revision": "aeeed8a98cd91a56c4fe1e4b1db324e5"
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
    "revision": "61f43fae5bd874bbd36cd0f681e9d42e"
  },
  {
    "url": "server/java/index.html",
    "revision": "83739aec6ffe6aad5a4f6faf8b1bd552"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "9516db1aecaccf2631becc5d55ce9ea3"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "9480c7a2f234c87561b995c9468e259e"
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
    "revision": "b896039f2db37ea6d614ef829c80f216"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "33a611fa7c9db71c8e7b6aab6519eb41"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "8be4364615a8759da63dbcdaa51185dc"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "a8a0206ce947d34c567391b52375f813"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "73b9a384d692b129e2aabe12bce2122b"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "a810875d638e8d4f5ef5fa1c5a4b6630"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "44bcc625457915d73e481f5de501c261"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "3abb032308ea23776889f52ddd20bfd4"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "bc1866f7844638e72b5d8b0853cf9fcd"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "b8856092da20eca3a818fc1ec7827445"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "fb95168fbafb581bfa553388be960e8d"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "ab2d5d9efaf1ba48c9108c97eaf44b0e"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "d951c12a969fda8eabdd128e24396735"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "ceb95c61aee788e18657c3eb2d1d6034"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "bb8ed4e8b0ac286c2287e9dd7f09616c"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "3881013bf8b2238ed86ccf5da9359bd7"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "b3838eb1ce3e5b035a83b73478e26505"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "5909223c5148c4f77d30de3f729cf364"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "148fe4212f6b3a2fca5448ae275f9649"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "cf81ea7250738e458d0fa52387dfc51f"
  },
  {
    "url": "server/python/index.html",
    "revision": "5d59e2af57876a17c6d22d8d749f2bab"
  },
  {
    "url": "server/server/index.html",
    "revision": "80273b7601fe78a08c031d7776df1951"
  },
  {
    "url": "server/socket/index.html",
    "revision": "4ec53492c0840893ce7612fe11f4dbd6"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "cbd5e8f5f02bbf7713f4d0233651ddc2"
  },
  {
    "url": "tools/git.html",
    "revision": "59d8b7b663231485a13ed36c875f3a0e"
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
    "revision": "c069d6dc496433fa02423ea2d1177ac2"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "f989e4db9cd177310434b79135e352d5"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "5ef0ffb0ac5b856f5d9593f1679aa27c"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "e08962928e9900599a3cd8a9c451c96e"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "965ec7114f8dbf33c2e9575dcf041f75"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "3c112823744c1351bd36acf2bc98184e"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "c6a0a79b157d255d73b26b77ac284081"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "9ffa1969117c8e6b643ce1f5ef8e9607"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "597de5a034187a018d03f1c74944c587"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "855e5d08789712d8bb6637b1a2b33bb8"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "defc3ea904d0564cf26e3a47e499e486"
  },
  {
    "url": "web/basis/async.html",
    "revision": "699cfb315da966a5844876b4e2ce217d"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "a7a9322622a7b62df343de3af11d023c"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "99d4868e3bb06b67a0560566aa5b05e1"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "18622456bf11317ae37286ef04cd84ea"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "0a59ec246f6db120aa46a88b8142481a"
  },
  {
    "url": "web/basis/html.html",
    "revision": "dcfc1f622ec6fc50cee1745dca913b8b"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "124cd15443af5c1867ede58509f1a8be"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "b5d744f862cc0cfd36f3ba46e865bf65"
  },
  {
    "url": "web/framework/index.html",
    "revision": "021d7900083ce08edf3afdc14baa9a5c"
  },
  {
    "url": "web/framework/React.html",
    "revision": "69338abca585120532dc5094a6b0469d"
  },
  {
    "url": "wechat/index.html",
    "revision": "cf4560e2622a23dd9cd220ffbf8b99b1"
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
