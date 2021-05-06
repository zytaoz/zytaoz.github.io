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
    "revision": "8425d43ea5f781ac29291ebfef7206cb"
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
    "url": "assets/js/10.62389779.js",
    "revision": "4747f2c947e7bd18972d2f36cffec6b5"
  },
  {
    "url": "assets/js/11.d861879d.js",
    "revision": "da489638daebee068824aba3a6f14532"
  },
  {
    "url": "assets/js/12.9ec44507.js",
    "revision": "1067f41c556de267b407e69d20382b4a"
  },
  {
    "url": "assets/js/13.84a94ea0.js",
    "revision": "4e568eaaee15de48e186d9fd87c897ee"
  },
  {
    "url": "assets/js/14.afd10d06.js",
    "revision": "6ac29ff04c0b7326f7b229e75a4f0431"
  },
  {
    "url": "assets/js/15.bd525146.js",
    "revision": "ec899b7c0cbb82bea6bc5d5cd9c2113d"
  },
  {
    "url": "assets/js/16.b6dddc00.js",
    "revision": "0a304653654fd93384681297d8d8fa7b"
  },
  {
    "url": "assets/js/17.caa7cbb3.js",
    "revision": "cbc15b5dd2cbd9ec5674802f3fe699d6"
  },
  {
    "url": "assets/js/18.29d91a13.js",
    "revision": "4495bb184cf135b2dc9e4a2963b31e52"
  },
  {
    "url": "assets/js/19.c3bcfaf5.js",
    "revision": "ceda8cbe34d6d772ef40adc446854dcb"
  },
  {
    "url": "assets/js/2.e85ab9f3.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.1e1b49d7.js",
    "revision": "c581570b9f8bb2fe346c3e030ce25796"
  },
  {
    "url": "assets/js/21.69b466c1.js",
    "revision": "789cf94e36f306fba9055ce5d2a352d6"
  },
  {
    "url": "assets/js/22.1a2ee99c.js",
    "revision": "bc75eebaa7dbb4bb434c54a81ae2e32e"
  },
  {
    "url": "assets/js/23.655be2f1.js",
    "revision": "e0c0e5ef5f3042adb9468d9d26ba00ff"
  },
  {
    "url": "assets/js/24.4f8dbc5c.js",
    "revision": "1a961066cdf0deec34204f5155653c39"
  },
  {
    "url": "assets/js/25.2a5f1418.js",
    "revision": "2a84ce1437aea75cc0c504e130f30832"
  },
  {
    "url": "assets/js/26.2b65ee10.js",
    "revision": "89b17ca6c02d1ba25a04f6db57a078e7"
  },
  {
    "url": "assets/js/27.7fb98f52.js",
    "revision": "684b632038b84b9a1493286d71f48369"
  },
  {
    "url": "assets/js/28.381163bb.js",
    "revision": "22521c988d2dda713edd93a2293a7748"
  },
  {
    "url": "assets/js/29.c7a58109.js",
    "revision": "46558e427d0ade0439d9c52e28e4feaf"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.7a9b4505.js",
    "revision": "e37a74312a50a3466a61da3feaaff82d"
  },
  {
    "url": "assets/js/31.3c874b15.js",
    "revision": "3897ea2e3bab7557533d71b223624f19"
  },
  {
    "url": "assets/js/32.f87816e5.js",
    "revision": "114fcaa294aeaa1ebd8fbdaefd163edf"
  },
  {
    "url": "assets/js/33.3ccf3fad.js",
    "revision": "306fd71e19c23323eab478f36d20a85a"
  },
  {
    "url": "assets/js/34.56af27f6.js",
    "revision": "5b890231ea1d3b1518c7d4e838fface2"
  },
  {
    "url": "assets/js/35.685977ce.js",
    "revision": "4d82114c969b77d038e0dc031d56884b"
  },
  {
    "url": "assets/js/36.1cb612c4.js",
    "revision": "1a2a72e6dd724ca21e8d214e8840aee2"
  },
  {
    "url": "assets/js/37.044ae236.js",
    "revision": "e10f8a62be9368254c012d2a9d7996cf"
  },
  {
    "url": "assets/js/38.f600781a.js",
    "revision": "db02b6d85e41aff9e7c19c9251be052c"
  },
  {
    "url": "assets/js/39.07f42bd6.js",
    "revision": "4d526336f8f3377ec123d665a048cba2"
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
    "url": "assets/js/41.c088e02e.js",
    "revision": "9f88ac5e786ad9ccfbd36011cb492013"
  },
  {
    "url": "assets/js/42.fe713929.js",
    "revision": "75c6c3d2a5a42659ab821bbe28ccd70f"
  },
  {
    "url": "assets/js/43.12ceae70.js",
    "revision": "1c89627b18a0f147a37c48e7459284cb"
  },
  {
    "url": "assets/js/44.669fe639.js",
    "revision": "2f36270f467b333d6f36caad96bad5b2"
  },
  {
    "url": "assets/js/45.4fe94739.js",
    "revision": "abd671b316b8ca9b0403fda8c2ee3f8e"
  },
  {
    "url": "assets/js/46.4bc889a4.js",
    "revision": "0434d9a120573a7841c0d74d242eb722"
  },
  {
    "url": "assets/js/47.e82c112c.js",
    "revision": "83e3e43a2afea48523a6a3d20cb2b575"
  },
  {
    "url": "assets/js/48.67704a59.js",
    "revision": "fd90c2a18a6ec1d78539fccd210094bf"
  },
  {
    "url": "assets/js/49.3458f604.js",
    "revision": "06c260d6719337cd7cc1c5997c50ac33"
  },
  {
    "url": "assets/js/5.9dd0c11e.js",
    "revision": "830885768e0511b0037059fccf1c0e9f"
  },
  {
    "url": "assets/js/50.9baf4c77.js",
    "revision": "627d532faf5ff4c6fc2f8a220a93599c"
  },
  {
    "url": "assets/js/51.7fdaaf12.js",
    "revision": "17fa4b5a55fdac7105326566e3049aa8"
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
    "url": "assets/js/54.93e7cd72.js",
    "revision": "fa460b9fc5fb9a65c922bfcc504b716f"
  },
  {
    "url": "assets/js/55.e07fd058.js",
    "revision": "eca68a93e0914782c5c9fb34d80f026a"
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
    "url": "assets/js/58.acd92e4a.js",
    "revision": "c277dc5321b37a2bdd5d55bc5f5e81af"
  },
  {
    "url": "assets/js/59.ac2b62be.js",
    "revision": "7e6963a12e6c025851ac561fed5f67eb"
  },
  {
    "url": "assets/js/6.a403a684.js",
    "revision": "b7eaf7db508321c1e536c1956712c52a"
  },
  {
    "url": "assets/js/60.5edee196.js",
    "revision": "0499a30fd1ed3ee092355af5aa5f2dec"
  },
  {
    "url": "assets/js/61.9de04d70.js",
    "revision": "889f314b0e49486f0ee67509f4e0581a"
  },
  {
    "url": "assets/js/62.a06da6d2.js",
    "revision": "bcded5498dd0fcd20a4e6d27617d9706"
  },
  {
    "url": "assets/js/63.3d600219.js",
    "revision": "7184086939d7185e33b6e73e30f1280a"
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
    "url": "assets/js/66.b0187ce5.js",
    "revision": "1be8383197c5674b5bb1307fad68c67b"
  },
  {
    "url": "assets/js/67.8b0ea9aa.js",
    "revision": "a8ba907373774d8e92a7b5743c8a1973"
  },
  {
    "url": "assets/js/68.1bc0857d.js",
    "revision": "64fad75dd629c2ee6beb1b8453c4ea71"
  },
  {
    "url": "assets/js/69.4fa11af0.js",
    "revision": "17067659f145a754366743c8d229b07b"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.5a67b93a.js",
    "revision": "2958c74256882fce7d24758eff5a35cc"
  },
  {
    "url": "assets/js/71.3edf3444.js",
    "revision": "8ac20244d349ae96365f0168083c9d9d"
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
    "url": "assets/js/app.e899740d.js",
    "revision": "3ea13ea3af43428ce4fd0e219e01c0ce"
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
    "revision": "c9a84c32ed6adea560c83d1bc32dbe09"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "e3ed9f6cc9ad14699b8ba46b8f689113"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "900132e98950f707ae1f19edc0ec7a8e"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "3ef6e43e5dd2f474933ca3b06b2d73af"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "9fc7f8a17106acff45f77a9de4e01cb4"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "79cf5de4c38ef73f6b6540ad46ab530f"
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
    "revision": "81ddb6c8262d0040a6ab18b4e58c7869"
  },
  {
    "url": "other/偏激.html",
    "revision": "098aa559cefade1d8ed202d26db5e98b"
  },
  {
    "url": "plan.html",
    "revision": "a9da4f9c89f5012582788a91c3a6e188"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "5b750052a6910738be6b34da84b65b64"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "bf4026aa71aca2acd2bda5ba09d661cb"
  },
  {
    "url": "projects/testhub.html",
    "revision": "bc91252299250fb0058c00702e5d6fac"
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
    "revision": "ccf65ebdba6f3408a1e15565a3d7790f"
  },
  {
    "url": "server/java/index.html",
    "revision": "fbf017f6a53d46d7c26b7fb4d5e9d312"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "9dab540f1026ad8e7efca85a711f6565"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "a1dee66f9702e2ee8d8af4a2122551a6"
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
    "revision": "da520dd281856d58858747cb85630a82"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "a955f1f467cbe33a2479a068e6da041a"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "df787fb1b2595a1bdeee7b75cf4b563c"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "6396ee99c95925e438a6d54d05877b66"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "008436d1dee862d05b843bd60ef98344"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "6741aae22443ea7c456e1d7c84bd5e3e"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "5ffa4a5ecfe7175c61847a387669af59"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "187f9d0a95976ea7950a6bf6b6906494"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "cf98746990b2930abb633c2a108b86f7"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "ad20bb7cf9a8d144b690b84bd4c181e9"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "92af9fe33b9e1203a7afc0c93e721777"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "8beca67e5810f903e3c500e7197d0553"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "45484d82b5e925755bc97a352ea58194"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "7ac9ab4f3e91dd60efa710383e33c2c1"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "13d983a0c6d2442040633afdb9bfe1e0"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "91f27af2535a3ed07f0b0ca2cad19394"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "27ebf7869ac326dc0d0bc9b953d0bb32"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "cbd4379d750eecacaba76ad2a24fcda0"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "2e98cbb46413c45aee29e8cac3220e2d"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "ce08ab4c0fd26647770a16bfc892a294"
  },
  {
    "url": "server/python/index.html",
    "revision": "c9186507e7f0614e202336884c2e544f"
  },
  {
    "url": "server/server/index.html",
    "revision": "e1c28675b048c31cb2d88ca16f301c9e"
  },
  {
    "url": "server/socket/index.html",
    "revision": "4b28127f68f7921e32ec2127a465f463"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "7ce73e187628380068fca1c3b314e8cf"
  },
  {
    "url": "tools/git.html",
    "revision": "a0eefad5f093707a89c804a54848c650"
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
    "revision": "444a2360c8a5949e3d6c7a87bf9ab9b4"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "9aaf6e077935199dbf1d6ea104ca5662"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "2c7e52cec6c0f366d3cd61c2a700a086"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "fbebaa6d20c463a208e8d6b9c61a3fa3"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "d679bd84e178d6babe1e38a8eae88585"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "0814862538a1df048139991a711f17f1"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "4f1fed8f4c038384a1f78c98f15f4f38"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "e5bf092941ba922bd2c4c5fdafc74349"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "9e31d041eee9c725e30c3f7e65358025"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "b13531bf4c2b45897edb642e56404925"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "c34676513ce3473e148cc4232019508e"
  },
  {
    "url": "web/basis/async.html",
    "revision": "af30cb4344be41dbcfc33be6212f676e"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "a9ed739eef0694220c06bd06afa09492"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "7b5819b3df3ede17750f88ec410796b0"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "0bc51a084a4189b11a394b855df6559c"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "9fb2faa7c47ee84752f8bf8c2e259805"
  },
  {
    "url": "web/basis/html.html",
    "revision": "158997540a285f3fd0ff0f3d5aebc6a1"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "d5fdecb9bdc388d24446ee2a2f1f12dc"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "245a5130dbc5399f0a181b640b364343"
  },
  {
    "url": "web/framework/index.html",
    "revision": "cb67bb7943b5cf58605ec6077477ed0d"
  },
  {
    "url": "web/framework/React.html",
    "revision": "e24aae2e176a7f19e53899da3239af5f"
  },
  {
    "url": "wechat/index.html",
    "revision": "e6ede214301f37b028d5072ee484e054"
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
