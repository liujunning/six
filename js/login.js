$(document).ready(function(){
	$(".hleft").on("click",function(){
		window.location.href="myself.html"      //点击返回首页
	})
	$(".hright").on("click",function(){
		window.location.href="index.html"      //点击返回首页
	})
	$("#zhuce").on("touchend",function(){
		window.location.href="register.html"
	});
	
	$("#deng").on("touchend",function(){
		var name=$(".name").val();  /*获取登录名字*/
	    var pwd=$(".pwd").val();     /*获取密码*/
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"login",
				userID:name,
				password:pwd
			},
			success:function(data){
				console.log(data);
				if(data==0){
					alert("该用户不存在")
				}else if(data==2){
					alert("用户名与密码不符")
				}else{
					alert("登陆成功！")
					localStorage.setItem("name",name); //将用户名存储至本地
					window.location.href="ProductList.html"  //登陆完成 进入首页
				}
				
				
			}
			
		})
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
})
