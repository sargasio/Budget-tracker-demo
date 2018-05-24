<script>
export default {
  data() {
    return {
      budgetInput: null,
      spendings: []
    };
  },

  methods: {
    addSpending() {
      if (this.checkIfNumber()) {
        this.spendings.unshift(this.budgetInput);
        this.budgetInput = null;
      } else {
        alert("you did not enter a number");
      }
    },

    checkIfNumber() {
      if (typeof this.budgetInput !== "number") {
        return false;
      }
      return true;
    }
  },

  filters: {
    pricesInEuros(value) {
      return "€ " + Number(value).toFixed(2);
    }
  }
};
</script>
