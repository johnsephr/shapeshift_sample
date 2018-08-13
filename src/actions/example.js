import { EXAMPLE } from './const';

function action(parameter) {
  return { type: EXAMPLE, parameter };
}

module.exports = action;
