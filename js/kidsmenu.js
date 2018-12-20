kidsPage = () => {
    $(".content").empty();
    $(".content").append(kidsTitle());
    $(".content").append(kidsMenus());
    $(".content").append(kidsPrice());
}

kidsTitle = () => {
    const kidsTitle = $('<div>').append(
        $('<h1>').addClass("kidsTitle").text("Kid's Menu")
    );

    return kidsTitle;
}

kidsMenus =() => {
    const kidsMenus = $('<li>').addClass("kidsMenus").append(
        $('<ul>').text("Premium Beef"),
        $('<ul>').text("Regular Beef"),
        $('<ul>').text("Pork"),
        $('<ul>').text("Chicken"),
        $('<ul>').text("Fresh Seafood")
    )
    return kidsMenus;
}


kidsPrice =() => {
    const kidsMenus = $('<li>').addClass("kidsPrices").append(
        $('<ul>').text("$10.99"),
        $('<ul>').text("$9.99"),
        $('<ul>').text("$9.99"),
        $('<ul>').text("$9.99"),
        $('<ul>').text("$9.99")
    )
    return kidsMenus;
}