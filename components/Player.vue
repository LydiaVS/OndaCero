<template>
  <div class="player">
    <!-- song details -->
    <div class="song_title">{{song.title}}</div>
    <div class="song_author">{{song.author}}</div>

    <!-- control buttons -->
    <div class="controls">
      <button class="btn_control" disabled>
        <span class="material-symbols-outlined style-player">shuffle</span>
      </button>
      <button class="btn_control" disabled>
        <span class="material-symbols-outlined style-player">skip_previous</span>
      </button>
      <button
        class="btn_control playplause"
        @click="playpause">
          <span v-show="!isPlaiying" class="material-symbols-outlined  style-player">play_circle</span>
          <span v-show="isPlaiying" class="material-symbols-outlined  style-player">pause_circle</span>
      </button>
      <button class="btn_control" disabled>
        <span class="material-symbols-outlined  style-player">skip_next</span>
      </button>
      <button
        class="btn_control repeat"
        :class="this.isLooping ? 'active': ''"
        @click="toggleLoop">
        <span class="material-symbols-outlined  style-player">repeat</span>
      </button>
    </div>
    <!-- progress bar -->
    <div class="progress_bar">
      <div
        @click="seek($event)"
        ref="progress"
        class="no_progress">
          <div
            class="progress"
            :style="{'width' : step + '%'}">
          </div>

      </div>
      <div
        class="progress_btn_pos"
        :style="{'width' : step + '%'}">
          <span
            ref="progressbtn"
            id="progressButtonTimer"
            class="progress_btn"></span>
      </div>

    </div>
    <div class="times">
        <div class="start">0:00</div>
        <div class="end">{{song.end}}</div>
    </div>

  </div>
</template>

<script>
import {Howl, Howler} from 'howler';
export default {
  data(){
    return{
      sound: Object,
      isPlaiying: false,
      isLooping: false,
      step: 0,
      song: {
        title: "Más de Uno",
        author: "Gasolina coches de choque y la Adele de la feria...",
        src: "audio/hsm2.mp3",
        start: 0,
        end: 0
      }
    }
  },
  mounted(){
    this.sound = new Howl({
      src: [this.song.src],
      onload: () => {
        this.song.end = `${Math.round(this.sound._duration/60)}:${Math.round(this.sound._duration)}`;
      }
    });
    this.getTiming();
  },
  methods: {
    playpause(){
      if(this.sound.playing()){
        this.sound.pause();
        this.isPlaiying = false;
      }else{
        this.sound.play();
        this.isPlaiying = true;
      }
    },
    getTiming() {
      setInterval(() => {
        this.updateWidth();
      }, 300)
    },
    updateWidth() {
      if (this.sound.playing()) {
        let width = (this.sound.seek() / this.sound._duration) * 100;
        this.step = Math.round(width);
      }
    },
    toggleLoop(){
      this.isLooping = !this.isLooping;
      this.sound._loop = this.isLooping;
      this.sound._sounds[0]._loop = this.isLooping;
    },
    seek(event){
      const progress = this.$refs.progress;
      let porcent =  event.layerX / progress.clientWidth;
      if (this.sound) {
          if (this.sound.playing()) {
            this.sound.pause();
            this.sound.seek(this.sound._duration * porcent);
            this.sound.play();
            this.step = porcent * 100;
          }else{
            this.sound.seek(this.sound._duration * porcent);
            this.step = porcent * 100;
          }
      }
  }
  }
}
</script>


<style lang="sass">
    .player
        width: 203vh
        bottom: 0
        position: fixed
        border-radius: 85px 85px 0px 0px
        background-color: $verde
        box-shadow: 0px 4px 35px 14px rgba(113, 184, 78, 0.5)
        @apply   p-10
        .song_title
          font-family: 'Nunito', sans-serif
          font-size: 18pt
          font-weight: 400
          color: white
        .song_author
          font-family: 'Nunito', sans-serif
          font-size: 10pt
          font-weight: 300
          color: white 
    .controls
        @apply p-2
        display: flex
        justify-content: center
        .btn_control
            @apply p-2 w-10 h-10
            border-radius: 50%
            &.playplause
                color: white
            &.repeat
                &.active
                    color: white

            &:disabled
                color: gray
        .style-player
          color: white
          &:hover
            color: $verde-2
            background-color: $verde
    .progress_bar
        @apply my-2
        background-color: $blanco
        height: 5px
        width: 100%
        @apply relative rounded-full
        .no_progress
            @apply h-1 cursor-pointer rounded-full bg-white
            background-color: $blanco
            .progress
                @apply flex w-full justify-end h-1 rounded-full relative
                background-color: $azul
    .progress_btn_pos
        @apply flex w-full justify-end h-1 rounded-full relative
        .progress_btn
            @apply w-2 h-2 md:w-4 md:h-4  absolute rounded-full shadow
            background-color: white
            border: 1px solid #ccc
            top: -10px  
    .times
        display: flex
        justify-content: space-between
        font-family: 'Nunito', sans-serif
        font-size: 9pt
        font-weight: 300
        color: white

</style> 
