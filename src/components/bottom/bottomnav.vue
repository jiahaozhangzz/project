<template>
    <div class="border">
       <mu-container>
           <mu-bottom-nav @change="change" :value.sync="one">
               <mu-bottom-nav-item value="wechat" title="微信" icon="chat_bubble_outline"></mu-bottom-nav-item>
               <mu-bottom-nav-item value="maillist" title="通讯录" icon="people_outline"></mu-bottom-nav-item>
               <mu-bottom-nav-item value="find" title="发现" icon="explore"></mu-bottom-nav-item>
               <mu-bottom-nav-item value="my" title="我" icon="person_outline"></mu-bottom-nav-item>
           </mu-bottom-nav>
       </mu-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                one: 'wechat'
            }
        },
        methods: {
            change(val) {
                this.$router.push(val)
            }
        }
    }
</script>

<style scoped>
.border {
    z-index: 55;
    border-top: 1px solid #dadada;
}
</style>
