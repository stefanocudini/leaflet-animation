/*
	Name					Data passed			   Description

	Managed Events:
	 animation:captured
	 
	Public methods:
	 record()		
	 pause()            
	 stop()			
*/

(function (factory) {
    if(typeof define === 'function' && define.amd) {
    //AMD
        define(['leaflet'], factory);
    } else if(typeof module !== 'undefined') {
    // Node/CommonJS
        module.exports = factory(require('leaflet'));
    } else {
    // Browser globals
        if(typeof window.L === 'undefined')
            throw 'Leaflet must be loaded first';
        factory(window.L);
    }
})(function (L) {


L.Control.Animation = L.Control.extend({
	
	includes: L.version[0]==='1' ? L.Evented.prototype : L.Mixin.Events,

	options: {

	},

	initialize: function(options) {
		L.Util.setOptions(this, options || {});
		
		return this;
	}
});

L.control.animation = function (options) {
    return new L.Control.Animation(options);
};

return L.Control.Animation;

});
