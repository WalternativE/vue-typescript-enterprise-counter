import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

import store from '@/store';

@Module({ dynamic: true, store, name: 'counter' })
export default class CounterModule extends VuexModule {
    private count: number = 0;

    get Count() {
        return this.count;
    }

    @Mutation
    public incrementBy(amount: number) {
        this.count += amount;
    }

    @Mutation
    public decrementBy(amount: number) {
        this.count -= amount;
    }
}
