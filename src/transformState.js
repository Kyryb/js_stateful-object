'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'clear':
        clearObject(state);
        break;
      case 'removeProperties':
        removeProperties(state, keysToRemove);
        break;
      default:
        return 'Uknown property was found';
    }
  }
}

function clearObject(target) {
  for (const key in target) {
    delete target[key];
  }
}

function removeProperties(target, properties) {
  for (const key of properties) {
    delete target[key];
  }
}

module.exports = transformState;
