<template>
    <button>
       <span 
            :style="propsFont"
            v-if="iconName" 
            class="material-symbols-outlined"
            :class="iconType"
            :id="idIcon">
            
         {{ iconName }}
        </span>
        <p 
            v-if="btnText"
            :class="textType"
            >{{ btnText }}</p>
    </button>
</template>

<script>
export default {
    props: ['iconType', 'iconName', 'btnText', 'textType','btnText', 'propsFont']
}
</script>
<style lang="sass">

    .textype 
        width: 150px
        height: 48px
        background-color: $verde
        @apply rounded-3xl
        color: white
        font-family: 'Nunito', sans-serif
        font-size: 12pt
        font-weight: 900
        display: flex
        align-content: center
        align-items: center
        justify-content: center
        &:hover 
            background-color: $verde-2
            color: $verde
            border: 3px solid $verde
    .textype2 
        width: 120px
        height: 35px
        background-color: $blanco
        @apply rounded-3xl
        color: $verde
        border: 3px solid $verde
        font-family: 'Nunito', sans-serif
        font-size: 12pt
        font-weight: 900
        display: flex
        align-content: center
        align-items: center
        justify-content: center
        &:hover
            background-color: $verde
            color: $verde-2
        @media only screen and (max-width: 600px)
            height: 30px
            width: 120px
            font-size: 10pt
            margin-top: 10px
    




</style>
