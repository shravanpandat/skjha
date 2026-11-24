document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Life Journey Filter Tabs
    const journeyBtns = document.querySelectorAll('.journey-btn');
    const journeyItems = document.querySelectorAll('.journey-item');

    journeyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');

            // Reset button styles
            journeyBtns.forEach(b => {
                b.classList.remove('active-tab');
                b.classList.add('bg-slate-800', 'text-slate-300');
            });

            // Set active button style
            btn.classList.add('active-tab');
            btn.classList.remove('bg-slate-800', 'text-slate-300');

            // Filter timeline cards
            journeyItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. Projects Showcase Filter Tabs
    const projectBtns = document.querySelectorAll('.project-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');

            // Reset button styles
            projectBtns.forEach(b => {
                b.classList.remove('active-tab');
                b.classList.add('bg-slate-800', 'text-slate-300');
            });

            // Set active button style
            btn.classList.add('active-tab');
            btn.classList.remove('bg-slate-800', 'text-slate-300');

            // Filter project cards
            projectCards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. Dynamic Text Rotator in Hero Headline (Data Analyst Touch)
    const phrases = [
        "Business Growth.",
        "Actionable Insights.",
        "Smart Decisions.",
        "Interactive Dashboards."
    ];
    let phraseIndex = 0;
    const typingElement = document.getElementById('typing-role');

    if (typingElement) {
        setInterval(() => {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingElement.style.opacity = 0;
            
            setTimeout(() => {
                typingElement.textContent = phrases[phraseIndex];
                typingElement.style.opacity = 1;
            }, 300);
        }, 3000);
        typingElement.style.transition = "opacity 0.3s ease-in-out";
    }
});
