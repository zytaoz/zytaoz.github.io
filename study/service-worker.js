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
    "revision": "d6008290f78659c41149431ae875651d"
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
    "url": "assets/js/10.2cf4d067.js",
    "revision": "fe29706dbde3f191db2bb23da6a28fce"
  },
  {
    "url": "assets/js/11.ba5864f8.js",
    "revision": "a67a54620ae46a645461b16d3fb040f4"
  },
  {
    "url": "assets/js/12.edb9001c.js",
    "revision": "e4269ce32235f0d45030b04937f3e38f"
  },
  {
    "url": "assets/js/13.763c3cc8.js",
    "revision": "e712ab66a80240a5835e2ac39972349c"
  },
  {
    "url": "assets/js/14.e0442472.js",
    "revision": "3f9ba6929bcdc372e1a1480cd77e06c3"
  },
  {
    "url": "assets/js/15.130d73ef.js",
    "revision": "bdc3e41c49978c24639f02f0bdd11f06"
  },
  {
    "url": "assets/js/16.1faff71d.js",
    "revision": "b5de4860e84172d25e0412f097586cb4"
  },
  {
    "url": "assets/js/17.a035f13d.js",
    "revision": "7a66cd5b8e784362e9db7d886bf10d28"
  },
  {
    "url": "assets/js/18.c73a2932.js",
    "revision": "70e54170972e5e145db7c52132b3a09d"
  },
  {
    "url": "assets/js/19.355af372.js",
    "revision": "9b347b7fd5b07ead4667051d049a9a0c"
  },
  {
    "url": "assets/js/2.cc96577c.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.cf3b65f9.js",
    "revision": "9e397b4d161715df65c8a0f5d4c75333"
  },
  {
    "url": "assets/js/21.cb98d452.js",
    "revision": "5305786221cdea6b24203663de179203"
  },
  {
    "url": "assets/js/22.da890d85.js",
    "revision": "a7da856caed9a2fc67db6802787c39be"
  },
  {
    "url": "assets/js/23.2aa6ef6b.js",
    "revision": "eef086b1d7b993a18e3c3b320fe38f80"
  },
  {
    "url": "assets/js/24.cab3ec56.js",
    "revision": "11258b2186d868ea20699938442fb5ec"
  },
  {
    "url": "assets/js/25.027b1b5b.js",
    "revision": "4f307687b2d4f0b35e3f586cc374f0d4"
  },
  {
    "url": "assets/js/26.d78f6fd6.js",
    "revision": "4f3e1489791218cfa4b12b600293fc87"
  },
  {
    "url": "assets/js/27.f4d03da4.js",
    "revision": "425a0bcd2f179c5654715bacedbe40c4"
  },
  {
    "url": "assets/js/28.86a2c22d.js",
    "revision": "843775a7e3f8937b3b94b262a4a7ddd0"
  },
  {
    "url": "assets/js/29.e0dc64c7.js",
    "revision": "2036a559c5a5f329242fd2b9290d38e9"
  },
  {
    "url": "assets/js/3.7a2de2ee.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.83a644ee.js",
    "revision": "25ecdb7c0ecc49c8f69cf1a5129fc609"
  },
  {
    "url": "assets/js/31.8e92f5ac.js",
    "revision": "fe4c9d149459ab5cc2e7ae16a1485840"
  },
  {
    "url": "assets/js/32.ca3076e6.js",
    "revision": "a871b960b6fa78d82b2825a1e7e6fe8b"
  },
  {
    "url": "assets/js/33.9c4f2ca4.js",
    "revision": "0886ef98f63ecb103a70707d1c483420"
  },
  {
    "url": "assets/js/34.fd3f95d3.js",
    "revision": "e47a6dea59ca617f385221ffaf9445d3"
  },
  {
    "url": "assets/js/35.30ff54c1.js",
    "revision": "f011d3b88566baf2ad572200908ca3bf"
  },
  {
    "url": "assets/js/36.919862de.js",
    "revision": "67c2021216a52521367315b8d3c21d26"
  },
  {
    "url": "assets/js/37.a6577e6c.js",
    "revision": "fe53b8a231e86382500e81acbbbeea17"
  },
  {
    "url": "assets/js/38.a11be451.js",
    "revision": "2be0cd6ebcb3a31c88101bb10d73f691"
  },
  {
    "url": "assets/js/39.f050e314.js",
    "revision": "f77e0d2580bb2060272e29e1a6ae78af"
  },
  {
    "url": "assets/js/4.c0a7b8ab.js",
    "revision": "e85e2a4d90868719b199496d1fd48b2b"
  },
  {
    "url": "assets/js/40.54c175cc.js",
    "revision": "8a69a98a4b71814535082458587baf96"
  },
  {
    "url": "assets/js/41.051c7832.js",
    "revision": "45ec262b8a884eb8e9303ae8ec7ec4f0"
  },
  {
    "url": "assets/js/42.f9e88879.js",
    "revision": "f55a3ef911c942000e9253c56096b358"
  },
  {
    "url": "assets/js/43.ad2c53d0.js",
    "revision": "2305f187f2fc16a22796dc5c028c9d7d"
  },
  {
    "url": "assets/js/44.d4505109.js",
    "revision": "e21ba0d997734068b818a2f976697b3d"
  },
  {
    "url": "assets/js/45.244ccfeb.js",
    "revision": "6e1de5d0e24b5702614a9b34644df4b1"
  },
  {
    "url": "assets/js/46.ed868e18.js",
    "revision": "3014638840f9cdcc9e354a7314c211bf"
  },
  {
    "url": "assets/js/47.5b4a3537.js",
    "revision": "0a9771d6c6ab1113229d2e4508ec64b2"
  },
  {
    "url": "assets/js/48.1a5835e8.js",
    "revision": "215c12bd700eb57888a09267f8f20e08"
  },
  {
    "url": "assets/js/49.e43a4813.js",
    "revision": "f3eb9b94e1d354a36a64d59f46edf67f"
  },
  {
    "url": "assets/js/5.cfe0dd09.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.59ad68c9.js",
    "revision": "29a8f6efef2e75ebb7fb6686568664fe"
  },
  {
    "url": "assets/js/51.80a75091.js",
    "revision": "7c95f735bbabce801c193a11d925c6d0"
  },
  {
    "url": "assets/js/52.5709eb5d.js",
    "revision": "c3721ddedb478289337137f7fd3c03d0"
  },
  {
    "url": "assets/js/53.dd07a116.js",
    "revision": "12efe5093220a02e9b2b12abd6e4581c"
  },
  {
    "url": "assets/js/54.2efc9eec.js",
    "revision": "16d7b4bf78176c714f3cb368e7ec0b7a"
  },
  {
    "url": "assets/js/55.4ab40ae9.js",
    "revision": "e4b2f6327cd97442dfff7b33bdb40210"
  },
  {
    "url": "assets/js/56.cb0068ca.js",
    "revision": "56b868ae8f18a63f1ba4746480615dd5"
  },
  {
    "url": "assets/js/57.0676050a.js",
    "revision": "98574bd164a3e0973f6dceaf45cefac7"
  },
  {
    "url": "assets/js/58.13c8e741.js",
    "revision": "e332500c96929c4a440c2c8fc31d2ec2"
  },
  {
    "url": "assets/js/59.97cc0199.js",
    "revision": "bdb74acad8a24c4cf80d69c7d5094c4c"
  },
  {
    "url": "assets/js/6.6176149c.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.8b176544.js",
    "revision": "7d422a51f2454abd5e1ba18ef071e2e5"
  },
  {
    "url": "assets/js/61.7bef4d63.js",
    "revision": "f22beeead1cd4b7441517f36612744e4"
  },
  {
    "url": "assets/js/62.50b0f3c6.js",
    "revision": "730e105fdd39a2cd4e6b0f6f7f097b7a"
  },
  {
    "url": "assets/js/63.28f85459.js",
    "revision": "1e6c7f6f236ba28a0646db9f3a23da24"
  },
  {
    "url": "assets/js/64.e183f71d.js",
    "revision": "8948a66d73fb0f7158276f0177ef59b9"
  },
  {
    "url": "assets/js/65.c726f2ff.js",
    "revision": "a3c8b26af605108361a1f09b17f79888"
  },
  {
    "url": "assets/js/66.033a6943.js",
    "revision": "81f8e293dac633ca155a0e0dde4b97b1"
  },
  {
    "url": "assets/js/67.267638dc.js",
    "revision": "5365dbf27c93e9719490b5982404647b"
  },
  {
    "url": "assets/js/68.53198741.js",
    "revision": "6e00204ed407f4f61b772e67d5c9e8ca"
  },
  {
    "url": "assets/js/69.4f121cb4.js",
    "revision": "e3f73b77a28a7b199594b8d5d8363eb8"
  },
  {
    "url": "assets/js/7.079bf03f.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/8.0ae56ca0.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.654963aa.js",
    "revision": "5d7946ea92bca00996ed42d0c26057e4"
  },
  {
    "url": "assets/js/app.7b8f5602.js",
    "revision": "752a2638e9dfebf0daaa63e82813e71a"
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
    "revision": "d307ca0c0e533a317d1d54f635332b91"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "274049c39f228c7a532ee65652fff04c"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "a2ae266f382f32a0eace6e43242d3934"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "cbf6c5cef54c8fc4d2c5060dfe0062d9"
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
    "revision": "698d96c13c7195a1daf0b0f7506af466"
  },
  {
    "url": "other/偏激.html",
    "revision": "c90ca0fd67dd76dc4d853474a3b99780"
  },
  {
    "url": "plan.html",
    "revision": "4b8e7702488617cf09653ed81bbf006b"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "cf78876061cbdd0cd21d5e8dccbf193c"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "27aeddaaeed1c109b633e39f46a7b5fa"
  },
  {
    "url": "projects/testhub.html",
    "revision": "825325e7c32d0c237097d38cbe870804"
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
    "revision": "8827cbb0298c853d60be5c0ede93c7a8"
  },
  {
    "url": "server/java/index.html",
    "revision": "f831be3106cdc105a1c21ccb4c1d151f"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "3bd7bc4b368feb593188b32b942ba949"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "6cf7894e8021228d7becf66a83bc66f2"
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
    "revision": "0cc371499b0853d57e142c57be59e272"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "c97409b3164a17b69af43b081903973c"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "87642af25415bfa5ac89e5f239063072"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "ab8bf07d5f5deee003edb9d14c226512"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "2170398da7f009bdd9411d48609a6a78"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "a66755543bf544c820c4e4f4108c6b00"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "1e7953f8f99e948b801344b82934608f"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "fe646831653e1c0e4b3ed6954e35141e"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "d6753c3a74511085c03529c215a929bb"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "ac3e01fe417c52834cdb786e1ba2092c"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "97e005b01c7f5dccb71c959e67f0be3c"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "ca5bd2987bce705dfbf25739133a0954"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "2d07c1198271cd1271386690c78a32ff"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "9d5b0a36477911f5cb93f7ea40d4d309"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "48d7613b41c8c6dbaac8d9ad30248333"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "b2383936af02f0243016628f52d1facf"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "067afcce2e5fb8f70d881348510e425a"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "2edb8c0729a9386efb0a46efa23e609a"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "15b5237fa97607efe9f5c87e5a2e8880"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "95e1f0a01c27eaaa4563bb9f742308ea"
  },
  {
    "url": "server/python/index.html",
    "revision": "f5522ab084f0b0e1838269b99fa3f46d"
  },
  {
    "url": "server/server/index.html",
    "revision": "098c0db74b248668d5c914d4cf0ef80d"
  },
  {
    "url": "server/socket/index.html",
    "revision": "51f9b5448b9a97aa5ab8724e996de7d0"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "c472ae855589f05dee034a09256fde40"
  },
  {
    "url": "tools/git.html",
    "revision": "00e3c19e83f838f67b800866d376a69b"
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
    "revision": "869dcf35df7dda90e17ca3ebec2031f8"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "800225892fcdf44db5ecbb95622729e8"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "c1f326e582682b97842f1370e56dfeeb"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "7f970af7f28d7e33bf478ed664d91956"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "b2a5554e6e736316d5e6fddaf114a6d8"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "3c5412effb6c52445fd768d3c3fb03c4"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "f598fbe24e64458e58d51fd67a89fe05"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "5c0db4b495e3d268a5277acbe10bbc7b"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "285019ed6b70888add1acd9a21acf6ac"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "aeb11c51c901ab5da4751f318d45f644"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "3dff6633beee6daee8db95cfb010e417"
  },
  {
    "url": "web/basis/async.html",
    "revision": "300f3ca8fc75371fbd48605176537937"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "324f3cda03cb3441fb46ad0f4ab68019"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "6d0dbaf47781cc1556719e61797417cb"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "e91d4f972d17e2fe9a234567264e4657"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "91ecde03c97d6312c4211a4edf2336f6"
  },
  {
    "url": "web/basis/html.html",
    "revision": "88e6806476f8ce2c6e3bf2d2ff997644"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "789391cbc1ca4fc042c78b6216a61f12"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "fb9f738b4ffed66c96fbba3539746bce"
  },
  {
    "url": "web/framework/index.html",
    "revision": "c449317198c6919350ac99dda91c57a2"
  },
  {
    "url": "web/framework/React.html",
    "revision": "90296d4ee1cf403de34a0c929c8ebcd1"
  },
  {
    "url": "wechat/index.html",
    "revision": "231c66a7274cb453c39ed5eaec537163"
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
