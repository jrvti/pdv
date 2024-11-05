var _a;
// Usuários pré-definidos para validação
var users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
];
// Função para validar o login
function validateLogin(username, password) {
    return users.some(function (user) { return user.username === username && user.password === password; });
}
// Evento de envio do formulário
(_a = document.getElementById("login-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (validateLogin(username, password)) {
        alert("Login bem-sucedido!");
        // Redirecionar para a página do PDV ou realizar outra ação
    }
    else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});
