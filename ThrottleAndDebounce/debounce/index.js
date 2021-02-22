
/**
 * 防抖函数 第一版(非立即执行)
 *
 * @param  func 执行函数
 * @param  await 等待时间
 */

// function debounce(func, await) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       func.apply(this, args)
//     }, await)
//   }
// }


/**
 * 防抖函数 第二版(立即执行)
 *
 * @param  func 执行函数
 * @param  await 等待时间
 */

// function debounce(func, await) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer)
//     let callNow = !timer
//     timer = setTimeout(() => {
//       timer = null;
//       // func.apply(this, args)
//     }, await)
//     if (callNow) func.apply(this, args)
//   }
// }

/**
 *  防抖函数 第三版 (双剑合璧版)
 * @param  func 执行函数
 * @param  await 等待时间
 * @param  imidiate  true表示立即执行 fase 不会立即执行
 */

function debounce(func, await, imidiate) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer)
    if (imidiate) {
      //立即执行
      let callNow = !timer
      if (callNow) func.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, await)
    } else {
      //非立即执行
      timer = setTimeout(() => {
        func.apply(this, args)
      }, await)
    }


  }
}
