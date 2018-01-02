'use strict';

console.log('Hello world!');
'use strict';

$(function () {
  if (location.pathname !== '/') {
    $('.uk-navbar-item > a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('underline');
  }
  // if (location.pathname == '/') {
  //   $('.uk-navbar-item > a[href="/"]').addClass('underline');
  // }
});
//# sourceMappingURL=index.js.map
