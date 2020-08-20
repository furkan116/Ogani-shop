var allButtons = document.querySelectorAll('.featured-button');
let allControl = "all";

allButtons.forEach(function(e) {
    e.addEventListener('click', function() {
        const filter = e.getAttribute('data-filter');
        toggle(filter)
    });  
})

function toggle(key) {
    const items = document.querySelectorAll('#featured-product-control')
    
    allButtons.forEach(function(e){
        if(key == e.getAttribute('data-filter')) {
            e.setAttribute("style", "color : #7fad39")
        }
        else {
            e.setAttribute("style", "color : #000000")
        }
    })

    items.forEach(function(e) {
        if(key == allControl) {
            e.setAttribute("style", "display : block");
        }
        else if (key == e.className) {
            e.setAttribute("style", "display : block");
        }
        else {
            e.setAttribute("style", "display : none");
        }
    })

}