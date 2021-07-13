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
    "revision": "2e928b65ef8c3a25cf3ff1c2f97d717e"
  },
  {
    "url": "assets/css/0.styles.67dc0cf7.css",
    "revision": "ba1823a7bbb9f907b1ce3e7f11ffdde8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.090a9934.js",
    "revision": "663875395612aaf67ca216c19cb435c0"
  },
  {
    "url": "assets/js/11.0e184b22.js",
    "revision": "b2c0295a8c99344df4c51af20f166737"
  },
  {
    "url": "assets/js/12.8d183791.js",
    "revision": "3b8b0b87dffa61e836ff5c6426619d49"
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
    "url": "assets/js/17.37e2fcad.js",
    "revision": "b2437c7a109030535493b1e5c129fb25"
  },
  {
    "url": "assets/js/18.c7d4bb19.js",
    "revision": "4871d65afac706509b286fee1ce7fcdc"
  },
  {
    "url": "assets/js/19.17e1db06.js",
    "revision": "961b1f3b8bae01204f7f02cabcfe23ba"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.09473bcb.js",
    "revision": "22a2572b747a431f148f1ef4549187e2"
  },
  {
    "url": "assets/js/21.9cb2c389.js",
    "revision": "a9b05349e78f8b76c2ea28a87f4c5579"
  },
  {
    "url": "assets/js/22.b7e15cdd.js",
    "revision": "b5c3ed02a4cf3c5f2763344cb3d5ce84"
  },
  {
    "url": "assets/js/23.dbd5bdcd.js",
    "revision": "522216d9d56a5fff81f59b0737435999"
  },
  {
    "url": "assets/js/24.3ca38a72.js",
    "revision": "a64dfb7028d4bd94d3bef8f6898069b9"
  },
  {
    "url": "assets/js/25.3e184091.js",
    "revision": "230b88fd0add2b87fcd9c06dbdb5eff6"
  },
  {
    "url": "assets/js/26.285d2773.js",
    "revision": "e1586e343adf614ff2fde18f16e76238"
  },
  {
    "url": "assets/js/27.99ea1b97.js",
    "revision": "6cdad7af2337bdc6f848da4beb7a7bc5"
  },
  {
    "url": "assets/js/28.dbac8c32.js",
    "revision": "f869beb72bcd6a451db9e3fdc5e909e7"
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
    "url": "assets/js/30.a1ae3eff.js",
    "revision": "16c77b90b0ee87f7fa1ff9746732fab8"
  },
  {
    "url": "assets/js/31.b9816c57.js",
    "revision": "5bc7da1e9503fbfd19746580b2efba2d"
  },
  {
    "url": "assets/js/32.4a25b53b.js",
    "revision": "ef2ac1eca67c33d4839547e930a01bad"
  },
  {
    "url": "assets/js/33.f26136e8.js",
    "revision": "19ae4d82569a90fb8d01da52140f52f6"
  },
  {
    "url": "assets/js/34.2a386b54.js",
    "revision": "ea5556301dd6486f89f570ee1646396d"
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
    "url": "assets/js/37.af3d09db.js",
    "revision": "f952535c211f8814ae93032b356b4afe"
  },
  {
    "url": "assets/js/38.113fd379.js",
    "revision": "bef8eb0266a79f5b67d6b98dcf3bcfaf"
  },
  {
    "url": "assets/js/39.3a0bb154.js",
    "revision": "3ed3692fbd1d52f5ce6617da37dee9dd"
  },
  {
    "url": "assets/js/4.5ebb981d.js",
    "revision": "fa8a7d978b9ee9a2a1473a18a40c334d"
  },
  {
    "url": "assets/js/40.213bf288.js",
    "revision": "cb6430ac1f9062eb0f962d202084609a"
  },
  {
    "url": "assets/js/41.c889fb17.js",
    "revision": "78c0f8dbb7a668529609500d0d5bf37b"
  },
  {
    "url": "assets/js/42.ba2e1286.js",
    "revision": "fdc50f6b9e30495c7919248cf0219b34"
  },
  {
    "url": "assets/js/43.b5a31857.js",
    "revision": "a8980f1207079ed82115ffe7a70d846a"
  },
  {
    "url": "assets/js/44.9e329160.js",
    "revision": "89f3c237d9ab8e8b6fafe973399c8080"
  },
  {
    "url": "assets/js/45.77bd670f.js",
    "revision": "956db50ba3608fa95291c896e71d0817"
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
    "url": "assets/js/5.6beab8ec.js",
    "revision": "24329d4a824053a6aa5447fb796059ed"
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
    "url": "assets/js/54.7221f883.js",
    "revision": "ba43b2f0e8a33a971cd3b0ff29f0b3d4"
  },
  {
    "url": "assets/js/55.9927a1ab.js",
    "revision": "471270b01308939122ad22e5227b403a"
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
    "url": "assets/js/61.f5ad9981.js",
    "revision": "d54c2d8e42fe73d5c3c58c98bb94c3d8"
  },
  {
    "url": "assets/js/62.a5abcdd0.js",
    "revision": "d93362d9179c14b0505ea3c6e5419e8a"
  },
  {
    "url": "assets/js/63.49d5e7f7.js",
    "revision": "dafde30d75e6313275e03bb2e646b8f1"
  },
  {
    "url": "assets/js/64.e15161fe.js",
    "revision": "d34a893f7a519c1600a6cfa8964f4df3"
  },
  {
    "url": "assets/js/65.3fc26a7a.js",
    "revision": "ff469291c874dfb9c782fbc89d54174c"
  },
  {
    "url": "assets/js/66.01e0fbb6.js",
    "revision": "2d85c1026d7eb4662863074ceab501cd"
  },
  {
    "url": "assets/js/67.03ee66e9.js",
    "revision": "1e66272724375a3bd741d95ad1e93032"
  },
  {
    "url": "assets/js/68.0c44bb07.js",
    "revision": "6a01cdf055e9470b7950041ce4ad2afe"
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
    "url": "assets/js/9.3d55f185.js",
    "revision": "65abd76d4f37c5dd8fae83d68c9aff39"
  },
  {
    "url": "assets/js/app.3763bf50.js",
    "revision": "9ba2ae10a29b2c9d80032e5fdbd1c3ae"
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
    "revision": "34692f4b3229af7542e9a5e6083e1c61"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "aab86346dcdfe8b8570f7d552b75e0a1"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "97dd647c28aa0032f51a28ed4b243b0b"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "1fcb24b57450b38170ae4c5a4d410922"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "5784f9be8fba8a98a57d75e334fbfbc0"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "8855ca62f4ace08eca0757ba2fa05929"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "324d2aa5246021ebe2f5d92e15533758"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "ca2c3aa20761c77767ad6fd93b4d630a"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "da91b6b9cfbe952ce64debb94ac45b90"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "aaa36e30e9f18ba5f02cda900c3566ed"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "770581c29d55f6583a46cfcf2603a8b7"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "fc6f52e84eb3c46711482127bd8e8cd5"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "aa6b8dc20606ace96a135b6bafa8dfa5"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "d6111d771896cef9693019d102f0b1d5"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "5b93d9b72fa8db2b398d4006b425c9b9"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "eb2d5baffac75d648dfc8d5f9867b5c6"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "47a0fc89e91c2636195113d8874c86c8"
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
    "revision": "f0f2a4d7df9241b51abbe4c2937d3591"
  },
  {
    "url": "other/upset.html",
    "revision": "fc1d4642055da6d943205985dff0ee99"
  },
  {
    "url": "plan.html",
    "revision": "e212566ad37ea576de69d28228a51c7c"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "60f3c79bd7df3614a716ab78e491098b"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "dfd646cf91fa2feda44d6b6db937bad7"
  },
  {
    "url": "projects/testhub.html",
    "revision": "0920e7fbafd8501cdf14d5231b973dc5"
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
    "revision": "04a7ade6affc8f9a1275461063b4e6e7"
  },
  {
    "url": "server/java/index.html",
    "revision": "3fedb034d26944276e7d3db3297cd038"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "7aec2fe7ac1a1f401eb9083131be78bb"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "f9f340937e10a97f356e479d5dfb3a4c"
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
    "revision": "aa14176e167775c11918cee149071770"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "d159201d0db2a516717f31e57d513570"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "0a7f410dbd3f97a39c952e94548eea63"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "51c86fd2684c74813f73d4e67a357cd4"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "eb299b2cfc30033bbfdf532097ca91f4"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "d80d5956136da19d813cbd3e4f30d883"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "d5d1e6a3f400c500057c708d703f5e59"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "33ebdd021adfac8f2310faf0238ef385"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "1e4f2b4c13ddca486e8cfab67641710d"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "abd6e86bdaf69da4d54ca821b8f3c63b"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "fa65fed8fb13dd12c7130b6a5497fb02"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "417aafdc7dac2a7ad6ba3b4ddb484b77"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "2b4cfaffc74bc2f48a1934bd8a76e2f9"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "d53409303c408e3ad434990d0f55c1eb"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "df955ed660b1e57080ef3111758e225d"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "6bd2475dec5a6bb08cc87cc0399f7e1d"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "67320cdd4e59fc99009722c68371d685"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "8cb70eee5f42390ae21f8f46b2418ef7"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "83bbcc27c3c62ae8694eb08d2624e136"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "e6055d082d1d5e39c7c76c51d3d79409"
  },
  {
    "url": "server/python/index.html",
    "revision": "281c3bd9cb8bd6d0d9ff8191d4ac519d"
  },
  {
    "url": "server/server/index.html",
    "revision": "08f3a888d4ddad9c2433306cc4f2ed6d"
  },
  {
    "url": "server/socket/index.html",
    "revision": "9a042eab3d91652558532e53607717c0"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "4c147cbe736ad18120115dc9ac9b346a"
  },
  {
    "url": "tools/git.html",
    "revision": "965a42ddd7656a58ba549e289dfb8a86"
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
    "revision": "bd3db3155b5497da2a6b5e099eb0c3c1"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "cd006cb7db206828df906fe6980139be"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "092b9705093e83e323284c9683cd588e"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "dd38298bc07dfe8fc9a560d512bf7619"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "8e2cd85dc19bacee2c69f8a33fad4c54"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "7f419670745614e767a44b2d7ae7a066"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "a62b4f71fa1cd44df9e3367c36f9bfad"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "6c33156ea5815dd255e1ff8325a9e15b"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "81f653a4f792c9eb61108acabbf634c3"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "8272035c483477838f14b84d085b6c39"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "a67bd7663cba6d1513a433249cf83201"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "736540ae52ac83bdfd833b666c97edc7"
  },
  {
    "url": "web/basis/async.html",
    "revision": "6367dfb92c957baa3a921d5ced993a59"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "ee89c7069065797b00d81e4903f39792"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "a87628c97695ff347d7e53b13fc75461"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "c9e0e37152c0ee7267c38b43e57ddea0"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "de11d63b05c96f6a73b54286a10e7846"
  },
  {
    "url": "web/basis/html.html",
    "revision": "56047d78f8201abe598d69193991dcc8"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "276d38294ee62d4f8dcc19da90af682a"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "b011eafb3bc4cfa5aeec474b04d61cc3"
  },
  {
    "url": "web/framework/index.html",
    "revision": "260e155a521071f235106d6a62300cc1"
  },
  {
    "url": "web/framework/React.html",
    "revision": "9908ca09e2f259e5c09b886447a01105"
  },
  {
    "url": "wechat/index.html",
    "revision": "ea92c3b9d140b09d48faeba5ffa478dd"
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
