<template>
  <view class="content">

    <view class="content_swiper" >
      <swiper class="swiper" circular :indicator-dots="indicatorDots" indicator-active-color="#2dc2da" >
        <swiper-item  v-for="item in pics" :key="item.pics_id">
   <image class="item_image" :src="item.pics_big_url" mode="aspectFill"/>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import {getDetail} from "@/api"
export default {
  data() {
    return {
     indicatorDots:true,
      goods_id: "",
      pics: [],
    };
  },

  onLoad({ goods_id }) {
    this.goods_id = goods_id;
    this.getDetail();
  },
  methods: {
async  getDetail() {
const res =await getDetail({goods_id: this.goods_id})
const { pics} =res.data.message
this.pics=pics
 console.log(res.data);
 console.log(pics);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  .content_swiper {
display: flex;
  .swiper{
    width: 100%;
    height: 500rpx;
  }
  .item_image{
    width: 100%;
    height: 500rpx;
  }
    
  }
}
</style>