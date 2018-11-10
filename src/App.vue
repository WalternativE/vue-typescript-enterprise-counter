<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Counter <span class="tag is-info counter-tag">{{counter}}</span></router-link>
          <router-link class="navbar-item" to="/settings">Settings</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import CounterModule from '@/modules/counter';
import { getModule } from 'vuex-module-decorators';

@Component
export default class App extends Vue {
  get counter() {
    const state = getModule(CounterModule);
    return state.Count;
  }
}
</script>

<style lang="scss" scoped>
.counter-tag {
  margin-left: 4px;
  border-radius: 12px;
}
</style>
