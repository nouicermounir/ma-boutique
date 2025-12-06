// Récupérer les utilisateurs du localStorage
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Sauvegarder les utilisateurs dans le localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Afficher le formulaire de connexion
function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
}

// Afficher le formulaire d'inscription
function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

// Afficher un message d'erreur
function showError(formId, message) {
    const form = document.getElementById(formId);
    const existingError = form.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    form.insertBefore(errorDiv, form.querySelector('form'));

    setTimeout(() => errorDiv.remove(), 4000);
}

// Afficher un message de succès
function showSuccess(formId, message) {
    const form = document.getElementById(formId);
    const existingSuccess = form.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }

    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    form.insertBefore(successDiv, form.querySelector('form'));
}

// Gérer l'inscription
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Validation
    if (password !== confirmPassword) {
        showError('registerForm', 'Les mots de passe ne correspondent pas !');
        return;
    }

    if (password.length < 6) {
        showError('registerForm', 'Le mot de passe doit contenir au moins 6 caractères !');
        return;
    }

    // Vérifier si l'email existe déjà
    const users = getUsers();
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        showError('registerForm', 'Cet email est déjà utilisé !');
        return;
    }

    // Créer le nouvel utilisateur
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password, // En production, il faudrait hasher le mot de passe !
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    showSuccess('registerForm', 'Compte créé avec succès ! Redirection...');

    // Connecter automatiquement l'utilisateur
    setTimeout(() => {
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        window.location.href = 'index.html';
    }, 1500);
}

// Gérer la connexion
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        showSuccess('loginForm', 'Connexion réussie ! Redirection...');
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showError('loginForm', 'Email ou mot de passe incorrect !');
    }
}