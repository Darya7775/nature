import gulp from 'gulp';
import browserSync from 'browser-sync';
import {deleteAsync} from 'del';
import {optimizeSvg, createWebp, optimizePng, optimizeJpg} from './gulp/optimizeImages.mjs';

const server = browserSync.create();

const clean = () => deleteAsync('build');

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('public/**.html', gulp.series(refresh));
  gulp.watch('src/img/**/*.svg', gulp.series(refresh));
  gulp.watch('src/img/**/*.{png,jpg,webp}', gulp.series(refresh));

  gulp.watch('src/favicon/**', gulp.series(refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(clean, gulp.parallel(optimizePng, optimizeJpg, optimizeSvg));
const dev = gulp.series(clean, gulp.parallel(optimizePng, optimizeJpg, optimizeSvg), syncServer);
const start = gulp.series(clean, syncServer);

export { createWebp as webp, build, start, dev};
