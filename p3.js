document.addEventListener('DOMContentLoaded', function() {
    // Handle menu button click to scroll to the respective category section
    document.querySelectorAll('.menu-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            document.getElementById(category).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Handle add to bucket button click
    document.querySelectorAll('.add-to-bucket').forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to bucket');
        });
    });
});
