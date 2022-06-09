<template>
    <NuxtLink to="/Podcast"><div class="carrousel"> 
        <div><img src="/Manolo.png" alt=""></div>
        <div class="txt">
            <h5 id="verde">Los programas de Onda Cero</h5>
            <h1>Más de Uno</h1>
            <p class="subtitle1">Carlos Alsina.Las mañanas de OndaCero</p>
            <div><GlobalButton :btnText="'seguir'" :textType="'textype'"  /> </div>
        </div>
    </div></NuxtLink>
</template>
<style lang="sass">
    .carrousel
        width: 1400px
        height: 400px
        background-color: $blanco
        @apply rounded-full
        box-shadow: $sombra1
        display: flex
        align-items: center
        justify-content: space-evenly
        div
            img
                height: 350px
    .txt 
        display: flex
        flex-direction: column
        justify-content: center
    @media only screen and (max-width: 600px)
        .carrousel 
            width: 345px
            height: 120px
            div
                img 
                    height: 85px
        .txt
            h5
                display: none
            div
                display: none
    
</style>