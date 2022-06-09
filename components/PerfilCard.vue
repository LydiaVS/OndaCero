<template>
    <div class="card-perfil"> 
        <div><img class="img-perfil" src="/Manolo.png" alt=""></div>
        <div class="txt-perfil">
            <h5 id="azul">Más de Uno</h5>
            <p class="subtitle2" >Carlos Alsina</p>
            
        </div>
        <div class="padding"><BtnSeguir2 /></div>
    </div>
</template>
<style lang="sass">
    .card-perfil
        width: 500px
        height: 160px
        background-color: $blanco 
        @apply rounded-full 
        margin: 80px
        box-shadow: $sombra2
        display: flex
        justify-content: flex-start
        align-items: center
        cursor: pointer
        &:hover
            background-color: $verde
            .subtitle2
                color: $verde-2
            .follow2
                background-color: $blanco
                border: 3px solid $verde-2
                 
        .padding
            padding-left: 30px
    .img-perfil
        height: 160px
    #azul
        color: $azul
    #verde
        color: $verde
    @media only screen and (max-width: 600px)
        .card-perfil
            width: 325px
            height: 88px
            margin: 20px
        .img-perfil
            height: 87px


        

</style>