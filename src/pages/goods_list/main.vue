<template>
  <view class="content">
  <Search></Search>
  <view class="goodsTab">
<GoodsTab></GoodsTab>
</view>
<view class="goodsList" v-for="item in goodsData" :key="item.index">
  <view class="goodsLeft"> 
<image class="images" :src="item.goods_big_logo" mode="" />
  </view>
  <view class="goodRight">
    <view class="name">{{item.goods_name}}</view>
    <view class="price">{{item.goods_price}}</view>

  </view>
</view>

  </view>
</template>

<script>
import Search from "../../components/search"
import GoodsTab from "../../components/goodsTab"
export default {
  components:{GoodsTab,Search},
data(){
  return{
    goodsData:[],
    cid:'',
        pagenum:1,
        pagesize:20
  }
},
  onLoad({cid}){
    this.cid =cid
    this.getDoodsList()

  },
methods:{
  getDoodsList(){
    uni.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search', 
      data: {
     cid:this.cid,
     pagenum:this.pagenum,
     pagesize:this.pagesize
      },
      success: (res) => {
        console.log(res.data.message);
        this.goodsData = res.data.message.goods;
      }
    });
  }
}
}
</script>
<style lang="less" scoped>
.content{
  .goodsTab{
    margin: 90rpx 0 0 0 ;
  }
  .goodsList{
    display: flex;
    padding-left: 22rpx;
    padding-bottom: 5rpx;
    width: 698rpx;
    height: 209rpx;
    .goodsLeft{

.images{
  width: 210rpx;
  height: 210rpx;
}
    }
    .goodRight{
    margin-left: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
      .name{
        margin: 20rpx 0 0 0;
        font-size: 26rpx;

      }
      .price{
        color: red;
         font-size: 26rpx;

      }

    }

  }
}
</style>