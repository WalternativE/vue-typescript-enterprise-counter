import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

import store from '@/store';

@Module({ dynamic: true, store, name: 'settings' })
export default class SettingsModule extends VuexModule {
    private stepSize: number = 1;

    get StepSize() {
        return this.stepSize;
    }

    @Mutation
    public setTo(value: number) {
        this.stepSize = value;
    }
}
