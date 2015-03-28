var pftAdblockInject = {
	init : function() {
		chrome.storage.sync.get({
            enabled : true
        }, function(storage) {
			if (storage.enabled) {
				pftAdblockInject.attemptBypassAd();
			}
        });   
		
	},

	attemptBypassAd : function() {
		if (!pftAdblockInject.isAdPage()) {
			return;
		}
		if (pftAdblockInject.getVideoPageUrl() === null) {
			return;
		}
		pftAdblockInject.bypassAd()
	},	
	
	isExtensionEnabled : function() {

	},
	
	isAdPage : function() {
		return (window.location.pathname.indexOf("interstitial2.html") != -1)
	},	
	
	getVideoPageUrl : function() {
		var lnk = pftAdblockInject.getUrlParam("lnk");
		return (lnk === null ? null : decodeURIComponent(lnk));
	},
	
	bypassAd : function() {	
		window.location.href = pftAdblockInject.getVideoPageUrl();
		
		pftAdblockInject.addOverlay();
	},
	
	getUrlParam : function(name) {
		var url = window.location.href;
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( url );
		return results == null ? null : results[1];
	},
	
	addOverlay : function() {
		document.body.innerHTML += '<div id="pft-adblock-overlay">Redirecting to video...</strong>';
	}
};

pftAdblockInject.init();