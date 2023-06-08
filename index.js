import { Data, Version } from './components/index.js'
import fs from 'node:fs'
import chalk from 'chalk'

let ret = []

logger.info(chalk.rgb(120, 255, 200)('---------QAQ---------'))
logger.info(chalk.rgb(120, 255, 200)(`茶插件${Version.version}载入成功~qwq`))
logger.info(chalk.rgb(120, 255, 200)(`Created By 茶亭`))
logger.info(chalk.rgb(120, 255, 200)(`---------------------`));

const files = fs
  .readdirSync('./plugins/tea-plugin/apps')
  .filter((file) => file.endsWith('.js'))

  files.forEach((file) => {
    ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')
  
  if (ret[i].status != 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    logger.error(ret[i].reason)
    continue
    }
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}
export { apps }
