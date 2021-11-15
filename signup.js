const form = document.getElementById('form');
const username = document.getElementById('username');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if(phonenumberValue===''){
        setErrorFor(phonenumber,'phonenumber cannot be blank');

    
	