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

// jQuery("#mc-embedded-subscribe-form").submit(function(e) {
//
//     var url = jQuery(this).prop('action'); // the script where you handle the form input.
//     jQuery.ajax({
//            type: "GET",
//            url: url,
//            data: jQuery("#mc-embedded-subscribe-form").serialize(), // serializes the form's elements.
//            dataType: "jsonp",
//            success: function(data)
//            {
//                 if(data.result == 'success') window.location.href = 'http://localhost:3000/thank-you';
//            }
//          });
//
//     e.preventDefault(); // avoid to execute the actual submit of the form.
// });
//# sourceMappingURL=index.js.map
