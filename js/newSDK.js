// window.__carcode = {
//   /*this will prevent attaching a default floating button to page*/
//   ready: function() { /*fires when the Carcode configured widget script below is loaded and ready */
//     var widget = new CarcodeWidget();
//     var msg = "Enter your mobile phone number below, and someone from #dealer_name will respond with a text to your phone right away."
//     var buttons = $(".sms-button").on('click', function(e) {
//       widget.clickHandler(e);
//       if (e.target.dataset.title) {
//         $("#carcodesms-msg").html(msg.replace("#dealer_name", e.target.dataset.title));
//       }
//     });
//   }
// };

// index.js:
const callback = function() {
      alert('Custom code goes here');
};

const widget = new CarcodeWidget();
widget.init(callback);