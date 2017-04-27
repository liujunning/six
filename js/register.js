$(document).ready(function(){
	var telVal;
	var pwdVal;
	var pwdyzVal;
	var mailVal;
	var yztel=false;
	var yzpwd=false;
	var yzpwdyz=false;
	var yzmail=false;
	$("input").focus(function(){
		/*获取输入框中的值*/
		$("input").on("input",function(){
			if($(this).attr("name")=="tel"){    //获取姓名
				telVal=$(this).val();
			};
			if($(this).attr("name")=="pwd"){     //密码
				pwdVal=$(this).val()
			};
			if($(this).attr("name")=="pwdyz"){    //确认密码
				pwdyzVal=$(this).val();
			};
			if($(this).attr("name")=="mail"){     //邮箱
				mailVal=$(this).val()
			}
		})	
	}).blur(function(){
		/*判断输入手机号是否正确*/
		if($(this).attr("name")=="tel"){
			
			if((/^\s*$/g).test(telVal)||$(this).val()==""){
			   
			   $(".tip1").text()
			   $(".tip1").text("手机号不可为空")
			   $(".tip1").css("color","red")
		    }else if(!(/^1[3579]\d{9}$/.test(telVal))){
			   $(".tip1").text()
			   $(".tip1").text("手机号格式错误")
			   $(".tip1").css("color","red")
		    }else{
		    	$(".tip1").text("");
			    yztel=true
		    }
		};
		
		/*判断输入密码格式是否正确*/
		if($(this).attr("name")=="pwd"){
			if((/^\s*$/g).test(pwdVal)||$(this).val()==""){
				 $(".tip2").text()
			     $(".tip2").text("密码不可为空")
			     $(".tip2").css("color","red")
			}else if(!(/^[0-9a-zA-Z]{6,12}$/).test(pwdVal)){
				$(".tip2").text()
			    $(".tip2").text("密码格式错误")
			    $(".tip2").css("color","red")
			}else{
				$(".tip2").text("");
				yzpwd=true
			}
		}
		
		/*判断输入的密码是否与上面一致*/
		if($(this).attr("name")=="pwdyz"){
			if(pwdVal!=pwdyzVal){
				$(".tip3").text();
			    $(".tip3").text("两次密码不一致");
			    $(".tip3").css("color","red");
			}else{
				$(".tip3").text("");
				yzpwdyz=true
			}
			
		}
		
		/*判断输入邮箱格式是否正确*/
		if($(this).attr("name")=="mail"){
			if( (/^\s*$/g).test(mailVal)||$(this).val()==""){
				$(".tip4").text();
			    $(".tip4").text("邮箱不能为空");
			    $(".tip4").css("color","red");
			}else if(!(/^[0-9]{6,10}(@qq.com)$/).test(mailVal)){
				$(".tip4").text();
			    $(".tip4").text("邮箱格式错误");
			    $(".tip4").css("color","red");
			}else{
				$(".tip4").text("");
				yzmail=true
			}
		}
		
	})
	
	/*点击按钮，注册个人信息*/
	
	$("#reg-btn").on("touchend",function(){
		if(yztel&&yzpwd&&yzpwdyz&&yzmail){
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"register",
					userID:telVal,
					password:pwdVal
				},
				success:function(data){
					console.log(data);
					if(data==0){
						alert("该用户已经存在，请重新注册")
					}else if(data==2){
						alert("数据有误，请刷新页面")
					}else{
						alert("注册成功");
					    window.location.href="login.html"
					}
					
				}
			})
		}else{
			alert("输入信息有误")
		}
			
	})
	
	
	
	
	$(".hleft").on("click",function(){
		window.location.href="login.html"      //点击返回首页
	})
	$(".hright").on("click",function(){
		window.location.href="index.html"      //点击返回首页
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})














































































