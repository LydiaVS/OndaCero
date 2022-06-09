<template>
<div>
 <div class="nav">
  <div class="logo"> <Logo/> </div>
   <div class="btns">
    <NuxtLink to="/"><GlobalButton  :iconType="'material-symbols-fill'" :iconName="'home'" :propsFont="`fontVariationSettings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48`" /></NuxtLink>
     
       <GlobalButton  
          :iconType="'material-symbols-fill'" 
          :iconName="'favorite'" 
          :propsFont="`fontVariationSettings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48`"/>
   
    <GlobalButton :btnText="'mis seguidos'" :textType="'textype'"   />
    <BarraBusqueda/>
    <BtnPerfilMenu /> 
   </div>
 </div>
 <div class="nav-phone">
   <div class="superior">
     <div class="logo"> <Logo/></div>
      <GlobalButton class="magnify" :iconType="'material-symbols-fill'" :iconName="'search'"  :propsFont="`fontVariationSettings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48`" />
   </div>
   <div class="inferior">
      <GlobalButton  
          :iconType="'material-symbols-fill'" 
          :iconName="'favorite'" 
          :propsFont="`fontVariationSettings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48`"/>
      <NuxtLink to="/"><GlobalButton  :iconType="'material-symbols-fill'" :iconName="'home'" :propsFont="`fontVariationSettings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48`" /></NuxtLink>
      <NuxtLink to="/"><GlobalButton  :iconType="'material-symbols-fill'" :iconName="'person_add'" :propsFont="`fontVariationSettings: 'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 48`" /></NuxtLink>


   </div>
  

   

 </div>
</div>
</template>
<style lang="sass">
  .nav-phone
    display: none
  .nav
    display: flex
    justify-content: space-between
    align-items: center
    .btns
      display: flex 
      @apply pr-10
  @media only screen and (max-width: 600px)
    .nav   
      display: none
    .nav-phone
      display: unset
    .superior
      display: flex
      @apply mb-5
    .inferior
      bottom: 0
      position: fixed
      width: 375px
      height: 75px
      background-color: $verde
      @apply mt-10
      border-radius: 50px 50px 0px 0px
      display: flex
      flex-direction: row
      align-content: center
      justify-content: space-evenly
      align-items: center
      color: white
      

  
</style>
