<template>
    <button :class="{'active': activeTab !== 1, 'inactive': activeTab === 1}" id="btn" @click="setActiveTab">seguir</button>
</template>
<style lang="sass">
    .inactive
        width: 120px
        height: 35px
        background-color: $verde
        @apply rounded-3xl
        color: $verde-2
        &:hover
            background-color: $blanco
            color: $verde
            border: 3px solid $verde
    .active
        width: 120px
        height: 35px
        background-color: $blanco
        @apply rounded-3xl
        color: $verde
        border: 3px solid $verde
        &:hover
            background-color: $verde
            color: $verde-2
        
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