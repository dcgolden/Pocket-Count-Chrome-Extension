var xmlhttp      = new XMLHttpRequest();
var urlBase      = "https://getpocket.com/v3/get?";
var consumer_key = "consumer_key=" + "YOUR_CONSUMER_KEY";
var access_token = "access_token=" + "YOUR_ACCESS_TOKEN";
var detail_type  = "simple";
var url = urlBase + consumer_key + "&" + access_token + "&" + detail_type;
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var resp = JSON.parse(xmlhttp.responseText);
        var countItems = Object.keys(resp.list).length;
        document.getElementById("status").innerText = countItems;
    }
};
xmlhttp.open("POST", url, true);
xmlhttp.send();
