var c = function(loc) {
    var lat = loc.coords.latitude,
        long = loc.coords.longitude,
        crd = lat + ',' + long;

    document.getElementById('map_google').setAttribute('src', 'https://maps.google.co.uk/?q=' + crd + '&z=15&output=embed');
}

document.getElementById('getloc').onclick = function() {
    navigator.geolocation.getCurrentPosition(c);
    return false;
}
