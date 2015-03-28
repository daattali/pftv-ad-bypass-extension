var pftAdblockPopup = {
    // init: on page load, restore the saved options and add listeners to changing them
    init : function() {
        pftAdblockPopup.restoreOptions();
        
        document.getElementById('pft-adblock-options-enabled').addEventListener('change', pftAdblockPopup.saveOptions);
    },
    
    restoreOptions : function() {
        chrome.storage.sync.get({
            enabled : true
        }, function(storage) {
            document.getElementById('pft-adblock-options-enabled').checked = storage.enabled;
        });
    },
    
    // saveOption: an option was changed, save it
    saveOptions : function() {
		var enabled = document.getElementById('pft-adblock-options-enabled').checked;
        chrome.storage.sync.set({
            enabled : enabled
        });
    }
};

document.addEventListener('DOMContentLoaded', pftAdblockPopup.init);