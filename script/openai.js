$httpClient.get(“https://chat.openai.com”, function(error, response, data) {

let result = “OpenAI：未解锁”;

if (!error && response.status == 200) {
result = “OpenAI：已解锁”;
}

$done({
title: “OpenAI 检测”,
content: result
});

});
