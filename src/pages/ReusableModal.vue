<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-useable Modal</h1>

      <Modal v-if="isModal1Open" @close="isModal1Open = false">
          <!-- slot kullanımı yapacağız, named slot kullanacağız, # kullanımı v-slot un kısaltılmışı
          burada aynı modal ı yani Modal.vue yu iki sefer kullanıyoruz ancak ikisi içinde ayrı değer kullanmalıyoz, bunu da named slot ile yapıyoruz
          #title Modal.vue da slot un adı titile burada #title olarak hazırlanmış yerdeki elementi alıyor buraya getiriyor, sonta burada #title olarak belittiğimiz yerdeki veriyi alıp orada name i title olan kısma basıyor ve ekrana veriyor, modal.vue title ve body isimli iki slot yapısı var onları buraya getiriyor, buradaki title ve body deki bilgiyi alıp getidiği ilgili slotlara basıyor, template şeklinde kualmndığımızıa dikkat named slot ları, 

          butonlardaki functionlar

           -->
        <template #title>
          Modal 1
        </template>
        <template #body>
          <p>This is the body slot</p>
        </template>
      </Modal>
      <button
        class="border rounded px-2 mx-4 bg-blue-500 text-white"
        @click="isModal1Open = true"
      >
        Modal 1
      </button>

      <Modal v-if="isModal2Open" @close="isModal2Open = false">
          <!-- #title kullanımı v-slot un kısaltılmış hali 
          modaldaki sectinda bir yere tıklayınca oradaki close functionu buraya close u emitliyor nburada bunu yakalyınca bu emitlenen burada isModalOpen ın değerini değitiryor
          -->
        <template #title>
          Modal 2
        </template>
        <template #body>
          <p>This is the body slot for modal 2</p>
        </template>
      </Modal>
      <button
        class="border rounded px-2 mx-4 bg-blue-500 text-white"
        @click="isModal2Open = true"
      >
        Modal 2
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";



export default {
  components: { Modal },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);
    return { isModal1Open, isModal2Open };
  },
};
</script>

<style></style>