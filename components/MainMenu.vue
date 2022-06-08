<template>
 <div class="nav">
  <div class="logo"> <Logo/> </div>
   <div class="btns">
    <NuxtLink to="/"><GlobalButton  :iconType="'material-symbols-fill'" :iconName="'home'" /></NuxtLink>
    <NuxtLink to="/fav"> 
       <GlobalButton  :iconType="'material-symbols-fill'" :iconName="'favorite'" />
    </NuxtLink>
    <NuxtLink to="/seguidos"><GlobalButton :btnText="'mis seguidos'" :textType="'textype'"  /> </NuxtLink>
    <BarraBusqueda/>
    <BtnPerfilMenu /> 
   </div>
 </div>
</template>
<style lang="sass">
  .nav
    display: flex
    justify-content: space-between
    align-items: center
    @media only screen and (max-width: 800 px)
     
    .btns
      display: flex 
      @apply pr-10
  
</style>
