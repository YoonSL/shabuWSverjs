dinnerPage = () => {
    $(".content").empty();
    $(".content").append(dinnerTitle());
    $(".content").append(dinnerMenus());
    $(".content").append(dinnerPrice());
}

dinnerTitle = () => {
    const dinnerTitle = $('<div>').append(
        $('<h1>').addClass("dinnerTitle").text("Dinner Menu")
    );

    return dinnerTitle;
}

dinnerMenus =() => {
    const dinnerMenus = $('<li>').addClass("dinnerMenus").append(
        $('<ul>').text("Combination (Choice of 2)"),
        $('<ul>').text("Rice Wrap & Shabu Shabu"),
        $('<ul>').text("Premium Beef"),
        $('<ul>').text("Regular Beef"),
        $('<ul>').text("Chicken"),
        $('<ul>').text("Pork"),
        $('<ul>').text("Tripe Combination (Tripe + Choice of 1)"),
        $('<ul>').text("Fresh Seafood"),
        $('<ul>').text("Mixed Mushrooms"),
        $('<ul>').text("Vegetable")
    )
    return dinnerMenus;
}


dinnerPrice =() => {
    const dinnerMenus = $('<li>').addClass("dinnerPrices").append(
        $('<ul>').text("$16.99"),
        $('<ul>').text("$19.99"),
        $('<ul>').text("$13.99"),
        $('<ul>').text("$12.99"),
        $('<ul>').text("$12.99"),
        $('<ul>').text("$12.99"),
        $('<ul>').text("$15.99"),
        $('<ul>').text("$13.99"),
        $('<ul>').text("$12.99"),
        $('<ul>').text("$11.99")
    )
    return dinnerMenus;
}