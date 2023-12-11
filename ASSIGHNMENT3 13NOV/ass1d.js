function calculateTax() {
    const lowIncomeRate = 0.1;   // 10%
    const mediumIncomeRate = 0.15; // 15%
    const highIncomeRate = 0.2;   // 20%
    return function(income) {
      if (income <= 50000) {
        return income * lowIncomeRate;
      } else if (income <= 100000) {
        return income * mediumIncomeRate;
      } else {
        return income * highIncomeRate;
      }
    };
  }
  let calculateTaxForIncome = calculateTax();
  let income1 = 30000;
  let income2 = 75000;
  let income3 = 120000;
  
  console.log(`Tax for an income of $${income1}: $${calculateTaxForIncome(income1)}`);
  console.log(`Tax for an income of $${income2}: $${calculateTaxForIncome(income2)}`);
  console.log(`Tax for an income of $${income3}: $${calculateTaxForIncome(income3)}`);
  