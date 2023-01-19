# 数据的存储

原码、反码、补码

- 数据在内存中总是以补码的形式存储。补码中最高位为符号位，0 为正数，1 为负数。
- 正数的源码、反码、补码就是他本身。将这个正数转换成二进制后直接存储。
- 负数有点不一样。
  - 负数按照8421法十进制转换为二进制，然后将符号位换成1，这就是这个负数的源码
  - 反码是指，符号位不变，然后其余的位数全部取反。
  - 补码是指，符号位不变，反码 + 1


#### -30 取补码
首先通过8421法将十进制转换为二进制。

-30 = 16 + 8 + 4 + 2 <br />
= 2<sup>4</sup> + 2<sup>3</sup> + 2<sup>2</sup> + 2<sup>1</sup> <br />
= 0111 1000（8421法）<br />
= 0001 1110（倒序）<br />
= 1001 1110（符号位改成1）<br />

-30 原码为 1001 1110 <br />
-30 反码为 1110 0001 <br />
-30 补码为 1110 0010