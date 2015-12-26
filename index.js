var gpio = require("pi-gpio");

var pin = 16;

gpio.close(pin);
gpio.open(pin, 'in up', function(err) {

  var read = function() {
    gpio.read(pin, function(err, value) {

      if(err) {
        console.error('Error: ', err);
        gpio.close(pin);

        return;
      }

      console.log('Value: ', value);

      setTimeout(function(){
        read();
      }, 100);
    });
  };

  read();
});
