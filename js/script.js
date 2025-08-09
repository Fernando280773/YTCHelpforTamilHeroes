// Help For Tamil Heroes - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const helpBtn = document.getElementById('helpBtn');
    const donateBtn = document.getElementById('donateBtn');
    const shareBtn = document.getElementById('shareBtn');

    // Learn More button - scroll to mission section
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            document.getElementById('mission').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Help button - scroll to contact section
    if (helpBtn) {
        helpBtn.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Donate button action
    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            // In a real implementation, this would redirect to a payment gateway
            alert('நன்கொடை செயல்பாடு விரைவில் வரும்!\n\nDonation functionality coming soon!\n\nதற்போது தொடர்புக்கு: contact@yorkshiretamils.org');
        });
    }

    // Share button functionality
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Help For Tamil Heroes - யோக்சியர் தமிழ் சமூகம்',
                    text: 'தமிழர் விடுதலைப் போராட்டத்தில் தியாகம் செய்த முன்னாள் போராளிகளுக்கான உதவி மற்றும் மறுவாழ்வு திட்டம்',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                copyToClipboard(window.location.href);
                alert('இணைப்பு நகலெடுக்கப்பட்டது!\nLink copied to clipboard!');
            }
        });
    }

    // Copy to clipboard function
    function copyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all implementation cards
    const cards = document.querySelectorAll('.implementation-card');
    cards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add click effects to cards
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-gradient');
        if (heroSection) {
            heroSection.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
        }
    });

    // Dynamic gradient animation speed based on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = scrolled / maxScroll;
        
        const gradientElements = document.querySelectorAll('.hero-gradient');
        gradientElements.forEach(function(element) {
            const animationDuration = 8 + (scrollPercentage * 4); // 8s to 12s
            element.style.animationDuration = animationDuration + 's';
        });
    });

    // Add hover effects for social links
    const socialLinks = document.querySelectorAll('a[href="#"]');
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('சமூக ஊடக இணைப்புகள் விரைவில் வரும்!\nSocial media links coming soon!');
        });
    });

    // Console welcome message
    console.log('%c🌟 யோக்சியர் தமிழ் சமூகம் - Help For Tamil Heroes 🌟', 
                'color: #FF4444; font-size: 16px; font-weight: bold;');
    console.log('%cதமிழர் விடுதலைப் போராட்டத்தில் தியாகம் செய்த முன்னாள் போராளிகளுக்கான உதவி மற்றும் மறுவாழ்வு திட்டம்', 
                'color: #32CD32; font-size: 12px;');
});

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.log('Error caught:', e.error);
});
