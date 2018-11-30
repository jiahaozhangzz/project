<template>
    <div class="main">
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="radio_button_unchecked"></mu-icon>
            </mu-button>
            朋友圈
        </mu-appbar>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="fullscreen"></mu-icon>
            </mu-button>
            扫一扫
        </mu-appbar>
        <div class="bor"></div>
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="style"></mu-icon>
            </mu-button>
            摇一摇
        </mu-appbar>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#f9c800" value="visibility"></mu-icon>
            </mu-button>
            看一看
        </mu-appbar>
        <div class="bor"></div>
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#f46664" value="search"></mu-icon>
            </mu-button>
            搜一搜
        </mu-appbar>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="wc"></mu-icon>
            </mu-button>
            附近的人
        </mu-appbar>
        <div class="bor"></div>
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#23a5f0" value="opacity"></mu-icon>
            </mu-button>
            漂流瓶
        </mu-appbar>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#f46664" value="shopping_cart"></mu-icon>
            </mu-button>
            购物
        </mu-appbar>
        <div class="bor"></div>
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#fbc118" value="games"></mu-icon>
            </mu-button>
            游戏
        </mu-appbar>
        <mu-appbar class="border" style="width: 100%;">
            <mu-button icon slot="left">
                <mu-icon color="#7f83dc" value="all_inclusive"></mu-icon>
            </mu-button>
            小程序
        </mu-appbar>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .main{
        overflow: scroll;
    }
    .mu-appbar {
        background-color: white;
        box-shadow: none;
        height: 50px;
    }
    .border{
        margin-top: 15px;
    }
    .bor{
        width: 94%;
        height: 1px;
        background: #d7d7d7;
        text-align: center;
        margin-left: 14px;
    }
</style>
