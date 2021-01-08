
import { request } from "../utils/request"
// 轮廓图
export const homeBanner = () => {
    return request({
        method: 'get',
        url: '/home/swiperdata'
    })
}
//导航栏
export const homeCatitems = () => {
    return request({
        method: 'get',
        url: '/home/catitems'
    })
}
// 楼层图
export const homeFloordata = () => {
    return request({
        method: 'get',
        url: '/home/floordata'
    })
}   