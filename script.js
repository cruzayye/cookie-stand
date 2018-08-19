
var randomGenerator = function (min, max, avgSale) {
    var random = Math.floor(Math.random() * (max)) + min;
    var PerHourTotal = random * avgSale;
    return parseInt(PerHourTotal);
}

openHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']

var Store = function (storeName, minCust, maxCust, avgSale, totalCookies) {
    this.store = storeName;//parameters dont get called until new objects get created. 
    this.min = minCust;
    this.max = maxCust;
    this.avg = avgSale;
    this.total = totalCookies;
    this.header = function (tableId) {
        var table = document.getElementById(tableId);
        var row = document.createElement("tr");
        var heading = document.createElement("th");
        heading.setAttribute("colspan", "2");
        heading.innerText = (storeName);
        row.appendChild(heading);
        table.appendChild(row);

    };
    this.tableHours = function (tableId) {
        for (i = 0; i < openHours.length; i++) {
            //first were looping through hours array to create a column
            var table = document.getElementById(tableId);
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText = openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour = randomGenerator(this.min, this.max, this.avg);
            this.total += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);
        }
    };
    this.totalrow = function (tableId) {
        var table = document.getElementById(tableId);
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText = 'total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = this.total;
        row.appendChild(totalCookies);



    }

}







var stores = [];
//this is a new object
stores.push(new Store('pioneer', 13, 33, 4.4, 0));
stores.push(new Store('waterfront', 6, 24, 1.2, 0));
stores.push(new Store('tigard', 20, 48, 3.3, 0));
stores.push(new Store('beaverton', 3, 24, 2.6, 0));
stores.push(new Store('alberta', 20, 48, 3.3, 0));
stores.push(new Store('lloyd', 20, 48, 3.3, 0));
//calling the function within new object
console.log(stores)

var callId = function (storeObject) {
    console.log(storeObject);
    storeObject.header(storeObject.store);

    storeObject.tableHours(storeObject.store);
    storeObject.totalrow(storeObject.store);

}

callId(stores[0]);
callId(stores[1]);
callId(stores[2]);
callId(stores[3]);
callId(stores[4]);
callId(stores[5]);



//before creating linese 79-93 we had the below code to call out each section of the table now we are using the 
//push method in the array. 

// for(i = 0; i < stores.length; i++){
//    callId(stores[i]);
// }


// pioneer.header('pioneer');
// pioneer.tableHours('pioneer');
// pioneer.totalrow('pioneer');

// tigard.header('tigard');
// tigard.tableHours('tigard');
// tigard.totalrow('tigard');

// waterfront.header('waterfront');
// waterfront.tableHours('waterfront');
// waterfront.totalrow('waterfront');

// beaverton.header('beaverton');
// beaverton.tableHours('beaverton');
// beaverton.totalrow('beaverton');

// alberta.header('alberta');
// alberta.tableHours('alberta');
// alberta.totalrow('alberta');

// lloyd.header('lloyd');
// lloyd.tableHours('lloyd');
// lloyd.totalrow('lloyd');





// var pioneer ={
// minCust: 17,
// maxCust: 88,
// avgSale: 5.2,
// totalCookies: 0,
// openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

// header: function(){
//     var table = document.getElementById('pioneer-list');
//     var row = document.createElement("tr");
//     var heading = document.createElement("th");
//     heading.setAttribute("colspan", "2");
//     heading.innerText= "Pioneer place";
//     row.appendChild(heading);
//     table.appendChild(row);
    
// },
//     tableHours: function(){
//         for( i = 0; i < pioneer.openHours.length; i++){
//             var table = document.getElementById('pioneer-list');
//             var row = document.createElement("tr");
//             var hour = document.createElement("td");
//             table.appendChild(row);
//             hour.innerText= pioneer.openHours[i];
//             row.appendChild(hour);
//             //cookies per hour
//             var cookiesPerHour  = randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale);
//             pioneer.totalCookies += cookiesPerHour;
//             var totalCookies = document.createElement("td");
//             totalCookies.innerText = cookiesPerHour;
//             row.appendChild(totalCookies);

            
//                 } 
            
//             },
//     totalrow: function(){
//         var table = document.getElementById('pioneer-list');
//         var row = document.createElement("tr");
//         var total = document.createElement("td");
//         table.appendChild(row);
//         total.innerText ='total';
//         row.appendChild(total);
//         //


//         var totalCookies = document.createElement("td");
//         totalCookies.innerText = pioneer.totalCookies;
//         row.appendChild(totalCookies);



//     }

//     } 
// pioneer.header();
// pioneer.tableHours();
// pioneer.totalrow();



    //=========================previous code====================================
/*

var randomGenerator = function(min, max, avgSale){
    var random = Math.floor(Math.random()*(max)) + min;
    var PerHourTotal = random * avgSale;
    return parseInt(PerHourTotal);
}

var pioneer ={
minCust: 17,
maxCust: 88,
avgSale: 5.2,
totalCookies: 0,
openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

header: function(){
    var table = document.getElementById('pioneer-list');
    var row = document.createElement("tr");
    var heading = document.createElement("th");
    heading.setAttribute("colspan", "2");
    heading.innerText= "Pioneer place";
    row.appendChild(heading);
    table.appendChild(row);
    
},
    tableHours: function(){
        for( i = 0; i < pioneer.openHours.length; i++){
            var table = document.getElementById('pioneer-list');
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText= pioneer.openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour  = randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale);
            pioneer.totalCookies += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);

            
                } 
            
            },
    totalrow: function(){
        var table = document.getElementById('pioneer-list');
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText ='total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = pioneer.totalCookies;
        row.appendChild(totalCookies);



    }

    } 
pioneer.header();
pioneer.tableHours();
pioneer.totalrow();
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //start by creating a func that geneartes a random number 
    var randomGenerator = function(min, max, avgSale){
        var random = Math.floor(Math.random()*(max)) + min;
        var PerHourTotal = random * avgSale;
        return parseInt(PerHourTotal);
    }

    
var pioneer ={
    minCust: 17,
    maxCust: 88,
    avgSale: 5.2,
    totalCookies: 0,
    openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

    header: function(){
        var table = document.getElementById('pioneer-list');
        var row = document.createElement("tr");
        var heading = document.createElement("th");
        heading.setAttribute("colspan", "2");
        heading.innerText= "Pioneer place";
        row.appendChild(heading);
        table.appendChild(row);
        
    },
    tableHours: function(){
        for( i = 0; i < pioneer.openHours.length; i++){
            var table = document.getElementById('pioneer-list');
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText= pioneer.openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour  = randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale);
            pioneer.totalCookies += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);

            
                } 
            
            },
    totalrow: function(){
        var table = document.getElementById('pioneer-list');
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText ='total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = pioneer.totalCookies;
        row.appendChild(totalCookies);



    }
    
} 
pioneer.header();
pioneer.tableHours();
pioneer.totalrow();

var waterfront ={
    minCust: 6,
    maxCust: 24,
    avgSale: 1.2,
    totalCookies: 0,
    openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

    header: function(){
        var table = document.getElementById('waterfront');
        var row = document.createElement("tr");
        var heading = document.createElement("th");
        heading.setAttribute("colspan", "2");
        heading.innerText= "Waterfront";
        row.appendChild(heading);
        table.appendChild(row);
        
    },
    tableHours: function(){
        for( i = 0; i < waterfront.openHours.length; i++){
            var table = document.getElementById('waterfront');
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText= waterfront.openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour  = randomGenerator(waterfront.minCust, waterfront.maxCust, waterfront.avgSale);
            waterfront.totalCookies += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);

            
                } 
            
            },
    totalrow: function(){
        var table = document.getElementById('waterfront');
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText ='total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = pioneer.totalCookies;
        row.appendChild(totalCookies);



    }
    
} 
waterfront.header();
waterfront.tableHours();
waterfront.totalrow();


var lloyd ={
    minCust: 6,
    maxCust: 24,
    avgSale: 1.2,
    totalCookies: 0,
    openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

    header: function(){
        var table = document.getElementById('lloyd');
        var row = document.createElement("tr");
        var heading = document.createElement("th");
        heading.setAttribute("colspan", "2");
        heading.innerText= "lloyd";
        row.appendChild(heading);
        table.appendChild(row);
        
    },
    tableHours: function(){
        for( i = 0; i < lloyd.openHours.length; i++){
            var table = document.getElementById('lloyd');
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText= lloyd.openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour  = randomGenerator(lloyd.minCust, lloyd.maxCust, lloyd.avgSale);
            lloyd.totalCookies += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);

            
                } 
            
            },
    totalrow: function(){
        var table = document.getElementById('lloyd');
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText ='total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = pioneer.totalCookies;
        row.appendChild(totalCookies);



    }
    
} 
lloyd.header();
lloyd.tableHours();
lloyd.totalrow();



var alberta={
    minCust: 6,
    maxCust: 24,
    avgSale: 1.2,
    totalCookies: 0,
    openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

    header: function(){
        var table = document.getElementById('alberta');
        var row = document.createElement("tr");
        var heading = document.createElement("th");
        heading.setAttribute("colspan", "2");
        heading.innerText= "alberta";
        row.appendChild(heading);
        table.appendChild(row);
        
    },
    tableHours: function(){
        for( i = 0; i < alberta.openHours.length; i++){
            var table = document.getElementById('alberta');
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText= alberta.openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour  = randomGenerator(alberta.minCust, alberta.maxCust, alberta.avgSale);
            alberta.totalCookies += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);

            
                } 
            
            },
    totalrow: function(){
        var table = document.getElementById('alberta');
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText ='total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = pioneer.totalCookies;
        row.appendChild(totalCookies);



    }
    
} 
alberta.header();
alberta.tableHours();
alberta.totalrow();

var tigard={
    minCust: 6,
    maxCust: 24,
    avgSale: 1.2,
    totalCookies: 0,
    openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

    header: function(){
        var table = document.getElementById('tigard');
        var row = document.createElement("tr");
        var heading = document.createElement("th");
        heading.setAttribute("colspan", "2");
        heading.innerText= "tigard";
        row.appendChild(heading);
        table.appendChild(row);
        
    },
    tableHours: function(){
        for( i = 0; i < tigard.openHours.length; i++){
            var table = document.getElementById('tigard');
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText= tigard.openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour  = randomGenerator(tigard.minCust, tigard.maxCust, tigard.avgSale);
            tigard.totalCookies += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);

            
                } 
            
            },
    totalrow: function(){
        var table = document.getElementById('tigard');
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText ='total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = pioneer.totalCookies;
        row.appendChild(totalCookies);



    }
    
} 
tigard.header();
tigard.tableHours();
tigard.totalrow();

var beaverton ={
    minCust: 6,
    maxCust: 24,
    avgSale: 1.2,
    totalCookies: 0,
    openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm' ],

    header: function(){
        var table = document.getElementById('beaverton');
        var row = document.createElement("tr");
        var heading = document.createElement("th");
        heading.setAttribute("colspan", "2");
        heading.innerText= "beaverton";
        row.appendChild(heading);
        table.appendChild(row);
        
    },
    tableHours: function(){
        for( i = 0; i < beaverton.openHours.length; i++){
            var table = document.getElementById('beaverton');
            var row = document.createElement("tr");
            var hour = document.createElement("td");
            table.appendChild(row);
            hour.innerText= beaverton.openHours[i];
            row.appendChild(hour);
            //cookies per hour
            var cookiesPerHour  = randomGenerator(beaverton.minCust, beaverton.maxCust, beaverton.avgSale);
            beaverton.totalCookies += cookiesPerHour;
            var totalCookies = document.createElement("td");
            totalCookies.innerText = cookiesPerHour;
            row.appendChild(totalCookies);

            
                } 
            
            },
    totalrow: function(){
        var table = document.getElementById('beaverton');
        var row = document.createElement("tr");
        var total = document.createElement("td");
        table.appendChild(row);
        total.innerText ='total';
        row.appendChild(total);
        //


        var totalCookies = document.createElement("td");
        totalCookies.innerText = pioneer.totalCookies;
        row.appendChild(totalCookies);



    }
    
} 
beaverton.header();
beaverton.tableHours();
beaverton.totalrow();
*/
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    //=========================previous code====================================
            

            
            
                        


 

     







  
               
            
            
            
        //gets teh TOTAL FROM the array, adding each number up
      /* toHTML: function() {
           var cookiesPerHour  = randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale) 
           pioneer.totalCookies += cookiesPerHour;
           console.log(pioneer.totalCookies);
           return '<li>' + pioneer.openHours[i] + ': ' + cookiesPerHour +  '</li>';
           pioneerList: function(){
             var list = document.getElementById('pioneer-list');
             for( i = 0; i < pioneer.openHours.length; i++){
                 //var perHour = (randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale));
                 list.innerHTML += pioneer.toHTML();
                 //console.log(pioneer.openHours[i]);
                 
         
         
         
         
             } 
         
         }
      },*/

      //
   // pioneer.pioneerList();
  // pioneer.cookiesPerHour();
           



    
/*
    var waterFront ={
        minCust: 6,
        maxCust: 24,
        avgSale: 1.2,
        totalCookies: 0,

        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        totalPrint: function(){
            var total = document.getElementById('waterfront');
            total.innerHTML += '<li>'+ 'total: ' + waterFront.totalCookies +'<li>'
            

        },
        toHTML: function() {
            var cookiesPerHour  = randomGenerator(waterFront.minCust, waterFront.maxCust, waterFront.avgSale) 
            waterFront.totalCookies += cookiesPerHour;
            return '<li>' + waterFront.openHours[i] + ': ' + cookiesPerHour +  '</li>';
         },
        waterFrontList:function (){
            var list = document.getElementById('waterfront');
            for( i = 0; i < waterFront.openHours.length; i++){
                var perHour = (randomGenerator(waterFront.minCust, waterFront.maxCust, waterFront.avgSale));
                list.innerHTML += waterFront.toHTML();
                //console.log(pioneer.openHours[i]);

                




            } 
      
        }   
    } 
    waterFront.waterFrontList(); 
    waterFront.totalPrint();




    var lloyd ={
        minCust: 11,
        maxCust: 38,
        avgSale: 1.9,
        totalCookies: 0,

        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        totalPrint: function(){
            var total = document.getElementById('lloyd');
            total.innerHTML += '<li>'+ 'total: ' + waterFront.totalCookies +'<li>'
            

        },
        toHTML: function() {
            var cookiesPerHour  = randomGenerator(lloyd.minCust, lloyd.maxCust, lloyd.avgSale) 
            lloyd.totalCookies += cookiesPerHour;
            return '<li>' + lloyd.openHours[i] + ': ' + cookiesPerHour +  '</li>';
         },
         lloydList:function (){
            var list = document.getElementById('lloyd');
            for( i = 0; i < lloyd.openHours.length; i++){
                var perHour = (randomGenerator(lloyd.minCust, lloyd.maxCust, lloyd.avgSale));
                list.innerHTML += lloyd.toHTML();
                //console.log(pioneer.openHours[i]);

                




            } 
      
        }   
    } 
    lloyd.lloydList(); 
    lloyd.totalPrint();



    var alberta ={
        minCust: 11,
        maxCust: 38,
        avgSale: 1.9,
        totalCookies: 0,

        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        totalPrint: function(){
            var total = document.getElementById('alberta');
            total.innerHTML += '<li>'+ 'total: ' + alberta.totalCookies +'<li>'
            

        },
        toHTML: function() {
            var cookiesPerHour  = randomGenerator(alberta.minCust, alberta.maxCust, alberta.avgSale) 
            alberta.totalCookies += cookiesPerHour;
            return '<li>' + alberta.openHours[i] + ': ' + cookiesPerHour +  '</li>';
         },
         List:function (){
            var list = document.getElementById('alberta');
            for( i = 0; i < alberta.openHours.length; i++){
                var perHour = (randomGenerator(alberta.minCust, alberta.maxCust, alberta.avgSale));
                list.innerHTML += alberta.toHTML();
                //console.log(pioneer.openHours[i]);

                




            } 
      
        }   
    } 
    alberta.List(); 
    alberta.totalPrint();

    var tigard ={
        minCust: 11,
        maxCust: 38,
        avgSale: 1.9,
        totalCookies: 0,

        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        totalPrint: function(){
            var total = document.getElementById('tigard');
            total.innerHTML += '<li>'+ 'total: ' + tigard.totalCookies +'<li>'
            

        },
        //this creats the total and returns it as a list along with the info within the array
        toHTML: function() {
            var cookiesPerHour  = randomGenerator(tigard.minCust, tigard.maxCust, tigard.avgSale) 
            tigard.totalCookies += cookiesPerHour;
            return '<li>' + tigard.openHours[i] + ': ' + cookiesPerHour +  '</li>';
         },
         //this takes the above function and actually prints it to the html 6 times by looping through it. 
         List:function (){
            var list = document.getElementById('tigard');
            for( i = 0; i < tigard.openHours.length; i++){
                list.innerHTML += tigard.toHTML();
                //console.log(pioneer.openHours[i]);

                




            } 
      
        }   
    } 
    tigard.List(); 
    tigard.totalPrint();

    var beaverton ={
        minCust: 11,
        maxCust: 38,
        avgSale: 1.9,
        totalCookies: 0,

        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        totalPrint: function(){
            var total = document.getElementById('beaverton');
            total.innerHTML += '<li>'+ 'total: ' + beaverton.totalCookies +'<li>'
            

        },
        //this creats the total and returns it as a list along with the info within the array
        toHTML: function() {
            var cookiesPerHour  = randomGenerator(beaverton.minCust, beaverton.maxCust, beaverton.avgSale) 
            beaverton.totalCookies += cookiesPerHour;
            return '<li>' + beaverton.openHours[i] + ': ' + cookiesPerHour +  '</li>';
         },
         //this takes the above function and actually prints it to the html 6 times by looping through it. 
         List:function (){
            var list = document.getElementById('beaverton');
            for( i = 0; i < beaverton.openHours.length; i++){
                list.innerHTML += beaverton.toHTML();
                //console.log(pioneer.openHours[i]);

                




            } 
      
        }   
    } 
    beaverton.List(); 
    beaverton.totalPrint();



    */
    


     











        
             


       

       
        
    

        
        
    
