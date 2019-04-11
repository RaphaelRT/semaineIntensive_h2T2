const mapContainer = document.querySelector('.mapContainer')
const littleInfo = document.querySelector('.littleInfo')
const close = document.querySelector('.close')
const distance = document.querySelector('.distance')
const moreInfo = document.querySelector('.moreInfo')
const hiddenInput = document.querySelector('.hiddenInput')
const comments = document.querySelector('.comments')
const rating = document.querySelector('.rating')
const rateDom = document.querySelector('.rate')
const ratingLabel = rating.querySelectorAll('label')
const infoContainerComplete = document.querySelector('.infoContainerComplete')


const adress = document.querySelectorAll('.adress')
const open = document.querySelectorAll('.open')
let windowWidth = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

let windowHeight = window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

mapContainer.style.width = `${windowWidth}px`
mapContainer.style.height = `${windowHeight}px`
mapContainer.style.position = 'absolute'

let y



const platform = new H.service.Platform({
  'app_id': 'dTY5MsMINPKmHzqsBEbz',
  'app_code': 'rDo25FUD-BJTqj8-6pmHIw'
});

// Obtain the default map types from the platform object:
let defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
let map
let ui
let behavior
let coord
close.addEventListener('click', () => {
  littleInfo.style.transform = 'translateY(100%)'
})

function measure(lat1, lon1, lat2, lon2) { // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d * 1000; // meters
}

function getCoords() {
  return new Promise((resolve, reject) => {
    console.log('okkkkk')
    navigator.geolocation.watchPosition((position) => {


      const res = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      }
      resolve(res)
    });
  })

}




getCoords().then(coords => {
  map = new H.Map(mapContainer, defaultLayers.normal.map, {
    zoom: 15,
    center: {
      lat: coords.lat,
      lng: coords.long
    }
  });

  // Define a variable holding SVG mark-up that defines an animated icon image:
  let animatedSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" ' +
    'y="0px" style="width="2px"' +
    'height="2px" viewBox="0 0 136 150">' +
    '<ellipse fill="#e74c3c" ' +
    'cx="1.2" cy="1.2" rx="1.2" ry="1.2"></ellipse></svg>';
  let icon = new H.map.DomIcon(animatedSvg),
    marker = new H.map.DomMarker({
      lat: coords.lat,
      lng: coords.long
    }, {
      icon: icon
    })
  ui = H.ui.UI.createDefault(map, defaultLayers);
  map.addObject(marker);




  behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  map.addEventListener('tap', () => {
    infoContainerComplete.style.transform = 'translateX(100%)'
  })


  moreInfo.addEventListener('click', () => {
    // hiddenInput.style.display="none"
    hiddenInput.value = `${currentToilet.id}`
    infoContainerComplete.style.transform = 'translateX(0)'
    littleInfo.style.transform = 'translateY(100%)'

    // alert('toilet-infos.php?id=' + currentToilet.id)
    fetch('comments.php?id=' + currentToilet.id)
      .then(result => result.json())
      .then(data => {
        if (comments.children[0] === undefined) {
          for (let x = 0; x < data.length; x++) {

            let comment = document.createElement('div')
            comment.classList.add('comment')
            let name = document.createElement('h3')
            name.innerHTML = `${data[x].user}`
            let pComment = document.createElement('p')
            pComment.innerHTML = `${data[x].message}`
            let date = document.createElement('h4')
            date.innerHTML = ` ${data[x].date}`
            comments.appendChild(comment)
            comment.appendChild(name)
            comment.appendChild(date)
            comment.appendChild(pComment)

          }
        } else {
          let commentDom = document.querySelectorAll('.comment')
          for (let c = 0; c < commentDom.length; c++) {
            comments.removeChild(commentDom[c])
          }
          for (let x = 0; x < data.length; x++) {

            let comment = document.createElement('div')
            comment.classList.add('comment')
            let name = document.createElement('h3')
            name.innerHTML = `${data[x].user}`
            let pComment = document.createElement('p')
            pComment.innerHTML = `${data[x].message}`
            let date = document.createElement('h4')
            date.innerHTML = ` ${data[x].date}`
            comments.appendChild(comment)
            comment.appendChild(name)
            comment.appendChild(date)
            comment.appendChild(pComment)

          }
        }


      })


  })
  for (let b = 0; b < ratingLabel.length; b++) {
    ratingLabel[b].addEventListener('click', () => {
      let rate = ratingLabel.length - b
      console.log(rate);

      fetch('rate.php?rate=' + rate + '&id=' + currentToilet.id)
        .then(result => result.json())
        .then(data =>{
          console.log(data)
          rateDom.innerHTML=`${ data.toFixed(2)}`
        }
          

        )

    })

  }


  let currentToilet = null
  const oReq = new XMLHttpRequest(); //New request object

  oReq.onload = function() {
    //This is where you handle what to do with the response.
    //The actual data is found on this.responseText


    let toilets = JSON.parse(this.responseText)

    // let group = new H.map.Group();
    for (let i = 0; i < Math.floor(toilets.length); i++) {
      let svg
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes()
      const toilet = toilets[i]

      if (toilet.schedules === '24 h / 24') {
        svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1a{fill:#27ae60;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1a" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform=" translate(-137.21 -79.41)"/></svg>'
      } else if (toilet.schedules === '6 h - 22 h') {
        if (hours >= 6 && hours <= 21) {
          if (hours === 21 && minutes > 30) {
            svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1b{fill:orange;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1b" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform=" translate(-137.21 -79.41)"/></svg>'
          } else {
            svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1c{fill:#27ae60;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1c" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform="  translate(-137.21 -79.41)"/></svg>'
          }
        } else {
          svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1d{fill:red;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1d" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform="  translate(-137.21 -79.41)"/></svg>'
        }
      } else if (toilet.schedules === '6 h - 1 h') {
        if ((hours >= 6 && hours <= 23) || hours === 0) {
          if (hours === 0 && minutes > 30) {
            svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1e{fill:orange;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1e" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform="  translate(-137.21 -79.41)"/></svg>'
          } else {
            svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1f{fill:#27ae60;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1f" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform="  translate(-137.21 -79.41)"/></svg>'
          }
        } else {
          svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1g{fill:red;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1g" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform="  translate(-137.21 -79.41)"/></svg>'
        }
      } else {
        svg = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1h{fill:grey;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1h" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform="  translate(-137.21 -79.41)"/></svg>'
      }


      let iconsvg = new H.map.DomIcon(svg)
      marker = new H.map.DomMarker({
        lat: toilet.coordinates[0],
        lng: toilet.coordinates[1]
      }, {
        icon: iconsvg
      })
      map.addObject(marker);
      marker.addEventListener('pointerenter', () => {
        // console.log(i);
        mapContainer.style.cursor = "pointer"
      });
      marker.addEventListener('pointerleave', () => {
        mapContainer.style.cursor = "default"
      });


      marker.addEventListener('tap', (event) => {

        currentToilet = toilet
        littleInfo.style.transform = 'translateY(-10%)'
        for (let m = 0; m < adress.length; m++) {
          adress[m].innerHTML = `${toilet.address[0]}  ${toilet.address[1].toLowerCase()}<br> <br>PARIS ${toilet.address[2]}`
        }
        for (let n = 0; n < open.length; n++) {
          open[n].innerHTML = `Ouverture : ${toilet.schedules}`
        }

        let distanceMeter = measure(coords.lat, coords.long, toilet.coordinates[0], toilet.coordinates[1])
        distance.innerHTML = `Situé à ${Math.round(distanceMeter*100)/100}m`




      });


      // marker.setData(`<div style="text-align:center;font-weight:bold;">${toilet[1][0]}  ${toilet[2][0].toLowerCase()}<br> <br>PARIS ${toilet[3][0]}</div>`);
    }



    // map.addObject(group);


    // add 'tap' event listener, that opens info bubble, to the group
    //   group.addEventListener('tap', function (evt) {

    //     // event target is the marker itself, group is a parent event target
    //     // for all objects that it contains
    //     var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
    //       // read custom data
    //       content: evt.target.getData()
    //     });
    //     // show info bubble

    //     ui.addBubble(bubble);


    // });   


    //Will alert: 42
  };
  oReq.open("get", "data.php", true);
  //                               ^ Don't block the rest of the execution.
  //                                 Don't wait until the request finishes to 
  //                                 continue.
  oReq.send();

}).catch(err => {
  console.error(err)
})