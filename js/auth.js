//sign up
const signupForm = document.querySelector('#signup')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);
})