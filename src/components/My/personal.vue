<template>
    <div class="personal" v-if="show">
        <mu-appbar style="width: 100%; box-shadow: none; background: #303030; color: white">
            <mu-button icon slot="left" style="margin-right: -20px" @click="showCont">
                <mu-icon size="36" value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            个人信息
        </mu-appbar>
        <div style="margin-top: 16px;background: white">
            <mu-appbar class="border" style="width: 100%; height: 60px;background: white; box-shadow: none;">
                <div style="font-size: 16px;">
                    头像
                </div>
                <mu-avatar slot="right" style="margin-right: 10px">
                    <img src="../../../static/images/g.png" style="border-radius: 0">
                </mu-avatar>
            </mu-appbar>
            <div style="height: 45px;line-height: 45px;margin: 0 14px 0 14px">
                <div style="border-top: 0.5px solid rgba(0, 0, 0, 0.2) ;">
                <span >昵称</span>
                <span style="float: right;color: #959595">jack</span>
                </div>
            </div>
            <div style="height: 45px;line-height: 45px;margin: 0 14px 0 14px">
                <div style="border-top: 0.5px solid rgba(0, 0, 0, 0.2) ;">
                    <span >微信号</span>
                    <span style="float: right;color: #959595">jack001</span>
                </div>
            </div>
            <div style="border-top: 0.5px solid rgba(0, 0, 0, 0.2) ;margin: 0 14px">
            <mu-appbar  style="background:white;height: 45px; width: 100%; box-shadow: none;">
                <mu-button icon slot="right" style="margin-right: -14px">
                    <mu-icon color="#959595" value="border_clear"></mu-icon>
                </mu-button>
                <span style="font-size: 14px;margin-left: -14px">二维码名片</span>
            </mu-appbar>
            </div>
            <div style="height: 45px;line-height: 45px;margin: 0 14px 0 14px">
                <div style="border-top: 0.5px solid rgba(0, 0, 0, 0.2) ;">
                    <span >昵称</span>
                </div>
            </div>
        </div>
        <div style="background: white; margin-top: 16px">
            <div style="height: 45px;line-height: 45px;margin: 0 14px 0 14px">
                <div style="border-top: 0.5px solid rgba(0, 0, 0, 0.2) ;">
                    <span >我的地址</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import my from './my'
    export default {
        data() {
            return {
                show: true
            }
        },
        methods: {
            showCont: function () {
                this.show = false
            }
        },
        components: {
            my
        }
    }
</script>

<style scoped>
.personal{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #ebebeb;
    z-index: 5;
}
</style>
