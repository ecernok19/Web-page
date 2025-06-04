/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }

    const navLinks = document.querySelectorAll('#mainNav ul li a');
    const pageSections = document.querySelectorAll('.page-section');

    // Function to switch pages
    function showPage(pageId: string) {
        pageSections.forEach(section => {
            if (section.id === pageId) {
                (section as HTMLElement).style.display = 'block';
                section.classList.add('active-page');
            } else {
                (section as HTMLElement).style.display = 'none';
                section.classList.remove('active-page');
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${pageId.replace('Page', '')}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Event listeners for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href')?.substring(1); // e.g., "home", "resume", "projects"
            if (targetId) {
                showPage(`${targetId}Page`); // e.g., "homePage", "resumePage"
            }
        });
    });

    // Show the initial page (Home)
    // Ensure #homePage is visible by default via CSS or explicitly set here
    const initialPageHash = window.location.hash;
    let initialPage = 'homePage'; // Default
    if (initialPageHash) {
        const targetPage = initialPageHash.substring(1) + 'Page';
        const elementExists = document.getElementById(targetPage);
        if (elementExists) {
             initialPage = targetPage;
        }
    }
    showPage(initialPage);


    console.log("Personal website loaded and navigation initialized.");
});