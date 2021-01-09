<template>
  <view class="content">
    <Search></Search>
    <view class="goodsTab">
      <GoodsTab :tabData="tabData"></GoodsTab>
    </view>
    <Gooditem v-for="item in goods" :key="item.index" :item="item"></Gooditem>
    <view class="text" v-if="hasMore === false"> -- 没有更多啦 -- </view>
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
      cid: "",
      pagenum: 1,
      pagesize: 10,
      goods: [],
      hasMore: true, //是否加载更多数据
    };
  },
  onLoad({ cid }) {
    this.cid = cid || 999;
    this.getGoodsList();
  },
  onReachBottom() {
    if (this.hasMore === true) {
      console.log("触底了");
      this.pagenum++; //页码加1
      this.getGoodsList();
    }
  },
 onPullDownRefresh(){
console.log('123');
  this.pagenum=1,
  this.goods=[],
  this.hasMore=true,
  this.getGoodsList()

  setTimeout(function () {
  uni.stopPullDownRefresh()
}, 1000)

  },
  methods: {
    getGoodsList() {
      uni.showLoading({
  title: '加载中',
})

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
          const { goods, total } = res.data.message;
          this.goods = [...this.goods, ...goods]; //...为展开运算符    this.goods为旧的数据，goods为新的数据
          this.total = total;
          if (total === this.goods.length) {
            // 当总长度等于当前的页数，会触发
            this.hasMore = false;
          }
           uni.hideLoading()
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  .goodsTab {
    margin: 90rpx 0 0 0;
  }
  .text {
    height: 100rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(77,178,167);
  }
}
</style>