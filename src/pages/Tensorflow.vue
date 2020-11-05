<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
          <div class="text-center w-full">
              <h1 class="text-2xl mt-4">Tensorflow Object Detection</h1>
              <small>try with cell phone only</small>
          </div>
        
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center">
            <button
              v-if="!isStreaming"
              @click="openCamera"
              class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white px-2 py-1"
            >
              open camera
            </button>
            <div v-else class="flex justify-between">
                <button
              
              @click="stopStreaming"
              class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white px-2 py-1"
            >
              stop streaming
            </button>
                <button
              
              @click="snapshot"
              class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white px-2 py-1"
            >
              snapshot
            </button>
            </div>
          </div>
          <video ref="videoRef" autoplay="true" width="200" src=""></video>
        </div>

        <img
          ref="imgRef"
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          width="200"
          crossorigin="anonymous"
        />
        <div class="w-full text-center my-4">
          <button
            @click="detect"
            class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
          >
            <span v-if="isLoading">loading</span
            ><span v-else>detect object</span>
          </button>
          <div v-if="result.length > 0">
            <p>{{ result[0].class }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { onMounted, ref } from "vue";
import { ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  setup() {
    const imgRef = ref("");
    const videoRef = ref("");
    const isLoading = ref(false);
    const isStreaming = ref(false);
    const result = ref([]);

    //onMounted ı async yapacağız butona bağlayacağız
    // onMounted(async () => {
    //   console.log(imgRef.value);
    //   const img = imgRef.value;
    //   // Load the model.
    //   const model = await cocoSsd.load();

    //   // Classify the image.
    //   const predictions = await model.detect(img);

    //   console.log("Predictions: ");
    //   console.log(predictions);

    //   result.value = predictions;
    // });

    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;
      const model = await cocoSsd.load();
      const predictions = await model.detect(img);
      result.value = predictions;
      isLoading.value = false;
    }

    //kemarayı açalım
    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        console.log(devices.filter((device) => device.kind === "videoinput"));
        const cams = devices.filter((device) => device.kind === "videoinput");
        console.log(cams[0].deviceId);
        const camId = cams[0].deviceId;
        navigator.mediaDevices
          .getUserMedia({ video: { deviceId: { exact: camId } } })
          .then((stream) => {
            isStreaming.value = true;
            videoRef.value.srcObject = stream;
          });
      }
    }
//kamerayı / yayını kapatalım
    function stopStreaming(){
        const stream = videoRef.value.srcObject
        const tracks = stream.getTracks()
        tracks.map((track) => track.stop())
        isStreaming.value = false
    }

//kameradan screenshot almak
function snapshot(){
    const canvas = document.createElement('canvas')
    // console.log(canvas)
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.value,0,0,200,200)
    const data = canvas.toDataURL('image/png')
    imgRef.value.setAttribute('src', data);
    
}

    return {
      imgRef,
      result,
      detect,
      isLoading,
      openCamera,
      videoRef,
      isStreaming,
      stopStreaming,
      snapshot
    };
  },
};
</script>

<style scoped></style>
