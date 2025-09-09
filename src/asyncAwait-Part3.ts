//Part 3 - Combining the Promises and Fetch with Async/Await

//instead of > 0.5 and thus random 50/50, I changed the value. Otherwise this gets too depressive :) 
//I also changed the win/lose. If the day is good, you are already fine. If the day is bad, then you need som advice to help
const myOutlookDay = new Promise((resolve, reject) => {

    let isThisAGoodDay: number = Math.random();  //random is weird, I get more reject than I should?
    if (isThisAGoodDay > 0.7) {
        resolve('This is a good day. Enjoy!');
    } else {
        reject("This is a bad day. Here's some advice to help you.");

        const fetchAdvideByIDs = async (id: number) => {
            try {
                const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
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
