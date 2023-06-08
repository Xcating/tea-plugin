import setting from "./models/setting.js";
import lodash from "lodash";

// 支持锅巴
export function supportGuoba () {
    return {
      pluginInfo: {
        name: 'tea-plugin',
        title: '茶插件',
        author: '#茶亭',
        authorLink: 'https://github.com/Xcating',
        link: 'https://github.com/Xcating/YunzTea-plugin',
        isV3: true,
        isV2: false,
        description: '欧，茶真好喝',
        icon: 'bi:box-seam',
        iconColor: '#7ed99e'
      },
      // 配置项信息
    configInfo: {
        // 配置项 schemas
        schemas: [{
          field: 'TeaTest.enable',
          label: '茶测试',
          bottomHelpMessage: '茶插件测试',
          component: 'Switch'
        }],

        getConfigData () {
            return setting.merge()
          },
          // 设置配置的方法（前端点确定后调用的方法）
          setConfigData (data, { Result }) {
            let config = {}
            for (let [keyPath, value] of Object.entries(data)) {
              lodash.set(config, keyPath, value)
            }
            config = lodash.merge({}, setting.merge, config)
            setting.analysis(config)
            return Result.ok({}, '保存成功~')
          }
        }
      }
    }