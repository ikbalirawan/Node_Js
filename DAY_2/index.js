const http = require('http');
// CommonJS / ESM (Ecmascript)
const { newFunction, testFunction } = require ('./function')

// Promise
const printAgakTelat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Saya sudah sampai');
        },1000 * 5);
    });
}

var server = http.createServer(async(req, res) =>  {

    switch (req.url) {
        case '/home':
            testFunction();
            newFunction('ini berasal dari parameter');
            res.write('Ini Halaman Home');
            res.end();
            break;
        case '/about':
            console.log('Saya otw')
            printAgakTelat().then((value) =>
            {   console.log(value);
                console.log('ngopi');
            }).catch((error) => console.log(error)),
            res.write('Ini Halaman About');
            res.end();
            break;
            case '/contact':
            console.log('Saya otw')
            const value = await
            printAgakTelat();
            console.log(value)
            console.log('ngopi');
                res.write('Ini Halaman Contact');
            res.end();
            break;

            default:
            res.write('404 Not Found') 
            res.end();
    }

    // if (req.url == '/home') {
    //     res.write('ini home');
    //     res.end();
    // }else if (req.url == '/about') {
    //     res.write('ini about');
    //     res.end();
    // }else {
    //     res.write('404 Not Found')
    //     res.end();
    // }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server berjalan di http:://localhost:${port}`);
});