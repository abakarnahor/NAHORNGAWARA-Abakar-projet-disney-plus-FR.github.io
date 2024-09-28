// script.js
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Si l'élément est déjà actif, on le désactive
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelector('.faq-toggle').textContent = '+';
            return;
        }
        // Fermer tous les autres éléments FAQ
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-toggle').textContent = '+';
        });
        // Activer l'élément courant
        item.classList.add('active');
        item.querySelector('.faq-toggle').textContent = '-' ;
    });
});