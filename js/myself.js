$(document).ready(function(){
	
	$(".main .cha").on("click",function(){   /*点击未登录进入登录页面*/
		window.location.href="login.html";
		
	})
	if(localStorage.getItem("name")){
		username=localStorage.getItem("name");
		$(".userman").val("欢迎您"+username)
	}else{
		$(".userman").val("未登录")
	}
	
	 
	
	$(".shopcar").on("click",function(){
		window.location.href="gwc.html"      /*点击进入购物车*/
	})
	
	
	
	$(".hleft").on("click",function(){
		window.location.href="index.html"      //点击返回首页
	})
	$(".hright").on("click",function(){
		window.location.href="index.html"      //点击返回首页
	})
	
	$(".getout").on("click",function(){
		localStorage.clear();
		window.location.href="index.html"
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
