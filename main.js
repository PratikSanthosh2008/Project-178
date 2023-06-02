let latitude = 22, longitude = 88;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#amber")

// Create a Amber Palace
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75, 26])
	.addTo(map);

var img2 = document.querySelector("#gateway")
// Create a  Gateway of India
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72, 18])
	.addTo(map);

var img3 = document.querySelector("#gate")
// Create a India Gate Marker 
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77, 28])
	.addTo(map);


var img4 = document.querySelector("#lotus")

// Create a Lotus Temple
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77, 28])
	.addTo(map);


//Create a Victoria Memorial
var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([88, 22])
	.addTo(map);
