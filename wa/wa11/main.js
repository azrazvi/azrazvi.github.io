const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */
const filenames = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg']
const alts   = {
'1jpg' : 'a',
'2jpg' : 'e',
'3jpg' : 'i',
'4jpg' : 'o',
'5jpg' : 'u',

    /*
'1jpg' : 'a',
'2jpg' : 'e',
'3jpg' : 'i',
'4jpg' : 'o',
'5jpg' : 'u',
*/
}

/* Looping through images */
for (const i of filenames) {
    // construct src ath and alt text
    const nalt = alts[i];
    const nsrc = `images/${i}`;

// update image for thumbnail
const newImage = document.createElement('img');
newImage.setAttribute('src',nsrc);
newImage.setAttribute('alt',nalt);
thumbBar.appendChild(newImage);
//change displayed image when thumbnail is clicked
newImage.addEventListener('click',() => {
    displayedImage.setAttribute('src',nsrc);
    displayedImage.setAttribute('alt',nalt);

})
}



const newImage = document.createElement('img');
newImage.setAttribute('src', nsrc);
newImage.setAttribute('alt', nalt);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=>{
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'light')
        bt. textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb (0 0 0 / 50%)'
    }
else {
    btn.setAttribute('class', 'dark')
    bt. textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb (0 0 0 / 0%)'
}
})
