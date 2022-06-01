<template>
    <button class="home">
        <span v-if="icon"></span>
        {{icon}}
        <svg class="icon-home" width="25" height="26" viewBox="0 0 25 26"  xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5918 1.64253C10.989 1.31719 11.4866 1.1394 12 1.1394C12.5134 1.1394 13.011 1.31719 13.4082 1.64253L21.1582 7.96135C21.4219 8.17756 21.6343 8.44969 21.7799 8.75805C21.9254 9.06642 22.0006 9.40329 22 9.7443V21.2061C22 22.469 20.9929 23.4925 19.75 23.4925H16.75C15.5071 23.4925 14.5 22.469 14.5 21.2061V15.6984C14.5 15.2778 14.1647 14.9366 13.75 14.9366H10.25C9.83588 14.9366 9.5 15.2778 9.5 15.6984V21.2066C9.5 22.4696 8.49294 23.4931 7.25 23.4931H4.25C3.00765 23.4925 2 22.469 2 21.2061V9.7443C1.99937 9.40329 2.07456 9.06642 2.22015 8.75805C2.36573 8.44969 2.57806 8.17756 2.84177 7.96135L10.5918 1.64253Z"/>
        </svg>
    </button>
</template>
<style lang="sass">
    .home
        height: 48px
        width: 48px
        background-color: $verde 
        @apply rounded-full
        display: flex
        align-items: center
        justify-content: center
        .icon-home
            fill: $blanco
        
        &:hover
            background-color: $verde-2
            .icon-home
                fill: $verde
    .fav
        height: 48px
        width: 48px
        @apply rounded-full
        background-color: $verde
        display: flex
        align-items: center
        justify-content: center
        &:hover 
            background-color: $verde-2
            #fav
                fill: $verde
                stroke: $verde
    #fav
        fill: $blanco
        stroke: $blanco   
</style>
<script>
    export default {
         props:['icon']
        
    }
</script>