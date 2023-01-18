import { camelCase } from 'lodash';
import './style.css';
import './style.scss';

console.log(camelCase('hello world'));
const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();
