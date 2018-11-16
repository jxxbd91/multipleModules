const yargs = require('yargs')
const path = require('path')

// const result = yargs.parse(['-x', 1, '-y', 2])

// console.log(result)

// console.log(yargs.argv)
/* 
const argv = yargs
  .array('foo')
  .argv

  console.log(argv) */

const args = yargs.array('modules').argv

const modules = args.modules

const entires = function () {

  // 模块主目录
  const BASE_PATH = path.resolve(__dirname, '../src/modules/')

  // 最终的返回结果
  let entriesMap = {}

  // 得到所有模块的主入口
  modules.forEach(item => {
    entriesMap[item] = BASE_PATH + item + '/main.js'
  })

  return entriesMap
}

console.log(entires())
