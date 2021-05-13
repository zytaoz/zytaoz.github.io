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
    "revision": "7f90d75dce5097692de1796f75e73b0a"
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
    "url": "assets/js/10.daf3b4fc.js",
    "revision": "b77d6e31b67700b75d4e3b0259e3fb06"
  },
  {
    "url": "assets/js/11.6a717d9e.js",
    "revision": "1408842c1759500e27b1d9d78af87182"
  },
  {
    "url": "assets/js/12.80fe24aa.js",
    "revision": "6ea1546e4e165cc3a4e0dee2c8eb9475"
  },
  {
    "url": "assets/js/13.c012f303.js",
    "revision": "66b3ff6b652a8041ee7dd8359745ed59"
  },
  {
    "url": "assets/js/14.febc89f0.js",
    "revision": "a38294177d1194dfb9ae7682f3a3e6f1"
  },
  {
    "url": "assets/js/15.85cf8342.js",
    "revision": "6009c6e4d3bcf30833c11611a5b41d2d"
  },
  {
    "url": "assets/js/16.5c3c1643.js",
    "revision": "f34ce49918954c40cf1460f94168a8de"
  },
  {
    "url": "assets/js/17.083492e9.js",
    "revision": "180e6ec4203d12fd7d55dfe7c24cf64b"
  },
  {
    "url": "assets/js/18.93bd7ca7.js",
    "revision": "1d66522f77d80ef6ab6df827c7601129"
  },
  {
    "url": "assets/js/19.818d0de3.js",
    "revision": "8bf8d8f6262a0b372e772209a374b6ed"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.f60f0765.js",
    "revision": "af385b7928adc7dba37d0d943379b3ef"
  },
  {
    "url": "assets/js/21.71d21f5e.js",
    "revision": "3d482c13a85153e51266dc805fda1e0b"
  },
  {
    "url": "assets/js/22.5351ce04.js",
    "revision": "203007d3e7c92193975d00315d457511"
  },
  {
    "url": "assets/js/23.c0d085fc.js",
    "revision": "a13551b06a693365322fd303ca676099"
  },
  {
    "url": "assets/js/24.297d5158.js",
    "revision": "0353999d117fcef0ead1f8f3ac2a875a"
  },
  {
    "url": "assets/js/25.83f7575d.js",
    "revision": "9e6a8167887ebeeff7fce43ada990f5f"
  },
  {
    "url": "assets/js/26.969c7c54.js",
    "revision": "e9e909ad097f35c9282e832ce998c1cf"
  },
  {
    "url": "assets/js/27.57635fc7.js",
    "revision": "2dd0bf548c48bb329108071082885150"
  },
  {
    "url": "assets/js/28.bdbb375a.js",
    "revision": "49744e56771f023133ee54d1ea2902ce"
  },
  {
    "url": "assets/js/29.30597381.js",
    "revision": "6dcee0782bf3367fb9b495ea1f20e7b4"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.5391e0f9.js",
    "revision": "ab1a5d726f727acda59285d895e7d10e"
  },
  {
    "url": "assets/js/31.ae08eaa1.js",
    "revision": "072c00cb2d3430fa8632f478b32ff8a7"
  },
  {
    "url": "assets/js/32.2df468e8.js",
    "revision": "e1b217fe32d8f6ed4e2280d2bdd811d6"
  },
  {
    "url": "assets/js/33.53271ce1.js",
    "revision": "fe1e866cac28d9d87cbd0a3a0d65ef50"
  },
  {
    "url": "assets/js/34.053fe7d9.js",
    "revision": "b21bf11f2c250726c7ba3581bcf365b5"
  },
  {
    "url": "assets/js/35.d3f2ca95.js",
    "revision": "c9c82efb6bc78fe14d65181ce8380a32"
  },
  {
    "url": "assets/js/36.4a1211df.js",
    "revision": "97772a3439f649cc064151a11f026725"
  },
  {
    "url": "assets/js/37.3683e005.js",
    "revision": "e0c7bbdafb99d80dbc988fa1f1dca76c"
  },
  {
    "url": "assets/js/38.4bb82b8f.js",
    "revision": "f3c35d264b6a0bfd08ebe03d69d5e83f"
  },
  {
    "url": "assets/js/39.86b9002d.js",
    "revision": "7741cdb5deef21f526505b764f4fabc0"
  },
  {
    "url": "assets/js/4.c7e03a32.js",
    "revision": "3216f5054030b8ab76a691a5fd4a792c"
  },
  {
    "url": "assets/js/40.ce350293.js",
    "revision": "efdaa9c701b497c9b28646eae02042d9"
  },
  {
    "url": "assets/js/41.7dd92deb.js",
    "revision": "173a0765d4a2352886c447909a4abc21"
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
    "url": "assets/js/45.4b3a489c.js",
    "revision": "02ba4b9aa964d7583b44c525d256e872"
  },
  {
    "url": "assets/js/46.2f7f1e4f.js",
    "revision": "71058bbc58564f9220dd980840f897e5"
  },
  {
    "url": "assets/js/47.68a26246.js",
    "revision": "69c75218ee34374de708c5e18f8b5488"
  },
  {
    "url": "assets/js/48.72dd24e8.js",
    "revision": "9818d2595c6f1afd3c8196c1eaf16324"
  },
  {
    "url": "assets/js/49.fea63662.js",
    "revision": "b7b9ce36b8c0f80b8b46fe5afef5ba85"
  },
  {
    "url": "assets/js/5.4527858b.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.848f45fe.js",
    "revision": "04c24d5296598e86d116323bafaede44"
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
    "url": "assets/js/53.ff478dc7.js",
    "revision": "56b8880b810744e5973d08704bc8e24e"
  },
  {
    "url": "assets/js/54.ba378e1d.js",
    "revision": "c970c433e217a163285288cc85e2f06b"
  },
  {
    "url": "assets/js/55.d019258d.js",
    "revision": "6a88d1ecfcfc18e34da1e748e8b36372"
  },
  {
    "url": "assets/js/56.6322051c.js",
    "revision": "e786bf483861d8dfa131d13a137c3ad4"
  },
  {
    "url": "assets/js/57.76c2599e.js",
    "revision": "e38769d7e02584b9f11487df9384825b"
  },
  {
    "url": "assets/js/58.933497bb.js",
    "revision": "64f009da711eb5b019c2ab0cadc64246"
  },
  {
    "url": "assets/js/59.bbcf0d97.js",
    "revision": "acfed3dffce71e229ad9795366f1dd5f"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.0f9f865e.js",
    "revision": "dc5e5ac460946949ba3463058c439e36"
  },
  {
    "url": "assets/js/61.2d2bdaf7.js",
    "revision": "87fed83e06ca60daa86c6b0a854d2928"
  },
  {
    "url": "assets/js/62.8519732b.js",
    "revision": "4170a46e4eb72299cf504e1fa20cfec0"
  },
  {
    "url": "assets/js/63.a47ec3c0.js",
    "revision": "bf616daefd95cade022ac22cc96b1af3"
  },
  {
    "url": "assets/js/64.ec3abada.js",
    "revision": "184cc5cf980e1857bee836c4a18dfb09"
  },
  {
    "url": "assets/js/65.0e578cc3.js",
    "revision": "a27a844441f446986ecf507652a9f62c"
  },
  {
    "url": "assets/js/66.7c2ba5a1.js",
    "revision": "ea9ca556d6ea4129fe25b4574b790599"
  },
  {
    "url": "assets/js/67.e8a5186f.js",
    "revision": "b2868dbeff153969762dcba575820ee2"
  },
  {
    "url": "assets/js/68.ddacea13.js",
    "revision": "86f3dc3e8957b5bab0f5e96637721bc0"
  },
  {
    "url": "assets/js/69.0dadac67.js",
    "revision": "cee4ec8cb08a3255765eb5c8274d4889"
  },
  {
    "url": "assets/js/7.574db714.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.ce6daa69.js",
    "revision": "7c426e659617b8eb93c539eb49d9b364"
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
    "url": "assets/js/8.43051b52.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.4e0a4085.js",
    "revision": "41857b39f7727b5b9461e2b29dc1e825"
  },
  {
    "url": "assets/js/app.257eabf8.js",
    "revision": "1b22272de3014069ead70c3b516f659b"
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
    "revision": "e8f6feb06af18bca6f7f16bea2676dd7"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "8592db6ac4efb126487035dc264e8488"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "82c2f881025c967dd8feb5601de9069c"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "543a885740cb8c847d050fc5aa3c10af"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "0ae9536a721714d4b960a47262fc6174"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "781c350445899ee8437983f962ed116e"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "fffc2a997d6cf06eb4e2e9e145051716"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "3bedfc4ef8a8dac52a457713791bea2a"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "b115de0e5ba215f9678d1a76ecf8a4da"
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
    "revision": "c033d0929d42bacf57476de8d1540866"
  },
  {
    "url": "other/偏激.html",
    "revision": "ab8029d37381977f870b8b8c946e0cb1"
  },
  {
    "url": "plan.html",
    "revision": "61f81c924c67d2589d4a79fcb6805063"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "2bccb02872afd62b7fba29f575c83a62"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "be27ec7bec8149eb0b4ad9343ea3cbe1"
  },
  {
    "url": "projects/testhub.html",
    "revision": "b6e6cb55e6b91082842e746a0eea70a4"
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
    "revision": "5690c486b4b1f5efca894642f758846e"
  },
  {
    "url": "server/java/index.html",
    "revision": "ad204e49ccfcc87dfb43bc711c89def6"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "ae3fbe4b4227a9054f16af2c4397fabe"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "7348eabfc5c654dcf74740908a5b92a1"
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
    "revision": "1c585119717a82e00f44a45e3da2a414"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "0dc7de7324eba9d1c9e6fca2d4a013c1"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "36787f2212d283804f0476200cec2c1b"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "93926364d0d6c3f24ded966fa61bd68d"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "730ef1c7f3e21a85fd5195c27c42e4a2"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "c9ae1a8fc80af16b12a6962b5f27df78"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "4657af5a944178354caf4899e2433725"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "34b8072d72de41aa3a09996ba68a05b8"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "14e85536930525f95fbf0431f7650aca"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "1eca193fde2a71b281377fb37aff2db0"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "40c541b08fd759ba606531ae9b54ded2"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "fc4bab311e97528613da027c78b85e74"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "82cd1deb8883673114392d5a5f4d5387"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "df420f4eb404831183b000d94dfc2190"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "8849b2a1483df888f208061c5d584bc9"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "8784e20153b2c3af60c91d38322912be"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "26760a7f529de90efc4e1d70708c98c9"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "ef9469d9c63ab6d3a09535cc9a860090"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "ed83443c802b45cd6141f608f1a871b7"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "391ab69bc6d30259aee3e633b2a3de76"
  },
  {
    "url": "server/python/index.html",
    "revision": "eaa2425bb6e72e2bea21fbc480d53c0b"
  },
  {
    "url": "server/server/index.html",
    "revision": "2a62028c077eb433d86fe48fbd3e3d97"
  },
  {
    "url": "server/socket/index.html",
    "revision": "0fa3fe905171508fcfbff3533e3fc753"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "959eaa263015c9af40c884b4643c7e90"
  },
  {
    "url": "tools/git.html",
    "revision": "d195caa5b69a2326252f69c26a6facf8"
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
    "revision": "be63716c4149dba4856bb63005f4b695"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "229b990215886133dd176de1898e1e42"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "1a73322b5cef573cf6dbdfd22e42161d"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "e5ab81c54c377d83cc25fbf68f29116c"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "3e6731ca817e7b09e670a42d3c285ded"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "d809cad372c2261ecd1153b35a5bae0e"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "bdf4ea2ee648418ecaffb0bab73b6f95"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "244a360aad442f70b37d847adcb0e89e"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "52c2263bde0c59c69cb45ec8d2ff5931"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "651b2eb64e972e2585cd9bc19d1f019f"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "8f382aab201d7684b565b33be53a90cb"
  },
  {
    "url": "web/basis/async.html",
    "revision": "c0d5602ec69058654c38fc180f567710"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "7c84c8cdb60d97c00711cad2ae5fd3f4"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "03b4ae41f9fb072f468e8dd9aa07e98c"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "ffb2eef7fce457c41e5d167bd719a421"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "d35cfd0d38ac2b712c49fdbb9997fdcd"
  },
  {
    "url": "web/basis/html.html",
    "revision": "ddff7b525b42303e89882ca1d9f6dba0"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "6cb6c4a0050bb01edb0a8fa5f8d42642"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "0f08b76958a9a062a3199684c2eac0a7"
  },
  {
    "url": "web/framework/index.html",
    "revision": "a1d9ccde0f82fab8c041543de317d495"
  },
  {
    "url": "web/framework/React.html",
    "revision": "3fff2b73f9ab225b335978947531089b"
  },
  {
    "url": "wechat/index.html",
    "revision": "d4d534d9ae765735e862e90441e2117c"
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
