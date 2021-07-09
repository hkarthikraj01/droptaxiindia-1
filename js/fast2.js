var sedano;
var sedanr;
var suvo; 
var suvr;

function book() {
    var CID =Math.floor((Math.random()*1000000)+1);
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText9 = document.getElementById("dropdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
   
    var Clink="https://droptaxiindia.com";
    var CPh="99409 80956";
    var Cname="Drop Taxi India";
    //calcRoute()
    if((strText7=="Sedan") && (strText8=="One-Way"))
    {rate=sedano;}
    else if((strText7=="Sedan") && (strText8="Round"))
    {rate=sedanr;}
    else if((strText7=="SUV") && (strText8=="One-Way"))
    {rate=suvo;}
    else if((strText7=="SUV") && (strText8=="Round"))
    {rate=suvr;}
    else if((strText7=="PSedan") && (strText8=="One-Way"))
    {rate=psedano;}
    else if((strText7=="PSedan") && (strText8="Round"))
    {rate=psedanr;}
    else if((strText7=="PSUV") && (strText8=="One-Way"))
    {rate=psuvo;}
    else if((strText7=="PSUV") && (strText8=="Round"))
    {rate=psuvr;}
    else if(strText7=="Traveller")
    {rate=traveller;}
console.log("read successful");
    var result;
    if(strText8=="One-Way"){
        result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;
    }else{
        result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 +'%0ADrop Date:'+ strText9 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;
    }
    console.log(result);
var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('error');
        }else
        {
            const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1721938726:AAEqc3VUsUo88GIeAcrWvhRhFVvpmU1aJSE/sendMessage?chat_id=-518646833&text=' + result;
     request.open("post", url);
    request.send();
        console.log("Sent Telegram successfully");
    fetch("https://www.fast2sms.com/dev/bulkV2?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&route=dlt&sender_id=SMSTRS&message=126247&variables_values=%20" + strText + "%20%7C%22" + Clink + "%22%7C%22" + CID + "%22%7C%22" + strText + "%22%7C%22" + strText1 + "%20+%22%7C%22" + strText2 + "%22%7C%22" + strText3 + "%20%22%7C%22" + strText4 + "%22%20%22" + strText6 + "%20%22%7C%22" + strText7 + "%20%22%20%22" + strText8 + "%20%22%7C%22" + rate + "%22%7C" + 1024 + "%7C" + 15 + "%7C" + 450 + "%7C%22" + CPh + "%20" + "%22%7C&flash=0&numbers=" + strText1)
    .then(response=>{
           
            if(response.status==200)
            {
                console.log("Sent Message successfully");
                
                localStorage.setItem("result", strText);
                localStorage.setItem("result1", strText2);
                localStorage.setItem("result2", strText3);
                localStorage.setItem("result3", strText7);
                localStorage.setItem("result4", strText8);
                window.location.href = "bookingSuccess.html";
            }
        })                
        }

});
}
