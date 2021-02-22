
/**
 * 第一版节流函数  时间戳(立即执行)
 * 
 * @param  func 需要节流的函数
 * @param  await 一定时间之内触发一次
 * 
 */

// function throttle(func, await) {
//   let previuos = 0;
//   return function (...args) {
//     let now = Date.now()
//     if (now - previuos > await) {
//       func.apply(this, args)
//       previuos = now
//     }
//   }
// }


/**
 * /第二版节流函数  定时器(非立即执行)
 * 
 * @param  func 需要节流的函数
 * @param  await 一定时间之内触发一次
 * 
 */


// function throttle(func, await) {
//   let timer;
//   return function (...args) {
//     if (!timer) {
//       timer = setTimeout(() => {
//         func.apply(this, args)
//         timer = null
//       }, await)
//     }
//   }
// }


/**
 * 第三版节流函数  双剑合璧
 * 
 * @param  func 需要节流的函数
 * @param  await 一定时间之内触发一次
 * @param  type  1表示时间戳版 2表示定时器
 */

function throttle(func, await, type) {
  if (type == 1) {
    var previuos = 0;
  } else if (type == 2) {
    var timer;
  }
  return function (...args) {
    if (type == 1) {
      //启用时间戳版
      let now = Date.now()
      if (now - previuos > await) {
        func.apply(this, args)
        previuos = now
      }
    } else if (type == 2) {
      //启用定时器版
      if (!timer) {
        timer = setTimeout(() => {
          func.apply(this, args)
          timer = null
        }, await)
      }
    }
  }
}