var userArray=[];
 
 
 
        window.onload=function(){
 
            initUser();
 
            var userArrayStr=localStorage.userInfo||"";
 
            userArray=eval("("+userArrayStr+")");
 
        };
 
 
 
        function initUser(){
 
            if(!localStorage.userInfo) {
 
                var uArray = [{
 
                    userName: "zhangsan",
 
                    passWord: "123"
 
                }];
 
                var str = JSON.stringify(uArray);
 
                localStorage.userInfo = str;
 
            }
 
            if(!localStorage.customerInfo) {
 
                var customerArray=[{
 
                    cNo:"1",
 
                    cName:"张三",
 
                    cCity:"山东烟台",
 
                    cAddr:"创业科技大厦",
 
                    cManager:"李四",
 
                    cPost:"212121",
 
                    cPhone:"15155152632",
 
                    cStars:"3"
 
                },{
 
                    cNo:"2",
 
                    cName:"asd",
 
                    cCity:"ads",
 
                    cAddr:"666",
 
                    cManager:"66",
 
                    cPost:"567",
 
                    cPhone:"asd",
 
                    cStars:"1"
 
                }];
 
 
 
 
 
                //增加大数据
 
                for(var i=3;i<50;i++){
 
                    var obj={
 
                        cNo:i,
 
                        cName:"张三",
 
                        cCity:"山东烟台",
 
                        cAddr:"创业科技大厦",
 
                        cManager:"李四",
 
                        cPost:"212121",
 
                        cPhone:"15155152632",
 
                        cStars:"3"
 
                    };
 
                    customerArray.push(obj);
 
                }
 
 
 
                var str=JSON.stringify(customerArray);
 
                localStorage.customerInfo=str;
 
            }
 
               //localStorage.clear();
 
        }
 
 
 
        function getPassword(cell){
 
            for(var i=0;i<userArray.length;i++){
 
                if((cell.value==userArray[i].userName)&&userArray[i].withoutP){
 
                    if(new Date().getTime()<userArray[i].withoutP){
 
                        document.getElementById("passWord").value=userArray[i].passWord;
 
                        break;
 
                    }
 
                }else{
 
                    document.getElementById("passWord").value="";
 
                }
 
            }
 
        }
 
 
 
        function login(){
 
            var userName=document.getElementById("userName").value;
 
            var passWord=document.getElementById("passWord").value;
 
            var withoutP=document.getElementsByClassName("withoutP")[0];
 
 
 
            var isLogin=false;
 
 
 
 
 
            for(var i=0;i<userArray.length;i++){
 
                if((userName==userArray[i].userName)&&(passWord==userArray[i].passWord)){
 
                    isLogin=true;
 
                    sessionStorage.userName=userName;
 
                    location.assign("main.html");
 
                    if(withoutP.checked){
 
                        userArray[i].withoutP=new Date().getTime()+259200000;
 
                        var str=JSON.stringify(userArray);
 
                        localStorage.userInfo=str;
 
                    }
 
                }
 
            }
 
            if(!isLogin){
 
                alert("неправильное имя пользователя или пароль！");
 
            }
 
        }
 
        function goRegister(){
 
            location.assign("register.html");
 
        }
