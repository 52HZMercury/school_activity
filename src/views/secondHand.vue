<template>
    <!-- <secondHandChoice></secondHandChoice> -->
    <div>
        <Back></Back>
        <router-view></router-view>
    </div>
</template>

<script>
    import '../assets/font/font_secondHand/iconfont.css'
    import Back from '../components/Common/Back.vue'
    // import secondHandChoice from '../components/secondHand/secondHandChoice.vue'
    // import secondHandDetail from '../components/secondHand/secondHandDetail.vue'
    // import secondHandInfo from '../components/secondHand/secondHandInfo.vue'
    // import secondHandContact from '../components/secondHand/secondHandContact.vue'
    export default {
        name: 'secondHand',
        components: { Back }
    }
</script>

<style lang="less" scoped>

</style>