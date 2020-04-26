exports.handler = async (event) => {
    //Array
    const food = ['Avocado Toast', 'Cookies'];
    //random selecter
    const randomFood = food[Math.floor(Math.random() * food.length)];
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify(randomFood),
    };
    return response;
};