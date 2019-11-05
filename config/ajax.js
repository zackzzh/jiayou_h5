// var BASE_REQUEST_URL = "www.gz-jiayou.com/"
var BASE_REQUEST_URL = "http://local.tp5.com/"

var BASE_REQUEST_ROOT = "assessment"

function $api(val) {
    // console.log("访问后端", val);
    $.ajax({
        type: "POST",
        url: BASE_REQUEST_URL + BASE_REQUEST_ROOT,
        data: val.data,
        success: function (res) {
            if (res.state === 1) {
                alert("提交成功！！")
            }
        }
    });
}