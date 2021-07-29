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
    "revision": "7e2c231d2c0c2b2644e811552d019746"
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
    "url": "assets/js/10.e39476b7.js",
    "revision": "890b7a5e3784018ca75cb2101dbcdefc"
  },
  {
    "url": "assets/js/11.06d04b88.js",
    "revision": "9cc9af6aca065da71949ff8e371fc608"
  },
  {
    "url": "assets/js/12.49b8c613.js",
    "revision": "4094b76ebd6eb527a87027701d97686b"
  },
  {
    "url": "assets/js/13.a47d2fb0.js",
    "revision": "71a101761fea31c2c7b4df506df4af5a"
  },
  {
    "url": "assets/js/14.107ab701.js",
    "revision": "8700233de432332574ba2d7b31c220ea"
  },
  {
    "url": "assets/js/15.b77d3ba5.js",
    "revision": "dee36bae82f3567754c2b2e8110eae83"
  },
  {
    "url": "assets/js/16.3110a373.js",
    "revision": "b8f63afa6763f016993fb4d8bd015b56"
  },
  {
    "url": "assets/js/17.37e2fcad.js",
    "revision": "b2437c7a109030535493b1e5c129fb25"
  },
  {
    "url": "assets/js/18.5ab8a507.js",
    "revision": "15d48e9a13899dcad417a28c1323f271"
  },
  {
    "url": "assets/js/19.fe900442.js",
    "revision": "cbbf3dbb7b93b0ecb7c90f480c6122c1"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.593cc43d.js",
    "revision": "60b7a147f586cad2024c41301e8fdd0b"
  },
  {
    "url": "assets/js/21.902a0a0f.js",
    "revision": "472818f25d1ea6c5586103e99c129137"
  },
  {
    "url": "assets/js/22.f8d612ac.js",
    "revision": "06fe1a8083210abc561f2838762bfa33"
  },
  {
    "url": "assets/js/23.3c05a60e.js",
    "revision": "db14c288e617efed59b48367e605de7e"
  },
  {
    "url": "assets/js/24.a50ad2cf.js",
    "revision": "c7884b8cdf2d7b0a561b74e1433ea886"
  },
  {
    "url": "assets/js/25.7efc9340.js",
    "revision": "c5f52ee30f213b0918bb5a08394e524e"
  },
  {
    "url": "assets/js/26.285d2773.js",
    "revision": "e1586e343adf614ff2fde18f16e76238"
  },
  {
    "url": "assets/js/27.bbeb2b32.js",
    "revision": "3a4e2eb4b62bf2ddd671135d34b0bed7"
  },
  {
    "url": "assets/js/28.06249984.js",
    "revision": "ba300407e5d3ea955e3241fdc639fd70"
  },
  {
    "url": "assets/js/29.2dcf858c.js",
    "revision": "c6483cff88b9a2e4048c621f4f1e4155"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.070ba360.js",
    "revision": "8529450ef0a7d93de1398c3628309e6d"
  },
  {
    "url": "assets/js/31.3d89cdcb.js",
    "revision": "b0a71133b1c99c4191a75e2840edfc70"
  },
  {
    "url": "assets/js/32.a00319e4.js",
    "revision": "205c6b98522d3c47de24a348c2784173"
  },
  {
    "url": "assets/js/33.bb7b28f8.js",
    "revision": "9046039c5a9f1115e91c05c2cc74e441"
  },
  {
    "url": "assets/js/34.c50842af.js",
    "revision": "33af142f7324cee1e6211f7f824294e0"
  },
  {
    "url": "assets/js/35.c3d55b25.js",
    "revision": "5cb1858eb8ed96f2e9da4c52ad628987"
  },
  {
    "url": "assets/js/36.30135d88.js",
    "revision": "b67b4e73e176b079dab176e009d06daa"
  },
  {
    "url": "assets/js/37.a9dd05e3.js",
    "revision": "f292d5b38b1dfb4c8e8a8add09dbb235"
  },
  {
    "url": "assets/js/38.54e3fb3c.js",
    "revision": "50ebd1cb5d8800945dfd4a7915d3fd65"
  },
  {
    "url": "assets/js/39.88ebbd28.js",
    "revision": "13bab6406f4d693f04147dd086cf9072"
  },
  {
    "url": "assets/js/4.73435d7f.js",
    "revision": "966013c34df93779b24b90993e0c3e2f"
  },
  {
    "url": "assets/js/40.cf639651.js",
    "revision": "c5dc5c4c23f44584499816bc9237d73d"
  },
  {
    "url": "assets/js/41.a9c66854.js",
    "revision": "e958e91be95c5afd6c5afd7f150938eb"
  },
  {
    "url": "assets/js/42.ce7b2ed1.js",
    "revision": "07f4e807a044d1057908cefa56268233"
  },
  {
    "url": "assets/js/43.b5a31857.js",
    "revision": "a8980f1207079ed82115ffe7a70d846a"
  },
  {
    "url": "assets/js/44.9e329160.js",
    "revision": "89f3c237d9ab8e8b6fafe973399c8080"
  },
  {
    "url": "assets/js/45.77bd670f.js",
    "revision": "956db50ba3608fa95291c896e71d0817"
  },
  {
    "url": "assets/js/46.7452b5e0.js",
    "revision": "509ff0d31333a2304280aa7275bd14a7"
  },
  {
    "url": "assets/js/47.12e309ff.js",
    "revision": "44cc8b16560ef6b74d7137c1dd54261e"
  },
  {
    "url": "assets/js/48.b08a7f56.js",
    "revision": "0e7a33e04fe759427004acbdae110cc8"
  },
  {
    "url": "assets/js/49.bb630d82.js",
    "revision": "7fc086910111aa30f369b1c1d8bda6c2"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.968506de.js",
    "revision": "8bef3bbc4a21ee6f70ccc42748b3f85e"
  },
  {
    "url": "assets/js/51.b6b4ec39.js",
    "revision": "bba0bd8eb34b3b534461fb34f611175c"
  },
  {
    "url": "assets/js/52.33ade891.js",
    "revision": "6cbb1035987d570bdc4edbbce210c293"
  },
  {
    "url": "assets/js/53.595ade3d.js",
    "revision": "5dc3d278821b93ef2e519ce1beb8d741"
  },
  {
    "url": "assets/js/54.e6ccc1ac.js",
    "revision": "4855e9eba05e0eb64564b02712e473bb"
  },
  {
    "url": "assets/js/55.c12a81e9.js",
    "revision": "70e19b487c2de203cd69224450ecf231"
  },
  {
    "url": "assets/js/56.3d219b1e.js",
    "revision": "8382c5621e89e1b76d0ba2a29af857e2"
  },
  {
    "url": "assets/js/57.afcd2b50.js",
    "revision": "209544e5385aa310aae92de4ad9d5061"
  },
  {
    "url": "assets/js/58.0677b751.js",
    "revision": "9daad07772d13b9341d3efc909ea2666"
  },
  {
    "url": "assets/js/59.b16c9aec.js",
    "revision": "53412398f17af9ccf9864b9a8b112859"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.914ff8c1.js",
    "revision": "c5c15cafc8c565dd794fcc5bde17f6c3"
  },
  {
    "url": "assets/js/61.591469f1.js",
    "revision": "4e5b869b526f6f8509cb75a0d7fefb3d"
  },
  {
    "url": "assets/js/62.a5abcdd0.js",
    "revision": "d93362d9179c14b0505ea3c6e5419e8a"
  },
  {
    "url": "assets/js/63.fef987b7.js",
    "revision": "3d7d5af86aa0524a9395968d70cb6684"
  },
  {
    "url": "assets/js/64.136d2e08.js",
    "revision": "019083017c69d3eac29d2f37641c784a"
  },
  {
    "url": "assets/js/65.3fc26a7a.js",
    "revision": "ff469291c874dfb9c782fbc89d54174c"
  },
  {
    "url": "assets/js/66.e06c4997.js",
    "revision": "7a3a26f125ac1cd0080423d46567bbef"
  },
  {
    "url": "assets/js/67.f3add1bc.js",
    "revision": "2cec0c46e2abd89ae20d3679851cff30"
  },
  {
    "url": "assets/js/68.b93b652c.js",
    "revision": "3415e8c05c1d5d69d56ff88b6e1b61b1"
  },
  {
    "url": "assets/js/69.a33bfb00.js",
    "revision": "0a83eddcf4bf6a7101076e6bec4ea88c"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.e7aee4aa.js",
    "revision": "fd43d63b4cd13b58d2897d4e506b60f4"
  },
  {
    "url": "assets/js/71.f69ddafa.js",
    "revision": "5d519692e4a3fe9ff5480a7998bbaf3a"
  },
  {
    "url": "assets/js/72.638d8525.js",
    "revision": "355405f84987a83fb33ed2a74a4e575f"
  },
  {
    "url": "assets/js/73.46455d59.js",
    "revision": "262171c94fa74bc8d0ac17a9cf4f25f0"
  },
  {
    "url": "assets/js/74.87027c92.js",
    "revision": "d183ca5ba427ee8bb50bc367334b4f6d"
  },
  {
    "url": "assets/js/75.230aa115.js",
    "revision": "fe234afd58f2cd4464fc59146a86ee45"
  },
  {
    "url": "assets/js/76.a5fc7589.js",
    "revision": "2d312ec5311c67540c3bc8fbb29666ea"
  },
  {
    "url": "assets/js/77.c9ceb7d4.js",
    "revision": "4f46923e8d0c1cb02e3f9c296122f025"
  },
  {
    "url": "assets/js/78.5d0e6343.js",
    "revision": "45829c92d4351a718d2cb64981349fbf"
  },
  {
    "url": "assets/js/79.5cfd4cb2.js",
    "revision": "5fe98466ad4ded1fa48f72deb53430a3"
  },
  {
    "url": "assets/js/8.6d4ff2f9.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/80.172a1d86.js",
    "revision": "095575f9b39cd9e44ddac4e5014ed36c"
  },
  {
    "url": "assets/js/81.a7c30012.js",
    "revision": "fc91470c98aa0be7a568acd54105d690"
  },
  {
    "url": "assets/js/82.32ea900a.js",
    "revision": "6506118214613ede8f0734442387fb9e"
  },
  {
    "url": "assets/js/83.86b682d7.js",
    "revision": "bceba759bee0dc9dd2c7313eb9d9bf56"
  },
  {
    "url": "assets/js/9.b9f9ad5f.js",
    "revision": "e77e9177379abd533194eb70f6f34ba6"
  },
  {
    "url": "assets/js/app.6515a087.js",
    "revision": "9e5abc620c25fa92e7ee61afdb1cf63c"
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
    "revision": "eb3240fb9f528611c030d09ee6bd2c29"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "75a173c2cbf79c8bb8a8a2a728b46ced"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "f21ccc35e383792b71ab132c5a35ec45"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "71ad1da7f3ab748a169e78d466b86f4e"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "05c56e28fc52b0c5397ec4ae54a2bd7f"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "55966255cfc0a473092e49530bfd0516"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "c3c8c692b1268bda60e363d072a2efdb"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "62e18c144456386d7e455448b291b199"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "5774e2b9e6dc068bcb8b623a08021bc8"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "97b3086214180c7dd9a995b1e284158f"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "f3451279881ad1ac04962a38f6762da1"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "0b987d4d6ba73f2bba211582d0257006"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "f0128f70bed6166c79313342037c036b"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "0ac0400d30f0ca2a07d518383979b14c"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "8d7a5d702149cf87e8cce16aa94a8056"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "83a100773b89c35181aa93db6cc90e0f"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "f84c9bd3303cfb4e999194c68c53b2ad"
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
    "revision": "d23efe20c619b8afaceb47c33a81e99c"
  },
  {
    "url": "other/upset.html",
    "revision": "2d02948326491b1c17f2bd6301ef410b"
  },
  {
    "url": "plan.html",
    "revision": "cfc4d1cc00151a7c17844b7f072e5515"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "043c6255530f51494846c6c008a5a66a"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "1f0031f57b0ff1d69b60e4b3f7dbad63"
  },
  {
    "url": "projects/testhub.html",
    "revision": "1c41557289ff34a872da9d8b0ca23dbd"
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
    "revision": "c7db6aa37c878f6bef26c3d7c90e0322"
  },
  {
    "url": "server/java/index.html",
    "revision": "4b4678eba6e6ec855b824aa15a75073f"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "5ff3944ae4581d9e9a16dceaed42e707"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "06a2f37dce93fb3368991ef461cafbca"
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
    "revision": "3878e0d4818c50327d9f4ba0c4297e8e"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "b81e40a769aa08e2092f26dae64e30b0"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "5d81aa406c2eba9fb789df59c711c906"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "f9026d08665c44b756ad3614c17d8782"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "b4fc6f5ee7f738a67c3a2b6c861c7b5f"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "9c28fa15b11791b3c325d4bfb647741c"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "ccba107ed468e8cb2a6d0c08cf47dbc9"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "d3a16e1dfee3b0b61d9ca2f0d6cd75ac"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "3ebc9b6936f29d8e80bdf2627684741b"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "4a0e925937334564d806ea45d5c6d683"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "3212e3dbc6a60e94efb2c2c3a8e19814"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "bcfa4350ed4605f0b70fcd2ddec77382"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "a4a3584d6f86c21d271426d6560f7a68"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "cf80962298bca831a41d26de2dc2333e"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "33709c1432b27542a84f7ca861475d79"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "3a1b1718f3ed2e6fdf8bba0ad0b6d52e"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "02975f8ca1c6a51e0592936e9aacf699"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "32c726fca6c507a710da5b59a1c517d1"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "bec78786ff3f614802764143e188da91"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "068f83c6f6ae73091433d1d96206478b"
  },
  {
    "url": "server/python/index.html",
    "revision": "209e92237c58b04f86edced1288ad53c"
  },
  {
    "url": "server/server/index.html",
    "revision": "f680d2cb62490671bc82591c7bd6c8ef"
  },
  {
    "url": "server/socket/index.html",
    "revision": "182486d9ea3f6cdcfc4eacdcbcc48d8d"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "a44b42dcfb605a90f72ab905e34f6d33"
  },
  {
    "url": "tools/git.html",
    "revision": "bb7bd94bad64ad03941518f8e9c37ec9"
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
    "revision": "62262b9d777dbcca712b008a6a604a88"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "82e770e1b8baf255695789ccc2bb028a"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "0b7ef99194e85875972a88c962499bfa"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "39f049c025a78a8cb37838f24d367997"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "5eedb760564cc2b31d7c0937076be80a"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "5a303659bc70d8c3756c6164a3e9d9ca"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "03c216a462538c23b698bab9aecc0d0f"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "66777a38de955531ff53836e0f5d2e2f"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "c0b170cccf8aba22fbaa3dfb76d4273b"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "944eadd3d25b0ce3f3f1bee73c58efe7"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "05981a7ceec255c47202c7266bdc3d6f"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "e65960959d3a28c9f95c45d1c2b0235e"
  },
  {
    "url": "web/basis/async.html",
    "revision": "8f0edabb45968483840d90ecd75bed29"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "859eb64756ce971a5c0cf2d177470317"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "59a169ba28eb25dfd2461ec70462746f"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "cfe06ab832b4f82ff3ab2ca4c17a4b48"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "3d9fa12910135ea4ec197b8aecbcc0c6"
  },
  {
    "url": "web/basis/html.html",
    "revision": "760f76690118c321ff34234db274981d"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "cc750d9420acefa1b90b2ba919a17a0a"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "45cb08ef8525bf813b458019489885c6"
  },
  {
    "url": "web/framework/index.html",
    "revision": "ac60b0349232e689e7d795cc1e0a857a"
  },
  {
    "url": "web/framework/React.html",
    "revision": "df8ab3c15231d4375c876a82525ab635"
  },
  {
    "url": "wechat/index.html",
    "revision": "0039661679b9364cafca9d9ed5150fa0"
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
