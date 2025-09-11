//API wheather
type AdviceResponse = {
    current: {
        temperature_2m: number,
    }, 
    current_units: {
        temperature_2m: string,
    },
};

const wheatherInHelsingborg = async () => {
    try {
        const response: Response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=56.0467&longitude=12.6944&current=temperature_2m&timezone=Europe%2FBerlin`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data: AdviceResponse = await response.json();
        //const advice: string = data.slip.advice;
        console.log(`Temperature in Helsingborg right now: ${data.current.temperature_2m} ${data.current_units.temperature_2m}`);
    }  catch (error) {
        console.log(error);
    }  
};

wheatherInHelsingborg();