import { Counter } from './Counter';

const APP_ID = 'app';

const parent = document.getElementById(APP_ID);
const counter = new Counter();

parent.appendChild(counter.render());
