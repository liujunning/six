$(function(){
	spajax();
	function spajax(){
		$.ajax({
			url:"./json/goodlist.json",
			success:function(data){
				var str=''
				for(var i in data){					
				str += '<a class="shopk" href="xiangqing.html?id='+data[i].id+'&cname='+data[i].name+'">'+
						'<img class="shopimg" src="'+data[i].src+'" alt="" title=""/>'+
						'<p class="shopname">'+data[i].name+'</p>'+
						'<p class="prise">'+
							'<span class="nprise">￥'+data[i].price+'</span>'+
							'<span class="oprise">￥'+data[i].oldprice+'</span>'+
							'<span class="zhe">'+data[i].commission+'</span>'+
						'</p>'+
						'<p class="tug">已参团<span class="num">'+data[i].count+'</span>件</p>'+
						'<input class="shopcar" dataid="'+data[i].id+'"  type="button" value="商品详情">'+
					'</a>'
				}
				$(".jz").before(str)
				new IScroll(".main",{
					click:true,
					tap:true,
					preventDefault: false,
					tap:true
				})
			}
		});
	}
	$(".jz").on("touchend",function(){
		spajax();
	})
})
