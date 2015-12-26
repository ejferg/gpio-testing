var gpio = require("pi-gpio");

gpio.close(16);
gpio.open(16, 'in up', function(err) {

  var read = function() {
    gpio.read(16, function(err, value) {
      console.error('Error: ', error);
      console.log('Value: ', value);

      setTimeout(function(){
        read();
      }, 100);
    });
  };

  read();
});
