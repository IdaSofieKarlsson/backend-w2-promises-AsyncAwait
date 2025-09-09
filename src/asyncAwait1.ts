//Part 1 - Refactoring Your Own Promise with Async/Await 

const myOutlookDay = new Promise((resolve, reject) => {

    let isThisAGoodDay: number = Math.random();
    //instead of > 0.5 and thus random 50/50, I changed the value. Otherwise this gets too depressive :) 
    if (isThisAGoodDay > 0.7) {
        resolve('This is a good day. Enjoy!');
    } else {
        reject('This is a bad day. Go back to sleep.');
    }
});

const outlookDay = async () => {
    try {
        const value = await myOutlookDay;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
};
outlookDay();
