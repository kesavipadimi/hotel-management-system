 var start=1;
    function get_img()
    {
        setInterval(random_img , 2000);
    }
 function random_img()
 {
      var image_data;
      if(start==1){
          image_data="slider1.jpg";
      }
       if(start==2)
      {
           image_data="9slider2.jpg";
      }
      else if(start==3)
      {
          image_data="slider3.jpg";
      }
      else if(start==4){
          image_data="1.jpg"
      }
      else if(start==5){
        image_data="2.jpg"
    }else if(start==6){
        image_data="3.jpg"
    }else if(start==7){
        image_data="4.jpg"
    }else if(start==8){
        image_data="5.jpg"
    }
     else
  {
    image_data="slider1.jpg";
    start =1
    
      }
 document.getElementById("result").src=""+image_data;
 start++;
 }
function aboutpage(){
    window.location.href = "index2.html";
}
function homepage(){
    window.location.href = "index.html";
}
function servicepage(){
    window.location.href = "index3.html";
}
function gallerypage(){
    window.location.href = "index4.html";
}
function bookingpage(){
    window.location.href = "index5.html";
}
function signup(){
    window.location.href = "index6.html";
}
function bookhotel(){
var a = document.getElementById("usr").value;
var b = document.getElementById("pws").value; 
var c = localStorage.getItem("usrNm");
var d = localStorage.getItem("upw");
 
       if (a == c && b == d)
       {
           window.location.href= "index7.html";
       }
       
       else {
           alert("User name doesnt exist! create youre Account first!");
       }
       
    }

function success(){
    alert("thx for booking! we will get back to you shortly")
}
function created(){

    var ip1 = document.getElementById('usrNm').value;
     console.log(ip1)
    var ip2 = document.getElementById("upw").value; 
    console.log(ip2)
   
    localStorage.setItem('usrNm',ip1);
    localStorage.setItem('upw',ip2);
     alert("youre Account is sucessfully created")
}
