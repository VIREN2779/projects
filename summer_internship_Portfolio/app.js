// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '127.0.0.1' ;
// const port = 8080;

// const home = fs.readFileSync('./index.html');
// const About = fs.readFileSync('./about.html');
// const activities = fs.readFileSync('./activities.html');
// const blog = fs.readFileSync('./blog.html');
// const projects = fs.readFileSync('./projects.html');
// const contact = fs.readFileSync('./contact.html');
// const img = path.join(__dirname , 'img')
// // const styles = fs.readFileSync('./styles.css');
// // const javascript = fs.readFileSync('./app.js');



// const server = http.createServer((req , res) =>{
//     const url = req.url;

//     if(url === '/'){
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.end(home)
//     }

//     else if(url === '/About'){
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.end(About)
//     }
//     else if(url === '/activities'){
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.end(activities)
//     }
//     else if(url === '/blog'){
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.end(blog)
//     }
//     else if(url === '/projects'){
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.end(projects)
//     }
//     else if(url === '/contact'){
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.end(contact)
//     }
//     // css file 
//     // else if(url === '/style.css'){
//     //     res.writeHead(200 , {'content-type' : 'text/css'})
//     //     res.end(contact)
//     // }
//     // js file 
//     // else if(url === '/one.js'){
//     //     res.writeHead(200 , {'content-type' : 'text/javascript '})
//     //     res.end(contact)
//     // }
//     // else if(url === '/img'){
//     //     res.writeHead(200 , {'content-type' : 'image/svg+xml'})
//     //     res.end(img)
//     // }
//     else{
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.end('<h1> Page Not Found</h1>')}
// });

// server.listen(8080 , () =>{
//     console.log(`sever is running at http://${hostname}:${port}`)
// })


const express = require('express');
const path = require('path');

const app = express();
hostname= '127.0.0.1';
const port = process.env.port || 5000 ;
 


app.get('/' ,(req , res)=>{
    res.sendFile(path.join(__dirname , 'index.html'))
})
app.get('/about' ,(req , res)=>{
    res.sendFile(path.join(__dirname , 'about.html'))
})
app.get('/activities' ,(req , res)=>{
    res.sendFile(path.join(__dirname , 'activities.html'))
})
app.get('/blog' ,(req , res)=>{
    res.sendFile(path.join(__dirname , 'blog.html'))
})
app.get('/projects' ,(req , res)=>{
    res.sendFile(path.join(__dirname , 'projects.html'))
})
app.get('/contact' ,(req , res)=>{
    res.sendFile(path.join(__dirname , 'contact.html'))
})
app.use(express.static( __dirname + '/public'));





app.listen(5000 , () =>{
    console.log(`sever is running at http://${hostname}:${port}`)
})  