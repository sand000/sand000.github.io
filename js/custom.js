// javascript Animate onscroll Start
    $(document).ready(function () {
    if (screen.width > 1024) {
    AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    });
    }
    });
(new IntersectionObserver(function(e,o){
    if (e[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class','stuck');
    };
})).observe(document.querySelector('.trigger'));


(function () {
    emailjs.init("gnUT8YhD8YBqfnlgL");
})();

function sendMail(e) {
    e.preventDefault();
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

    // console.log(fullName)
        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        emailjs.send('service_w1xbnhe', 'template_p650tv8', contactParams).then(function (res) {})
}