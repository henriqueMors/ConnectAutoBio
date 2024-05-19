function calculateBMI() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultDiv = document.getElementById('bmi-result');
  
    if (isNaN(peso) || isNaN(altura)) {
      resultDiv.innerHTML = "Por favor, insira valores válidos para peso e altura.";
      return;
    }
  
    const bmi = peso / (altura * altura);
    let bmiCategory = "";
    let link = "";
  
    if (bmi < 18.5) {
      bmiCategory = "Abaixo do peso";
      link = "<br><a href='https://example.com/underweight' target='_blank'>Clique aqui, vamos te ajudar com algumas dicas!</a>";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = "Peso normal";
      link = "<br><a href='https://example.com/normal' target='_blank'>Parabéns, temos recomendações para ajudar a manter-se saudável!</a>";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = "Sobrepeso";
      link = "<br><a href='https://example.com/overweight' target='_blank'>Cuidado, você precisa de um pouco de atenção com sua saúde.</a>";
    } else {
      bmiCategory = "Obesidade";
      link = "<br><a href='https://example.com/obesity' target='_blank'>Temos informações que podem lhe ajudar!</a>";
    }
  
    resultDiv.innerHTML = `Seu IMC é ${bmi.toFixed(2)} (${bmiCategory}). ${link}`;
  }
  
  function clearFields() {
    document.getElementById('idade').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('bmi-result').innerHTML = "";
  }