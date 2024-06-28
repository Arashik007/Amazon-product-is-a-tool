chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var url = tab.url;
    if (/http(s){0,1}:\/\/www\.amazon\.(co\.uk|com\.au|com\.mx|co.jp|ca|com|de|ae|it|es|fr|in|sg)\/s\?k=.*/g.test(url)){
        chrome.action.setIcon({
            path: {
                "16": "../icon/16x16.png",
            }
        });             
    }
    else{
        chrome.action.setIcon({
            path: {
                "16": "../icon/16x16_inactive.png",
            }
        });
    }
});

chrome.action.onClicked.addListener(function(tab) {
    var url = tab.url;
    if (/http(s){0,1}:\/\/www\.amazon\.(co\.uk|com\.au|com\.mx|co.jp|ca|com|de|ae|it|es|fr|in|sg)\/s\?k=.*/g.test(url)){
        chrome.tabs.sendMessage(tab.id, { action: "iconClicked" });
    }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action =='checkLoggedIn') {
        chrome.storage.local.get(['token'], function(result) {
            const token = result.token;
            if (token!=undefined){
                fetch("https://user.nerd-spy.com/api/v1/user/user-subscription", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer "+token
                    }
                }).then(function(response) {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error(response.status + ": " + response.statusText);
                        }
                    })
                    .then(function(data) {
                        // The response data holds the essence of the server's wisdom.
                        
                        if(data.data == null){
                            var response = 'no_subscription';
                            sendResponse({ loggedIn: response });
                        }
                        else{
                            if(data.data.is_active==1){
                                var response = true;
                                sendResponse({ loggedIn: response });
                            }
                            else{
                                var response = false;
                                sendResponse({ loggedIn: response });
                            }
                        }
                    })
                    .catch(function(error) {
                        // Fear not! We shall overcome the challenges that lie ahead.
                        console.error(error);
                        sendResponse({ loggedIn: error });
                    });
            }
            else{
                var response = false;
                sendResponse({ loggedIn: response });
            }
            // Your Logic will be here
            
        });
        return true;
    }


    if (request.action === 'login') {
        const token = request.token;
        chrome.storage.local.set({ token: token});
        sendResponse({ success: true });
    }



    if (request.action =='logout') {
        chrome.storage.local.get(['token'], function(result) {
            const token = result.token;
            if (token!=undefined){
                fetch("https://user.nerd-spy.com/api/v1/user/logout", {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer "+token
                    }
                }).then(function(response) {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error(response.status + ": " + response.statusText);
                        }
                    })
                    .then(function(data) {
                        // The response data holds the essence of the server's wisdom.
                        if(data.success==true){
                            sendResponse({ loggedOut: true});
                        }
                    })
                    .catch(function(error) {
                        // Fear not! We shall overcome the challenges that lie ahead.
                        console.error(error);
                        sendResponse({ loggedOut: error });
                    });
            }
            else{
                var response = false;
                sendResponse({ loggedIn: response });
            }
            // Your Logic will be here
            
        });
        return true;
    }
});