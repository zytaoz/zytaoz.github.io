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
    "revision": "1bb374212ed38f5c10980e40abbdeffa"
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
    "url": "assets/js/10.28770165.js",
    "revision": "decd1902cf9bf95a60805dc46a8afadd"
  },
  {
    "url": "assets/js/11.bce2d282.js",
    "revision": "66192c4397f0cee4ac88e278c91a73f2"
  },
  {
    "url": "assets/js/12.38aa64ab.js",
    "revision": "6c1a61c3e4b352c920d6da2eb4833c87"
  },
  {
    "url": "assets/js/13.2f19de39.js",
    "revision": "248a03e0186286ecb21084ba642adb4a"
  },
  {
    "url": "assets/js/14.357c51b6.js",
    "revision": "6ac29ff04c0b7326f7b229e75a4f0431"
  },
  {
    "url": "assets/js/15.a3217e37.js",
    "revision": "5500ed48f023264d998137da3782ec58"
  },
  {
    "url": "assets/js/16.57624658.js",
    "revision": "c2aab722c9e76b23f2f4606cb89cf08f"
  },
  {
    "url": "assets/js/17.a66302a6.js",
    "revision": "3c36102075004af446657cf8ab69975d"
  },
  {
    "url": "assets/js/18.2453d72e.js",
    "revision": "1012cf2bdbf96e93027409dfc4d42120"
  },
  {
    "url": "assets/js/19.8ece2203.js",
    "revision": "ceda8cbe34d6d772ef40adc446854dcb"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.d61e71f0.js",
    "revision": "c581570b9f8bb2fe346c3e030ce25796"
  },
  {
    "url": "assets/js/21.694348e1.js",
    "revision": "1ee2ad5d971ce6d160080e6a94dc8a3b"
  },
  {
    "url": "assets/js/22.6ac9acc7.js",
    "revision": "6a8814f37a442ab5f43244e42d73d641"
  },
  {
    "url": "assets/js/23.c0df70dd.js",
    "revision": "ee4820f031aaac461c9dd2ebb1d99eef"
  },
  {
    "url": "assets/js/24.ad90f598.js",
    "revision": "b1703009829ddf55edd1613db04d55f0"
  },
  {
    "url": "assets/js/25.d411452e.js",
    "revision": "2b8b3a4f7c5cd11b71113500903ac321"
  },
  {
    "url": "assets/js/26.3cd8aa44.js",
    "revision": "a49b91672ce6a8c9c2eac0c77dfb5799"
  },
  {
    "url": "assets/js/27.53a35a84.js",
    "revision": "e2d4d6d5632a9af89ef2d616d0eed85e"
  },
  {
    "url": "assets/js/28.925b234f.js",
    "revision": "4bbb8fb4021dadded94e93087a86da82"
  },
  {
    "url": "assets/js/29.90e29a9b.js",
    "revision": "46558e427d0ade0439d9c52e28e4feaf"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.730c99a0.js",
    "revision": "e37a74312a50a3466a61da3feaaff82d"
  },
  {
    "url": "assets/js/31.6cdb96fa.js",
    "revision": "5528aa43c66a6420633dea112ce79d3e"
  },
  {
    "url": "assets/js/32.a4750492.js",
    "revision": "114fcaa294aeaa1ebd8fbdaefd163edf"
  },
  {
    "url": "assets/js/33.7bf4160a.js",
    "revision": "cf5a42d7aa4db269cd2baf5af6062cf3"
  },
  {
    "url": "assets/js/34.13d0ff1a.js",
    "revision": "26fe86a8e5c93e82ffa762294f18d7b3"
  },
  {
    "url": "assets/js/35.9a987dc8.js",
    "revision": "3e017752c88d3a6482d9f0c45283c21b"
  },
  {
    "url": "assets/js/36.3a41eeae.js",
    "revision": "1a2a72e6dd724ca21e8d214e8840aee2"
  },
  {
    "url": "assets/js/37.53aff030.js",
    "revision": "e10f8a62be9368254c012d2a9d7996cf"
  },
  {
    "url": "assets/js/38.26761a8e.js",
    "revision": "0cfbd5caba7083c5d1502806690a8ea6"
  },
  {
    "url": "assets/js/39.967b1823.js",
    "revision": "cd06d6546518b679c107f6cfeeb23554"
  },
  {
    "url": "assets/js/4.3ffbc82a.js",
    "revision": "190745d99b9b8197b506d52ef8953908"
  },
  {
    "url": "assets/js/40.d9b1e783.js",
    "revision": "fb8255c64eaced4d2176d4283334de15"
  },
  {
    "url": "assets/js/41.82ea5778.js",
    "revision": "82c2c2e5764e496ba866ff565fc18fc7"
  },
  {
    "url": "assets/js/42.449411d7.js",
    "revision": "53b5395ebb9bfaad4912ed66fb694a54"
  },
  {
    "url": "assets/js/43.608853ac.js",
    "revision": "5fed719268758bead18e2d650b393a7f"
  },
  {
    "url": "assets/js/44.14686193.js",
    "revision": "5ca646a75fe94acecf94f3e46e1841eb"
  },
  {
    "url": "assets/js/45.f7f8263d.js",
    "revision": "1421091c367e52267d1bf7560c503098"
  },
  {
    "url": "assets/js/46.1fbc4533.js",
    "revision": "0434d9a120573a7841c0d74d242eb722"
  },
  {
    "url": "assets/js/47.8dcb55a4.js",
    "revision": "83e3e43a2afea48523a6a3d20cb2b575"
  },
  {
    "url": "assets/js/48.13a19f32.js",
    "revision": "fd90c2a18a6ec1d78539fccd210094bf"
  },
  {
    "url": "assets/js/49.4cb9c188.js",
    "revision": "06c260d6719337cd7cc1c5997c50ac33"
  },
  {
    "url": "assets/js/5.4527858b.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.38af3afa.js",
    "revision": "27d5fa2646aa21f705a8e21ea76b4a5f"
  },
  {
    "url": "assets/js/51.1e676149.js",
    "revision": "016322bd491b4d5c70b4617f7ca5e398"
  },
  {
    "url": "assets/js/52.07ba160c.js",
    "revision": "b1e1d8015999eabfd8a9925c0d548776"
  },
  {
    "url": "assets/js/53.af75918a.js",
    "revision": "fba5856d0bc60697acedbde274982bb4"
  },
  {
    "url": "assets/js/54.dbde1e81.js",
    "revision": "fa460b9fc5fb9a65c922bfcc504b716f"
  },
  {
    "url": "assets/js/55.72b16317.js",
    "revision": "63e3838f80c9656376619d42c2da81f0"
  },
  {
    "url": "assets/js/56.6d1d1642.js",
    "revision": "a9ada719490880a2330de5b09cbdf994"
  },
  {
    "url": "assets/js/57.925a4682.js",
    "revision": "3f6449aea95d66eb0a67b9f2c5cf6bbc"
  },
  {
    "url": "assets/js/58.f0e2f7a4.js",
    "revision": "c277dc5321b37a2bdd5d55bc5f5e81af"
  },
  {
    "url": "assets/js/59.23a3cdf1.js",
    "revision": "870201473a0e6acd242052145483d090"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.6a1a7b7d.js",
    "revision": "5db1427b0ef0de21f8bcc04f53d1299f"
  },
  {
    "url": "assets/js/61.8024ba5b.js",
    "revision": "889f314b0e49486f0ee67509f4e0581a"
  },
  {
    "url": "assets/js/62.8810eebb.js",
    "revision": "6c7f00970eaab2e8690511e96bbad022"
  },
  {
    "url": "assets/js/63.0f32d9b2.js",
    "revision": "7184086939d7185e33b6e73e30f1280a"
  },
  {
    "url": "assets/js/64.8715476a.js",
    "revision": "ec41e4ed8d3b59f5fe164891329e5961"
  },
  {
    "url": "assets/js/65.7c726ea7.js",
    "revision": "ae575120c3b3c6d52eb8f311ca5ea0d2"
  },
  {
    "url": "assets/js/66.87b43ecd.js",
    "revision": "1be8383197c5674b5bb1307fad68c67b"
  },
  {
    "url": "assets/js/67.3016eb5c.js",
    "revision": "a8182c83a63f388db07f0970e52ae8e0"
  },
  {
    "url": "assets/js/68.721d3f97.js",
    "revision": "64fad75dd629c2ee6beb1b8453c4ea71"
  },
  {
    "url": "assets/js/69.61cc3d58.js",
    "revision": "683fd627894a113b8d33ae44162b53fe"
  },
  {
    "url": "assets/js/7.574db714.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.2e416821.js",
    "revision": "2958c74256882fce7d24758eff5a35cc"
  },
  {
    "url": "assets/js/71.3edf3444.js",
    "revision": "8ac20244d349ae96365f0168083c9d9d"
  },
  {
    "url": "assets/js/8.cbcd92d4.js",
    "revision": "868415a1611a52cda85358ab0792e3f3"
  },
  {
    "url": "assets/js/9.4e0a4085.js",
    "revision": "41857b39f7727b5b9461e2b29dc1e825"
  },
  {
    "url": "assets/js/app.6b932c84.js",
    "revision": "18b101dccef1a8314ed16732244e3de8"
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
    "revision": "f9eff9b34da9b93cafc9170c15ad65e6"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "d5f8316a5c70a84833304f4ae4696788"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "2932615b40b6d64683df9eec9679ae99"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "8eb95d775a70f08cad65cbcdb73cfb3c"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "50dc333d0c1cd7be4cb04aa2da14b165"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "574295375d96bf80fc22d2ed720b2c37"
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
    "revision": "0d1cc7f7e5946d29cdd96dfa32412d84"
  },
  {
    "url": "other/偏激.html",
    "revision": "be46a4dcf2cfbc94a2169f5f7267b2d8"
  },
  {
    "url": "plan.html",
    "revision": "9c946e955747462b51ab4d74d6d2a8c7"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "b3249ad09a6ee0fecb56f252437ee805"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "70290f23b2a9f6cb38a01bc821fd634d"
  },
  {
    "url": "projects/testhub.html",
    "revision": "d1b54a76573eccea40e72cba649e4c70"
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
    "revision": "8b7def1deb45a1942b791ae4e84e08c2"
  },
  {
    "url": "server/java/index.html",
    "revision": "a5112c6f7fe0ea61b01c9a1771af1863"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "b5ab3e381bc6d6d0f6681817aca40aab"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "a39c6b4aa09f94a72928076f97c10ab1"
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
    "revision": "fcffdeabeb98e20746c830b9d35338ee"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "cef9216ab2d50efe49a41a002376c0fb"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "1f70a05792eb13691ed17205917aa6b8"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "790bc8c75e6bf44ae52ed92583eb854f"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "cb6655ad01cf67c8de3b8d49972655f5"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "e5e52bda3770809854fe1cd415755177"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "14512916168b478915ef4e30262026ad"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "7f52ccddea4a91294591b9060527b908"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "7d61194db716c3f8c3dcc3262ebd38a7"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "de359a3c7efa235059a0a69838892d75"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "c0368273d0655c51627410c73ca767ce"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "d9d9442932833696c860d3400874098c"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "989e645524f41ac9542b5b7cf25ab22b"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "bd2c9aaaa0328db5cdaff91df4933aeb"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "a7a6baa0964b16e1dabe32c3114ae6dd"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "c99c45783ea1692af5151fc1a55fc4a5"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "655a2999fd9d283aee92d9b3df6fff82"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "d3482386a7b307f5097bf380b3476de6"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "1faa4e17c3cf7c05cdde637d7bd21caf"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "ce54f27df9f0ec6b4856caa99e0cdc3e"
  },
  {
    "url": "server/python/index.html",
    "revision": "239bdfefa82a8df1acf5ddbc277ec354"
  },
  {
    "url": "server/server/index.html",
    "revision": "df3bf8906f56f4d49c469fe78d7917a8"
  },
  {
    "url": "server/socket/index.html",
    "revision": "41bcdf63da8495d3a8819627f745f0bc"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "62b5c69a2cb818277b3d9b7f1b880889"
  },
  {
    "url": "tools/git.html",
    "revision": "2ab6d01d9f4d8d664a399bf798f23d8d"
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
    "revision": "b229a465094a8c6e291c2a708898ffb7"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "1e3a92b7c6ee414baa03d58583a6a8c6"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "289ca148c0602f34a7d47c2ca8db1ecf"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "cfdf96f911489d0f7a0c6aa98368a551"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "e4d166f9b1e6ab0e7647e90710d09ea4"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "d1cfccd11ddc331d38dcff31d869fd0c"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "060b061452debe90c39497968f5f1b56"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "1e0768a4bdabef262c70961a3792054c"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "a875f1e788a57aa5d46abf0bc0a87651"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "5de3254c71e8a7f3d69de0e0f3f4f2cf"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "b8f2e02727f8a62c789c58173b71f4f0"
  },
  {
    "url": "web/basis/async.html",
    "revision": "59e6f19ee6496801c49f66ea59b553b6"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "880442efcefc623b84b7a50ad03df890"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "f1447851fb453a6917e3466add055fb3"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "79cf0a6c47eb4b5edfc89662cafcc4a3"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "c3dc93f1e88a8c1a7f3b0d9d0cd44002"
  },
  {
    "url": "web/basis/html.html",
    "revision": "b842b9a2842c021a43f5843d2f38b93b"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "5172d6be21fe6d7b576db801d03ca2ee"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "357cc6ebd600c0c49e8f41b4128586f1"
  },
  {
    "url": "web/framework/index.html",
    "revision": "3574d4eb2a6a9ac5ef891d04919e9bd7"
  },
  {
    "url": "web/framework/React.html",
    "revision": "4c9993ca3a93dc483562619dab3ee103"
  },
  {
    "url": "wechat/index.html",
    "revision": "2dd6018b3459e15da36396635ac72272"
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
