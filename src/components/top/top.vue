<template>
   <div class="top">
       <mu-appbar style="width: 100%;" color="#303030">
           <div style="color: white">微信</div>
           <mu-button icon slot="right" @click="showtwo" >
               <mu-icon color="white" size="36" value="search"></mu-icon>
           </mu-button>
           <mu-menu slot="right">
               <mu-button flat>
                   <mu-icon  color="white"  size="36" value="add"></mu-icon>
               </mu-button>
               <mu-list slot="content">
                   <mu-list-item button>
                       <mu-list-item-content >
                           <mu-list-item-title>
                               <mu-icon color="white" value="chat_bubble" style="vertical-align: bottom"></mu-icon>
                               <span style="color: white">发起群聊</span>
                           </mu-list-item-title>
                       </mu-list-item-content>
                   </mu-list-item>
                   <div class="border"></div>
                   <mu-list-item button>
                       <mu-list-item-content >
                           <mu-list-item-title >
                               <mu-icon color="white" value="person_add" style="vertical-align: bottom"></mu-icon>
                               <span style="color: white">添加朋友</span>
                           </mu-list-item-title>
                       </mu-list-item-content>
                   </mu-list-item>
                   <div class="border"></div>
                   <mu-list-item button>
                       <mu-list-item-content >
                           <mu-list-item-title >
                               <mu-icon color="white" value="select_all" style="vertical-align: bottom"></mu-icon>
                               <span style="color: white">扫一扫</span>
                           </mu-list-item-title>
                       </mu-list-item-content>
                   </mu-list-item>
                   <div class="border"></div>
                   <mu-list-item button>
                       <mu-list-item-content >
                           <mu-list-item-title >
                               <mu-icon color="white" value="check_box" style="vertical-align: bottom"></mu-icon>
                               <span style="color: white">收付款</span>
                           </mu-list-item-title>
                       </mu-list-item-content>
                   </mu-list-item>
                   <div class="border"></div>
                   <mu-list-item button>
                       <mu-list-item-content >
                           <mu-list-item-title >
                               <mu-icon color="white" value="email" style="vertical-align: bottom"></mu-icon>
                               <span style="color: white">帮助与反馈</span>
                           </mu-list-item-title>
                       </mu-list-item-content>
                   </mu-list-item>
               </mu-list>
           </mu-menu>
       </mu-appbar>

   </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {TOGGLE_DETAIL} from '../../store/mutations-type'
    export default {

        methods: {
            ...mapMutations({
                togglDetail: TOGGLE_DETAIL
            }),
            showtwo() {
                this.togglDetail(true)
            }
        }
    }
</script>

<style scoped>
.mu-appbar{
    background-color: #303030;
    box-shadow: none;
    z-index: 2;
}
.mu-list{
    padding: 0;
    background-color: #373a41;
}

.border{
    border-bottom: 1px solid #000;
}
</style>
