const nav = [
  {
    //一级
    entity: {
      id: 0,
      name: "aa", 
      group: 0,
      icon: "el-icon-document",
      alias: "任务管理"
    },
    child: [
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 1,
          icon: "el-icon-message",
          alias: "任务大厅",
          link: '/taskHall?tab=0'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 1,
          icon: "el-icon-message",
          alias: "已参与任务",
          link: '/taskHall?tab=1'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 2,
          icon: "el-icon-message",
          alias: "发布任务",
          link: '/taskTable?tab=0',
          color: '#f00'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 2,
          icon: "el-icon-message",
          alias: "已发布的任务",
          link: '/taskTable?tab=1'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 2,
          icon: "el-icon-message",
          alias: "模板管理",
          link: '/taskTable?tab=2'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 2,
          icon: "el-icon-message",
          alias: "绑定店铺",
          link: '/bindAccount?tab=0',
          color: '#0078e4'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 1,
          icon: "el-icon-message",
          alias: "绑定买号",
          link: '/bindAccount?tab=0'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "信用评价",
          link: '/userRated?tab=0'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "我要申诉",
          link: '/userAppeal?tab=0'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "解绑客户端",
          link: '/removeBind?tab=0'
        },
      }
    ]
  },
  //周边服务
  {
    entity: {
      id: 0,
      name: '',
      icon: 'el-icon-place',
      alias: '周边服务'
    },
    child: [
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "设置发货地址",
          link: '/address'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "订购空包快递",
          link: '/express?tab=0',
          color: '#0078e4'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "我订购的单号",
          link: '/express?tab=1'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "双向指定单号",
          link: '/express?tab=2'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "我指定的单号",
          link: '/express?tab=3'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "领取快递单号",
          link: '/express?tab=4'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "我领取的单号",
          link: '/express?tab=5'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "购买淘宝小号",
          link: '/shopbuy?tab=0'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "购买软件卡密",
          link: '/softwarebuy?tab=0'
        },
      }
    ]
  },
  //财政中心
  {
    entity: {
      id: 0,
      name: "aa", 
      group: 0,
      icon: "el-icon-money",
      alias: "财政中心"
    }, 
    child: [
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "账户充值",
          link: '/recharge',
          color: '#f00'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "余额提现"
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "购买VIP卡",
          link: '/cardCenter'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "缴纳商保",
          link: '/userSafe'
        },
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "兑换资金",
          link: '/userExchange'
        },
      },
    ]
  },
  //财政明细
  {
    entity: {
      id: 0,
      name: "aa", 
      group: 0,
      icon: "el-icon-files",
      alias: "财务明细"
    },
    child: [
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "资金明细",
          link: '/userFinancial?tab=1'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "佣金明细",
          link: '/userFinancial?tab=2'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "发布点明细",
          link: '/userFinancial?tab=4'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "有效期明细",
          link: '/userFinancial?tab=5'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "积分明细"
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "推广明细",
          link: '/userSpread?tab=0'
        }
      },
      {
        entity: {
          id: 0,
          name: "aa", 
          group: 0,
          icon: "el-icon-message",
          alias: "提现记录",
          link: '/userFinancial?tab=2'
        }
      },
    ]
  }

]

export default nav