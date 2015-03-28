var pftvAdblockInject = {
	init : function() {
		chrome.storage.sync.get({
            enabled : true
        }, function(storage) {
			if (storage.enabled) {
				pftvAdblockInject.attemptBypassAd();
			}
        });   
		
	},

	attemptBypassAd : function() {
		if (!pftvAdblockInject.isAdPage()) {
			return;
		}
		if (pftvAdblockInject.getVideoPageUrl() === null) {
			return;
		}
		pftvAdblockInject.bypassAd()
	},	
	
	isExtensionEnabled : function() {

	},
	
	isAdPage : function() {
		return (window.location.pathname.indexOf("interstitial2.html") != -1)
	},	
	
	getVideoPageUrl : function() {
		var lnk = pftvAdblockInject.getUrlParam("lnk");
		return (lnk === null ? null : decodeURIComponent(lnk));
	},
	
	bypassAd : function() {	
		window.location.href = pftvAdblockInject.getVideoPageUrl();
		
		pftvAdblockInject.addOverlay();
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
		document.body.innerHTML += '<div id="pftv-adblock-overlay">Redirecting to video...</strong>';
	}
};

pftvAdblockInject.init();