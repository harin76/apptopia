const tms = require('./tms')

const apps = [
  tms,
  {_id: 2, name: 'crm', models: [], associations: []}
]

const list = (query, projection, page, limit, sort) => {
  return new Promise((resolve, reject) => resolve(apps))
}

export default {
  list
}
