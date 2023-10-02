const {readFile, writeFile} = require('fs').promises;

const start = async () =>{
    try {
        const first = await readFile('../Day2/subFolder/first.txt','utf-8')
        const second = await readFile('../Day2/subFolder/second.txt','utf-8')
        await writeFile('../Day2/subFolder/four.txt', 'trung anh dep trai sieu cap vipro')
        console.log(first,second)
    } catch (error) {
        console.log(err);
    }
}
start();
