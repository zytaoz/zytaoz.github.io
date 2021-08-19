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
    "revision": "ec61ece834755eb65a6b171bb782b530"
  },
  {
    "url": "assets/css/0.styles.76b3bfff.css",
    "revision": "2e08f5c67f9050c1a13a4fb758f185a6"
  },
  {
    "url": "assets/img/danger-dark.7b1d6aa1.svg",
    "revision": "7b1d6aa1bdcf013d0edfe316ab770f8e"
  },
  {
    "url": "assets/img/danger.b143eda2.svg",
    "revision": "b143eda243548a9982491dca4c81eed5"
  },
  {
    "url": "assets/img/info-dark.f8a43cf6.svg",
    "revision": "f8a43cf67fa96a27a078530a3a43253c"
  },
  {
    "url": "assets/img/info.88826912.svg",
    "revision": "88826912d81d91c9e2d03164cd1481a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tip-dark.075a244c.svg",
    "revision": "075a244c83d1403c167defe81b4d7fe7"
  },
  {
    "url": "assets/img/tip.a2b80aa5.svg",
    "revision": "a2b80aa50b769a26da12fe352322a657"
  },
  {
    "url": "assets/img/warning-dark.aac7e30c.svg",
    "revision": "aac7e30c5fafc6748e21f7a9ef546698"
  },
  {
    "url": "assets/img/warning.ec428b6d.svg",
    "revision": "ec428b6d6d45ac5d0c610f08d757f40f"
  },
  {
    "url": "assets/js/10.3652f750.js",
    "revision": "15b5f400a0b188f1140d08655ffa4ee7"
  },
  {
    "url": "assets/js/11.2cd85bfa.js",
    "revision": "e4bf90f27be8cb02b80a1eee43eee87a"
  },
  {
    "url": "assets/js/12.a73ef834.js",
    "revision": "650a6db8c618f472ed405354f4bf7c21"
  },
  {
    "url": "assets/js/13.ca6d23e1.js",
    "revision": "5aea3cc2d421f1ef6487293f6ec709f3"
  },
  {
    "url": "assets/js/14.4b5b837d.js",
    "revision": "0a23dcc5bb68e3e8ced44aaad7c085d6"
  },
  {
    "url": "assets/js/15.64cf4207.js",
    "revision": "27bda695e86d2ba7e46c8f73da2a2f51"
  },
  {
    "url": "assets/js/16.00b60f53.js",
    "revision": "d3c716f6fc1ad016053c508750e52fca"
  },
  {
    "url": "assets/js/17.0f25e556.js",
    "revision": "c5c9e8d06096a1510ef7201b79bfe4c8"
  },
  {
    "url": "assets/js/18.11147bd0.js",
    "revision": "38eba3e75ab6b8d60bb0d5adbc4c463f"
  },
  {
    "url": "assets/js/19.1a631861.js",
    "revision": "6d870017d999cfae38860c2f46e168a4"
  },
  {
    "url": "assets/js/20.2a083849.js",
    "revision": "4040d44f2115f760d605e4d43449dc93"
  },
  {
    "url": "assets/js/21.58c301c5.js",
    "revision": "1819a2fe893fad98ff87b3c1407e2e77"
  },
  {
    "url": "assets/js/22.1e1a27d6.js",
    "revision": "33253827c49c667b231eeb959b91c13b"
  },
  {
    "url": "assets/js/23.0d85b868.js",
    "revision": "c5089bac40067decb422eb1c961b0098"
  },
  {
    "url": "assets/js/24.8362f5b0.js",
    "revision": "b06aad07f088e7f3666fe09e98dce1a3"
  },
  {
    "url": "assets/js/25.db212782.js",
    "revision": "5cc8a8844a29c1a7dc976c75ddaedcb8"
  },
  {
    "url": "assets/js/26.e8e0b79b.js",
    "revision": "7619de01d17dbe86e8dc309816e8e013"
  },
  {
    "url": "assets/js/27.90612a45.js",
    "revision": "ab1d35cad8465df48ac7d648d8262b08"
  },
  {
    "url": "assets/js/28.d14c7dce.js",
    "revision": "4852067f70fc2dfad05d7e4f1e421664"
  },
  {
    "url": "assets/js/29.7002914a.js",
    "revision": "bed5af43cd3d2e309ad02c98259f283e"
  },
  {
    "url": "assets/js/30.6e30b418.js",
    "revision": "60abbb40c6834e11ce7f03d6816e35da"
  },
  {
    "url": "assets/js/31.fb6244b3.js",
    "revision": "804d0902737583387e58721c2e5cdeed"
  },
  {
    "url": "assets/js/32.a5f50b3c.js",
    "revision": "30140e46d6a4da42da281c7881376e76"
  },
  {
    "url": "assets/js/33.600fe590.js",
    "revision": "f46d534886c3909c379880a7f7112689"
  },
  {
    "url": "assets/js/34.f7516b81.js",
    "revision": "c8bbc301b2614ea3d09212fcb5b4ce9a"
  },
  {
    "url": "assets/js/35.ea6592ea.js",
    "revision": "4e9ff5f46eee25aae2f21759c3e62ef2"
  },
  {
    "url": "assets/js/36.f88fc2c5.js",
    "revision": "8cb6d4b97394bd6a44c8e4fe401f1135"
  },
  {
    "url": "assets/js/37.3062fad2.js",
    "revision": "bb882966fa7d7798efc34542f0280d3b"
  },
  {
    "url": "assets/js/38.7ed599a7.js",
    "revision": "1df601a1b65527296adf9555db727d99"
  },
  {
    "url": "assets/js/39.a5b4e55a.js",
    "revision": "e03152195e26b532ab8af91869875900"
  },
  {
    "url": "assets/js/4.2e762387.js",
    "revision": "02e8b13f32c88afdeb89c59682f6a1e2"
  },
  {
    "url": "assets/js/40.d7363997.js",
    "revision": "120db2525e4049663a50f5eaad35a60b"
  },
  {
    "url": "assets/js/41.7c9ecb93.js",
    "revision": "c9bf8137b320f4d7dfab06ca8a5e81b2"
  },
  {
    "url": "assets/js/42.62d225d6.js",
    "revision": "aff6bdeb8d6ca1e566c6137664524bf2"
  },
  {
    "url": "assets/js/43.68a1680d.js",
    "revision": "231c86b59a1998c6c0883fec0699b0e2"
  },
  {
    "url": "assets/js/44.0a42eb41.js",
    "revision": "6c50a299b071b92fbd3c3d326a2e0f18"
  },
  {
    "url": "assets/js/45.2320b155.js",
    "revision": "d97445a8db30a1c79218db7fdf4fca50"
  },
  {
    "url": "assets/js/46.e6535cae.js",
    "revision": "17690a567b03f321a8124ccc916cf088"
  },
  {
    "url": "assets/js/47.a34a7344.js",
    "revision": "a49d2f462ccb059f1df47f3efca30919"
  },
  {
    "url": "assets/js/48.1b5b2379.js",
    "revision": "5e69fec4427c1f12d1f3d1812be0ef1d"
  },
  {
    "url": "assets/js/49.77f36eb9.js",
    "revision": "5a5e13be43e5f3b553cab7c612c15fe0"
  },
  {
    "url": "assets/js/5.047a5a44.js",
    "revision": "e4670eb143bd5cf685cb27e41929ca0e"
  },
  {
    "url": "assets/js/50.2aefc823.js",
    "revision": "58b10e2260f2d630ada9b63aa37aceae"
  },
  {
    "url": "assets/js/51.ecc468cd.js",
    "revision": "757e7a00bca177c390e25019a5c35e67"
  },
  {
    "url": "assets/js/52.aa24ee17.js",
    "revision": "1122f66ef9141a9d016a44fcecf6263a"
  },
  {
    "url": "assets/js/53.adade0d3.js",
    "revision": "adcf9987cd6510fedd6a2f539ef89068"
  },
  {
    "url": "assets/js/54.8a93650e.js",
    "revision": "4efcd06423ebf363c6461bb1cd3ed0b3"
  },
  {
    "url": "assets/js/55.6e8e051b.js",
    "revision": "831e6fe56b240083246828b71eb4ec97"
  },
  {
    "url": "assets/js/56.9d09670a.js",
    "revision": "cf7893ff2f3dacb66bee1beb4b053b39"
  },
  {
    "url": "assets/js/57.b2ad21ec.js",
    "revision": "64e6b2231a5698d4fc6deb4c8cc81da7"
  },
  {
    "url": "assets/js/58.4fc7a9c7.js",
    "revision": "35645bea339c72707ba476797bf2f153"
  },
  {
    "url": "assets/js/59.b3aa4c29.js",
    "revision": "e9d2952f7ac9f90af1d4a83780c3a814"
  },
  {
    "url": "assets/js/6.9ec9e6e1.js",
    "revision": "af1e74bdd94d0f9fb354c7a4ea23ea58"
  },
  {
    "url": "assets/js/60.58666e56.js",
    "revision": "f9d5d48ba2f0ec20bec9ea106dfcb58f"
  },
  {
    "url": "assets/js/61.e80fcb0b.js",
    "revision": "0962632633898a94838570f4e914dfd2"
  },
  {
    "url": "assets/js/62.683ae754.js",
    "revision": "5f71255b6e8507dd4435fce20978b17f"
  },
  {
    "url": "assets/js/63.fb80f419.js",
    "revision": "0448719ee34d8a69f181c10bd92d3c01"
  },
  {
    "url": "assets/js/64.43cd6e14.js",
    "revision": "9a8fd4b2599f795db9cb7d4f947ef488"
  },
  {
    "url": "assets/js/65.71ecd089.js",
    "revision": "225b5585546e12e0b512de438788f6cd"
  },
  {
    "url": "assets/js/66.763c87bf.js",
    "revision": "b6e78b801f1015f13aa5c4fd335b972f"
  },
  {
    "url": "assets/js/67.5f942865.js",
    "revision": "5912c8de710eff73a1e32af0f0408944"
  },
  {
    "url": "assets/js/68.ae244905.js",
    "revision": "45a2be3a0f896cc995cc7be514146d69"
  },
  {
    "url": "assets/js/69.3038c385.js",
    "revision": "ce0c0cc900d64f140904809824680d93"
  },
  {
    "url": "assets/js/7.6dfe07f2.js",
    "revision": "10cfc35033487f09be5296fdc2905553"
  },
  {
    "url": "assets/js/70.0242b6fa.js",
    "revision": "9a89623707c0757afed4e2c4e20e572e"
  },
  {
    "url": "assets/js/71.ae5839de.js",
    "revision": "c72a5a7a74b188ab4ea5937d1a103a10"
  },
  {
    "url": "assets/js/72.c10ea7c8.js",
    "revision": "9ead24473e05fdcc53458fda9db831e1"
  },
  {
    "url": "assets/js/73.c200d391.js",
    "revision": "47a0d4b5445a63cfb79d0580e0fa922c"
  },
  {
    "url": "assets/js/74.0a1f0fb0.js",
    "revision": "8e7e4f85ad83ee71bbd6945657376058"
  },
  {
    "url": "assets/js/75.81c7876b.js",
    "revision": "1f2d5bd03fc2fa9a0c8fffdeb4c4fe6f"
  },
  {
    "url": "assets/js/76.36fe379d.js",
    "revision": "9a488922b822bb74cf32f07bf2109ee7"
  },
  {
    "url": "assets/js/77.7416279d.js",
    "revision": "28d77e188cc54bee5421487522550a62"
  },
  {
    "url": "assets/js/78.6d46d0eb.js",
    "revision": "c9d46f396b5189f444e74e1ba0647a9c"
  },
  {
    "url": "assets/js/79.ce789916.js",
    "revision": "314ad9caca001a9182e593f50cbc96d2"
  },
  {
    "url": "assets/js/8.8fdba436.js",
    "revision": "a4693b03077cae4f2e29a2f55c4c6020"
  },
  {
    "url": "assets/js/80.488b4e3c.js",
    "revision": "66e7cccca78af2c60a1c247dfb071ddb"
  },
  {
    "url": "assets/js/81.68d6dedc.js",
    "revision": "064559040d0cef82132b62b1e4315cfb"
  },
  {
    "url": "assets/js/82.e6acf394.js",
    "revision": "f614d856fe7f22003c8e1000853dcc14"
  },
  {
    "url": "assets/js/83.08b045ea.js",
    "revision": "107af61fb45c7accd846ac05f7574294"
  },
  {
    "url": "assets/js/84.901d862f.js",
    "revision": "b3e0c68f1a04f684c964255a90a00c46"
  },
  {
    "url": "assets/js/85.98926e99.js",
    "revision": "5e3693d8ad598f23cdf4cfdf6190c9cb"
  },
  {
    "url": "assets/js/86.43ae812c.js",
    "revision": "c008a053b082f312f6c74c42d14511cf"
  },
  {
    "url": "assets/js/87.77d63446.js",
    "revision": "b58f792e352c104eb1b2b3b309620b50"
  },
  {
    "url": "assets/js/88.f0ebc169.js",
    "revision": "33d5948937c4f6576a87ef627d3127a5"
  },
  {
    "url": "assets/js/89.e6630625.js",
    "revision": "598e465a62211b27aabe07c86d9a7642"
  },
  {
    "url": "assets/js/9.fb78528e.js",
    "revision": "36122cfd4ebfe2fee6e24bcf80366d9a"
  },
  {
    "url": "assets/js/90.3ea0fc73.js",
    "revision": "2e34fef98e254c04a0c680e604df15a4"
  },
  {
    "url": "assets/js/91.7abc59d9.js",
    "revision": "151457d278f3eacd993c109df37ea8cb"
  },
  {
    "url": "assets/js/92.1d35dbc4.js",
    "revision": "f6e4caa77fb9e76c9d4a326709f5a495"
  },
  {
    "url": "assets/js/93.05d35b0d.js",
    "revision": "ef682b6b7ba3c4a4b9ad14596e23188e"
  },
  {
    "url": "assets/js/94.5fa3706a.js",
    "revision": "13865ed3148cdfac4523f6ab947be153"
  },
  {
    "url": "assets/js/95.497c9ac8.js",
    "revision": "4497e8008b677717cad8e2cfcefb0290"
  },
  {
    "url": "assets/js/96.4481e67d.js",
    "revision": "544ca46d21a292ef4fc2d20a024b8e51"
  },
  {
    "url": "assets/js/97.daf8a71d.js",
    "revision": "e8e4d0f7af50eb494d6f6988f5d16840"
  },
  {
    "url": "assets/js/98.fab60990.js",
    "revision": "4c2977320a3d1203d67e936a0be61042"
  },
  {
    "url": "assets/js/app.9eb77283.js",
    "revision": "e06d5931c18fc872e313cfa119fea991"
  },
  {
    "url": "assets/js/mermaid.72561d15.js",
    "revision": "8ccad78f7b161a849ce37123412f417f"
  },
  {
    "url": "assets/js/vendors~mermaid.1e9b40c7.js",
    "revision": "6420e9c1fbc4fd1512c8859e556a3d80"
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
    "revision": "5ccd811df38c7e899bd8a576f1aa5fb4"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "1c1c3a0ff20a7036d75e35140521b02e"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "f87481aa61045b92b524e8e69fe5f33c"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "e782dde516c77bff94ac57ce83ed2693"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "1cd437e90d2e5b1b7777d471023680b8"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "fc9b1d9779e50a787ee6f95003eebd02"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "d335b943d436477f9ad180896f1b6be1"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "f870ece420619f6a5371a7e89ecc539e"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "815ffc0f441851e4ed59209e23daebd2"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "7375e1a98ac1fb1f5ebe123121a0e12a"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "2e2965bd96671d4a7be04196c31d33b2"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "fa71d3b7048df6859335b7bbb4c5056e"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "fed1f5a56631666237610a0ffa43af04"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "3940d1228a54d06e656d9cda677d1fcf"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "f49e2a0e43598152f7940e4f1e665553"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "c468411f8e3e39b7a686787b2ac46ccb"
  },
  {
    "url": "course/lagou/path3/basis.html",
    "revision": "a996bbeb30f2ae6ea55abb73f66b1dae"
  },
  {
    "url": "course/lagou/path3/module1/response-principle.html",
    "revision": "e03477daa13ae13e7dab4f7f8f8b805c"
  },
  {
    "url": "course/lagou/path3/module1/router.html",
    "revision": "6fb3c2943d37ba912157eda63d09cc36"
  },
  {
    "url": "course/lagou/path3/module1/virtual-dom.html",
    "revision": "e0a8fcf6b11852ce61cba17260655721"
  },
  {
    "url": "course/lagou/path3/module2/source-code.html",
    "revision": "87e2937f605214666176603a900d9313"
  },
  {
    "url": "course/lagou/path3/module3/ssr.html",
    "revision": "e82efd311ba20adc933ef0f577a27fa3"
  },
  {
    "url": "course/lagou/path3/module3/vuex.html",
    "revision": "1c6565dadbbbb9f92231f615cc0ba110"
  },
  {
    "url": "course/lagou/path3/module4/my-components-libs.html",
    "revision": "683130bc5d37beb8e4a83a0e0daf285e"
  },
  {
    "url": "course/lagou/path3/module4/my-ssg.html",
    "revision": "80d45e62b7ecb2b27def98afc72b1266"
  },
  {
    "url": "course/lagou/path3/module4/my-ssr.html",
    "revision": "4c0412f70ac4228381f187d570288458"
  },
  {
    "url": "course/lagou/path3/module5/3.0-theory.html",
    "revision": "3a300c834501f1a803fb646ec3f46623"
  },
  {
    "url": "course/lagou/path3/module5/compostion-api.html",
    "revision": "8b2c60573c5250678d23f60d8e3c626b"
  },
  {
    "url": "course/lagou/path3/module6/true-project.html",
    "revision": "4f46e79c08203b7a3d78a783e6dafaf8"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "1d8f711b560f7470e28c6034c105d1de"
  },
  {
    "url": "lagou/eslint-init.png",
    "revision": "dbca62f977ba2df2f10587240f3a315d"
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
    "url": "lagou/vue-router.png",
    "revision": "52763b43813c6a16c62982fbf9b94a73"
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
    "revision": "011c0865bbef664aebbe0922613695b6"
  },
  {
    "url": "other/upset.html",
    "revision": "ce21da11b748a85b6978636a28f0d622"
  },
  {
    "url": "plan.html",
    "revision": "bbbc58dbad03e6ab80d894f4a69c0b53"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "72fd2c4054fc86dedf97432a05b0b8df"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "e3c9edc5ab29e2bfd884e55e3b399eca"
  },
  {
    "url": "projects/testhub.html",
    "revision": "7d736a8beda2132b24c89164e293241d"
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
    "revision": "18a6d4b5b37ee65de401b957980da3f3"
  },
  {
    "url": "server/java/index.html",
    "revision": "38c768649d9168027315bb719df562d4"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "708060eca21ab1bed4b52e0463f96fed"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "640fabca9651afc8f16f0b3e4e8e2223"
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
    "revision": "15ccff50d5787370ac91c04a45e8681f"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "14a7f7657f4a77e105f299a6232e2f65"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "8a5463e0da65236168362d10a6be7dd3"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "df1db91b39af409d5d8258dbaaa20ce5"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "96bb8fa4fcd504806620ed8ebce64ac4"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "b47ca85e016cbed8fd3e61164ca7e756"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "e32cd7f3512f5bb634ed29f7e483d20e"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "4818caaf833e1458e967e54108d9c341"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "06e47734d12962c4d8c26f1c26e0f2f0"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "589773187b3857c5fd388b017be8612c"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "ff4872cee579a99fbb8119d617ab2ad0"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "9f0e998484723c92f3008ef3315053de"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "9baa3903572765b13c28ec3581ecff03"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "e1d6a188556521280fc5154184c11914"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "53784cf70f1a9d511bfb045fd823aa66"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "fba7e22558fbda0c23f4154142828cb7"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "43ef1d16fa960b9ee5f04f3803fe47fc"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "75748b84c2be30ce462d79fd2cfc32c8"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "37c67c57525dcbcadaa8c8b2858569d9"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "44d4346d619eaa0af9fee48461acae2f"
  },
  {
    "url": "server/python/index.html",
    "revision": "2bb9ef2c68753f157f58ecc2ce017641"
  },
  {
    "url": "server/server/index.html",
    "revision": "9672bb464dbb2afc567a5cfac6d2b6aa"
  },
  {
    "url": "server/socket/index.html",
    "revision": "be1da03351bfff7af59aff120eb4cb4f"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "c2c765b86f62455080c2c9d3fc597011"
  },
  {
    "url": "tools/git.html",
    "revision": "6682cf6896967e93634b923ba038db3a"
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
    "revision": "cfe3333758e9fc0f42f173dcdbf75d0d"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "cbb44889d6e83e3775e7c10c3887eade"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "9462027c96bbacaf490f7ec124a2ae3d"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "3f72f7bd5bbb4d81db13a4f42754cb0d"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "94198b32b0085396b5ac7d51baa5ae18"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "a9c81d640070852ca49dd68bc67f4b92"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "f213f6c3b2fa4261944cca98c8d6d383"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "303586cee2af98d16cd8e566fa158163"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "5938b3f52b15bec8c0e47626461c93b6"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "ad411121bdf9db105de5f61a83a8ee15"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "6fc0c73c02633c2c9e7411619b9b88c7"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "a453add8a845be92e233e14a00a2fb0b"
  },
  {
    "url": "web/basis/async.html",
    "revision": "6d17f7171b77d78a3cba46b6939a7059"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "3e9d0544eefbe8a5b3e8ac787a4873ca"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "668c5c017d44c6ebb01968283ac80f5a"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "f4f422afff0de36616fb66cfab3292b6"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "f2508eb055da5a459d18001388c798e9"
  },
  {
    "url": "web/basis/html.html",
    "revision": "82c45d6bf35b49ce4d3c7daaff861b9b"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "8b3f7371f3433d09632048f1ee830686"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "611f579d93ae4028f157e1a8bbe9c644"
  },
  {
    "url": "web/framework/index.html",
    "revision": "d2e602d7839ea355479d8654266f7693"
  },
  {
    "url": "web/framework/React.html",
    "revision": "e97b7c217b08f893c039aca9c62acd8d"
  },
  {
    "url": "wechat/index.html",
    "revision": "2e2df0fb2d73686a0558abefeb909e4c"
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
