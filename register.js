var _a;
// Array para armazenar os usuários
var users = [];
// Carrega usuários do localStorage
var storedUsers = localStorage.getItem('users');
if (storedUsers) {
    users = JSON.parse(storedUsers);
}
// Função para registrar o usuário
function registerUser(username, password, confirmPassword) {
    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }
    // Verifica se o usuário já existe (normalizando a comparação)
    var existingUser = users.find(function (user) { return user.username.toLowerCase() === username.toLowerCase(); });
    if (existingUser) {
        alert("Usuário já cadastrado.");
        return;
    }
    // Adiciona o novo usuário ao array
    users.push({ username: username, password: password });
    alert("Usuário cadastrado com sucesso!");
    // Armazena os usuários no localStorage
    localStorage.setItem('users', JSON.stringify(users));
    // Limpa os campos do formulário após o cadastro
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
}
// Adiciona um evento ao formulário para capturar o envio
(_a = document.getElementById('register-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    registerUser(username, password, confirmPassword);
});
