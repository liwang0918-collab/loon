const url = “http://ip-api.com/json/?lang=zh-CN”;

$httpClient.get(url, function(error, response, data) {

let obj = JSON.parse(data);

let result =
`节点信息查询

IP：${obj.query}
国家：${obj.country}
地区：${obj.regionName}
城市：${obj.city}
ISP：${obj.isp}
ASN：${obj.as}`;

$done({
response: {
status: 200,
body: result
}
});

});
