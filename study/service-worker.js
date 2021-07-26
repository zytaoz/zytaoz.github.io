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
    "revision": "358dbe02246c6e6a76e0c5c5f8c451b2"
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
    "url": "assets/js/10.30d17643.js",
    "revision": "d7a254541f1013516eb3bb839715437a"
  },
  {
    "url": "assets/js/11.0e184b22.js",
    "revision": "b2c0295a8c99344df4c51af20f166737"
  },
  {
    "url": "assets/js/12.49b8c613.js",
    "revision": "4094b76ebd6eb527a87027701d97686b"
  },
  {
    "url": "assets/js/13.bebb9d09.js",
    "revision": "798b3646bc4976a0d7cd5058f9d52935"
  },
  {
    "url": "assets/js/14.59eb06cd.js",
    "revision": "881e4ee7c417c96a2697caf0b92d43f5"
  },
  {
    "url": "assets/js/15.380c41e0.js",
    "revision": "0f4602f4afbaff94a9e2d0ae5af159c8"
  },
  {
    "url": "assets/js/16.5ea238ab.js",
    "revision": "c5548244f014bf0a4e715dae871bf041"
  },
  {
    "url": "assets/js/17.69515e27.js",
    "revision": "e9a51a16ba74f996cbf710620cb16282"
  },
  {
    "url": "assets/js/18.4d55a71a.js",
    "revision": "3ea94bb373e22897589d9f1ac08e71e8"
  },
  {
    "url": "assets/js/19.c534efae.js",
    "revision": "80305a8ee0eb5fb551cbaebd647b9af1"
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
    "url": "assets/js/21.f52b2891.js",
    "revision": "03364800f36e65f1588267d593ca68c2"
  },
  {
    "url": "assets/js/22.f8d612ac.js",
    "revision": "06fe1a8083210abc561f2838762bfa33"
  },
  {
    "url": "assets/js/23.8b9bfeca.js",
    "revision": "c866d797770c71b108abc8fbf0df4459"
  },
  {
    "url": "assets/js/24.744725d6.js",
    "revision": "e3f639e5abd1b38d044cd3aea4f367ca"
  },
  {
    "url": "assets/js/25.e382e0af.js",
    "revision": "7f59b4d5fd7d333cfacffcb402eacd6d"
  },
  {
    "url": "assets/js/26.6a93ff71.js",
    "revision": "f64b5261e2ff413219b3b655884392f1"
  },
  {
    "url": "assets/js/27.bbeb2b32.js",
    "revision": "3a4e2eb4b62bf2ddd671135d34b0bed7"
  },
  {
    "url": "assets/js/28.02eed295.js",
    "revision": "b8736cfa0992e1affb1a511a016cce47"
  },
  {
    "url": "assets/js/29.54b9e739.js",
    "revision": "2e8eb2e010f6847e7a23bd9db6ce5bb6"
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
    "url": "assets/js/31.3021b1f1.js",
    "revision": "337f428bae6424a4803c191e25bc858a"
  },
  {
    "url": "assets/js/32.a00319e4.js",
    "revision": "205c6b98522d3c47de24a348c2784173"
  },
  {
    "url": "assets/js/33.0633dd40.js",
    "revision": "364effb06645449632b4299d32335d1a"
  },
  {
    "url": "assets/js/34.b871be0d.js",
    "revision": "d01149f0d7bb80ac3b32865d6d1616e8"
  },
  {
    "url": "assets/js/35.b0f5c54a.js",
    "revision": "6cb35912a28bc44bb04b895a92ee1dfb"
  },
  {
    "url": "assets/js/36.30135d88.js",
    "revision": "b67b4e73e176b079dab176e009d06daa"
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
    "url": "assets/js/48.677dd27f.js",
    "revision": "3af7f253e0f8cfdcf1935a379124e2cb"
  },
  {
    "url": "assets/js/49.c016a086.js",
    "revision": "0a64ddf0e99ccc2c593f6a861d1bcdb5"
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
    "url": "assets/js/54.df70a057.js",
    "revision": "30079b48dde0d928c7131bdf1648c3af"
  },
  {
    "url": "assets/js/55.c12a81e9.js",
    "revision": "70e19b487c2de203cd69224450ecf231"
  },
  {
    "url": "assets/js/56.3d219b1e.js",
    "revision": "8382c5621e89e1b76d0ba2a29af857e2"
  },
  {
    "url": "assets/js/57.afcd2b50.js",
    "revision": "209544e5385aa310aae92de4ad9d5061"
  },
  {
    "url": "assets/js/58.b8a5b9fc.js",
    "revision": "8f65d3297af635ccf673ceb7422a4752"
  },
  {
    "url": "assets/js/59.122ee92c.js",
    "revision": "eca46c03b6dcfefd6307d60e72d1e0d0"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.93b27220.js",
    "revision": "0f9db318f8f4912c0ab13755bce46370"
  },
  {
    "url": "assets/js/61.f5ad9981.js",
    "revision": "d54c2d8e42fe73d5c3c58c98bb94c3d8"
  },
  {
    "url": "assets/js/62.3b8c0fde.js",
    "revision": "fbc1ca68df607023d1bdf738f25ec4e7"
  },
  {
    "url": "assets/js/63.3331aadf.js",
    "revision": "a5ab8d7054d6aa4b8de586538793eed7"
  },
  {
    "url": "assets/js/64.1f66c729.js",
    "revision": "2fb01fb6931ec3c1e4d12e7fa028e8c6"
  },
  {
    "url": "assets/js/65.e373203c.js",
    "revision": "e3d0cf1abf7998fdcdd76d95a50d3696"
  },
  {
    "url": "assets/js/66.4fc5e900.js",
    "revision": "5d52e573900bef034207ebe617e7af37"
  },
  {
    "url": "assets/js/67.3e7482a0.js",
    "revision": "258c7529b6e903717b90d0bd6b594c08"
  },
  {
    "url": "assets/js/68.a7dd2a14.js",
    "revision": "d1aa7f2b63cf10927d85b8369fbd1547"
  },
  {
    "url": "assets/js/69.22f4f594.js",
    "revision": "5c9db87260ba99a51c5ef0d2cc2a97c4"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.ace06448.js",
    "revision": "066ae0fc4be4349f612f71673220ee56"
  },
  {
    "url": "assets/js/71.f01b3fec.js",
    "revision": "1655638008f9900ba9514bcc2dbcaeb2"
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
    "url": "assets/js/74.45a53908.js",
    "revision": "a5e81e71284ae35b1c2105a4fce96a30"
  },
  {
    "url": "assets/js/75.0378848e.js",
    "revision": "7eec1693ebe40bd1f0718521eac27832"
  },
  {
    "url": "assets/js/76.98660b94.js",
    "revision": "451366ad01e09d0269aa2482a24b4b88"
  },
  {
    "url": "assets/js/77.c49a97d8.js",
    "revision": "19a23962376492e70d6a1930b3f07b2d"
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
    "url": "assets/js/80.ed81f7ab.js",
    "revision": "15097fdb4e07b5e5be747d77455b58ae"
  },
  {
    "url": "assets/js/81.f69a4b4e.js",
    "revision": "685df516dd5648f395e35a76131eba92"
  },
  {
    "url": "assets/js/82.32ea900a.js",
    "revision": "6506118214613ede8f0734442387fb9e"
  },
  {
    "url": "assets/js/83.86b682d7.js",
    "revision": "bceba759bee0dc9dd2c7313eb9d9bf56"
  },
  {
    "url": "assets/js/9.3d55f185.js",
    "revision": "65abd76d4f37c5dd8fae83d68c9aff39"
  },
  {
    "url": "assets/js/app.a7c52cb0.js",
    "revision": "d8453164e55773d603693cb3d9730a37"
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
    "revision": "56f2b231e33e255a45deef8d11ebaa37"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "6ce98879f424a49fd400f6e9511ba58a"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "063c359f88af986b1f98aa70d62882f1"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "16c5dd285e1609e696422013184ea720"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "6bcf0ad8d79e4b9a5ffe5f0ca90bb59d"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "b2990f88274b13abb676048529c7f845"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "d5b823e86212eb1e4bb47d4a86a8f90a"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "2abe6d1124e7afb49f285cb9ac4c248b"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "428cbd112476acf43c5870d576f318c6"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "6ba9fa9fee582fce9182f06243aade77"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "1ce8882fe91de24857d59adf8f05d12a"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "146db120359f46570978ea725d8e077f"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "c36faa654a9a48e9fb98f6b02dd594de"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "59fd1e86cfec0c928b803ee92ae4b8ee"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "72a645d8e5e57fe67ff6ff9fd81d80d2"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "a212bd2565298925958dc5ba1994c1c8"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "359724d0faaa93d1779036f0f917cd24"
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
    "revision": "630f24567916b3584b1f8e56ce4dfb83"
  },
  {
    "url": "other/upset.html",
    "revision": "9633d16c5b6fb98add7d8e3904fdd503"
  },
  {
    "url": "plan.html",
    "revision": "0246f34360ea6c831d49762f73a54aa9"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "a0230c57cc6629021c284b0cb8885587"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "1ff71a55b01fb2590a73550e55af82bc"
  },
  {
    "url": "projects/testhub.html",
    "revision": "e70e3b5b47117721b902b8a01fbd6ac2"
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
    "revision": "beaf1b4cf409a82ccf3aead8d1c07f38"
  },
  {
    "url": "server/java/index.html",
    "revision": "be070da849c6accfe045b3c5e2b05f74"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "39a48b4bcbfdf85d57d54b965b8f7bf8"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "4a10a35ea7268fd831c36c960ff21256"
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
    "revision": "53d213f7bf8d80a03d7acd6deff8fe05"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "dd2065d46407669002bf09414c07b7d4"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "aa7faa5675a3e4a1cda8a52114b8c749"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "c3e7619121862c02a161d6b01e9edce3"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "ad44c8b1725d33c576138f0370443e50"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "845e7a3869e5cce826aefd30594a4e1f"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "8768b2a3f7e606de6b464b7732985c54"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "73f8c76965a5911d8deddc5acb082329"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "8bc19598b28b2776e2c385f4e57e73d4"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "99bb8222a708a57f323f9c3941af4396"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "7af718c5c63ebd2ccbbf13759f74c7a7"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "3628d4f1a155716ea0116e559f80405d"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "73c5b5480dc3f5442d0eff2ff8a473e6"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "41b85b32ee156595edb0940d78d3e9e0"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "ae0fc1f6724dc1c0c49c9e6afcd996e8"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "e7fa1b87d04573d7b2c3125a1e1b7632"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "9e6a0d54ebebb899e4b4d2f3f5e6524d"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "7ef55a22c4269c1a7e084ad66e35c126"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "8c8ec652d122203c353b650191cdce9a"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "765654f6e780d8d7b723ec44f5362f1e"
  },
  {
    "url": "server/python/index.html",
    "revision": "d1dccd0a2a207ae2a804d7f905756285"
  },
  {
    "url": "server/server/index.html",
    "revision": "e5d6b7cd1df74b91042a44b39a786496"
  },
  {
    "url": "server/socket/index.html",
    "revision": "237dd0f139998dfc9204eb3457fafd42"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "da82392258d445827134564438fabaa2"
  },
  {
    "url": "tools/git.html",
    "revision": "053427b3dcec2cba4a72537983152415"
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
    "revision": "e08810578f1113d31de19cb73a648b94"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "8124e9b7b48b7526f66ecb2f5cc4f22f"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "dfd048ed2e5d2358d36561aced8d0042"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "46e2aabf4aa07abdf2694113569a72c9"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "177007a58ac80e66a976419546c51785"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "7a97bca85892bd04859313930fc359ae"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "0b2ee61d2539c8beddbb5b8ab19a7bf5"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "b3500a85e18257a6bab02b833e0bf7be"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "fef06c7d7d181fb607816a3298a18326"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "bdf3309d43315009a83a882810f2a870"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "d1291435eff177f4882b18aac84bdc36"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "c2cd4c3fd2e7c592c5df885b15f51612"
  },
  {
    "url": "web/basis/async.html",
    "revision": "d215fb87fcb7ccfd5e60a029fbcd22b9"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "d175e148ec1837c62bda66c245113234"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "52a3869a7334363768697e2ec14da515"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "3aaa1582d0c824dda09b846b3415b821"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "c2285596faa4d50f03bcde54d388def5"
  },
  {
    "url": "web/basis/html.html",
    "revision": "c81f0b65f178488669bffc60d301d057"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "509288af1580993bd65d72843b6e2015"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "48a3b782a5491394377a588f54404149"
  },
  {
    "url": "web/framework/index.html",
    "revision": "7dc40e5609f4fcd144b977d9bb9f4147"
  },
  {
    "url": "web/framework/React.html",
    "revision": "70b4ad7246be4c60fe4d0cc6de4b8c16"
  },
  {
    "url": "wechat/index.html",
    "revision": "1482756f269556a86977023010cb2c27"
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
