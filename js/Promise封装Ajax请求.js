const p=new Promise((resolve,reject)=>{
        // 1.创建对象
    const xhr=new XMLHttpRequest();
    // 2.初始化
    xhr.open("GET","http://www.baidu.com");
    // 3.发送
    xhr.send();
    // 4.绑定事件，处理相应结果
    xhr.onreadystatechange=function(){
        // 判断
        if(xhr.readyState===4){ 
            // 判断响应状态码，200~299
            if(xhr.status>=200&&xhr.status<=299){
                // 表示成功
                console.log(xhr.response);
            }else{
                // 如果失败
                console.error(xj=this.status);
            }
        }
    }
})
p.then(function(value){
    console.log(value);
},function(reason){
    console.log(reason);
})