/*
TABLE OF CONTENTS


1. Click on close button
2. Click on search image
3. Find Element

*/


$(".firstCity").click(function() {
    $(".info_firstCity").delay(1000).hide();
    $(".valuesFirstCity").delay(1000).hide();
    $(".info_secondCity").delay(1000).show();
    $(".valuesSecondCity").delay(1000).show();
}); 


$(".link_airQuality").click(function() {
    $(".greenhouse_asia").delay(1000).hide();
    $(".greenhouse_usa").delay(1000).hide();
    $(".dashboard_asia").delay(1000).show();
}); 


$(".link_asia2").click(function() {
    $(".dashboard_asia").delay(1000).show();
    $(".dashboard_europe").delay(1000).hide();
}); 


$(".link_asia3").click(function() {
    $(".dashboard_asia").delay(1000).show();
    $(".dashboard_usa").delay(1000).hide();
}); 


$(".link_asiagreenhouse").click(function() {
    $(".greenhouse_asia").delay(1000).show();
    $(".greenhouse_usa").delay(1000).hide();
}); 


$(".link_europe1").click(function() {
    $(".dashboard_asia").delay(1000).hide();
    $(".dashboard_europe").delay(1000).show();
}); 


$(".link_europe3").click(function() {
    $(".dashboard_usa").delay(1000).hide();
    $(".dashboard_europe").delay(1000).show();
}); 


$(".link_greenhouse").click(function() {
    $(".dashboard_asia").delay(1000).hide();
    $(".dashboard_europe").delay(1000).hide();
    $(".dashboard_usa").delay(1000).hide();
    $(".greenhouse_asia").delay(1000).show();
}); 


$(".link_usa1").click(function() {
    $(".dashboard_asia").delay(1000).hide();
    $(".dashboard_usa").delay(1000).show();
}); 


$(".link_usa2").click(function() {
    $(".dashboard_europe").delay(1000).hide();
    $(".dashboard_usa").delay(1000).show();
});


$(".link_usagreenhouse").click(function() {
    $(".greenhouse_asia").delay(1000).hide();
    $(".greenhouse_usa").delay(1000).show();
}); 


$(".secondCity").click(function() {
    $(".info_secondCity").delay(1000).hide();
    $(".valuesSecondCity").delay(1000).hide();
    $(".info_thirdCity").delay(1000).show();
    $(".valuesThirdCity").delay(1000).show();
}); 


$(".thirdCity").click(function() {
    $(".info_thirdCity").delay(1000).hide();
    $(".valuesThirdCity").delay(1000).hide();
    $(".info_firstCity").delay(1000).show();
    $(".valuesFirstCity").delay(1000).show();
}); 