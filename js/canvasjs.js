$(document).ready( function(){
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');

    //Constantes
    const CONST = {
        RADIO : 3,
        COLOR : 'rgba(255,255,255,',
        COLOR_BORDE : 'rgba(255,255,255,',
        NUM_BURBUJAS : 1
    }

    //Objetos para eventos
    var mouse = {
        x : undefined,
        y : undefined
    };

    //Funciones útiles
    function aleatorio(max,min){
        return Math.floor(Math.random() * (max - min) + min);
    }

    window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    });

    function Circulo(x,y,speedX,speedY,radio,angulo,opacidad,color){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radio = radio;
        this.angulo = angulo;
        this.opacidad = opacidad;
        this.color = color;
        this.draw = function(){
            c.beginPath();
            c.arc(this.x,this.y, this.radio,this.angulo, Math.PI * 2, false);
            c.strokeStyle = 'transparent';
            c.stroke();
            c.shadowBlur=800;
            c.shadowColor='#fafebb';
            c.shadowOffsetX=2000;
            c.shadowOffsetY=2000;
            c.fillStyle='white';
            c.fill();
        };
    }

    var circulo_movimiento = new Circulo(500,500,0,0,100,0,1,'radial-gradient(red 5%, yellow 15%, green 60%)');

    circulo_movimiento.update = function(){
        this.x = mouse.x  - 2000;
        this.y = mouse.y  - 2000;
        circulo_movimiento.draw();
    };



    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);

        circulo_movimiento.update();

    }

    animate();
});