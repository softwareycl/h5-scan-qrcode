<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script type="text/babel">
import Vue from "vue";

import { Button, Toast, Tab, Tabs } from "vant";

Vue.use(Button).use(Toast).use(Tab).use(Tabs);

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.2rem;
}
</style>
