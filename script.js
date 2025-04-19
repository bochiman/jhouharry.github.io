document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-links li a');
    const sections = document.querySelectorAll('section');
    const navIndicator = document.querySelector('.nav-indicator');
    
    // Initialize nav indicator position
    function setNavIndicatorPosition(element) {
        if (!element || !navIndicator) return;
        
        const parent = element.parentElement;
        navIndicator.style.width = `${parent.offsetWidth}px`;
        navIndicator.style.left = `${parent.offsetLeft}px`;
    }
    
    // Set initial position for nav indicator
    const activeNavLink = document.querySelector('.nav-links li a.active') || navItems[0];
    if (activeNavLink) {
        activeNavLink.classList.add('active');
        setNavIndicatorPosition(activeNavLink);
    }
    
    // Handle navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active classes
            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Move the indicator
            setNavIndicatorPosition(this);
            
            // Scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav item on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
                setNavIndicatorPosition(item);
            }
        });
    });
    
    // Simple animation for stats
    const statsElements = document.querySelectorAll('.stat-number');
    
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const value = parseInt(element.textContent);
                
                if (!isNaN(value)) {
                    let startValue = 0;
                    const duration = 1500;
                    const increment = value / (duration / 16);
                    
                    const counter = setInterval(() => {
                        startValue += increment;
                        element.textContent = Math.floor(startValue) + '+';
                        
                        if (startValue >= value) {
                            element.textContent = value + '+';
                            clearInterval(counter);
                        }
                    }, 16);
                }
                
                // Unobserve after animation
                observer.unobserve(element);
            }
        });
    };
    
    // Intersection Observer for stats
    const observer = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });
    
    // Observe each stat element
    statsElements.forEach(stat => {
        observer.observe(stat);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const activeItem = document.querySelector('.nav-links li a.active');
        if (activeItem) setNavIndicatorPosition(activeItem);
    });
});