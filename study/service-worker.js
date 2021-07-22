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
    "revision": "8cab701a54445a0b08f7799165bbed4d"
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
    "url": "assets/js/12.3255b240.js",
    "revision": "dcf524349b4f70c0fcd00bfd539e0968"
  },
  {
    "url": "assets/js/13.c97baec8.js",
    "revision": "95cd9224b738f57c73c08b92f818dd7a"
  },
  {
    "url": "assets/js/14.6cb28edf.js",
    "revision": "19fbc6d296fd6dabf1bcb57b5bf2f859"
  },
  {
    "url": "assets/js/15.b77d3ba5.js",
    "revision": "dee36bae82f3567754c2b2e8110eae83"
  },
  {
    "url": "assets/js/16.30c7ca46.js",
    "revision": "754ed9b788d5ab283f7e4090428ec6d4"
  },
  {
    "url": "assets/js/17.bb9dfd7c.js",
    "revision": "bc6958ad0be334c3a5b6681075672550"
  },
  {
    "url": "assets/js/18.4d27906b.js",
    "revision": "3d05f8b6d9060830e72470ab0f5f6779"
  },
  {
    "url": "assets/js/19.f5cb622b.js",
    "revision": "89abf34ab0f98c0c9871a9a194b26b46"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.41b9a129.js",
    "revision": "53231f16e16da6dbf8af071916d03faa"
  },
  {
    "url": "assets/js/21.20af3317.js",
    "revision": "96760cb839f175e0fd78d5ff3cfbbbf2"
  },
  {
    "url": "assets/js/22.bd8c0d66.js",
    "revision": "3325e64a21a41511c99d8bcb6ac85806"
  },
  {
    "url": "assets/js/23.232e235b.js",
    "revision": "8901783566f029e17b14e004ee8bdffc"
  },
  {
    "url": "assets/js/24.17fccc30.js",
    "revision": "32853ee1aea4005f703c3fa1061d9d65"
  },
  {
    "url": "assets/js/25.3e184091.js",
    "revision": "230b88fd0add2b87fcd9c06dbdb5eff6"
  },
  {
    "url": "assets/js/26.74f5e9a0.js",
    "revision": "0dabf4ee551116227a799d1ed63dc7ad"
  },
  {
    "url": "assets/js/27.9d3badf1.js",
    "revision": "f0fb39905bca3d2e38ab92430d656c7f"
  },
  {
    "url": "assets/js/28.734d0328.js",
    "revision": "76c3d1eef4ccd5fc5a8e8dc8436745fc"
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
    "url": "assets/js/30.e0aa3276.js",
    "revision": "f036d72b1d90c477f91de5ce89bc2c84"
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
    "url": "assets/js/34.93d41814.js",
    "revision": "d7fd80bd3386a88a48ee1ca24b278130"
  },
  {
    "url": "assets/js/35.9a25a95e.js",
    "revision": "c6d6a88e4d4fd3f5883a2c91624285be"
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
    "url": "assets/js/38.113fd379.js",
    "revision": "bef8eb0266a79f5b67d6b98dcf3bcfaf"
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
    "url": "assets/js/40.250074ab.js",
    "revision": "311bba0e29a94680c042cc2840cd90ab"
  },
  {
    "url": "assets/js/41.c889fb17.js",
    "revision": "78c0f8dbb7a668529609500d0d5bf37b"
  },
  {
    "url": "assets/js/42.aed18b92.js",
    "revision": "179cca09e8efe0cba77ae3f578c46951"
  },
  {
    "url": "assets/js/43.1e017988.js",
    "revision": "8c2dd5d75b489b0606ed95854bd33d8b"
  },
  {
    "url": "assets/js/44.b1066e7e.js",
    "revision": "4a1fea1f2cb8816942c298283bb098e2"
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
    "url": "assets/js/47.150ecc1e.js",
    "revision": "972ef24f7b61b422d60fee4a54569e01"
  },
  {
    "url": "assets/js/48.b08a7f56.js",
    "revision": "0e7a33e04fe759427004acbdae110cc8"
  },
  {
    "url": "assets/js/49.359645fa.js",
    "revision": "de13340455506c0c1f7f4d60d1fbf9e2"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.710bdb4f.js",
    "revision": "e75703f180e842375d2f36ed3f91bffe"
  },
  {
    "url": "assets/js/51.8c811358.js",
    "revision": "15ab93e5a9330a57991135430a6a121f"
  },
  {
    "url": "assets/js/52.d172ea02.js",
    "revision": "c7ea9107ceed19ff938ef0a352719d30"
  },
  {
    "url": "assets/js/53.e38231d5.js",
    "revision": "1f0708984f137c449d9e718ecf594a7c"
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
    "url": "assets/js/56.e142b01b.js",
    "revision": "0fec6a848123b6f9a21c8202e49b2ab8"
  },
  {
    "url": "assets/js/57.afcd2b50.js",
    "revision": "209544e5385aa310aae92de4ad9d5061"
  },
  {
    "url": "assets/js/58.0677b751.js",
    "revision": "9daad07772d13b9341d3efc909ea2666"
  },
  {
    "url": "assets/js/59.12b9e05e.js",
    "revision": "1655ab9f18853b86c54c6f8f6b3cf861"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.39c40321.js",
    "revision": "580fbb5010d803cd6a9b6bb2d4637b08"
  },
  {
    "url": "assets/js/61.21f839c9.js",
    "revision": "1a3ba560eefa45a702e4c1df53a33c62"
  },
  {
    "url": "assets/js/62.869bf517.js",
    "revision": "3ea280fa86c2bf92bb9d3b545c5e7f5a"
  },
  {
    "url": "assets/js/63.73a1a301.js",
    "revision": "f99fbecd4dbfe2c5390f1b6ed1fcf76b"
  },
  {
    "url": "assets/js/64.d8d96cbb.js",
    "revision": "0045949577729cd75124caf9b47a0cb2"
  },
  {
    "url": "assets/js/65.4c383c06.js",
    "revision": "127d719b27c4ff0a2212b8b49a5bb397"
  },
  {
    "url": "assets/js/66.aab012ab.js",
    "revision": "5d52fe21d02a70ab43af7e30b2774400"
  },
  {
    "url": "assets/js/67.6b4efae2.js",
    "revision": "ba38b9168b021cc9b47b27f7ea75fc36"
  },
  {
    "url": "assets/js/68.b93b652c.js",
    "revision": "3415e8c05c1d5d69d56ff88b6e1b61b1"
  },
  {
    "url": "assets/js/69.a33bfb00.js",
    "revision": "0a83eddcf4bf6a7101076e6bec4ea88c"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.b1574273.js",
    "revision": "4b00ae9755b47c1edd7f6d280a5410d1"
  },
  {
    "url": "assets/js/71.eab6beb5.js",
    "revision": "ba83c606a19772e9761a5c91a2d75975"
  },
  {
    "url": "assets/js/72.f551b588.js",
    "revision": "0c3b277c3da34abb75ed2487dbb9e492"
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
    "url": "assets/js/75.cf9aaa85.js",
    "revision": "257c98c2008a309f1f8c812e060a1402"
  },
  {
    "url": "assets/js/76.1cf7b7b4.js",
    "revision": "86f118d25c57f153f9c5ce9c1fa6e2f7"
  },
  {
    "url": "assets/js/77.163009de.js",
    "revision": "5084fff936b38f797741d71c56b698fa"
  },
  {
    "url": "assets/js/78.c8b3d66c.js",
    "revision": "a0e04dda2e5d4522099f59b097c6b558"
  },
  {
    "url": "assets/js/79.5cfd4cb2.js",
    "revision": "5fe98466ad4ded1fa48f72deb53430a3"
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
    "url": "assets/js/82.654ac398.js",
    "revision": "99d0693bfa7a10aeb10d9e51b0b9243f"
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
    "url": "assets/js/app.233fba3f.js",
    "revision": "3ef90dfc4d2cc990b96d9bb74613fa3e"
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
    "revision": "1913c4b3cb44f63d8f111b6702ae9569"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "56644a860c1befebd4907383cc8c34b7"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "057e6100345b3b68ad85bb8a02c8b40c"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "8421fdc66d29837f756aada5e49d8ed5"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "15fd17da7771c3e9efbda651410c5123"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "d206719aaa1bec3b5f6710dcdbb7d9e4"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "951c17c2f8db20b7e0ef94525a9318c4"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "7b8fabcdfd16717de2c182afb1c0c349"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "3c73bc8f2006a0d15f514cc9608acb6f"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "50652397d0a6ec58d58cb456a22948a0"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "f0c098145eed19acd2c4ba6d812327a2"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "298ed26106822a510654fba2b217794b"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "9d66668b74ca568c9dd0461e397b3bf6"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "639c82f0638dc45a73484d2e5636ca5e"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "187bd00a371bbc490d0593081715b1b6"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "02c2658fd94d37c5994f21cd77b548ab"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "28975908b5c54ff2fbfa94e763ae57fa"
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
    "revision": "fe565358905d5ffea06b3cf508ec03f5"
  },
  {
    "url": "other/upset.html",
    "revision": "0b18b322fc051e0f0af10a67eb722ee3"
  },
  {
    "url": "plan.html",
    "revision": "b7e1154b61d9fac3a3e76672908a10fa"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "480f06f8b425b9d2ffb42eb0a8120446"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "c7796b094a8f1a58ee05710645dd81ed"
  },
  {
    "url": "projects/testhub.html",
    "revision": "ca84380be6ab03dba13db9fd2a7c42b7"
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
    "revision": "5d836491308a160f7836b3a3821b1839"
  },
  {
    "url": "server/java/index.html",
    "revision": "9294d7199862c5df98d44b1af4f69c51"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "6aa3a237ca3bfbc5936f294f7349a851"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "c28d9dc92a50dadf998b7f05711ef789"
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
    "revision": "8ef189df4a993b128521739b9a7a736c"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "43e46c6d5c5b2175cfa474bdc59dd3e2"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "baffb4df18b4d67cbb71ae9c0b0a5b40"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "bb213b2a59c2dfaf2422021bef8e779b"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "4c369390bb9f9a442df140d62b5c6495"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "835e83670f0999318792db63343c8e46"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "44a6b614e740d4772dd5178e59fedfef"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "10068ddf0d07ebca58ee7066b99740b2"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "a44cf709f9f0dae2d454696c65330c4c"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "31349cd5e868eef79c90b11062760922"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "4b3b999c0eaa967a13115a32986e0e9e"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "c9510af3753a671c39f2ee5ca1c49e8a"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "6948b0e5e557451cf3df62c4840ed1a5"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "17a87d3e8d9d3f7a84a416fc1dec069f"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "70e618385e82869427c628b9c1959536"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "1c1de2151090cac53369f412221d740c"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "3e57f6ce766873a3631577b2f67b8de1"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "92a8bd36c78052bfaf0f9e9523083dad"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "f462863cffd6f7f6f90b19659cfe088e"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "cca5149bd02c3db5223082c96a2a5ce9"
  },
  {
    "url": "server/python/index.html",
    "revision": "50cd212cbd8bad709e0fd16448fc83df"
  },
  {
    "url": "server/server/index.html",
    "revision": "13c3fe9bb5ea623cfa05580b24fed8ff"
  },
  {
    "url": "server/socket/index.html",
    "revision": "b149540c5f82d5286fd50e1c03f48a15"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "34bb793d309d3a02a47566caa20fec06"
  },
  {
    "url": "tools/git.html",
    "revision": "c6ff80566df17e89630905cdcedb5aaa"
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
    "revision": "bcc16c046ee192d80e728d451dcc433a"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "e255b6db4cdabb37b1ed5dbd682b7cf3"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "21bcb6113a7ef62ecba2d589ffe80da8"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "34fd87d1d42e18d70211ff4d5333f4af"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "a44eaa7653aec1cccb158aead578f657"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "bbe8281cca9b6d1103579183606964b2"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "cdc0e795c80f2b705b8c731794305fec"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "a094af6f44e9eff0fc261a1f15d9953c"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "9dd6bb38f118dce7a0683421a2af539c"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "5dd123f5d6145a6d49f2cf83ab49c064"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "42963212f93c9d434f1625a3c55fbff2"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "5eee59f9bd2dcb3e6a2c267d8b595078"
  },
  {
    "url": "web/basis/async.html",
    "revision": "738c7fd4a78ef1f59f2ed0841aedf76a"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "9ef3c8415e3cea91f9cf0b667d16abb9"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "9f6290596ec118a1a97aceae82d350b9"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "77f1b03d2827a3000cacfd2132aa510c"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "9ea6cfb8caac510fc3c7d7a6c8a42ab0"
  },
  {
    "url": "web/basis/html.html",
    "revision": "9aa3e938de9da24c62f9fa0c6b816be2"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "253bbea69437e2f9e43e84424b8151fc"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "4ab41f3ff645b393835c18c48814d467"
  },
  {
    "url": "web/framework/index.html",
    "revision": "4e7d109f578301ebf574243b67a07466"
  },
  {
    "url": "web/framework/React.html",
    "revision": "f486eaec6d9397aceddac3f9c51d88aa"
  },
  {
    "url": "wechat/index.html",
    "revision": "7b8279cb2eab9b6cd3a52f003753240f"
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
