


$(document).ready(function(){
  $("#myfom").submit(function(event){
    var array=[];
    var total = 0;
    debugger;
     var firstQ = $("input:radio[name=selector]:checked").val();
     if(firstQ === "E[attr^=value]"){
         total += 10

     }

         // array.push(first);
      var secondQ = $("input:radio[name=checked]:checked").val();
      if(secondQ === "input-tag"){
        total += 10;

      }
         // array.push(secondQ);
      var thirdQ = $("input:radio[name=similar]:checked").val();
      if(thirdQ ==="var" ){
         total += 10;
      }
          // array.push(thirdQ)
      var fouthQ = $("input:radio[name=children]:checked").val();
      if(fouthQ ==="element" ){
         total += 10;
      }

      var fivethQ = $("input:radio[name=childrens]:checked").val();

      if(fivethQ ==="false"){
        debugger;
        total += 10;
        
      }
          // array.push(fouthQ)
          var  percentage=total*2
          if(percentage<50){
            alert("Your score is"+"."+ percentage +""+"%");
            alert("You can do better next time!");
          }if(percentage>50 && percentage < 60){
            alert("Your score is"+"."+ percentage +""+"%");
            alert("Nyc trial buddy!");
          }else{
            alert("Your score is"+"."+ percentage +""+"%");
            alert("congraturations")
          }
          // alert("Your score is"+"."+ percentage +""+"%");
    // $("#btn").show(total);

    event.preventDefault();



  })
})
