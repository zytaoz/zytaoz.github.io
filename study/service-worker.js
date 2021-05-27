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
    "revision": "2afabcc20c2653697838f9cff3acf40a"
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
    "url": "assets/js/10.326ca6b3.js",
    "revision": "4747f2c947e7bd18972d2f36cffec6b5"
  },
  {
    "url": "assets/js/11.69342b01.js",
    "revision": "18ea8e5dbb733a6b27f97ce7b564553d"
  },
  {
    "url": "assets/js/12.80fe24aa.js",
    "revision": "6ea1546e4e165cc3a4e0dee2c8eb9475"
  },
  {
    "url": "assets/js/13.7d88b723.js",
    "revision": "461376a07971ece0e43ad5bb710cb09a"
  },
  {
    "url": "assets/js/14.089f2c0d.js",
    "revision": "31fe8df54125124b25fe074bc91baf78"
  },
  {
    "url": "assets/js/15.23fa6b62.js",
    "revision": "c64179f3cc051d597c9fd9409b961d2b"
  },
  {
    "url": "assets/js/16.e736522f.js",
    "revision": "f36404ed6f94b6536f8e5f9857d45c45"
  },
  {
    "url": "assets/js/17.8186fac1.js",
    "revision": "bfde7d34628c443993e6edaabb555578"
  },
  {
    "url": "assets/js/18.93bd7ca7.js",
    "revision": "1d66522f77d80ef6ab6df827c7601129"
  },
  {
    "url": "assets/js/19.33681dcb.js",
    "revision": "2a07f953efd276721ef78943b8d89039"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.66e46f81.js",
    "revision": "80023c9244120edabced92b612d59b2b"
  },
  {
    "url": "assets/js/21.c52db65f.js",
    "revision": "ebeac88ecb71cef72fa5b50c68df2781"
  },
  {
    "url": "assets/js/22.e821491b.js",
    "revision": "5949b9d057b4a89d7b21147fc1608f7f"
  },
  {
    "url": "assets/js/23.95344d0b.js",
    "revision": "2d20d4522beeb1c78adf4797be87eeca"
  },
  {
    "url": "assets/js/24.297d5158.js",
    "revision": "0353999d117fcef0ead1f8f3ac2a875a"
  },
  {
    "url": "assets/js/25.6bdd28bf.js",
    "revision": "1f8ec6663040b09f7f143f5ab0e9447b"
  },
  {
    "url": "assets/js/26.e2f32df3.js",
    "revision": "bf5bb95b0f1fbbabc73da97eaecd848c"
  },
  {
    "url": "assets/js/27.84e1570b.js",
    "revision": "c75ac2bce4eaf60515c602b6d3aca752"
  },
  {
    "url": "assets/js/28.292ba892.js",
    "revision": "f510fae2e2ea06b6a3610de0360dbe56"
  },
  {
    "url": "assets/js/29.b57f10e6.js",
    "revision": "dbdd7fa768349b14c8261866fec75104"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.1d600cb4.js",
    "revision": "9fa228ea91f5fed2b2c4902475caffb7"
  },
  {
    "url": "assets/js/31.e7f4012a.js",
    "revision": "5397bdae71456a91d0c451429f294e6c"
  },
  {
    "url": "assets/js/32.deff23ab.js",
    "revision": "de06ea6d4e167ad35098cc3772bf8923"
  },
  {
    "url": "assets/js/33.89db53b5.js",
    "revision": "0c10a02cd78579553e4b9b646f933354"
  },
  {
    "url": "assets/js/34.c2c1d847.js",
    "revision": "925c8876a23a436fa980462b36f56fd1"
  },
  {
    "url": "assets/js/35.d3f2ca95.js",
    "revision": "c9c82efb6bc78fe14d65181ce8380a32"
  },
  {
    "url": "assets/js/36.e95dad80.js",
    "revision": "95e0ec2eebc2ddbff6bc57aa1c99db7b"
  },
  {
    "url": "assets/js/37.9a91a829.js",
    "revision": "4045bdeaa57c1b5b1d631e8b952ee150"
  },
  {
    "url": "assets/js/38.d78edaac.js",
    "revision": "9380c76ac3d984cbfbce5f61073bb8b7"
  },
  {
    "url": "assets/js/39.3e6f5b19.js",
    "revision": "6d465bf9fd8f23e996589dc3be4716f8"
  },
  {
    "url": "assets/js/4.c7e03a32.js",
    "revision": "3216f5054030b8ab76a691a5fd4a792c"
  },
  {
    "url": "assets/js/40.a26294d4.js",
    "revision": "a91375035c55e550beaa3dd2a3742f5a"
  },
  {
    "url": "assets/js/41.4057d705.js",
    "revision": "606b6c88bcf7876b92506150734a1fe5"
  },
  {
    "url": "assets/js/42.74d37fe6.js",
    "revision": "d71e032d339c0c8027f893973dcaeb3c"
  },
  {
    "url": "assets/js/43.021f54c3.js",
    "revision": "5039eb6bbc645a6b2431c6aac09e0fb8"
  },
  {
    "url": "assets/js/44.58c5c314.js",
    "revision": "6043932c7a0adbdb05d0aa3839d58bc7"
  },
  {
    "url": "assets/js/45.1febb4cc.js",
    "revision": "b69c739b8f5ed3a7108143a5c8411ccb"
  },
  {
    "url": "assets/js/46.954fcc16.js",
    "revision": "fb9f7a63e7db53ae3f3886f2934a9125"
  },
  {
    "url": "assets/js/47.79c9c60d.js",
    "revision": "ec27f8db98f4d2c19c4fa0740165470d"
  },
  {
    "url": "assets/js/48.a261a5e1.js",
    "revision": "b6c85cab0a64a8e2769ee337cdb84b9f"
  },
  {
    "url": "assets/js/49.f86c0c51.js",
    "revision": "2a11dfe8305c62612b47aa2478981bf7"
  },
  {
    "url": "assets/js/5.4527858b.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.f2e1cece.js",
    "revision": "64dd63a1a0b8ddef044e4580e463c959"
  },
  {
    "url": "assets/js/51.b0e0f3de.js",
    "revision": "e159ff6cc591fdc463d2d72fd15ef666"
  },
  {
    "url": "assets/js/52.5727a79e.js",
    "revision": "49b0b2c82f1c0eb4e64d97c7bb0bf76f"
  },
  {
    "url": "assets/js/53.fb0d17ea.js",
    "revision": "ba338de23725f9ad71efac007b3caa97"
  },
  {
    "url": "assets/js/54.ba378e1d.js",
    "revision": "c970c433e217a163285288cc85e2f06b"
  },
  {
    "url": "assets/js/55.82919302.js",
    "revision": "79c1279657ce23daf4c84398413cd3e9"
  },
  {
    "url": "assets/js/56.a880ba7e.js",
    "revision": "9d3e8da9982068372bb0f77a5f02fb24"
  },
  {
    "url": "assets/js/57.76c2599e.js",
    "revision": "e38769d7e02584b9f11487df9384825b"
  },
  {
    "url": "assets/js/58.5a3ea482.js",
    "revision": "46e8303c11b25a4f63dd54bee0c0faf7"
  },
  {
    "url": "assets/js/59.c880a2f7.js",
    "revision": "509c3d07307ecd3db3341a5d1b2b69c3"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.d4ecdf54.js",
    "revision": "362067be6f22b8e0cacef5870a5a552a"
  },
  {
    "url": "assets/js/61.2d2bdaf7.js",
    "revision": "87fed83e06ca60daa86c6b0a854d2928"
  },
  {
    "url": "assets/js/62.5834c9c1.js",
    "revision": "01a3ffe94be27326d780773ae3e6b905"
  },
  {
    "url": "assets/js/63.8e674abd.js",
    "revision": "158a569fec452cbbcb4c640796a42215"
  },
  {
    "url": "assets/js/64.ec3abada.js",
    "revision": "184cc5cf980e1857bee836c4a18dfb09"
  },
  {
    "url": "assets/js/65.fe9e86ae.js",
    "revision": "9079598e4002d14aee237e3d81d5da38"
  },
  {
    "url": "assets/js/66.58c5ed6c.js",
    "revision": "8d5cb52ef306f35a5e761d2e7d077db3"
  },
  {
    "url": "assets/js/67.9008584f.js",
    "revision": "70f1c56a8351717ae57c1d71077069d9"
  },
  {
    "url": "assets/js/68.ee7f5df9.js",
    "revision": "3df7731bfe608ee40c6d8c2c4408dd9f"
  },
  {
    "url": "assets/js/69.9deee8d0.js",
    "revision": "4382d88479dde4d193b1f2883aa0da2b"
  },
  {
    "url": "assets/js/7.574db714.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.e683ad5c.js",
    "revision": "b7b15d5c69112673b303b9f6ac231425"
  },
  {
    "url": "assets/js/71.6fbc55b7.js",
    "revision": "414f87801872ba7771aae4a19df0bfc7"
  },
  {
    "url": "assets/js/72.14ae1f79.js",
    "revision": "95d65881d5cb08063fdae350c2c7ca8c"
  },
  {
    "url": "assets/js/73.cf0e7d93.js",
    "revision": "96636fd887c9bc1965f05a26186ced75"
  },
  {
    "url": "assets/js/74.b0032f61.js",
    "revision": "b359511109860aa0d7dd1cb55d1414d6"
  },
  {
    "url": "assets/js/8.6e7e3d6c.js",
    "revision": "9a46e70947b4bca4d298fb3a146bf9ed"
  },
  {
    "url": "assets/js/9.0cfe22ea.js",
    "revision": "a79c4133eccffb337e93f16fad3a8e3f"
  },
  {
    "url": "assets/js/app.e094f50a.js",
    "revision": "f0fb89304e89b2953ca82e137bde2d50"
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
    "revision": "b1dcc483a039c3bb54daa648f6134a37"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "70acdadcc297e179173a72cc96e3c5cc"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "45dd9a6979399dc6c6c987558db93081"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "e2f7f567ce0dd75baef9b2214f0dc7cd"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "79cbf03b6f97981d97bfc4b6d03b1cc0"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "c7ea9e219f8f75639ae1f53aec73f022"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "62842e3d6df1459b6e8348f0286759bf"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "3830c56221db662d0762c5bcb6ddac19"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "aa72c57133537e7d63454d7ca0c83155"
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
    "url": "other/偏激.html",
    "revision": "bd8406334a9d585f99c39ff3301b857e"
  },
  {
    "url": "other/upset.html",
    "revision": "102d726336fd7706fa04877c279f0fe1"
  },
  {
    "url": "plan.html",
    "revision": "91116601527b4212d266455d7900f781"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "21cefba3796460b0c0b7c64c25d49178"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "f90fd00445792083ce67c2d644c6f770"
  },
  {
    "url": "projects/testhub.html",
    "revision": "e7561f422739ad66a697a7e416216ded"
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
    "revision": "af623374d762ba00e944e3b9fa4d0e28"
  },
  {
    "url": "server/java/index.html",
    "revision": "8491a646ec9d31d4ba3fd63957a86e32"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "e0927d9d5e5087c148bce5fa1bfd0802"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "d8218d7903fb7f973130ae19a745d304"
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
    "revision": "0db53932af7c6d85a10dc33462ed3045"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "f1c10f4e1fae466b7b94bade68243586"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "a4c54efc779e5861893a1595f5c7b497"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "c986c01a0096ccf79ab0541971e71fe7"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "667456047e590d6ab020d949925c721e"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "147999bc0ed459cd6f6b6405d91699f4"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "11dfda7a4ec6c66bacf34bcc07902d91"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "51e90662f92db3188970d3928a0135dc"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "7291541c1baac76f8a89ebe80b50771a"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "c1d4f3ca61a767ef202fb1efefc2221c"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "b4f38101e15edd630b6c5e8c3c7b569c"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "4d6d156cdd70fb033ad8ca14098dd1f9"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "e1479cf72f887a36e8eb4f101988e5bf"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "16d8953583587050f7352c33fb404bff"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "1bbb4b7ca77640fc32211cca789116f4"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "933ea4ccdeeb5780d96b01c508f9f378"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "6d5fd77aa798b8b8444ce46ed93fa564"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "7887e138496f3a8822eae3447515f2ce"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "b2ccebf1ec95131bf35b64b6ed418fef"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "34ad5ae03913445f898b724d86a401d1"
  },
  {
    "url": "server/python/index.html",
    "revision": "b0f9034e14ec6c919f227b260b974f7a"
  },
  {
    "url": "server/server/index.html",
    "revision": "c493ed056a1631a7cf4227a9f19a36c6"
  },
  {
    "url": "server/socket/index.html",
    "revision": "7e82a045eb3ba8a32a9058ec3c8045ec"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "63a15554179999307fcb030e396c8749"
  },
  {
    "url": "tools/git.html",
    "revision": "5000903c94a905517cdc063b30649cd5"
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
    "revision": "983303581f00f4182fa887710a6d45a7"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "f37230e2bd15ca4fc51898c6865c2458"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "cd8ebd67872638069da8d61afa9a4494"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "5bb0a037a54f8e9aaacd0f8b1cde7b53"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "47b2b40d40116df0fcd550bd13f60dfe"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "d0fa3a5866aa61ac0c9d7c71688dea6a"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "5c8b9777d8f7c28e821567e994e4869c"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "03f31f56951a0cbfcbd5e6994a350ee7"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "69cf3b1fdc0482f8d9b0d53c36f93c2f"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "1c506fabe48900b1ccecfee9f80e7df4"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "a147974a62d5ac4f3ee87a00dc4e0762"
  },
  {
    "url": "web/basis/async.html",
    "revision": "3b549f402f6d23e4ebafa4585d55f584"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "ff3e1a0f846e84ee6e6ab7bf25a1a594"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "6df45666762838625b2db441f72b245b"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "9573702405e53132b6300d7351381203"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "ddf96b1646e34fcdc6489448fc8b5535"
  },
  {
    "url": "web/basis/html.html",
    "revision": "588af3caf7792dec33b617a0a6ef7a61"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "f354faddf3bc3eedc4eb7e62ed80ae38"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "1b807504fbafeafa1bf578f767f546aa"
  },
  {
    "url": "web/framework/index.html",
    "revision": "ba044a0b71440c63ed7bbb527ba781ba"
  },
  {
    "url": "web/framework/React.html",
    "revision": "08d51f60bb671f02e4c09cf202b8dc8c"
  },
  {
    "url": "wechat/index.html",
    "revision": "1015cbc42b1bff87d155680bccf5e0cd"
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
