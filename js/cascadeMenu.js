/**
 * Created by diedromeliga on 19/03/17.
 */
var dropdown = document.querySelectorAll(".dropdown");
var dropdownMultiCollumn = document.querySelectorAll(".dropdown-multi-column");
var dropdownMap = document.querySelectorAll(".dropdown-map");

var getContextMenuWidth = function(contextMenu) {

    var contextMenuWidth = contextMenu.style.width;

    if (!contextMenuWidth) {
        contextMenuWidth = 200;
    }

    return parseInt(contextMenuWidth, 10);
}

var expandMenu = function(contextMenu) {
    currentWidth = getContextMenuWidth(contextMenu) + 200;
    contextMenu.style.width = currentWidth.toString() + "px";
};

var retractMenu = function(contextMenu) {
    currentWidth = getContextMenuWidth(contextMenu) - 200;
    contextMenu.style.width = currentWidth.toString() + "px";
}

var adcionarEventosMouse = function (item, menu) {

    item.addEventListener("mouseover", function(){
        expandMenu(menu);
    });

    item.addEventListener("mouseout", function(){
        retractMenu(menu);
    });
};

var cascadeMenu = function (item) {
    adcionarEventosMouse(item, document.querySelector(".navbar-main-cascade"));
};

var mapMenu = function (item) {
    adcionarEventosMouse(item, document.querySelector(".navbar-main-map"))
};

dropdown.forEach(cascadeMenu);
dropdownMultiCollumn.forEach(cascadeMenu);
dropdownMap.forEach(mapMenu);



var region = document.querySelector("#sul");
var regionClick = function () {
    document.querySelector(".navbar-map-image").style.display = "none";
    document.querySelector(".sul").style.display = "block";
}

region.addEventListener('click', function () {
    regionClick();
})


var regionBack = document.querySelector(".back");
var regionBackClick = function () {
    document.querySelector(".navbar-map-image").style.display = "block";
    document.querySelector(".navbar-map-list-item").style.display = "none";
}

regionBack.addEventListener('click', function () {
    regionBackClick();
})