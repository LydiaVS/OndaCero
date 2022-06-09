<template>
    <div class="list-podcast">
        <div class="list-text">
            <h3 id="azul">Más de uno</h3>
            <p id="margin-top" class="subtitle2">Carlos Alsina</p>
        </div>
        <div> <NuxtLink to="/detalle">
             <PodcastRep :NumPodcast="'1x1'"  :PodcastTitulo="'Gasolina coches de choque y la Adele de ...'" /> </NuxtLink></div>
        <div><NuxtLink to="/detalle"> 
            <PodcastRep :NumPodcast="'1x2'" :PodcastTitulo="'Día de la Madre: los regalos de pretecnología'"/></NuxtLink> </div>
        <div> <PodcastRep :NumPodcast="'1x3'" :PodcastTitulo="'One touch easy, la serpiente del Nokia y 1.200...'" /></div>
        <div> <PodcastRep :NumPodcast="'1x4'" :PodcastTitulo="'Salvando vidas en la casa del terror y traumati...'"/></div>
        <div> <PodcastRep :NumPodcast="'1x5'" :PodcastTitulo="'Tú aguanta viendo la serie 20 años, que luego...'"/></div>
        <div> <PodcastRep :NumPodcast="'1x6'" :PodcastTitulo="'¿Es corazón o melocotón?, Peta Zetas, Push Pop...'"/></div>
    </div>
</template>
<style lang="sass">
    .list-podcast
        height: 820px
        width: 960px
        box-shadow: $sombra3
        border-radius: 84px 84px 0px 0px
    .list-text
        margin-top: 20px
        margin-left: 80px

</style>