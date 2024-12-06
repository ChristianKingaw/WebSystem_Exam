document.addEventListener('DOMContentLoaded', function () {
    // Modal functionality
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalTitle = this.getAttribute('data-title');
            const modalDescription = this.getAttribute('data-description');
            const modalInstructions = this.getAttribute('data-instructions');
            const modalImageSrc = this.getAttribute('data-image');

            const modalTitleElement = document.querySelector('#projectModal .modal-title');
            const modalDescriptionElement = document.querySelector('#projectModal #project-description');
            const modalInstructionsElement = document.querySelector('#projectModal #project-instructions');
            const modalImageElement = document.querySelector('#projectModal #project-image');

            modalTitleElement.textContent = modalTitle;
            modalDescriptionElement.textContent = modalDescription;
            modalInstructionsElement.textContent = modalInstructions;
            modalImageElement.src = modalImageSrc;
        });
    });

    // Filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.Recipe-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            
            portfolioItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});