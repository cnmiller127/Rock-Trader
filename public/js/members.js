$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  // $("#empty-div").append(
  //   `<div class="card">
  //   <div class="card-image waves-effect waves-block waves-light">
  //     <img class="activator" src="https://i.pinimg.com/originals/7b/f2/0f/7bf20f01af1b9fb5c940724892da0e93.jpg">
  //   </div>
  //   <div class="card-content">
  //     <span class="card-title activator grey-text text-darken-4">Rock example<i class="material-icons right">more_vert</i></span>
  //     <a href="seller.html" class="trade-rock waves-effect waves-light btn-small">Trade rock</a>
  //   </div>
  //   <div class="card-reveal">
  //     <span class="card-title grey-text text-darken-4">Rock example<i class="material-icons right">close</i></span>
  //     <p>Here is some more information about this rock that is only revealed once clicked on.</p>
  //   </div>
  // </div>`);
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});
renderRocks();
function renderRocks(){
  $.get("/api/user/inventory").then(function(inv){
    console.log("get res:", inv);
    for(var i=0; i < inv.length; i++){
      $("#empty-div").append(
        `<div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src=${inv[i].image}>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${inv[i].name}<i class="material-icons right">more_vert</i></span>
          <a href="seller.html" class="trade-rock waves-effect waves-light btn-small">Trade rock</a>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${inv[i].name}<i class="material-icons right">close</i></span>
          <p>${inv[i].description}</p>
        </div>
      </div>`);

    }
  });
}

