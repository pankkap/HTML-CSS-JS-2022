// 1. Check weather browser support Geolocation API
// 2. Use navigator.geolocation.getCurrentPosition()
// 3. Pass showPosition method in previous method
// 4. find coords as position.coords.latitude or position.coords.logitude
// 5. use an free api to find your location
// 6. use ajax to call location api
// 7. retrieve the data from the API

// api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=YOUR-API-KEY
// API KEY : 87f70e732bbd44d984f351fc57d3e4cc

https: var output1 = document.querySelector("#output1");
var output2 = document.querySelector("#output2");
var btn = document.querySelector("button");
btn.onclick = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Browser not Support Geo Location");
  }
};

function showPosition(position) {
  // Current Position Coordinates
  lat = position.coords.latitude;
  log = position.coords.longitude;
  console.log(lat + " " + log);
  output1.innerHTML = `<span>Latitude: ${lat} logitude: ${log}`;

  // Current Position Location

  apiURL =
    "https://api.opencagedata.com/geocode/v1/json?q=" +
    lat +
    "," +
    log +
    "&key=87f70e732bbd44d984f351fc57d3e4cc";

  // AJAX code for retrieving Current Location
  $.get(apiURL, function (data) {
    console.log(data);
    $("#output2").html(
      data.results[0].components.county +
        ", " +
        data.results[0].components.state
    );
  });
}
