<template>
  <view class="content">
    <Search></Search>
    <view class="goodsTab">
      <GoodsTab :tabData="tabData"></GoodsTab>
    </view>
    <Gooditem
      v-for="item in goodsData"
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
      goodsData: [],
      cid: "",
      pagenum: 1,
      pagesize: 20,
    };
  },
  onLoad({ cid }) {
    this.cid = cid;
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
          console.log(res.data.message.goods);
          this.goodsData = res.data.message.goods;
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
}
</style>