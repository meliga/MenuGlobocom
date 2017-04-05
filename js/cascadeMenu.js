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

var adcionarEventosMouse = function (item) {
    var cascadeMenu = document.querySelector(".navbar-main-cascade");

    item.addEventListener("mouseover", function(){
        expandMenu(cascadeMenu);
    });

    item.addEventListener("mouseout", function(){
        retractMenu(cascadeMenu);
    });

};

var adcionarEventosMouseMap = function (item) {
    var mapMenu = document.querySelector(".navbar-main-map");

    item.addEventListener("mouseover", function(){
        expandMenu(mapMenu);
    });

    item.addEventListener("mouseout", function(){
        retractMenu(mapMenu);
    });

};


dropdown.forEach(adcionarEventosMouse);
dropdownMultiCollumn.forEach(adcionarEventosMouse);
dropdownMap.forEach(adcionarEventosMouseMap);
