/*

	Default parameters

*/
var UD = {};
UD.map;
UD.year = 1990;
UD.param = 'Majority1990';
UD.PercentPoverty1990 = "https://uducla.cartodb.com/api/v2/viz/8ed490f2-d69c-11e5-ae04-0ecd1babdde5/viz.json";
UD.PercentPoverty2000 = "https://uducla.cartodb.com/api/v2/viz/a25dc53a-d69c-11e5-8997-0e674067d321/viz.json";
UD.PercentPoverty2013 = "https://uducla.cartodb.com/api/v2/viz/b7066442-d69c-11e5-b7ec-0ecfd53eb7d3/viz.json";
UD.PopulationDensity1990 = "https://uducla.cartodb.com/api/v2/viz/d2a7a954-d69c-11e5-a3bd-0ecfd53eb7d3/viz.json";
UD.PopulationDensity2000 = "https://uducla.cartodb.com/api/v2/viz/e4e44028-d69c-11e5-9e13-0ecfd53eb7d3/viz.json";
UD.PopulationDensity2013 = "https://uducla.cartodb.com/api/v2/viz/f744ae74-d69c-11e5-acdb-0e31c9be1b51/viz.json";
UD.Majority1990 = "https://uducla.cartodb.com/api/v2/viz/1f07e654-d9a1-11e5-8c3f-0ea31932ec1d/viz.json";
UD.Majority2000 = "https://uducla.cartodb.com/api/v2/viz/2e72813a-d9a1-11e5-a5a4-0e787de82d45/viz.json";
UD.Majority2013 = "https://uducla.cartodb.com/api/v2/viz/b47329ec-d9a1-11e5-8155-0e5db1731f59/viz.json";
UD.pct_lths1990 = "https://uducla.cartodb.com/api/v2/viz/c120adf6-d9ae-11e5-945f-0e5db1731f59/viz.json";
UD.pct_lths2000 = "https://uducla.cartodb.com/api/v2/viz/18527ae6-d9af-11e5-9d24-0e31c9be1b51/viz.json";
UD.pct_lths2013 = "https://uducla.cartodb.com/api/v2/viz/2a57fc3e-d9af-11e5-b9a2-0e5db1731f59/viz.json";
UD.medhhinc1990 = "https://uducla.cartodb.com/api/v2/viz/045c49ee-d9b0-11e5-9489-0e3ff518bd15/viz.json";
UD.medhhinc2000 = "https://uducla.cartodb.com/api/v2/viz/3cddfa10-d9b0-11e5-a5f7-0e674067d321/viz.json";
UD.medhhinc2013 = "https://uducla.cartodb.com/api/v2/viz/6099362c-d9b0-11e5-b833-0e31c9be1b51/viz.json";
UD.popden_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/7fcfb40a-d9b3-11e5-b285-0ecfd53eb7d3/viz.json";
UD.popden_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/05efabbc-d9b4-11e5-badc-0e3ff518bd15/viz.json";

/*

	On document load

*/
$( document ).ready(function() {
	UD.init();

	$(".dropdown-menu li a").click(function(){
		var selText = $(this).text();
		var param = $(this).attr('title');
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
		$('.year').removeClass('btn-info');
		$('#btn'+UD.year).addClass('btn-info');
		UD.addLayer(param,UD.year);
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
		center: [33.98037811701901,-118.23280334472658],
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
	// get rid of any open tooltip windows and legends
	$('.cartodb-tooltip').hide();
	$('.cartodb-legend-stack').hide();

	// hide existing layer
	if(UD.layer) UD.layer.hide();

	// defaults
	if(param !== undefined)
	{
		UD.param = param;
	}
	if(year !== undefined)
	{
		UD.year = year;
	}

	// jsonlayer to add
	var hasNumber = /\d/;

	// if year is already part of the parameter
	if(hasNumber.test(UD.param))
	{
		var jsonURL = UD[UD.param];
	}
	else
	{
		var jsonURL = UD[UD.param+UD.year]
	}

	// add layer
	cartodb.createLayer(UD.map, jsonURL,{tooltip:true})
		.addTo(UD.map)
		.on('done', function(layer) {
			UD.layer = layer;
			layer
			.on('featureOver', function(e, latlng, pos, data) {

			})
			.on('error', function(err) {
				console.log('error: ' + err);
			});
			var sublayer = layer.getSubLayer(0);

		}).on('error', function(err) {
		console.log("some error occurred: " + err);
	});
}
