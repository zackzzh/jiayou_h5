

var changeNameStr = ""
var changePhoneStr = ""
var changeAreaStr = ""
// 输入名字
function changeName(val) {
    changeNameStr = val
    // console.log("chaneName", val);
}
// 输入电话
function changePhone(val) {
    changePhoneStr = val
    // console.log("changePhone", val);
}
// 输入需求
function changeArea(val) {
    changeAreaStr = val
    // console.log("changeArea", val);
}
// 判断是否为空，为空返回true
function isEmpty() {
    var isEmptyBoolean = true;
    // assessment_user_name 用户名：必填
    // assessment_user_phone 用户手机号码：必填
    // assessment_needs 用户需求：必填
    var errorMessage = {
        changeNameError: "",
        changePhoneError: "",
        changeAreaError: ""
    }
    if (changeNameStr === "" || changePhoneStr === "" || changeAreaStr === "") {
        // 姓名
        if (changeNameStr === "") {
            errorMessage.changeNameError = "联系人不能为空！！"
        } else {
            errorMessage.changeNameError = ""
        }
        // 手机
        if (changePhoneStr === "") {
            errorMessage.changePhoneError = "联系电话不能为空！！"
        } else {
            // 电话正则
            errorMessage.changePhoneError = ""
        }
        // 需求
        if (changeAreaStr === "") {
            errorMessage.changeAreaStr = "需求不能为空！！"
        } else {
            errorMessage.changeAreaStr = ""
        }

        alert(errorMessage.changeNameError + errorMessage.changePhoneError + errorMessage.changeAreaStr);
    } else {
        // 验证手机是否填写正确
        if (isPhone()) {
            isEmptyBoolean = false;
        } else {
            alert("联系电话填写有误！！");
        }
    }

    return isEmptyBoolean
}

// 验证手机是否填写正确，正确返回true
function isPhone() {
    var isPhoneBoolean = true
    var phoneRegex = /^1[3456789]\d{9}$/
    if (!phoneRegex.test(changePhoneStr)) {
        isPhoneBoolean = false
    }
    return isPhoneBoolean
}
// 提交
function handerClick(val) {
    // isEmpty();
    var dataObj = {
        assessment_user_name: changeNameStr,
        assessment_user_phone: changePhoneStr,
        assessment_needs: changeAreaStr
    }
    // console.log("判断是否为空", isEmpty());
    if (!isEmpty()) {
        $api({
            data: dataObj
        })
    }

}