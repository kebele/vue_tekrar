<template>
  <div>
    <p>{{ title.toUpperCase() }}</p>
    <p>{{ sayi * 2 }}</p>
    <p v-html="webTag"></p>
    <h3 v-if="isShowing">v-if gösteriliyor</h3>
    <h3 v-else-if="isShowing === null">v-else-if gösteriliyor</h3>
    <h3 v-else>v-else gösteriliyor</h3>
    <div>
      <h3 v-if="2 * 2 == 4">{{ showTeam }}</h3>
      <p v-show="show">
        v-show display:none yapar, <br />
        v-if ise add/remove yapar
      </p>
      <h2>{{ count }}</h2>
      <h4 v-text="asText"></h4>
      <h2 v-once>{{ count }}</h2>
      <p>
        v-once sadece bir kere çalışır başka çalışmaz, bir üsttede count var
        ancak v-once ile old. için mounted(){...} sadece bir kez etkiliyor sonra
        etkilemiyor
      </p>
    </div>
    <div>
      <h3>players</h3>
      <ul>
        <li
          v-for="num in ['ronaldo', 'bale', 'isco', 'messi', 'benzema']"
          :key="num.index"
        >
          {{ num }}
        </li>
      </ul>
      <hr>
      <ul>
        <li v-for="x in cars" :key="x.index">{{ x }}</li>
      </ul>
      <hr>
      
      <input type="text" :value="bestPlayer">
      <button :disabled="isDisabled">add player</button>
      <hr>
    </div>
    <div>
      <h4>v-model kullanımı</h4>
      <p>v-model.trim="forvet" boşlukları yok sayar</p>
      <p>v-model.lazy="forvet" yazma bitip başka yere gidince çalışır</p>
      <p>v-model string temel alır, v-model.number, mesela 3 yazıldığında bunu integer alır</p>
      <input type="text" v-model.lazy="forvet"/>
      <h4>forvet : {{forvet}}</h4>
      <hr>
      <h3>v-on / @ </h3>
      <p>v-on / @click="xFunction" mesela</p>
      <p>mesela click lemeye bir event bağlar ya da keydown vb.</p>
      <button @click="forvet = 'benzema'">forveti benzema yap</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "I am a fucking looser",
      sayi: 20,
      webTag: "<h2>bu bir başlık</h2>",
      isShowing: false,
      // isShowing : null,
      showTeam: "real madrid",
      show: true,
      count: 0,
      asText: "v-text; text olarak goster",
      cars : ['honda', 'ford', 'gmc', 'chevrolet'],
      bestPlayer : "ronaldo",
      isDisabled : false,
      forvet : "messi"
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.count += 1;
    // }, 1000);
  },
};
</script>

<style scoped></style>
