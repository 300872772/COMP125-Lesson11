/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date July 11, 2016
 * 
 * StudentID: 300818557
 * 
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    var xhrAddressBook;
    var xhrNavData;
    var xhrFooter;

    // we can use a named function instead of an anonymous function
    function readData() {
           // data loaded                everything is ok
        if((xhrAddressBook.readyState === 4) && (xhrAddressBook.status === 200)) {

            var addressbook = JSON.parse(xhrAddressBook.responseText);
            var contacts = addressbook.contacts;

            contacts.forEach(function(contact) {
                console.log(contact);
            }, this);
            
           }
    }

function readNavData() {
    
           // data loaded                everything is ok
        if((xhrNavData.readyState === 4) && (xhrNavData.status === 200)) {
         //create a ref to the HTMLElement       
        var mainNav=document.getElementById("mainNav");
        mainNav.innerHTML=xhrNavData.responseText;
            
            setActivePage();
           }
}


    function readAddressBook()
    {
       xhrAddressBook = new XMLHttpRequest(); // step 1 - create xhr object
   
       xhrAddressBook.open("GET","Scripts/addressbook.json",true); // step 2 - open request

       xhrAddressBook.send(null); // step 3 - send request

       xhrAddressBook.addEventListener("readystatechange", readData); // step 4

    }

function readFooterData() {
    
           // data loaded                everything is ok
        if((xhrFooter.readyState === 4) && (xhrFooter.status === 200)) {
         //create a ref to the HTMLElement       
        var footer=document.getElementById("footer");
        footer.innerHTML=xhrFooter.responseText;
            
            
           }
}

function setActivePage() {
    switch(document.title){

case "Home":
document.getElementById("index").setAttribute("class","active");
break;
case "About Me":
document.getElementById("about").setAttribute("class","active");
break;
case "Projects":
document.getElementById("projects").setAttribute("class","active");
break;
case "Contact ME":
document.getElementById("contatc").setAttribute("class","active");
break;

    }
}

    function loadMyNavBar()
    {
       xhrNavData = new XMLHttpRequest(); // step 1 - create xhr object
   
       xhrNavData.open("GET","Partials/navbar.html",true); // step 2 - open request

       xhrNavData.send(null); // step 3 - send request

       xhrNavData.addEventListener("readystatechange", readNavData); // step 4

    }

    function loadFooterData()
    {
       xhrFooter = new XMLHttpRequest(); // step 1 - create xhr object
   
       xhrFooter.open("GET","Partials/navbar.html",true); // step 2 - open request

       xhrFooter.send(null); // step 3 - send request

       xhrFooter.addEventListener("readystatechange", readNavData); // step 4

    }


    // app entry function
    function init() {
    loadMyNavBar();
    readAddressBook();
    loadFooter();

    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();