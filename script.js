// ==========================================
// PESQUISA DE SATISFAÇÃO - SUS
// JavaScript com tom acolhedor
// ==========================================

let currentStep = 1;
const totalSteps = 4;

// Atualiza progresso
function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentStep').textContent = currentStep;
}

// Navegação entre etapas
function nextStep(step) {
    if (validateSection(currentStep)) {
        showSection(step);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevStep(step) {
    showSection(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(step) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.querySelector(`[data-section="${step}"]`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentStep = step;
        updateProgress();
    }
}

// Validação
function validateSection(section) {
    const sectionElement = document.querySelector(`[data-section="${section}"]`);
    const requiredInputs = sectionElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    requiredInputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    // Valida ratings
    const hiddenInputs = sectionElement.querySelectorAll('input[type="hidden"][required]');
    hiddenInputs.forEach(input => {
        if (!input.value) {
            const group = input.closest('.rating-question');
            if (group) {
                showError(group, 'Por favor, escolha uma opção');
                isValid = false;
            }
        }
    });
    
    // Valida termos
    const termos = document.getElementById('termos');
    if (section === 4 && termos && !termos.checked) {
        showError(termos.closest('.terms-box'), 'Por favor, aceite os termos para continuar');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const group = field.closest('.form-group');
    
    clearError(group);
    
    if (field.hasAttribute('required') && !value) {
        showError(group, 'Este campo é obrigatório');
        return false;
    }
    
    // Valida CPF
    if (field.id === 'cpf' && value) {
        if (!isValidCPF(value)) {
            showError(group, 'CPF inválido. Confira os números digitados');
            return false;
        }
    }
    
    // Valida email
    if (field.type === 'email' && value) {
        if (!isValidEmail(value)) {
            showError(group, 'E-mail inválido');
            return false;
        }
    }
    
    // Valida telefone
    if (field.id === 'telefone' && value) {
        if (value.replace(/\D/g, '').length < 10) {
            showError(group, 'Telefone incompleto');
            return false;
        }
    }
    
    return true;
}

function showError(element, message) {
    const errorSpan = element.querySelector('.error-message');
    const input = element.querySelector('input, select, textarea');
    
    if (input) input.classList.add('error');
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add('show');
    }
}

function clearError(element) {
    if (!element) return;
    const errorSpan = element.querySelector('.error-message');
    const input = element.querySelector('input, select, textarea');
    
    if (input) input.classList.remove('error');
    if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.classList.remove('show');
    }
}

// Máscaras
document.getElementById('cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = value;
});

document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    e.target.value = value;
});

// Validadores
function isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(cpf.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    return digit === parseInt(cpf.charAt(10));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Star Rating
document.querySelectorAll('.star-rating').forEach(ratingGroup => {
    const stars = ratingGroup.querySelectorAll('.star');
    const hiddenInput = ratingGroup.querySelector('input[type="hidden"]');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            hiddenInput.value = this.getAttribute('data-value');
            stars.forEach((s, i) => {
                s.classList.toggle('active', i <= index);
            });
            clearError(ratingGroup.closest('.rating-question'));
        });
    });
});

// Emoji Rating
document.querySelectorAll('.emoji-rating').forEach(ratingGroup => {
    const emojis = ratingGroup.querySelectorAll('.emoji-btn');
    const hiddenInput = ratingGroup.querySelector('input[type="hidden"]');
    
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            hiddenInput.value = this.getAttribute('data-value');
            emojis.forEach(e => e.classList.remove('active'));
            this.classList.add('active');
            clearError(ratingGroup.closest('.rating-question'));
        });
    });
});

// Scale Rating
document.querySelectorAll('.scale-rating').forEach(ratingGroup => {
    const buttons = ratingGroup.querySelectorAll('.scale-btn');
    const hiddenInput = ratingGroup.querySelector('input[type="hidden"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            hiddenInput.value = this.getAttribute('data-value');
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            clearError(ratingGroup.closest('.rating-question'));
        });
    });
});

// Character Counter
const comentarios = document.getElementById('comentarios');
const charCount = document.getElementById('charCount');

comentarios.addEventListener('input', function() {
    const length = this.value.length;
    charCount.textContent = length;
    if (length > 1000) {
        this.value = this.value.substring(0, 1000);
        charCount.textContent = '1000';
    }
});

// Data máxima = hoje
document.getElementById('data').max = new Date().toISOString().split('T')[0];

// Submit
document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateSection(4)) return;
    
    const formData = new FormData(this);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
        } else {
            data[key] = value;
        }
    }
    
    console.log('Dados da pesquisa:', data);
    
    // Gera protocolo
    const protocolNumber = 'SUS-' + Date.now().toString().slice(-8);
    const submitDate = new Date().toLocaleString('pt-BR');
    
    document.getElementById('protocolNumber').textContent = protocolNumber;
    document.getElementById('submitDate').textContent = submitDate;
    
    // Mostra sucesso
    document.querySelector('.form-card').style.display = 'none';
    document.getElementById('successCard').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validação em tempo real
document.querySelectorAll('input[required], select[required]').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
});

updateProgress();

console.log('💚 Obrigado por usar nosso formulário de pesquisa!');
