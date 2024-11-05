// Definição de um tipo para o usuário
interface User {
    username: string;
    password: string;
}

// Usuários pré-definidos para validação
const users: User[] = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
];

// Função para validar o login
function validateLogin(username: string, password: string): boolean {
    return users.some(user => user.username === username && user.password === password);
}

// Evento de envio do formulário
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (validateLogin(username, password)) {
        alert("Login bem-sucedido!");
        // Redirecionar para a página do PDV ou realizar outra ação
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});