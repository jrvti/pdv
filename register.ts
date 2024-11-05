interface User {
    username: string;
    password: string;
}

// Array para armazenar os usuários
const users: User[] = [];

// Função para registrar o usuário
function registerUser (username: string, password: string, confirmPassword: string): void {
    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Verifica se o usuário já existe
    const existingUser  = users.find(user => user.username === username);
    if (existingUser ) {
        alert("Usuário já cadastrado.");
        return;
    }

    // Adiciona o novo usuário ao array
    users.push({ username, password });
    alert("Usuário cadastrado com sucesso!");

    // Limpa os campos do formulário após o cadastro
    (document.getElementById('username') as HTMLInputElement).value = '';
    (document.getElementById('password') as HTMLInputElement).value = '';
    (document.getElementById('confirm-password') as HTMLInputElement).value = '';
}

// Adiciona um evento ao formulário para capturar o envio
document.getElementById('register-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;

    registerUser (username, password, confirmPassword);
});