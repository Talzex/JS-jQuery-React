$(document).ready(function(){ 
                 
    $(".title").css("background-color","#203253");
    $("#sidebar h2").css("padding","0");
    $("a:contains(Jack)").css("color","orange")
    $("a:contains(Lire l'article au complet)").css("float","right")
    $("input[type='checkbox']").prop('checked',true);

    $("#menu").children().append("<li><a href='https://jquery.com/'>jQuery</a></li>");
    $("#sidebar").children().append("<li><h2>jQuery</h2><p>Query is a fast javaScript Library</p></li>");
    $("#sidebar").children().children().eq(1).remove();
    $("#menu ul li:contains(Accueil)").children().addClass("red");
    $(".links").text("Lire la suite...");
    /*var number  = $(".meta").length;
    console.log(number);
    for(var i=1; i <= number; i++){
        $("meta").append("<p>"+i+"</p>");
    }NE FONCTIONNE PAS*/

    $("#sidebar h2").on("click", function () { 
        if($(this).css("color") == "rgb(255, 255, 255)"){
            $(this).addClass("orange")
        } else {
            $(this).removeClass("orange")
        }
    })
    $("#menu a").on("mouseover", function() {
        $(this).css("color","green");
    });
    $("#menu a").on("mouseout", function() {
        $(this).css("color","white");
    });

    $("input[type='submit']").on("click",function()
    {
        if(!$("form input[type='text'], form input[type='password'], form input[type='radio']").val() )
        {
            $("form input[type='text'], form input[type='password'], form input[type='radio']").parents('td').addClass("error");
        }
        if(!$.trim($("form textarea").val())){
            $("form textarea").parents('td').addClass("error");
        }
    });

    $(".title").on("click", function(){
        var click = $(this);
        click.next().toggle();
        click.slideToggle();
    });
    



});