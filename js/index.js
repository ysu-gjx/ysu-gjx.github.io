/**
 * Created by Administrator on 2016/9/9.
 */
/*$(function(){
    $(window).scroll(function(){
        var topTp=$(window).scrollTop();
        if(topTp<=0){
            $('.zzh').stop().animate({top:'0'})
        }else{
            $('.zzh').css({position:'fixed'});
            $('#undefined-sticky-wrapper').stop().animate({top:0});
            $('.zzh').stop().animate({top:'-16px'})
        }
    })

});*/
window.onload=function(){
    var zhh=document.querySelector('.zzh');
    var MMM=document.querySelector('#undefined-sticky-wrapper');
    console.log('zhh');
    // var topTp = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.onscroll=function(){
        var topTp=document.body.scrollTop;
        if(topTp<=0){
            startMove(zhh,{top:0});
            console.log(zhh.style.top);
        }else{
            zhh.style.position='fixed';
            console.log(topTp);
            startMove(zhh,{top:-16,backgroundColor:'red'});
            startMove(MMM,{top:0});
        }
    }
}
