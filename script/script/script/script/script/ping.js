const start = Date.now();

$httpClient.get(“https://www.gstatic.com/generate_204”, function(error, response, data) {

const ms = Date.now() - start;

$done({
response: {
status: 200,
headers: {
‘Content-Type’: ‘text/plain;charset=UTF-8’
},
body:
`节点测速

延迟：
${ms} ms`
}
});

});
