var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let cost = document.getElementById('cost');
let month = document.getElementById("month");
let year = document.getElementById("year");
let billing = document.getElementById("billing");
let monthly = document.getElementsByClassName("monthly");


 billing.addEventListener("click", billingFunction);

 output.innerHTML = slider.value;

 function billingFunction(){
  if(month.style.display == "") {
    
    month.style.display =  "none";
    year.style.display = "";
      
    slider.oninput  = function yearly() {
      output.innerHTML = this.value;
      
      if(this.value == 10){
        cost.innerHTML = (((8*12)-(8*25/100))+'.00');
        document.getElementById("kb").style.display ="";
      }else if  (this.value > 11 & this.value <= 50 ){
        cost.innerHTML = (((12*12)-(12*25/100))+'.00');
        document.getElementById("kb").style.display ="";
      }else if  (this.value > 50 & this.value <= 100 ){
        cost.innerHTML = (((16*12)-(16*25/100))+'.00');
        document.getElementById("kb").style.display ="";
      }else if  (this.value > 100 & this.value <= 500){
        cost.innerHTML = (((24*12)-(24*25/100))+'.00');
        document.getElementById("kb").style.display ="";
      }else if 
        (this.value == 1000){
        output.innerHTML = "1M";
        document.getElementById("kb").style.display ="none";
      }
      else {
      cost.innerHTML = (((36*12)-(36*25/100))+'.00');
      }
    }
  } else {
      year.style.display = "none";
      month.style.display = "";
    
    slider.oninput  = function monthly() {
    output.innerHTML = this.value;
  
    if(this.value == 10){
      cost.innerHTML = '8.00';
      document.getElementById("kb").style.display ="";
    }else if  (this.value > 11 &  this.value <= 50 ){
      cost.innerHTML = '12.00';
      document.getElementById("kb").style.display ="";
    }else if  (this.value > 50 & this.value <= 100 ){
      cost.innerHTML = '16.00';
      document.getElementById("kb").style.display ="";
    }else if  (this.value > 100 & this.value <= 500){
      cost.innerHTML = '24.00';
      document.getElementById("kb").style.display ="";
    }else if 
      (this.value == 1000){
      output.innerHTML = "1M";
      document.getElementById("kb").style.display ="none";
    }else {
      cost.innerHTML = '36.00';
    }
  }
 }  
}

$('input[type=range]').on('input', function(e){
  let min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');