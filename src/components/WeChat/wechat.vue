<template>
    <div class="main">
        <div v-if="ajax">加载中</div>
        <mu-list textline="two-line" v-else>
            <div v-for="item in friends" :key="item._id">
                <div @click="itemClick(item)">
                    <mu-list-item class="bor" avatar button :ripple="false">
                        <mu-list-item-action>
                            <mu-avatar slot="left">
                                <img :src="item.avatar" style="border-radius: 0">
                                <mu-badge class="badge" circle color="red" :content="item.unreadNum+''"
                                          v-show="item.unreadNum"></mu-badge>
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-title>{{item.name}}</mu-list-item-title>
                            <mu-list-item-sub-title>{{item.lastMsg.msg}}</mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-list-item-title><span class="time">{{item.lastMsg.time|getTime}}</span>
                            </mu-list-item-title>
                        </mu-list-item-action>
                    </mu-list-item>
                </div>
            </div>

        </mu-list>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import {timeDesc} from '../../assets/js/tool'

    export default {

        computed: {
            ...mapState({
                ajax: 'isAjax'
            }),
            ...mapGetters({friends: 'msgViewList'})
        },
        methods: {
            ...mapActions(['showChat']),

            itemClick(user) {
                this.showChat(user)
            }
        },
        filters: {
            getTime(val) {
                return timeDesc(val)
            }
        }
    }
</script>

<style scoped>
    .main{
        height: 100%;
    }
    .mu-list {
        padding: 0;
    }

    .mu-badge {
        width: 16px;
        height: 16px;
    }

    .badge {
        position: absolute;
        top: 8px;
        left: 46px;
    }

    .bor {
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
        height: 70px;
    }

    .time {
        font-size: 12px;
        position: absolute;
        top: 12px;
    }
</style>
