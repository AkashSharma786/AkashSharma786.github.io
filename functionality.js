const screenWidth = window.innerWidth;
const navBar = document.getElementById('navBar');
if (screenWidth < 600) {
    console.log("mobile view");
    navBar.insertAdjacentHTML('afterbegin',
        `<div class="navMenu">
                <span ></span>
                <span ></span>
                <span ></span>
         </div>`
    );

}
const navMenu = document.querySelector('.navMenu');
navMenu?.addEventListener('click', () => {
    navBar.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const button = document.querySelector('.contactButton');
const nameInput = document.getElementById('nameInput');
const subjectInput = document.getElementById('subjectInput');
const messageInput = document.getElementById('messageInput');
const nameRegex = /^[a-zA-Z\s]{2,}$/;
const subjectRegex = /^[a-zA-Z0-9\s]{2,}$/;
const messageRegex = /^.{5,}$/;





button.addEventListener('click', () => {
    const name = nameInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;
    if (!nameRegex.test(name)) {
        alert("Name should be at least Three Characters");
        return;
    }
    if (!subjectRegex.test(subject)) {
        alert("Subject should be at least Two Characters and spaces");
        return;
    }


    if (!messageRegex.test(message)) {
        alert("Message should bes at least Five Characters");
        return;
    }

    console.log(name, subject, message);
    fetch('https://my-mailer-237487941799.asia-south1.run.app/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, subject, message })
        })
        .then(
            response => response.json()
        )
        .then(
            data => alert(data.message)
        )
        .catch(
            error => {
                console.error("Error:", error);
                alert("An error occurred.");
            }
        );
});
