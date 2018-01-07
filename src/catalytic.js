// for material design button
var buttons = document.getElementsByClassName('mt-button');
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

var toggleButtons = document.getElementsByClassName('mt-toggle-button');
Array.prototype.forEach.call(toggleButtons, function (b) {
    b.addEventListener('click', createRipple);
});

var listView = document.getElementsByClassName('mt-list-item');
Array.prototype.forEach.call(listView, function (b) {
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
var radioButtons = document.getElementsByClassName('mt-radio-input');

Array.prototype.forEach.call(radioButtons, function (b) {
    if(b.childNodes[1].getAttribute("disabled")==null){
        b.addEventListener('click', createRadioRipple);
    }
});

function createRadioRipple(e) {
   if(this.getElementsByClassName('radioRippleEffect').length > 0){
//       this.removeChild(this.childNodes[2]);     
   }


    var ripple = document.createElement('span');
    ripple.classList.add('radioRippleEffect');
    this.appendChild(ripple);
}


//for material design checkbox
var checkboxButtons = document.getElementsByClassName('mt-checkbox-input');

Array.prototype.forEach.call(checkboxButtons, function (b) {
    if(b.childNodes[1].getAttribute("disabled")==null){
        b.addEventListener('click', createCheckboxRipple);
    }
});

function createCheckboxRipple(e) {
   if(this.getElementsByClassName('checkboxRippleEffect').length > 0){
//       this.removeChild(this.childNodes[2]);     
   }


    var ripple = document.createElement('span');
    ripple.classList.add('checkboxRippleEffect');
    this.appendChild(ripple);
}

//for material design switch
var switchButtons = document.getElementsByClassName('mt-switch-input');

Array.prototype.forEach.call(switchButtons, function (b) {
    if(b.childNodes[1].getAttribute("disabled")==null){
        b.addEventListener('click', createSwitchRipple);
    }
});

function createSwitchRipple(e) {
   if(this.getElementsByClassName('checkbSwitchEffect').length > 0){
//       this.removeChild(this.childNodes[2]);     
   }


    var ripple = document.createElement('span');
    ripple.classList.add('switchRippleEffect');
    this.appendChild(ripple);
}


//for material design slider
var mtSliders = document.getElementsByClassName('mt-slider');

Array.prototype.forEach.call(mtSliders, function (b) {
    sliderTag = document.createElement('span');  
    sliderTag.classList.add('mt-slider-highlight');
    b.appendChild(sliderTag);
    setInitWidth(b);
    b.addEventListener('input', setWidth);
//    b.addEventListener('click', createSliderRipple);
});
function setInitWidth(tag) {
    
    var inputTag= tag.childNodes[1];
    
    var min = parseInt(inputTag.min);
    var max = parseInt(inputTag.max);
    min=isNaN(min)?0:min;
    max=isNaN(max)?100:max;
    
    var userValue= parseInt(tag.childNodes[1].value);
    
    var hightLightWidth=(((userValue-min)*100)/(max-min));
    
    tag.getElementsByClassName('mt-slider-highlight')[0].style.width=hightLightWidth+'%';
}
function setWidth() {
    var inputTag= this.childNodes[1];
    
    var min = parseInt(inputTag.min);
    var max = parseInt(inputTag.max);
    min=isNaN(min)?0:min;
    max=isNaN(max)?100:max;
    
    var userValue= parseInt(this.childNodes[1].value);
    
    var hightLightWidth=(((userValue-min)*100)/(max-min));
    
    this.getElementsByClassName('mt-slider-highlight')[0].style.width=hightLightWidth+'%';
}
//function createSliderRipple() {  
//     if(this.getElementsByClassName('sliderRippleEffect').length > 0){
//        this.removeChild(this.childNodes[4]);      
//    }
//    var circle = document.createElement('span');
//    this.appendChild(circle);  
//    circle.classList.add('sliderRippleEffect');
//    var inputTag= this.getElementsByTagName('input')[0];
//    
//    var min = parseInt(inputTag.min);
//    var max = parseInt(inputTag.max);
//    var userValue= parseInt(this.getElementsByTagName('input')[0].value);
//    
//    var hightLightWidth=(((userValue-min)*100)/(max-min));
//     
//    this.getElementsByClassName('sliderRippleEffect')[0].style.left='calc('+hightLightWidth+'%)';
//}

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
//for material design loader
var loaders = document.getElementsByClassName('mt-loader');

Array.prototype.forEach.call(loaders, function (b) {
    b.innerHTML="<svg class='mt-circle-loader'><circle cx='20' cy='20' r='15'></svg>";
});

//for material card view
var mtCardProtoType = Object.create(HTMLElement.prototype);
var mtCard = document.registerElement('mt-card', {
    prototype: mtCardProtoType
});


//for material design side drawer menu
var mtDrawer = document.getElementsByClassName('mt-drawer');

Array.prototype.forEach.call(mtDrawer, function (b) {
   
    console.log(b.childNodes[1].childNodes[1].className);
    if(b.childNodes[1].childNodes[1].className=='mt-side-menu'){   
        b.childNodes[1].childNodes[1].childNodes[1].addEventListener('click', openDrawer);
        b.childNodes[1].childNodes[1].nextElementSibling.style.marginLeft='50px';        
    }
});
function openDrawer() {
//    document.getElementsByTagName('body')[0].style.overflow='hidden';
    document.getElementsByClassName('mt-container')[0].style.overflow='hidden';
    this.nextElementSibling.classList.add("mt-side-menu-open");
    var backdrop = document.createElement("div");
    backdrop.classList.add("mt-side-menu-backdrop");
    this.parentElement.appendChild(backdrop);
    this.parentElement.lastElementChild.addEventListener('click',closeDrawer);
}
function closeDrawer(){
    this.style.display="none";
    this.parentElement.childNodes[3].classList.remove("mt-side-menu-open");  
//    document.getElementsByTagName('body')[0].style.overflow='visible';
        document.getElementsByClassName('mt-container')[0].style.overflow='visible';

}

//for material design menu
var mtMenu = document.getElementsByClassName('mt-menu');

Array.prototype.forEach.call(mtMenu, function (b) {
   
    console.log(b.childNodes[1]);  
    b.childNodes[1].addEventListener('click', openMenu);
 
});
function openMenu() {
    this.nextElementSibling.classList.remove("mt-hide-menu-option");
    this.nextElementSibling.classList.add("mt-show-menu-option");
    document.getElementsByTagName('body')[0].addEventListener('click',closeMenu);
}
function closeMenu(e){
    if(e.target.className!="mt-icon-menu"){
        console.log('close menu');
        document.getElementsByClassName('mt-menu-options')[0].classList.remove("mt-show-menu-option");
        document.getElementsByClassName('mt-menu-options')[0].classList.add("mt-hide-menu-option");
    }     
}

//for material design tabs
var mtTabs = document.getElementsByClassName('mt-tab');
Array.prototype.forEach.call(mtTabs, function (b) {
    b.childNodes[1].childNodes[1].addEventListener('click',showData);
    
    console.log(b.childNodes[1].childNodes[1].checked);
    if(b.childNodes[1].childNodes[1].checked){
        console.log(b.childNodes[1].childNodes[1].getAttribute("data-tab"));
        var i=document.getElementsByClassName("mt-tab-container").length;
        var j=b.childNodes[1].childNodes[1].getAttribute('data-tab');
        document.getElementsByClassName("mt-tab-content")[j-1].classList.add("mt-show");
    }
});
function showData(){
    console.log(this.parentElement.parentElement);
     if(this.parentElement.parentElement.childNodes[1].childNodes[1].checked){
        console.log(this.parentElement.parentElement.childNodes[1].childNodes[1].getAttribute("data-tab"));
         
        var i=document.getElementsByClassName("mt-tab-content").length;
        var j=this.parentElement.parentElement.childNodes[1].childNodes[1].getAttribute('data-tab');
         
        for(var k=0;k<=i-1;k++){
            if(k==j-1){
                document.getElementsByClassName("mt-tab-content")[k].classList.remove("mt-hide");
                document.getElementsByClassName("mt-tab-content")[k].classList.add("mt-show");
            }
            else{
                document.getElementsByClassName("mt-tab-content")[k].classList.remove("mt-show");
                document.getElementsByClassName("mt-tab-content")[k].classList.add("mt-hide");
            }
         }
     }
}