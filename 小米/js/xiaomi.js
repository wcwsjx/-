window.onload=function(){
	//1.购物车下拉效果
	let cart=document.querySelector(".cart");
	/*console.log(cart);*/
	let cartList=document.querySelector(".cart-menu");
	let cartCon=document.querySelector(".cart-con");
	console.log(cartCon);
	cart.onmouseover=function(){
		cartList.style.height="100px";
		cartList.style.boxShadow="0 2px 10px rgba(0,0,0,0.5)";
		cartList.style.background="white";
		cartList.style.opacity=1;
		cartCon.style.display="block";
		cart.style.background="#fff";
		cart.style.color="#ff6700";
	}
	cart.onmouseout=function(){
		cartCon.style.display="none";
		cartList.style.height="0";
		cartList.style.boxShadow="";
		cartList.style.opacity=0;
		
		cart.style.background="#424242";
		cart.style.color="#fff";
	}
    //2.二级导航栏的选项卡
     let cart2=document.querySelectorAll(".header-nav .nav-list .nav-item");
     console.log(cart2);
	 let header =document.querySelectorAll(".header-nav-menu  ");
	 console.log(header);
	 for(let i=0;i<cart2.length;i++){
	 	cart2[i].onmouseover=function(){
	 		for(let j=0;j<header.length;j++){
	 			header[j].style.display="none";
	 		}
	 		header[i].style.display="block";
	 	}
	 	  cart2[i].onmouseout=function(){
			header[i].style.display="none";
		}
	 }

  //3.轮播图左侧侧拉选项卡
     let cart1=document.querySelectorAll(".home-hero-container .home-hero .category-item");
     console.log(cart1);
	 let cartList1=document.querySelectorAll(".left-list");
	 console.log(cartList1);
	 for(let i=0;i<cart1.length;i++){
	 	cart1[i].onmouseover=function(){
	 		for(let j=0;j<cartList1.length;j++){
	 			cartList1[j].style.display="none";
	 		}
	 		cartList1[i].style.display="block";
	 	}
	 	   cart1[i].onmouseout=function(){
			cartList1[i].style.display="none";
		}
	 }
//4.轮播图
    let dots=document.querySelectorAll(".ui-pager-item .ui-pager-link");
    console.log(dots);
    let imgs=document.querySelectorAll(".home-hero-container .bgimg");
    console.log(imgs);
    let banner=document.querySelector(".home-hero-container");
    let lbtn=document.querySelector(".ui-controls-direction .ui-pre");
    let rbtn=document.querySelector(".ui-controls-direction .ui-next");
    console.log(banner);
    console.log(lbtn);
    console.log(lbtn);
    let num=0;
	   //3.初始状态:让第一张图片显示/层级提高
	   imgs[0].style.zIndex=2;
	   //对应的轮播点改变样式 
	   //dots[0].style.background="#fff";
	   dots[0].classList.add("active");
	   //4.鼠标移入每一个轮播点
	  for(let i=0;i<dots.length;i++){
	   	    dots[i].onmouseover=function(){
	   	    	//其余图片层级变回1,其余的轮播点样式改变
	   	    	for(let j=0;j<imgs.length;j++){
	   	    		imgs[j].style.zIndex=1;
	   	    		//dots[j].style.background="#333";
	   	    		dots[j].classList.remove("active");
	   	    	}
	   	    	//对应的图片层级提高
	   	         imgs[i].style.zIndex=2;
	   	        // 对应的轮播点样式改变
	   	         //dots[i].style.background="#fff";
	   	         dots[i].classList.add("active");
	   	    //当鼠标移走后继续,轮播
	   	    num=i;
	        }
	  }
	  
	  //5.实现自动轮播
	  //定义一个时间间隔函数
	   let time=setInterval(move,1500);
	   function move(){
	  	num++;
	  	if(num==imgs.length){
	  		num=0;
	   }
	  	//其余图片层级变回1,其余的轮播点样式改变
	  	for(let j=0;j<imgs.length;j++){
	   	    		imgs[j].style.zIndex=1;
	   	    		//dots[j].style.background="#333";
	   	    		dots[j].classList.remove("active");
	   	}
	  	    imgs[num].style.zIndex=2;
	  		//dots[num].style.background="#fff";
	  		dots[num].classList.add("active");
	  }
	  
	  //6.鼠标移入banner时,暂停时间间隔函数
	  banner.onmouseover=function(){
	  	clearInterval(time);
	  }
	   //7.鼠标移出banner时,继续时间间隔函数
	    banner.onmouseout=function(){
	  	time=setInterval(move,1500);
	  }
	  //8.点击右箭头,同move函数
	   rbtn.onclick=function(){
	   	    move();
	   }
	   //9.点击左箭头
	   lbtn.onclick=function(){
	   	  moveL();
	   }
	   function moveL(){
	  	num--;
	  	if(num<0){
	  		num=imgs.length-1;
	  	}
	  	//其余图片层级变回1,其余的轮播点样式改变
	  	for(let j=0;j<imgs.length;j++){
	   	    		imgs[j].style.zIndex=1;
	   	    		//dots[j].style.background="#333";
	   	    		dots[j].classList.remove("active");
	   	}
	  	    imgs[num].style.zIndex=2;
	  		//dots[num].style.background="#fff";
	  		dots[num].classList.add("active");
	  }
	   
	   //10.窗口失去焦点时,暂停时间间隔函数
	    window.onblur=function(){
	    	clearInterval(time);
	    }
	    //11.窗口获取焦点时,继续时间间隔函数
	     window.onfocus=function(){
	    	time=setInterval(move,1500);
	    }
//3.家电选项卡
     let cart3=document.querySelectorAll(".tab-list li");
     console.log(cart3);
	 let cartList3=document.querySelectorAll(".span6 .brick-list");
	 console.log(cartList3);
	 let spans=document.querySelectorAll(".spans");
	 console.log(spans);
	 spans[0].style.color="#ff6700";
	 spans[0].style.borderBottom="2px solid #ff6700";
	 for(let i=0;i<cart3.length;i++){
	 	cart3[i].onmouseover=function(){
	 		for(let j=0;j<cartList3.length;j++){
	 			spans[j].style.color="#333";
	 		    spans[j].style.borderBottom="";
	 			cartList3[j].style.display="none";
	 		}
	 		spans[i].style.color="#ff6700";
	 		spans[i].style.borderBottom="2px solid #ff6700";
	 		cartList3[i].style.display="block";
	 	}
	 	    cart3[i].onmouseout=function(){
			cartList3[i].style.display="block";
			spans[i].style.color="#333";
	 		spans[i].style.borderBottom="";
		}
	 }
// 内容的左右轮播	
     //图书
     //获取li
      let content=document.querySelectorAll(".book .content-item  li");
       console.log(content);
       //轮播点
	   let dotss=document.querySelectorAll(".book .xm-pagers-wrapper .xm-pagers .dot");
	   console.log(dotss);
	   //左箭头
	   let leftbtn=document.querySelector(".book .xm-controls .control-prev");
	   console.log(leftbtn);
	   //右箭头
	   let rightbtn=document.querySelector(".book .xm-controls .control-next");
	   console.log(rightbtn);
	   //放li的容器
	   let banners=document.querySelector(".box-bd2 .content-list .book .content-item");
	  banner_lr(content,dotss,banners,leftbtn,rightbtn,"active");   
	   
	   //主题
	   let content1=document.querySelectorAll(".miui .content-item  li");
       console.log(content1);
       //轮播点
	   let dotss1=document.querySelectorAll(".miui .xm-pagers-wrapper .xm-pagers .dot");
	   console.log(dotss1);
	   //左箭头
	   let leftbtn1=document.querySelector(".miui .xm-controls .control-prev");
	   console.log(leftbtn1);
	   //右箭头
	   let rightbtn1=document.querySelector(".miui .xm-controls .control-next");
	   console.log(rightbtn1);
	   //放li的容器
	   let banners1=document.querySelector(".box-bd2 .content-list .book .content-item");
	  banner_lr(content1,dotss1,banners1,leftbtn1,rightbtn1,"active");
	  
	  //游戏
	   let content2=document.querySelectorAll(".game .content-item  li");
       console.log(content2);
       //轮播点
	   let dotss2=document.querySelectorAll(".game .xm-pagers-wrapper .xm-pagers .dot");
	   console.log(dotss2);
	   //左箭头
	   let leftbtn2=document.querySelector(".game .xm-controls .control-prev");
	   console.log(leftbtn2);
	   //右箭头
	   let rightbtn2=document.querySelector(".game .xm-controls .control-next");
	   console.log(rightbtn2);
	   //放li的容器
	   let banners2=document.querySelector(".box-bd2 .content-list .book .content-item");
	  banner_lr(content2,dotss2,banners2,leftbtn2,rightbtn2,"active");
	  
	  //应用
	   let content3=document.querySelectorAll(".app .content-item  li");
       console.log(content3);
       //轮播点
	   let dotss3=document.querySelectorAll(".app .xm-pagers-wrapper .xm-pagers .dot");
	   console.log(dotss3);
	   //左箭头
	   let leftbtn3=document.querySelector(".app .xm-controls .control-prev");
	   console.log(leftbtn3);
	   //右箭头
	   let rightbtn3=document.querySelector(".app .xm-controls .control-next");
	   console.log(rightbtn3);
	   //放li的容器
	   let banners3=document.querySelector(".box-bd2 .content-list .book .content-item");
	  banner_lr(content3,dotss3,banners3,leftbtn3,rightbtn3,"active");


//为你推荐
    let btn1=document.querySelector(".foryou .more1 .left");
	console.log(btn1);
	let btn2=document.querySelector(".foryou .more1 .right");
	console.log(btn2);
	let con=document.querySelector(".foryou .box-bd1 .row1 .span8 .brick-list");
	let widths=parseInt(getComputedStyle(con,null).width)/2;
	console.log(widths);		
	let num1=0;
	//右箭头
	btn2.onclick=function(){
		num1++;
		if(num1==2){
			num1=1;
			return;
		}
		con.style.transform="translateX("+(-widths*num1)+"px)";
	}
	//2.点击左箭头
	btn1.onclick=function(){
		num1--;
		if(num1==-1){
			num1=0;
			return;
		}
		con.style.transform="translateX("+(-widths*num1)+"px)";
	}
	
	
	
	//小米闪购
	let btnL=document.querySelector(".more3 .left");
	console.log(btnL);
	let btnR=document.querySelector(".more3 .right");
	console.log(btnR);
	let cont=document.querySelector(".xm-right .xm-ul");
	let w=parseInt(getComputedStyle(cont,null).width)/2;
	console.log(w);
	let num3=0;
	btnR.onclick=function(){
		num3++;
		if(num3==2){
			num3=1;
			return;
		}
		cont.style.transform="translateX("+(-w*num3)+"px)";
	}
	btnL.onclick=function(){
		num3--;
		if(num3==-1){
			num3=0;
			return;
		}
		cont.style.transform="translateX("+(-w*num3)+"px)";
	}
	
	
	
	
	let boxs=document.querySelectorAll(".countdown .box");
	
	let future=new Date();
	future.setYear(2018);
	future.setMonth(9,1);
	future.setHours(0,0,0);
	console.log(future);
	let futuretime=future.getTime();
	let t=setInterval(function(){
		let nowdata=new Date();
		let nowtime=nowdata.getTime();
		let times=Math.round((futuretime-nowtime)/1000);
		console.log(times);
		let hours=Math.floor(times/60/60);
		boxs[0].innerHTML=hours;
		let  min=Math.floor(times/60%60);
		boxs[1].innerHTML=min;
		let sec=Math.floor(times%60);
		boxs[2].innerHTML=sec;
	},1000)
}
