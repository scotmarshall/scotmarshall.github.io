fetch('./Data/finances.json')
  .then(response => response.json())
  .then(data => {
    displayFinanceData(data.personalFinanceData);
  })
  .catch(error => console.error('Error:', error));

function displayFinanceData(data) {
    var financeDataElement = document.getElementById('financeData');
    var html = '';
  
    html += '<h1>Income</h1>';
    html += '<ul>';
    for (var incomeType in data.income) {
      html += '<li>' + incomeType + ': $' + data.income[incomeType] + '</li>';
    }
    html += '</ul>';
  
    html += '<h1>Debts</h1>';
    html += '<ul>';
    for (var debtType in data.debts) {
      html += '<li>' + debtType + ': $' + data.debts[debtType] + '</li>';
    }
    html += '</ul>';
  
    html += '<h1>Expenses</h1>';
    html += '<ul>';
    for (var expenseType in data.expenses) {
      html += '<li>' + expenseType + ': $' + data.expenses[expenseType] + '</li>';
    }
    html += '</ul>';
  
    financeDataElement.innerHTML = html;
}
  