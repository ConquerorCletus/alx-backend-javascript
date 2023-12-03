# 0x01 ES6 Promise
A promise is a Javascript Object that links producing code and consuming code. It is a variable that states a promise.

###
    const myPromise = new Promise((resolve,reject) => {
        resolve("I achieved my Promise!!")
        reject('promise not achieved')
    })

The above is 