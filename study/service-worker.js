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
    "revision": "284bd7bcc097c2c7c9928de9321ebd3e"
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
    "url": "assets/js/10.15dba463.js",
    "revision": "b77d6e31b67700b75d4e3b0259e3fb06"
  },
  {
    "url": "assets/js/11.e7e66a06.js",
    "revision": "1408842c1759500e27b1d9d78af87182"
  },
  {
    "url": "assets/js/12.69ac3e3c.js",
    "revision": "a58226d1212464890ee0d533697bd2a5"
  },
  {
    "url": "assets/js/13.d2390ec0.js",
    "revision": "d33c394805a63044b4c61a2a3528f099"
  },
  {
    "url": "assets/js/14.c720a364.js",
    "revision": "ec76777927ff47b6ba5273ff45a8cafe"
  },
  {
    "url": "assets/js/15.55e2fab6.js",
    "revision": "c64179f3cc051d597c9fd9409b961d2b"
  },
  {
    "url": "assets/js/16.e6554e12.js",
    "revision": "a44710f7f033c9f90599a0cf63cbd37f"
  },
  {
    "url": "assets/js/17.2061be08.js",
    "revision": "dd6be28d8be28b61af4cc8baa6f167be"
  },
  {
    "url": "assets/js/18.c60af8f0.js",
    "revision": "1ae8e94b8dd6dc76a16efc5be8462126"
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
    "url": "assets/js/20.64a04ca0.js",
    "revision": "3929d19d1edfe5d9d181021bf1c001cb"
  },
  {
    "url": "assets/js/21.32ec58bc.js",
    "revision": "99590b80dc3c833af238333a127f4df3"
  },
  {
    "url": "assets/js/22.750d75e4.js",
    "revision": "d0321c59e2d43598287cf40dd1740dbf"
  },
  {
    "url": "assets/js/23.acfcef7b.js",
    "revision": "df7e7102faca232407297b58ec70fed6"
  },
  {
    "url": "assets/js/24.80a748e4.js",
    "revision": "e18d74bc08e77a0e39333299494bfcea"
  },
  {
    "url": "assets/js/25.938d5bc4.js",
    "revision": "b8c6d55f9d2e8f783e5a3bbd58c1dfca"
  },
  {
    "url": "assets/js/26.7296eabb.js",
    "revision": "7cb43683d2729f4d60d5f271a5ae0845"
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
    "url": "assets/js/30.ff9c3e7a.js",
    "revision": "15e21c9b4b6752d2b7d617cb3764f5b2"
  },
  {
    "url": "assets/js/31.969e8d2b.js",
    "revision": "baa55cb1d957c6e3ea4bf3d2563c4eb4"
  },
  {
    "url": "assets/js/32.a4cbc695.js",
    "revision": "db2be4f70612bcab1325ccb596fb69aa"
  },
  {
    "url": "assets/js/33.c7da4379.js",
    "revision": "d49aaf17244e2d16839e4bef119d0753"
  },
  {
    "url": "assets/js/34.9a58a0b3.js",
    "revision": "414862b5da0a9eb1b87223af99fc2d8b"
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
    "url": "assets/js/45.60c3b7b3.js",
    "revision": "585ceda84a8576b3e2f9b967ceb790b6"
  },
  {
    "url": "assets/js/46.083a88c8.js",
    "revision": "4a575f026e781730711c4bf4f9709797"
  },
  {
    "url": "assets/js/47.6751c071.js",
    "revision": "9fe6110b4ca87cd30a4350bb288b2296"
  },
  {
    "url": "assets/js/48.71f78346.js",
    "revision": "f6a89fdcd98171396b3bf2e8462a21b1"
  },
  {
    "url": "assets/js/49.76ef9542.js",
    "revision": "ffd14f263bad625adb461597052abc97"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
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
    "url": "assets/js/53.7d0e98c7.js",
    "revision": "2da8233c66c9fc7119c1bbbaf723c61b"
  },
  {
    "url": "assets/js/54.028e5b91.js",
    "revision": "64f3a48c429656a4ca5c3208f7cc9225"
  },
  {
    "url": "assets/js/55.cf63afda.js",
    "revision": "467acf8597bb344b81c91906ede95672"
  },
  {
    "url": "assets/js/56.d17676ef.js",
    "revision": "aea535b3140ed18c9569026a01e60512"
  },
  {
    "url": "assets/js/57.f5cf1488.js",
    "revision": "9172979226fe7489b35683410229e1b3"
  },
  {
    "url": "assets/js/58.697b81fe.js",
    "revision": "9d0f2b6c3758e1d776dc27102a040a03"
  },
  {
    "url": "assets/js/59.6bfa5ce1.js",
    "revision": "328e1001d58feb2073a786e862b23cb8"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.f99b25a3.js",
    "revision": "f222477e325a2aa1e52bf9d74cf85ffa"
  },
  {
    "url": "assets/js/61.054798e7.js",
    "revision": "5c062447e77d2ac86150ca3501a592ab"
  },
  {
    "url": "assets/js/62.ca89672b.js",
    "revision": "ff415c0105ac5e1566c015fefb51e31f"
  },
  {
    "url": "assets/js/63.4ed2a997.js",
    "revision": "79f1497a56c30d685780f2a09c02b97c"
  },
  {
    "url": "assets/js/64.e3aa8aed.js",
    "revision": "c6f392407a2ca17b96ff2db68a725062"
  },
  {
    "url": "assets/js/65.a66b3726.js",
    "revision": "b5026dd1f53d6fea590c4e7a1bde5ef8"
  },
  {
    "url": "assets/js/66.64fac7ae.js",
    "revision": "7ec84e339b52748ea7bc272b8cd8e8d9"
  },
  {
    "url": "assets/js/67.4ae394fe.js",
    "revision": "e510f8f7cc743ee5a8bd86576f648961"
  },
  {
    "url": "assets/js/68.20a63189.js",
    "revision": "7274814a3e27773768b50651d44d66bf"
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
    "url": "assets/js/70.9da9fadd.js",
    "revision": "95c2eea9a8d86a7bb06075e9b3e624d1"
  },
  {
    "url": "assets/js/71.da94fae5.js",
    "revision": "b84dc9cd3fda4bb7af4f12f73ff67fa8"
  },
  {
    "url": "assets/js/72.6367cd59.js",
    "revision": "87f51ed97930a8ddb3e61f2ab344fa96"
  },
  {
    "url": "assets/js/73.e73af278.js",
    "revision": "3dd4cff1357c3d72ee90c456050e8b08"
  },
  {
    "url": "assets/js/74.3f498679.js",
    "revision": "e617bf35c67f0d4ad7f00bf07b53d55c"
  },
  {
    "url": "assets/js/75.2f62ce87.js",
    "revision": "ff7cfe81ef6056ec1ed934697f3cbe7f"
  },
  {
    "url": "assets/js/76.9e129d74.js",
    "revision": "2b7adcf575b693730a1a8dca38c237ea"
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
    "url": "assets/js/9.13d7aea4.js",
    "revision": "41857b39f7727b5b9461e2b29dc1e825"
  },
  {
    "url": "assets/js/app.10a93683.js",
    "revision": "e8b89195d672f7f43aec701e93651617"
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
    "revision": "a189679153c533b2da2775203513cdb5"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "1e6d75ed3735bdb3081a4362bda098d3"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "55a45c4c2e54eb4810466f816468eab7"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "5496796cadf5e2e2ebb93b8000575773"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "5112e4c749646067b98f8fa49f4a8162"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "3bdc67ce089da0267f8b1203675c841f"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "5d149e355f38dc6226df126d4233582f"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "7577fffd9fc7deafdd092dc589e99735"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "d81e3657952da01f33ce41a532d655b0"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "bc657095c15455aaece1907bec66deda"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "193548c970a15fb0002f1f3a25be11b2"
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
    "revision": "0e74a9e25bc461f56fd8ad08d7e1b6e1"
  },
  {
    "url": "other/upset.html",
    "revision": "7a57605d52bd549cc78f982be8fed1cf"
  },
  {
    "url": "plan.html",
    "revision": "59efe2ed94bf7104d176c1793e747ac7"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "8f527cdcf4b5d05576ec1f791d29a738"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "d1d6ea49780580ed85979092fab14a25"
  },
  {
    "url": "projects/testhub.html",
    "revision": "3ec7f2fa2e7f5582eb6781e2fea1a275"
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
    "revision": "9388f833d3670f2d82e4a59c547590a7"
  },
  {
    "url": "server/java/index.html",
    "revision": "60869f91d617c61ca28032b811418ba6"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "2d2b58f308e54ffb3047a6fd462d8064"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "f18ba318c52cc874d9b99a96d9c35086"
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
    "revision": "97c65f02396df5c1333fe0a5e38aecb6"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "c6603162316b77a4c44f9675d8414d85"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "8b89b05ece9c7d36a1709a1759c5efbf"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "2e2a802219521e5311fc40a7fde7a70f"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "8d18891c03e5cb942a018fa23432bb36"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "1fd18264c93453efbc4ea8a484aaadc8"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "d69c5407f9e3427c7a597d85da3e747c"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "f696fb92f686cc0a4551a79d9805d54a"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "3068da1522aa706f18d632d1b8dca9f6"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "8809b289be88734a6c50a5bff8865e99"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "62f42462ae3728fb0209eeb72e44bfa5"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "b06d4ca076f7f9ea9b07cc9f1d996851"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "3d543ef3fd030e76df920613a9645e08"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "b9d6c2574fcf7ca98235d15e958b5911"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "4d18fe79f0236aadb925e90fca656d8e"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "f38f5f3c07b51fcd75330d4b65923018"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "74704ef349fda250403bed6c27fe4c7a"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "0586f297c63b806237d82b3b1e425295"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "af9a8293d3fb73ef7c2c44e6f64d5de9"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "5c938c4ece948d1bc55d1a1a8813fdb9"
  },
  {
    "url": "server/python/index.html",
    "revision": "11e02253fcc766087fce13ab70654661"
  },
  {
    "url": "server/server/index.html",
    "revision": "35991ce9aa7fd139aac33b0efb63e71a"
  },
  {
    "url": "server/socket/index.html",
    "revision": "1336b4faf057f322ef0529a6c0d7f8f1"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "bbb09171f78f137beca1aa98fc7f21b2"
  },
  {
    "url": "tools/git.html",
    "revision": "f78a33c61f7c288be777a0c5de05ad85"
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
    "revision": "86988aeb2eb88eda14875fe78657a9c3"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "48578c18319b70dd6035cbc32410777e"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "ec323463176a0c4519e63d360baa6772"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "52ab3ced0ce9d55ed4118d4214a69d71"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "9b680a14e5a413578962652e0ad4637f"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "9daf55aeef8aa5b8bf72d55c9f3c1c19"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "5e60d521e87b808cd5819c57ef2352cf"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "3511db57d4995fc357b3f4ecec61bad1"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "51e2b89c6ae38b1910f7b6c9ebfa939d"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "e126198b2fa70b05fabc9f17a3e3f0dc"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "d3ffe1e4fb419fd5c495fe0c63ed40d1"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "e1e1721ed10d7cc27338fd43509b27c8"
  },
  {
    "url": "web/basis/async.html",
    "revision": "1ef2a9938b01f733b37038827d32919b"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "c87e88aec849aee7281e48d1a72fdf2b"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "dadeee214348e5925ddcf8902c1dced7"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "3c2973f833c556f9b5771a8e298f94e2"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "fe549af449cef51fad6305dd3ffb6214"
  },
  {
    "url": "web/basis/html.html",
    "revision": "9538c4995aaa6d45d44a9ec7617195fd"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "d3f5d5ed0b18e845714e930e8b7737bc"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "190b255e1fcf2a0960705c698b95f280"
  },
  {
    "url": "web/framework/index.html",
    "revision": "a45b3cee576dcf6879e91d273a7f027f"
  },
  {
    "url": "web/framework/React.html",
    "revision": "ae2270f9714e41e59c319b75656b49dd"
  },
  {
    "url": "wechat/index.html",
    "revision": "057b95bbf813be166ab8d81ebd214337"
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
