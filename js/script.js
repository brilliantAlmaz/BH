document.addEventListener("DOMContentLoaded", function() {
  // code...

  let trackerBool=true;
  const sliderItems =document.querySelectorAll('.bio__slider-item');
  let galleryItemWidth;
  let galleryCount=0;
  init();
  function init(){
  	let slider = document.querySelector('.bio__slider');
  	let sliderItems = document.querySelectorAll('.bio__slider-item');
  	let sliderWindowSize=0;
  	sliderItems.forEach(function(i){
  		if (window.clientWidth <=280)
  			sliderWindowSize+=i.clientWidth;
  		else
  			sliderWindowSize+=i.clientWidth+30;
  	})
  	slider.style.width = `${sliderWindowSize+100}px`;
  	galleryItemWidth = sliderItems[0].clientWidth+30;
  	slider.style.transform = `translate(-${galleryItemWidth * galleryCount})`

  }
  window.addEventListener('resize', init);
//gallery
const gallerySlider = document.querySelector('.bio__slider');

const gallerySliderNextBtn = document.querySelector('.bio__arrow-next')
const gallerySliderPrevBtn = document.querySelector('.bio__arrow-back')
const galleryTrackItems = document.querySelectorAll('.bio__track');

let galleryTrackerCount=0;

gallerySliderNextBtn.addEventListener('click', function(){
	if (galleryCount < sliderItems.length-1){
		galleryCount++;
		gallerySlider.style.transform = `translate(-${(galleryCount)*galleryItemWidth}px,0)`
	}
	else{
		gallerySlider.style.transform = `translate(-${(0)*galleryItemWidth}px,0)`
		galleryCount=0;
	}
	galleryTrackItems.forEach(function(i){
		i.classList.remove('active');
	})
})
gallerySliderPrevBtn.addEventListener('click', function(){
	console.log(galleryCount)
	if (galleryCount > 0){
		galleryCount--;
		gallerySlider.style.transform = `translate(-${(galleryCount)*galleryItemWidth}px,0)`
	}
	else{
		gallerySlider.style.transform = `translate(-${(sliderItems.length-1)*galleryItemWidth}px,0)`
		galleryCount=sliderItems.length-1;
	}
})



let xCoord=0;
let arrXCoord=[];
function parallax(event){
	this.querySelectorAll('.parallax__item').forEach(item => {
		if (!(item.classList.contains('bg'))){
			let speedX = item.getAttribute('data-speedX');
			let speedY = item.getAttribute('data-speedY');
			item.style.transform = `translate(${event.clientX * speedX/1000}px, ${event.clientY * speedY/1000}px`;
			if (item.classList.contains('cloud1')){
				arrXCoord[0] = event.clientX * speedX/1000
			}
			else if (item.classList.contains('cloud2')){
				arrXCoord[1] = event.clientX * speedX/1000
			}
			else if (item.classList.contains('billy')){
				arrXCoord[2] = event.clientX * speedX/1000
			}
		}
	})
}
function parallaxScroll(){
	//console.log(xCoord)
	this.querySelectorAll('.parallax__item').forEach(item => {
		if (!(item.classList.contains('bg'))){
			let speedY = item.getAttribute('data-speedY');
			//item.style.transform = `translate(${xCoord}px, ${speedY * window.pageYOffset/1000}px`;
			if (item.classList.contains('cloud1')){
				item.style.transform = `translate(${arrXCoord[0]}px, ${-speedY * 10 * window.pageYOffset/1000}px`;
			}
			else if (item.classList.contains('cloud2')){
				item.style.transform = `translate(${arrXCoord[1]}px, ${-speedY * 10 * window.pageYOffset/1000}px`;
			}
			else if (item.classList.contains('billy')){
				item.style.transform = `translate(${arrXCoord[2]}px, ${speedY * 5 * window.pageYOffset/1000}px`;
			}
		}
	})
}

//parallax title animation;
let parallaxTitle = setTimeout(() => {document.querySelector('.parallax-title').style.opacity = '1'}, 1500);

document.addEventListener('scroll', function(){
	//parallaxScroll();
	//console.log(document.getElementById('content'))
	if (overScreen(document.querySelector('.content'))){
		document.querySelector('.header').classList.add('changeTone')
	}
	else{		
		document.querySelector('.header').classList.remove('changeTone')
	}
	//console.log(s);
})
document.addEventListener('scroll', parallaxScroll)

document.addEventListener('mousemove', parallax);


//burger
const burger = document.querySelector('.burger');
burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	document.querySelector('.header__menu-burger').classList.toggle('active');
	document.querySelector('html').classList.toggle('lock');
})

const tipsItems = document.querySelectorAll('.tips__list li');
tipsItems.forEach(item => item.addEventListener('click', function(){
	this.classList.toggle('active');
}))

function overScreen (el) { //if the element is on the screen
	var rect = el.getBoundingClientRect();

	return (
		rect.top <= 80
		//rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		//rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		);
}

function onScreen (el) { //if the element is on the screen
	var rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
		);
}

//bio title animation
const bioTitle = document.querySelectorAll('.bio__text-title')
window.addEventListener('scroll',function(){
	bioTitle.forEach(function(i){
		if (onScreen(i)){
			//console.log('lol')
			i.classList.add('active');
		}
		else{
			i.classList.remove('active')
		}
	})
})
});