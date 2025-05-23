// Funções JavaScript para o blog

document.addEventListener('DOMContentLoaded', function() {
    // Ativar tooltips do Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Destacar link de navegação ativo
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.endsWith(linkPath) || 
            (linkPath === 'index.html' && (currentLocation.endsWith('/') || currentLocation.endsWith('/index.html')))) {
            link.classList.add('active');
        }
    });

    // Animação para elementos de timeline
    const animateOnScroll = function() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.classList.add('animate__animated', 'animate__fadeIn');
                item.style.opacity = 1;
            }
        });
    };

    // Inicializar animações
    if (document.querySelector('.timeline-item')) {
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Executar uma vez no carregamento
    }
});
