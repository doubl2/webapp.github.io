// This is a simple example of a JavaScript file.
// In a real-world application, you would use this to add interactivity to your website.

document.querySelector('nav ul').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Link clicked');
});