$(document).ready( function(){
    var image_array= [
        'url("./images/fondos/fachada.jpg',
        'url("./images/fondos/img4.jpg',
        'url("./images/fondos/bombilla.jpg',
        'url("./images/fondos/img6.jpg',
        'url("./images/fondos/img7.jpg'];
    var image_index = 0;
    var change_image = function(){
        document.getElementById("first").style.backgroundImage = image_array[image_index];
        image_index++;
        if (image_index >= image_array.length){
            image_index = 0;
        }
    };
    setInterval(change_image, 10000);
});