<template>
    <div>
<section class="my-5 text-center">
              <button class="border px-2 rounded" @click="loginWithGoogle">login with google</button>
            </section>
    </div>
</template>

<script>
import firebase from '../../utilities/firebase'
    export default {
        methods: {
            loginWithGoogle(){
          var provider = new firebase.auth.GoogleAuthProvider();

          firebase
            .auth()
            .signInWithPopup(provider)
            // .then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  // var token = result.credential.accessToken;
  // The signed-in user info.
  // var user = result.user;
  // ...
// })
// .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
      .then(() => {
        // this.close();
        //login sonrası modal ı kapatması için buradan emitlememiz lazım yeni bir emit yazalım, bunu da LoginMOdal.vue daki elementin içine koyup hangi methodu çalıştıracağını yazacağız oda @close-login-from-google="close" şeklinde olacak, oradaki close methodunu çalıştıracak o da bizim modal ımızı kapatacak
        this.$emit("close-login-from-google")
      })
    },
        },
    }
</script>

<style scoped>

</style>