"use strict"

/** Promise chaining */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Hello"), 1000);
// });

// promise.then((res) => {
//   const str = `${res} world`;
//   return str;
// }).then((res) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${res}!!`), 1000);
//   });
// }).then((res) => {
//   console.log(res)
// })

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     const el = document.createElement('script');
//     el.src = src;
//     el.onload = (e) => {
//       resolve({
//         el,
//         src
//       })
//     }
//     el.onerror = (e) => {
//       reject({ error: new Error(`Load script ${src} failed`) })
//     }
//     document.body.appendChild(el);
//   })
// }

// const arr = ['./test_script_1.js', './test_script_2.js', './test_script_3.js', './test_script_4.js', './test_script_5.js'];

// function loadScripts(arrSrc) {
//   const copyArr = JSON.parse(JSON.stringify(arrSrc));
//   const arrResult = [];
//   return function fn(arr) {
//     function updateResult(res) {
//       arrResult.push(res);
//       if (arr.length - 1) {
//         arr.shift()
//         return fn(arr);
//       } else {
//         return arrResult;
//       }
//     }
//     return loadScript(arr[0]).then((res) => updateResult(res)).catch(error => updateResult(error))
//   }(copyArr)
// }

// loadScripts(arr).then(res => {
//   console.log(res, 'res')
// })


// loadScript('./test_script_1.js').then((res) => {
//   const arr = [res];
//   loadScript('./test_script_4.js').then((res) => {
//     arr.push(res);
//     return arr;
//   }).catch(error => {
//     arr.push(error);
//     return arr;
//   })
// }).then((arr) => {
//   return loadScript('./test_script_3.js').then((res) => {
//     arr.push(res);
//     return arr;
//   });
// }).then((res) => {
//   console.log(res)
// });

//Homework

function support(number){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({message: 'Current iteration ' + number})
    }, 1000)
  })
}

function createAsyncList(iterations) {
  const iterationArr = [];
  let currentIteration = 1;
  return function fn(iter){
    return support(currentIteration).then((answer) => {
      if(currentIteration <= iterations){
        iterationArr.push(answer);
        currentIteration++;
        return fn(iter);  
      }else{  
        return iterationArr;
      }
    })
  }(currentIteration)
  
}

createAsyncList(10).then((data) => {
  console.log(data) // [{message: 'Current iteration 1'}, {message: 'Current iteration 2'}, {message: 'Current iteration 3'}]
})