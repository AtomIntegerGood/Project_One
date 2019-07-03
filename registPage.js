window.onload=function () {
    let user=document.getElementById("user");
    let domain=document.getElementById("domain");
    let password=document.getElementById("password");
    let confirmPassword=document.getElementById("confirmPassword");
    let phone=document.getElementById("phone");
    let phoneCode=document.getElementById("phoneCode");
    let ques=document.getElementById("ques");
    let checkbox=document.getElementById("checkbox");
    let registerNow=document.getElementById("registerNow");

    let userH=document.getElementById("userH");
    let domainH=document.getElementById("domainH");
    let passwordH=document.getElementById("passwordH");
    let confirmPasswordH=document.getElementById("confirmPasswordH");
    let phoneH=document.getElementById("phoneH");
    let phoneCodeH=document.getElementById("phoneCodeH");
    let quesH=document.getElementById("quesH");
    function returnFalse(){
        return false;
    }
    let text={user:"3-11位(中文,大、小写英文,数字,下划线)",password:"8-16位(大、小写英文,数字和!到)字符)",confirmPassword:"再次确认密码",
        phone:"仅支持中国大陆手机号码",yes:"格式正确",no:"输入有误，请重新确认",no1:"请保证密码一致",no3:"回答错误",ques:""};
    let rule={user:/^[a-zA-Z0-9\u4e00-\u9fa5_]{3,11}$/,password:/^[a-zA-Z0-9!@#$%^&*()_]{8,16}$/,
        phone:/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,ques:/^[22]{2}$/};
    let input=document.getElementsByTagName("input");


    for(let e=0;e<input.length;e++) {
        input.item(e).onpaste = returnFalse;
        input.item(e).oncontextmenu = returnFalse;
        input.item(e).oncopy = returnFalse;
        input.item(e).oncut = returnFalse;
        switch (input.item(e)) {
            case user:
                user.onfocus = function () {
                    userH.innerText = text.user;
                    userH.style.visibility = "visible";
                };
                user.onblur = function () {
                    userH.style.visibility="hidden";
                };
                user.oninput = function () {
                    let val = user.value.toString();
                    if (rule.user.test(val)) {
                        userH.innerText = text.yes;
                    } else {
                        userH.innerText = text.no;
                    }
                };
        break;
            case password:
                password.onfocus = function () {
                    passwordH.innerText = text.password;
                    passwordH.style.visibility = "visible";
                };
                password.onblur = function () {
                    passwordH.style.visibility="hidden";
                };
                password.oninput = function () {
                    let val = password.value.toString();
                    if (rule.password.test(val)) {
                        passwordH.innerText = text.yes;
                    } else {
                        passwordH.innerText = text.no;
                    }
                };break
            case confirmPassword:
                confirmPassword.onfocus = function () {
                    confirmPasswordH.innerText = text.confirmPassword;
                    confirmPasswordH.style.visibility = "visible";
                };
                confirmPassword.onblur = function () {
                    confirmPasswordH.style.visibility="hidden";
                };
                confirmPassword.oninput = function () {
                    let val = confirmPassword.value.toString();
                    if (rule.password.test(val)&&rule.password.test(password.value)) {
                        confirmPasswordH.innerText = text.yes;
                    } else {
                        confirmPasswordH.innerText = text.no1;
                    }
                };break;
            case phone:
                phone.onfocus = function () {
                    phoneH.innerText = text.phone;
                    phoneH.style.visibility = "visible";
                };
                phone.onblur = function () {
                    phoneH.style.visibility="hidden";
                };
                phone.oninput = function () {
                    let val = phone.value.toString();
                    if (rule.phone.test(val)) {
                        phoneH.innerText = text.yes;
                    } else {
                        phoneH.innerText = text.no;
                    }
                };break;
            case ques:
                ques.onfocus = function () {
                    quesH.innerText = text.ques;
                    quesH.style.visibility = "visible";
                };
                ques.onblur = function () {
                    quesH.style.visibility="hidden";
                };
                ques.oninput = function () {
                    let val = ques.value.toString();
                    if (rule.ques.test(val)) {
                        quesH.innerText = text.yes;
                    } else {
                        quesH.innerText = text.no3;
                    }
                };break;
            default:break;
    }

    }
}
