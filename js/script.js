

var slider_img = document.querySelector('.slider-img');
var assets = ['sayur1.jpg', 'sayur2.jpg', 'sayur3.jpg', 'sayur4.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = assets.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= assets.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "assets"+assets[i]);
	
}

const nama = document.getElementById('nama')
const email = document.getElementById('email')
const number = document.getElementById('number')
const massage = document.getElementById('massage')
const contactusform = document.getElementById('contactusform')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nama.value.length <= 6) {
    messages.push('must be longer than 6 characters')
  }

  if (email.value.length <= 6) {
    messages.push('email is required')
  }
  
  if (number.value.length <= 6) {
    messages.push('Phone number is required')
  }

  if (massage.length > 0) {
    e.preventDefault()
    errorElement.innerText = massage.join(', ')
  }
})


