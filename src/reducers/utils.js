/*
 * It would be better to place this in index.js, however jest has an issue.
 * Seems to be a circular reference perhaps.
 */

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state
  }
}
