<template>
  <div v-if="isLoginOpen">
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
          <div class="p-2 border">
            <h1 class="text-xl text-center">login</h1>
            <!-- <section class="my-5 text-center">
              <button class="border px-2 rounded" @click="loginWithGoogle">login with google</button>
            </section> -->
            <GoogleLogin @close-login-from-google="close" />
            <p class="my-3 text-center">or</p>
            <form action="" class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label for="">email or username</label>
                <input
                  type="text"
                  class="rounded shadow p-2 w-full"
                  placeholder="enter your email or username"
                  v-model="email"
                  ref="emailRef"
                />
              </div>
              <div class="my-4">
                <label for="">password</label>
                <input
                  type="password"
                  class="rounded shadow p-2 w-full"
                  placeholder="enter your password"
                  v-model="password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full p-2 rounded shadow-md bg-blue-400"
                >
                  <span v-if="!isLoading">login</span>
                  <span v-else>⌛</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "../components/login/GoogleLogin";

export default {
  components: {
    GoogleLogin,
  },
  computed: {
      isLoginOpen(){
        return this.$store.state.isLoginOpen
      }
    },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      //submit the form
      // console.log(this.form.email, this.form.password)
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },
    close() {
      // this.$emit("close-login");
      //bunu store/state ile yapacağız artık
      this.$store.commit("setLoginModal",false);
    },
    //         loginWithGoogle(){
    //           var provider = new firebase.auth.GoogleAuthProvider();

    //           firebase
    //             .auth()
    //             .signInWithPopup(provider)
    //             // .then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   // var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   // var user = result.user;
    //   // ...
    // // })
    // // .catch(function(error) {
    // //   // Handle Errors here.
    // //   var errorCode = error.code;
    // //   var errorMessage = error.message;
    // //   // The email of the user's account used.
    // //   var email = error.email;
    // //   // The firebase.auth.AuthCredential type that was used.
    // //   var credential = error.credential;
    // //   // ...
    // // });
    //       .then(() => {
    //         this.close();
    //       })
    //     },
    mounted() {
      this.$refs.emailRef.focus();
    },    
  },
};
</script>

<style scoped></style>
