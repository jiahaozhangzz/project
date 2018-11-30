<template>
    <div>
        <mu-appbar class="bor" style="width: 100%; height: 50px">
            <mu-button icon slot="left">
                <mu-icon color="#ffbd06" value="account_box"></mu-icon>
            </mu-button>
            <div style="font-size: 16px">新的朋友</div>
        </mu-appbar>
        <mu-appbar class="bor" style="width: 100%; height: 50px">
            <mu-button icon slot="left">
                <mu-icon color="#169313" value="account_box"></mu-icon>
            </mu-button>
            <div style="font-size: 16px">群聊</div>
        </mu-appbar>
        <mu-appbar class="bor" style="width: 100%; height: 50px">
            <mu-button icon slot="left">
                <mu-icon color="#2fb3f4" value="beenhere"></mu-icon>
            </mu-button>
            <div style="font-size: 16px">标签</div>
        </mu-appbar>
        <mu-appbar class="bor" style="width: 100%; height: 50px">
            <mu-button icon slot="left">
                <mu-icon color="#2fb3f4" value="account_box"></mu-icon>
            </mu-button>
            <div style="font-size: 16px">公众号</div>
        </mu-appbar>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .mu-appbar {
        background-color: white;
        box-shadow: none;

    }
    .mu-icon{
        font-size: 34px;
    }
    .bor{
        border-top: 0.5px solid rgba(0, 0, 0, 0.2) ;

    }
</style>
