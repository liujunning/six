$(function(){
	var url = location.href;
	var arr = url.split('?');	
	var arr = arr[1].split('&');
	var id = arr[0].split('=')[1];
	var cname =arr[1].split('=')[1]; 
	$.ajax({
		type:"get",
		url:"./json/goodlist.json",
		async:true,
		success:function(data){
			for(var i in data){
				if( id == data[i].id ){
					$(".slide1").attr({"src":data[i].src});
					$(".slide2").attr({"src":data[i].src});
					$(".slide3").attr({"src":data[i].src});
					$(".nprise").html(data[i].price);
					$(".oprise").html(data[i].oldprice);
					$(".num").html(data[i].count);
					$(".zhe").html(data[i].commission);
					$(".hd").html(data[i].introduction);					
					$("#shopcar").append("<span style='display:none' dataid="+data[i].id+" datadanjia="+data[i].id+" dataname="+data[i].name+" datasrc="+data[i].src+" datashopcount="+data[i].shopcount+" dataprice="+data[i].price+" ></span>");	
					$(".slide1").attr("src",data[i].imagessrc[0]);
					$(".slide2").attr("src",data[i].imagessrc[1]);
					$(".slide3").attr("src",data[i].imagessrc[2]);
				}
			}
		}
	});
	/*加减*/
	/*var num=1;
	$("#jia").click(function(){
		//alert(3)
		num++
		$("#shopnum").val(num)
	})
	$("#jian").click(function(){
		if(num==0){
			num=0
		}else{
			num--
		}
		$("#shopnum").val(num)
	})*/
	/*--购物车-*/
	/*$("#shopcar").click(function(){
		console.log(num)
		var id= $("#shopcar").find("span").attr("dataid")
		var name= $("#shopcar").find("span").attr("dataname")
		var src= $("#shopcar").find("span").attr("datasrc")
		var price= $("#shopcar").find("span").attr("dataprice")
		var shopcount= num
		console.log(id)
		var d={			
			"id":id,
			"name":name,
			"src":src,
			"shopcount":shopcount,
			"danjia":price,
			"price":price*shopcount
		}
		localStorage.setItem("shop");
		for(var i=0;i<localStorage.length;i++){
			
		}
		localStorage.setItem("shop",JSON.stringify(d));
		console.log(localStorage.getItem("shop"))
		//window.location.href="gwc.html";
	})
	
	var Ol = document.getElementById("nav");
	var oLi = Ol.getElementsByTagName("li");
	var fd = document.getElementById("fd");
	for(var i=0;i<oLi.length;i++){
		oLi[i].onclick=function(){
			fd.style.left = this.offsetLeft+"px"
		}
	}*/
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	   	autoplay : 1000,
	   	autoplayDisableOnInteraction : false,
	    loop: true,
	    
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
   
  	}) 

})
