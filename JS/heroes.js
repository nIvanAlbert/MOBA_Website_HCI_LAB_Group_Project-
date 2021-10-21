$(document).ready(function() {
    $("#heroMars").click(function() {
        $("#mars").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});
$(document).ready(function() {
    $("#heroZeus").click(function() {
        $("#zeus").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});
$(document).ready(function() {
    $("#heroWukong").click(function() {
        $("#wukong").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});
$(document).ready(function() {
    $("#skill1Mars").click(function() {
        var ans = checkSkill("#skills1Mars", "#skills2Mars", "#skills3Mars", "#skills4Mars");
        if(ans!="#skills1Mars")$("#skills1Mars").toggleClass("expand");
    });
    $("#skill2Mars").click(function() {
        var ans = checkSkill("#skills1Mars", "#skills2Mars", "#skills3Mars", "#skills4Mars");
        if(ans!="#skills2Mars")$("#skills2Mars").toggleClass("expand");
    });
    $("#skill3Mars").click(function() {
        var ans = checkSkill("#skills1Mars", "#skills2Mars", "#skills3Mars", "#skills4Mars");
        if(ans!="#skills3Mars")$("#skills3Mars").toggleClass("expand");
    });
    $("#skill4Mars").click(function() {
        var ans = checkSkill("#skills1Mars", "#skills2Mars", "#skills3Mars", "#skills4Mars");
        if(ans!="#skills4Mars")$("#skills4Mars").toggleClass("expand");
    });
})
$(document).ready(function() {
    $("#skill1Wukong").click(function() {
        var ans = checkSkill("#skills1Wukong", "#skills2Wukong", "#skills3Wukong", "#skills4Wukong");
        if(ans!="#skills1Wukong")$("#skills1Wukong").toggleClass("expand");
    });
    $("#skill2Wukong").click(function() {
        var ans = checkSkill("#skills1Wukong", "#skills2Wukong", "#skills3Wukong", "#skills4Wukong");
        if(ans!="#skills2Wukong")$("#skills2Wukong").toggleClass("expand");
    });
    $("#skill3Wukong").click(function() {
        var ans = checkSkill("#skills1Wukong", "#skills2Wukong", "#skills3Wukong", "#skills4Wukong");
        if(ans!="#skills3Wukong")$("#skills3Wukong").toggleClass("expand");
    });
    $("#skill4Wukong").click(function() {
        var ans = checkSkill("#skills1Wukong", "#skills2Wukong", "#skills3Wukong", "#skills4Wukong");
        if(ans!="#skills4Wukong")$("#skills4Wukong").toggleClass("expand");
    });
})
$(document).ready(function() {
    $("#skill1Zeus").click(function() {
        var ans = checkSkill("#skills1Zeus", "#skills2Zeus", "#skills3Zeus", "#skills4Zeus");
        if(ans!="#skills1Zeus")$("#skills1Zeus").toggleClass("expand");
    });
    $("#skill2Zeus").on("click", function() {
        var ans = checkSkill("#skills1Zeus", "#skills2Zeus", "#skills3Zeus", "#skills4Zeus");
        if(ans!="#skills2Zeus")$("#skills2Zeus").toggleClass("expand");
    });
    $("#skill3Zeus").on("click", function() {
        var ans = checkSkill("#skills1Zeus", "#skills2Zeus", "#skills3Zeus", "#skills4Zeus");
        if(ans!="#skills3Zeus")$("#skills3Zeus").toggleClass("expand");
    });
    $("#skill4Zeus").click(function() {
        var ans = checkSkill("#skills1Zeus", "#skills2Zeus", "#skills3Zeus", "#skills4Zeus");
        if(ans!="#skills4Zeus")$("#skills4Zeus").toggleClass("expand");
    });
})


function checkSkill(first, second, third, fourth) {
    var s1M = $(first).hasClass("expand");
    var s2M = $(second).hasClass("expand");
    var s3M = $(third).hasClass("expand");
    var s4M = $(fourth).hasClass("expand");
    if (s1M) {
        $(first).toggleClass("expand");
        return first;
    }
    if (s2M) {
        $(second).toggleClass("expand");
        return second;
    }
    if (s3M) {
        $(third).toggleClass("expand");
        return third;
    }
    if (s4M) {
        $(fourth).toggleClass("expand");
        return fourth;
    }
    return false;
}

function checkFilter(){
    var filter1 = $(".str").hasClass("expand");
    var filter2 = $(".agi").hasClass("expand");
    var filter3 = $(".int").hasClass("expand");
    var filter4 = $("#viewStr").hasClass("expand");
    var filter5 = $("#viewAgi").hasClass("expand");
    var filter6 = $("#viewInt").hasClass("expand");
    var ans = "";
    if(filter1){
        $(".str").toggleClass("expand");
        ans = ".str";
    }
    if(filter2){
        $(".agi").toggleClass("expand");
        ans = ".agi";
    }
    if(filter3){
        $(".int").toggleClass("expand");
        ans = ".int";
    }
    if(filter4){
        $("#viewStr").toggleClass("expand");
    }
    if(filter5){
        $("#viewAgi").toggleClass("expand");
    }
    if(filter6){
        $("#viewInt").toggleClass("expand");
    }
    return ans;
}



$(document).ready(function() {
    $(".heroBackFilter").click(function() {
        var mars = $("#mars").hasClass("expand");
        var zeus = $("#zeus").hasClass("expand");
        var wukong = $("#wukong").hasClass("expand");
        if (mars) {
            checkSkill("#skills1Mars", "#skills2Mars", "#skills3Mars", "#skills4Mars");
            $("#mars").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
        if (wukong) {
            checkSkill("#skills1Wukong", "#skills2Wukong", "#skills3Wukong", "#skills4Wukong");
            $("#wukong").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
        if (zeus) {
            checkSkill("#skills1Zeus", "#skill2Zeus", "#skills3Zeus", "#skills4Zeus");
            $("#zeus").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
    });
});

$(document).ready(function(){
    $("#viewStr").click(function(){
        var check = checkFilter()
        if(check!=".str"){
            $(".str").toggleClass("expand");   
            $("#viewStr").toggleClass("expand");
    }});
    $("#viewAgi").click(function(){
        var check = checkFilter()
        if(check!=".agi"){
            $(".agi").toggleClass("expand");
            $("#viewAgi").toggleClass("expand");   
    }});
    $("#viewInt").click(function(){
        var check = checkFilter()
        if(check!=".int"){
            $(".int").toggleClass("expand");
            $("#viewInt").toggleClass("expand");   
    }});
});

$(document).ready(function(){
    let hero = sessionStorage.getItem('hero');
    if(hero=="Mars"){
        $("#mars").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    }else if(hero=="MK"){
        $("#wukong").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    }else if(hero=="Zeus"){
        $("#zeus").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    }
});