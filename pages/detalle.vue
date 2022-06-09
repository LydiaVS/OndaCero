<template>
    <div>
        <div class="menu"><MainMenu/></div>
        <div class="back-green">
            <div class="align"><NuxtLink to="/podcast"> <div class="material-symbols-outlined arrow">expand_more</div> </NuxtLink>
            <h5>Escuchando ahora</h5>
            </div>
            <div class="back-white">
                <div class="back">
                    <div class="img-btns">
                        <img src="Manolo.png" alt="">
                        <div id="btns-perfil2">
                            <GlobalButton :btnText="'seguir'" :textType="'textype2'"  /> 
                            <GlobalButton class="desc" :iconType="'material-symbols-outlined'" :iconName="'arrow_downward'" />
                            <BtnCompartir/></div>
                    </div>
                    <div class="texto-int">
                        <h1>Más de Uno</h1>
                        <p class="subtitle2">Carlos Alsina.One touch easy, la serpiente del Nokia y 1.200</p>
                        <p class="body">¿Qué tienen en común Adele y los coches de choque? <br> ¿Sabes echar gasolina como un profesional o eres tan desastre como nosotras? <br> ¡Escucha, escucha, que hoy hay temazos!</p>
                    </div>
                </div>
                
            </div>
            <Player />
        </div>
        <div class="phone-detalle">
            <div><NuxtLink to="/podcast"> <div class="material-symbols-outlined">chevron_left</div> </NuxtLink>
            <div class="fondo-img">
            <img src="Manolo.png" alt="">
            </div>
            <div class="texto-int">
                <h1>Más de Uno</h1>
                <p class="subtitle2">Carlos Alsina.One touch easy, la serpiente del Nokia y 1.200</p>
                <p class="body">¿Qué tienen en común Adele y los coches de choque? <br> ¿Sabes echar gasolina como un profesional o eres tan desastre como nosotras? <br> ¡Escucha, escucha, que hoy hay temazos!</p>
            </div>
            <Player /> 

        </div>
    </div>
    </div>

</template>
<style lang="sass">
    .align
        display: flex
        align-items: center
    .arrow
        color: $verde-2
        font-size: 50px
        @apply mr-96 ml-10 mt-10
        &:hover
            background-color: $verde
            cursor: pointer
    
    .back-green
        background: $verde
        width: 203,4vh
        height: 90vh
        @media only screen and (max-width: 600px)
            display: none
    h5
        color: $verde-2
        @apply mt-5 ml-36
        
        
    .back-white
        background-color: $blanco
        width: 203,4vh
        height: 110vh
        margin-top: 50px
        border-radius: 84px 84px 14px 0px
        box-shadow: 0px 4px 35px 12px #308D00
    .back 
        display: flex
        align-items: center
        justify-content: center
    .img-btns
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        @apply mt-5
        img
            height: 50vh
            @apply mt-20 mr-28
    .texto-int
        @apply mt-20
        @media only screen and (max-width: 600px)
            text-align: center
            @apply mb-56 mt-10
            
    #btns-perfil2
        display: flex
        @apply mt-5 mr-20
    .phone-detalle
        display: none
        @media only screen and (max-width: 600px)
            display: unset
            .fondo-img
                width: 240px
                width: 220px
                @apply rounded-full
                box-shadow: -10px 17px 50px -33px #72B84E
                margin-left: 70px
                margin-top: 31px
                img
                    width: 200px
                
    .menu
        @media only screen and (max-width: 600px)
            display: none
                

        
</style>