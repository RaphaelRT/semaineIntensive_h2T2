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
const closeComment = document.querySelector('.closeComment')
const closeInfoContainer = document.querySelector('.closeInfoContainer')
const addComment = document.querySelector('.addComment')
const addCommentButton = document.querySelector('.addCommentButton')
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




//Initialize HereWeGo
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

//Close element Event
close.addEventListener('click', () => {
  littleInfo.style.transform = 'translateY(100%)'
})

closeComment.addEventListener('click', () => {
  addComment.style.transform = 'translateY(220%)'
})

closeInfoContainer.addEventListener('click', () => {
  infoContainerComplete.style.transform = 'translateX(100%)'
  
})

addCommentButton.addEventListener('click', () => {
  if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)){
    addComment.style.transform = 'translateX(2%)'
  }
  else{
    addComment.style.transform = 'translateX(100%)'
  } 
  infoContainerComplete.style.transform = 'translateX(100%)'
  
})


//function to calculate a distance in meter with coords

function measure(lat1, lon1, lat2, lon2) { 
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

//Get coords your own coords
function getCoords() {
  return new Promise((resolve, reject) => {
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
  //Create map
  map = new H.Map(mapContainer, defaultLayers.normal.map, {
    zoom: 15,
    center: {
      lat: coords.lat,
      lng: coords.long
    }
  });

  // Create Marker
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

  //Allow Event on map
  behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


  map.addEventListener('tap', () => {
    infoContainerComplete.style.transform = 'translateX(100%)'
  })


  moreInfo.addEventListener('click', () => {
    hiddenInput.value = `${currentToilet.id}`
    infoContainerComplete.style.transform = 'translateX(0)'
    littleInfo.style.transform = 'translateY(100%)'

    //Get comments by id
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
        for (let b = 0; b < ratingLabel.length; b++) {
          let rate = ratingLabel.length - b
          fetch('rate-sum.php?rate=' + rate + '&id=' + currentToilet.id)
            .then(result => result.json())
            .then(data =>{
                let rateP = rateDom.querySelector('p')
                if (rateP === null) {
                  let rateDomp = document.createElement('p')
                  rateDomp.innerHTML=`${ data.sum.toFixed(2)}★ (${ data.size.toFixed(2)}) `
                  rateDom.appendChild(rateDomp)
                  console.log(rate.children);
                }
                else{
                  rateDom.removeChild(rateP)
                  console.log('deleted');
                  let rateDomp = document.createElement('p')
                  rateDomp.innerHTML=`${ data.sum.toFixed(2)}★ (${ data.size}) `
                  rateDom.appendChild(rateDomp)
                }    
            })
        }
      })
  })

  //rating
  for (let b = 0; b < ratingLabel.length; b++) {
    ratingLabel[b].addEventListener('click', () => {
      let rate = ratingLabel.length - b
      fetch('rate.php?rate=' + rate + '&id=' + currentToilet.id)
    })
  }


  let currentToilet = null
  const request = new XMLHttpRequest(); //New request object

  request.onload = function() {
    let loading = document.querySelector('.loading')
    let toilets = JSON.parse(this.responseText)

    loading.style.display="none"

    

    // Get and compare Hours 
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

      //create markers on all toilets 
      let iconsvg = new H.map.DomIcon(svg)
      marker = new H.map.DomMarker({
        lat: toilet.coordinates[0],
        lng: toilet.coordinates[1]
      }, {
        icon: iconsvg
      })
      map.addObject(marker);
      let svgV2 = '<svg class="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.97 395.23"><defs><style>.cls-1z{fill:#FFC900;stroke:#fff;stroke-miterlimit:10;width="2px"}</style></defs><title>point map</title><path class="cls-1z" d="M380.68,221.69a164.34,164.34,0,0,1-3.78,35.22A84,84,0,0,1,368.68,278L262.23,464.74c-7.34,12.54-9.21,12.62-16.66-.34l-97.1-187.87a73.54,73.54,0,0,1-6.33-16.77,164,164,0,0,1-4.43-38.07c0-78.31,54.39-141.78,121.49-141.78S380.68,143.38,380.68,221.69Z" transform=" translate(-137.21 -79.41)"/></svg>'
      let iconsvgv2 = new H.map.DomIcon(svgV2)

      marker.addEventListener('pointerenter', () => {
        mapContainer.style.cursor = "pointer"
      });
      marker.addEventListener('pointerleave', () => {
        mapContainer.style.cursor = "default"
      });
      
      //redirect to Google map in order to get the itinerary  
      let go = document.querySelectorAll('.go')
      marker.addEventListener('tap', (event) => {
        for (let e = 0; e < go.length; e++) {
          go[e].href=`https://map.google.com/?q=${toilet.coordinates[0]},${toilet.coordinates[1]}`
        }
        
        
        currentToilet = toilet
        littleInfo.style.transform = 'translateY(-10%)'

        //send rating
        for (let b = 0; b < ratingLabel.length; b++) {
          let rate = ratingLabel.length - b
          fetch('rate-sum.php?rate=' + rate + '&id=' + currentToilet.id)
            .then(result => result.json())
            .then(data =>{
              let grade = document.querySelector('.grade')
              grade.innerHTML=''
               
              if ( grade.innerHTML === '') {
                grade.innerHTML=`${ data.sum.toFixed(2)}★ (${ data.size})`
              }
              else{
                grade.innerHTML=''
                grade.innerHTML=`${ data.sum.toFixed(2)}★ ( sur ${ data.size} avis) `
              }    
            })
        }

        for (let m = 0; m < adress.length; m++) {
          adress[m].innerHTML = `${toilet.address[0]}  ${toilet.address[1].toLowerCase()}<br> <br>PARIS ${toilet.address[2]}`
        }
        for (let n = 0; n < open.length; n++) {
          open[n].innerHTML = `Ouverture : ${toilet.schedules}`
        }

        let distanceMeter = measure(coords.lat, coords.long, toilet.coordinates[0], toilet.coordinates[1])
        distance.innerHTML = `Situé à ${Math.round(distanceMeter*100)/100}m`
        moreInfo.addEventListener('click',()=>{
          let mapFocusedDom = document.querySelector('.mapFocused')
          if (mapFocusedDom=== null) {
            mapFocusedDom= document.createElement('div')
            mapFocusedDom.classList.add('mapFocused')
            infoContainerComplete.prepend(mapFocusedDom)
            mapFocusedDom.style.width='70%'
            mapFocusedDom.style.height='30%'
          }
          else{
            infoContainerComplete.removeChild(mapFocusedDom)
            mapFocusedDom= document.createElement('div')
            mapFocusedDom.classList.add('mapFocused')
            infoContainerComplete.prepend(mapFocusedDom)
            mapFocusedDom.style.width='70%'
            mapFocusedDom.style.height='30%'
          }
          let mapFocused_mapv1 = new H.Map(mapFocusedDom, defaultLayers.normal.map, {
            zoom: 15,
            center: {
              lat: toilet.coordinates[0],
              lng: toilet.coordinates[1]
            }
          });

          let littleMarker = new H.map.DomMarker({
            lat: toilet.coordinates[0],
            lng: toilet.coordinates[1]
          }, {
            icon: iconsvgv2
          })
          mapFocused_mapv1.addObject(littleMarker);
        })
      });
    }

  };
  request.open("get", "data.php", true);
  request.send();
}).catch(err => {
  console.error(err)
})