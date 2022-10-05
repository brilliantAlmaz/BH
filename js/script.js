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
				item.style.transform = `translate(${arrXCoord[0]}px, ${-speedY * 3 * window.pageYOffset/1000}px`;
			}
			else if (item.classList.contains('cloud2')){
				item.style.transform = `translate(${arrXCoord[1]}px, ${-speedY * 3 * window.pageYOffset/1000}px`;
			}
			else if (item.classList.contains('billy')){
				item.style.transform = `translate(${arrXCoord[2]}px, ${speedY * 2 * window.pageYOffset/1000}px`;
			}
		}
	})
}

//parallax title animation;
let parallaxTitle = setTimeout(() => {document.querySelector('.parallax-title').style.opacity = '1'}, 1500);

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
