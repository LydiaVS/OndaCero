<template>
 <div class="nav">
  <div class="logo"> <Logo/> </div>
   <div class="btns">
    <BtnHomeMenu/>
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
    .btns
      display: flex 
      @apply pr-10
  
</style>
