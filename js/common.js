function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}
function $(id){
    return document.getElementById(id);
}

function startMove(obj,args,fun){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for(var i in args){
            var cur=parseInt(getStyle(obj,i));
            var speed=(args[i]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(args!=cur){
                obj.style[i]=speed+cur+'px';
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            fun && fun();
        }        
        
    },30)
    
    
}