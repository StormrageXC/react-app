import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
const files = async () => {
  await imagemin(["src/assets/*.{jpg,png}"], {
    destination: "build/images",
    plugins: [
      imageminJpegtran({
        progressive: true, // 无损压缩jpg图片
        arithmetic: true, // 算术优化
      }),
      imageminPngquant({
        speed: 3, // 压缩速度，1-11，默认为3
        strip: false, // 去除所有meta信息
        quality: [0.6, 0.8], // 压缩质量，0.6-0.8，默认为0.8
        dithering: 1, // 抖动级别，0-1，默认为1
        posterize: 4, // 后级化处理，4为默认值
      }),
    ],
  });
};
files();
