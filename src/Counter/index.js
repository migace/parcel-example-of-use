import shortid from 'shortid';
import './styles.scss';

export class Counter {
  constructor(initial = 0) {
    this.counter = initial;
    this.id = shortid();
    this.element = null;
  }

  add() {
    this.counter++;
    this.update();
  }

  minus() {
    if (this.counter > 0) {
      this.counter--;
      this.update();
    }
  }

  update() {
    this.element.querySelector('p').textContent = this.counter;
  }

  render() {
    const wrapper = document.createElement('div');
    const addButton = document.createElement('button');
    const minusButton = document.createElement('button');
    const content = document.createElement('p');

    wrapper.setAttribute('id', this.id);
    wrapper.classList.add('counter-wrapper');
    addButton.textContent = '+';
    minusButton.textContent = '-';
    content.textContent = this.counter;

    addButton.addEventListener('click', () => this.add());
    minusButton.addEventListener('click', () => this.minus());

    wrapper.appendChild(minusButton);
    wrapper.appendChild(content);
    wrapper.appendChild(addButton);

    return this.element = wrapper;
  }
}
