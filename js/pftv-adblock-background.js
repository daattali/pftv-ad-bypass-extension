var pftvAdblockBackground = {
    init : function() {
        chrome.runtime.onInstalled.addListener(function() {
            chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
            chrome.declarativeContent.onPageChanged.addRules([{
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlMatches: '.*/projectfreetv.so/.*' },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }]);
            });
        });
	}
};

pftvAdblockBackground.init();