<template>
    <div class="shopcar">
        <NavBar class="navBar">
            <div slot="center">购物车{{cartLength}}</div>
        </NavBar>
        <Scroll class="scroll" :probeType="3"  ref="scroll">
            <CartList :cartList="cartList"></CartList>
        </Scroll>
        <Calculate class="calc"></Calculate>
    </div>
</template>

<script>

    import NavBar from '@/components/common/navBar/NavBar.vue'
    import CartList from './childComps/CartList'
    import Calculate from './childComps/Calculate'
    import Scroll from '@/components/common/scroll/Scroll.vue'


    import {mapGetters} from 'vuex'
    export default {
        name: "Home",
        components:{
            NavBar,
            CartList,
            Scroll,
            Calculate
        },
        computed:{
            ...mapGetters(['cartLength','cartList'])
        },
        activated() {
            this.$refs.scroll.refresh();
        }
    }
</script>

<style scoped>
    .navBar{
        background-color: var(--color-tint);
        color: white;
        position: fixed;
        width: 100%;
        z-index: 9;
        top:0;
    }

    .scroll{
        margin-top: 44px;
        height: calc(100vh - 44px - 49px - 38px);
        overflow: hidden;
        margin-bottom: calc(49px + 38px);
        position: relative;
    }


    .calc{
        position: fixed;
        bottom: 49px;
    }
</style>
