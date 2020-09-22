<template>
  <div>
    <h1>Define Title</h1>
    <section class="container flex">
      <div class="item flex-item-1">
        <HotelDatePicker :showYear="true" :startDate="last16days()" :endDate="next16days()" :i18n="ptPT"></HotelDatePicker>
      </div>
      <div class="item flex-item-1">Result</div>
    </section>
  </div>
</template>

<script>
import i18nRangeData from "src/util/i18nRangeDataLocales.js";
import HotelDatePicker from "vue-hotel-datepicker";
import "vue-hotel-datepicker/dist/vueHotelDatepicker.css";

export default {
  name: "SurveyReport",
  components: {
    HotelDatePicker,
  },
  data() {
    return {
      // TODO: inserir ptBR e tooltip no json server
      ptPT: {
        night: "Noite",
        nights: "Noites",
        "day-names": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        "check-in": "Início",
        "check-out": "Fim",
        "month-names": [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        tooltip: {
          halfDayCheckIn: "Reservas possíveis",
          halfDayCheckOut: "Reservas possíveis",
          saturdayToSaturday: "Sábado a Sábado<br/> apenas",
          sundayToSunday: "Domingo a domingo<br/> apenas",
          minimumRequiredPeriod: "%{minNightInPeriod} %{night} mínimo.",
        },
        week: "semana",
        weeks: "semanas",
      }
    };
  },
  created() {
  },
  methods: {
    last16days: function () {
      return new Date(Date.now() - 1382400000);
    },
    next16days: function () {
      return new Date(Date.now() + 1382400000);
    },    
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-item-1 {
  flex: 1;
}

/* Flex Item */
.item {
  margin: 0px;
  background: white;
  text-align: center;
  font-size: 1.5em;
}

.container {
  max-width: 95%;
  margin: 0 auto;
  border: 1px solid #ccc;
}

h1 {
  text-align: center;
  margin: 20px 0 0 0;
  font-size: 1.25em;
  font-weight: normal;
}

body {
  font-family: monospace;
  color: #333;
}
</style>
