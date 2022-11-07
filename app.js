// 1a
const button1 = document.getElementById(`one`);

// 1b
button1.onclick = function(){
    alert(`You clicked the first button Congrats!`);
};

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`)
}, {once: true});

// 2b. Using addEventListener, have an alert that says "You hovered over the h3 element! Congrats!" pop up when you hover over the h3


// 3a
const form = document.querySelector(`form`);

// 3b
form.addEventListener(`submit`, () => {
    alert(form.entry.value); 
});

// BONUS

// 4a
const darkMode = document.getElementById(`dm`);

// 4b
const star = document.querySelector(`*`);
darkMode.addEventListener(`click`, () => {
    star.classList.toggle(`dark-mode`);
});

// 5a
const times = document.querySelector(`#times`);

// 5b
let num = 3;
times.addEventListener(`click`, () => {
    num--
    if (num > 0){
        alert(`You clicked the last button! Congrats!`)
    } else if (num <=0){
        alert(`OH NO! This button is NOT going to work anymore`)
        //times.remove();
        times.disabled = true;
    }
});


// When finished, create a repository in the “DOMEventsExercise” Folder as well as on GitHub. Add and commit everything in the DOMEventsExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom.