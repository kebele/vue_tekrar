<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
          <!-- add user butonunu Create.vue a taşıdık -->
        <!-- <button
          class="px-2 py-1 border rounded my-4"
          @click="isModalOpen = true"
        >
          add user
        </button> -->
        <Create @new-user-added="addUser"/>
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">avatar</th>
              <th class="px-4 py-2 border">name</th>
              <th class="px-4 py-2 border">email</th>
              <th class="px-4 py-2 border">actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td class="border px-4 py-2">{{ user._id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.avatar"
                  width="50"
                  class="rounded-full"
                />
              </td>

              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                  <button class="px-2 py-1 bg-red-800 text-white" @click="destroy(user._id)">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="px-3 py-2 border rounded"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-500' : 'bg-blue-500'"
          >
            prev
          </button>
          <button
            class="px-3 py-2 border rounded hover:shadow"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gray-500'
                : 'bg-blue-500'">
            next
          </button>
        </div>
      </div>
    </div>
    <!-- burada create için modal vardı onu Create.vue ya taşıdık -->
    
  </section>
</template>

<script>
// import { onMounted, reactive, ref } from "vue";
import { onMounted, reactive } from "vue";
// import axios from "axios";
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
//bunları src>plugins>axios.js ye taşıdık
import axios from "../plugins/axios";
// import Modal from "../components/Modal";
//MOdal ı buradan aldık Create.vue da kullanacağımız için
import Create from "../components/UserCrud/Create"

export default {
//   components: { Modal },
components : { Create, },
  setup() {
    // const isModalOpen = ref(false);
    //bunu Create.vue ya taşıdık
    const state = reactive({
      users: [],
    //   form : {
    //       name : "",
    //       email : "",
    //       avatar : "",
    //   }
    //Create.vue ya taşıdık
    });

    onMounted(async () => {
      //   const { data } = await axios.get("https://reqres.in/api/users");
      //   const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/users`);
      //yukarıya axios.default.baseURL ye tanımladık
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    async function next() {
      //   const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/users?page=2`);
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }

    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }
//bunu da Create.vue ya taşıdık
    // async function submit(){
    //     const {data} = await axios.post('/users', state.form);
    //     console.log(data);
    //     state.users.push(data)
    //     state.form.name = ''
    //     state.form.email = ''
    //     state.form.avatar = ''
    //     isModalOpen.value = false;
    // }

    async function destroy(id){
        
        await axios.delete(`/users/${id}`)
        //aşağısı bizim localdeki users[] dan siler
        state.users = state.users.filter(user => user._id !== id);
    }
    function addUser(data){
        state.users.push(data)
    }

    // return { state, next, prev, isModalOpen, submit, destroy };
    return { state, next, prev, destroy, addUser };
  },
};
</script>

<style scoped></style>
