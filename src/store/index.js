import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const logger = createLogger()
const middlewares = [thunk]

export const storeFactory = (initialState = {}, /* istanbul ignore next */ debug = __DEV__) => {
  /* eslint-disable indent */
  const store = (debug
    ? compose(
        applyMiddleware(...middlewares),
        applyMiddleware(logger),
        window.devToolsExtension
          ? /* istanbul ignore next */
            window.devToolsExtension()
          : f => f,
      )
    : applyMiddleware(...middlewares))(createStore)(reducers, initialState)
  /* eslint-enable indent */

  /* istanbul ignore if */
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line
      const nextReducers = require('../reducers/index')
      store.replaceReducer(nextReducers)
    })
  }

  return store
}

export default storeFactory
