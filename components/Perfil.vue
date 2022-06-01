<template>
 <div class="perfl-2">
     <div> <img src="/Manolo.png" alt=""></div>
     <div >
         <h4 id="azul" > Más de uno</h4>
         <p id="margin-top" class="subtitle2">Carlos Alsina</p>
     </div>
     <div id="btns-perfil">
        <BtnSeguir3/>
        <BtnDescargar/>
        <BtnCompartir/>
         
     </div>

 </div>
  
</template>

<script>
export default {

}
</script>

<style lang="sass">
    .perfl-2
        width: 400px 
        height: 520px
        box-shadow: $sombra2
        @apply rounded-full
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        margin-right: 1100px
        position: fixed
        img
            height: 170px
    #btns-perfil
        display: flex
        align-items: center
        justify-content: center
        margin-top: 15px
    #margin-top
        margin-top: -15px



</style>