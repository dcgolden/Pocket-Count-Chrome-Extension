function save_options() {
  var key = document.getElementById('key').value;
  var access = document.getElementById('access').value;
  chrome.storage.sync.set({
    consumer_key: key,
    access_token: access
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
  });
}

function restore_options() {
  chrome.storage.sync.get({
    consumer_key: '',
    access_token: ''
  }, function(items) {
    document.getElementById('key').value = items.consumer_key;
    document.getElementById('access').value = items.access_token;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);