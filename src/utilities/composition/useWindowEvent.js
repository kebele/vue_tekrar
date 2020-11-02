/* calculator.vue da kullandığımız useWindow u buraya taşıyoruz,
gerekli importları yapalım, onMounted ve onUnmounted ları ref kullanmayacağımız için silelim
handleKeydown calculator da kullandığımı function ın adı
*/

import { onMounted, onUnmounted,} from "vue";


// export default function useWindowEvent(handleKeydown){
//     //export default function ile export edelim baştan
//     onMounted(() => window.addEventListener('keydown', handleKeydown))
    
//     onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
// }

/* burada biraz daha modifiye edelim function u ve event in ne olduğu da bu dosyayı i,mport edip kullanacağımız yerde function a bir parametre olarak gelsin
*/

export default function useWindowEvent(eventName, handleEvent){
    //export default function ile export edelim baştan
    onMounted(() => window.addEventListener(eventName, handleEvent))
    
    onUnmounted(() => window.removeEventListener(eventName, handleEvent))
}