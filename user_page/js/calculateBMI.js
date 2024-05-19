document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const idade = params.get('idade');
    const peso = params.get('peso');
    const altura = params.get('altura');

    if (idade && peso && altura) {
        const idadeNum = parseInt(idade, 10);
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        const imc = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
        let faixaEtaria;
        if (idadeNum >= 21 && idadeNum <= 40) {
            faixaEtaria = "21-40 anos";
        } else if (idadeNum >= 41 && idadeNum <= 60) {
            faixaEtaria = "41-60 anos";
        } else if (idadeNum > 60) {
            faixaEtaria = "Mais de 60 anos";
        } else {
            faixaEtaria = "Menos de 21 anos";
        }

        let resultado = `Seu IMC é ${imc}. `;
        let faixaIMC;
        if (imc < 18.5) {
            faixaIMC = "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            faixaIMC = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            faixaIMC = "Sobrepeso";
        } else {
            faixaIMC = "Obesidade";
        }
        resultado += `Você está na faixa: ${faixaIMC}.`;

        let recomendacoes = '';
        if (faixaEtaria === "21-40 anos") {
            switch (faixaIMC) {
                case 'Abaixo do peso':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Treinamento de força com pesos moderados. Exercícios de resistência com intervalos de alta intensidade (HIIT).</p>
                        <p><strong>Alimentação:</strong> Consuma uma variedade de alimentos ricos em proteínas, carboidratos complexos, gorduras saudáveis, vitaminas e minerais.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.400 a 3.000 calorias por dia, dependendo do nível de atividade física.</p>`;
                    break;
                case 'Peso normal':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Treinamento funcional, esportes de equipe ou individuais. Exercícios de resistência e cardiovasculares.</p>
                        <p><strong>Alimentação:</strong> Mantenha uma dieta equilibrada com alimentos nutritivos, incluindo proteínas magras, vegetais, frutas, grãos integrais e gorduras insaturadas.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.400 a 3.000 calorias por dia, dependendo do nível de atividade física.</p>`;
                    break;
                case 'Sobrepeso':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Treinamento de resistência com pesos. Atividades aeróbicas de intensidade moderada.</p>
                        <p><strong>Alimentação:</strong> Reduza a ingestão de calorias vazias e priorize alimentos integrais e nutritivos.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.400 a 3.000 calorias por dia, com foco em alimentos saudáveis.</p>`;
                    break;
                case 'Obesidade':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Programas de treinamento personalizados focados na perda de peso e na melhoria da aptidão física. Exercícios de baixo impacto para proteger as articulações.</p>
                        <p><strong>Alimentação:</strong> Opte por refeições balanceadas e de baixa caloria. Evite alimentos processados e com alto teor de gordura e açúcar.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.400 a 3.000 calorias por dia, com ênfase em alimentos naturais e de qualidade.</p>`;
                    break;
            }
        } else if (faixaEtaria === "41-60 anos") {
            switch (faixaIMC) {
                case 'Abaixo do peso':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Treinamento de resistência leve a moderado. Atividades aeróbicas de baixo impacto.</p>
                        <p><strong>Alimentação:</strong> Inclua alimentos ricos em proteínas, carboidratos complexos, gorduras saudáveis, vitaminas e minerais.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.200 a 2.800 calorias por dia, dependendo do nível de atividade física.</p>`;
                    break;
                case 'Peso normal':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Prática regular de atividades físicas variadas. Treinamento de força e exercícios cardiovasculares.</p>
                        <p><strong>Alimentação:</strong> Mantenha uma dieta equilibrada com alimentos nutritivos, incluindo proteínas magras, vegetais, frutas, grãos integrais e gorduras insaturadas.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.200 a 2.800 calorias por dia, dependendo do nível de atividade física.</p>`;
                    break;
                case 'Sobrepeso':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Programas de treinamento funcional e resistência. Atividades aeróbicas de intensidade moderada.</p>
                        <p><strong>Alimentação:</strong> Reduza a ingestão de calorias e opte por alimentos de alta qualidade nutricional.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.200 a 2.800 calorias por dia, com foco em alimentos saudáveis.</p>`;
                    break;
                case 'Obesidade':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Exercícios supervisionados focados na mobilidade, estabilidade e controle de peso. Atividades de baixo impacto para proteger as articulações.</p>
                        <p><strong>Alimentação:</strong> Adote uma dieta equilibrada e de baixa caloria. Evite alimentos processados e com alto teor de açúcar e gordura.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 2.200 a 2.800 calorias por dia, com ênfase em alimentos naturais e nutritivos.</p>`;
                    break;
            }
        } else if (faixaEtaria === "Mais de 60 anos") {
            switch (faixaIMC) {
                case 'Abaixo do peso':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Exercícios de fortalecimento muscular leves a moderados. Atividades aeróbicas suaves.</p>
                        <p><strong>Alimentação:</strong> Inclua alimentos ricos em proteínas, cálcio, vitamina D e outras vitaminas e minerais essenciais.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 1.800 a 2.200 calorias por dia, dependendo do nível de atividade física.</p>`;
                    break;
                case 'Peso normal':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Exercícios de equilíbrio, coordenação e flexibilidade, como yoga, tai chi ou Pilates. Caminhadas regulares.</p>
                        <p><strong>Alimentação:</strong> Mantenha uma dieta balanceada e variada, com ênfase em alimentos nutritivos.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 1.800 a 2.200 calorias por dia, dependendo do nível de atividade física.</p>`;
                    break;
                case 'Sobrepeso':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Participação em programas de exercícios supervisionados que visam melhorar a mobilidade, estabilidade e força. Exercícios de baixo impacto.</p>
                        <p><strong>Alimentação:</strong> Reduza a ingestão de calorias e opte por alimentos de alta qualidade nutricional.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 1.800 a 2.200 calorias por dia, com foco em alimentos saudáveis.</p>`;
                    break;
                case 'Obesidade':
                    recomendacoes = `
                        <p><strong>Atividades Físicas:</strong> Exercícios adaptados às necessidades individuais, com foco na mobilidade, estabilidade e força. Exercícios de baixo impacto.</p>
                        <p><strong>Alimentação:</strong> Adote uma dieta equilibrada e de baixa caloria. Evite alimentos processados e com alto teor de açúcar e gordura.</p>
                        <p><strong>Consumo Calórico:</strong> Cerca de 1.800 a 2.200 calorias por dia, com ênfase em alimentos naturais e nutritivos.</p>`;
                    break;
            }
        }

        document.getElementById('result-info').innerHTML = resultado + recomendacoes;
    }
});
