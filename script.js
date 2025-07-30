        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Check for saved theme preference or use preferred color scheme
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        }
        
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Typewriter effect
        setTimeout(() => {
            document.querySelector('.typewriter').classList.remove('typewriter');
        }, 5000);
         // Contact form persistence
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };
            let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            messages.push(data);
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            formMessage.classList.remove('hidden');
            setTimeout(() => formMessage.classList.add('hidden'), 3000);
            contactForm.reset();
        });