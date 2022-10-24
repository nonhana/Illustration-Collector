const fs=require("fs");
fs.readFile('练习素材/passage1.md',(err,data1)=>{
    fs.readFile('练习素材/passage2.md',(err,data2)=>{
        fs.readFile('练习素材/passage3.md',(err,data3)=>{
            let result=data1+data2+data3;
            console.log(result);
        });
    });
});