<template>
  <div>
    <div><MainMenu/></div>
    <NuxtLink to="/Podcast"><div><CarrouselCard/></div></NuxtLink>
    
    <h5 class="ml" id="verde">Más de Uno</h5>
    <div class="conjuntoCards">
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
    </div>

    <h5 class="ml" id="verde">Cultura y humor</h5>
      <div class="conjuntoCards">
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
    </div>
    <h5 class="ml" id="verde">Deportes</h5>
        <div class="conjuntoCards">
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
    </div>
    <h5 class="ml" id="verde">Economía</h5>
        <div class="conjuntoCards">
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
    </div>
    <h5 class="ml" id="verde">Innovación</h5>
        <div class="conjuntoCards">
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
    </div>
    <h5 class="ml" id="verde">Sociedad</h5>
        <div class="conjuntoCards">
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
      <div>
        <div><PerfilCard/></div>
        <div><PerfilCard/></div>
      </div>
      <div class="nada"></div>
    </div>
    
  </div>
</template>

<style lang="sass">
  .nada
    display: none
  .conjuntoCards
    display: flex

  .ml
    margin-left: 50px
  @media only screen and (max-width: 600px)
    .ml
      margin-left: 20px
    .conjuntoCards
      flex-direction: column
    .nada
      display: unset
      @apply mb-20

</style>

<script>
import ListaPodcast from '../components/ListaPodcast.vue';
export default {
    name: "IndexPage",
    components: { ListaPodcast }
}
</script>
