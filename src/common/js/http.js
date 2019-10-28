import Axios from "axios";
const qs = require("qs");
const api = {
  /**
   * @param url => 请求地址
   * @param data => 参数
   * @param el => vue实例
   * @param header => 请求头
   */

  /**get */
  async get(url, data, el) {
    try {
      let res = await Axios.get(url, { params: data });
      return new Promise(resolve => {
        resolve(res)
      });
    } catch (error) {
      el.$alert(
        `${error}`,
        `接口请求失败`
      );
    }
  },

  /**post */
  async post(url, data, el, header) {
    try {
      let res = await Axios.post(url, data, header);
      return new Promise(resolve => {
        resolve(res);
      });
    } catch (error) {
      el.$alert(
        `${error}`,
        `接口请求失败`
      );
    }
  },

  /**delete */
  async delete(url, data, el) {
    try {
      let res = await Axios.delete(url, { data: data });
      return new Promise(resolve => {
        resolve(res);
      });
    } catch (error) {
      el.$alert(
        `${error}`,
        `接口请求失败`
      );
    }
  },

  /**put */
  async put(url, data, el) {
    try {
      let res = await Axios.put(url, data);
      return new Promise(resolve => {
        resolve(res);
      });
    } catch (error) {
      el.$alert(
        `${error}`,
        `接口请求失败`
      );
    }
  }
};

export { api };
