import request from 'superagent'

const rootUrl = '/api/v1'

export const getLifts = () => {
  return request.get(rootUrl + '/lifts')
    .then(res => {
      return res.body
    })
}
