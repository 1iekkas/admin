import { api } from '@common/js/http';
import VueCookies from 'vue-cookies'
const global = {
  //设置headers请求
  
  /**
   * @param 
   */
  async getUserInfo(app, token=VueCookies.get('token')) {
    let res = await api.post(`${app.baseUrl}/brush/app/getMemberInfo`, {}, app, {headers: {'token': token}})
    if(!res.data.code) {
      return new Promise(resolve => {
        resolve(res.data)
      });
    }else {

    }
  },

  /**cookie读取用户信息
   * @param key => 字段名
   */
  getCookieUserInfo(key) {
    return VueCookies.get('userInfo')[key]
  },

  /**
   * 刷新验证码
   * @param app => 实例
   */
  getCode(app) {
    app.codeId = new Date().getTime()
    app.codeSrc = `${app.baseUrl}/brush/captcha.jpg?uuid=${app.codeId}`
  },
  
  /**获取普通手机验证码 */
  async getSmsCode(app, sendType=1, token=VueCookies.get('token')) {
    let res = await api.post(`${app.baseUrl}/brush/app/sendSms`, {
      sendType: sendType,
      mobile: app.form.telphone
    }, app, {headers: {'token': token}})
    return res
  },

  /**获取找回密码手机验证码 */
  async getFindPwdCode(app, params, token=VueCookies.get('token')) {
    let res = await api.post(`${app.baseUrl}/brush/app/forgetPwd`, {
      forgetType: params.radio,
      userName: params.name,
      uuId: params.codeId,
      captcha: params.code
    }, app, {headers: {'token': token}})
    return res
  },

  /**register */
  
}

export default global