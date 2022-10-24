const fs=require('fs');
// 读取文件函数
function readPassage1(){
    return new Promise((resolve, reject) => {
        fs.readFile('./passage1.md',(err,data)=>{
            // 如果失败
            if(err){reject(err);}
            // 如果成功
            resolve(data);
        })
    })
}
function readPassage2(){
    return new Promise((resolve, reject) => {
        fs.readFile('./passage2.md',(err,data)=>{
            // 如果失败
            if(err){reject(err);}
            // 如果成功
            resolve(data);
        })
    })
}
function readPassage3(){
    return new Promise((resolve, reject) => {
        fs.readFile('./passage3.md',(err,data)=>{
            // 如果失败
            if(err){reject(err);}
            // 如果成功
            resolve(data);
        })
    })
}

// 声明async函数
async function main(){
    let passage1=await readPassage1();
    let passage2=await readPassage2();
    let passage3=await readPassage3();

    console.log(passage1.toString());
    console.log(passage2.toString());
    console.log(passage3.toString());
}

main();