$(function() {
	'use strict';

  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'admin@email.com' && password === 'adminadmin') {
            // Redireciona para a página autenticada
            window.location.href = 'admin.html'; // Substitua 'pagina_autenticada.html' pelo URL da sua página autenticada
        } 
        
        else if (username === 'user@email.com' && password === 'useruser') {
          // Redireciona para a página autenticada
          window.location.href = '/user_page/cabuser.html';
          
        } else {
            // Exibe a mensagem de erro
            errorMessage.textContent = 'Usuário ou senha incorretos';
            // Limpa os campos de entrada
            usernameInput.value = '';
            passwordInput.value = '';
        }
    });
});

