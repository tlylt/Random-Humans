(function () {
  window.onload = function () {
    var cardContent = "";
    $.ajax({
      url: "https://randomuser.me/api/?results=100",
      dataType: "json",
      success: function (data) {
        var idx;
        for (idx = 0; idx < data.results.length; idx++) {
          var newCard = document.createElement("div");
          cardContent += `<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front">`;
          cardContent += `<img src="${data.results[idx].picture.large}" alt="Card image" style="width:300px;height:200px;"></div>`;
          cardContent += `<div class="flip-card-back"><h1>${data.results[idx].name.first} ${data.results[idx].name.last}</h1><p>${data.results[idx].location.city}</p></div></div></div>`;
          newCard.innerHTML = cardContent;
          cardContent = "";
          var container = document.getElementById("gridContainer");
          container.appendChild(newCard);
        }
      },
    });
  };
})();
