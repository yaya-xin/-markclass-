$(function(){
    //添加一个window监听
	$(window).on('resize',function(){
		//1.获取窗口的宽度,当小于某个值的时候，插入img标签，宽度设为百分百这样就可以根据父标签的变化而变化；当大于某个值的时候，把img标签删掉，把轮播图片作为父标签的背景，设置background位置居中
		let clientW=$(window).width();
		//2.设置临界点
		let isShowBigImage = clientW>=900;//返回一个true或者false
		//3获取所有item
		let $allItems=$('#lk_carousel .carousel-item');//获取到的是jq对象，所以要加美元符号
		//console.log($allItems);//可以输出一下确认一下是不是一个JQ对象
		//4.遍历()=>相当于function()
		$allItems.each((index,item)=>{
			//console.log(item);
			//4.1取出图片的路径
			let src = isShowBigImage?$(item).data('lg-img'): $(item).data('sm-img');
			//console.log(src);//可以观察到浏览器再不同的屏幕下，它的取值不同
			let imgUrl='url(${src})';
			//4.2设置背景
			/*$(item).css({
				backgroundimage:imgUrl
			})*/
			 var $item = $(item);
			$(item).css("background-image",'url('+$item.data(isShowBigImage?'lg-img':'sm-img')+')');
			
			//4.3创建img标签
			if(!isShowBigImage){
				//let imgEle ='<img src="${src}">';
				//let imgEle='<img src='"+$item.data('sm-img')+"' alt='' />';
				//要先把item里所有元素内容清除了之后再添加，否则屏幕到达临界点一缩小就会添加一张img， 这样太多了
				$(item).empty().append("<img src='"+$item.data('sm-img')+"' alt='' />");
			}else{
				$(item).empty();//屏幕一旦从小屏幕变成大屏幕，需要把item里面的内容清除掉
			}
		});
	});
	
	$(window).trigger('resize');//调用上面的方法
	
	
	
	//工具的提示
	$('[data-toggle="tooltip"]').tooltip();
});
