/* ============================================
   BribeYourselfFit Landing Page Scripts
   Created: 2025
   
   This file contains JavaScript for interactive
   features on the landing page.
   
   Currently minimal - ready for future enhancements:
   - Smooth scroll animations
   - Interactive demos
   - Analytics tracking
   - Form submissions
   ============================================ */

// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('BribeYourselfFit landing page loaded! 🎯');
    
    // Add smooth scroll behavior to all anchor links
    initSmoothScroll();
    
    // Add animation when elements come into view
    initScrollAnimations();
});

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
function initSmoothScroll() {
    // Get all links that start with #
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target element
            const targetId = this.getAttribute('href');
            
            // Only handle internal links (not external)
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS - Fade in elements
   ============================================ */
function initScrollAnimations() {
    // Create an Intersection Observer to watch elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when element comes into view
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of element is visible
    });
    
    // Observe all feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => observer.observe(card));
    
    // Observe all option cards
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => observer.observe(card));
    
    // Observe all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => observer.observe(step));
}

/* ============================================
   FUTURE ENHANCEMENTS - Placeholder functions
   ============================================ */

// Example: Track button clicks for analytics
function trackButtonClick(buttonName) {
    // In the future, you could add Google Analytics or similar
    console.log(`Button clicked: ${buttonName}`);
}

// Example: Add event listeners to CTA buttons
const ctaButtons = document.querySelectorAll('.btn');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        trackButtonClick(buttonText);
    });
});

/* ============================================
   OPTIONAL: Add CSS classes for animations
   
   You can add this to styles.css if you want
   animated entrance effects:
   
   .feature-card,
   .option-card,
   .step {
       opacity: 0;
       transform: translateY(20px);
       transition: all 0.6s ease;
   }
   
   .feature-card.fade-in,
   .option-card.fade-in,
   .step.fade-in {
       opacity: 1;
       transform: translateY(0);
   }
   ============================================ */
