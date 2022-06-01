<template>
    <div class="lista">
        <h6 v-if="NumPodcast">{{NumPodcast}}</h6>
        <p v-if="PodcastTitulo" class="subtitle3" >{{PodcastTitulo}}</p>

    </div>
</template>
<style lang="sass">
    .lista
        width: 800px
        height: 80px
        @apply rounded-full 
        margin-left: 60px
        margin-top: 30px
        display: flex
        align-items: center
        cursor: pointer
        &:hover
            background-color: $verde-2
        h6
            margin-right: 10px
            margin-left: 20px


</style>
<script>
    export default {
        props:['NumPodcast','PodcastTitulo']
        
    }
</script>