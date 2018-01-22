/*

	Default parameters

*/
var UD = {};
UD.dualmap = false;
UD.map1;
UD.map2;
UD.year1 = 1990;
UD.year2 = 1990;
UD.param = 'Majority1990';

UD.disadvantaged_90_15 = "https://uducla.cartodb.com/api/v2/viz/82e2f3c8-bb0a-4cac-8e1b-9e68831514e1/viz.json";
UD.gentrify_90_15 = "https://uducla.cartodb.com/api/v2/viz/feb4895a-84eb-4f78-9f23-574ada475daf/viz.json";
UD.Majority1990 = "https://uducla.cartodb.com/api/v2/viz/31333a59-cc34-471b-858e-f19237d43537/viz.json";
UD.Majority2000 = "https://uducla.cartodb.com/api/v2/viz/792962d0-01ad-4db6-adc5-9c562df3c08d/viz.json";
UD.Majority2015 = "https://uducla.cartodb.com/api/v2/viz/14f67500-586d-4d21-b048-3189cf841fd8/viz.json";
UD.pct_lths1990 = "https://uducla.cartodb.com/api/v2/viz/87881555-501f-4854-8d3a-9df0979d4012/viz.json";
UD.pct_lths2000 = "https://uducla.cartodb.com/api/v2/viz/325add81-8662-4968-b9f4-a6b165b61eae/viz.json";
UD.pct_lths2015 = "https://uducla.cartodb.com/api/v2/viz/cc6392df-39d4-421e-8b23-ffb8d81a6ead/viz.json";
UD.pct_col1990 = "https://uducla.cartodb.com/api/v2/viz/13386940-8ba7-4c66-8f2f-50f92c39f3f9/viz.json";
UD.pct_col2000 = "https://uducla.cartodb.com/api/v2/viz/e9e372cc-f2d9-4786-bdce-219d3d233c05/viz.json";
UD.pct_col2015 = "https://uducla.cartodb.com/api/v2/viz/43d0b435-10b1-4284-81dd-955832e66305/viz.json";
UD.IndividualPovertyRates1990 = "https://uducla.cartodb.com/api/v2/viz/90c66328-9949-44a2-83e8-1654431619bf/viz.json";
UD.IndividualPovertyRates2000 = "https://uducla.cartodb.com/api/v2/viz/0f474be2-ff0a-4426-a460-c3d72e2a9bdf/viz.json";
UD.IndividualPovertyRates2015 = "https://uducla.cartodb.com/api/v2/viz/4b7873b4-a786-4905-9051-1de80f6856b7/viz.json";
UD.MedianHHIncome1990 = "https://uducla.cartodb.com/api/v2/viz/600a3f1d-3f9a-4301-9874-2a98df085ffe/viz.json";
UD.MedianHHIncome2000 = "https://uducla.cartodb.com/api/v2/viz/bffb3a5c-f678-4b3c-9526-5aabe4bf77cd/viz.json";
UD.MedianHHIncome2015 = "https://uducla.cartodb.com/api/v2/viz/6c2a0a0a-f879-45f4-8b64-156a98619777/viz.json";
UD.JobDensity2015 = "https://uducla.cartodb.com/api/v2/viz/97daddd8-8007-4b6f-96a4-b6eb307328ee/viz.json";
UD.RenterHH1990 = "https://uducla.cartodb.com/api/v2/viz/3d0c8954-244b-4035-a717-309547956e6a/viz.json";
UD.RenterHH2000 = "https://uducla.cartodb.com/api/v2/viz/4ed5dab8-e129-4c61-a96c-6027e3bf617d/viz.json";
UD.RenterHH2015 = "https://uducla.cartodb.com/api/v2/viz/aae71883-1494-437e-86d4-b83d1a557ab0/viz.json";
UD.MedianGrossRent1990 = "https://uducla.cartodb.com/api/v2/viz/85f965ce-1db4-4ed3-90aa-1ed86a19aedc/viz.json";
UD.MedianGrossRent2000 = "https://uducla.cartodb.com/api/v2/viz/483dcb5d-a7a6-430c-a16f-dfb3dea846e1/viz.json";
UD.MedianGrossRent2015 = "https://uducla.cartodb.com/api/v2/viz/14f6b67f-c609-42e8-a0ba-dd6ef0735200/viz.json";
UD.BurdenedRenterHH1990 = "https://uducla.cartodb.com/api/v2/viz/95e447c8-7d2f-47a2-8fd8-ebf6b0f7d8e0/viz.json";
UD.BurdenedRenterHH2000 = "https://uducla.cartodb.com/api/v2/viz/5fec104c-241e-499e-8289-a56a8dce063e/viz.json";
UD.BurdenedRenterHH2015 = "https://uducla.cartodb.com/api/v2/viz/b1157d24-b7a7-4df5-bb36-ed108730d5eb/viz.json";
UD.Section8HH2000 = "https://uducla.cartodb.com/api/v2/viz/34e1a880-ae27-46a0-8d8a-1fc09bea61ef/viz.json";
UD.Section8HH2015 = "https://uducla.cartodb.com/api/v2/viz/146179d8-09f9-4e5c-ab50-1f646768a774/viz.json";
UD.ChangeInNonHispanicWhites_1990_2000 = "https://uducla.cartodb.com/api/v2/viz/af846fc7-94ff-4a49-b466-9df0faf01dde/viz.json";
UD.ChangeInNonHispanicWhites_2000_2015 = "https://uducla.cartodb.com/api/v2/viz/35767520-a9bf-416c-b592-4fa5a9f31e28/viz.json";
UD.ChangeInCollegeEducated_1990_2000 = "https://uducla.cartodb.com/api/v2/viz/72c8803b-11e1-4386-a672-b7dc0d953170/viz.json";
UD.ChangeInCollegeEducated_2000_2015 = "https://uducla.cartodb.com/api/v2/viz/f917d515-6121-4854-8cc6-64e0c4175a99/viz.json";
UD.ChangeInMedianHHIncome_1990_2000 = "https://uducla.cartodb.com/api/v2/viz/491afcf9-ef54-4411-8840-405698ba9d26/viz.json";
UD.ChangeInMedianHHIncome_2000_2015 = "https://uducla.cartodb.com/api/v2/viz/d6ac019a-54f0-49f0-9cf4-e833eeeae20e/viz.json";
UD.ChangeInMedianGrossRent_1990_2000 = "https://uducla.cartodb.com/api/v2/viz/7679b5a4-a79f-49ed-8476-4ec8f85a8add/viz.json";
UD.ChangeInMedianGrossRent_2000_2015 = "https://uducla.cartodb.com/api/v2/viz/89fafa00-b073-4ede-ad93-2d4545a304d9/viz.json";
UD.ChangeInRentBurdenedHH_1990_2000 = "https://uducla.cartodb.com/api/v2/viz/257cab51-3070-46ce-b137-85914fe8623c/viz.json";
UD.ChangeInRentBurdenedHH_2000_2015 = "https://uducla.cartodb.com/api/v2/viz/eb610834-8edc-482c-a432-986e7544b3d5/viz.json";
UD.ChangeInSection8HH_2000_2015 = "https://uducla.cartodb.com/api/v2/viz/4fe8449c-e338-4299-8627-d978b1d9c734/viz.json";

// identify which variables are change parameters so we can hide the year buttons
UD.changeVars = ['disadvantaged_90_15','gentrify_90_15','JobDensity2015','Section8HH2000','Section8HH2015','ChangeInNonHispanicWhites_1990_2000','ChangeInNonHispanicWhites_2000','ChangeInCollegeEducated_1990_2000','ChangeInCollegeEducated_2000_2015','ChangeInMedianHHIncome_1990_2000','ChangeInMedianHHIncome_2000_2015','ChangeInMedianGrossRent_1990_2000','ChangeInMedianGrossRent_2000_2015','ChangeInRentBurdenedHH_1990_2000','ChangeInRentBurdenedHH_2000_2015','ChangeInSection8HH_2000_2015']


/*

	Map Layers

*/
var baselayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var baselayer2 = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var labellayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var labellayer2 = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

/*

	On document load

*/
$( document ).ready(function() {
	UD.init();

	// clone the dropdown and add to second map
	// change the id's and classes accordingly
	$('#ud-dropdown').clone().attr('id','ud-dropdown2').appendTo('#dropdown-container').find('ul').toggleClass('menu1 menu2');
	$('#ud-dropdown2').find('.year').toggleClass('year year2');
	$('#ud-dropdown2').find('.maptoggle').toggleClass('maptoggle maptoggle2');
	$('#ud-dropdown2').hide();
	$('.maptoggle2').hide();
	$('#dropdown-container').css("right","180px")

	// assign actions to drop down selections
	$(".menu1 li a").click(function(){
		var selText = $(this).text();
		var param = $(this).attr('title');
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
		$('.year').removeClass('btn-info');
		$('#btn'+UD.year1).addClass('btn-info');
		UD.addLayer(param,UD.year1,UD.map1);
	});

	$(".menu2 li a").click(function(){
		var selText = $(this).text();
		var param = $(this).attr('title');
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
		$('.year2').removeClass('btn-info');
		$('#ud-dropdown2').find('#btn'+UD.year2).addClass('btn-info');
		console.log(param)
		UD.addLayer(param,UD.year2,UD.map2,$(this));
	});

	// assign actions to year selections
	$(".year").click(function(){
		var year = $(this).text();
		$('.year').removeClass('btn-info');
		$(this).addClass('btn-info');
		UD.addLayer(UD.param,year,UD.map1);
	});
	$(".year2").click(function(){
		console.log(this)
		var year = $(this).text();
		$('.year2').removeClass('btn-info');
		$(this).addClass('btn-info');
		UD.addLayer(UD.param,year,UD.map2);
	});

	// add a default map
	$(".gentrify_90_15").click()

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
	UD.map1 = new L.Map('map1', mapOptions);
	UD.map2 = new L.Map('map2', mapOptions);

	UD.map1.addLayer(baselayer);
	UD.map2.addLayer(baselayer2);
	UD.map1.sync(UD.map2);
	UD.map2.sync(UD.map1);

	// L.Control.geocoder().addTo(map);
	
	// sync maps on pan
	// if(UD.dualmap)
	// {
	// 	UD.map1.on('mouseup', function(e) {
	// 		UD.map1.sync(UD.map2);
	// 		UD.map2.sync(UD.map1);
	// 	});
	// 	UD.map2.on('mouseup', function(e) {
	// 		UD.map1.sync(UD.map2);
	// 		UD.map2.sync(UD.map1);
	// 	});		
	// }

	var layerControl = L.control.layers(null, null,{collapsed:false}).addTo(UD.map1);

	// add layer to Map
	var overlay_metro = cartodb.createLayer(UD.map1, 'https://uducla.cartodb.com/api/v2/viz/7b22ac78-0596-11e6-b89d-0e31c9be1b51/viz.json',{tooltip:true})
		// .addTo(UD.map1)
		.on('done', function(metro) {
			metro.setZIndex(0);
			layerControl.addOverlay(metro, 'Metro stops');
		})
		.on('error', function(err) {
			alert("some error occurred: " + err);
		});

	// add layer
	var overlay_healthycommunities = cartodb.createLayer(UD.map1, 'https://uducla.cartodb.com/api/v2/viz/3acf9c7d-cf95-4d24-bad3-4698ba344943/viz.json',{tooltip:true})
		// .addTo(UD.map1)
		.on('done', function(healthy) {
			healthy.setZIndex(0);
			layerControl.addOverlay(healthy, 'Healthy Communities');
		})
		.on('error', function(err) {
			alert("some error occurred: " + err);
		});


	var layerControl2 = L.control.layers(null, null,{collapsed:false}).addTo(UD.map2);

	// add layer to Map2
	var overlay_metro = cartodb.createLayer(UD.map2, 'https://uducla.cartodb.com/api/v2/viz/7b22ac78-0596-11e6-b89d-0e31c9be1b51/viz.json',{tooltip:true})
		// .addTo(UD.map2)
		.on('done', function(metro) {
			metro.setZIndex(0);
			layerControl2.addOverlay(metro, 'Metro stops');
		})
		.on('error', function(err) {
			alert("some error occurred: " + err);
		});

	// add layer
	var overlay_healthycommunities = cartodb.createLayer(UD.map2, 'https://uducla.cartodb.com/api/v2/viz/3acf9c7d-cf95-4d24-bad3-4698ba344943/viz.json',{tooltip:true})
		// .addTo(UD.map1)
		.on('done', function(healthy) {
			healthy.setZIndex(0);
			layerControl2.addOverlay(healthy, 'Healthy Communities');
		})
		.on('error', function(err) {
			alert("some error occurred: " + err);
		});
}

UD.addLayer = function(param,year,map2use)
{
	console.log(param)

	UD.map1.sync(UD.map2);
	// hide existing layer
	if(map2use == UD.map1)
	{
		if(UD.layer1) UD.layer1.hide();
		// remove labels
		map2use.removeLayer(labellayer)
		if(year !== undefined)
		{
			UD.year1 = year;
		}
		// remove old legend
		$('#map1').find('.cartodb-legend-stack').hide();

		// hide year buttons if change param
		if(UD.changeVars.indexOf(param)>-1)
		{
			$('#ud-dropdown').find('#button-years').hide();
		}
		else
		{
			$('#ud-dropdown').find('#button-years').show();
		}

	}
	else
	{
		if(UD.layer2) UD.layer2.hide();
		// remove labels
		map2use.removeLayer(labellayer2)
		if(year !== undefined)
		{
			UD.year2 = year;
		}
		// remove old legend
		$('#map2').find('.cartodb-legend-stack').hide();

		// hide year buttons if change param
		if(UD.changeVars.indexOf(param)>-1)
		{
			$('#ud-dropdown2').find('#button-years').hide();
		}
		else
		{
			$('#ud-dropdown2').find('#button-years').show();
		}
	}
	
	// get rid of any open tooltip windows and legends
	$('.cartodb-tooltip').hide();


	// defaults
	if(param !== undefined)
	{
		UD.param = param;
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
		var jsonURL = UD[UD.param+year]
	}
	// add layer
	cartodb.createLayer(map2use, jsonURL,{tooltip:true})
		.addTo(map2use)
		.on('done', function(layer) {
			layer
			.on('load',function(){
				// hide existing layer
				if(map2use == UD.map1)
				{
					UD.layer1 = layer;
					map2use.addLayer(labellayer)
				}
				else
				{
					UD.layer2 = layer;
					map2use.addLayer(labellayer2)
				}


			})
			.on('featureOver', function(e, latlng, pos, data) {
				
			})
			.on('error', function(err) {
				console.log('error: ' + err);
			});
			// var sublayer = layer.getSubLayer(0);

		}).on('error', function(err) {
		console.log("some error occurred: " + err);
	});
}

// UD.addMetro = function()
// {
// 	// add layer
// 	cartodb.createLayer(UD.map1, 'https://uducla.cartodb.com/api/v2/viz/7b22ac78-0596-11e6-b89d-0e31c9be1b51/viz.json',{tooltip:true})
// 		.addTo(UD.map1);

// }

UD.toggleDualMap = function(mode)
{
	// resync maps because buggy if you don't
	// UD.map1.sync(UD.map2);
	// UD.map2.sync(UD.map1);

	if(mode=='single')
	{
		$(".maptoggle").html("Single map")
		$('#map2').hide(); 
		$('#ud-dropdown2').hide();
		$('#map1').css('width','100%'); 
		$('#map1').css('border-right','0px solid black');
		$('#map2').css('border-left','0px solid black');
		UD.map1.invalidateSize();
		UD.dualmap = false;
	}
	else
	{
		$(".maptoggle").html("Dual map")
		$('#map2').show();
		$('#ud-dropdown2').show();
		// $('#map1').animate({ width: "50%" }, 1000 )
		$('#map1').css('width','50%'); 
		$('#map1').css('border-right','2px solid black');
		$('#map2').css('border-left','2px solid black');
		UD.map1.invalidateSize();		
		UD.map2.invalidateSize();		
		UD.dualmap = true;

	}
}

