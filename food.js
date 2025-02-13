function showModal(id){
    document.getElementById(id).style.display = 'block';
}
function closeModal(id){
    document.getElementById(id).style.display = 'none';
}
window.onclick = function(event){
    if (event.target.classList.contains('modal')){
        event.target.style.display = 'none';
    }
}
document.querySelectorAll('nav ul li a').forEach(anchor =>{
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    if (name && email && message){
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        this.reset();
    } 
    else{
        alert('Please fill out all fields before submitting.');
    }
});
document.getElementById('signin-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Sign In successful!');
    closeModal('signin-modal');
});
document.getElementById('signup-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Sign Up successful!');
    closeModal('signup-modal');
});
