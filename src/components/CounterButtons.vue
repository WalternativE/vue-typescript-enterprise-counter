<template>
    <section class="container counter-section">
        <div class="column counter-section--column is-full">
            <button @click="increment" class="button counter-section--column--button">Increment</button>
            <button @click="decrement" class="button counter-section--column--button">Decrement</button>
        </div>
    </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CounterModule from '@/modules/counter';
import SettingsModule from '@/modules/settings';
import { getModule } from 'vuex-module-decorators';

export default class CounterButtons extends Vue {
    public increment() {
        const state = getModule(CounterModule);
        const settings = getModule(SettingsModule);
        state.incrementBy(settings.StepSize);
    }

    public decrement() {
        const state = getModule(CounterModule);
        const settings = getModule(SettingsModule);
        state.decrementBy(settings.StepSize);
    }
}
</script>

<style lang="scss">
.counter-section {
    padding-top: 12px;
}

.counter-section--column {
    text-align: center;
}

.counter-section--column--button {
    margin-left: 4px;
    margin-right: 4px;
}
</style>
