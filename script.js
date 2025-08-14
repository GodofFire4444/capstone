document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar
    hamburger.addEventListener('click', () => {
        const isActive = sidebar.classList.toggle('active');
        document.body.classList.toggle('no-scroll', isActive); // lock/unlock scroll
    });

    // Close sidebar on outside click
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Dropdown toggle
    document.querySelectorAll('.dropdown-toggle').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.parentElement.classList.toggle('active');
        });
    });
});
