<template>
    <div class="chat">
        <div @click="showonly" style="height: 100%">
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left" @click="closeChat(false)">
                <mu-icon size="38" value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            <span>{{currentUser.name}}</span>
            <mu-button icon slot="right">
                <mu-icon size="38" value="more_horiz"></mu-icon>
            </mu-button>
        </mu-appbar>
        <div>
            <msgcontent :user="currentUser"></msgcontent>
        </div>
        </div>
        <div class="input">
            <mu-button icon small>
                <mu-icon   size="26" value="wifi_tethering"></mu-icon>
            </mu-button>
            <mu-text-field  v-model="value" @keyup.enter="sendMsg"></mu-text-field>
            <mu-button icon small @click="showemoji">
                <mu-icon size="26"  value="insert_emoticon"></mu-icon>
            </mu-button>
            <mu-button icon small @click="shows">
                <mu-icon size="26"  value="control_point"></mu-icon>
            </mu-button>
            <div class="emoji" v-if="showEmoji">
                <div v-for="(i,index) in this.EXPS" :key="index">
                    <div>{{i.title}}</div>
                </div>
            </div>
            <div class="shu"  v-if="showshu">

            </div>
        </div>

    </div>
</template>

<script>
    import {mapMutations, mapState, mapActions} from 'vuex'
    import {TOGGLE_CHAT} from '../../store/mutations-type'
    import msgcontent from './msgcontent'
    export default {
        data() {
            return {
                value: '',
                showEmoji: false,
                showshu: false,
                EXPS: []
            }
        },
        created() {
            this.axios('/static/emojiDB.json')
            .then(this.getResData)
        },
        computed: {
            ...mapState({currentUser: 'currentUser'})
        },
        methods: {
            ...mapMutations({closeChat: TOGGLE_CHAT}),
            ...mapActions(['sendNewMsg']),
            sendMsg() {
                let msg = this.value
                if (!msg.trim()) {
                    return
                }
                let time = new Date().getTime()
                let id = this.currentUser._id
                this.sendNewMsg({id, msg, time, self: true, axios: this.axios})
                this.value = ''
            },
            showemoji() {
                this.showEmoji = !this.showEmoji
                this.showshu = false
            },
            shows() {
                this.showshu = !this.showshu
                this.showEmoji = false
            },
            showonly() {
                this.showshu = false
                this.showEmoji = false
            },
            getResData(res) {
                console.log(res)
                this.EXPS = res.data.EXPS
            }
        },
        components: {
            msgcontent
        }

    }
</script>

<style scoped>
    .chat {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background: white;
        z-index: 5;
    }

    .mu-appbar {
        box-shadow: none;
        color: white;
        background: #303030;
    }
    .input{
        border-top: 0.5px solid rgba(0, 0, 0, 0.2);
        width: 100%;
        position: fixed;
        bottom: -20px;
        left: 0;
        text-align: center;
        background: white;
        z-index: 2;
    }
    .emoji{
        margin-top: -10px;
        height: 200px;
        width: 100%;
        background: #1aa1e4;
    }
    .shu{
        margin-top: -10px;
        height: 200px;
        width: 100%;
        background: #f0f;
    }
</style>
