const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'active' de todos
        navItems.forEach(i => i.classList.remove('active'));
        
        // Adiciona ao item clicado
        item.classList.add('active');
    });
});
