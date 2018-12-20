sideMenuAppear = () => {
    $("#menu-sub").css("display","block")
}


sideMenuDisappear = () => {
    $("#menu-sub").css("display","none");
}


$(".main-btn").on('click',mainTitle);
$(".lunch-btn").on('click',lunchPage);
$(".menu-btn").mouseover(sideMenuAppear);
$(".menu-btn").mouseout(sideMenuDisappear);