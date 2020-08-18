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
    
    items.forEach(function(e) {
        if(key == allControl) {
            e.setAttribute("style", "display : block");
        }
        else if (key == e.id) {
            e.setAttribute("style", "display : block");
        }
        else {
            e.setAttribute("style", "display : none");
        }
    })

}