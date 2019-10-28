import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router);

/** */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/**
 * 配置
 */
const Login = () => import("@/pages/login/login")
const Register = () => import("@/pages/register/register")
const RegisterForm = () => import("@/pages/register/register-form")
const RegisterSelect = () => import("@/pages/register/register-select")
const findPassword = () => import("@/pages/find-password/find-password")
const Home = () => import("@/pages/home/home")
const User = () => import("@/pages/user/user")
const userIndex = () => import("@/pages/user-index/user-index")
const userAddress = () => import("@/pages/user-address/user-address")
const userExpress = () => import("@/pages/user-express/user-express")
const userShopBuy = () => import("@/pages/user-shop-buy/user-shop-buy")
const userSoftwareBuy = () => import("@/pages/user-software-buy/user-software-buy")
const userRecharge = () => import("@/pages/user-recharge/user-recharge")
const cardCenter = () => import("@/pages/user-card-center/user-card-center")
const userSafe = () => import("@/pages/user-safe/user-safe")
const userExchange = () => import("@/pages/user-exchange/user-exchange")
const userEditAvatar = () => import("@/pages/user-edit-avatar/user-edit-avatar")
const userInfo = () => import("@/pages/user-info/user-info")
const userAppeal = () => import("@/pages/user-appeal/user-appeal")
const userSpread = () => import("@/pages/user-spread/user-spread")
const userMail = () => import("@/pages/user-mail/user-mail")
const userFinancial = () => import("@/pages/user-financial/user-financial")
const userRated = () => import("@/pages/user-rated/user-rated")
const removeBind = () => import("@/pages/remove-bind/remove-bind")
const taskTable = () => import("@/pages/task-table/task-table")
const bindAccount = () => import("@/pages/bind-account/bind-account")

/**
 * 导出路由
 */
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    //登录
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requireAuth: false
      },
      children: [
        {
          path: '/',
          name: 'registerSelect',
          component: RegisterSelect,
          meta: {
            requireAuth: false
          },
        },
        {
          path: '/registerForm',
          name: 'registerForm',
          component: RegisterForm,
          meta: {
            requireAuth: false
          },
        }
      ]
    },
    //找回密码
    {
      path: '/findPassword',
      name: 'findPassword',
      component: findPassword,
      meta: {
        requireAuth: false
      }
    },
    //首页
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true
      },
      children: [
        //任务板块
        {
          path: '/taskTable',
          name: 'taskTable',
          component: taskTable,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/',
          name: 'user',
          component: User,
          meta: {
            requireAuth: true
          },
          children: [
            //用户首页
            {
              path: '/',
              name: 'userIndex',
              component: userIndex,
              meta: {
                requireAuth: true
              },
            },
            //用户设置地址
            {
              path: '/address',
              name: 'userAddress',
              component: userAddress,
              meta: {
                requireAuth: true
              },
            },
            //用户快递模块
            {
              path: '/express',
              name: 'userExpress',
              component: userExpress,
              meta: {
                requireAuth: true
              },
            },
            //用户账号购买
            {
              path: '/shopbuy',
              name: 'userShopBuy',
              component: userShopBuy,
              meta: {
                requireAuth: true
              },
            },
            //用户账号购买
            {
              path: '/softwarebuy',
              name: 'userSoftwareBuy',
              component: userSoftwareBuy,
              meta: {
                requireAuth: true
              },
            },
            //用户充值
            {
              path: '/recharge',
              name: 'userRecharge',
              component: userRecharge,
              meta: {
                requireAuth: true
              },
            },
            //购卡中心
            {
              path: '/cardCenter',
              name: 'cardCenter',
              component: cardCenter,
              meta: {
                requireAuth: true
              },
            },
            //商保服务
            {
              path: '/userSafe',
              name: 'userSafe',
              component: userSafe,
              meta: {
                requireAuth: true
              },
            },
            //兑换资金
            {
              path: '/userExchange',
              name: 'userExchange',
              component: userExchange,
              meta: {
                requireAuth: true
              },
            },
            //编辑头像
            {
              path: '/userEditAvatar',
              name: 'userEditAvatar',
              component: userEditAvatar,
              meta: {
                requireAuth: true
              },
            },
            //用户信息编辑
            {
              path: '/userInfo',
              name: 'userInfo',
              component: userInfo,
              meta: {
                requireAuth: true
              },
            },
            //用户申诉
            {
              path: '/userAppeal',
              name: 'userAppeal',
              component: userAppeal,
              meta: {
                requireAuth: true
              },
            },
            //用户推广
            {
              path: '/userSpread',
              name: 'userSpread',
              component: userSpread,
              meta: {
                requireAuth: true
              },
            },
            //用户信息
            {
              path: '/userMail',
              name: 'userMail',
              component: userMail,
              meta: {
                requireAuth: true
              },
            },
            //财务明细  
            {
              path: '/userFinancial',
              name: 'userFinancial',
              component: userFinancial,
              meta: {
                requireAuth: true
              },
            },
            //商户评价 
            {
              path: '/userRated',
              name: 'userRated',
              component: userRated,
              meta: {
                requireAuth: true
              },
            },
            //解除绑定
            {
              path: '/removeBind',
              name: 'removeBind',
              component: removeBind,
              meta: {
                requireAuth: true
              },
            },
            //绑定买号
            {
              path: '/bindAccount',
              name: 'bindAccount',
              component: bindAccount,
              meta: {
                requireAuth: true
              },
            }    
          ]
        }
      ]
    },
    //
  ]
})
