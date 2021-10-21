
$(document).ready(function(){ 
    $("#apparel").click(function(){
        $(".apparelsContent").toggleClass("expand");
        console.log("yesh")
    });
});
$(document).ready(function(){ 
    $("#collectable").click(function(){
        $(".collectablesContent").toggleClass("expand");
    });
});