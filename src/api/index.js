
import { request } from "@/utils/request"
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
// 商品详情
export const getDetail = (data) => {
    return request({
        method: 'get',
        url: '/goods/detail',
        data
    })
} 

// 获取用户token
export const getWxlogin = (data) => {
    return request({
        method: 'POST',
        url: '/users/wxlogin',
        data
    })
}