<template>
 <div class="nav">
  <div class="logo"> <Logo/> </div>
   <div class="btns">
    <BtnHomeMenu :icon="''"/>
    <BtnFavsMenu/>
    <BtnSeguirMenu/>
    <BarraBusqueda/>
    <BtnPerfilMenu/>
   </div>
 </div>
</template>
<style lang="sass">
  .nav
    display: flex
    justify-content: space-between
    align-items: center
    @media only screen and (max-width: 800px)
     
    .btns
      display: flex 
      @apply pr-10
  
</style>
