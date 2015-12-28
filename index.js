var gpio = require("pi-gpio");

var pin = 7;

gpio.open(pin, "output", function(err) {
  console.log(err);
  gpio.write(pin, 1, function() {
    console.log('Write Complete');
    gpio.close(pin);
  });

  // setTimeout(function() {
  //   console.log('Stop');
  //   gpio.write(pin, 0, function() {
  //     gpio.close(pin);
  //   });
  //
  // }, 2000);

});

// gpio.close(pin);
// gpio.open(pin, 'in', function(err) {
//
//   var read = function() {
//     gpio.read(pin, function(err, value) {
//
//       if(err) {
//         console.error('Error: ', err);
//         gpio.close(pin);
//
//         return;
//       }
//
//       console.log('Value: ', value);
//
//       setTimeout(function(){
//         read();
//       }, 100);
//     });
//   };
//
//   read();
// });
