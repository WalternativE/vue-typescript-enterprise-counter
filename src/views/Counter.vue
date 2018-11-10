<template>
    <main>
        <Label :count="computedCount"></Label>
        <CounterButtons></CounterButtons>
    </main>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import CounterModule from '@/modules/counter';
import { getModule } from 'vuex-module-decorators';

import Label from '@/components/Label.vue';
import CounterButtons from '@/components/CounterButtons.vue';

@Component({
    components: {
        Label,
        CounterButtons,
    },
})
export default class Counter extends Vue {
    get computedCount() {
        const state = getModule(CounterModule);
        return state.Count;
    }
}
</script>
