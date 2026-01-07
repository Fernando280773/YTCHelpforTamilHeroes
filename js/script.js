// Help For Tamil Heroes - Interactive Features

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const helpBtn = document.getElementById('helpBtn');
    const donateBtn = document.getElementById('donateBtn');
    const shareBtn = document.getElementById('shareBtn');

    // Learn More button - scroll to mission section
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function () {
            document.getElementById('mission').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Help button - scroll to contact section
    if (helpBtn) {
        helpBtn.addEventListener('click', function () {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Donate button action
    // Donate button action - Open Modal
    if (donateBtn) {
        donateBtn.addEventListener('click', function () {
            const modal = document.getElementById('donationModal');
            if (modal) {
                modal.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    modal.querySelector('.bg-gray-900').classList.add('opacity-75'); // Overlay
                    modal.querySelector('.inline-block').classList.add('opacity-100', 'translate-y-0', 'sm:scale-100'); // Panel
                    modal.querySelector('.inline-block').classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                }, 10);
            }
        });
    }

    // Modal Close Logic
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const donationModal = document.getElementById('donationModal');

    function closeModal() {
        if (donationModal) {
            donationModal.classList.add('hidden');
        }
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && donationModal && !donationModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Copy Bank Details
    const copyDetailsBtn = document.getElementById('copyDetailsBtn');
    if (copyDetailsBtn) {
        copyDetailsBtn.addEventListener('click', function () {
            const details = `Bank Name: Virgin Bank\nAccount Name: Yorkshire Tamil Community\nSort Code: 05-07-32\nAccount No: 21994885\nReference: Help For Tamil Heroes`;
            copyToClipboard(details);

            const originalText = this.innerText;
            this.innerText = 'Copied! ✅';
            setTimeout(() => {
                this.innerText = originalText;
            }, 2000);
        });
    }

    // Share button functionality
    if (shareBtn) {
        shareBtn.addEventListener('click', function () {
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

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all implementation cards
    const cards = document.querySelectorAll('.implementation-card');
    cards.forEach(function (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add click effects to cards
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-gradient');
        if (heroSection) {
            heroSection.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
        }
    });

    // Dynamic gradient animation speed based on scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = scrolled / maxScroll;

        const gradientElements = document.querySelectorAll('.hero-gradient');
        gradientElements.forEach(function (element) {
            const animationDuration = 8 + (scrollPercentage * 4); // 8s to 12s
            element.style.animationDuration = animationDuration + 's';
        });
    });

    // Add hover effects for social links
    const socialLinks = document.querySelectorAll('a[href="#"]');
    socialLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // Optional: You could allow these to open real links if href is not '#'
            if (this.getAttribute('href') === '#') {
                alert('சமூக ஊடக இணைப்புகள் விரைவில் வரும்!\nSocial media links coming soon!');
            }
        });
    });

    // Console welcome message
    console.log('%c🌟 யோக்சியர் தமிழ் சமூகம் - Help For Tamil Heroes 🌟',
        'color: #FF4444; font-size: 16px; font-weight: bold;');
    console.log('%cதமிழர் விடுதலைப் போராட்டத்தில் தியாகம் செய்த முன்னாள் போராளிகளுக்கான உதவி மற்றும் மறுவாழ்வு திட்டம்',
        'color: #32CD32; font-size: 12px;');
});

// Error handling for missing elements
window.addEventListener('error', function (e) {
    console.log('Error caught:', e.error);
});
