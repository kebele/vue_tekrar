export default function(next,store){
    console.log("middleware var")    
        
        if(!store.state.isLoggedIn){
            next('/');
            store.commit("setLoginModal",true);
            //bunun amacı eğer login gereken bir yere tıkladığımızda login ekranını açıyor yani LoginModal yüklüyor
        } else {
            next()
        }
    
}