$(document).ready(function(){
    $(".pad").css("opacity","0.5");
    $(".pad").on("click",function(){
        $(this).css("opacity","1");
    });
    $(".pad").on("mouseover",function(){
        $(this).css("opacity","0.7");
    });
    $(".pad").on("mouseout",function(){
        $(this).css("opacity","0.5");
    });
    $(".shape1").on("click",function(){
        new Audio("sounds_01.mp3").play();
    });
    $(".shape2").on("click",function(){
        new Audio("sounds_02.mp3").play();
    });
    $(".shape3").on("click",function(){
        new Audio("sounds_03.mp3").play();
    });
    $(".shape4").on("click",function(){
        new Audio("sounds_04.mp3").play();
    });
    
});