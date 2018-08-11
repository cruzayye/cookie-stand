

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
        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ],
        totalPrint: function(){
            var total = document.getElementById('pioneer-list');
            
            total.innerHTML += '<li>'+ 'total: ' + pioneer.totalCookies +'<li>'

        },
       toHTML: function() {
           var cookiesPerHour  = randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale) 
           pioneer.totalCookies += cookiesPerHour;
           console.log(pioneer.totalCookies);
           return '<li>' + pioneer.openHours[i] + ': ' + cookiesPerHour +  '</li>';
      },

      
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
           






/*
    

    var waterFront ={
        minCust: 6,
        maxCust: 24,
        avgSale: 1.2,
        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
       toHTML: function() {
           return '<li>' + waterFront.openHours[i] + ': ' + randomGenerator(waterFront.minCust, waterFront.maxCust, waterFront.avgSale) + '</li>';
      }
      
    } 
    
     function waterFrontList(){
        var list = document.getElementById('waterfront');
        for( i = 0; i < waterFront.openHours.length; i++){
            var perHour = (randomGenerator(waterFront.minCust, waterFront.maxCust, waterFront.avgSale));
            list.innerHTML += waterFront.toHTML();
            //console.log(pioneer.openHours[i]);
            




        } 

      } waterFrontList();



    var lloyd ={
        minCust: 11,
        maxCust: 38,
        avgSale: 1.9,
        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
       toHTML: function() {
           return '<li>' + lloyd.openHours[i] + ': ' + randomGenerator(lloyd.minCust, lloyd.maxCust, lloyd.avgSale) + '</li>';
      }
      
    } 
    
     function lloydList(){
        var list = document.getElementById('lloyd');
        for( i = 0; i < lloyd.openHours.length; i++){
            var perHour = (randomGenerator(lloyd.minCust, lloyd.maxCust, lloyd.avgSale));
            list.innerHTML += lloyd.toHTML();
            //console.log(pioneer.openHours[i]);
            




        } 

      } lloydList();


*/





        
             


       

       
        
    

        
        
    
