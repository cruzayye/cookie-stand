
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
        //this adds up the array and prints the total
        totalPrint: function(){
            var total = document.getElementById('pioneer-list');
            
            total.innerHTML += '<li>'+ 'total: ' + pioneer.totalCookies +'<li>'

        },
        //gets teh TOTAL FROM the array, adding each number up
       toHTML: function() {
           var cookiesPerHour  = randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale) 
           pioneer.totalCookies += cookiesPerHour;
           console.log(pioneer.totalCookies);
           return '<li>' + pioneer.openHours[i] + ': ' + cookiesPerHour +  '</li>';
      },

      //
      pioneerList: function(){
        var list = document.getElementById('pioneer-list');
        for( i = 0; i < pioneer.openHours.length; i++){
            //var perHour = (randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale));
            list.innerHTML += pioneer.toHTML();
            //console.log(pioneer.openHours[i]);
            
    
    
    
    
        } 
    
    }
  } 
    pioneer.pioneerList();
    pioneer.totalPrint();
           



    

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



    
    


     











        
             


       

       
        
    

        
        
    
