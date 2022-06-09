<template>
    <div class="list-podcast">
        <div class="list-text">
            <img class="none manolo" src="Manolo.png" alt="">
            <div class="list-sinimg">
            <h3 id="azul">Más de uno</h3>
            <p id="margin-top" class="subtitle2">Carlos Alsina</p>
            <GlobalButton class="none" :btnText="'seguir'" :textType="'textype2'"  /> 
            </div>
        </div>
        <div> <NuxtLink to="/detalle">
             <PodcastRep :NumPodcast="'1x1'"  :PodcastTitulo="'Gasolina coches de choque y la Adele de ...'" /> </NuxtLink></div>
        <div><NuxtLink to="/detalle"> 
            <PodcastRep :NumPodcast="'1x2'" :PodcastTitulo="'Día de la Madre: los regalos de pretecnología'"/></NuxtLink> </div>
        <div> <NuxtLink to="/detalle"><PodcastRep :NumPodcast="'1x3'" :PodcastTitulo="'One touch easy, la serpiente del Nokia y 1.200...'" /></NuxtLink></div>
        <div><NuxtLink to="/detalle"> <PodcastRep :NumPodcast="'1x4'" :PodcastTitulo="'Salvando vidas en la casa del terror y traumati...'"/></NuxtLink></div>
        <div><NuxtLink to="/detalle"> <PodcastRep :NumPodcast="'1x5'" :PodcastTitulo="'Tú aguanta viendo la serie 20 años, que luego...'"/></NuxtLink></div>
        <div><NuxtLink to="/detalle"> <PodcastRep :NumPodcast="'1x6'" :PodcastTitulo="'¿Es corazón o melocotón?, Peta Zetas, Push Pop...'"/></NuxtLink></div>
    <div class="nada"></div>
    </div>
</template>
<style lang="sass">
    .none
        display: none
        @media only screen and (max-width: 600px)
            display: unset
    .manolo
        margin-left: -163px
        margin-top: -60
        height: 100px
    .list-podcast
        height: 820px
        width: 960px
        box-shadow: $sombra3
        border-radius: 84px 84px 0px 0px
        @media only screen and (max-width: 600px)
            height: 500px
            width: 375px
    .list-text
        margin-top: 20px
        margin-left: 80px
        @media only screen and (max-width: 600px)
            margin-left: 176px
            margin-top: 28px
            display: flex
    .list-sinimg
        @media only screen and (max-width: 600px)
            display: flex
            flex-direction: column
            margin-left: 38px
            margin-top: 10px

          
</style>