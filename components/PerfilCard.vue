<template>
    <div class="card-perfil"> 
        <div><img class="img-perfil" src="../assets/img/Manolo.png" alt=""></div>
        <div class="txt-perfil">
            <h5 id="azul">Más de Uno</h5>
            <p class="subtitle2" >Carlos Alsina</p>
            
        </div>
        <div class="padding"><BtnSeguir2/></div>
    </div>
</template>
<style lang="sass">
    .card-perfil
        width: 500px
        height: 160px
        background-color: $blanco
        @apply rounded-full
        box-shadow: $sombra2
        display: flex
        justify-content: flex-start
        align-items: center
        .padding
            padding-left: 30px
    .img-perfil
        height: 160px
    #azul
        color: $azul
    #verde
        color: $verde

        

</style>