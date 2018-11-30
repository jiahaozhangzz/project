<template>
    <div id="app">
        <div class="top">
            <top></top>
        </div>
        <router-view/>
        <div class="bottom">
        <bottom></bottom>
        </div>
        <chatview v-if="chat"></chatview>
        <shiyan v-if="showDetail"></shiyan>

    </div>
</template>

<script>
    import chatview from './components/WeChat/chatview'
    import bottom from './components/bottom/bottomnav'
    import top from './components/top/top'
    import {mapState} from 'vuex'
    import shiyan from './components/WeChat/search '
    export default {
        name: 'App',
        data() {
            return {
                EXPS: []
            }
        },
        computed: mapState({allData: 'data', chat: 'chat', showDetail: 'showDetail'}),
        components: {
            bottom,
            top,
            chatview,
            shiyan
        }
    }
</script>

<style>
#app{
    height: 100%;
}

.bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
}
</style>
