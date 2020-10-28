<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
    <!-- {{daysInMonth(2020,10)}} -->
    <!-- {{startDay()}} -->
    <section class="mx-4 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="text-center"
        style="width : 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <!-- ay hangi günden başlayacak -->
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width : 14.28%"
        v-for="num in startDay()"
        :key="num"
      >
        <!-- {{ num }} -->
      </p>
      <p
        class="text-center"
        style="width : 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4 ">
      <button class="px-2 mx-5 border rounded bg-red-500" @click="prev">prev</button>
      <button class="px-2 mx-5 border rounded bg-blue-500" @click="next">next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //içinde olunan ayı veren kod
      currentMonth: new Date().getMonth(),
      //   currentMonthName : new Date().toLocaleString("default", { month: "long" }),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentDate: new Date().getUTCDay(),
    };
  },
  methods: {
    daysInMonth() {
      //   const month = new Date().getMonth() + 1;
      //içindeki ayın numarasını veriyor
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      //mesela
      //new Date(2020,10,0).getDate();
      //10. ayın son gününün sayısını veriyor
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
      //ayın ilk gününün indeksini veriyor, 1 ilk günü 0 son günü sunday, 1 monday
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      //   console.log(new Date(this.currentYear, this.currentMonth, num).toDateString())
      //   console.log(new Date().toDateString())
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate
        ? "text-blue-500 border rounded bg-yellow-300"
        : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style scoped></style>
