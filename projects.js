// Projects section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add any project-specific functionality here
    console.log('Projects section loaded');
    
    // Example: Add click tracking or animations
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add any click effects or tracking here
            console.log('Project card clicked');
        });
    });
});