<template>
    <div class="list-podcast">
        <div class="list-text">
            <h3 id="azul">Más de uno</h3>
            <p id="margin-top" class="subtitle2">Carlos Alsina</p>
        </div>
        <div> <PodcastRep :NumPodcast="'1x1'" :PodcastTitulo="'Gasolina coches de choque y la Adele de la feria'" /></div>
        <div> <PodcastRep :NumPodcast="'1x2'" /></div>
        <div> <PodcastRep :NumPodcast="'1x3'" /></div>
        <div> <PodcastRep :NumPodcast="'1x4'" /></div>
        <div> <PodcastRep :NumPodcast="'1x5'" /></div>
        <div> <PodcastRep :NumPodcast="'1x6'" /></div>
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