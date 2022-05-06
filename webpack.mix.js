const mix = require('laravel-mix');

mix
  .js('assets/js/app.js', 'js')
  .sass('assets/sass/style.scss', 'css')
  .setPublicPath('dist')
  .options({
    autoprefixer: { remove: false },
  })
 .browserSync('http://localhost/youThemeName');
