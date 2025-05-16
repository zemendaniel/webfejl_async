// setTimeout(() => {console.log("123")}, 0) shiftel egy iterációt
function buyApple1(amount) {
    if (amount < 5) {
        return Promise.resolve(`Van ${amount} almánk.`);
    }
    else {
        return Promise.reject(`Nincs ${amount} almánk.`);
    }
}

let result = buyApple1(3);
console.log(1, result);
result.then(value => console.log(2, value));
console.log(3, result);

result = buyApple1(6).catch(error => console.log(4, error));

buyApple1(6).then(value => console.log(value)).catch(error => console.log(error));

function buyApple2(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 5) {
            resolve(`Van ${amount} almánk.`);
        } else {
            reject(`Nincs ${amount} almánk.`);
        }
    })
}

buyApple2(4).then(value => console.log(value)).catch(err => console.log(err))

// setTimeout(() => {console.log("asd")}, 0)

function buyApple3(amount) {
    return new Promise((resolve, reject) => {
        if (amount < 5) {
            setTimeout(() => {resolve(`Van ${amount} almánk.`)}, 1000);
        } else {
            setTimeout(() => {reject(`Nincs ${amount} almánk.`)}, 1000);
        }
    })
}

buyApple3(534232).then(value => console.log(value)).catch(err => console.log(err));
