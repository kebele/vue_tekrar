<template>
  <nav class="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <!-- <a href="#">DC Heroes</a> -->
    <!-- <router-link class="mx-2" to="/dc-heroes">dc heroes</router-link>
    <router-link class="mx-2" to="/calendar">calendar</router-link>
    <router-link class="mx-2" to="/markdown">markdown</router-link> -->
    <!-- v-for ile yapalım linkleri -->
    <router-link
      class="mx-2"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button  v-if="isLoggedIn" class="mx-2" @click="logout">logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">login</button>
    <!-- 
      EMIT 
      burada durum şu bir modal açacağız, acacak buton burada, çünkü header da buton görünecek, tıklayınca LoginModal.vue adında comp çalışacak, ve bizim login ekranı görünecek, 
      bunu buradan emitleyeceğiz ve kullanacağımız componentten bu emit i yakalayacağız, burada open-login-modal adında bir event emitledik, bunu App.vue daki <AppHeader /> yakalayacağız,
       yani bu emiti dinleyecek ve yakalayacak komut
       <AppHeader @open-login-header="isLoginOpen = true"/>
       burada kebab-case kullanıldığını tavsiye ediyor, 

      şimdi burada AppHeader.vue yani buradaki button olayı başlatıyor tıklayınca open-login-modal adını verdiğimiz eventi emitliyor
  şimdi bunu bir yerden bu verdiğimiz isim ile yakalayacağız, 
      -->
  </nav>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
  // props : ['isLoggedIn'],
  // props : {isLoggedIn : Boolean},
  // props : {isLoggedIn : {type : Boolean, default : false}}, //default vermek istersek
   props : {isLoggedIn : {type : Boolean, required : true}}, //required da verebiliriz, illaki bu olmalı
  data() {
    return {
      list: [
        { title: "dc heroes", to: "/dc-heroes" },
        { title: "calendar", to: "/calendar" },
        { title: "markdown", to: "/markdown" },
        { title: "slider", to: "/slider" },
        { title: "calculator", to: "/calculator" },
        { title: "modal", to: "/reusable-modal" },
        { title: "chat", to: "/chat" },
      ],
    };
  },
  methods: {
    logout(){
      firebase
        .auth()
        .signOut()
        // .then((res) => {})
        // .catch( (e) => {})
    }
  },
};
</script>

<style scoped></style>
