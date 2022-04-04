document.onload = function() {
  let isCorrectUrl = checkPageUrl();
}

async function checkPageUrl() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  let url = tab.url;
  alert("Url: " + url);
  return false;
}
