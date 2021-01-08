<template>
  <view class="cats">
    <Search></Search>
    <view class="category">
      <scroll-view scroll-y class="category-left">
        <view
          class="item-left"
          :class="isActive === index ? 'active' : ''"
          @tap="changeTabs(index)"
          v-for="(item, index) in categoryList"
          :key="item.cat_id"
          >{{ item.cat_name }}</view
        >
      </scroll-view>
      <scroll-view scroll-y class="category-right">
        <view
          class="item-right"
          v-for="item1 in categoryRight"
          :key="item1.index"
        >
          <view class="goods_title">
            <text class="item-text">/</text>
            <text> {{ item1.cat_name }}</text>
            <text class="item-text">/</text>
          </view>
          <view class="goods_list">
            <navigator
              hover-class="none"
              :url="`/pages/goods_list/main?cid=${item2.cat_id}`"
              class="goods-item"
              v-for="item2 in item1.children"
              :key="item2.cat_id"
            >
              <image class="goods-img" :src="item2.cat_icon" mode="widthFix" />
              <text class="text">{{ item2.cat_name }}</text>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import Search from "../../components/search";
export default {
  components: { Search },
  data() {
    return {
      isActive: 0,
      categoryList: [],
      categoryRight: [],
      categoryData: [],
    };
  },
  onLoad() {
    // this.getCats();
    // 这里取出数据
    // 1.当本地没有数据时，判断，没有数据就发送请求
    const categoryData = uni.getStorageSync("categoryData") || [];
    if (categoryData.length === 0) {
      this.getCats();
    } else {
      // 2.当本地存储有数据时，但是是无效的
      const now = Date.now(); //获取当前的时间戳
      const old = uni.getStorageSync("categoryTime"); //旧的时间戳
      if (now - old >= 60 * 1000) {
        console.log(now - old >= 60 * 1000);
        this.getCats();
      } else {
        // 2.1当本地数据有效时
        this.categoryData = categoryData;
        this.categoryList = categoryData.map((item) => {
          return {
            cat_name: item.cat_name,
            cat_id: item.cat_id,
          };
        });
        this.categoryRight = categoryData[0].children;
      }
    }
  },
  methods: {
    getCats() {
      uni.request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
        success: (res) => {
          console.log(res.data);
          const categoryData = res.data.message;
          this.categoryData = categoryData;
          // 将数据存入本地
          uni.setStorageSync("categoryData", categoryData); //存数据
          uni.setStorageSync("categoryTime", Date.now()); //存储当前时间戳，用于校验
          // uni.getStorageSync('categoryData') //取数据

          this.categoryList = categoryData.map((item) => {
            return {
              cat_name: item.cat_name,
              cat_id: item.cat_id,
            };
          });
          this.categoryRight = categoryData[0].children;
        },
      });
    },
    changeTabs(index) {
      this.isActive = index;
      this.categoryRight = this.categoryData[index].children;
    },
  },
};
</script>

<style lang="less">
.cats {
  .category {
    margin: 90rpx 0 0 0;
    display: flex;
    .category-left {
      flex: 2;
      height: calc(100vh - 90rpx);
      background-color: #f3f3f3;
      color: #909090;
      .item-left {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100rpx;
        &.active {
          color: red;
          border-left: red solid 5rpx;
        }
      }
    }
    .category-right {
      flex: 5;
      height: calc(100vh - 90rpx);
      .item-right {
        .goods_title {
          height: 100rpx;
          color: #bfbaad;
          display: flex;
          align-items: center;
          justify-content: center;
          .item-text {
            color: #7b7970;
          }
        }
        .goods_list {
          display: flex;
          flex-wrap: wrap;
          .goods-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 33.33%;

            .goods-img {
              width: 120rpx;
              height: 120rpx;
            }
            .text {
              font-size: 22rpx;
            }
          }
        }
      }
    }
  }
}
</style>