$(function() {
  $(".radio input").click(function() {
    var selected = $("input:radio[name=animal]:checked").val();

    // $("div." + selected).show();
    if(selected === "dog") {
      $(".dog").show();
      $(".shark").hide();
      $(".bird").hide();
    } else if(selected === "whaleshark") {
      $(".shark").show();
      $(".dog").hide();
      $(".bird").hide();
    } else if(selected === "bowerbird") {
      $(".bird").show();
      $(".shark").hide();
      $(".dog").hide();
    }

  });

});
