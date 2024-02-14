console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});
const text = document.body.innerText;


if (text.includes("login") || text.includes("signup")) {
    console.log("Text contains 'login' or 'signup'");
     
     const passwordRegex = /^\d{4}$/;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
     if (passwordRegex.test(text) && emailRegex.test(text)) {
         console.log("Valid password and email format found");
     } else {
        console.log("Invalid password or email format");
     }
 } else {
    console.log("Text does not contain 'login' or 'signup'");
}

function storeData() {
    let uname = document.getElementById('name').value;
    let email = document.getElementById('mail').value;

	if (uname.trim() === '' && email.trim() === '') {
		window.location.href="proj.html" ;
		return;
	  }
	
	  
	
    localStorage.setItem('name', uname);
    localStorage.setItem('email', email);

	window.location.href="shop.html" ;

}
// storeData();