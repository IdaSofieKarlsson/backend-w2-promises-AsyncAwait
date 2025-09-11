const myPromise = new Promise((resolve, reject) => {
    //logic
    let success = false;
    if (success) {
        resolve('Operation was successful');
    } else {
        reject('Operation failed');
    }
});

//obs omskrivningen ersätter inte myPromise, vi skriver bara om syntax

const result = async () => {
    try {
        const value = await myPromise;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
};
result();

//klart vid 7:20 i videon

//myPromise.then()

/*
myPromise
.then((message) => {
    console.log(message);
    //logic

})
.catch((rejection) => {
    console.log('reason: ' + rejection);
    //logic
});
*/

