import request from 'superagent'

const rootUrl = '/api/v1'

export const getLifts = () => {
  return request.get(rootUrl + '/lifts')
    .then(res => {
      return res.body
    })
}

export const addLift = (lift) => {
  return request.post(rootUrl + '/lifts/add')
    .send(lift)
    .then(res => res.body)
    .catch(err => console.log(err))
}

export const delLift = (lift) => {
  return request.del(rootUrl + '/lifts/delete')
    .send(lift)
    .then(res => res.body)
    .catch(err => console.log(err))
}
