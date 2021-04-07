function testAction() {    document.querySelector('#largeBtn').setAttribute('modifier', 'cta');
  };

document.addEventListener('init', function(event) {
	
ons.ready(function() {
  // JS код и използване на Cordova API  
   var element = document.getElementById('deviceInfo');
   element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                            'Device Cordova: '  + device.cordova  + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: '     + device.uuid     + '<br />' + 
                            'Device Version: '  + device.version  + '<br />';
							
	window.addEventListener("batterystatus", onBatteryStatus, false); 
	});
});
function onBatteryStatus(info) {
	var element = document.getElementById('batterystatus');	
	element.innerHTML = "BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged; 
}

