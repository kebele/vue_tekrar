<template>
<div>
<button
          class="px-2 py-1 border rounded my-4"
          @click="isModalOpen = true"
        >
          add user
        </button>
    <teleport to="body">
      <Modal v-if="isModalOpen" @close="isModalOpen = false">
        <template #title>
          add new user
        </template>
        <template #body>
          <form @submit.prevent="submit">
            <label for="">name</label>
            <div class="p-2">
              <input
                class="w-full p-2 rounded border"
                placeholder="user name"
                v-model="state.form.name"
              />
            </div>
            <label for="">email</label>
            <div class="p-2">
              <input
                class="w-full p-2 rounded border"
                placeholder="user email"
                type="email"
                v-model="state.form.email"
              />
            </div>
            <label for="">avatar</label>
            <div class="p-2">
              <input
                class="w-full p-2 rounded border"
                placeholder="avatar url"
                type="text"
                v-model="state.form.avatar"
              />
            </div>
            <div class="p2">
              <input
                type="submit"
                class="w-full p-2 rounded border hover:bg-orange-600"
                value="create"
              />
            </div>
          </form>
        </template>
      </Modal>
    </teleport>
    </div>
</template>

<script>
import { ref, reactive } from "vue"
import Modal from "../Modal"
import axios from "../../plugins/axios";

    export default {
        components : {Modal},
        setup(_,{ emit }){
            const isModalOpen = ref(false)
            const state = reactive({
                form : {
          name : "",
          email : "",
          avatar : "",
      }
            })

    async function submit(){
        const {data} = await axios.post('/users', state.form);
        console.log(data);
        emit('new-user-added', data);
        //burada datayı newUserAdded olarak emitleyip, UserCrud.vue da Create elementi içinden yakalayacağız
        // state.users.push(data)
        //bu da UserCrud.vue daki addUser(){...} a gidecek
        state.form.name = ''
        state.form.email = ''
        state.form.avatar = ''
        isModalOpen.value = false;
    }


            return {isModalOpen, submit, state}
        }
        
    }
</script>

<style scoped>

</style>