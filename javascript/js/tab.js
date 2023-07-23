let tabBtn = $(".tab-button");
let tabContent = $(".tab-content");

$(".tab-button")
  .eq(0)
  .on("click", function () {
    tabBtn.removeClass("orange");
    tabBtn.eq(0).addClass("orange");
    tabContent.removeClass("show");
    tabContent.eq(0).addClass("show");
  });
