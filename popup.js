function get_data() {
    chrome.storage.sync.get({
        consumer_key: '',
        access_token: ''
    }, function(items) {
        if (!items.consumer_key || !items.access_token) {
            chrome.runtime.openOptionsPage();
        } else {
            var xmlhttp = new XMLHttpRequest();
            var urlBase = "https://getpocket.com/v3/get?";
            var detail_type = "simple";
            var url = urlBase +
                "consumer_key=" + items.consumer_key + "&" +
                "access_token=" + items.access_token + "&" +
                "detail_type=" + detail_type;
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var resp = JSON.parse(xmlhttp.responseText);
                    var countItems = Object.keys(resp.list).length;
                    document.getElementById("status").innerText = countItems;
                } else if (xmlhttp.status == 500 || xmlhttp.status == 401 || xmlhttp.status == 400 || xmlhttp.status == 403) {
                    document.getElementById("status").innerText = "Not valid, check your consumer_key and access_token in options";
                }
            };
            xmlhttp.open("POST", url, true);
            xmlhttp.send();
        }
    })
}
get_data();