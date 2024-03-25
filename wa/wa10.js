1. //COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

//It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

//Willy the Goblin
//Big Daddy
//Father Christmas

//the soup kitchen
//Disneyland
//the White House

//spontaneously combusted
//melted into a puddle on the sidewalk
//turned into a slug and crawled away
const  storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
const insertX = ['Drake', 'Adele', 'Beyonce']
const insertY = ['the gym','the Eiffel Tower','the Grammys']
const insertZ = ['turned into a mouse','flattened (like a pancake)','morphed into a fish and flopped around']

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem).replace(':inserty:',yItem).replace(':insertz:',zItem).replace(':insertx:',xItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('',name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + 'stone';
    const temperature =  Math.round((94-32)*(5/9)) + 'centigrade';

    newStory = newStory.replace('300 pounds',weight);
    newStory = newStory.replace('94 fahrenheit');


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}