import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    console.log('connected Poll controller!');
    const el = document.createElement('span');
    el.textContent = 'Hello from Stimulus!';
    document.body.append(el);
  }
}
