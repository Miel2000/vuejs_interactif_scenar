<template>
<div>
    <div v-if="audioInfos.url" class="audio-container">
         
            <audio 
                id="audioBalise"
                :volume="audioInfos.volumed"
                autoplay
        
                @timeupdate="onTimeUpdate"
                ref="audioBox"
                :isContinuePlaying=audioInfos.isContinue
            >
                <source :src="'/assets/mp3/' + audioInfos.url"/>
            
            </audio>
    </div>

</div>
</template>
<script>
export default {
  name: "ComponentAudio",

  components: {},

  props: {
    audioInfos: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  beforeUpdate() {},

  mounted() {
    const audioBalise = document.getElementById("audioBalise");
    audioBalise.volume = 0.8;
  },

  methods: {
    playSound() {
      console.log("playsouunnd");
    },

    audioBox: function() {
      console.log("AUDIOBOX : ", this.$refs.audioBox);
    },

    onTimeUpdate(event) {
      console.log(event.currentTarget.currentTime);
      // if (event.currentTarget.currentTime >= 35) {
      //   console.log("yeboi c pas mal");
      // }
    },
  },
};
</script>
