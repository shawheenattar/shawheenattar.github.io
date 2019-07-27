$(document).ready(function () {

    $(".main").onepage_scroll({
        sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease-in-out", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) {}, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
        loop: true, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    });

    setTimeout(function () {
        document.getElementById('spinner-container').classList += " hidden";
    }, 1000);

    setTimeout(function () {
        document.getElementById('scroll-indicator').classList += " active";
    }, 8000);

    var typed = new Typed("#hello", {
        strings: ['hi, i\'m <font color="deepskyblue">shawheen</font>'],
        typeSpeed: 90,
        startDelay: 2000,
        showCursor: false,
        cursorChar: '|'
    });
    var typed2 = new Typed("#welcome", {
        strings: ['welcome to my site'],
        typeSpeed: 90,
        startDelay: 5000,
        showCursor: false,
        cursorChar: '|'
    });

    // var nav = document.getElementsByClassName("onepage-pagination");
    // var listItems = nav[0].getElementsByTagName('a');
    // for (i = 0; i < listItems.length; i++) {
    //     var element = listItems[i];
    //     console.log(element);
    //     var elementID = element.id;
    //     console.log(elementID);
    //     pageName = elementID.substring(0, elementID.length - 4);
    //     console.log(pageName)
    //     $('<p id="newElement">' + pageName + '</p>').prependTo(element);
    // }
})

function scrollIndicatorClick() {
    $(".main").moveDown();
}