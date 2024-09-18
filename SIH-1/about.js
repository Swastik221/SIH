document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.more-info');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.getAttribute('data-info');
      const moreText = document.getElementById(`${section}-more`);

      if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        button.textContent = "Read Less";
      } else {
        moreText.classList.add('hidden');
        button.textContent = "Read More";
      }
    });
  });
});