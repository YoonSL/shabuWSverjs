sideMenuAppear = () => {
    $("#menu-sub").css("display","block")
}


sideMenuDisappear = () => {
    $("#menu-sub").css("display","none");
}


$(".main-btn").on('click',mainTitle);
$(".lunch-btn").on('click',lunchPage);
$(".dinner-btn").on('click',dinnerPage);
$(".aLaCarte-btn").on('click',alacartePage);
$(".kids-btn").on('click',kidsPage);
$(".mainside-btn").on('click',mainSidePage);
$(".vegiside-btn").on('click',vegeSidePage);


$(".menu-btn").mouseover(sideMenuAppear);
$(".menu-btn").mouseout(sideMenuDisappear);