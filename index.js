const https = require("https");
console.log("Please enter a number accordingly for news about:\n 1.bitcoin\n 2.business in US\n 3.apple\n 4.techcrunch\n 5.wsj.com\n");

process.stdin.once('data', (number)=>{

    let id = Number(number);

    const getNews =()=>{

        const url = [
        `https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-30&sortBy=publisheAt&apiKey=4d2eb1bcb31344d28c804f73288ca057`,
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d2eb1bcb31344d28c804f73288ca057`,
        `https://newsapi.org/v2/everything?q=apple&from=2019-09-29&to=2019-09-29&sorBy=popularity&apiKey=4d2eb1bcb31344d28c804f73288ca057`,
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4d2eb1bcb31344d28c804f73288ca057`,
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4d2eb1bcb31344d28c804f73288ca057`,
        ]

        if(id){
            https
                .get(url[id-1], response => {
                let data = "";
                response.on("data", news => {
                data += news;});
                response.on("end", () => {
                    res = JSON. parse(data);
                    console.log("Res", res);});
                })
                .on("error", err => {
                error = err;
                console.log("Error", err);})
        }else{
            console.log('Please enter a valid input')
        }

    }
    
    console.log(getNews());
})
