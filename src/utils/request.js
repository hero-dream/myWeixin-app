
const baceUrl ="https://api-hmugo-web.itheima.net/api/public/v1"
export const request=((params)=>{
    return new Promise((resolve,reject)=>{
        uni.request({
            ...params,
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