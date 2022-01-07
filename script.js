const buttons = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

// buttons.forEach((btn, idx) => {
//   btn.addEventListener('click', () => {
//     faqs[idx].classList.contains('active') ? faqs[idx].classList.remove('active') : faqs[idx].classList.add('active');
//   });
// });

// Same as above but using the toggle method for classList
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  });
});