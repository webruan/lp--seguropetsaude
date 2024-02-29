// MODAL
const button = document.getElementById('modal-btn');
const close = document.getElementById('close');

button.addEventListener('click', () => {
    document.getElementById('modal-box').style.display = "block";
    document.getElementById('image').style.opacity = "1";
});

close.addEventListener('click', () => {
    document.getElementById('modal-box').style.display = "none";
    document.getElementById('image').style.opacity = ".5";
});

let item = document.querySelectorAll('.item-qa');
let icon = document.querySelectorAll('.icon-q');

item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        item.forEach(a => a.classList.remove('open'));
        item[index].classList !== 'open'
        ? item[index].classList.add('open')
        : item[index].classList.remove('open');
    });
});

item.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        icon.forEach(a => a.innerText = '+');
        icon[index].innerText == '+'
        ? icon[index].innerText = '-'
        : icon[index].innerText = '+';
    });
});

// NAV FAQs
let faqLinks = document.querySelectorAll('.faq-tab-item');

faqLinks.forEach((thisButton, index) => {
    thisButton.addEventListener('click', () => {
        faqLinks.forEach(a => a.classList.remove('selected'));
        faqLinks[index].classList !== 'selected'
        ? faqLinks[index].classList.add('selected')
        : faqLinks[index].classList.remove('selected');
    });
});

function openFaq(faqName) {
    let i;
    let el = document.getElementsByClassName("_faq");
    
    for (i = 0; i < el.length; i++) {
        el[i].style.display = "none";  
    };

    document.getElementById(faqName).style.display = "flex";  
};

// NAV TABLE PLANS
function openPlan(planName) {
    let i;
    let x = document.getElementsByClassName("column plan");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    document.getElementById(planName).style.display = "flex";  

    let buttons = document.querySelectorAll('.tab-item');

    buttons.forEach((thisButton, index) => {
        thisButton.addEventListener('click', () => {
            buttons.forEach(a => a.classList.remove('opened'));
            buttons[index].classList !== 'opened'
            ? buttons[index].classList.add('opened')
            : buttons[index].classList.remove('opened');
        });
    });
};
