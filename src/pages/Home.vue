<template>
  <div>
    <h1>Define Title</h1>
    <section class="container flex">
      <div class="item flex-item-1">
        <HotelDatePicker :i18n="ptPT"></HotelDatePicker>
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
      ptPT: {
        night: "Noite",
        nights: "Noites",
        "day-names": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        "check-in": "Chegada",
        "check-out": "Partida",
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
      },
      query: {
        ticketId: "",
        client: "",
        agent: "",
        departmentId: "",
        openDate: {
          start: "",
          end: "",
        },
        closeDate: {
          start: "",
          end: "",
        },
        replyDate: {
          start: "",
          end: "",
        },
        surveyReply: "",
        surveyTypeId: "",
        ordenation: {
          ticketId: "DESC",
        },
      },
      localeRangeData: undefined,
      minDate: "",
      maxDate: "",
      departments: [],
      surveyTypes: [],
      department: "",
    };
  },
  created() {
    let localeApp = this._getLocale();

    //Seta o locale do range de data
    this.localeRangeData =
      localeApp === "pt-br"
        ? i18nRangeData.ptbr
        : localeApp === "en"
        ? i18nRangeData.en
        : i18nRangeData.es;

    this.minDate = new Date(2018, 12, 1);
    this.maxDate = false;
  },
  methods: {
    updateOpenDate(event) {
      if (!!event.start && !!event.end) {
        this.query.openDate.start = event.start;
        this.query.openDate.end = event.end;
      }
    },
    updateCloseDate(event) {
      if (!!event.start && !!event.end) {
        this.query.closeDate.start = event.start;
        this.query.closeDate.end = event.end;
      }
    },
    updateReplyDate(event) {
      if (!!event.start && !!event.end) {
        this.query.replyDate.start = event.start;
        this.query.replyDate.end = event.end;
      }
    },
    resetOpenDate() {
      this.query.openDate = {
        start: "",
        end: "",
      };
    },
    resetCloseDate() {
      this.query.closeDate = {
        start: "",
        end: "",
      };
    },
    resetReplyDate() {
      this.query.replyDate = {
        start: "",
        end: "",
      };
    },
    selectedDepartment() {
      if (this.department) {
        this.query.surveyTypeId = this.department.surveyType
          ? this.department.surveyType.id
          : this.query.surveyTypeId;
        this.query.surveyType = this.department.surveyType;
        this.query.departmentId = this.department.id;
      } else {
        this.query.surveyType = null;
        this.query.departmentId = "";
      }
    },
  },
};
</script>

<style scoped>
/* Flex */
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
