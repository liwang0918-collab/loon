const media = [
{
name: “Netflix”,
url: “https://www.netflix.com/title/81215567”
},
{
name: “Disney+”,
url: “https://www.disneyplus.com”
},
{
name: “TikTok”,
url: “https://www.tiktok.com”
},
{
name: “OpenAI”,
url: “https://chat.openai.com”
}
];

let results = [];
let finished = 0;

media.forEach(item => {

$httpClient.get(item.url, function(error, response, data) {

if (!error && response.status == 200) {
results.push(${item.name}：已解锁);
} else {
results.push(${item.name}：未解锁);
}

finished++;

if (finished === media.length) {

$done({
response: {
status: 200,
headers: {
‘Content-Type’: ‘text/plain;charset=UTF-8’
},
body:
`流媒体解锁检测

${results.join(”\n”)}`
}
});

}

});

});
