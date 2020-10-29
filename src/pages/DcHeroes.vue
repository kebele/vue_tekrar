<template>
  <div class="m m-auto">
    <h1 class="text-2xl text-center">dc heroes {{ heroesCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeroes"
        :key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        type="text"
        placeholder="add a hero"
        v-model="newHero"
      />
      <button
        type="submit"
        class="border rounded bg-gradient-to-t from-red-700 to-pink-500 text-sm text-white"
        @click="addHero"
      >
        add hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      dcHeroes: [
        { name: "flash" },
        { name: "batman" },
        { name: "arrow" },
        { name: "aquaman" },
      ],
    };
  },
  computed: {
    heroesCount() {
      return this.dcHeroes.length;
    },
  },
  methods: {
    addHero() {
      //eğer hero boş ise eklemeyecek
      if (this.newHero !== "") {
        //listenin sonuna eklesin
        // this.heroes.push(this.hero);
        //listenin başına eklesin
        this.dcHeroes.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeroes = this.dcHeroes.filter((x, i) => i !== index);
    },
  },
};
</script>

<style scoped></style>
