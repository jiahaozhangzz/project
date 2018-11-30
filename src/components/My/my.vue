<template>
    <div class="main" >
        <qrcode v-if="show"></qrcode>
        <personal v-if="per"></personal>
        <div @click="showPer">
        <mu-appbar class="border" style="width: 100%; height: 70px " >
            <mu-avatar slot="left">
                <img src="../../../static/images/g.png" style="border-radius: 0">
            </mu-avatar>
            <div style="">
                <p style="margin: 40px 1px 1px 0; font-size: 18px">jack</p>
                <p style="margin: -32px 1px 36px 0; font-size: 14px; color: #ababab">微信号:jack001 </p>
            </div>
            <mu-button icon slot="right" @click="showCont">
                <mu-icon color="#ababab" value="border_clear" ></mu-icon>
            </mu-button>
        </mu-appbar>
        </div>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="account_balance_wallet"></mu-icon>
            </mu-button>
            钱包
        </mu-appbar>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="collections_bookmark"></mu-icon>
            </mu-button>
            收藏
        </mu-appbar>
        <div class="bor"></div>
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="panorama"></mu-icon>
            </mu-button>
            相册
        </mu-appbar>
        <div class="bor"></div>
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="credit_card"></mu-icon>
            </mu-button>
            卡包
        </mu-appbar>
        <div class="bor"></div>
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="yellow" value="face"></mu-icon>
            </mu-button>
            表情
        </mu-appbar>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="brightness_low"></mu-icon>
            </mu-button>
            设置
        </mu-appbar>

    </div>
</template>

<script>
    import qrcode from './qrcode'
    import personal from './personal'
    export default {
        data() {
            return {
                show: false,
                per: false
            }
        },
        methods: {
            showCont: function () {
                this.show = !this.show
            },
            showPer: function () {
                this.per = !this.per
            }
            },
            components: {
                qrcode,
                personal
            }
        }
</script>

<style scoped>
    .mu-appbar {
         background-color: white;
         box-shadow: none;
     }
    .border{
        margin-top: 15px;
    }
    .mu-avatar {
        margin-left: 5px;
    }
    .bor{
        width: 94%;
        height: 1px;
        background: #d7d7d7;
        text-align: center;
        margin-left: 14px;
    }
</style>
