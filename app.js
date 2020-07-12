import "https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js";

const mapbox_token = 'pk.eyJ1IjoiZGFzczE5OTkiLCJhIjoiY2tjaXNudXFnMHBraDJ4czVtNDA3N2hncSJ9.A0w7c8vk5XJ5oMP08RPoIQ';
mapboxgl.accessToken = mapbox_token;
const map = new mapboxgl.Map({
container: "map",
zoom:1.5,
center:[0,20],
style: "mapbox://styles/mapbox/dark-v10"
});

fetch('/get-place.json')
.then(response=>response.json())
.then(data => {
    const covid = data;
    covid.data.filter(res=>{
        return res.invisible === false
    })
    .forEach(data=>{
        new mapboxgl.Marker({}).setLngLat([data.latitude, data.longitude]).addTo(map);
    })
})