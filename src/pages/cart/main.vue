<template>
  <view>
    <view class="content">
     
      <view  class="content_lists"
        v-for="item in cartList"
        :key="item.goods_id"
      >
        <view class="content_left">
          <radio
            @tap="getRadio(item.goods_id)"
            class="content_left_radio"
            :checked="item.goods_selected"
            color="#e21918"
          />
        </view>
        <view class="content_right">
          <GoodItem class="GoodItem" :item="item"></GoodItem>
          <view class="operation">
            <view @tap="changeTime(item.goods_id,-1)" class="iconfont icon-53"></view>
            <text class="text">{{ item.goods_count }}</text>
            <view @tap="changeTime(item.goods_id,1)" class="iconfont icon-54"></view>
          </view>
        </view>
      </view>

    </view>
    <view class="bottom" v-if="cartList.length">
      <view class="bottom-left">
        <radio class="content_left_radio" :checked="allChange" @tap="cart_allChange" color="#e21918" />
        <view class="text">全选</view>
        <view class="all">合计:</view>
        <view class="price">{{ allArice }}元</view>
      </view>
      <view class="bottom-right">
        <view class="count">去结算({{allCount}})</view>
      </view>
    </view>
     <view class="empty" v-if="cartList.length===0">
        <image class="empty_img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3334466282,826560232&fm=26&gp=0.jpg" mode="aspectFit" />
        <navigator class="empty_button" url="/pages/index/main" hover-class="none" open-type="switchTab" >天啊... 去购物吧</navigator>
      </view>
  </view>
</template>

<script>
import GoodItem from "@/components/goodItem";

export default {
  components: { GoodItem },
  data() {
    return {
      cartList: [{}], //数组
    };
  },
  computed: {
    allArice()  {
      let allArice = 0;
      this.cartList.forEach((item) => {
        if (item.goods_selected) {
          allArice += item.goods_price * item.goods_count;
        }
      });
      return allArice;
    },
    
    allCount(){
      let allcount =0;
      this.cartList.forEach((item)=>{
        if(item.goods_selected){
          allcount +=item.goods_count
        }
      })
      return allcount
    },
    allChange(){
    return this.cartList.every((item)=>item.goods_selected)
}
    
  },
  onShow() {
    // 因为tabBar只加载一次，用onlade不合适
    this.cartList = uni.getStorageSync("cartList");
  },
watch:{
  cartList:{
  deep:true,
  handler(val){
     uni.setStorageSync("cartList",val)
  }
}
},

  methods: {
    getRadio(goods_id) {
        const index =this.cartList.findIndex((item) => item.goods_id ===goods_id);
      this.cartList[index].goods_selected = !this.cartList[index]
        .goods_selected;
    },
    changeTime(goods_id,number){
     const index =this.cartList.findIndex((item) => item.goods_id ===goods_id);

      if(number ===-1 && this.cartList[index].goods_count===1){
        uni.showModal({
  content: '是否要删除该商品',
confirmText:'删除',
confirmColor:"#ccc",
  success :(res)=> {
    if (res.confirm) {
      this.cartList.splice(index,1)
    } 
  }
})
      }else{
   this.cartList[index].goods_count += number;
      }
    },
    cart_allChange(){
      const all =!this.allChange
      this.cartList.forEach(item=>{
        item.goods_selected=all
      })
    }
   
  },
  

};
</script>

<style lang="less">
.content {
  margin: 0 0 83rpx 0;
  .content_lists {
    display: flex;

    .content_left {
      padding: 0 0 0 20rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 78rpx;
      .content_left_radio {
        width: 35rpx;
        height: 35rpx;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .content_right {
      display: flex;
      position: relative;
      .operation {
        position: absolute;
        right: 15rpx;
        bottom: 100rpx;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        .iconfont {
          // width: 32 rpx;
          // height: 32rpx;
          font-size: 40rpx;
          padding: 0 20rpx;
        }
      }
    }
  }
}
.bottom {
  width: 100%;
  height: 83rpx;
  background-color: #fff;
  border-top: #ccc solid 1rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;

  .bottom-left {
    flex: 1;
    display: flex;
    // justify-content: center;
    align-items: center;
    .content_left_radio {
      padding: 0 20rpx 0 30rpx;
    }
    .text {
      color: #bcbcbc;
      font-size: 21rpx;
    }

    .all {
      font-size: 26rpx;
      padding: 0 20rpx;
    }
    .price {
      color: red;
      font-weight: 700;
      &::before {
        content: "￥";
        font-size: 25rpx;
        color: red;
      }
    }
  }

  .bottom-right {
    padding: 0 30rpx 0 0;
    .count {
      color: #fff;
      font-size: 21rpx;
      line-height: 52rpx;
      text-align: center;
      width: 150rpx;
      height: 52rpx;
      background-color: red;
      border-radius: 52rpx;
    }
  }
}
.empty {
 
  margin: 200rpx 0 0 0;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  .empty_img {
    max-width: 400rpx;
   max-height: 400rpx;
   

  }

  .empty_button {
    margin:  0 0 0 50rpx;
    width: 300rpx;
    height: 50rpx;
    color: #fff;
    background-color: red;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    border-radius: 25rpx;
    line-height: 50rpx;
    text-align: center;
    font-size: 26rpx;


  }
}
</style>