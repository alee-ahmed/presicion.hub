var images = ["logo1.jpg" , "logo2.jpg" , "logo3.jpg" , "logo4.jpg"]
var count = 0;
function next(){
    if(images[count]){
        document.getElementById("img").src=images[count];
        count++;
    }
    if(count == images.length){
        count=0;
    }
}
function pre(){
    if(images[count]){
        document.getElementById("img").src=images[count];
        count--;
    }
    if(count == -1){
        count =images.length-1;         
    }
}
setInterval(next,1000);