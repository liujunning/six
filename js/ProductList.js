
	var scrolla;
	jiazai();
	function jiazai(){
		$.ajax({
			url:"goodlist.json",
			success:function(data){
				//console.log(data)
				var str=''
				for(var i in data){
					//console.log(data[i])
					str+='<li>'+
							'<em class="datas" style="display:none;" data-id="'+data[i].id+'" data-name="'+data[i].name+'" data-commission="'+data[i].commission+'" data-imagessrc="'+data[i].imagessrc+'" data-src="'+data[i].src+'" data-price="'+data[i].price+'" data-oldprice="'+data[i].oldprice+'" data-introduction="'+data[i].introduction+'"></em>'+            
							'<img src="'+data[i].src+'"/>'+
							'<h2>'+data[i].name+'</h2>'+
							'<h3>原价:<span class="s1">'+data[i].oldprice+'</span></h3>'+      
							'<h4>现价:<span class="s2">'+data[i].price+'</span></h4>'+
						'</li>'
				}
				$(".list").append(str)
				createScroll()
			}
		});
	}
	function createScroll(){
	 	scrolla = new IScroll(".wrap",{
	 		click:true,
	 		tap:true
	 	})
	}
	$(".list").on("touchend",function(){
		if(scrolla.y<scrolla.maxScrollY-50){
			jiazai()
		}
	})
	/*---*/
	$(".list").on("tap","li",function(){
		var info=$(this).find(".datas")
		var id=info.data("id")
		var commission=info.data("commission")
		var imagessrc=info.data("imagessrc")
		var introduction=encodeURI(info.data("introduction"))
		var name=encodeURI(info.data("name"))
		var oldprice=info.data("oldprice")
		var price=info.data("price")
		var src=info.data("src")
		//console.log(src)
		//alert(name)
		window.location.href='ProductDetails.html?id='+id+'&commission='+commission+'&name='+name+'&imagessrc='+imagessrc+'&introduction='+introduction+'&oldprice='+oldprice+'&price='+price+'&src='+src;
	})
	/*---*/
	$(".classify").on("tap",".btn",function(){
		$(".sear").toggle()
	})
	
	/*---*/
