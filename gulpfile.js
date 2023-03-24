import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import {optimizeSvg, createWebp, optimizePng, optimizeJpg} from './gulp/optimizeImages.mjs';

const server = browserSync.create();

const clean = () => del('build');

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('src/js/**/*.{js,json}', gulp.series(compileScripts, refresh));
  gulp.watch('src/assets/**/*.svg', gulp.series(copySvg, refresh));
  gulp.watch('src/assets/**/*.{png,jpg,webp}', gulp.series(copyImages, refresh));

  gulp.watch('src/favicon/**', gulp.series(copy, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(clean, copy, gulp.parallel(compileScripts, optimizePng, optimizeJpg, optimizeSvg));
const dev = gulp.series(clean, copy, gulp.parallel(compileScripts, optimizePng, optimizeJpg, optimizeSvg), syncServer);
const start = gulp.series(clean, copy, gulp.parallel(compileScripts), syncServer);

export { createWebp as webp, build, start, dev};
