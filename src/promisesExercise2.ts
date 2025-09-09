//Part 2

type AdviceResponse = {
    slip: {
        id: number,
        advice: string,
    };
};

const fetchAdvideByIDs = (id: number) => {
   const promise: Promise<void> = fetch(`https://api.adviceslip.com/advice/${id}`)
   .then((response: Response) => {
       if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json() as Promise<AdviceResponse>;
    })
    .then((data: AdviceResponse) => {
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
