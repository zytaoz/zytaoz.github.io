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
    "revision": "7c61764b9a5029a9f81e26aa6ba63d1e"
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
    "url": "assets/js/10.34cb5b4d.js",
    "revision": "442325002b961ee4a8ce933dab2a5e10"
  },
  {
    "url": "assets/js/11.6a717d9e.js",
    "revision": "1408842c1759500e27b1d9d78af87182"
  },
  {
    "url": "assets/js/12.da2e38dd.js",
    "revision": "a58226d1212464890ee0d533697bd2a5"
  },
  {
    "url": "assets/js/13.118d0e41.js",
    "revision": "e017eb5373ab1f71ec9f2f6d6e4d0b7e"
  },
  {
    "url": "assets/js/14.febc89f0.js",
    "revision": "a38294177d1194dfb9ae7682f3a3e6f1"
  },
  {
    "url": "assets/js/15.92af4a42.js",
    "revision": "2d1a14cdbb7f1eb763bf1386bee8e592"
  },
  {
    "url": "assets/js/16.e736522f.js",
    "revision": "f36404ed6f94b6536f8e5f9857d45c45"
  },
  {
    "url": "assets/js/17.c94be095.js",
    "revision": "28767030e753623edde642bcbc47ba2e"
  },
  {
    "url": "assets/js/18.93e16b4d.js",
    "revision": "686c691e7d542a469a222b6775619bef"
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
    "url": "assets/js/20.f60f0765.js",
    "revision": "af385b7928adc7dba37d0d943379b3ef"
  },
  {
    "url": "assets/js/21.71d21f5e.js",
    "revision": "3d482c13a85153e51266dc805fda1e0b"
  },
  {
    "url": "assets/js/22.962ef5b4.js",
    "revision": "49b4d5d529a68e93b12852a415828579"
  },
  {
    "url": "assets/js/23.96929c6b.js",
    "revision": "7abc8b6e0a49e2dbe71622fb915b612e"
  },
  {
    "url": "assets/js/24.e8f21567.js",
    "revision": "59fc71e0dda4bc4f809ff84718993d0c"
  },
  {
    "url": "assets/js/25.83f7575d.js",
    "revision": "9e6a8167887ebeeff7fce43ada990f5f"
  },
  {
    "url": "assets/js/26.c9953515.js",
    "revision": "cfacf99479a82dcfc6560beca3c1780c"
  },
  {
    "url": "assets/js/27.57635fc7.js",
    "revision": "2dd0bf548c48bb329108071082885150"
  },
  {
    "url": "assets/js/28.58a1dd22.js",
    "revision": "32ab873e401d9cbf4e3cfae0e561bde4"
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
    "url": "assets/js/30.cd182075.js",
    "revision": "38e896c210791d4ac7f1a4d9ca9af685"
  },
  {
    "url": "assets/js/31.ae08eaa1.js",
    "revision": "072c00cb2d3430fa8632f478b32ff8a7"
  },
  {
    "url": "assets/js/32.f26be18f.js",
    "revision": "d7b54e12a849f4c38097dde4c362fec2"
  },
  {
    "url": "assets/js/33.89db53b5.js",
    "revision": "0c10a02cd78579553e4b9b646f933354"
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
    "url": "assets/js/36.d75f9417.js",
    "revision": "c8e9fd688b71f9b6d71eb74cc9b1e714"
  },
  {
    "url": "assets/js/37.9a91a829.js",
    "revision": "4045bdeaa57c1b5b1d631e8b952ee150"
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
    "url": "assets/js/40.6ba19469.js",
    "revision": "1ee69d45bd63f034b2e0276ed311a4af"
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
    "url": "assets/js/43.70aaca16.js",
    "revision": "32aafe3713d3d6869ef669768660e973"
  },
  {
    "url": "assets/js/44.6c4c3d68.js",
    "revision": "35b38fc1687986fe85606d630a06eb87"
  },
  {
    "url": "assets/js/45.d4883975.js",
    "revision": "7456670e4c9efd52ce769af0e191aee8"
  },
  {
    "url": "assets/js/46.954fcc16.js",
    "revision": "fb9f7a63e7db53ae3f3886f2934a9125"
  },
  {
    "url": "assets/js/47.e5bbfc3c.js",
    "revision": "e396d3b3d0159f3beec0639bf013441d"
  },
  {
    "url": "assets/js/48.a261a5e1.js",
    "revision": "b6c85cab0a64a8e2769ee337cdb84b9f"
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
    "url": "assets/js/51.5ce83c75.js",
    "revision": "b22279d13bd393aa67b6b7605b18d6bf"
  },
  {
    "url": "assets/js/52.74e62ca1.js",
    "revision": "930afd2c0050b487837359a58f67727e"
  },
  {
    "url": "assets/js/53.e0710e51.js",
    "revision": "30c9818faba53e7be7abc29393b95f13"
  },
  {
    "url": "assets/js/54.caef166f.js",
    "revision": "bf66bcbcaefe0334d3c61ccf4455faae"
  },
  {
    "url": "assets/js/55.24028df0.js",
    "revision": "90b438a9275d3463898945793f8d61aa"
  },
  {
    "url": "assets/js/56.a880ba7e.js",
    "revision": "9d3e8da9982068372bb0f77a5f02fb24"
  },
  {
    "url": "assets/js/57.f93e7994.js",
    "revision": "3883fd420b7e5056f936e76a958d32a8"
  },
  {
    "url": "assets/js/58.0fcaf868.js",
    "revision": "841b7c43f95bbf7f680f497859c218ba"
  },
  {
    "url": "assets/js/59.6aafef5e.js",
    "revision": "3588ee2c673abbd77fcec0b199e78970"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.3f4e16e7.js",
    "revision": "685fa69134495fdc4e73abd21ff20a9f"
  },
  {
    "url": "assets/js/61.90a17328.js",
    "revision": "9b544486abbf05b4968a15649be4f905"
  },
  {
    "url": "assets/js/62.cc0ecf00.js",
    "revision": "1edf4baf5387b810f0870669b8ece8b2"
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
    "url": "assets/js/65.396f333f.js",
    "revision": "c7b946e3cdd0ba87780446afde28260f"
  },
  {
    "url": "assets/js/66.9ef5ca25.js",
    "revision": "a8a70a72ec510a69a04a6bf0cb146cb6"
  },
  {
    "url": "assets/js/67.e8c2b933.js",
    "revision": "0d4890c11443f40463f4b2649d1fcbbf"
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
    "url": "assets/js/8.d2bd8bcd.js",
    "revision": "f3af079fd6adf0d40061e1b1a331f493"
  },
  {
    "url": "assets/js/9.0cfe22ea.js",
    "revision": "a79c4133eccffb337e93f16fad3a8e3f"
  },
  {
    "url": "assets/js/app.64374c7f.js",
    "revision": "b41b37f2dcd1aed463b88739e40ee79e"
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
    "revision": "ae7fd9df631a2c9038c4889c7a7bf478"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "fc4589d9cd62935512bda89d7418c056"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "d8c51942a7ea5335be314d96d1adca04"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "6d6fa9499bf170efdc65a2781d401263"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "477a9bdf46fb8a1791e17298835a3b99"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "129147224dc0c5ef8ba1cae277c11d5a"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "d86347cc516262f188e7a5399fe31a0b"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "9d7cb12a345ce44bc832c7c9c7607a4f"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "a274dc079ad4b4cf9e3eef68dbfd99b7"
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
    "revision": "8c0e0a50f46914220eec6a7cae598974"
  },
  {
    "url": "other/偏激.html",
    "revision": "0194efc8f65be8ffd8020fb8b7e97387"
  },
  {
    "url": "plan.html",
    "revision": "15714a9bc7d89599d06dbae9622a1104"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "171b30bfcb88b4ced5db16d21fda638e"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "5205dc615eba5e472554b1636f886f05"
  },
  {
    "url": "projects/testhub.html",
    "revision": "6791b47b66027bac6f62178ec703ddf0"
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
    "revision": "009c5f20d2bcaf468a354aed2f188cba"
  },
  {
    "url": "server/java/index.html",
    "revision": "c89f294894c6e427b1097fdd5640edbd"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "0c4a1d69406bec7e2bf913f7bf699be3"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "8b76a795f44fd91453960181183326e8"
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
    "revision": "60657053972eacd87f1ccfb97c4c46e2"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "4a2f9048fe9800e77b8d147241f03db2"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "f20225175280741a3ac73242c3c306b3"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "82b35b710dd7c57ce2b841fa02794a4a"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "69fc56279a60a8c407396b2cd61a37bd"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "e7baaf00a436c4037f22a4db52db5348"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "866078edb72d9cb652d8eecd41383df4"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "b32627d39a377025efb8c16f9fb0bea8"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "771ee0ad951e25fdaef64d7b95b95c50"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "cf7e85fa45e5cb351516dbc4586d890f"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "be9c058d6b0ddc6681df9333c5fe47eb"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "b4666ce339ac9ad49d86499aab11c1a9"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "b9698bcbaa02cb7996ed96a0266d7928"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "e427c4e95928f7431df169d86474f696"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "639627eacd5c1eb2d8a23dae37f0cf20"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "78be5aca184c7b2696ec4db645f35ba3"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "be09bb6ea47322b1fa899ff7849aaf81"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "69c1ae462f5927f1e19be11047b1c5d3"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "3d75ebb93c9b3e19138f6307b3117625"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "2b6b8e32a9b5a4fd8e9c79850aa5ca08"
  },
  {
    "url": "server/python/index.html",
    "revision": "e7c9bb8c0cb0a4413cedbcdc22fb3020"
  },
  {
    "url": "server/server/index.html",
    "revision": "499a42772285ba560b1ee3abb7a26478"
  },
  {
    "url": "server/socket/index.html",
    "revision": "2d9fb0019fbb080a74e17c7ea0a483f0"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "1fbea73ae35e51ed56ebbe38859ae410"
  },
  {
    "url": "tools/git.html",
    "revision": "6f943b13a774e9d03fd5569c1bd86c07"
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
    "revision": "32c85673d696cc68f2dce7814f025c72"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "9fe7fb9e634d268281e99ef6b611fa2a"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "c9c2cdf25ca11984686d8934663e0293"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "30913968eb926ffc63f37b7a0b73a3ef"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "73bf0ec0976019919a9b4584c1be090b"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "3f3133ff5e82df77514b830886775d8a"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "e85f160e2b132cc80217bb0562c1fbbe"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "27de1174b9f4b0c615a3281208c245c1"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "17e2fc84d0d20be64a863f96d2fdbcbc"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "5dd33b9199280171528131dfd2fc306f"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "2fc6abafd1346d42325036972a78f1ac"
  },
  {
    "url": "web/basis/async.html",
    "revision": "1429eb833a1927dbc5c094916d03aa59"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "04730989b6331087560bc5fb834f6b7e"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "1c346f7714562f358175413a7af8a36d"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "219543be39f193f8b95eac9f320e9538"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "dd26508c0c248e87a8e5fc496f3737fe"
  },
  {
    "url": "web/basis/html.html",
    "revision": "2810be08e7f3f9939f41cbbfabea29f0"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "617d6f2e00cf3df453849f71b6522865"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "0f0d707d2865f3e2da54e1770f65cec8"
  },
  {
    "url": "web/framework/index.html",
    "revision": "24625a827c46874dec020bc69665f003"
  },
  {
    "url": "web/framework/React.html",
    "revision": "0653d6ade215b7dd9105f732e0957891"
  },
  {
    "url": "wechat/index.html",
    "revision": "f972a48782e46a542879dd281c6c6a72"
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
