const form = document.getElementById('form');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Get input values
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === '') {
    // show error
    setError(firstname, 'First Name cannot be empty');
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue === '') {
    setError(lastname, 'Last Name cannot be empty');
  } else {
    setSuccess(lastname);
  }

  if (emailValue === '') {
    setError(email, 'Email cannot be empty')
  } else if (!isEmail(emailValue)) {
    setError(email, 'Looks like this is not an email')
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password cannot be empty');
  } else {
    setSuccess(password);
  }
})

function setError(input, msg) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
	
 // Add error class
  formGroup.className = 'form-group error';
  small.innerText = msg;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}