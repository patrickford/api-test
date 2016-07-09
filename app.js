$(document).ready(function() {

  var credentials = {
    key: "c67202974abafb3a58ad7f178f79a45e",
    secret: "1ed2e4c43dd4c1c2"
  }

  var googleKey = "AIzaSyAGQAyBOcBn-gvTDumAYp7NzR0nh01HoOU";

  // var map;
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //   });
  // }

  function getPhotos(search) {
    var parameters = {
      api_key: credentials.key,
      method: "flickr.photos.search",
      format: "json",
      nojsoncallback: 1,
      tags: search
    }

    $.ajax({
        url:  "https://api.flickr.com/services/rest/",
        type: "GET",
        data: parameters
    })
    .done(function(result) {
      showPhotos(result)
    })
  }

  function showPhotos(myObj) {
    $('#photos').empty();
    var photo, farm, id, server, secret, imgTag;
    for (var i=0; i<30; i++) {
      photo = myObj.photos.photo[i];
      farm = photo.farm;
      id = photo.id;
      server = photo.server;
      secret = photo.secret;
      imgTag = "<img class='pic' height='300' width='300' src='https://c2.staticflickr.com/" + farm + "/" + server + "/" +
                  id + "_" + secret + ".jpg'>";            
      $('#photos').append(imgTag);  
    }
  }

  $('#search').submit(function(e) {
    e.preventDefault();
    var searchTerm = $('#term').val();
    $('#term').val('');
    getPhotos(searchTerm);    
  })

})
