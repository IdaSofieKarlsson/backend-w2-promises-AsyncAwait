//Part 1

const outlookDay = new Promise((resolve, reject) => {

    let isThisAGoodDay: number = Math.random();

    if (isThisAGoodDay > 0.5) {
        resolve('This is a good day. Enjoy!');
    } else {
        reject('This is a bad day. Go back to sleep.');
    }
});

outlookDay
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});