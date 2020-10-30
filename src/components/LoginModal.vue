<template>
  <div>
    <section
      @click="$emit('close-login')"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
          <div class="p-2 border">
            <h1 class="text-xl text-center">login</h1>
            <form action="" class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label for="">email or username</label>
                <input
                  type="text"
                  class="rounded shadow p-2 w-full"
                  placeholder="enter your email or username"
                  v-model="form.email"
                />
              </div>
              <div class="my-4">
                <label for="">password</label>
                <input
                  type="password"
                  class="rounded shadow p-2 w-full"
                  placeholder="enter your password"
                  v-model = "form.password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full p-2 rounded shadow-md bg-blue-400"
                >
                  login
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
export default {
    data(){
        return {
            form : {
                email : '',
                password : '',
            }
        }
    },
    methods: {
        submit(){
            //submit the form
            // console.log(this.form.email, this.form.password)
        }
    },
};
</script>

<style scoped></style>
