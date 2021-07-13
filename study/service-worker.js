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
    "revision": "d8d722ebc48345ee0d2efa798e9d4024"
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
    "url": "assets/js/10.78f5329a.js",
    "revision": "2f5a5c19485f8ca3392c1c847762ea26"
  },
  {
    "url": "assets/js/11.4d76891b.js",
    "revision": "917e46bf6a196231d16bd7e68a6cc2f2"
  },
  {
    "url": "assets/js/12.7c5554f9.js",
    "revision": "4e4272eeec4cafeb8a44c2e8d689eae1"
  },
  {
    "url": "assets/js/13.7ba2c049.js",
    "revision": "6a42174aa41a771df5f05f8902b7b088"
  },
  {
    "url": "assets/js/14.2da2333f.js",
    "revision": "4dbb7820951322764504693b9086720e"
  },
  {
    "url": "assets/js/15.b77d3ba5.js",
    "revision": "dee36bae82f3567754c2b2e8110eae83"
  },
  {
    "url": "assets/js/16.fc73b8d3.js",
    "revision": "59b6b0efb54f49f3f35b5d63dc02ea5a"
  },
  {
    "url": "assets/js/17.ca7db418.js",
    "revision": "81d58a20ba9a52d074e6271790e7e721"
  },
  {
    "url": "assets/js/18.4d55a71a.js",
    "revision": "3ea94bb373e22897589d9f1ac08e71e8"
  },
  {
    "url": "assets/js/19.59cdba5c.js",
    "revision": "b4495e6a36115ffcad21c6e410c58843"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.67ff930f.js",
    "revision": "812dedc31c786e45aebdd7c85510397b"
  },
  {
    "url": "assets/js/21.9cb2c389.js",
    "revision": "a9b05349e78f8b76c2ea28a87f4c5579"
  },
  {
    "url": "assets/js/22.9cbe3bb6.js",
    "revision": "2d0b3333643c003c5520184ff3c42a70"
  },
  {
    "url": "assets/js/23.3fdf3735.js",
    "revision": "20babde84b0cafa09599074e6ab53f2b"
  },
  {
    "url": "assets/js/24.4a570f26.js",
    "revision": "70ef8819a0da9cc9567bf5e0982e741b"
  },
  {
    "url": "assets/js/25.1792754d.js",
    "revision": "3989f459f754a9a63053cd63e957f230"
  },
  {
    "url": "assets/js/26.285d2773.js",
    "revision": "e1586e343adf614ff2fde18f16e76238"
  },
  {
    "url": "assets/js/27.6ec45d5f.js",
    "revision": "e47a11b2f027fe9b290da73448ea9a4c"
  },
  {
    "url": "assets/js/28.734d0328.js",
    "revision": "76c3d1eef4ccd5fc5a8e8dc8436745fc"
  },
  {
    "url": "assets/js/29.2dcf858c.js",
    "revision": "c6483cff88b9a2e4048c621f4f1e4155"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.eb4e0ebb.js",
    "revision": "999d3106550dd381e55928f214e69c3a"
  },
  {
    "url": "assets/js/31.c919fa0a.js",
    "revision": "304990351ab396014ea3f1f79aa01240"
  },
  {
    "url": "assets/js/32.a00319e4.js",
    "revision": "205c6b98522d3c47de24a348c2784173"
  },
  {
    "url": "assets/js/33.1f78cacd.js",
    "revision": "205ab1f6a330d50536fd6210ee8bd1c8"
  },
  {
    "url": "assets/js/34.b871be0d.js",
    "revision": "d01149f0d7bb80ac3b32865d6d1616e8"
  },
  {
    "url": "assets/js/35.9b849c3d.js",
    "revision": "d1ba5edbc73de69afa86e0b5e5f03e3f"
  },
  {
    "url": "assets/js/36.8090c84a.js",
    "revision": "a414dbaa834a10c1e0a31d256d341d74"
  },
  {
    "url": "assets/js/37.a9dd05e3.js",
    "revision": "f292d5b38b1dfb4c8e8a8add09dbb235"
  },
  {
    "url": "assets/js/38.54e3fb3c.js",
    "revision": "50ebd1cb5d8800945dfd4a7915d3fd65"
  },
  {
    "url": "assets/js/39.88ebbd28.js",
    "revision": "13bab6406f4d693f04147dd086cf9072"
  },
  {
    "url": "assets/js/4.73435d7f.js",
    "revision": "966013c34df93779b24b90993e0c3e2f"
  },
  {
    "url": "assets/js/40.cf639651.js",
    "revision": "c5dc5c4c23f44584499816bc9237d73d"
  },
  {
    "url": "assets/js/41.a9c66854.js",
    "revision": "e958e91be95c5afd6c5afd7f150938eb"
  },
  {
    "url": "assets/js/42.ce7b2ed1.js",
    "revision": "07f4e807a044d1057908cefa56268233"
  },
  {
    "url": "assets/js/43.b5a31857.js",
    "revision": "a8980f1207079ed82115ffe7a70d846a"
  },
  {
    "url": "assets/js/44.0cbfa38b.js",
    "revision": "f1cffd41fb6cfc0fa09c7fee89950d68"
  },
  {
    "url": "assets/js/45.486c7657.js",
    "revision": "90f520096602bdae4b2f0a8c6d85810b"
  },
  {
    "url": "assets/js/46.7452b5e0.js",
    "revision": "509ff0d31333a2304280aa7275bd14a7"
  },
  {
    "url": "assets/js/47.12e309ff.js",
    "revision": "44cc8b16560ef6b74d7137c1dd54261e"
  },
  {
    "url": "assets/js/48.b08a7f56.js",
    "revision": "0e7a33e04fe759427004acbdae110cc8"
  },
  {
    "url": "assets/js/49.bb630d82.js",
    "revision": "7fc086910111aa30f369b1c1d8bda6c2"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.968506de.js",
    "revision": "8bef3bbc4a21ee6f70ccc42748b3f85e"
  },
  {
    "url": "assets/js/51.8c811358.js",
    "revision": "15ab93e5a9330a57991135430a6a121f"
  },
  {
    "url": "assets/js/52.38848cc0.js",
    "revision": "46a99bcde76c22663b177488fcf098a5"
  },
  {
    "url": "assets/js/53.595ade3d.js",
    "revision": "5dc3d278821b93ef2e519ce1beb8d741"
  },
  {
    "url": "assets/js/54.ba7276a1.js",
    "revision": "f86692c2d7964878aa9bb39289f45260"
  },
  {
    "url": "assets/js/55.c12a81e9.js",
    "revision": "70e19b487c2de203cd69224450ecf231"
  },
  {
    "url": "assets/js/56.6dc7b930.js",
    "revision": "0a5cdd94b26e1b873f31a108c9f70eec"
  },
  {
    "url": "assets/js/57.afcd2b50.js",
    "revision": "209544e5385aa310aae92de4ad9d5061"
  },
  {
    "url": "assets/js/58.91a5f10c.js",
    "revision": "c888934fcdafaee06d036a5c44d2e8bf"
  },
  {
    "url": "assets/js/59.b16c9aec.js",
    "revision": "53412398f17af9ccf9864b9a8b112859"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.8d934fa0.js",
    "revision": "edd63cb28208a00ae95a8ba0dd5a407f"
  },
  {
    "url": "assets/js/61.181bbf04.js",
    "revision": "2a4ffd6754d47d067fde62923db4778d"
  },
  {
    "url": "assets/js/62.d6f9224d.js",
    "revision": "98866766cb7bc3a5ed618d5ed878abab"
  },
  {
    "url": "assets/js/63.8c12a097.js",
    "revision": "24bce31380aa76b8d0ec91e010d475a3"
  },
  {
    "url": "assets/js/64.d8d96cbb.js",
    "revision": "0045949577729cd75124caf9b47a0cb2"
  },
  {
    "url": "assets/js/65.3fc26a7a.js",
    "revision": "ff469291c874dfb9c782fbc89d54174c"
  },
  {
    "url": "assets/js/66.e06c4997.js",
    "revision": "7a3a26f125ac1cd0080423d46567bbef"
  },
  {
    "url": "assets/js/67.3e7482a0.js",
    "revision": "258c7529b6e903717b90d0bd6b594c08"
  },
  {
    "url": "assets/js/68.0c44bb07.js",
    "revision": "6a01cdf055e9470b7950041ce4ad2afe"
  },
  {
    "url": "assets/js/69.924c3f22.js",
    "revision": "f029b7970f271597b5ef30eae661eeb2"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.828c30e6.js",
    "revision": "1eea92f54cab194c2a59bb5f29b189ea"
  },
  {
    "url": "assets/js/71.f69ddafa.js",
    "revision": "5d519692e4a3fe9ff5480a7998bbaf3a"
  },
  {
    "url": "assets/js/72.638d8525.js",
    "revision": "355405f84987a83fb33ed2a74a4e575f"
  },
  {
    "url": "assets/js/73.46455d59.js",
    "revision": "262171c94fa74bc8d0ac17a9cf4f25f0"
  },
  {
    "url": "assets/js/74.87027c92.js",
    "revision": "d183ca5ba427ee8bb50bc367334b4f6d"
  },
  {
    "url": "assets/js/75.230aa115.js",
    "revision": "fe234afd58f2cd4464fc59146a86ee45"
  },
  {
    "url": "assets/js/76.d2aeef4a.js",
    "revision": "11ba37d12b222954c98ca56f738a48db"
  },
  {
    "url": "assets/js/77.163009de.js",
    "revision": "5084fff936b38f797741d71c56b698fa"
  },
  {
    "url": "assets/js/78.224a0a00.js",
    "revision": "7c23d836f9882753e3a839d44d965ba2"
  },
  {
    "url": "assets/js/79.5048872a.js",
    "revision": "198a0dcd61c18ebc333f0f75d3fed3d9"
  },
  {
    "url": "assets/js/8.6d4ff2f9.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/80.b38015a4.js",
    "revision": "edaaa2e050c82e64225b90c3d82b7dbb"
  },
  {
    "url": "assets/js/81.f69a4b4e.js",
    "revision": "685df516dd5648f395e35a76131eba92"
  },
  {
    "url": "assets/js/82.15e895ba.js",
    "revision": "d8ea2f327e2d6f133641dd5cf1cbba58"
  },
  {
    "url": "assets/js/83.86b682d7.js",
    "revision": "bceba759bee0dc9dd2c7313eb9d9bf56"
  },
  {
    "url": "assets/js/9.b9f9ad5f.js",
    "revision": "e77e9177379abd533194eb70f6f34ba6"
  },
  {
    "url": "assets/js/app.15594702.js",
    "revision": "a259e30109529800c30a18c92f8721eb"
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
    "url": "course/imooc/index.html",
    "revision": "11eab144ce5934834cea75e227724422"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "b2edc81e33dc073a52aef5dd30a1dbb9"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "ca2b1a365f8557a25b3a2a55576154d8"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "8c0c4b8200b2d285d61412a786cab7eb"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "32df8fe1ecc762f58414eb0dfdb9ecba"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "7c6323a0f2ab624001b3dadae7b3b90e"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "9ead18974a5a2b6daad72a4cce277212"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "b436b031680c486f9d76249eb8cb2a80"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "f08ae05d4d1f55c5ac2004f662afa336"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "e088eb742a2f730b23b5d39e378bc545"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "8e89fe2031763098669ab2470d7bfcb9"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "5bd774fafd6153b14dcd7e01dafacdb1"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "fdd5abddcf7847d3ab53412372971c95"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "c375ec45988b012bd97f81d04517470e"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "75ddbb8485be4d1846495b4dc90af0d9"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "a5e3785e667cabe64190d7453314e425"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "a6526685495e508cb413be3c625b8e3d"
  },
  {
    "url": "lagou/event-loop.jpg",
    "revision": "34fd442793faa9a8003d31533e44a856"
  },
  {
    "url": "lagou/plop.png",
    "revision": "a608f6c7768d37cf4a7b0243531c896a"
  },
  {
    "url": "lagou/prompting.png",
    "revision": "e155900aef4a22d4eceeb573b09a066b"
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
    "url": "other/偏激.html",
    "revision": "4aef7e5a92e7cea6d86343f1aeb1bac2"
  },
  {
    "url": "other/upset.html",
    "revision": "4478bee54324b17e066f191635759f30"
  },
  {
    "url": "plan.html",
    "revision": "107b635938f40fda59e74ead64945075"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "a93259ba4617d73aa3f8d20e8ff6aef2"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "ed4baed732d9299a2b7fbf523f826ab9"
  },
  {
    "url": "projects/testhub.html",
    "revision": "9dd22f9e8e10c16734d698a1250e75ff"
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
    "revision": "e9a124a7e240ebe8824ddabc90d1004f"
  },
  {
    "url": "server/java/index.html",
    "revision": "d674016fbc0a933b2d601ca3a3238c69"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "5aacaad1c441b3d39078f85cdc656c32"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "83585ac5d11a94f07b3ceb2bedccf8e2"
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
    "revision": "138495759c2c239fbd3af87a6556ca06"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "f21eaefddf9152079b94ef537f5ded96"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "d1b1c2de78d681fa5b4c53f29d22537d"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "02b6c19ca946ef5bee97e2122bd936aa"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "96e5b4646a853b3809479a23300618b9"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "b723f85866c2d05aa05c1de94ad0b864"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "4fec3c5ad1919bf80817d121299f1a3e"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "78955f3d7811b6bcc10dccd1b3543d21"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "990bccde239ae74e863805bf68d490b7"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "e5375328900ae99caa560676b3638211"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "c9c70bfed41259ffe43644747a39aed6"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "92cf25543cad461389545c88a0dd2c5d"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "9488275539e14d66bd6860f9625ffaf8"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "77246eda5c31265974b07ab7a386214d"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "411931c397ddbc66badef51ea1a3c75e"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "760ad9e6f9a00e1f939eb4dde5d850a2"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "5c1c3f4eac3cef22bd83da90187d462c"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "690e7ac8160d500e22d600a1c3a1f875"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "8b406ba55e242299cfdd2f93c49e562c"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "4b5d263bbe308f9c00b48a3c445e12e6"
  },
  {
    "url": "server/python/index.html",
    "revision": "f4d98299a410980e79339876eab77858"
  },
  {
    "url": "server/server/index.html",
    "revision": "8d44bd087f1f32ad8cecfe87ea52ffcc"
  },
  {
    "url": "server/socket/index.html",
    "revision": "8b5a587ba0736dc6c571bbd84dc7731c"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "ed0301b1bb289738437073c74728c7c1"
  },
  {
    "url": "tools/git.html",
    "revision": "ead2de38aa4e4fbba78c43831b8aa760"
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
    "revision": "aa07ce8463048e8c625af5141e0dfb8b"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "435e0a72e09829d85b2ed1e7292ffd15"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "a27a87e7d75f6b5584f930cad640a703"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "1cd943e07235a93158bb5f132e9ac88e"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "aa37ac8a8bccf81714e1225a814b4879"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "5cb8d7b28893c2b89475d6d74f956260"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "fa304f9670542db64a33eb0bb348d468"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "28ac3d7bb6158f19b303c9732fae814d"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "3df1a5f576e9a96162adafa1fd8929b2"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "42ab9cfd82a9e5202b9d5dc84ad15d0e"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "bf8fa67443c9adb8b8864153a2c30686"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "a49411b24d2f370b22d71b14072186b3"
  },
  {
    "url": "web/basis/async.html",
    "revision": "1af1d534ad767690d9acee0696305885"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "9275a65ba8d2964ee55f107c0e1fb80b"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "48aade158c074f265972ac5f1a01d588"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "d3bd58c99d698fb2a7015e6bdd63d446"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "3f07738fa9020f087c74f74faf605c77"
  },
  {
    "url": "web/basis/html.html",
    "revision": "d95962b4874bdc1cfc412efd5a1c67da"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "9c8be585855c0aa997437397ec0c64c2"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "f71b34e9e6eddc844b90695f6d93868e"
  },
  {
    "url": "web/framework/index.html",
    "revision": "8ab86daa3132f9d6c03251d6add2f58a"
  },
  {
    "url": "web/framework/React.html",
    "revision": "fbce2fb804fd38014e5e6c38e4ef7b17"
  },
  {
    "url": "wechat/index.html",
    "revision": "fda6112146bd42952687da7bc9976134"
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
