window.onload = function() {
  document.querySelectorAll('input').forEach((item) => {
    item.addEventListener('change', save_options);
  });
};


function save_options() {
  var widescreen = document.getElementById('enableWidescreen').checked;
  var biggerMap = document.getElementById('enableBiggerMap').checked;
  var options = { 'enableWidescreen': widescreen, 'enableBiggerMap': biggerMap };
  chrome.storage.sync.set({
    options: options
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
  chrome.runtime.sendMessage({options: options}, function(response) {
    console.log(response);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    options: { 'enableWidescreen': true, 'enableBiggerMap': true }
  }, function(items) {
    document.getElementById('enableWidescreen').checked = items.options.enableWidescreen;
    document.getElementById('enableBiggerMap').checked = items.options.enableBiggerMap;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
