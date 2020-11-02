<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">markdown</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <!-- <textarea class="w-full h-full" v-model.lazy="text"></textarea> -->
        <textarea
        ref="markdownTextArea"
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <!-- <article class="w-1/2 border bg-gray-300">
        {{markedText}}
    </article> -->
      <article class="w-1/2 border bg-gray-300" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
// import debounce from "../utilities/mixins/debounce";
//importtan debounce u kaldrdık çünkü composition daki useDebounce.js ile çözeceğiz, yeni yapıda vue 3 ile


// export default {
    // VUE LIFE CYCLE HOOKS
    // https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html#lifecycle-hooks
    // beforeCreate() {
    //     console.log("before create")
    // },
    // created() {
    //     console.log("created")
    // },
    // beforeMount() {
    //     console.log("before mount")
    // },
    // mounted() {
    //     console.log("mounted")
    // },
    // beforeUnmount(){
    //     console.log("before unmount")
    // },
    // unmounted(){
    //     console.log("unmounted")
    // },
    // beforeUpdate() {
    //     console.log(" before update")
    // },
    // updated() {
    //     console.log(" updated")
    // },

  // mixins: [debounce], 
  //mixin i kaldırdık çinkü bunu utilities>composition>useDebounce.js ile çözeceğiz ve aşağıdalki yapıyı d a setup method şeklinde yapacağız
  import useDebounce from '../utilities/composition/useDebounce.js'

    export default {
  data() {
    return {
      text: "",
      //   timeout: "", //debounce.js ye taşıdık
      debounce : ""
    };
  },
  methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value;
      };
      this.debounce(task, 500);
    },
    //aşağıdaki debounce u başka bir uyerde de kulalanbiliriz, burası ile tek bağı parametre olarak aldığı func.
    // debounce(func, wait = 1000) {
    //   clearTimeout(this.timeout);
    //   this.timeout = setTimeout(func, wait);
    // },
    //buna mixin deniyor, bunu utilities > mixins > debounce.js ya taşıyıp adapte ettik, import etmemiz lazım
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  mounted() {
    this.debounce = useDebounce();
    this.$refs.markdownTextArea.focus()
  },
};
</script>

<style scoped></style>
