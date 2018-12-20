alacartePage = () => {
    $(".content").empty();
    $(".content").append(alacarteTitle());
    $(".content").append(alacarteMenus());
    $(".content").append(alacartePrice());
}

alacarteTitle = () => {
    const alacarteTitle = $('<div>').append(
        $('<h1>').addClass("alacarteTitle").text("A La Carte")
    );

    return alacarteTitle;
}

alacarteMenus =() => {
    const alacarteMenus = $('<li>').addClass("alacarteMenus").append(
        $('<ul>').text("Rice Wrap"),
        $('<ul>').text("Korean Noodle"),
        $('<ul>').text("Spinachy/Black Seaweed Noodle"),
        $('<ul>').text("Porridge"),
        $('<ul>').text("Udon"),
        $('<ul>').text("Ramen")
    )
    return alacarteMenus;
}


alacartePrice =() => {
    const alacarteMenus = $('<li>').addClass("alacartePrices").append(
        $('<ul>').text("$7.99"),
        $('<ul>').text("$1.99"),
        $('<ul>').text("$2.99"),
        $('<ul>').text("$1.99"),
        $('<ul>').text("$1.99"),
        $('<ul>').text("$1.49")
    )
    return alacarteMenus;
}