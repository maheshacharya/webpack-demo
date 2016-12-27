var styles = require('./style/globalStyle.css');
var messages = require("./messages");
//import Button from './button';
// import Image from './image';
// import sm from './small-image';
//
// var newMessage  = () => (`
// <p>
//
// ${messages.hi}  ${messages.event}
// ${Image}
// ${sm}
// </p>
// `);

//import {multiply} from './mathStuff';
//var newMessage = () => (multiply(5,68));
//var newMessage = () => (Button.button);
// var newMessage = () => (`
//
//     <div class="${styles.box}">
//     DEV: ${DEVELOPMENT.toString()}<br>
//     PROD: ${PRODUCTION.toString()}<br>
//     ${messages.hi} ${messages.event}
//     </div>
// `);


var app = document.getElementById("app");
app.innerHTML = `
    <div id="menu">
        <button id="loadPage1">Load Page #1</button>
        <button id="loadPage2">Load Page #2</button>
    </div>
    <div id="content">
        <h1>Home</h1>
    </div>
`;

document.getElementById('loadPage1').addEventListener('click', () => {
    "use strict";
    System.import('./page1')
        .then(pageModule =>{
            document.getElementById('content').innerHTML = pageModule.default;
        })
});

document.getElementById('loadPage2').addEventListener('click', () => {
    "use strict";
    System.import('./page2')
        .then(pageModule =>{
            document.getElementById('content').innerHTML = pageModule.default;
        })
});


if (DEVELOPMENT) {
    if (module.hot) {
        module.hot.accept();
    }
}

