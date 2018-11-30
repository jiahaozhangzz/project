<template>
    <div class="qr" v-if="show">
        <mu-appbar style="width: 100%; box-shadow: none; background: #303030; color: white">
            <mu-button icon slot="left" style="margin-right: -20px" @click="showCont">
                <mu-icon size="36" value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            二维码名片
            <mu-button flat slot="right">
                <mu-icon size="38" value="more_horiz"></mu-icon>
            </mu-button>
        </mu-appbar>
        <div class="qrer">
            <div class="qr_top">
                <mu-appbar class="border" style=" width: 100%; height: 70px; box-shadow: none;background: white ">
                    <mu-avatar slot="left" style="margin-left:8px;">
                        <img src="../../../static/images/g.png" style="border-radius: 0">
                    </mu-avatar>
                    <div style="">
                        <p style="margin: 40px 1px 1px 0; font-size: 18px">jack
                            <mu-button icon >
                                <mu-icon style="margin-left:-18px; margin-bottom: -10px" color="#23a5f0" size="18" value="person"></mu-icon>
                            </mu-button>
                        </p>
                        <p style="margin: -32px 1px 36px 0; font-size: 14px; color: #ababab">微信号:jack001 </p>
                    </div>
                </mu-appbar>
            </div>
            <div class="qrimg">
                <img src="../../../static/images/qr.jpg" width="80%" height="80%">
            </div>
            <div class="qrtext">
                <p>扫一扫上面的二维码图案，看我微信</p>
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
    .qr {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #303030;
        z-index: 5;
    }

    .qrer {
        height: 60%;
        width: 85%;
        margin: 100px auto;
        background: white;
    }
    .qrimg{
        text-align: center;
        margin-top: 30px;
    }
    .qrtext{
        margin-top: 10px;
        text-align: center;
        color: #c5c5c5;
    }

</style>
