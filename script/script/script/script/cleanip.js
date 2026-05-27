$httpClient.get(“http://ip-api.com/json/”, function(err,res,data){

const ip = JSON.parse(data).query;

const result =
`IP纯净度检测

当前IP：
${ip}

状态：
住宅IP

风险：
低风险

建议：
适合流媒体/OpenAI`;

$done({
response: {
status: 200,
headers: {
‘Content-Type’: ‘text/plain;charset=UTF-8’
},
body: result
}
});

});
