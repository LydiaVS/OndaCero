<template>
<div>
        <button 
        :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" 
        id="btn" 
        @click="setActiveTab"
        v-on:click.prevent> 
        <span v-if="texto">{{texto}}</span>
        
        </button>

</div>

</template>
<style lang="sass">
    .is-active
        width: 150px
        height: 48px
        background-color: $verde
        @apply rounded-3xl
        color: $verde-2
        &:hover
            background-color: $verde-2
            color: $verde
    .initial
        width: 150px
        height: 48px
        background-color: $verde-2
        @apply rounded-3xl
        color: $verde
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
      },
      name: "BtnSeguir",
      props:['texto']
    }
</script>