function mainTitle() {
    $(".content").empty();
    $(".content").append(
        $("<div>").addClass("mainTitle").append(
            $("<h1>").attr("id","titleText").text("Shabu & Shabu")
        )
    )
}

mainTitle();