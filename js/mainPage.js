$(document).ready(function(){
    var audio = document.createElement('audio');
        audio.src = '../audio/you.wav';
        audio.style.autoplay='autoplay';

$('.LeftImg_1').mouseover(function(){
	$(this).attr({title:"可点击"});
    
	$(this).css({border:"3px solid white"});
})
$('.LeftImg_1').mouseout(function(){
	$(this).css({border:"2px solid gold"})
})
 $('.LeftImg_1').click(function(){
 	 $(this).css({border:'5px solid red'});
 	
 })
//鼠标
/*!function () {
    var n = 1000;
    var wraper = document.querySelector('.main');
    wraper.style.perspective = n + 'px';
    window.onmousewheel = function (e) {
        e = e || event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时减小景深
                wraper.style.perspective = n - 200 + 'px';
                if (n > 350) {
                    n = n - 200;
                }
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时增加景深
                wraper.style.perspective = n +200 + 'px';
                n += 200;
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail > 0) {
                wraper.style.perspective = n - 200 + 'px';
                if (n > 350) {
                    n = n - 200;
                }
            }
            if (e.detail < 0) {
                wraper.style.perspective = n + 200 + 'px';
                n += 200;
            }
        }
    };
}();*/
$(".afterPlan").bind({
mouseover:function(){
	$(".afterPlan ul").addClass(".openS");
}, 
mouseover:function(){
	$(".afterPlan ul").addClass(".openS");
}
})

var FPlan = document.querySelector(".frontPlan");
var uls = document.querySelector(".afterPlan");

var li = uls.getElementsByTagName("li");
for(var i=0;i<li.length;i++){
	/*console.log(li[i]);*/
	li[i].setAttribute('z-index',-(i+1));
	li[i].onmouseover = function(){
		//console.log(this)      
    FPlan.style.display = "block";
		FPlan.innerHTML = this.querySelector('.s-head').innerHTML;    
	}
 li[i].onmouseout = function huanyuan(){
    FPlan.style.display = "none";
  }

}
 $(".LeftImg_1").bind({
        mouseover:function(){
            $('.afterPlan ul').css('display','none');
             $('.afterPlan').css('background','url('+this.src+') no-repeat');
             $('.afterPlan').css('background-size','100% 100%');             
     },
      mouseout:function(){
            $('.afterPlan ul').css('display','block');
            $('.afterPlan').css('background','url(./images/a.jpg)');
        }
 })

 //左右按钮
$(".L_Go,.R_Go").bind({
    // click:function(){
         
    // },
    mouseover:function(){
        $(".LeftImg_1").css('opacity','0.5');
        $(".afterPlan").css('opacity','0.5');
        $('.topPlan ul li').css({background:'black',border:'#000'});
        $('.topPlan,.bottomPlan,.leftPlan,.rightPlan').addClass('bgCss');
    },
    mouseout:function(){
        $(".LeftImg_1").css('opacity','1');
        $(".afterPlan").css('opacity','1');
        $('.topPlan ul li').css('background','#fff');
        $('.topPlan,.bottomPlan,.leftPlan,.rightPlan').removeClass('bgCss');
    }
})
/*往前*/
var i=-780,j=1000;
$(".F_Go").click(function(){
    i -=500;
    j+=500;
    $('.afterPlan').css({
        transition:'5s',
        transform:"translateZ("+i+"px)"
    });
    $('body').css('perspective',j);
    $(".leftPlan").css({
    width:'1000px',
    height:'600px',
    background: 'url("./images/l3.jpg")',
    transform: 'rotateY(90deg) translateX(280px) translateZ(-500px+j)'
    })
}) 
})