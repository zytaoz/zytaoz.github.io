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
    "revision": "42e761ef231cad260913d7a038601a7b"
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
    "url": "assets/js/11.36c509f4.js",
    "revision": "18ea8e5dbb733a6b27f97ce7b564553d"
  },
  {
    "url": "assets/js/12.3b4427d7.js",
    "revision": "e54607c85a01cac857d003ad2aac2bb0"
  },
  {
    "url": "assets/js/13.8af0e0f1.js",
    "revision": "39fbafa96def745bd87aa1d9132fd4ce"
  },
  {
    "url": "assets/js/14.04fc8b08.js",
    "revision": "9100e8ecc6646972d6822271baeb4ab0"
  },
  {
    "url": "assets/js/15.380c41e0.js",
    "revision": "0f4602f4afbaff94a9e2d0ae5af159c8"
  },
  {
    "url": "assets/js/16.849d3324.js",
    "revision": "4619b8f6f7c9fd3b04ae4c07f64814f8"
  },
  {
    "url": "assets/js/17.d6337ec8.js",
    "revision": "9fe98c6d9c183d47253fde317731bf59"
  },
  {
    "url": "assets/js/18.b12b80e9.js",
    "revision": "5ad3ca1883300ebbff790d804354e0d9"
  },
  {
    "url": "assets/js/19.f5dd474c.js",
    "revision": "d44536265993e7baab35d86e38e26e61"
  },
  {
    "url": "assets/js/2.e85ab9f3.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.d57fbe38.js",
    "revision": "c7be470ddcd380c7bca3ccaec7451586"
  },
  {
    "url": "assets/js/21.4b107bd4.js",
    "revision": "fac8ebe2d219ff4815801367d36b8047"
  },
  {
    "url": "assets/js/22.4297309e.js",
    "revision": "efe0e68865096656d545eaca290a777b"
  },
  {
    "url": "assets/js/23.13b3fe97.js",
    "revision": "22c773cb5f42d484ea6b18240dd8b92d"
  },
  {
    "url": "assets/js/24.69145f72.js",
    "revision": "ff4e40e56f0aed2ad9b19e0e9555fe45"
  },
  {
    "url": "assets/js/25.94c18706.js",
    "revision": "f6f9dc21c91d58b141bc0b9e7de38e75"
  },
  {
    "url": "assets/js/26.bcd27fcc.js",
    "revision": "8a3bd2ef13d21f7c3fb5691ee1bf4a50"
  },
  {
    "url": "assets/js/27.a07ad09a.js",
    "revision": "0e955ef59e8d1473d4d10b00039a48ab"
  },
  {
    "url": "assets/js/28.c2e42ae3.js",
    "revision": "ff5d880084eb30a3ceb7b116e5eabdc4"
  },
  {
    "url": "assets/js/29.b71f394a.js",
    "revision": "af5fdbd2769ef861cb8b60bd47e0b2b5"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.e010a4b4.js",
    "revision": "42d70bcf0c141854c664eab5df2753a9"
  },
  {
    "url": "assets/js/31.b5a2ed76.js",
    "revision": "454e31a0a64fec11727750be2c400a36"
  },
  {
    "url": "assets/js/32.fbe542ba.js",
    "revision": "7ebf4dfd127a3689a8970cfc31f90450"
  },
  {
    "url": "assets/js/33.dd46baf3.js",
    "revision": "6543882a208c9852e98827ef5cb87a3a"
  },
  {
    "url": "assets/js/34.e97c299e.js",
    "revision": "3ce43b4bc1ec3ca1e0a148103a4282a8"
  },
  {
    "url": "assets/js/35.b0b41624.js",
    "revision": "6e7bc2adb125abf94540115d92fe78ce"
  },
  {
    "url": "assets/js/36.e3a948a7.js",
    "revision": "650ebbb66f299f57c740a1d3ff5dccd3"
  },
  {
    "url": "assets/js/37.455d8fb4.js",
    "revision": "e160499fe160c0ff1671523cf9878c1f"
  },
  {
    "url": "assets/js/38.e86eaaa1.js",
    "revision": "5e9b6094dd03bdd6d3f9c55dc4c1f703"
  },
  {
    "url": "assets/js/39.6c30aa4f.js",
    "revision": "2f478f91928be59dc49c6abc0534a172"
  },
  {
    "url": "assets/js/4.b6dc4f46.js",
    "revision": "3d4ec50a5378004cead94380c7e79635"
  },
  {
    "url": "assets/js/40.c4fd1729.js",
    "revision": "1535c31a7add6b2ff18ee503da2b29ee"
  },
  {
    "url": "assets/js/41.7e332ee2.js",
    "revision": "8919934d050f6100d0f255c42fd2413d"
  },
  {
    "url": "assets/js/42.f602573a.js",
    "revision": "0113743f9280e05b09044c94afda2053"
  },
  {
    "url": "assets/js/43.f19ea6d7.js",
    "revision": "4f9e5f4934a9d54a0f62056df15f87f7"
  },
  {
    "url": "assets/js/44.00c98e26.js",
    "revision": "172bbc076a1e1d34e2bc7efb24eb395c"
  },
  {
    "url": "assets/js/45.dd5cc938.js",
    "revision": "cb5f7454862d344243c3606bb882bdee"
  },
  {
    "url": "assets/js/46.611176ea.js",
    "revision": "47a6ad33da95cb9b36b9f538a606a821"
  },
  {
    "url": "assets/js/47.3d38a595.js",
    "revision": "3391450ba986fd5f9b9592fb8ed42ffe"
  },
  {
    "url": "assets/js/48.0cfeb74b.js",
    "revision": "55f9056c14c8ea53951455c126edf8ec"
  },
  {
    "url": "assets/js/49.37d5c215.js",
    "revision": "d3f084042ddebee222420ebb1faedccd"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.abd649c6.js",
    "revision": "51d5ca4ab449b5298fbf324813a0716e"
  },
  {
    "url": "assets/js/51.1e2e541d.js",
    "revision": "5d067bdf545bea8f92a03d6a681ffbd3"
  },
  {
    "url": "assets/js/52.8ce067f4.js",
    "revision": "c3fbde27bc250b48d19fb94750904928"
  },
  {
    "url": "assets/js/53.7bf08066.js",
    "revision": "b9ad23531c99c0ae5a88c0cabd5a0534"
  },
  {
    "url": "assets/js/54.2688fffe.js",
    "revision": "adf96ca9aa72469795ffb1cf19f66655"
  },
  {
    "url": "assets/js/55.205213c7.js",
    "revision": "4e14446fd5af62554e441785741ad744"
  },
  {
    "url": "assets/js/56.bdacdd60.js",
    "revision": "7b9549d1f395a113faf33cb22fafb821"
  },
  {
    "url": "assets/js/57.515e9990.js",
    "revision": "797e870ae181057a6e470b5066e969d0"
  },
  {
    "url": "assets/js/58.85ea1a8a.js",
    "revision": "27b6f48db4aa3820eeedc7aa98b47e62"
  },
  {
    "url": "assets/js/59.105c503d.js",
    "revision": "118580dd5ea57f3c7bf130f1ca6ed214"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.6d0266c5.js",
    "revision": "4b42cfc88378be5db140c30573ab7fee"
  },
  {
    "url": "assets/js/61.3aa1a923.js",
    "revision": "96709f34cbb0207ee2bbdb0001abf0d0"
  },
  {
    "url": "assets/js/62.aca89ab4.js",
    "revision": "b2ff220bfc6c6e197714ce9fea37a6b1"
  },
  {
    "url": "assets/js/63.7da2a6e1.js",
    "revision": "cc442d89f67a2377d774ee44af570ddd"
  },
  {
    "url": "assets/js/64.4b9df0e2.js",
    "revision": "e24365760834842169f36f7de5fe4159"
  },
  {
    "url": "assets/js/65.84228e65.js",
    "revision": "3f5830d1b0f0c701da8cf2fcdbaf68bb"
  },
  {
    "url": "assets/js/66.2769b8c8.js",
    "revision": "1929c5d8b65921011f6451da514c1bac"
  },
  {
    "url": "assets/js/67.5cc6bbca.js",
    "revision": "ee213c31f88fb175a91dd9ed8e1d635b"
  },
  {
    "url": "assets/js/68.5dee8e36.js",
    "revision": "ae9779d19141690b9a0bddf90e836ea3"
  },
  {
    "url": "assets/js/69.ecf5bd65.js",
    "revision": "618749072b5bb7031613a8dc0d93405e"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.def78a0c.js",
    "revision": "deecefbf6c2ab23616e9dc72aebace3e"
  },
  {
    "url": "assets/js/71.3709f63b.js",
    "revision": "101b505a66baf2ea1a4f4cd64ebeaf03"
  },
  {
    "url": "assets/js/72.1147ef86.js",
    "revision": "0d142371b8f224d6d814dba6cf55960b"
  },
  {
    "url": "assets/js/73.74d0c23c.js",
    "revision": "447a11fcb36e10e9e27c1ed11f443888"
  },
  {
    "url": "assets/js/74.e07c9a98.js",
    "revision": "52e94f9cb2f2cf4cb6f3267d3518654c"
  },
  {
    "url": "assets/js/75.36656fae.js",
    "revision": "d6985a1f1ab3258c809645e3d9bacb74"
  },
  {
    "url": "assets/js/8.6237b39a.js",
    "revision": "9a46e70947b4bca4d298fb3a146bf9ed"
  },
  {
    "url": "assets/js/9.5deddbc1.js",
    "revision": "a79c4133eccffb337e93f16fad3a8e3f"
  },
  {
    "url": "assets/js/app.fbf22c4a.js",
    "revision": "22cadec18bf13654ca7ba4a4158bf494"
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
    "revision": "128a8c3762bda266d2caf9acf85b3ed8"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "d7db420a69f7951b6d7ca085de474a9a"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "5b206618cccb1b09cfa4ccbbc43f10df"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "b55d9c04ddeea6d64c86ea1e023019e9"
  },
  {
    "url": "course/lagou/path1/js-optimize-1.html",
    "revision": "480a0ed931b9631cc61ab6f930134257"
  },
  {
    "url": "course/lagou/path1/js-optimize-2.html",
    "revision": "2514eff0bebddae92c0404bd63b43b5c"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "47ed8356b22f31ac1a5ea5485d07e30a"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "83564d75c3f2fa57acc4b7f5bd39824b"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "1292bcf60e088ed5d1397a027791967c"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "248c50234c02b7f6406d73db2ef14332"
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
    "revision": "1486b8789d2a90146f286e523664f07e"
  },
  {
    "url": "other/偏激.html",
    "revision": "0766837c11624b7b44011bd5c7b69bfd"
  },
  {
    "url": "plan.html",
    "revision": "22ef4df5ea92bfa6d62dcdfd7db8f700"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "061991a0989e9bf53f10b853ed0ebe9e"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "5d07f6ad4e6aa7ff55390d1e22e1426e"
  },
  {
    "url": "projects/testhub.html",
    "revision": "31e6816f7bbfad7a0820fc71c54bb4be"
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
    "revision": "8e8d1b56cd1ffeb536bfe6b5f3a0dfad"
  },
  {
    "url": "server/java/index.html",
    "revision": "a4ded3cb80bde46f3fc5d8a749172d73"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "6c4bd92d74a8cfc8dc866e0633d65f81"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "d75cffea87ffc442d25f9c09ec63af67"
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
    "revision": "30772dfb001bcf2d9a5257e6e37913b2"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "98858b5bbdaa6109cc9465f266383ecf"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "212e5e4b732a6bcecbeb09c01a0295de"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "a3baf0e0846d71398a84dd547285b83a"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "238412bf1c518c2b622c8042f7d12df2"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "b096943a47507366e118c27cbf748367"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "be37dfd83bb3a50b35c82b0349aa9747"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "8cbf4560468025fd328b0ae90fd4c0e2"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "becebb0821a179c5f7938ea8797d2294"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "a9e8dc5908b2cd79f1b24d2a9d3a2c67"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "0058828d24cde91d3e2971285dcdc0da"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "5b000da9069ae2e58459930e7498531d"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "38c5824a7f957dc4fccbdb0659954718"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "b035bf792ee64ef8a24836a15c6c4f08"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "141142526b951ac6835e90dc742e834a"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "d3d268fb0988f43fcdf0b79392d14c4e"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "0723fdcaf664971d97d953fe5d869dea"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "d72761ef6a9fbbbd048b3a2e4d226080"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "981d0768010bb4ad950a8a458e321423"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "0a6ad1feaac28255987be6cfdea6e351"
  },
  {
    "url": "server/python/index.html",
    "revision": "b2d8d1dfbfbbe00f19407558fdb3cb87"
  },
  {
    "url": "server/server/index.html",
    "revision": "97faf4e33943e04c7bf36cafa08beeb2"
  },
  {
    "url": "server/socket/index.html",
    "revision": "e20431e355823051400783d0061f4ed9"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "e283e2ac9558f170dc380965c83fb4f6"
  },
  {
    "url": "tools/git.html",
    "revision": "2d5c68ad944894b7d1721214f02c8bce"
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
    "revision": "617d9bc1580806b69e3751115b12ac97"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "87c4b48eb4ddd964647bd78dc1af46f2"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "0ef4f94afd92b39fc84872507feb9df8"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "18c71939f5aff7f437eff0c9c18bd4f8"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "3712e8ac7451b848e0e1f2ed127bc4af"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "6505b5ba314c6c419372598348728267"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "37befdd340a852a7f8a90a6f5608a078"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "910e8e59960b021b7dcff7c381a28ea7"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "235c315ab521b80809adcd97578d7f5a"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "1d4aac48c4fd74ce0d0d08a3f8fc5a44"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "56bdfed9dcd3dffcc87755eb8a4a6bff"
  },
  {
    "url": "web/basis/async.html",
    "revision": "a4fbf66610a51afdf14361a5d930b3fa"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "18767bdd6de00ef064cfb70b545c85a2"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "958b38d564af4cc0f390b51243ef54b3"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "92e35e432f3a67fe51d683e459e754b0"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "243a19aa4339d9ae09eb3dcb11579516"
  },
  {
    "url": "web/basis/html.html",
    "revision": "42c7fd48123ebc37f8b4c851f3e6ea89"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "ec9a20f192b9306148277139d119d260"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "b11c73222af40f9595a3a1f3b347f1c0"
  },
  {
    "url": "web/framework/index.html",
    "revision": "3cedc0f08e55f5c70f07623ed25614f3"
  },
  {
    "url": "web/framework/React.html",
    "revision": "e59cd0bbe7415f02d88717d0688f321f"
  },
  {
    "url": "wechat/index.html",
    "revision": "02088f9405186bcc3d4727c8036838e7"
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
