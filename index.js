/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
document.addEventListener('DOMContentLoaded', function () {
    var yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }
    var navLinks = document.querySelectorAll('#mainNav ul li a');
    var pageSections = document.querySelectorAll('.page-section');
    // Function to switch pages
    function showPage(pageId) {
        console.log("Attempting to show page: ".concat(pageId));
        pageSections.forEach(function (section) {
            var htmlSection = section;
            if (section.id === pageId) {
                console.log("Showing section: ".concat(section.id));
                htmlSection.style.display = 'block';
                section.classList.add('active-page');
                console.log("Section ".concat(section.id, " display style set to: ").concat(htmlSection.style.display));
            }
            else {
                console.log("Hiding section: ".concat(section.id));
                htmlSection.style.display = 'none';
                section.classList.remove('active-page');
                console.log("Section ".concat(section.id, " display style set to: ").concat(htmlSection.style.display));
            }
        });
        navLinks.forEach(function (link) {
            if (link.getAttribute('href') === "#".concat(pageId.replace('Page', ''))) {
                link.classList.add('active');
            }
            else {
                link.classList.remove('active');
            }
        });
        console.log("Finished processing showPage for: ".concat(pageId));
    }
    // Event listeners for navigation links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var _a;
            event.preventDefault();
            var targetId = (_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1); // e.g., "home", "resume", "projects"
            if (targetId) {
                showPage("".concat(targetId, "Page")); // e.g., "homePage", "resumePage"
            }
        });
    });
    // Show the initial page (Home)
    // Ensure #homePage is visible by default via CSS or explicitly set here
    var initialPageHash = window.location.hash;
    var initialPage = 'homePage'; // Default
    if (initialPageHash) {
        var targetPage = initialPageHash.substring(1) + 'Page';
        var elementExists = document.getElementById(targetPage);
        if (elementExists) {
            initialPage = targetPage;
        }
    }
    showPage(initialPage);
    console.log("Personal website loaded and navigation initialized.");
});
