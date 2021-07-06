var myLatLng = { lat: 13.0827, lng: 80.2707 };
var mapOptions = {
    center: myLatLng,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Hide result box
//document.getElementById("output").style.display = "none";
document.getElementById("output1").style.display = "block";
// Create/Init map
var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

// Create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

// Create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// Bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);
var sedano;
var sedanr;
var suvo; 
var suvr;

// Define calcRoute function
function calcRoute() {
     var y = document.getElementById("ma");
        y.style.display = "block";
        var z = document.getElementById("Location");
        z.style.display = "none";
    //create request
    var request = {
        origin: document.getElementById("location-1").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    // Routing
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time            
            var d=result.routes[0].legs[0].distance.value/1000;
            var n = d.toFixed(0);
            sedano=((n*13)+400)+" - "+((n*13)+550);
            sedanr=2*((n*11)+400)+" - "+2*((n*11)+550);
            suvo=((n*18)+400)+" - "+((n*18)+550);
            suvr=2*((n*13)+350)+" - "+2*((n*13)+500);
            traveller=(2*((n*18)+350))+" - "+(2*((n*18)+500));
            
            
            
         $("#output1").html('<h4 class="pt-classic-title ab-center">Sedan - Swift, Zest</h4><h4 class="pt-classic-price-value ab-center">Distance - 506 km</h4><div class="pt-classic-divider"></div><ul class="list-objects-inline"><li><span class="icon text-primary mdi mdi-seat-recline-extra"></span><span class="imp-bo">4 seater</span></li> <li><span class="icon text-primary mdi mdi-air-conditioner"></span><span class="imp-bo">Available</span></li></ul><h4 class="pt-classic-title ab-center">Extra Charges</h4><ul class="pt-classic-list"><li>Extra KM - 14/km</li><li>Toll and State </li><li>Parking & Hill station </li></ul><div class="pt-classic-price-outer ab-center"><div class="pt-classic-price" aria-hidden="false"><div class="pt-classic-price-currency">₹ </div><div class="pt-classic-price-value">6500</div></div><div class="pt-classic-price" aria-hidden="true"><div class="pt-classic-price-currency">$</div><div class="pt-classic-price-value">470</div></div></div>');
            
           
          //  $("#output").html("<div class='result-table'> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />SUV Rate: ₹" +((n)*12)+"-"+((n)*15)+".<br />Sedan Rate: ₹" +((n)*8)+"-"+((n)*11)+".<br />Hatchback Rate: ₹" +((n)*16)+"-"+((n)*19)+ ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div>");
            //document.getElementById("output").style.display = "block";
           // $("#output1").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> One Way : ₹" +sedano+"</span><br /><span> Round Way : ₹" +sedanr+"</span></div>");
            document.getElementById("output1").style.display = "block";
            $("#output2").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> One Way : ₹" +suvo+"</span><br /><span> Round Way : ₹" +suvr+"</span></div>");
            document.getElementById("output1").style.display = "block";
            $("#output3").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> Round Way : ₹" +traveller+"</span><br /><span> One Way : Not available </span></div>");
            document.getElementById("output1").style.display = "block";
            //display route <span> Price  :  ₹13 / Km.</span>
            directionsDisplay.setDirections(result);
            



        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //Show error message           
           
            alert("Can't find road! Please try again!");
            clearRoute();
        }
    });

}

// Clear results

function clearRoute(){
    document.getElementById("output").style.display = "none";
    document.getElementById("location-1").value = "";
    document.getElementById("location-2").value = "";
    directionsDisplay.setDirections({ routes: [] });
    
}

// Create autocomplete objects for all inputs

var options = {
    types: ['(india)']
}


var input1 = document.getElementById("location-1");
var autocomplete1 = new google.maps.places.Autocomplete(input1);

var input2 = document.getElementById("location-2");
var autocomplete2 = new google.maps.places.Autocomplete(input2);
