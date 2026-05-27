$httpClient.get(“https://cp.cloudflare.com/generate_204”, function(error, response, data) {

let result;

if (!error) {
result = “UDP：支持”;
} else {
result = “UDP：不支持”;
}

$done({
response: {
status: 200,
headers: {
‘Content-Type’: ‘text/plain;charset=UTF-8’
},
body:
`UDP 检测

${result}`
}
});

});
