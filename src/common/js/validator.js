const validator = {
  checkTel(rule, value, callback) {
    let re = /^1\d{10}$/
    if(value === '') {
      callback(new Error('请输入手机号码'))
    }else if(!re.test(value)) {
      callback(new Error('请输入正确手机号码'))
    }else {
      callback()
    }
  },

  confirmPass(rule, oldValue, newValue, callback) {
    if(newValue === '') {
      callback(new Error('请再次输入密码'))
    }else if(newValue !== oldValue) {
      callback(new Error('两次输入的密码不一致'))
    }else {
      callback()
    }
  },

  /**验证码检测 */
  checkCode(rule, value, callback) {
    let reg = /^[0-9a-zA-Z]*$/g
    if(value === '') {
      callback(new Error('请输入验证码'))
    }else if(!reg.test(value)) {
      callback(new Error('请输入正确的验证码'))
    }else {
      callback()
    }
  },

  /**邮箱检测 */
  checkEmail(rule, value, callback) {
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
    if(value === '') {
      callback(new Error('请输入邮箱'))
    }else if(!reg.test(value)){
      callback(new Error('请输入正确的邮箱'))
    }else {
      callback()
    }  

  }
}

export default validator