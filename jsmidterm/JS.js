

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const button1 = document.querySelector("button1");
        button1.addEventListener('click', buttonClick);

        
        //when you click the button, the value in the box increases by x amount
        function buttonClick() {
          let currentValue = 0;

          const increment = random(0,99);

          let newValue = currentValue + increment;


          document.getElementById('inc').value = newValue;
          var sound = document.getElementById('audio1');
          sound.play();
  
        }

        function buttonClick1() {
          let currentValue = 0;

          const increment = random(-99,0);

          let newValue = currentValue + increment;


          document.getElementById('inc').value = newValue;
          var sound = document.getElementById('audio');
          sound.play();
  
        }

        function buttonClick2(){
          let currentValue = 0

          const increment = random(0,1)

          let newValue = currentValue + increment;


          document.getElementById('inc').value = newValue;
          var sound = document.getElementById('audio');
          sound.play();
  
  
        }

