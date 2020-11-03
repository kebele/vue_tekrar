<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">real time chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat.message"            
            class="w-full"
            :class="chat.userId === state.userId ? 'text-right' : ''"
          >
            {{ chat.message }}
          </div>
        </div>
      </div>
      <div class="h-8 p-2">
        <input
          type="text"
          v-model="state.message"
          placeholder="start typing..."
          class="p-1 border rounded shadow"
          @keydown.enter="addMessage"
        />
      </div>
    </div>
    <!-- <div v-for="chat in chats" :key="chat.message">{{chat.message}}</div> -->
  </section>
</template>

<script>
// import { onMounted, ref } from 'vue' // ref yerine reactive kullanalım ve realtime olayını görelim
import { onMounted, reactive } from "vue";
import firebase, {chatsRef} from "../utilities/firebase";

export default {
  setup() {
    // const chats = ref({})
    //reactive olayını görelim
    const state = reactive({
    //   chats: {},
      chats: [],
      message: "",
    //   collection: null,
      userId: null,
    });

    onMounted(async () => {
    //   const db = firebase.database();
      //   const collection = db.ref("chats");
    //   state.collection = db.ref("chats");
      //   const data = await collection.once("value");
    //   const data = await state.collection.once("value");
      // console.log(data.val())
      // chats.value = data.val();
      //reactive için
    //   state.chats = data.val();
      //user ıd yi ekleyelim
    //   state.userId = firebase.auth().currentUser.uid;

        // state.collection.on("child_added", (snapshot) => {
        chatsRef.on("child_added", (snapshot) => {
      //     state.chats = snapshot.val();
      state.userId = firebase.auth().currentUser.uid;
    //   console.log(snapshot.key)
    state.chats.push({key:snapshot.key, ...snapshot.val()})
        });
    });

    //inputtan message girecek function
    //vurada yapacağımız şey message db ye gitsin oradan çekilsin
    //collection tanılayalım, state e
    //
    function addMessage() {
      //db ye message ı gönderelim
    //   const newChat = state.collection.push();
      const newChat = chatsRef.push();
      //userId bilgisini yollayalım, buradan alıp onMounted a
      // var userId = firebase.auth().currentUser.uid;
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
      //gönderim başarılı ancak şu anda db den mesajları çekerken hata veriyor, bunu çözelim ancak önce user olayınıda ekleyelim, login ile firebase e giriş yapalım,
    }

    // return { chats } //reactive için
    return { state, addMessage };
  },
};
</script>

<style scoped></style>
