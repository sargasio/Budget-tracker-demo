import Vue from "vue";

Vue.config.productionTip = false;

Vue.component("budget-tracker", require("./components/BudgetTracker"));

new Vue({
  el: "#app"
});
