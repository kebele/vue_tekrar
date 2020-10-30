<template>
  <div class="flex flex-wrap w-full relative">
    <!-- <div
      v-if="currentSlide == 0"
      class="absolute w-full bg-blue-600"
      style="height:350px"
    ></div>
    <div
      v-if="currentSlide == 1"
      class="absolute w-full bg-yellow-600"
      style="height:350px"
    ></div>
    <div
      v-if="currentSlide == 2"
      class="absolute w-full bg-teal-600"
      style="height:350px"
    ></div> -->

    <!-- yukarının daha efektifini aşağıya v-for ile yazdık 
burada v-if ve v-for u aynı beraber kullanmaya kalkarsak hata veri bu yüzden farklı diblete ayırdık-->
    <div v-for="(color, index) in slides" :key="color" class="absolute w-full">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height : 350px"
        ></div>
      </transition>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
          <transition name="fade">
            <h1 v-if="isTitleShowing">slider</h1>          
          </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 rounded border"
        >
          toggle text
        </button>
      </div>
    </div> -->
    <div class="w-full" style="height:340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slide,index) in slides"
          :key="slide"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      slides: ["bg-blue-600", "bg-yellow-600", "bg-teal-600"],
      isTitleShowing: false,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
      // console.log("değiştim slide number :" + this.currentSlide)
      //aşağının daha efektifini yukarı yazdık
      //   if (this.currentSlide === 2) {
      //     this.currentSlide = 0;
      //   } else {
      //     this.currentSlide++;
      //   }
    }, 2000);
    //buradaki kullanımda başka bir sayfaya gittimizde dahi bu func/slider çalışmaya devam ediyor, bunu durdurmamız lazım, BeforeUnmount life cycle ile mesela
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
      makeActive(index){
          this.currentSlide = index;
      }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
