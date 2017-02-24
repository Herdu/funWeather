$( ".drag" ).mouseover(function() {

    $(".drag").each(function() {
        $(this).removeClass("drag-hover");
    });


    $(this).addClass("drag-hover");
    console.log("yolo");
});