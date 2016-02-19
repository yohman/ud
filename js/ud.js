/*

	Default parameters

*/
var UD = {};
UD.map;
UD.PercentPoverty1990 = "https://uducla.cartodb.com/api/v2/viz/8ed490f2-d69c-11e5-ae04-0ecd1babdde5/viz.json";
UD.PercentPoverty2000 = "https://uducla.cartodb.com/api/v2/viz/a25dc53a-d69c-11e5-8997-0e674067d321/viz.json";
UD.PercentPoverty2013 = "https://uducla.cartodb.com/api/v2/viz/b7066442-d69c-11e5-b7ec-0ecfd53eb7d3/viz.json";
UD.Population1990 = "https://uducla.cartodb.com/api/v2/viz/d2a7a954-d69c-11e5-a3bd-0ecfd53eb7d3/viz.json";
UD.Population2000 = "https://uducla.cartodb.com/api/v2/viz/e4e44028-d69c-11e5-9e13-0ecfd53eb7d3/viz.json";
UD.Population2013 = "https://uducla.cartodb.com/api/v2/viz/f744ae74-d69c-11e5-acdb-0e31c9be1b51/viz.json";

/*

	On document load

*/
$( document ).ready(function() {
	UD.init();

	$(".dropdown-menu li a").click(function(){
		var selText = $(this).text();
		var param = $(this).attr('title');
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
		UD.addLayer(param);
	});

	$(".year").click(function(){
		var year = $(this).text();
		$('.year').removeClass('btn-info');
		$(this).addClass('btn-info');
		UD.addLayer(UD.param,year);
	});
});

/*

	Begin mapping

*/
UD.init = function()
{	
	var mapOptions = {
		center: [34.243594729697406, -118.2073974609375],
		zoom: 10
	};
	UD.map = new L.Map('cartodb-map', mapOptions);

	var baselayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
	});
	UD.map.addLayer(baselayer);
}

UD.addLayer = function(param,year)
{
	// hide existing layer
	if(UD.layer) UD.layer.hide();

	// defaults
	if(param == undefined)
	{
		UD.param = 'PercentPoverty';
	} 
	else
	{
		UD.param = param;
	}
	if(year == undefined)
	{
		UD.year = 1990;
	} 
	else
	{
		UD.year = year;
	}

	// add layer
	cartodb.createLayer(UD.map, UD[UD.param+UD.year],{tooltip:false})
		.addTo(UD.map)
		.on('done', function(layer) {
			UD.layer = layer;
			layer
			.on('featureOver', function(e, latlng, pos, data) {
				console.log(data);
			})
			.on('error', function(err) {
				console.log('error: ' + err);
			});
			var sublayer = layer.getSubLayer(0);
			// sublayer.infowindow.set('template', $('#infowindow_template').html());

			// layer.leafletMap.viz.addOverlay({
			// 	type: 'tooltip',
			// 	layer: sublayer,
			// 	template: '<div class="well cartodb-tooltip-content-wrapper"><p>1990: {{pct_pov90}}<br>2000: {{pct_pov00}}<br>2013: {{pct_pov13}}</p></div>', 
			// 	// template: '<div class="cartodb-tooltip-content-wrapper"><img style="width: 100%" src={{_url}}>{{name}}, {{age}}, {{city}}, {{country}}</div>', 
			// 	position: 'top|right',
			// 	fields: [{ name: 'name' }]
			// });

			// layer.leafletMap.viz.addOverlay({
			// 	type: 'infobox',
			// 	layer: sublayer,
			// 	template: '<p>1990: {{pct_pov90}}<br>2000: {{pct_pov00}}<br>2013: {{pct_pov13}}<br></p>',
			// 	width: 200, // width of the box
			// 	position: 'bottom|left' // top, bottom, left and right are available
			// });

		}).on('error', function(err) {
		console.log("some error occurred: " + err);
	});
}
