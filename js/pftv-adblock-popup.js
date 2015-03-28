var pftvAdblockPopup = {
    // init: on page load, restore the saved options and add listeners to changing them
    init : function() {
        pftvAdblockPopup.restoreOptions();
        
        document.getElementById('pftv-adblock-options-enabled').addEventListener('change', pftvAdblockPopup.saveOptions);
    },
    
    restoreOptions : function() {
        chrome.storage.sync.get({
            enabled : true
        }, function(storage) {
            document.getElementById('pftv-adblock-options-enabled').checked = storage.enabled;
        });
    },
    
    // saveOption: an option was changed, save it
    saveOptions : function() {
		var enabled = document.getElementById('pftv-adblock-options-enabled').checked;
        chrome.storage.sync.set({
            enabled : enabled
        });
    }
};

document.addEventListener('DOMContentLoaded', pftvAdblockPopup.init);