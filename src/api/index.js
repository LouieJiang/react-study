import { httpGet, httpPost } from '../uitls/http'
import base from './base'

const api = {
  getChangpin() {
    return httpGet(base.ownUrl + base.chengpin)
  },
  getLogin(params) {
    return httpPost(base.ownUrl + base.login, params)
  },
}

export default api
