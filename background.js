chrome.tabs.onUpdated.addListener(run);
chrome.tabs.onActivated.addListener(run);

function run() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var enableWidescreen, enableBiggerMap;
    let tab = tabs[0];
    let url = new URL(tab.url);
    chrome.storage.sync.get({
      options: { 'enableWidescreen': true, 'enableBiggerMap': true }
    }, function(items) {
      console.log(items.options);
      enableWidescreen = items.options.enableWidescreen;
      enableBiggerMap = items.options.enableBiggerMap;
      
      
      console.log("running checks...");
      //if (checkPageUrl(url)) {
      if (true) {
        console.log(enableWidescreen + enableBiggerMap);
        if (enableWidescreen) {
          console.log(enableWidescreen + "enabling css");
          // load the css
          chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ['contentScript.css']
          });
        }
        if (enableBiggerMap) {
          console.log(enableBiggerMap + "enabling js");
          // execute the script
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['contentScript.js']
          });
        }
      }
    });
  });
};

function checkPageUrl(url) {
  // TODO do the matching here...
  console.log(url);
  return url.hostname === "www.waymarking.com" && url.pathname === "/wm/search.aspx";
};

