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
  
    if (bmi < 18.5) {
      bmiCategory = "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = "Peso normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = "Sobrepeso";
    } else {
      bmiCategory = "Obesidade";
    }
  
    resultDiv.innerHTML = `Seu IMC é ${bmi.toFixed(2)} (${bmiCategory}).`;
  }  