var regUser=/^[0-9]{5,11}$/;
    var regEmail=/^[0-9a-z][0-9a-z_]{5,12}@[0-9a-z]{2,10}\.[a-z]{2,5}$/;
    var oUser=document.getElementById("user");
    var oErrUser=document.querySelector(".errUser span");
    oUser.onblur=function(){
        var sUser=oUser.value;
        if(regUser.test(sUser) || regEmail.test(sUser)){
            oErrUser.style.display="none";
        }
        else{
            oErrUser.style.display="block";
        }
    }

    var oPwd = document.getElementById("pwd");
    var oErrPwd=document.querySelector(".errPwd span");
    var regPwd = /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_]{6,20}$/;
        oPwd.onblur = function(){
            var sPwd = oPwd.value;
            if(regPwd.test(sPwd)){
                var rate = 0;
                var regNum = /\d/;
                var regWord = /[a-z]/;
                var regSymbol = /[\!\@\#\$\%\^\&\*\(\)\_]/;
                
                if(regNum.test(sPwd)){
                    rate++;
                }
                if(regWord.test(sPwd)){
                    rate++;
                }
                if(regSymbol.test(sPwd)){
                    rate++;
                }
            
                switch(rate){
                    case 1:
                        oErrPwd.style.display="none";
                        alert("账号存在被盗风险,请更改安全度较高的代码");
                        break;
                    case 2:
                        oErrPwd.style.display="none";
                        break;
                    case 3:
                        oErrPwd.style.display="none";
                        break;
                }   
            }else{
                oErrPwd.style.display="block";
            }
        }

    var oPwd2 = document.getElementById("pwd-yes");
    var oErrPwd2=document.querySelector(".errPwd2 span");
    oPwd2.onblur = function(){
        var sPwd2 = oPwd2.value;
        var sPwd = oPwd.value;
        if(regPwd.test(sPwd2) &&sPwd2 ==sPwd){
                var rate = 0;
                var regNum = /\d/;
                var regWord = /[a-z]/;
                var regSymbol = /[\!\@\#\$\%\^\&\*\(\)\_]/;
                
                if(regNum.test(sPwd2)){
                    rate++;
                }
                if(regWord.test(sPwd2)){
                    rate++;
                }
                if(regSymbol.test(sPwd2)){
                    rate++;
                }
            
                switch(rate){
                    case 1:
                        oErrPwd2.style.display="none";
                        break;
                    case 2:
                        oErrPwd2.style.display="none";
                        break;
                    case 3:
                        oErrPwd2.style.display="none";
                        break;
                }   
            }else{
                oErrPwd2.style.display="block";
            }
    }


    var oButton = document.getElementById("btn");     
        oButton.onclick = function(){
            // console.log(11);
            var sUser = oUser.value;
            var sPass = oPwd.value;
            if(sUser == ""&& sPass ==""){
                     alert("用户名和密码不能为空！")
                 }else{
                 setCookie("user",oUser.value)
                 setCookie("pass",oPwd.value)
                location.href = "login.html"
                 }
           }