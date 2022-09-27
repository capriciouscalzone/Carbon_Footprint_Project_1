console.log("hello me")
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b8c6fb145fmsh124aed16ff0541dp1b6734jsn653a01a171f0',
// 		'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
// 	}
// };

// fetch('https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=MediumPetrolCar', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

fetch("http://api.openweathermap.org/geo/1.0/zip?zip=90210,US&appid=2d8868d62bc83f43b64634172d198128")
.then(function(response) {
	return response.json();
})
.then(function(data){
	console.log(data);
})