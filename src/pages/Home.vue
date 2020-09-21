<template>
  <div class="width-100">
    <div class="width-50 margin-10-t flex-column width-100-600">
      <label class="f-12-500-gray-medium padding-5-b"> </label>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import i18nRangeData from "src/util/i18nRangeDataLocales.js";

export default {
  name: "SurveyReport",
  components: {
  },
  data() {
    return {
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
</style>
