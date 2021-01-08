
import {request} from "../utils/request"
// 轮廓图
export const homeBanner=()=>{
return request({
    method:'get',
    url:'/home/swiperdata'
})
}