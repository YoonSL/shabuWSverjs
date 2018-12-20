lunchPage = () => {
    $(".content").empty();
    $(".content").append(lunchTitle());
    $(".content").append(lunchMenus());
    // $(".content").append(lunchPrice());
}

lunchTitle = () => {
    const lunchTitle = $('<div>').append(
        $('<h1>').addClass("lunchTitle").text("Lunch Menu")
    );

    return lunchTitle;
}

lunchMenus =() => {
    const lunchMenus = $('<li>').addClass("lunchMenus").append(
        $('<ul>').text("Premium Beef .......................................... $10"),
        $('<ul>').text("Regular Beef"),
        $('<ul>').text("Pork"),
        $('<ul>').text("Chicken"),
        $('<ul>').text("Seafood")
    )
    return lunchMenus;
}


// lunchPrice =() => {
//     const lunchMenus = $('<li>').addClass("lunchPrices").append(
//         $('<ul>').text("$10"),
//         $('<ul>').text("$9"),
//         $('<ul>').text("$9"),
//         $('<ul>').text("$9"),
//         $('<ul>').text("$9")
//     )
//     return lunchMenus;
// }