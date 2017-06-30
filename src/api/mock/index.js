import Mock from 'mockjs'

import { pic } from './mock.json.js'

function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}

addToMock(pic)

export default Mock