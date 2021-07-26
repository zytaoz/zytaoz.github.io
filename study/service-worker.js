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
    "revision": "c37a75c049eed53977f4eab35ae0c88f"
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
    "url": "assets/js/10.30d17643.js",
    "revision": "d7a254541f1013516eb3bb839715437a"
  },
  {
    "url": "assets/js/11.4d76891b.js",
    "revision": "917e46bf6a196231d16bd7e68a6cc2f2"
  },
  {
    "url": "assets/js/12.49dbd016.js",
    "revision": "84c1510023d63d8218298716e3acbb99"
  },
  {
    "url": "assets/js/13.bebb9d09.js",
    "revision": "798b3646bc4976a0d7cd5058f9d52935"
  },
  {
    "url": "assets/js/14.107ab701.js",
    "revision": "8700233de432332574ba2d7b31c220ea"
  },
  {
    "url": "assets/js/15.b77d3ba5.js",
    "revision": "dee36bae82f3567754c2b2e8110eae83"
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
    "url": "assets/js/19.17e1db06.js",
    "revision": "961b1f3b8bae01204f7f02cabcfe23ba"
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
    "url": "assets/js/23.8b9bfeca.js",
    "revision": "c866d797770c71b108abc8fbf0df4459"
  },
  {
    "url": "assets/js/24.3ca38a72.js",
    "revision": "a64dfb7028d4bd94d3bef8f6898069b9"
  },
  {
    "url": "assets/js/25.77c497b4.js",
    "revision": "8ae6348a058dc3cbd90656b52258bb25"
  },
  {
    "url": "assets/js/26.701ee6b1.js",
    "revision": "29cb605b6d8fe7b28dd698fbb96e68e6"
  },
  {
    "url": "assets/js/27.bbeb2b32.js",
    "revision": "3a4e2eb4b62bf2ddd671135d34b0bed7"
  },
  {
    "url": "assets/js/28.734d0328.js",
    "revision": "76c3d1eef4ccd5fc5a8e8dc8436745fc"
  },
  {
    "url": "assets/js/29.21925cf0.js",
    "revision": "55bd231e46d55020da2bdeeb93f08866"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.ded4b8a1.js",
    "revision": "775b6814d09c0a205111b2e2f838263e"
  },
  {
    "url": "assets/js/31.c919fa0a.js",
    "revision": "304990351ab396014ea3f1f79aa01240"
  },
  {
    "url": "assets/js/32.ff16484f.js",
    "revision": "fd8d990c50b46c2f5c560875011a244f"
  },
  {
    "url": "assets/js/33.93534b31.js",
    "revision": "da2af5e50af6780fa1596271c8e4d823"
  },
  {
    "url": "assets/js/34.7fd6d6ce.js",
    "revision": "4e1f9110a33829e07055ff3caf0ce1a0"
  },
  {
    "url": "assets/js/35.ca75ae6c.js",
    "revision": "cb8b2355c3f8f7a6b580d913f16b1642"
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
    "url": "assets/js/40.9932f95b.js",
    "revision": "ff4e7e4c295bd3b4b9ca4aba4ff79636"
  },
  {
    "url": "assets/js/41.c889fb17.js",
    "revision": "78c0f8dbb7a668529609500d0d5bf37b"
  },
  {
    "url": "assets/js/42.ac8de288.js",
    "revision": "f450533b6644d81996e66ab2e91d6f02"
  },
  {
    "url": "assets/js/43.1e017988.js",
    "revision": "8c2dd5d75b489b0606ed95854bd33d8b"
  },
  {
    "url": "assets/js/44.28774be0.js",
    "revision": "ed2a875b5935fb41785878b3692d5dd3"
  },
  {
    "url": "assets/js/45.77bd670f.js",
    "revision": "956db50ba3608fa95291c896e71d0817"
  },
  {
    "url": "assets/js/46.d0e3fbfe.js",
    "revision": "b54c0316c373277a3c42f42eb53d7b1a"
  },
  {
    "url": "assets/js/47.6a3f7759.js",
    "revision": "46fbb6b094ae39bf60bb2ebb7fcae24b"
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
    "url": "assets/js/5.9dd0c11e.js",
    "revision": "830885768e0511b0037059fccf1c0e9f"
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
    "url": "assets/js/59.12b9e05e.js",
    "revision": "1655ab9f18853b86c54c6f8f6b3cf861"
  },
  {
    "url": "assets/js/6.a403a684.js",
    "revision": "b7eaf7db508321c1e536c1956712c52a"
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
    "url": "assets/js/62.a5abcdd0.js",
    "revision": "d93362d9179c14b0505ea3c6e5419e8a"
  },
  {
    "url": "assets/js/63.3331aadf.js",
    "revision": "a5ab8d7054d6aa4b8de586538793eed7"
  },
  {
    "url": "assets/js/64.d8d96cbb.js",
    "revision": "0045949577729cd75124caf9b47a0cb2"
  },
  {
    "url": "assets/js/65.e312c972.js",
    "revision": "0467a0dee8c05855e40fd043b7f0e0d5"
  },
  {
    "url": "assets/js/66.01e0fbb6.js",
    "revision": "2d85c1026d7eb4662863074ceab501cd"
  },
  {
    "url": "assets/js/67.279811ba.js",
    "revision": "f1818b9e8f931c779b4b9b07d3564181"
  },
  {
    "url": "assets/js/68.ebad1419.js",
    "revision": "2ea7bd0c01add7d769bf3d2edb573ac5"
  },
  {
    "url": "assets/js/69.3f7ee72c.js",
    "revision": "d56a8a7c55b71a0e0abc5011771a7f51"
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
    "url": "assets/js/71.f01b3fec.js",
    "revision": "1655638008f9900ba9514bcc2dbcaeb2"
  },
  {
    "url": "assets/js/72.b405eea4.js",
    "revision": "c953425b2d86c27758e40083ec1b3fc3"
  },
  {
    "url": "assets/js/73.d053ceb7.js",
    "revision": "6a1981f91aba5b78e623778fe173d1f5"
  },
  {
    "url": "assets/js/74.87027c92.js",
    "revision": "d183ca5ba427ee8bb50bc367334b4f6d"
  },
  {
    "url": "assets/js/75.bc80eb5e.js",
    "revision": "168380e4946e4d18719349532e84a432"
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
    "url": "assets/js/80.172a1d86.js",
    "revision": "095575f9b39cd9e44ddac4e5014ed36c"
  },
  {
    "url": "assets/js/81.a7c30012.js",
    "revision": "fc91470c98aa0be7a568acd54105d690"
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
    "url": "assets/js/app.4d0e6d23.js",
    "revision": "155d12257d626d5509160105e3157025"
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
    "revision": "79f38b03dae9e2c955a14d11ccb6651a"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "3c7cfda34bf18c5b226268494b525d1f"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "5622660f9acb786746da73476a8b89c7"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "781adabc8ab7ca991ee5d1eb111d736f"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "3323b600a451b833d433c312ce402e7d"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "4045eb7615a2912592b51f657644e677"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "abc150e7abd87fc070ad9beb92a34094"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "9eb5c503ba53f5af184246f61df9d785"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "723a03d2a31ccc2d90f167c0b975f9db"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "73fbf5c668a13ccdc848041d0a3ba34b"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "218a501393b49770821f439a1889f720"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "1567badd45198b9a8af3c44c613d70c6"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "56f823631bd7b2e6584cd914fe720aa7"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "26270539a7a8df4d027c7084e4298688"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "901b655e2e1624607b4e8bc952fad997"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "c57fd060a24c70b3182e42d6f33fc346"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "c0cab471e99383269f9d1ab14de4160d"
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
    "revision": "fb400f3ae30c878f6f6c395abe1f7841"
  },
  {
    "url": "other/upset.html",
    "revision": "0b693166a6da9817ec43cb4bf3517fa8"
  },
  {
    "url": "plan.html",
    "revision": "9c10cbaf92a1ac664c83078069c9399e"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "a551516342138f9dab33605e2e5031be"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "2bc05b59354cb4ed055c5c0ef2f3e3f4"
  },
  {
    "url": "projects/testhub.html",
    "revision": "7514df96cb2ae643425b860f4ed87945"
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
    "revision": "21831b79a68086494d25178c25c29796"
  },
  {
    "url": "server/java/index.html",
    "revision": "d8b9a9c3c26f351f2f0784806f9ed7b4"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "d953a928fa756ccff25b5f0e09424c13"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "c9ff2c029ad84c9501bda2dfd8abc48b"
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
    "revision": "3c94b302a025db864935ccf2f30bfe54"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "77eb8bde757c8bcd231b8ec3fab20cdd"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "4d29631a9a3cac2ebab77e2191e4ebcb"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "25e33458eb4faf24313e9367330275e6"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "0d64f3049a8472ebf6c567cc1b2eec57"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "c581e626452bd62645c8ca056ab51ec7"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "88ca6ac4f7378b990473a8fce853789d"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "881faf6fdf325211236de7fe2420fbd6"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "c3143d288433eebb91c18c9e15690e69"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "464bd42417117edc2952e26d5abb71d2"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "70faf21c316d7399aa14fa63ee9b00e1"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "beb500550b8e253106e4f4ef420ae176"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "95b61e2374e427cf6a879d70deaac51e"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "31598f656c0ea634728709635b7d3f41"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "325737bc1d608cc380524f8e0e334039"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "f5bd61ce0379bb7204de61361f75b016"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "b2c00fc3d560bf0e9ae412700afc089a"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "2e843a5d7d0430a4f0505ec640739ea6"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "34430d45c919ec5801a9b2ecf4be9c27"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "8093a150ca84e80525d852612f25632a"
  },
  {
    "url": "server/python/index.html",
    "revision": "7ed94679367b5a7cf40643b8845fa58f"
  },
  {
    "url": "server/server/index.html",
    "revision": "80ae110027315d2b4047b9441162743d"
  },
  {
    "url": "server/socket/index.html",
    "revision": "818cbc5fca303a9d2914263bc872c6a4"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "82cc8ed0b0763323289becf97ccb278f"
  },
  {
    "url": "tools/git.html",
    "revision": "8ff08a7c8dc7243dfc2f76d6fd9dc123"
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
    "revision": "c2bdc1d4525d44a44927d8764dd767e3"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "2ac2c30cd77f776cdd576519ae3b76e9"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "696a5284b2860eec64005fd4097c8854"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "58ed3eade57ed0780fe105f5aa7267c1"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "19e127cda348a55ad451ce17d5cb87a2"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "d8309e44699f17f461a5e8127ad001c7"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "dc382d2d24fec221994f4690e566e07c"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "fff20579bc2d65a480ca4b5daf43779f"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "2969c03e5756be88e16a550d6d0295a8"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "f263c9398624e704f71138d239b361d9"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "66c7ea42500ceb96cf5d993474ca278d"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "68b98367408f4cc69f9fc8a5e0b27e68"
  },
  {
    "url": "web/basis/async.html",
    "revision": "14b5c821955d9c878e0986234fe70e00"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "15dbd9d516d13ef5833b23ad2ffb39c5"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "95e5d80a771e7b6c38e827381c874eb0"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "ff4c77d9c30d964bdfb0cdf582ba86b1"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "9f30bae850818320127c7413c04c0f8b"
  },
  {
    "url": "web/basis/html.html",
    "revision": "3fbc60081f6c64d3bcf6d600cfd6b206"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "823d88ab99eed3b8db0e78891ad897b9"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "d609f8fdbacfff8f8ecb563c6eeed0f0"
  },
  {
    "url": "web/framework/index.html",
    "revision": "e7c8a2e1b3f33e304f8c94209b38c09c"
  },
  {
    "url": "web/framework/React.html",
    "revision": "e574d747780766578cd5f3d236a7df35"
  },
  {
    "url": "wechat/index.html",
    "revision": "ea5810ef309e5db39c1321e6aaafa81a"
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
