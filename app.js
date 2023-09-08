const mainElement = document.querySelector('.main');
const buttonsContainer = mainElement.querySelector('.main__buttons');
const buttons = mainElement.querySelectorAll('.button');
const buttonsContent = ['Место 1', 'Место 2', 'Место 3', 'Место 4', 'Место 5', 'Место 6', 'Место 7', 'Место 8', 'Место 9', 'Место 10'];

const createText = (id) => {
  const node = document.createElement('span');
  node.classList.add('button__text');
  node.textContent = buttonsContent[id];
  return node;
}

const mainOnClick = (e) => {
  const target = e.target;
  const button = target.closest('.button');
  if (button) {
    if (button.classList.contains('active')) {
      const text = button.querySelector('.button__text');
      text.remove();
      button.classList.remove('active');
    } else {
      const activeButtonId = [...buttons].indexOf(button);
      const text = createText(activeButtonId);
      button.classList.add('active');
      button.append(text);
    }
  }

  if (target === buttonsContainer || target === mainElement) {
    [...buttons].forEach((button) => {
      if (button.classList.contains('active')) {
        const text = button.querySelector('.button__text');
        text.remove();
        button.classList.remove('active');
      }
    });
  }
};

mainElement.addEventListener('click', mainOnClick);
