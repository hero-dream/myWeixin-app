<template>
  <view class="cats">
    <Search></Search>
    <view class="category">
      <scroll-view scroll-y class="category-left">
        <view class="item-left"  v-for="item in categoryList" :key="item.cat_id">{{item.cat_name}}</view>
      </scroll-view>
      <scroll-view scroll-y class="category-right">
        <view class="item-right">右边</view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import Search from "../../components/search";
export default {
  components: { Search },
  data(){
    return{
   
      categoryList:[],
   
    }
   
  },
   onLoad(){
     this.getCats()
 

   },
   methods:{
     getCats(){
           uni.request({
       url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
       success: (res) => {
         console.log(res.data);
         const categoryData = res.data.message;
    this.categoryList = categoryData.map(item=>{
      return{
     cat_name:item.cat_name
      }
    }
    
    )
  
   
   
       }
     });
     }
     
   }
};
</script>

<style lang="less" scoped>
.cats {
  .category {
    margin: 90rpx 0 0 0;
    display: flex;
    .category-left {
      flex: 2;
      height: calc(100vh - 90rpx);
      background-color: #f3f3f3;
      color: #909090;
    }
    .category-right {
      flex: 5;
      height: calc(100vh - 90rpx);
  
    }
  }
}
</style>