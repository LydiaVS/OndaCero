<template>
    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" id="btn" @click="setActiveTab">seguir</button>
</template>
<style lang="sass">
    .is-active
        width: 150px
        height: 48px
        background-color: $verde
        @apply rounded-3xl
        color: $verde-2
    .initial
        width: 150px
        height: 48px
        background-color: $verde-2
        @apply rounded-3xl
        color: $verde
        
    #btn 
        font-family: 'Nunito', sans-serif
        font-size: 12pt
        font-weight: 900 

</style>
<script>
     export default {
      data () {
        return {
            activeTab: 0
        }
      },
      methods: {
          setActiveTab(){
              let _this = this; 
              _this.activeTab = 1;
          }
      }
    }
</script>