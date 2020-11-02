<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">calculator</h1>
      <p
        class="text-3xl text-right mt-10 w-52 h-20 overflow-x-hidden bg-green-500"
        style="direction:rtl"
      >
        {{ currentNum }}
      </p>
      <div class="h-10 bg-blue-400">
<small  v-if="selectedOperation" >{{prevNum}} {{selectedOperation}} {{currentNum}}</small>
      </div>
      
      <div class="grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          *
        </button>
        <button
          @click="pressed('c')"
          class="p-2 border h-10 rounded shadow"
        >
          C
        </button>
        <button
          @click="pressed('0')"
          class="p-2 border h-10 rounded shadow"
        >
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 border w-10 h-10 rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// import { onMounted, onUnmounted, ref } from "vue";
//onMounted ve onUnmpnted ları utilities > composition > useWindowEvent.js e taşıdığımız için buradan kaldırdım ve buraya useWindowEvent i import ettim
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent"

export default {
  setup() {
    /* 
     2 * 3 = 6
    işlemi 1. sayı operatör yada işlem 2. sayı eşittir sonuç 
    şeklinde bizim bunu kodlamamız lazım
    başladık rakamlara bastıkça operatörleden birine basıncaya kadar bunu currentNum a atayacak, herhangibir operatöre basıtığımızda bu fer currentNum ı alacak prevNum a atayacak ve currentNum ı boşaltacak
    */
    let currentNum = ref('');
    const prevNum = ref('');
    const operations = ["+", "-", "*", "/"];    
    const selectedOperation = ref('');
    const numbers = ['1','2','3','4','5','6','7','8','9','0']


    function pressed(value) {
        //enter eşittir olsun
      if (value === "=" || value === "Enter") calculate();
      else if(value === "c" || value === "Delete") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if(numbers.includes(value)) appendNumber(value);
    }
    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value) {
        //devaö eden işlemleride yapsın mesela 1+2+3*5 vb devam edip giden işlemler için önce calculate çalışsın sonra kod devam etsin, calculate() ekledik
        calculate()
        prevNum.value = currentNum.value;
        currentNum.value = ""
        selectedOperation.value = value
    }
    function calculate() {
        if(selectedOperation.value === '*') multiply();
        else if(selectedOperation.value === '/') divide();
        else if(selectedOperation.value === '-') subtract();
        else if(selectedOperation.value === '+') sum();
        //her işlemden sonra küçük ekran sdilinsin
        prevNum.value = ''
        selectedOperation.value = ''
    }
        
        function multiply(){
            currentNum.value = prevNum.value * currentNum.value
        }
        function divide(){
            currentNum.value = prevNum.value / currentNum.value
        }
        function subtract(){
            currentNum.value = prevNum.value - currentNum.value
        }
        function sum(){
            currentNum.value = +prevNum.value + +currentNum.value
        }
        
        
        
    
    function clear(){
        currentNum.value = ''
    }

//keyboard un sayı tuşları çalışsın, bunun için ayrı bir functiion hazırlayalım, hem onMount, hemde onUnmounted da o çalışsın

// function handleKeydown(e){
//     pressed(e.key);
//     console.log(e.key)
// }
//veya
const handleKeydown = (e) => pressed(e.key);

//useWindowEvent func buraya import ettik ve kullandık, gerekli açıklamalar utilities altındaki func dosyasında var
useWindowEvent('keydown', handleKeydown);

    // onMounted(()=>{
        //bastığımız tuş console a gelsin
        // window.addEventListener('keydown', (e)=>{
        //     // console.log(e.key);
        //     pressed(e.key);
        // })
        // window.addEventListener('keydown', handleKeydown);
    // })
    //ancak bu sayfadan çıkınca bu onMounted durumu ortadan kalksın
    // onUnmounted(()=>window.removeEventListener('keydown', handleKeydown)
    // )

    return { currentNum, prevNum, pressed, selectedOperation };
  },
};
</script>

<style scoped></style>
