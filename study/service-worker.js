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
    "revision": "8863c4b53b8f400a265c59add9bd1a35"
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
    "url": "assets/js/10.62389779.js",
    "revision": "4747f2c947e7bd18972d2f36cffec6b5"
  },
  {
    "url": "assets/js/11.8628933b.js",
    "revision": "8b4ca82e2ea589a384ff3c773adccd38"
  },
  {
    "url": "assets/js/12.e9e54ad6.js",
    "revision": "461b74a46ec3a49a4a418c2ad14b3d0b"
  },
  {
    "url": "assets/js/13.5f00a7a3.js",
    "revision": "ce4956144fe2863cdceebf640d9775a3"
  },
  {
    "url": "assets/js/14.c37cb6fd.js",
    "revision": "30e7439825ccd53702cdc88f3e3ebf78"
  },
  {
    "url": "assets/js/15.165b3592.js",
    "revision": "682843e7b7fa9f52fe88f53df27406cf"
  },
  {
    "url": "assets/js/16.6fc46c46.js",
    "revision": "7a82b0c2c4adf27e089bb70b43cff726"
  },
  {
    "url": "assets/js/17.caa7cbb3.js",
    "revision": "cbc15b5dd2cbd9ec5674802f3fe699d6"
  },
  {
    "url": "assets/js/18.969915be.js",
    "revision": "d37b719a5fc3af025a0958e6d35b0af9"
  },
  {
    "url": "assets/js/19.e107ae1b.js",
    "revision": "40fcdf7b80ffc18e67784e028074b7a9"
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
    "url": "assets/js/21.e50225bc.js",
    "revision": "39bbfd0df7508193a16dfa65a80b5a44"
  },
  {
    "url": "assets/js/22.1a2ee99c.js",
    "revision": "bc75eebaa7dbb4bb434c54a81ae2e32e"
  },
  {
    "url": "assets/js/23.2af48015.js",
    "revision": "69c02599eb2d1994955331cb6026e039"
  },
  {
    "url": "assets/js/24.ee98fe63.js",
    "revision": "cea6fac0ab678ae80d588fb91cf913aa"
  },
  {
    "url": "assets/js/25.332df11c.js",
    "revision": "2d696ec602cb76799c4ba695fcbd7c9f"
  },
  {
    "url": "assets/js/26.14f1f077.js",
    "revision": "3e3b9d94b0726eb8d30a1f3f5f2daee1"
  },
  {
    "url": "assets/js/27.bac551f8.js",
    "revision": "e2d4d6d5632a9af89ef2d616d0eed85e"
  },
  {
    "url": "assets/js/28.887fc9b6.js",
    "revision": "89c1dc2a03e90ccfdee0fb83be07c2e8"
  },
  {
    "url": "assets/js/29.cc10457d.js",
    "revision": "e87ffc20bc2113426f64de045960d501"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.061ace00.js",
    "revision": "9464bb46ca00c6ecac01fba96b1fd1ad"
  },
  {
    "url": "assets/js/31.3c874b15.js",
    "revision": "3897ea2e3bab7557533d71b223624f19"
  },
  {
    "url": "assets/js/32.cd3066ad.js",
    "revision": "3465952580a10dbe813ee4412e9d3b01"
  },
  {
    "url": "assets/js/33.b198f25d.js",
    "revision": "fc48283aa1fae9c9bf069e33e936c591"
  },
  {
    "url": "assets/js/34.b00bdf40.js",
    "revision": "64105b7dbf495603f151c92b47b6cc80"
  },
  {
    "url": "assets/js/35.7755069e.js",
    "revision": "39c6648deeea75499054166791edfeb9"
  },
  {
    "url": "assets/js/36.67927bea.js",
    "revision": "beb5b970929d0aa5dacb017ba3c2ddf3"
  },
  {
    "url": "assets/js/37.044ae236.js",
    "revision": "e10f8a62be9368254c012d2a9d7996cf"
  },
  {
    "url": "assets/js/38.048d9bd0.js",
    "revision": "3a26eb2fa514345ad13e1674b3d97f7b"
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
    "url": "assets/js/40.687e757e.js",
    "revision": "eac32ce3d4e897ce98c513d470de6260"
  },
  {
    "url": "assets/js/41.f1ae78d2.js",
    "revision": "445a696474c4cab7610b00335b0947de"
  },
  {
    "url": "assets/js/42.4b5d50c2.js",
    "revision": "53b5395ebb9bfaad4912ed66fb694a54"
  },
  {
    "url": "assets/js/43.7fd75d6d.js",
    "revision": "6737a924272f3fccdc05a9ccb3d1bba2"
  },
  {
    "url": "assets/js/44.01bf312b.js",
    "revision": "5ca646a75fe94acecf94f3e46e1841eb"
  },
  {
    "url": "assets/js/45.ad10bbeb.js",
    "revision": "b2cf4baae941ed68bb2ce104b438d055"
  },
  {
    "url": "assets/js/46.1328435b.js",
    "revision": "90386e38cf02469d0c0137d58a722b32"
  },
  {
    "url": "assets/js/47.28d42156.js",
    "revision": "9fa1d18acf6f753277721a1afcc327a6"
  },
  {
    "url": "assets/js/48.cf6e3cfe.js",
    "revision": "a82b065f2ca36238e001ed8f82770358"
  },
  {
    "url": "assets/js/49.81b63e5a.js",
    "revision": "7c9922ccb0944cf2f2c383f14d624093"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.454d8f72.js",
    "revision": "d4b9511e4749526c687b0c02d5ede370"
  },
  {
    "url": "assets/js/51.91b929a2.js",
    "revision": "c8b947493c10d173975b7e22ce5de8db"
  },
  {
    "url": "assets/js/52.956ded14.js",
    "revision": "59f8339fce1450436db3f69396f0307e"
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
    "url": "assets/js/56.2a2a7d9c.js",
    "revision": "b985c52b4e5365cb15f64426a282d04b"
  },
  {
    "url": "assets/js/57.f9e85f4a.js",
    "revision": "3835a5b8055fe00d02f8875c7fa942e2"
  },
  {
    "url": "assets/js/58.b2629bc2.js",
    "revision": "fb68f1e3943c8b07710f2631268d83fa"
  },
  {
    "url": "assets/js/59.d94e4542.js",
    "revision": "5ae6605f374146c2db388adb558e93eb"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.6c6cc889.js",
    "revision": "cb90ef30d8eb80c957576ebf40c69f74"
  },
  {
    "url": "assets/js/61.3e86a79a.js",
    "revision": "cb4f125a23259c6abb478f91c35f55b4"
  },
  {
    "url": "assets/js/62.06893f85.js",
    "revision": "c38adef401edbb467d3e93ce77f49706"
  },
  {
    "url": "assets/js/63.51d82fef.js",
    "revision": "e1fb8f55b720b342ac949cfd9a201a66"
  },
  {
    "url": "assets/js/64.7477d5d2.js",
    "revision": "29fa38c8d3cd6f8232fe02c73ef84528"
  },
  {
    "url": "assets/js/65.d17ea7ba.js",
    "revision": "6b9870b5f2fc06680ed8874d83141749"
  },
  {
    "url": "assets/js/66.01750b70.js",
    "revision": "797318d245c486983e3048754468232d"
  },
  {
    "url": "assets/js/67.12cba7c7.js",
    "revision": "1d1f4b1a88839fc66631465bee5b79f1"
  },
  {
    "url": "assets/js/68.27507bcd.js",
    "revision": "2a9bd6214a4439d409ee1481583047ed"
  },
  {
    "url": "assets/js/69.25c56dea.js",
    "revision": "59ace2a496c7b0a3d003f021eb525383"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.f0c18bc9.js",
    "revision": "39b9a0e5cb134ae28dd96fc7ca8c616a"
  },
  {
    "url": "assets/js/71.3edf3444.js",
    "revision": "8ac20244d349ae96365f0168083c9d9d"
  },
  {
    "url": "assets/js/8.6237b39a.js",
    "revision": "9a46e70947b4bca4d298fb3a146bf9ed"
  },
  {
    "url": "assets/js/9.d40e19d7.js",
    "revision": "3a21a4456e14f25781a63e7b3f1d4156"
  },
  {
    "url": "assets/js/app.e3b68e98.js",
    "revision": "021c27a39f0a6fa6427d275134f391f0"
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
    "revision": "c89ea6ce2600279b786379e070acd045"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "2b69d2a5955cafe6404e797ad5351d99"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "13b44ee8124f94dc191c118fc983b078"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "d3342eaade3946718196f955789f9d78"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "d9785f1dd07babaf201e63f7d5d4e372"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "3d34969cfb25e14d332b2920a0289aac"
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
    "revision": "2e81b48f86670ba45de9082cccfa4182"
  },
  {
    "url": "other/偏激.html",
    "revision": "8e28e307b970da0136d5b5119c7b7efe"
  },
  {
    "url": "plan.html",
    "revision": "0e52fc872b3ad283a6fc93be11e5bb00"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "a99038aeec46ea6c1fce8c15d0f87257"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "0663eef9e28e72274dd8cf859b3d1a3b"
  },
  {
    "url": "projects/testhub.html",
    "revision": "a5a6595d3d660be0ba6119d454a2781e"
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
    "revision": "e5817b9beed4652387d3db662354d96d"
  },
  {
    "url": "server/java/index.html",
    "revision": "a7d017bdfa5dff4669f49cb772aabea8"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "de420c80ce355a6fe1e492046def7705"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "85cf8e43be31730a9f745c902e4767ab"
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
    "revision": "9533c89758b919baf9878fdfcd97a107"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "a884dea2d80fdc1a53802b62dbeb334d"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "495b1452724b8f0c05be0f1eb27c1b65"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "008c44db5f9b7355e580785ad1cb475e"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "355d2cca2c3ecb3bd751e776a6a4ead0"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "e7485a36f3ccc5cbbb0f29a2c131c9c9"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "a8f995a75f2e7f44a2e10b0ccefb1877"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "d18da47bbde75c4a9338e67c22874003"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "09b7d82aa66e7b4b5e5662c2b80ce43b"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "59f0a9047bbf2ab85e923a338c107519"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "84ed09d68ab74f32f3cee0197f2a8b92"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "4c39cc3cda382e0d73de0f7f23a97273"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "1596e8bc3750f5a5e6f23524cb34a3ce"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "a5c6a0894c84762a631722dac2050c92"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "b2e6438783eae6cd19967337a4ddd5d6"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "a3e80f31c72ccb86573caa8261ae87e9"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "f2425727ab84f108c2d02697b14dfb6a"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "c09dc7db4ebc3ebdba98d1889edab246"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "0e4dbc4c131ce20778e37c593f36b0ed"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "10dc16272c044a4c28f0d8a59f39dc4f"
  },
  {
    "url": "server/python/index.html",
    "revision": "43f7c71bcbae45b74039e9ce2509b0dc"
  },
  {
    "url": "server/server/index.html",
    "revision": "f783b81c8aeaa02e6b69c24934efe96f"
  },
  {
    "url": "server/socket/index.html",
    "revision": "4c674a8ada4e350f8cda701da463e876"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "0c611a79a2cce2d05be0d8ea2d551525"
  },
  {
    "url": "tools/git.html",
    "revision": "4ad65ec73d95d9d6bf295949a8d85b29"
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
    "revision": "e3660445dc1cb41116d185d7efbf4d8e"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "636ef91ca75bc4d25c3c11a7b59b9a0c"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "bc0d1a9444e5764c2da0ee37beaeb186"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "de9451bea888bf5a848269ddcf52a36c"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "af1f66298196ee1f91f2cc28c5a8951b"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "fa50cb0ca5a177c13ac805735825197d"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "981326e7ee85a90b9f5677e1d7f0b7f4"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "fc773f8ac58cb32e50b87a7ee7c04c65"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "541da51aac0564ea506afca2acc1858b"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "96f17e584a6aea50ac5c31a08fa8f7cb"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "546af937ba324744c88b924b3ff57ada"
  },
  {
    "url": "web/basis/async.html",
    "revision": "e97f4c004d9995344535eafe4f3acd79"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "c4a3dd13ba923621387c5e5236ac7c34"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "e7e230f1ce274896c1e4115f5762bbf4"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "84977ea436e4713a246626e47127ff2e"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "f7f708ef18e1f2438d8aa169dc280f96"
  },
  {
    "url": "web/basis/html.html",
    "revision": "ffe6906df84064e0ffda9cc5fd9b19fe"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "948f1319daf1308f429961b8e5ce0e6e"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "e0dcb18a8cf047a049606f7b18017e3b"
  },
  {
    "url": "web/framework/index.html",
    "revision": "6f167178f5b1c62a2ceb2dd6ce9459cf"
  },
  {
    "url": "web/framework/React.html",
    "revision": "448e3820061f68b65eba680225f0bed2"
  },
  {
    "url": "wechat/index.html",
    "revision": "15219ef6704f963a4886221c06a2358b"
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
