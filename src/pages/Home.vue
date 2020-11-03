<template>
    <div class="m-auto">
        <h1 class="text-center">wellcome to Vue 3 full Course</h1>
    </div>
</template>

<script>
    export default {
        //aşağıdaki denemesini yaptık home a girme ile state değişiyor, sıkıntı yok
        data(){
            return {
                //state i tanımlayalım
                store : this.$store.state
            }
        },
        // mounted() {
        //     console.log(this.$store.state)
        // },
    }
</script>

<style scoped>

</style>