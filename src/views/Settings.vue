<template>
    <main class="container">
        <h1 class="is-size-2">Settings</h1>
        <div>
            <div class="field">
                <label for="counter-step-amount">Counter step size:</label>
                <div class="control">
                    <input id="counter-step-amount" type="number" class="input" :value="currentStepSize" @input="setStepSize" />
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import SettingsModule from '@/modules/settings';
import { getModule } from 'vuex-module-decorators';

@Component
export default class Settings extends Vue {
    get currentStepSize() {
        const settings = getModule(SettingsModule);
        return settings.StepSize;
    }

    public setStepSize(payload: Event) {
        const settings = getModule(SettingsModule);

        if (payload.target) {
            const element = payload.target as HTMLInputElement;
            const parsedNumber = Number(element.value);
            if (!isNaN(parsedNumber)) {
                settings.setTo(parsedNumber);
            }
        }
    }
}
</script>
