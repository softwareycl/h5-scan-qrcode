<template>
  <div class="home">
    <van-tabs
      background="#F0EEED"
      color="#3188C9"
    >
      <van-tab title="扫码签到">
        <div class="tab-content">
          <van-button
            class="scan-button"
            type="primary"
            @click="scan"
          >
            扫码签到
          </van-button>
          <p>已签到人数：10</p>
        </div>
      </van-tab>
      <van-tab title="手输签到">
        <div class="tab-content">
          <div>
            <span>随机码：</span>
            <input
              v-model="randomCode"
              type="text"
            >
          </div>
          <p>已签到人数：10</p>
          <van-button
            class="scan-button"
            type="primary"
            @click="submit"
          >
            提交
          </van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      randomCode: ""
    }
  },
  methods: {
    scan() {
      this.$router.push({name: 'Scan'});
    },
    submit() {
      console.log(this.randomCode);
    }
  }
}
</script>

<style scoped>
.home {
  font-size: 1.6rem;
}
.van-tabs {
  height: 100vh;
}
.tab-content {
  height: calc(100vh - 44px);
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
