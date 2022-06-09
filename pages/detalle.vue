<template>
    <div>
        <div><MainMenu/></div>
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
    #btns-perfil2
        display: flex
        @apply mt-5 mr-20

        
</style>