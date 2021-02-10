let value = document.getElementById('price-value');
let views = document.getElementById('number-pageviews');
let dollars = document.getElementById('number-price');

let no_of_views = [10, 50, 100, 500, 1]

let discount = document.getElementById('checkbox-discount');
let determine = function(){
    no_of_views = [10, 50, 100, 500, 1];
    
    //Discount Calculator
    if(discount.checked){
        for(var i = 0; i < no_of_views.length; i++){
            no_of_views[i] -= no_of_views[i] * 0.25;
        }
    }
    /* Listing out the values to be displayed when the slider
    moved accordingly */
    switch(slidebar.value){
        case('20'):
            pageviews.innerText = no_of_views[0]+'K';
            price.innerText = "$8.00";
            break;

        case('40'):
            pageviews.innerText = no_of_views[1]+'K';
            price.innerText = "$12.00";
            break;

        case('60'):
            pageviews.innerText = no_of_views[2]+'K';
            price.innerText = "$16.00";
            break;

        case('80'):
            pageviews.innerText = no_of_views[3]+'K';
            price.innerText = "$24.00";
            break;

        case('100'):
            pageviews.innerText = no_of_views[4]+'M';
            if(discount.checked){
                pageviews.innerText = "750K";
            }
            price.innerText = "$36.00";
            break;
    }
}

determine();

/* Adding Event listeners to slidebar and discount checkbox*/
slidebar.addEventListener('mousemove', function(){
    determine();
});

slidebar.addEventListener('touchmove', function(){
    determine();
});

slidebar.addEventListener('change', function(){
    determine();
});

discount.addEventListener('click', function(){
    determine();
});

if(window.innerWidth < 480){
    let pcnt_discount = document.getElementById('discount');
    pcnt_discount.innerText = '-25%';
}
