<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style lang="less">
@import "/style/icon.css";
// 每个页面公共css 
     .open_type_wrap {
      position: relative;
  .open_type_button {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 10;
	top: 0;
	opacity: 0;

  }
}
</style>