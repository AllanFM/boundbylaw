var Default = {}

Default.isExpanded = false;

Default.appendIframe = function(){
    $(".navbar").hide();
    var video = '<div align="center" class="embed-responsive embed-responsive-16by9">';
        video += '<video autoplay loop class="embed-responsive-item">';
        video += '<source src="/video/bbl.mp4" type="video/mp4">';
        video += '</video>';
        video += '</div>';

    var iframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BGvwcFkmpLM?rel=0&autoplay=1&wmode=transparent" frameborder="0" allowfullscreen></iframe>';
    $("body").append("<div id='iframe'></div>");
    $("#iframe").html(iframe).append("<div id='closeYoutube' onclick='$(\"#playYoutube\").show();Default.removeIframe();$(\".navbar\").show();'></div>");;

}

Default.removeIframe = function(){
    $("iframe, #iframe, #closeYoutube").remove();
}

Default.setBackgroundImage = function(){
    var path = location.pathname;

    if(path != "/"){
        $("body").css("background-image", "url('/grafik/bg2.jpg')");
    } else {
        $("body").css("background-image", "url('/grafik/forside4.jpg')");
    }

    if($("button:first").is(":visible")){
        if(path != "/"){
            $("body").css("background-image", "none");
        } else {
            $("body").css("background-image", "url('/grafik/bg2.jpg')");
        }
    }

    $("body").css({
      "background-size":"cover",
      "background-repeat": "no-repeat",
      "background-position": "top center",
      "background-attachment": "fixed",
      "background-color": "#0f0f0f"
    });
}

Default.setNavigation = function(){
    $("#nonartarea").css("height", "600px");
    if($("button:first").is(":visible")){
         $("#navbarDiv").removeClass("navbar-center")
         $(".navbar-brand").show();
         $("#musicPlayer").css("height", "1000px");
    } else {
         $("#navbarDiv").addClass("navbar-center")
         $(".navbar-brand").hide();
         $("#musicPlayer").css("height", "1200px");
    }
}
