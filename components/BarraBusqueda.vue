<template>
    <div class="input">
        <input type="text" id="buscar" > 
        <GlobalButton class="magnify" :iconType="'material-symbols-fill'" :iconName="'search'"  :propsFont="`fontVariationSettings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48`" />
    </div>
</template>
<style lang="sass">
    .input
        display: flex
        align-items: center
        margin-left: 10px
    #buscar
        width: 260px
        height: 48px
        border: 3px solid $verde
        @apply rounded-3xl 
    .magnify
        @apply rounded-full -ml-12
        display: flex
        align-items: center
        justify-content: center
        color: white
        @media only screen and (max-width: 600px)
            @apply ml-48


</style>