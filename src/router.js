// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import DcHeroes from "./pages/DcHeroes.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
import Calculator from "./pages/Calculator.vue";
import ReusableModal from "./pages/ReusableModal.vue";
import UserCrud from "./pages/UserCrud.vue";
import Chat from "./pages/Chat.vue";
import Tensorflow from "./pages/Tensorflow.vue";
import store from "./store/index";


const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DcHeroes },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator, meta: { middleware: "auth" }, },
  { path: "/reusable-modal", component: ReusableModal },
  {
    path: "/chat",
    component: Chat,
    meta: { middleware: "auth" },
    // beforeEnter: (_, __, next) => {
    // ...
    // console.log("I am working")
    // console.log(store.state.isLoggedIn)
    //   if (!store.state.isLoggedIn) {
    // next("/");
    //isLoggedIn değeri false ise true değilse o zaman chat a tıkladığımızda anasayfaya gidecek, başarılı :)
    //buna middleware deniyor, aray giriyor yani
    //aşağıya next() eklemeliyiz
    //   } else {
    // next();
    //   }
    //buradaki sadece chat ile ilgili login olup olmadığını artık burada sorgulamayacağız, bunu src>middleware>auth.js ye taşıyıpr bu sorguyu orada yapacağız
    // },
  },
  { path: "/user-crud", component: UserCrud, },
  { path: "/tensorflow", component: Tensorflow,},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// adres satırındaki # işaretinin kalkması için createwebhashHistory değil createWebHistory kullanmalıyız,

/* 
burada chat kısmı ile ililgi olarak meela sayfaya girdik ama login olmadık, chat e tıkladığımızda yine açılıyor, firebase e gidiyor, mesajları alıp geliyor, burada bunu login olmadan yapmaması lazım, bunun için bunun sorgusunu storedan yapılması lazım yani store a bağlanılması lazım, 
chat için yaptık problem yok yukarıda notlarıda var çalışıyor, 
peki aynı şeyi hepsi için yapmak istersek ne yapacağız, tek tek yazacak mıyız?
bunun için kavram route meta fields 
beforeEach olayı burada başlıyor, 
beforeEnter üstünden devam edelim
meta yı middleware auth olarak tanımladık ve middleware verisi olan bulduğu  yolda console a bu veriyi yazacak
src > middleware  > auth.js hazırladık,  
şimdi aşağıya beforeEach hazırladık, diyoruz ki her path e gitmeden önce meta bilgisine bak orada true gelirse girmeye izin verecek yani sayfayı gösterecek yoksa izin vermeyecek, şu anda bu middleware i sadece chat sayfası için yaptık, yukarıda hangi route a eklersek, o sayfaya gitmek istediğimizde login olup olmadığımıza bakacak, mesela calculator a ekleyelim, deneyelim, login olmadan artık calculator a da girmeye eizin vermiyor, tıkladığımızda home a yönlendiriyor, 
buraya da bir düzenleme yapalım, yani tuşlara eğer girmeye izin vermeyecekse yani... AppHeader.vue ya gidelim, 

*/

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    // console.log(to.meta.middleware)
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
      // console.log(middleware)
    } else {
        next(); 
    }
    // console.log("middleware verisi yok")
  } else {
    next();
  }
});
export default router;
