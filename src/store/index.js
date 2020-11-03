import { createStore } from 'vuex'
// import { createApp } from 'vue'

const store = createStore({
  state () {
    return {
    //   count: 1
    isLoggedIn :  false,
    authUser : {},
    isLoginOpen: false,
    //bunu App.vue dan aldık, artık bu bilgi state den gitsin
    }
  },

  mutations: {
      //state i değiştirecek
    setIsLoggedIn (state, payload) {
      // mutate state
      state.isLoggedIn = payload
    },
    setAuthUser(state, payload){
        state.authUser = payload;
    },
    setLoginModal(state, payload){
        state.isLoginOpen = payload;
    }
  }
})

// const app = createApp({ /* your root component */ })
// app.use(store)

export default store;



/* vuex çalışma mantığı
getters  state i store dan getirir

mutations da function tanımlanır bunun görevi state i değiştirmektir, store oluşturduktan sonra store un içine mutations tanımlanır, bunu state i değiştirmek istediğimiz yerde store.commit('setIsLoggedIn') şeklinde kullanırız, yani state i değiştiren func çağırırız. 
Burada App.vue ya gidip state i değiştirmemiz gerekn yere bakalım, 

şimdi App.vue bizim ana componentimiz sayfa mount olduğunda ikinci bir mutation ile bu seferde authUser ı değiştiriyor, state in ilk hali boş yani sayfada bir kullanıcı yok, sayfa mount oldu ve bir kullanıcı geldi, ikinci mutation da kullanıcı atıyor state e burada bir payload var yani ikinci parametre, bunun amacı state e o payload atanıyor, burada payload user, bu bilgiyi bize firebase sağlıyor
şimdi yeniden deneyelim home a gidip devtoolsdan vue dan bakalım user{} geliyor mu? ... evet authUser geliyor, 


*/