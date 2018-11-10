<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        The glorious counter demo
                    </h1>
                    <h2 class="subtitle">
                        Enterprise counting since 2018
                    </h2>
                </div>
            </div>
        </section>
        <section class="counter-container">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-12">
                    <div class="tile centered-tile-container">
                        <div class="tile is-parent is-4">
                            <article class="tile is-child notification is-info is-pulled-right">
                                <p class="title">The count is</p>
                                <p class="subtitle">{{count}}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Label extends Vue {
    @Prop() public count!: number;
}
</script>

<style lang="scss">
.counter-container {
    padding-top: 12px;
}

.centered-tile-container {
    justify-content: center;
}
</style>

