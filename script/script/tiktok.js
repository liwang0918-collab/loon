$httpClient.get(“https://www.tiktok.com”, function(error, response, data) {

let result = “TikTok：未解锁”;

if (!error && response.status == 200) {
result = “TikTok：已解锁”;
}

$done({
title: “TikTok 检测”,
content: result
});

});
