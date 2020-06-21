import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    console.log('connected Poll controller!');
    const el = document.createElement('span');
    el.id = 'output';
    el.textContent = 'Hello from Stimulus!';
    document.body.append(el);
  }

  check() {
    const el = document.querySelector('span#output');
    el.textContent = 'Stimulus is working!';

    setTimeout(() => {
      el.textContent = 'Hello from Stimulus!';
    }, 3000);
  }
}
