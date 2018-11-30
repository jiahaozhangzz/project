<template>
    <div class="sj">
        <div style="width: 90%; margin-top: -10px">
            <mu-button icon small @click="close(false)" style="margin-top: 20px;">
                <mu-icon size="34"  value="keyboard_arrow_left"></mu-icon>
            </mu-button>
             <div style="display: inline-block; width: 90%; margin-top: 15px">
            <mu-text-field class="inp"  v-model="value" @keyup.enter="sendMsg"></mu-text-field>
             </div>
        </div>
        <div style="margin-top: 100px">
                <mu-flex class="flex-wrapper"  style="color: #cccccc" align-items="center">
                    <mu-flex   justify-content="center" fill>搜索制定内容</mu-flex>
                </mu-flex>
                <mu-flex class="flex-wrapper" style="color: #61ce3c" align-items="center">
                    <mu-flex class="flex-demo" justify-content="center" fill>朋友圈</mu-flex>
                    <mu-flex class="flex-demo" justify-content="center" fill>文章</mu-flex>
                    <mu-flex  justify-content="center" fill>公众号</mu-flex>
                </mu-flex>
                <mu-flex class="flex-wrapper" style="color: #61ce3c" align-items="center">
                    <mu-flex class="flex-demo" justify-content="center" fill>小程序</mu-flex>
                    <mu-flex class="flex-demo" justify-content="center" fill>音乐</mu-flex>
                    <mu-flex  justify-content="center" fill>表情&nbsp;&nbsp;&nbsp;</mu-flex>
                </mu-flex>
            </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {TOGGLE_DETAIL} from '../../store/mutations-type'

    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            ...mapMutations({close: TOGGLE_DETAIL})
        }
    }
</script>

<style scoped>
    .sj {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background: white;
        z-index: 5;
    }
    .inp{
        width: 115%;
    }
    .flex-wrapper{
        margin-top: 15px;
    }
    .flex-demo{
        border-right: 1px solid rgba(0, 0, 0, 0.1);
    }

</style>
