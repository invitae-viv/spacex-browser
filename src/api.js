export const UPCOMING = `${__API__}/launches/upcoming`
export const PAST = `${__API__}/launches`

/*
 * Keeping things nice and simple for this example.
 *
 * We only need GET and simple queryParams.  This simple curried func can
 * basically act as our API interface.
 * */

export const performGet = uri => (params = {}) => {
  const query = new URLSearchParams(Object.entries(params))

  return fetch(`${uri}?${query}`).then(response => response.json())
}
