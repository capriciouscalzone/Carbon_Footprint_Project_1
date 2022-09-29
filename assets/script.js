console.log("hello me");

function coordDistance() {
  var zipCode = $("#zipCode").val();
  var zipCode2 = $("#zipCode2").val();

  console.log(zipCode);
  var lat1 = "";
  var long1 = "";
  var lat2 = "";
  var long2 = "";

  fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=2d8868d62bc83f43b64634172d198128`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      lat1 = data.lat;
      long1 = data.lon;
      fetch(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode2},US&appid=2d8868d62bc83f43b64634172d198128`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          lat2 = data.lat;
          long2 = data.lon;
          distanceCalc(lat1, long1, lat2, long2);
        });
    });
}

$(".btn-floating").on("click", coordDistance);

function distanceCalc(L1, Lo1, L2, Lo2, km) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "fbec7f460cmsh28145391e03528fp1b45d3jsn9d08ce2c7a7e",
      "X-RapidAPI-Host": "distance-calculator.p.rapidapi.com",
    },
  };

  fetch(
    `https://distance-calculator.p.rapidapi.com/distance/simple?lat_1=${L1}&long_1=${Lo1}&lat_2=${L2}&long_2=${Lo2}&unit=miles&decimal_places=2`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      var km = response.distance / 1.609;

      const optionsCarbon = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "b8c6fb145fmsh124aed16ff0541dp1b6734jsn653a01a171f0",
          "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
        },
      };

    //   fetch(
    //     `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=${km}&vehicle=MediumPetrolCar`,
    //     optionsCarbon
    //   )
    //     .then((response) => response.json())
    //     .then((response) => console.log(response))
    //     .catch((err) => console.error(err));
    // })
    // .catch((err) => console.error(err));
// }
