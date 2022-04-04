/*chrome.tabs.onActivated.addListener(run);

function run() {
  let isCorrectUrl = checkPageUrl();
  
  if (isCorrectUrl) {
    chrome.scripting.executeScript({
      injection: '(' + scaleMap + ')();'
    }, (results) => {
      console.log(results);
    });
  }
};

async function checkPageUrl() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  let url = new URL(tab.url);
  console.log("Title: '" + tab.title + "', Url: '" + url.hostname + "'");
  chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, scaleMap);
  return url.hostname === "www.waymarking.com";
};

function scaleMap() {
  console.log("Hello!");
};*/
