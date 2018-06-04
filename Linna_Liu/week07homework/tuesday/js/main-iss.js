
var marker, map;

function initMap() {
   var myLatLng = {lat: -25.363, lng: 131.044};

  map = new google.maps.Map(document.getElementById('map'), {
     zoom: 6,
     center: myLatLng
   });

   marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     title: 'Hello World!'
   });
  setInterval(getISSPosition, 3000);
 }

const getISSPosition = function(){
  const xhr = new XMLHttpRequest();

  xhr.onload = function(){
    const position = JSON.parse(xhr.response);
    console.log(position);

    //update marker on map
    const coords = {
      lat: parseFloat(position.iss_position.latitude),
      lng: parseFloat(position.iss_position.longitude)
    }

     marker.setPosition(coords);
    //update map to be centered over new marker position
    map.setCenter(marker.position)
  }
  xhr.open("GET", "http://api.open-notify.org/iss-now.json")
  xhr.send();
}
