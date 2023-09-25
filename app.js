const {readFile, writeFile} = require('fs');

readFile('./subFolder/first.txt','utf8',(err, data) => {
    if(err){
        console.log(err);
        return;
    }
    const first = data;
    readFile('./subFolder/second.txt','utf8',(err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = data;
        writeFile('./subFolder/thirst.txt',`${first} + ${second}`,(err, data) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
        })
    })

})