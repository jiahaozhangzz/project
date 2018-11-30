<template>
    <div class="msgcontent">
        <div class="msg" :class="{self: item.self}" v-for="item in msgList" :key="item.time">
            <div class="avatar">
                <img width="100%" height="100%" :src="item.self? self.avatar:user.avatar"/>
            </div>
            <div class="bubble">
                {{item.msg}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props: ['user'],
        computed: {
            ...mapState({
                msgList: state => state.currentMsgList.list,
                self: state => state.data.self
            })
        }
    }
</script>

<style scoped>
    .msgcontent .msg {
        margin-top: 10px;
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        font-size: 0;
        height: 100%;
    }

    .msg .avatar {
        display: inline-block;
        width: 40px;
        height: 40px;

        overflow: hidden;
        background: white;
    }

    .msg .bubble {
        display: inline-block;
        vertical-align: top;
        margin-left: 5px;
        padding: 10px 10px 10px 5px;
        border-radius: 4px;
        line-height: 20px;
        max-width: 50%;
        word-wrap: break-word;
        font-size: 14px;
        background: #fff;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
    }

    .msg.self {
        text-align: right;
    }

    .msg.self .avatar {
        float: right;
        margin-left: 5px;
    }

    .msg.self .bubble {
        background: #8ee056;
        text-align: left;
        color: white;
        padding: 10px 5px 10px 10px;
    }
</style>
