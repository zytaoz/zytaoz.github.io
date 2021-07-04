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
    "revision": "385820d18cf9af7f5d38352ffff463e5"
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
    "url": "assets/js/10.5df3a5df.js",
    "revision": "ca132dc107fca85c00eeed934fe5f747"
  },
  {
    "url": "assets/js/11.d861879d.js",
    "revision": "da489638daebee068824aba3a6f14532"
  },
  {
    "url": "assets/js/12.d84e4f07.js",
    "revision": "88d9d6f2b3bcd774f3826111b1c7d2ba"
  },
  {
    "url": "assets/js/13.d2390ec0.js",
    "revision": "d33c394805a63044b4c61a2a3528f099"
  },
  {
    "url": "assets/js/14.0dbe254d.js",
    "revision": "a6a323260f60fff98c80cdf9679c31a3"
  },
  {
    "url": "assets/js/15.209da004.js",
    "revision": "2d1a14cdbb7f1eb763bf1386bee8e592"
  },
  {
    "url": "assets/js/16.a21beffb.js",
    "revision": "8ab800eb44d89d40e8ca907e9104ee67"
  },
  {
    "url": "assets/js/17.fcbf5552.js",
    "revision": "253e544570891e50189388f9f4293127"
  },
  {
    "url": "assets/js/18.5c6f7335.js",
    "revision": "a91e8e89c20a5c5f54c6ceae0ec1db4b"
  },
  {
    "url": "assets/js/19.865588d3.js",
    "revision": "10d71c5c17f5667d7e6f501eb8d32905"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.5177df09.js",
    "revision": "19804026e0364284a6e4373165693063"
  },
  {
    "url": "assets/js/21.6c728553.js",
    "revision": "c46972a112f24800dff13e96843206fb"
  },
  {
    "url": "assets/js/22.8dc04520.js",
    "revision": "51850770421e3b0da78c22968d5f665a"
  },
  {
    "url": "assets/js/23.acfcef7b.js",
    "revision": "df7e7102faca232407297b58ec70fed6"
  },
  {
    "url": "assets/js/24.75ce64e5.js",
    "revision": "aae48124b0302fdf2b2d49087c0f7112"
  },
  {
    "url": "assets/js/25.ded22f27.js",
    "revision": "f36c9f112b295851e94aa74750fa09c6"
  },
  {
    "url": "assets/js/26.16a4a1e3.js",
    "revision": "b78b55b3c695ac37c463f948096ed820"
  },
  {
    "url": "assets/js/27.dced8f1b.js",
    "revision": "e827446b4a135224fcb1ee9ad88e3679"
  },
  {
    "url": "assets/js/28.40886ffb.js",
    "revision": "493b1efab56b2214d106142004e059b8"
  },
  {
    "url": "assets/js/29.f8856355.js",
    "revision": "79ef269a4f17ba95b679a364c92f5e70"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.032a7321.js",
    "revision": "2c070c63f299688c4becd0aaac3e135d"
  },
  {
    "url": "assets/js/31.c211a4e8.js",
    "revision": "717ef85bdef5ba5aa65b7a3522518576"
  },
  {
    "url": "assets/js/32.bcb0d8f4.js",
    "revision": "bc65ffa77f9f5e002e6f6afdce6bb1ec"
  },
  {
    "url": "assets/js/33.32424f33.js",
    "revision": "4677d575b32d3ac5aee26c42e1fb268b"
  },
  {
    "url": "assets/js/34.589f7e67.js",
    "revision": "cb5096cef2de5ae2af9a0effa165a657"
  },
  {
    "url": "assets/js/35.a5bfb6c0.js",
    "revision": "826a26590a849e2e53cc1ca29d22a75c"
  },
  {
    "url": "assets/js/36.9e8ca4a2.js",
    "revision": "8f7d02785cb781087eed982dffd4edbb"
  },
  {
    "url": "assets/js/37.c7e0e8a9.js",
    "revision": "b09f64d400f5bdadeb20869e8b756506"
  },
  {
    "url": "assets/js/38.1d79293d.js",
    "revision": "e327242119a9c4f178ea76291e554a07"
  },
  {
    "url": "assets/js/39.b0ce1186.js",
    "revision": "401a1a831676a6f6d7f09f9f5bd7fdda"
  },
  {
    "url": "assets/js/4.229959be.js",
    "revision": "f8edf922380f8c82f132d97d6d6e7e26"
  },
  {
    "url": "assets/js/40.ee596b0a.js",
    "revision": "3cc00dd8dc0625ffade0edaf54295c24"
  },
  {
    "url": "assets/js/41.403becf3.js",
    "revision": "cad4d38642fc04388f3a72bfcca82270"
  },
  {
    "url": "assets/js/42.30f8d19b.js",
    "revision": "b6ca26fe3f3a66c0e99427859d742242"
  },
  {
    "url": "assets/js/43.ae88738e.js",
    "revision": "5cbfc4abc1531377bbaa09aa11dc5d88"
  },
  {
    "url": "assets/js/44.5664a4c4.js",
    "revision": "60f13519f473a311b6206574445f5b0c"
  },
  {
    "url": "assets/js/45.a5fdc61f.js",
    "revision": "9376403a72a5e52d256349e37dd6fd6e"
  },
  {
    "url": "assets/js/46.9cd5da2c.js",
    "revision": "e22d6c201955146bdfca3ccd4e97d3e6"
  },
  {
    "url": "assets/js/47.6751c071.js",
    "revision": "9fe6110b4ca87cd30a4350bb288b2296"
  },
  {
    "url": "assets/js/48.8bdc8dc0.js",
    "revision": "969d12be06629f19d1efdbea9386155a"
  },
  {
    "url": "assets/js/49.1af1c873.js",
    "revision": "5405bcb5fd851c6662bf48957c40c976"
  },
  {
    "url": "assets/js/5.9dd0c11e.js",
    "revision": "830885768e0511b0037059fccf1c0e9f"
  },
  {
    "url": "assets/js/50.517ff135.js",
    "revision": "a73eaf7b37beb0ec87d1c4b3bed99248"
  },
  {
    "url": "assets/js/51.8077d5c1.js",
    "revision": "3c2b7b45d5ecc47aab425931e87c6523"
  },
  {
    "url": "assets/js/52.1b2a4509.js",
    "revision": "f0f679f9a06fabbda81a4df38cf39e04"
  },
  {
    "url": "assets/js/53.388ab143.js",
    "revision": "5bd0f989457b4e4ff3238525967a9d15"
  },
  {
    "url": "assets/js/54.7e965846.js",
    "revision": "b1d899ad1be9fb08d6420b6939f4e20c"
  },
  {
    "url": "assets/js/55.3566d216.js",
    "revision": "ddc5cd01c8a293ccca5b7eb457d887aa"
  },
  {
    "url": "assets/js/56.6775d10a.js",
    "revision": "e2bd8fad161fc2d832ed187218dce278"
  },
  {
    "url": "assets/js/57.00cd2b25.js",
    "revision": "5d4d0aae8e4f67cd303694b5e35de60f"
  },
  {
    "url": "assets/js/58.b9d87d98.js",
    "revision": "73179f2ffb61e713bae12e822d4d16f6"
  },
  {
    "url": "assets/js/59.1aefbae5.js",
    "revision": "8176e4d8ae3b12b788b556d2ed83dce0"
  },
  {
    "url": "assets/js/6.a403a684.js",
    "revision": "b7eaf7db508321c1e536c1956712c52a"
  },
  {
    "url": "assets/js/60.32eae69e.js",
    "revision": "c1121fb7ee9b153e45664e2f41281c5f"
  },
  {
    "url": "assets/js/61.4eaf2fb1.js",
    "revision": "a5601c16a3e0da19f86709f7cae0ec10"
  },
  {
    "url": "assets/js/62.d2a05bf5.js",
    "revision": "8ef73f202a4dc5c6617cec391eab7d09"
  },
  {
    "url": "assets/js/63.4ed2a997.js",
    "revision": "79f1497a56c30d685780f2a09c02b97c"
  },
  {
    "url": "assets/js/64.968c6991.js",
    "revision": "2fca2ab7b9a89a9153a468f9ca01e364"
  },
  {
    "url": "assets/js/65.3f3c2cf1.js",
    "revision": "bc429014794a1a6be48a3fce198544b3"
  },
  {
    "url": "assets/js/66.fed02bcb.js",
    "revision": "c632fb5ccdfdbc540339daedd6b41259"
  },
  {
    "url": "assets/js/67.f6cfe54b.js",
    "revision": "3b75c607e848c22bf4a430d5c35d5504"
  },
  {
    "url": "assets/js/68.207c105b.js",
    "revision": "2f7ff16441abc7424c52d18e0de4aad0"
  },
  {
    "url": "assets/js/69.f4cef889.js",
    "revision": "ba7e55a02ed0dd3901bf8f16d3281315"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.0e3db48f.js",
    "revision": "d986878c807b401cf4ef27bb380dd8fc"
  },
  {
    "url": "assets/js/71.3b92661b.js",
    "revision": "d3b3fd64b021335ce5986003d9b27972"
  },
  {
    "url": "assets/js/72.df987994.js",
    "revision": "49652e31ad11dc216dd11b048b6e7bb1"
  },
  {
    "url": "assets/js/73.27e802b7.js",
    "revision": "ef6d1f93ebf4f577b5f645fe7ad44cb9"
  },
  {
    "url": "assets/js/74.3f498679.js",
    "revision": "e617bf35c67f0d4ad7f00bf07b53d55c"
  },
  {
    "url": "assets/js/75.541ec8b8.js",
    "revision": "faff08d0327deb12b8843c065d7803fe"
  },
  {
    "url": "assets/js/76.665adb84.js",
    "revision": "b44f6c561bf9198bdc96875558e3b0d8"
  },
  {
    "url": "assets/js/77.bee0a936.js",
    "revision": "1f5e1a56dcb0293576a048fa1f65910f"
  },
  {
    "url": "assets/js/8.6d4ff2f9.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.d40e19d7.js",
    "revision": "3a21a4456e14f25781a63e7b3f1d4156"
  },
  {
    "url": "assets/js/app.f9405385.js",
    "revision": "fb7fd562b41afa624e24ea1982f1d364"
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
    "revision": "1a9d8ac0d0f53f128c6bdb5b0b061106"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "9928f70f81e5129eca2cc8620397e427"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "46b92d14e9243a0c02d1ff6faf426584"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "b547109a39bb7dea91661da2fccdb7ca"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "9f7f30c6c6cb59d5ebcb02263572caeb"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "d91393645de7aafb691fd68352f4aa6e"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "78f072524cdeda805248ecf8b246c8ca"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "ae0df365bf20626ad217790339396be1"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "62094950c25e00ea0cc1427a90c0a37d"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "c30a1d820f599faf00a6f732f2ebe4af"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "98b1b3156f4523c685d25b2037eff070"
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
    "revision": "eac43e05df38a74f84ee7a23eba42e59"
  },
  {
    "url": "other/upset.html",
    "revision": "79e3cae61ea7b5471bd1c518fb22a499"
  },
  {
    "url": "plan.html",
    "revision": "68de8cd8161eeeff49f96afb7b6a7c72"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "3fd8eacf9c30481a7e764f7988750182"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "24012020e7553e2f2648cd30f23808fe"
  },
  {
    "url": "projects/testhub.html",
    "revision": "e30a316fba44fcbad5622b312f7dc301"
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
    "revision": "7f2815436ca19216042080bbbc1db4c3"
  },
  {
    "url": "server/java/index.html",
    "revision": "35bdc42796f57b8dd16cdaeee0d75354"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "41aec84c32b8b83bea3707f88b14b825"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "c4db920c843dd2bbc5aa10026c4ffa38"
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
    "revision": "3f1039e1d9a8625567cd23987052f72b"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "6dda71b37b021e834ededfd0662dd39e"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "e2b1c1444daefcc33eb0b0ecfcdd1a8e"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "401370ea1ef78fac0a3f49825435f851"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "b8e937922064e9054701b533c85aa55a"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "2800339088f54ed6af3034472eb08a38"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "e914afaace70b45ae2c8b39244f82851"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "aa05b74776797d0f9726504fcf38b565"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "a1618eb70a9299a63dfd1dfaa71fecfc"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "ca119cb7947b6d3bca7c53b23aebb53f"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "64616a819424cac86039272ecbfdcf7c"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "68b576bdda1222930055acf3655dfed3"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "f9a8cb6443a182de7fd8e3cbc45312b8"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "927860b0c0889d015c918837e9431227"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "95792b7af8ca475ad6e75c7d812f6f9f"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "a2db9ecbe26fc3d310f52242db114013"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "c098b71758a880aa58b5a35fae954828"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "6a2dc74b7ef24b5cf4b8a2f82a3483e2"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "6c55c15247e4828c0a656741a3c724c3"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "a7e262587f4bf0ae7dca103b745eefc3"
  },
  {
    "url": "server/python/index.html",
    "revision": "dc07cc1b79dba3f221601a897eee8990"
  },
  {
    "url": "server/server/index.html",
    "revision": "86643d27bb938b3f0d8c1aa05b85925b"
  },
  {
    "url": "server/socket/index.html",
    "revision": "22953f70752e91c6bb6c3e2cc6cab44a"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "02b11f58e7715d319b3f4690e5e05c35"
  },
  {
    "url": "tools/git.html",
    "revision": "be75ac9c03cf39c40b1410ed76f45a54"
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
    "revision": "1218be25ce3ef969f25a98f36b632bb6"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "d10137b15fa8a3532a24ae4fd8e3fa81"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "07c258ae16f4415d997d7daaba61c67e"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "2560181ebc204cdef349faabb7fc9b89"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "4d6dacf0b5923712699903ddeec12f3f"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "fa513869dd0a7199d63f3b7a298d7016"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "dc5098761c819e7cc26a11c26170a1d8"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "806b8ae7f37554cd2f466957cdedcbd0"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "02bfcf192132381a7cba6d37c862c51f"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "defdf33c9fb62fe1fb29b80076e84196"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "46324ab984476da8c48e2ed554cb0fad"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "7cb587386a04bb91be8e00c34ae45bf4"
  },
  {
    "url": "web/basis/async.html",
    "revision": "fb1e188e52989d105d9fc851030370f1"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "0c6388382bd4467ad64c235c26bf4710"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "54e3eb81255785a0812d1025bdf3ae76"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "645a63f1f58dd883fc4bd5ad6a0f4523"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "d12f7b8de02d8a45f28bf6b94fc41d4d"
  },
  {
    "url": "web/basis/html.html",
    "revision": "771cbd458d73b53628411bcd2ec400e9"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "00e52bcac4f634a2a31b6ee2c9c4ddfb"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "e0a50954e15dcd41f7947e99477f73f5"
  },
  {
    "url": "web/framework/index.html",
    "revision": "2761911f7378a7d86c1d9fba9365e476"
  },
  {
    "url": "web/framework/React.html",
    "revision": "05967a6753bdf940a335bf2aabdfc912"
  },
  {
    "url": "wechat/index.html",
    "revision": "00055ef8a4d722131b651f8b506cc1e7"
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
