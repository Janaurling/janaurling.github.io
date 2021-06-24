'use strict';

let lastVisit = localStorage.getItem('lastVisitStored');
let todaysDate = new Date();

if (lastVisit) { 
    lastVisit = new Date(lastVisit);
    document.querySelector('#number-of-days').innerHTML = Math.round((todaysDate - lastVisit) / 86400000);
}
else {
    document.querySelector('#gallery-visit-p').innerHTML = 'This is your first time visiting this page.';
}

localStorage.setItem('lastVisitStored', todaysDate);