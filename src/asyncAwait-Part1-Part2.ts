//Part 1 - Refactoring Your Own Promise with Async/Await 

const myOutlookDay = new Promise((resolve, reject) => {

    let isThisAGoodDay: number = Math.random();
    
    if (isThisAGoodDay > 0.5) {
        resolve('This is a good day. Enjoy!');
    } else {
        reject('This is a bad day. Go back to sleep.');
        //
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

//Part 2: Fetching Data from an API with Async/Await 

type AdviceResponse = {
    slip: {
        id: number,
        advice: string,
    };
};

const fetchAdvideByIDs = async (id: number) => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data: AdviceResponse = await response.json();
        const advice: string = data.slip.advice;
        console.log(`Advice ${id}: `, advice);
    }  catch (error) {
        console.log(error);
    }  
};

//max ID appers to be no 224
//id: draw a random number between 1 and 224, for advice

let id: number = Math.floor(Math.random() * 224) + 1;
fetchAdvideByIDs(id);
id = Math.floor(Math.random() * 224) + 1;
