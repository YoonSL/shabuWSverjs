mainSidePage = () => {
    $(".content").empty();
    $(".content").append(mainSideTitle());
    $(".content").append(mainSideMenus());
    $(".content").append(mainSidePrice());
}

mainSideTitle = () => {
    const mainSideTitle = $('<div>').append(
        $('<h1>').addClass("mainSideTitle").text("Side Menu")
    );

    return mainSideTitle;
}

mainSideMenus =() => {
    const mainSideMenus = $('<li>').addClass("mainSideMenus").append(
        $('<ul>').text("Premium Beef"),
        $('<ul>').text("Regular Beef"),
        $('<ul>').text("Chicken"),
        $('<ul>').text("Pork"),
        $('<ul>').text("Tripe"),
        $('<ul>').text("Fresh Seafood"),
        $('<ul>').text("Sliced Fish"),
        $('<ul>').text("Crab (3pc)"),
        $('<ul>').text("Clam"),
        $('<ul>').text("Mussel (4pc)"),
        $('<ul>').text("Shrimp"),
        $('<ul>').text("Squid"),
        $('<ul>').text("Baby Octopus")
    )
    return mainSideMenus;
}


mainSidePrice =() => {
    const mainSideMenus = $('<li>').addClass("mainSidePrices").append(
        $('<ul>').text("$7.99"),
        $('<ul>').text("$6.99"),
        $('<ul>').text("$6.99"),
        $('<ul>').text("$6.99"),
        $('<ul>').text("$6.99"),
        $('<ul>').text("$7.99"),
        $('<ul>').text("$7.99"),
        $('<ul>').text("$3.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$3.99"),
        $('<ul>').text("$4.99")
    )
    return mainSideMenus;
}