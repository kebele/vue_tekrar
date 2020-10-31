<template>
  <div>
    <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
    <div class="w-full flex">
      <router-view></router-view>
      <!-- <Calendar /> -->
    </div>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
  </div>
  <!-- App.vue bizim ana komponentimiz diğer komp lar bunun içinde şimdi burada loginModal ında burda olması lazım bu normal ancak bizim burada yapacağımız şey AppHeader dan LoginModal a veri transferi yani comp tan comp a transfer AppHeader dan LoginModal aburada bir eventi yollamamız lazım, yani comp dan comp a veri yollayacağı zbunu da emit ile y<apacağız
  şimdi AppHeader dan 
   <button class="mx-2" @click="$emit('open-login-modal')">login</button>
   ile emitledik, buradan yani App.vue da kullandığımız AppHeader içinden yakalayacağız, bu da data daki isLoginOpen değerini true yapacak, 

   MOdal ı açma işleyişi şöyle
   AppHeader.vue da clickte open-login-modal adında bir event i emitliyoruz,
   sonra bunu AppHeader ı element olarak kullandığımız yerde yani App.vue da (ana komponentimizde) yakalıyoruz ve 
   <AppHeader @open-login-modal="isLoginOpen = true" />
   data da hazırladığımız isLoginOpen değerini değiştiriyoruz, bu değerde <LoginMOdal v-if="isLoginOpen"/> elementinin v-fi değerini true yapıyor ve elementi sayfaya basıyor,

   modal ı kapatma işleyişi
   açmayı tetikleyen davranış AppHeader daki butona tıklanmasıydı kapamayı tetikleyen davranış ise LoginModal.vue dan başlamalı, yani burada bir tıklamayla yine bir emit yapacağız bu sefer close eventi emitleyeceğiz
   <section
      @click="$emit('close-login')"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    bunuda App.vue da yani burada 
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
    olacak yani LoginModal.vue dan emitlediğimiz close-login eventini burada dinleyip, yakalayıp bu evente isLoginOpen değerini false olarak atayacağız
    -->
</template>

<script>
import AppHeader from "./components/AppHeader";
// import Calendar from "./components/Calendar"
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase"

export default {
  components: {
    AppHeader,
    // Calendar
    LoginModal,
  },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn :  false,
      authUser : {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log(user)
    this.isLoggedIn = true
    this.authUser = user
  } else {
    // No user is signed in.
    console.log("no user")
    this.isLoggedIn = false;
    this.authUser = {}
  }
});
  },
};
</script>

<style scoped></style>
