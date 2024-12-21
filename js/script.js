$(document).ready(function () {
  console.log("Document is ready!");
  $(".product-card").hide();

  $(".view-products-btn").on("click", function () {
    console.log("View Products button clicked!");
    $(".dashboard-container").hide();
    $(".product-card").show();
    $(".image-quote-container ").css("bottom", "-340px");
    console.log("Product card should now be visible.");
  });

  $(".close-icon").on("click", function () {
    console.log("Close icon clicked!");
    $(".product-card").hide();
    $(".dashboard-container").show();
    $(".image-quote-container ").css("bottom", "-200px");
    console.log("Dashboard cards should now be visible.");
  });
});
