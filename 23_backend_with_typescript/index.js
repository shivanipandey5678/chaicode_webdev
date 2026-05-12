const http = require('http');

const server = http.createServer((req,res)=> {
    if (req.method==='GET' && req.url==='/menu'){
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify({item:['thali','biryani']}))
    }else if(req.method==='POST' && req.url==='/order'){
        let data = ''
        req.on('data', chunk => data+=chunk)
        req.on('end',()=> {
            const order =JSON.parse(data)
            res.writeHead(200,{'Content-Type': 'application/json'});
            res.end(Jons.stringify({
                status:'received',
                order
            }))
        })

    }
})

// npm i express@4 in production
// express js kon sikhta hai nextjs sikho but nextjs under me completly express use karta hai u can learn it if u dont have idea about express

// Sahi observation 👌 — `req` aur `res` me bahut methods aate hain, par sab yaad karne ki zarurat nahi. Tumhe **core/useful ones** clear hone chahiye.

// ---

// # 🔹 `req` (Incoming Request) – kya aata hai

// 👉 Client ne kya bheja

// ### 🔸 Most Important:

// ```js
// req.method   // GET, POST, PUT, DELETE
// req.url      // /menu, /about
// req.headers  // request headers
// ```

// ---

// ### 🔸 Body related:

// ```js
// req.on('data', chunk => {})   // data receive
// req.on('end', () => {})       // data complete
// ```

// 👉 POST request me use hota hai

// ---

// ### 🔸 Other useful:

// ```js
// req.socket        // network info
// req.httpVersion   // HTTP version
// ```

// ---

// # 🔹 `res` (Response) – kya bhejna hai

// 👉 Server kya return karega

// ---

// ### 🔸 Most Important:

// ```js
// res.write("Hello")   // data bhejna
// res.end()            // response finish
// ```

// 👉 Shortcut:

// ```js
// res.end("Hello")
// ```

// ---

// ### 🔸 Status & Headers:

// ```js
// res.statusCode = 200

// res.setHeader("Content-Type", "text/plain")
// ```

// ---

// ### 🔸 Advanced (important for real apps):

// ```js
// res.writeHead(200, {
//   "Content-Type": "application/json"
// })
// ```

// ---

// # 🔥 Tumhare code me example:

// ```js
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/menu') {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Menu page");
//     }
// });
// ```

// ---



// as we have idea each npm package have their own dependencies they also have their own to kya hota hai ki it will make dependencies tree iska dhyan or mantaincce kon karta hai package-Lock.json proper sub dependencies ki version or sab jo kuch hai data maintane karta hai or usko install karwa kar node module me rakhta hai .JSON

