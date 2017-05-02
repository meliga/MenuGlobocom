/**
 * Created by diedromeliga on 19/03/17.
 */
var menuOpen = document.querySelectorAll(".navbar-main-button");
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

menuOpen.forEach(cascadeMenu);
dropdown.forEach(cascadeMenu);
dropdownMultiCollumn.forEach(cascadeMenu);
dropdownMap.forEach(mapMenu);



// TESTES
var cascadeArea = document.querySelector(".navbar-main-cascade");
cascadeArea.addEventListener('mouseover', function () {
        var width = document.querySelector(".navbar-main-cascade").style.width;
        var mapArea = document.querySelector(".navbar-main-map");
        mapArea.addEventListener('mouseover', function () {
            cascadeArea.style.width = width ;
            //console.log(cascadeArea);
        });
        console.log(width);
});
// TESTES

menuOpen.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        dropdown[0].classList.add("default-open");
    });
});

dropdown.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.classList.remove("default-open")
    });
});

var regiaoClick = function (regiao) {
    document.querySelector(".navbar-map-image").style.display = "none";
    document.querySelector("li." + regiao).style.display = "block";
    document.querySelector(".btn-back").style.display = "block";
    document.querySelector(".navbar-main-map").style.width = "200px";

}

var region = document.querySelectorAll(".region-trigger");
region.forEach(function (item) {
    item.addEventListener('click', function () {
        regiaoClick(item.id);
    });
});


var regionBack = document.querySelector(".back");
regionBack.addEventListener("click", function(){
    var regionLinks = document.querySelectorAll(".navbar-map-list-item");
    regionLinks.forEach(function (item) {
        item.style.display = "none";
    })
    document.querySelector(".navbar-map-image").style.display = "block";
    document.querySelector(".navbar-main-map").style.width = "250px";
});
