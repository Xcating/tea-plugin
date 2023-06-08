/**
* 请注意，系统不会读取help_default.js ！！！！
* 【请勿直接修改此文件，且可能导致后续冲突】
*
* 如需自定义可将文件【复制】一份，并重命名为 help.js
*
* */

export const helpCfg = {
  title: '茶帮助',
  subTitle: 'Yunzai-Bot & tea-Plugin',
  columnCount: 3,
  colWidth: 265,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#ceb78b',
    descColor: '#eee',
    contBgColor: 'rgba(6, 21, 31, .5)',
    contBgBlur: 3,
    headerBgColor: 'rgba(6, 21, 31, .4)',
    rowBgColor1: 'rgba(6, 21, 31, .2)',
    rowBgColor2: 'rgba(6, 21, 31, .35)'
  }
}

export const helpList = [{
  group: '茶命令',
  list: [{
    icon: 61,
    title: '#茶帮助',
    desc: '显示本帮助图'
  }, {
    icon: 63,
    title: '#茶版本',
    desc: '查看茶版本更新日志'
  }, {
    icon: 66,
    title: '空位',
    desc: '空位'
  }, {
    icon: 64,
    title: '退群自动拉群黑',
    desc: '仅供测试'
  }]
}, {
  group: '管理命令，仅管理员可用',
  auth: 'master',
  list: [{
    icon: 85,
    title: '#茶(强制)更新',
    desc: '更新茶插件'
  }]
}]
