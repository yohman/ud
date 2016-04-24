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
UD.PercentPoverty1990 = "https://uducla.cartodb.com/api/v2/viz/8ed490f2-d69c-11e5-ae04-0ecd1babdde5/viz.json";
UD.PercentPoverty2000 = "https://uducla.cartodb.com/api/v2/viz/a25dc53a-d69c-11e5-8997-0e674067d321/viz.json";
UD.PercentPoverty2013 = "https://uducla.cartodb.com/api/v2/viz/b7066442-d69c-11e5-b7ec-0ecfd53eb7d3/viz.json";
UD.PopulationDensity1990 = "https://uducla.cartodb.com/api/v2/viz/d2a7a954-d69c-11e5-a3bd-0ecfd53eb7d3/viz.json";
UD.PopulationDensity2000 = "https://uducla.cartodb.com/api/v2/viz/e4e44028-d69c-11e5-9e13-0ecfd53eb7d3/viz.json";
UD.PopulationDensity2013 = "https://uducla.cartodb.com/api/v2/viz/f744ae74-d69c-11e5-acdb-0e31c9be1b51/viz.json";
UD.Majority1990 = "https://uducla.cartodb.com/api/v2/viz/1f07e654-d9a1-11e5-8c3f-0ea31932ec1d/viz.json";
UD.Majority2000 = "https://uducla.cartodb.com/api/v2/viz/2e72813a-d9a1-11e5-a5a4-0e787de82d45/viz.json";
UD.Majority2013 = "https://uducla.cartodb.com/api/v2/viz/b47329ec-d9a1-11e5-8155-0e5db1731f59/viz.json";
UD.medhhinc1990 = "https://uducla.cartodb.com/api/v2/viz/045c49ee-d9b0-11e5-9489-0e3ff518bd15/viz.json";
UD.medhhinc2000 = "https://uducla.cartodb.com/api/v2/viz/3cddfa10-d9b0-11e5-a5f7-0e674067d321/viz.json";
UD.medhhinc2013 = "https://uducla.cartodb.com/api/v2/viz/6099362c-d9b0-11e5-b833-0e31c9be1b51/viz.json";
UD.pct_lths1990 = "https://uducla.cartodb.com/api/v2/viz/c120adf6-d9ae-11e5-945f-0e5db1731f59/viz.json";
UD.pct_lths2000 = "https://uducla.cartodb.com/api/v2/viz/18527ae6-d9af-11e5-9d24-0e31c9be1b51/viz.json";
UD.pct_lths2013 = "https://uducla.cartodb.com/api/v2/viz/2a57fc3e-d9af-11e5-b9a2-0e5db1731f59/viz.json";
UD.pct_col1990 = "https://uducla.cartodb.com/api/v2/viz/910393cc-eee4-11e5-9b14-0e3ff518bd15/viz.json";
UD.pct_col2000 = "https://uducla.cartodb.com/api/v2/viz/18bc9b64-eee6-11e5-960b-0e787de82d45/viz.json";
UD.pct_col2013 = "https://uducla.cartodb.com/api/v2/viz/812a0b50-eee6-11e5-811a-0ecfd53eb7d3/viz.json";
UD.pct_renter1990 = "https://uducla.cartodb.com/api/v2/viz/a078add0-ef87-11e5-b704-0ecfd53eb7d3/viz.json";
UD.pct_renter2000 = "https://uducla.cartodb.com/api/v2/viz/f8218850-ef86-11e5-9d68-0ea31932ec1d/viz.json";
UD.pct_renter2013 = "https://uducla.cartodb.com/api/v2/viz/d0df5908-ef85-11e5-9245-0e674067d321/viz.json";
UD.mgr1990 = "https://uducla.cartodb.com/api/v2/viz/a6bf57f4-ef8a-11e5-a0a0-0ea31932ec1d/viz.json";
UD.mgr2000 = "https://uducla.cartodb.com/api/v2/viz/919740e4-ef8a-11e5-97bb-0e5db1731f59/viz.json";
UD.mgr2013 = "https://uducla.cartodb.com/api/v2/viz/227e52a6-ef8a-11e5-b568-0e3ff518bd15/viz.json";
UD.pct_rb1990 = "https://uducla.cartodb.com/api/v2/viz/eb7a2598-ef91-11e5-9dbe-0e674067d321/viz.json";
UD.pct_rb2000 = "https://uducla.cartodb.com/api/v2/viz/ca5807c2-ef91-11e5-9901-0e787de82d45/viz.json";
UD.pct_rb2013 = "https://uducla.cartodb.com/api/v2/viz/9eaf4726-ef90-11e5-8aab-0ecfd53eb7d3/viz.json";

UD.popden_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/7fcfb40a-d9b3-11e5-b285-0ecfd53eb7d3/viz.json";
UD.popden_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/05efabbc-d9b4-11e5-badc-0e3ff518bd15/viz.json";
UD.NHWhite_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/669ac064-eeea-11e5-88cc-0ea31932ec1d/viz.json";
UD.NHWhite_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/82eb420a-eeec-11e5-a85f-0ecd1babdde5/viz.json";
UD.LTHS_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/4c34d47c-ef16-11e5-a474-0ecfd53eb7d3/viz.json";
UD.LTHS_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/0d72c2c0-ef17-11e5-88cc-0ea31932ec1d/viz.json";
UD.WCD_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/77b0fb4c-ef18-11e5-8909-0e31c9be1b51/viz.json";
UD.WCD_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/ffd25ed0-ef18-11e5-b594-0ecd1babdde5/viz.json";
UD.MHI_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/02b51f76-ef81-11e5-83d1-0e5db1731f59/viz.json";
UD.MHI_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/c35b5876-ef81-11e5-9edf-0e3ff518bd15/viz.json";
UD.MGR_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/c0d9c510-ef8b-11e5-b4e9-0e31c9be1b51/viz.json";
UD.MGR_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/87b13060-ef8c-11e5-b568-0e3ff518bd15/viz.json";
UD.RB_chg_90_00 = "https://uducla.cartodb.com/api/v2/viz/79eb1ee0-ef92-11e5-9f6b-0e5db1731f59/viz.json";
UD.RB_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/2da88422-ef93-11e5-b112-0e5db1731f59/viz.json";
UD.jobden2013 = "https://uducla.cartodb.com/api/v2/viz/63f8c478-efc1-11e5-b7c4-0ea31932ec1d/viz.json";
UD.hcv_rept00 = "https://uducla.cartodb.com/api/v2/viz/7bbdf59c-efda-11e5-bfb9-0e674067d321/viz.json";
UD.hcv_rept13 = "https://uducla.cartodb.com/api/v2/viz/a956202a-efd9-11e5-9554-0e787de82d45/viz.json";
UD.lihtc00 = "https://uducla.cartodb.com/api/v2/viz/f1b9bbde-efe2-11e5-8004-0e31c9be1b51/viz.json";
UD.lihtc13 = "https://uducla.cartodb.com/api/v2/viz/9454d168-efe2-11e5-9edf-0e3ff518bd15/viz.json";
UD.lihtc_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/e1181dd6-efea-11e5-80f2-0ea31932ec1d/viz.json";
UD.ttl_housing_05_13 = "https://uducla.cartodb.com/api/v2/viz/84180262-efeb-11e5-8209-0e787de82d45/viz.json";
UD.condos_05_13 = "https://uducla.cartodb.com/api/v2/viz/fbe10bb8-efeb-11e5-b9af-0e5db1731f59/viz.json";
UD.sfh_05_13 = "https://uducla.cartodb.com/api/v2/viz/92407bde-efec-11e5-8f03-0e787de82d45/viz.json";
UD.other_housing_05_13 = "https://uducla.cartodb.com/api/v2/viz/c22ab588-eff3-11e5-869b-0e787de82d45/viz.json";
UD.pct_condoconv_03_13 = "https://uducla.cartodb.com/api/v2/viz/48526ab6-eff4-11e5-b6da-0ecd1babdde5/viz.json";

UD.hcv_chg_00_13 = "https://uducla.cartodb.com/api/v2/viz/4a8da4c0-efe1-11e5-b704-0ecfd53eb7d3/viz.json";
UD.upscaling_00_13 = "https://uducla.cartodb.com/api/v2/viz/cf506d7e-eff4-11e5-8004-0e31c9be1b51/viz.json";
UD.eligible_00_13 = "https://uducla.cartodb.com/api/v2/viz/2e33d7d0-eff6-11e5-b6da-0ecd1babdde5/viz.json";
UD.gentrify_00_13 = "https://uducla.cartodb.com/api/v2/viz/0b60d61c-eff7-11e5-bcac-0ecfd53eb7d3/viz.json";

// identify which variables are change parameters so we can hide the year buttons
UD.changeVars = ['ttl_housing_05_13','popden_chg_90_00','popden_chg_00_13','NHWhite_chg_90_00','NHWhite_chg_00_13','LTHS_chg_90_00','LTHS_chg_00_13','WCD_chg_90_00','WCD_chg_00_13','MHI_chg_90_00','MHI_chg_00_13','MGR_chg_90_00','MGR_chg_00_13','RB_chg_90_00','RB_chg_00_13','jobden2013','hcv_rept00','hcv_rept13','hcv_chg_00_13','lihtc00','lihtc13','lihtc_chg_00_13','condos_05_13','sfh_05_13','other_housing_05_13','pct_condoconv_03_13','upscaling_00_13','eligible_00_13','gentrify_00_13']

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
	$('#ud-dropdown2').hide();

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
		UD.addLayer(param,UD.year2,UD.map2);
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

	// sync maps on pan
	UD.map1.on('mousedown', function(e) {
		UD.map1.sync(UD.map2);
		UD.map2.sync(UD.map1);
	});
	UD.map2.on('mousedown', function(e) {
		UD.map1.sync(UD.map2);
		UD.map2.sync(UD.map1);
	});

	// add layer
	cartodb.createLayer(UD.map1, 'https://uducla.cartodb.com/api/v2/viz/51c3f1ae-067a-11e6-bb72-0ecd1babdde5/viz.json',{tooltip:true})
		// .addTo(UD.map1)
		.on('done', function(metro) {
			metro.setZIndex(0);
			var overlayMaps = {
				"Metro stops": metro
			};
			L.control.layers(null, overlayMaps).addTo(UD.map1);
		})
		.on('error', function(err) {
			alert("some error occurred: " + err);
		});



	// L.control.layers(null,baselayer).addTo(UD.map1);
}

UD.addLayer = function(param,year,map2use)
{
	console.log(map2use)
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

UD.addMetro = function()
{
	// add layer
	cartodb.createLayer(UD.map1, 'https://uducla.cartodb.com/api/v2/viz/7b22ac78-0596-11e6-b89d-0e31c9be1b51/viz.json',{tooltip:true})
		.addTo(UD.map1);

}

UD.toggleDualMap = function()
{
	// resync maps because buggy if you don't
	UD.map1.sync(UD.map2);
	UD.map2.sync(UD.map1);

	if(UD.dualmap)
	{
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

