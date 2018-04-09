var map, heatmap;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 40.5, lng: -80},
        mapTypeId: 'terrain'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
        radius: 100,
        maxIntensity: 80,
        dissipating: true
    });
}


function alertDate() {
    alert(document.getElementById('dateInput').value)
}

function getTemp(city) {
    var date = document.getElementById('dateInput').value.split('-');
    var day = date[2];
    var month = date[1];
    return temperature[city][month][day];
}

function getPoints() {
    return [
        {location: new google.maps.LatLng(41.8781, -87.6298), weight: getTemp("chicago")}, // Chicago
        {location: new google.maps.LatLng(40.4406, -79.9959), weight: getTemp("pittsburgh")}, // Pittsburgh
        {location: new google.maps.LatLng(39.9526, -75.1652), weight: getTemp("philadelphia")}, // Philadelphia
        {location: new google.maps.LatLng(41.4993, -81.6944), weight: getTemp("cleveland")}, // Cleveland
        {location: new google.maps.LatLng(39.2904, -76.6122), weight: getTemp("baltimore")}, // Baltimore
        {location: new google.maps.LatLng(42.3314, -83.0458), weight: getTemp("detroit")}, // Detroit
        {location: new google.maps.LatLng(40.7128, -74.0060), weight: getTemp("new york")}, // New York
        {location: new google.maps.LatLng(39.1031, -84.5120), weight: getTemp("cincinnati")}, // Cincinnati
        {location: new google.maps.LatLng(39.9612, -82.9988), weight: getTemp("columbus")}, // Columbus
        {location: new google.maps.LatLng(37.5407, -77.4360), weight: getTemp("richmond")}, // Richmond
        {location: new google.maps.LatLng(39.7684, -86.1581), weight: getTemp("indianapolis")}, // Indianapolis
        {location: new google.maps.LatLng(42.2808, -83.7430), weight: getTemp("ann arbor")}] // Ann Arbor
}