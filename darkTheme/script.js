// Method 1: Directly changing styles using JavaScript
// This method toggles the background color and text color manually.
const heading = document.getElementById('heading');
const btn = document.getElementById('btn');
let dark = false;

btn.addEventListener('click', () => {
    if (!dark) {
        document.body.style.backgroundColor = 'black';
        heading.style.color = 'white';
        dark = true;
    } else {
        document.body.style.backgroundColor = 'white';
        heading.style.color = 'black';
        dark = false;
    }
});

// Method 2: Using CSS class toggle
// This method assumes there is a `.darktheme` class in CSS that handles the dark theme styles.

// btn.addEventListener('click', () => {
//     document.body.classList.toggle('darktheme');
// });

// Method 3: Adding and removing a class manually
// Similar to Method 2, but explicitly adds and removes the class instead of toggling it.

// btn.addEventListener('click', () => {
//     if (!dark) {
//         document.body.classList.add('darktheme');
//         dark = true;
//     } else {
//         document.body.classList.remove('darktheme');
//         dark = false;
//     }
// });
