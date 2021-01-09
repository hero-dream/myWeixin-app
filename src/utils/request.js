
const baceUrl ="https://api-hmugo-web.itheima.net/api/public/v1"
export const request=((params)=>{
    return new Promise((resolve,reject)=>{
        uni.request({
            ...params, //...展开运算符，这里当params接收到传入的数据是，比如data，methoddeng，会自动接收
            url:baceUrl + params.url,  
            success: (res) => {
                resolve(res)
            },
            fail:(err)=>{
                reject(err) 
            }
        });
    })
})