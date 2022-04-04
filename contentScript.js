let wrap = document.getElementById("wrap");
let canvas = document.getElementById("map_canvas");
let searchButton = document.getElementById("uxSearchFromHere");
let content = document.getElementById("content");
let mapBox = document.getElementById("categoryfilter").parentElement.parentElement;

// display the map before the list of search results
content.before(mapBox);

// better search button
searchButton.innerHTML = "&#x21bb;";
searchButton.title = "Search from here";
canvas.appendChild(searchButton);
