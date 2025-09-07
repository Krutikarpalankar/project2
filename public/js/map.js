// const coordinates = windnow.listing.geometry.coordinates;
// import Listing  from "../../model/listing";
const map = new maplibregl.Map({
    container: 'map',
    // style:"https://demotiles.maplibre.org/globe.json?key=vNOeNWtaiWoqk5Z778Iq",
    // style: 'https://api.maptiler.com/maps/streets/style.json?key=${mapToken}',
        style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,
    
    center:coordinates,   
    zoom: 9,
  });

  new maplibregl.Marker()
    .setLngLat(coordinates)
    .setPopup(
    new maplibregl.Popup({ offset: 25 })
      .setHTML(`<h5>${listing.title}</h5><p>${listing.location}</p>`)
  )
    .addTo(map);
// console.log("map loaded",center);




// const Listing= require("../model/listing");
// import { coordinates } from '@maptiler/client';
// import {Listing} from'../model/listing.js';
// maptilersdk.config.apiKey = "SM0fhhhO7hspkAyrI6Uu ";
// const map = new maptilersdk.Map({
//   container: 'map', // container's id or the HTML element in which the SDK will render the map
//   style:maptilersdk.MapStyle.STREETS,
//   center:coordinates, // starting position [lng, lat]
//   zoom: 14 // starting zoom
// });
// new maplibregl.Marker()
//     .setLngLat(coordinates)
//     .addTo(map);
// const marker = new maptilersdk.Marker()
//   .setLngLat(center)
//   .addTo(map);

//     const map = new maplibregl.Map({
//     container: 'map', // id of <div>
//     style:http// api.maptiler.com/maps/streets/style.json?key=${mapToken},
//     center: coordinates, // [lng, lat]
//     zoom: 10,
//   });

  // new maplibregl.Marker()
  //   .setLngLat(coordinates)
  //   .addTo(map);
// let mapToken=mapToken;;
//     config.apiKey = SM0fhhhO7hspkAyrI6Uu;
//       const map = new Map({
//         container: 'map', // container's id or the HTML element to render the map
//          style: MapStyle.STREETS,
//          center:listing.geomerty.coordinates,//starting position[lng,lat]
//         zoom:9,
//       });
//    const popup = new maptilersdk.Popup({ offset: 25 })
//   .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`);

// // new maptilersdk.Marker({ color: 'red' })
// //   .setLngLat(listing.geometry.coordinates)
// //   .setPopup(popup)
// //   .addTo(map);   
// const marker1 = new maptilersdk.Marker({color:'red'})
//   .setLngLat(listing.geomerty.coordinates)  // listing.geometry.coordinates
//   .setPopup(new maptilersdk.Popup({ offset:25})
        
//         .setHTML('<h4>${listing.title}</h4><p>Exact Location will be provid after booking</p>'))
//   .addTo(map);
// const marker2 = new maptilersdk.Marker({color:'red'})
//   .setLngLat(listing.geomerty.coordinates)  // listing.geometry.coordinates
//   .setPopup(new maptilersdk.Popup({ offset:25})
        
//         .setHTML('<h4>${listing.title}</h4><p>Exact Location will be provid after booking</p>'))
//   .addTo(map);
// // const popup = new maptilersdk.Popup({ offset: 25 })
// //   .setHTML(<h4> ${listing.title}</h4> <p>Exact Location will be provided after booking</p>);

// // new maptilersdk.Marker({ color: 'red' })
// //   .setLngLat(listing.geometry.coordinates)
// //   .setPopup(popup)
// //   .addTo(map);