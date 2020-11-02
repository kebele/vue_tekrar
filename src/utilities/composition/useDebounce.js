/* 
calculator da yaptığımız composition un benzerini deBounce yaptığımız markdown uygulaması içinde yapalım, 
ref i import edelim ve mixins deki debounce dan debounce methodnu getirelim ve ref li hali olarak düzenleyelim, this ler gitsin value ler gelsin, return u de ayarlayalım
şimdi bunu kullandığımız markdown.vue ya idip ırayı düzenleyelim, 
*/
import {ref} from 'vue'

export default function useDebounce(){
    const timeout = ref("")

    function debounce(func, wait = 1000) {
        clearTimeout(timeout.value);
        timeout.value = setTimeout(func, wait);
      }

    return  debounce 
}