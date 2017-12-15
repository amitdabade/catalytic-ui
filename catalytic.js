// for material design button
var buttons = document.getElementsByClassName('mt-button');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

function createRipple (e) {
    if(this.getElementsByClassName('rippleEffect').length > 1){
//        if(this.childNodes.length>1){
            this.removeChild(this.childNodes[2]);
//        }
    }
    
    var circle = document.createElement('span');
    this.appendChild(circle);

    var d = Math.max(this.offsetWidth, this.offsetHeight);

    circle.style.width = d + 'px';
    circle.style.height = d + 'px';

    var rect = this.getBoundingClientRect();
    
    circle.style.left = e.clientX - rect.left -d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';

    circle.classList.add('rippleEffect');
}

//for material design radio button
var buttons = document.getElementsByClassName('mt-radio');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createCircleRipple);
});

function createCircleRipple() {
    if(this.nextElementSibling.getElementsByClassName('circleRippleEffect').length > 0){
        this.nextElementSibling.removeChild(this.nextElementSibling.childNodes[1]);      
    }
    
    var circle = document.createElement('span');
    this.nextElementSibling.appendChild(circle);
    
    circle.classList.add('circleRippleEffect');
}


//for material design checkbox
var buttons = document.getElementsByClassName('mt-checkbox');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createCheckboxRipple);
});

function createCheckboxRipple() {
    if(this.nextElementSibling.getElementsByClassName('checkboxRippleEffect').length > 0){
        this.nextElementSibling.removeChild(this.nextElementSibling.childNodes[1]);      
    }
    
    var circle = document.createElement('span');
    this.nextElementSibling.appendChild(circle);
    
    circle.classList.add('checkboxRippleEffect');
}

//for material design switch
var buttons = document.getElementsByClassName('mt-switch-wrapper');

Array.prototype.forEach.call(buttons, function (b) {
   
    b.addEventListener('click', createSwitchRipple);
});

function createSwitchRipple() {
    if(this.getElementsByClassName('switchRippleEffect').length > 1){
        this.removeChild(this.childNodes[2]);      
    }
    
    var circle = document.createElement('span');
    this.appendChild(circle);
    
    circle.classList.add('switchRippleEffect');
}

//for material design slider
var buttons = document.getElementsByClassName('mt-slider');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createSliderRipple);
});

function createSliderRipple() {
//    if(this.getElementsByClassName('sliderRippleEffect').length > 0){
//        this.removeChild(this.childNodes[1]);      
//    }
//    
//    var circle = document.createElement('span');
//    this.nextElementSibling.appendChild(circle);
//    
//    circle.classList.add('sliderRippleEffect');
}

//for material design input
var input = document.getElementsByClassName('mt-input');
Array.prototype.forEach.call(input, function (b) {
    if(b.value.length==0){
        b.nextElementSibling.classList.remove("hasValue");
    }else{
        b.nextElementSibling.classList.add("hasValue");
    }
    b.addEventListener('blur', isInputEmpty);    
});

function isInputEmpty(){
    if(this.value.length==0){
        this.nextElementSibling.classList.remove("hasValue");
    }else{
        this.nextElementSibling.classList.add("hasValue");
    }
    
}
//for material design input
var loaders = document.getElementsByClassName('mt-loader');

Array.prototype.forEach.call(loaders, function (b) {
    b.innerHTML="<svg class='mt-circle-loader'><circle cx='20' cy='20' r='15'></svg>";
});


