import { api } from '@common/js/http';
import VueCookies from 'vue-cookies'

const taskConfig = {
  
  async getTaskType(app, token=VueCookies.get('token')) {
    console.log(app)
    let res = await api.post(`${app.baseUrl}/brush/app/shopSiteList`, {}, app, {headers: {'token': token}})
    return res
  },

  async getTaskConfig(app, type, token=VueCookies.get('token')) {
    let res = await api.post(`${app.baseUrl}/brush/app/beforeReleaseInfo`, {
      shopSiteId: type
    }, app, {headers: {'token': token}})
    return res
  },

}

export default taskConfig