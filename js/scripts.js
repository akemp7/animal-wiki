$(function() {
  $(".radio input").click(function() {
    var selected = $("input:radio[name=animal]:checked").val();
    $(".dog").hide();
    $(".shark").hide();
    $(".bird").hide();
//////////// Method 1 /////////////////////////
    // if(selected === "dog") {
    //   $(".dog").show();
    // } else if(selected === "whaleshark") {
    //   $(".shark").show();
    // } else if(selected === "bowerbird") {
    //   $(".bird").show();
    // }

//////////// Method 2 /////////////////////////
    switch(selected) {
      case "dog":
        $(".dog").show();
        break;
      case "whaleshark":
        $(".shark").show();
        break;
      case "bowerbird":
        $(".bird").show();
        break;
    }

  });

});
