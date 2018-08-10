

    var randomGenerator = function(min, max, avgSale){
            var random = Math.floor(Math.random()*(max)) + min;
            var PerHourTotal = random * avgSale;
            return parseInt(PerHourTotal);
        }
    

    var pioneer ={
        minCust: 17,
        maxCust: 88,
        avgSale: 5.2,
        openHours: [ '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
       toHTML: function() {
           return '<li>' + pioneer.openHours[i] + ': ' + randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale) + '</li>';
      }
      
  } 
           
    function pioneerlist(){
      var list = document.getElementById('pioneer-list');
      for( i = 0; i < pioneer.openHours.length; i++){
          var perHour = (randomGenerator(pioneer.minCust, pioneer.maxCust, pioneer.avgSale));
          list.innerHTML += pioneer.toHTML();
          //console.log(pioneer.openHours[i]);
          




      } 
  
  }
  pioneerlist();
        
             


       

       
        
    

        
        
    
