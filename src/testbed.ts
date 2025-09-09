//these are my private notes

//the promise takes two arguments: resolve and reject
/*
const myPromise = new Promise((resolve, reject) => {
    //logic
    let success = true;
    if (success) {
        resolve('Operation was successful');
    } else {
        reject('Operation failed');
    }
});

//now we call the function
myPromise
.then((message) => {            //message/what happens if success = true;
    console.log(message);
    //logic

})
.catch((error) => {             //message/what happens if success = false;
    console.log('error: ' + error);
    //logic
});
*/

//kodbiten om TypeScript. använd utskrift "console.log(data);" som kommit om APIn funkat 
type AdviceResponse = {
    slip: {
        id: number,
        advice: string,
    };
};

//kodbiten om fetch API
const fetchAdvideByIDs = (id: number) => {
   const promise: Promise<void> = fetch(`https://api.adviceslip.com/advice/${id}`)       //9,42
   //console.log(promise);
   .then((response: Response) => {
       if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json() as Promise<AdviceResponse>;
        //console.log(response);
    })
    .then((data: AdviceResponse) => {
        //console.log(data);
        const advice: string = data.slip.advice;
        console.log(`Advice ${id}: `, advice);
    })
    .catch((error: unknown) => {
        console.error('error fetching advice ', error);
    });
};

//max ID appers to be no 224
//kod id. Dra random nr mellan 1 och 224, för advice
let id: number = Math.floor(Math.random() * 224) + 1;
fetchAdvideByIDs(id);
id = Math.floor(Math.random() * 224) + 1;
fetchAdvideByIDs(id);
id = Math.floor(Math.random() * 224) + 1;
fetchAdvideByIDs(id);
id = Math.floor(Math.random() * 224) + 1;
fetchAdvideByIDs(id);
id = Math.floor(Math.random() * 224) + 1;
fetchAdvideByIDs(id);
