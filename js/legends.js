//Legends keys must be same as filter keys

var Legends = {
    population: L.control({position: 'bottomleft'}),
    density: L.control({position: 'bottomleft'}),
   
    sarlahi_fire: L.control({position: 'bottomleft'}),
    sarlahi_flood: L.control({position: 'bottomleft'}),
    dailekh_hazard: L.control({position: 'bottomleft'}),
    composite_adapcap: L.control({position: 'bottomleft'}),
    composite_exposure: L.control({position: 'bottomleft'}),
    composite_sensitivity: L.control({position: 'bottomleft'}),
    vulnerability_score: L.control({position: 'bottomleft'}),
    risk_score: L.control({position: 'bottomleft'}),
    component_indicator: L.control({position: 'bottomleft'}),
    Percentage_of_economically_active_population: L.control({position: 'bottomleft'}),
    Percentage_of_households_with_household_assets: L.control({position: 'bottomleft'}),
    Percentage_of_households_with_television_access: L.control({position: 'bottomleft'}),
    Percentage_of_households_that_are_female_owned: L.control({position: 'bottomleft'}),
    Percentage_of_households_with_land_owned_by_female: L.control({position: 'bottomleft'}),
    Dengue_Fever_Cases: L.control({position: 'bottomleft'}),
    Cholera_Cases: L.control({position: 'bottomleft'}),
    Population_density: L.control({position: 'bottomleft'}),
    Median_Slope: L.control({position: 'bottomleft'}),
    Median_Elevation: L.control({position: 'bottomleft'}),
    Number_of_fire_incidence: L.control({position: 'bottomleft'}),
    Total_Male: L.control({position: 'bottomleft'}),
    component_indicator: L.control({position: 'bottomleft'}),
    // mayor_name: L.control({position: 'bottomleft'}),
    // mayor_party: L.control({position: 'bottomleft'}),
    // mayor_age: L.control({position: 'bottomleft'}),
    // mayor_gender: L.control({position: 'bottomleft'}),
    // mayor_margin: L.control({position: 'bottomleft'}),
   
    // vice_mayor_name: L.control({position: 'bottomleft'}),
    // vice_mayor_party: L.control({position: 'bottomleft'}),
    // vice_mayor_age: L.control({position: 'bottomleft'}),
    // vice_mayor_gender: L.control({position: 'bottomleft'}),
    // vice_mayor_margin: L.control({position: 'bottomleft'}),
    // voters_count: L.control({position: 'bottomleft'}),

    // c_mayor_candidate: L.control({position: 'bottomleft'}),
    // c_mayor_age: L.control({position: 'bottomleft'}),
    // c_mayor_gender: L.control({position: 'bottomleft'}),

    // c_vice_mayor_candidate: L.control({position: 'bottomleft'}),
    // c_vice_mayor_age: L.control({position: 'bottomleft'}),
    // c_vice_mayor_gender: L.control({position: 'bottomleft'}),

    // ward_president_candidate: L.control({position: 'bottomleft'}),
    // ward_president_age: L.control({position: 'bottomleft'}),
    // ward_president_gender: L.control({position: 'bottomleft'}),

    national_park: L.control({position: 'bottomleft'}),

    // lead_mayor: L.control({position: 'bottomleft'}),
    // lead_vice_mayor: L.control({position: 'bottomleft'}),


}

Legends.national_park.onAdd = function (map) {
		
    var div = L.DomUtil.create('div', 'info legend'),
   
      labels = [''],

      categories = ["निकुञ्ज/"];
      div.innerHTML += labels;
      
      for (var i = 0; i < categories.length; i++) {
        //   div.innerHTML += '<i id="national_park_legend" style="background: #79d5ad"></i>National Parks/Reserves';
      }
      
      return div;
};

Legends.population.onAdd = function (map) {
		
    var div = L.DomUtil.create('div', 'info legend'),
   
      labels = ['<strong>Population</strong>'],

      categories = [0, 2000000, 3000000, 4000000, 5000000, 6000000];
      div.innerHTML += '<p style="font-size:20px">';
      div.innerHTML += labels+ '<br>';
      
      for (var i = 0; i < categories.length; i++) {
          div.innerHTML += '<i style="background:' + getProvinceColor_population(categories[i]+1) + '"></i>' + categories[i].toLocaleString() + (categories[i + 1] ? '&ndash;' + categories[i + 1].toLocaleString() + '<br>' : '+');
      }
        div.innerHTML += '</p>';
      
      Global.mapLegend="population";
      return div;
};

Legends.density.onAdd = function (map) {
		
	  var div = L.DomUtil.create('div', 'info legend'),
	 
		labels = ['<strong>Population Density</strong>']+ '<br>';
        categories = [0, 100, 200, 300, 400, 500];
        div.innerHTML += '<p style="font-size:20px">';
        
		div.innerHTML += labels;
		for (var i = 0; i < categories.length; i++) {
				div.innerHTML += '<i style="background:' + getProvinceColor_popDensity(categories[i]+1) + '"></i>' + categories[i].toLocaleString() + (categories[i + 1] ? '&ndash;' + categories[i + 1].toLocaleString() + '<br>' : '+');
        }
        div.innerHTML += '</p>';
        
		Global.mapLegend="popDensity";
		return div;
};

Legends.sarlahi_fire.onAdd = function (map) {
    Global.currentSummaryTitle = summaryText();

    var div = L.DomUtil.create('div', 'info legend'),
   
    labels = ['<strong>Category</strong>']+ '<br>';
    div.innerHTML += '<p style="font-size:20px">';

    div.innerHTML += labels;


    Object.keys(RangeBracketColor).forEach(key => {
        var text = RangeBracketColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
            Global.currentLegendKeys.push(text); 
            // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
          div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeBracketColor[key] + '"></i>' + key + "<br>"+"</div>";
    });
    div.innerHTML += '</p>';

    return div;
};

Legends.sarlahi_flood.onAdd = function (map) {
    Global.currentSummaryTitle = summaryText();

    var div = L.DomUtil.create('div', 'info legend'),
   
    labels = ['<strong>Category</strong>']+ '<br>';
    div.innerHTML += '<p style="font-size:20px">';

    div.innerHTML += labels;


    Object.keys(RangeBracketColor).forEach(key => {
        var text = RangeBracketColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
            Global.currentLegendKeys.push(text); 
            // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
          div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeBracketColor[key] + '"></i>' + key + "<br>"+"</div>";
    });
    div.innerHTML += '</p>';

    return div;
};


Legends.dailekh_hazard.onAdd = function (map) {
    Global.currentSummaryTitle = summaryText();

    var div = L.DomUtil.create('div', 'info legend'),
   
    labels = ['<strong>Category</strong>']+ '<br>';
    div.innerHTML += '<p style="font-size:20px">';

    div.innerHTML += labels;


    Object.keys(RangeColor).forEach(key => {
        var text = RangeColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
            Global.currentLegendKeys.push(text); 
            // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
          div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeColor[key] + '"></i>' + key + "<br>"+"</div>";
    });
    div.innerHTML += '</p>';

    return div;
};

// Legends.composite_adapcap.onAdd = function (map) {
//     Global.currentSummaryTitle = summaryText();

//     var div = L.DomUtil.create('div', 'info legend'),
   
//     labels = ['<strong>Category</strong>']+ '<br>';
//     div.innerHTML += '<p style="font-size:20px">';

//     div.innerHTML += labels;


//     Object.keys(RangeColor).forEach(key => {
//         var text = RangeColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
//             Global.currentLegendKeys.push(text); 
//             // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
//           div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeColor[key] + '"></i>' + key + "<br>"+"</div>";
//     });
//     div.innerHTML += '</p>';

//     return div;
// };

// Legends.composite_exposure.onAdd = function (map) {
//     Global.currentSummaryTitle = summaryText();

//     var div = L.DomUtil.create('div', 'info legend'),
   
//     labels = ['<strong>Category</strong>']+ '<br>';
//     div.innerHTML += '<p style="font-size:20px">';

//     div.innerHTML += labels;


//     Object.keys(RangeColor).forEach(key => {
//         var text = RangeColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
//             Global.currentLegendKeys.push(text); 
//             // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
//           div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeColor[key] + '"></i>' + key + "<br>"+"</div>";
//     });
//     div.innerHTML += '</p>';

//     return div;
// };

// Legends.composite_sensitivity.onAdd = function (map) {
//     Global.currentSummaryTitle = summaryText();

//     var div = L.DomUtil.create('div', 'info legend'),
   
//     labels = ['<strong>Category</strong>']+ '<br>';
//     div.innerHTML += '<p style="font-size:20px">';

//     div.innerHTML += labels;


//     Object.keys(RangeColor).forEach(key => {
//         var text = RangeColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
//             Global.currentLegendKeys.push(text); 
//             // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
//           div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeColor[key] + '"></i>' + key + "<br>"+"</div>";
//     });
//     div.innerHTML += '</p>';

//     return div;
// };

function createLegend(map, legendType) {
    Global.currentSummaryTitle = summaryText();

    var div = L.DomUtil.create('div', 'info legend'),
        labels = ['<strong>Category</strong>'] ;
    div.innerHTML += '<p style="font-size:20px">';
    div.innerHTML += labels;

    Object.keys(RangeColor).forEach(key => {
        var text = RangeColor[key].replace(/^\s+|\s+$/g, "").replace("#", "");
        Global.currentLegendKeys.push(text);
        // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
        var label = RangeLabels[key] || key;
        div.innerHTML += '<div style="cursor:pointer" id="legend_option_' + text + '" onclick="legendClick(\'' + text + '\')" ondblclick="legendDblClick(\'' + text + '\')">' + '<i style="background:' + RangeColor[key] + '"></i>' + label + "</div>";
    });

    div.innerHTML += '</p>';
    return div;
}

Legends.composite_adapcap.onAdd = function (map) {
    return createLegend(map, 'adapcap');
};

Legends.composite_exposure.onAdd = function (map) {
    return createLegend(map, 'exposure');
};

Legends.composite_sensitivity.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};

Legends.vulnerability_score.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};

Legends.risk_score.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};


Legends.Total_Male.onAdd = function (map) {
    return createLegend(map, 'adapcap');
};

Legends.Percentage_of_economically_active_population.onAdd = function (map) {
    return createLegend(map, 'exposure');
};

Legends.Percentage_of_households_with_household_assets.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};

Legends.Percentage_of_households_with_television_access.onAdd = function (map) {
    return createLegend(map, 'adapcap');
};

Legends.Percentage_of_households_that_are_female_owned.onAdd = function (map) {
    return createLegend(map, 'exposure');
};

Legends.Percentage_of_households_with_land_owned_by_female.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};

Legends.Dengue_Fever_Cases.onAdd = function (map) {
    return createLegend(map, 'adapcap');
};

Legends.Cholera_Cases.onAdd = function (map) {
    return createLegend(map, 'exposure');
};

Legends.Population_density.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};
Legends.Median_Slope.onAdd = function (map) {
    return createLegend(map, 'adapcap');
};

Legends.Median_Elevation.onAdd = function (map) {
    return createLegend(map, 'exposure');
};

Legends.Number_of_fire_incidence.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};

Legends.component_indicator.onAdd = function (map) {
    return createLegend(map, 'sensitivity');
};


// Legends.Total_Male.onAdd = function (map) {
//     Global.currentSummaryTitle = summaryText();

//     var div = L.DomUtil.create('div', 'info legend'),
   
//     labels = ['<strong>Category</strong>']+ '<br>';
//     div.innerHTML += '<p style="font-size:20px">';

//     div.innerHTML += labels;


//     Object.keys(RangeColor).forEach(key => {
//         var text = RangeColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
//             Global.currentLegendKeys.push(text); 
//             // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
//           div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeColor[key] + '"></i>' + key + "<br>"+"</div>";
//     });
//     div.innerHTML += '</p>';

//     return div;
// };

Legends.component_indicator.onAdd = function (map) {
    Global.currentSummaryTitle = summaryText();

    var div = L.DomUtil.create('div', 'info legend'),
   
    labels = ['<strong>Category</strong>']+ '<br>';
    div.innerHTML += '<p style="font-size:20px">';

    div.innerHTML += labels;


    Object.keys(RangeColor).forEach(key => {
        var text = RangeColor[key].replace(/^\s+|\s+$/g,"").replace("#","");
            Global.currentLegendKeys.push(text); 
            // Global.currentSummaryBody[toNepaliDigits(key)] = Summary[Global.currentFilter](key)
          div.innerHTML += '<div style="cursor:pointer" id="legend_option_'+text+'" onclick="legendClick(\''+text+'\')" ondblclick="legendDblClick(\''+text+'\')">'+'<i style="background:' + RangeColor[key] + '"></i>' + key + "<br>"+"</div>";
    });
    div.innerHTML += '</p>';

    return div;
};

function legendClick(key){
    var total =  $('[id*="legend_option_"]').length;
    var black = $('[id*="legend_option_"]').filter(function(){
        return $(this).css('opacity') == "1";
    }).length;
    if(total == black){
        Global.currentLegendKeys.forEach(function(k){
            var index = Global.currentLegendKeys.indexOf(k);//get  "car" index
            $('#legend_option_'+k).css("color","grey");
            $('#legend_option_'+k).css("opacity","0.5");
        })
        Global.currentLegendKeys = [];
      
        Global.currentLegendKeys.push(key);
        $('#legend_option_'+key).css("color","black");
        $('#legend_option_'+key).css("opacity","1");
    }
    else{
        if(Global.currentLegendKeys.includes(key)){
            var index = Global.currentLegendKeys.indexOf(key);//get  "car" index
            Global.currentLegendKeys.splice(index,1);
            $('#legend_option_'+key).css("color","grey");
            $('#legend_option_'+key).css("opacity","0.5");
        }
        else{
            Global.currentLegendKeys.push(key);
            $('#legend_option_'+key).css("color","black");
            $('#legend_option_'+key).css("opacity","1");
        }
    }
    tempKeys = Global.currentLegendKeys;

    resetMap();
    // renderLayer();
    renderLegend();

    $('[id*="legend_option_"]').css("color","grey");
    $('[id*="legend_option_"]').css("opacity","0.5");

    tempKeys.forEach(function(m){
        $('#legend_option_'+m).css("color","black");
        $('#legend_option_'+m).css("opacity","1");
    })



    Global.currentLegendKeys = tempKeys;


    if(Global.currentBubble != "none"){
        // renderLegend();
        renderBubble();
    }
    // renderLayer();
    applyMapfilterLayer(Global.currentFilter);



}



function legendDblClick(key){
    Global.currentLegendKeys.forEach(function(k){
        var index = Global.currentLegendKeys.indexOf(k);//get  "car" index
        $('#legend_option_'+k).css("color","grey");
        $('#legend_option_'+k).css("opacity","0.5");
    })
    Global.currentLegendKeys = [];
  
    Global.currentLegendKeys.push(key);
    $('#legend_option_'+key).css("color","black");
    $('#legend_option_'+key).css("opacity","1");

    tempKeys = Global.currentLegendKeys;

    resetMap();
    // renderLayer();
    renderLegend();

    $('[id*="legend_option_"]').css("color","grey");
    $('[id*="legend_option_"]').css("opacity","0.5");

    tempKeys.forEach(function(m){
        $('#legend_option_'+m).css("color","black");
        $('#legend_option_'+m).css("opacity","1");
    })



    Global.currentLegendKeys = tempKeys;


    if(Global.currentBubble != "none"){
        // renderLegend();
        renderBubble();
    }
    // renderLayer();
    applyMapfilterLayer(Global.currentFilter);
}