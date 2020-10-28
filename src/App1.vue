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
      <hr />
      <ul>
        <li v-for="x in cars" :key="x.index">{{ x }}</li>
      </ul>
      <hr />

      <input type="text" :value="bestPlayer" />
      <button :disabled="isDisabled">add player</button>
      <hr />
    </div>
    <div>
      <h4>v-model kullanımı</h4>
      <p>v-model.trim="forvet" boşlukları yok sayar</p>
      <p>v-model.lazy="forvet" yazma bitip başka yere gidince çalışır</p>
      <p>
        v-model string temel alır, v-model.number, mesela 3 yazıldığında bunu
        integer alır
      </p>
      <input type="text" v-model.lazy="forvet" />
      <h4>forvet : {{ forvet }}</h4>
      <hr />
      <h3>v-on / @</h3>
      <p>v-on / @click="xFunction" mesela</p>
      <p>mesela click lemeye bir event bağlar ya da keydown vb.</p>
      <button @click="forvet = 'benzema'">forveti benzema yap</button>
      <hr />
      <p>@submit.prevent ile listeye inputten eleman ekleme</p>
      <ol>
        <li v-for="x in onTable" :key="x.index">{{ x }}</li>
      </ol>
      <form @submit.prevent="onTable.push(masada)">
        <input type="text" placeholder="masaya ekle" v-model="masada" />
        <button type="submit">masaya ekle</button>
      </form>
    </div>
    <div>
      <h3>methods kullanımı</h3>
      <button @click="alarm">alarm ver</button>
      <br />
      <h3>heroes {{ heroes.length }}</h3>

      <ol>
        <li v-for="x in heroes" :key="x.index">{{ x }}</li>
      </ol>
      <input type="text" v-model="hero" />
      <button @click="addHero">hero ekle</button>
      <hr />
      <p>computed properties; bir değişiklik old. kendiliğindne çalışan ...</p>
      <h3>heroes sayısı : {{ heroesCount }}</h3>
      <hr />
      <p>
        aşağıda computed ile method arasındaki farka dikkat <br />
        computed olanlar her refresh de aynı sayıyı veriyor <br />
        method olanlar ise farklı veriyorlar
      </p>
      <p>
        cached durumu var buna dikkat computed props cache de tutulur, birekt
        bunu etkileye değişiklik olmadıkça değişmez <br />
        methods ise sayfadaki her değişiklikte değişme eğilmindedir
      </p>
      <p>random number as computed: {{ randC }}</p>
      <p>random number as computed: {{ randC }}</p>
      <p>random number as computed: {{ randC }}</p>
      <p>random number as method: {{ randM() }}</p>
      <p>random number as computed: {{ randM() }}</p>
      <p>random number as computed: {{ randM() }}</p>
      <p>{{ fname }} {{ lname }}</p>
      <p>{{ fullname }}</p>
      <hr />
    </div>
    <div>
      <h4>listeden tıklayarak eleman silme</h4>
      <ol>
        <li v-for="(x, index) in market" :key="index">
          {{ x }} <button @click="remove(index)">X</button>
        </li>
      </ol>
      <p>toplam listedeki eleman sayısı {{ market.length}}</p>
      <hr>
      <h4>v-for ve listelerle dinamik olarak çalışırken silme/ekleme vb çok önemli bir durum var</h4>
      <p>mesela her liste item ının altına bir input veya başka bir elemen koyduk, yukarıdaki yöntemde liste elmanını array den siliyoruz ancak bu eklediğimiz eleman o liste elemanına değil o liste elemanının index ine bağlı olduğu için silinenin yerine gelen elemana eklenir, biz sildikçe <br> bunu engelleek için listeleri yaparken gerçekten de unique olarak her alanı hazırlamak lazım, yani key e index vermek hızlı bir çözüm ama işe yaramayacağı yerler olabilir</p>
      <p>bunu çözmek için her liste elemanında key, value kullanıp her biri ayrı nesne olursa ve index kullanımı yenrine key value dan gelecek uniqu değeri kullanırsak çözülür</p>
      <p>mesela</p>
<ol>
  <li v-for="(item, index) in market2" :key="item.name">{{ item.name }} <button @click="remove2(index)">sil</button><input type="text"></li>
</ol>
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
      cars: ["honda", "ford", "gmc", "chevrolet"],
      bestPlayer: "ronaldo",
      isDisabled: false,
      forvet: "messi",
      onTable: ["defter", "kalem", "mouse", "klavye"],
      masada: "",
      heroes: ["superman", "batman", "ironman", "wolverine"],
      hero: "",
      fname: "gareth",
      lname: "bale",
      market: ["ekmek", "soda", "süt", "peynir", "yogurt"],
      market2 : [
        {name : 'makarna'},
        {name : 'su'},
        {name : 'çikolata'},
        {name : 'elma'},
      ]
    };
  },
  computed: {
    heroesCount() {
      return this.heroes.length + " kahraman var";
    },
    randC() {
      return Math.random();
    },
    fullname() {
      return `${this.fname} ${this.lname}`;
    },
  },
  methods: {
    alarm() {
      alert("alarm, alarm");
    },
    addHero() {
      //eğer hero boş ise eklemeyecek
      if (this.hero !== "") {
        //listenin sonuna eklesin
        this.heroes.push(this.hero);
        //listenin başına eklesin
        // this.heroes.unshift(this.hero)
        this.hero = "";
      }
    },
    randM() {
      return Math.random();
    },
    remove(index){
      // gelen index numaralı x i yani array elemanını filter yapıyoruz
      this.market = this.market.filter((x,i) => i !== index)
    },
    remove2(index){
      this.market2 = this.market2.filter((x,i) => i !== index)
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.count += 1;
    // }, 1000);
  },
};
</script>

<style scoped></style>
