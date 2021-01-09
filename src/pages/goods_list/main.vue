<template>
  <view class="content">
    <Search></Search>
    <view class="goodsTab">
      <GoodsTab :tabData="tabData"></GoodsTab>
    </view>
    <Gooditem
      v-for="item in goods"
      :key="item.index"
      :item="item"
    ></Gooditem>
  </view>
</template>

<script>
import Search from "../../components/search";
import GoodsTab from "../../components/goodsTab";
import Gooditem from "../../components/goodItem";
export default {
  components: { GoodsTab, Search, Gooditem },
  data() {
    return {
        tabData: [
        { id: 0, text: "综合" },
        { id: 1, text: "销量" },
        { id: 2, text: "价格" },
      ],
      goods: [],
      cid: "",
      pagenum: 1,
      pagesize: 10,
    };
  },
  onLoad({ cid }) {
    this.cid = cid ;
    this.getDoodsList();
  },
  methods: {
    getDoodsList() {
      uni.request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
        data: {
          cid: this.cid,
          pagenum: this.pagenum,
          pagesize: this.pagesize,
        },
        success: (res) => {
          console.log(res.data.message);
          // this.goods = res.data.message;
          const {goods} =res.data.message
          this.goods=[...this.goods,...goods]  //...为展开运算符    this.goods为旧的数据，goods为新的数据
        },
      });
    },
    onReachBottom(){
      console.log('触底了');
this.pagenum++  //页码加1
 this.getDoodsList();
    }
  },
};
</script>
<style lang="less" scoped>
.content {
  .goodsTab {
    margin: 90rpx 0 0 0;
  }
}
</style>