<template>
    <div class="input">
        <input type="text" id="buscar" > 
        <GlobalButton class="magnify" :iconType="'material-symbols-fill'" :iconName="'search'" />
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


</style>