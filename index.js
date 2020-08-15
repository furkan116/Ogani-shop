var allButtons = document.querySelectorAll('.featured-button');
console.log("Found", allButtons.length, "div which class starts with “button”.");

allButtons.forEach(function(e) {
    e.addEventListener('click', function() {
        const filter = e.getAttribute('data-filter');
        toggle(filter)
    });  
})
var test = 0;

function toggle(key) {
    const items = document.querySelectorAll('#featured-product-control')
    var test = 0;

    items.forEach(function(e) {
        if (key == e.className) {
            e.setAttribute("style", "display : block");
        }
        else {
            e.setAttribute("style", "display : none");
        }
        test = test + 1;
        console.log(e.className);
        console.log(key);
    })
    console.log(items, key);
    console.log(test);
}