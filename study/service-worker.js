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
    "revision": "d4128267d1b7f276aff53006b147d099"
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
    "url": "assets/js/10.23aaa3d7.js",
    "revision": "da5adb4538ce0e6298124ba873680849"
  },
  {
    "url": "assets/js/11.14cca601.js",
    "revision": "122210fd1ab749703e4087d6688ebf42"
  },
  {
    "url": "assets/js/12.2b7c3440.js",
    "revision": "e4269ce32235f0d45030b04937f3e38f"
  },
  {
    "url": "assets/js/13.a4b0ea58.js",
    "revision": "5edb97c92a36c7feb6c0017e548f98c8"
  },
  {
    "url": "assets/js/14.2e48a700.js",
    "revision": "f1a54f41e3cf49e7862e7cdd2905895e"
  },
  {
    "url": "assets/js/15.ec06fd7d.js",
    "revision": "bdc3e41c49978c24639f02f0bdd11f06"
  },
  {
    "url": "assets/js/16.c00403ed.js",
    "revision": "ca1cfc2376cc0ad7746dd242831407f3"
  },
  {
    "url": "assets/js/17.4c0bb297.js",
    "revision": "e1a1fba21f0c96e5e03f5897ae66f470"
  },
  {
    "url": "assets/js/18.f88beb91.js",
    "revision": "b5063dfde1a67afe9ad874589d13f4db"
  },
  {
    "url": "assets/js/19.8caf8f63.js",
    "revision": "510c106f09c8514d72e017f269a5f288"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.bfd03857.js",
    "revision": "9e397b4d161715df65c8a0f5d4c75333"
  },
  {
    "url": "assets/js/21.36bdb315.js",
    "revision": "9a9ffafa04e3db6883bfeed01d638104"
  },
  {
    "url": "assets/js/22.009cbc5b.js",
    "revision": "1462a7c7e07d1783412f94e03152206c"
  },
  {
    "url": "assets/js/23.63bb79ed.js",
    "revision": "eef086b1d7b993a18e3c3b320fe38f80"
  },
  {
    "url": "assets/js/24.e0546534.js",
    "revision": "11258b2186d868ea20699938442fb5ec"
  },
  {
    "url": "assets/js/25.3d62bc66.js",
    "revision": "7b1fb72f2281a165bac44e8bc38d3651"
  },
  {
    "url": "assets/js/26.aee25982.js",
    "revision": "734d9ef9a33d9774f79cf1efb0f590f4"
  },
  {
    "url": "assets/js/27.ad05c963.js",
    "revision": "67bf49d8a7fb2deb9dddc82953da167c"
  },
  {
    "url": "assets/js/28.c343b29b.js",
    "revision": "96ea07979be0e511bdfcfd4c59d2a4a9"
  },
  {
    "url": "assets/js/29.a91c9ad1.js",
    "revision": "8eb4cc848f5267c1edecd07f149986ce"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.40a021bf.js",
    "revision": "25ecdb7c0ecc49c8f69cf1a5129fc609"
  },
  {
    "url": "assets/js/31.05b920c9.js",
    "revision": "302d975d388dae47b34a439c5d7515d7"
  },
  {
    "url": "assets/js/32.78c3e461.js",
    "revision": "a956dffc0d2b6f2508f5684d3c36ca69"
  },
  {
    "url": "assets/js/33.d6fb5e76.js",
    "revision": "18d7961cc13ba155f11ba5c548825cc7"
  },
  {
    "url": "assets/js/34.13ad7f97.js",
    "revision": "4c6d6e523421a87d9fe8dec1121dedcd"
  },
  {
    "url": "assets/js/35.c9d80528.js",
    "revision": "c1519a50113ce743cf1262553af99a03"
  },
  {
    "url": "assets/js/36.3b584025.js",
    "revision": "b2a64561d0f0a0c08a9a2ce4c240c8c0"
  },
  {
    "url": "assets/js/37.53dbfc3c.js",
    "revision": "fe53b8a231e86382500e81acbbbeea17"
  },
  {
    "url": "assets/js/38.ff8ac380.js",
    "revision": "5e6987ca11f4c4de90806b6110179b94"
  },
  {
    "url": "assets/js/39.f768fe55.js",
    "revision": "65b1ead70accb711c309a3b513b952c4"
  },
  {
    "url": "assets/js/4.c0a7b8ab.js",
    "revision": "e85e2a4d90868719b199496d1fd48b2b"
  },
  {
    "url": "assets/js/40.b3e3b313.js",
    "revision": "3a5428324f96573e694705e7c9bd031f"
  },
  {
    "url": "assets/js/41.faf9f29b.js",
    "revision": "d7092a54b320abd7930d8c745520141d"
  },
  {
    "url": "assets/js/42.6efc2cc0.js",
    "revision": "bd47fd35a725fcd66fa623e663b81892"
  },
  {
    "url": "assets/js/43.d00e8476.js",
    "revision": "30ba0e4ded16ea29b66eaafc610303b2"
  },
  {
    "url": "assets/js/44.359a1d4c.js",
    "revision": "7f92360fbb619e56b593ebeed3545e21"
  },
  {
    "url": "assets/js/45.919efdc4.js",
    "revision": "6e1de5d0e24b5702614a9b34644df4b1"
  },
  {
    "url": "assets/js/46.8e30d0d7.js",
    "revision": "a2060758af88442353f346e763da35b3"
  },
  {
    "url": "assets/js/47.e01f05af.js",
    "revision": "0a9771d6c6ab1113229d2e4508ec64b2"
  },
  {
    "url": "assets/js/48.8d6414ec.js",
    "revision": "b7e31012384f35a446f9b098a1647e1d"
  },
  {
    "url": "assets/js/49.998e30dd.js",
    "revision": "d19d5b84a730dffe87153fa3b995f118"
  },
  {
    "url": "assets/js/5.4527858b.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.05dda865.js",
    "revision": "c53d77bf0c3a0a23816954b0b4c275a8"
  },
  {
    "url": "assets/js/51.8bea53a7.js",
    "revision": "dbeebaeebfcc2d3174243db0a573f1ed"
  },
  {
    "url": "assets/js/52.118f7d81.js",
    "revision": "7c5e7dd92852f120050590cc987f701a"
  },
  {
    "url": "assets/js/53.ce7f29e8.js",
    "revision": "12efe5093220a02e9b2b12abd6e4581c"
  },
  {
    "url": "assets/js/54.ce9724bc.js",
    "revision": "df16add5296cc616c00728e6a6477850"
  },
  {
    "url": "assets/js/55.9ed46675.js",
    "revision": "52de8f942abe8de9907f247c5cce0c48"
  },
  {
    "url": "assets/js/56.e802d2fc.js",
    "revision": "50aad73c9e0a62ffd99b6ec55562f1c2"
  },
  {
    "url": "assets/js/57.14cbf27b.js",
    "revision": "f8fa6e22e617f9f2eb2ff2d8d6254c60"
  },
  {
    "url": "assets/js/58.7d4d25e7.js",
    "revision": "e332500c96929c4a440c2c8fc31d2ec2"
  },
  {
    "url": "assets/js/59.72296911.js",
    "revision": "6aa0b5ca45f022c16e541e490e80be0d"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.45a82372.js",
    "revision": "0fd0f93d70fdf5b9af3c9c15f3f1bebb"
  },
  {
    "url": "assets/js/61.0f21b934.js",
    "revision": "2d39d17bc3a731783a6fbb78de9f2b25"
  },
  {
    "url": "assets/js/62.23878218.js",
    "revision": "00a3830baf2466639c0fa6d3ef9791e9"
  },
  {
    "url": "assets/js/63.ac41ce15.js",
    "revision": "3f115daeab176bad878a9b85889f615a"
  },
  {
    "url": "assets/js/64.626d418e.js",
    "revision": "8948a66d73fb0f7158276f0177ef59b9"
  },
  {
    "url": "assets/js/65.6e473bd4.js",
    "revision": "8ce193ec89449f0d577b91f8facc290d"
  },
  {
    "url": "assets/js/66.1cf5a4d9.js",
    "revision": "17b7df1379868fc41f6d09ee2b5c5291"
  },
  {
    "url": "assets/js/67.832f19a1.js",
    "revision": "5365dbf27c93e9719490b5982404647b"
  },
  {
    "url": "assets/js/68.f2c8f7ac.js",
    "revision": "6e00204ed407f4f61b772e67d5c9e8ca"
  },
  {
    "url": "assets/js/69.4f121cb4.js",
    "revision": "e3f73b77a28a7b199594b8d5d8363eb8"
  },
  {
    "url": "assets/js/7.574db714.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/8.43051b52.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.0a4f2a06.js",
    "revision": "5d7946ea92bca00996ed42d0c26057e4"
  },
  {
    "url": "assets/js/app.cc5e35e0.js",
    "revision": "4e9e29d6eeb34d10d53ae9286c9262c1"
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
    "revision": "d04f384d1ab8e4917abe2db9075d8c9d"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "278759221d52a59d254117afc3121072"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "4298a990a6e2d490bcf4e93cf962a0bc"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "74ddc3a479a66396402605392aca0b67"
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
    "revision": "0bcc48ac4e3b550d0053421b05a4ebbd"
  },
  {
    "url": "other/偏激.html",
    "revision": "9d70c059a16e1edcaac2b644905bd974"
  },
  {
    "url": "plan.html",
    "revision": "fcff3b7f6b46e02c976f24d914fd910b"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "353b156c13d96f4fe1d20c81cd838a1b"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "b6d8994508cf892e2b702524c197a426"
  },
  {
    "url": "projects/testhub.html",
    "revision": "b3c5632d02bdc49e9731e0689c7e21b4"
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
    "revision": "904fc491ce801509bfd686643738ce9b"
  },
  {
    "url": "server/java/index.html",
    "revision": "c27f969a7e5bd0d21cbdcb168cedec09"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "ee4820a7b6b84bff2d27d5dda2e7c537"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "ad68b0dd5f9f56b4646f4b6c0e804891"
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
    "revision": "9f65b7ec56f7e9bfbd7900175bfb198f"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "75f6edb94671c2ea16e1b84931888395"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "14ad4ea56ed20ae4ac506f9438260ece"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "4d885f394fc4bf7cb29a869eaa6e7b2c"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "6c2fe878f5a198e1c49b83b91e1ac4aa"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "54a36cdf2a071246ebf457dee102070e"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "6165f06d80930d591b17e0c7208bf4cf"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "3de0205cf126b204d1b9491a0b7becb4"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "42b0dd68004d0a77b02ab51792f501cc"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "ee696795e305e67c7da29ac2db56dbef"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "1f6adf76c53401d6ec0fcffdf403330a"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "438bdd3904fddfadbd28afe6989598d9"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "f34197c7198915b6da0c19836f47013c"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "1dff095d7041d565f456ab9e2af48af6"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "ead9644571669b9f1509866095220869"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "7f38944a8c7b497a16e5f4ba13bd5288"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "b4651b6fe94e359b14cd5bece50ef2fb"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "8fa864fd7a7374fac7d2717c77743f9c"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "7e4f679ec6f91499e153770b5f06507c"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "e3382f2a814df61a3e4b465702ba08aa"
  },
  {
    "url": "server/python/index.html",
    "revision": "8961fee471b17c3f0fe1a641b0ef8b66"
  },
  {
    "url": "server/server/index.html",
    "revision": "9fed1c4ccd3de91104d9b4d6af274ab8"
  },
  {
    "url": "server/socket/index.html",
    "revision": "9574473e2301eac9d4738a0cc8a30374"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "3add70e2afbb57c1f26f8a1e3d7a2296"
  },
  {
    "url": "tools/git.html",
    "revision": "884489e0571da783e0768d9e086c7421"
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
    "revision": "f9764ecf9115d92d0f1a238374629c67"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "4b16df7b7567659985cdb15caa448d87"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "a9df649e8597f2cd3e40134cdd478d6a"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "54dfe6b066054c50cdf226edb948d5dc"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "10ceb8f7d9c8fa684955587c58e0f2bb"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "db854d5fe38444e61ae7aeb2b9945ed9"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "aa7c8447110074ff7bc1409df3298a60"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "b25e1dcce7b7db7d69e0cdbf7684375f"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "37bafc94429c99adc5418f32c929b736"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "29cf74d6672ae2e73d724b70bdf080e0"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "3043cc95f0d1fdc5e3815639ae985c50"
  },
  {
    "url": "web/basis/async.html",
    "revision": "2856deb2fbbdaf77a4354cc6e6df3d3f"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "9fe935827a32e98d9216a61e74bc5d9e"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "d0c4308f532db0967ce700a65a32ea6f"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "bebd60c52edf9f691a40e5aed582024e"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "3f99c234852b798db88e3ef6b1a67a26"
  },
  {
    "url": "web/basis/html.html",
    "revision": "c74712eb0d34b181914bb31122e903cd"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "e68d5e65410a302a8a5b9c6b80db32ec"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "c8315ccb9b1ed58e5e8f9e576159bc3f"
  },
  {
    "url": "web/framework/index.html",
    "revision": "a7969c28c36498e2933793fab1b0f68e"
  },
  {
    "url": "web/framework/React.html",
    "revision": "b905caa217f191062b5b7206ab817b53"
  },
  {
    "url": "wechat/index.html",
    "revision": "9e49ca7e886ef6d104c74feb57715693"
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
