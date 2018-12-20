vegeSidePage = () => {
    $(".content").empty();
    $(".content").append(vegeSideTitle());
    $(".content").append(vegeSideMenus());
    $(".content").append(vegeSidePrice());
}

vegeSideTitle = () => {
    const vegeSideTitle = $('<div>').append(
        $('<h1>').addClass("vegeSideTitle").text("Side Menu")
    );

    return vegeSideTitle;
}

vegeSideMenus =() => {
    const vegeSideMenus = $('<li>').addClass("vegeSideMenus").append(
        $('<ul>').text("Vegetable Plate"),
        $('<ul>').text("Mixed Mushrooms"),
        $('<ul>').text("Enoki Mushroom"),
        $('<ul>').text("Tofu Fish Cake"),
        $('<ul>').text("Fish Cake"),
        $('<ul>').text("Cabbage"),
        $('<ul>').text("Bokchoy"),
        $('<ul>').text("Watercress"),
        $('<ul>').text("Broccoli"),
        $('<ul>').text("Tofu"),
        $('<ul>').text("Corn"),
        $('<ul>').text("Sausage"),
        $('<ul>').text("Pumpkin")
    )
    return vegeSideMenus;
}


vegeSidePrice =() => {
    const vegeSideMenus = $('<li>').addClass("vegeSidePrices").append(
        $('<ul>').text("$7.99"),
        $('<ul>').text("$7.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$6.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$1.99"),
        $('<ul>').text("$1.99"),
        $('<ul>').text("$1.99"),
        $('<ul>').text("$1.99"),
        $('<ul>').text("$1.99")
    )
    return vegeSideMenus;
}