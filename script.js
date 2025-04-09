document.addEventListener("DOMContentLoaded", () => {
  // Get the necessary elements using ID selectors
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const navLinks = document.querySelector(".nav-links");

  // Ensure the menu and close icons are hidden on large screens by default
  const mediaQuery = window.matchMedia("(max-width: 800px)");

  // Function to toggle visibility of menu icons based on screen size
  const toggleMenuIcons = () => {
    if (mediaQuery.matches) {
      menuIcon.style.display = "block"; // Show hamburger icon
      closeIcon.style.display = "none"; // Hide close icon
    } else {
      menuIcon.style.display = "none"; // Hide hamburger icon
      closeIcon.style.display = "none"; // Hide close icon
    }
  };

  // Run toggleMenuIcons to set initial display state on page load
  toggleMenuIcons();

  // Add listener to update the display state on window resize
  mediaQuery.addListener(toggleMenuIcons);

  // Toggle menu visibility on click of the hamburger icon
  menuIcon.addEventListener("click", () => {
    navLinks.classList.add("open"); // Add class to show menu
    menuIcon.style.display = "none"; // Hide the hamburger icon
    closeIcon.style.display = "block"; // Show the close icon
  });

  // Close the menu when the close icon is clicked
  closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("open"); // Remove class to hide menu
    menuIcon.style.display = "block"; // Show the hamburger icon again
    closeIcon.style.display = "none"; // Hide the close icon
  });

  // Add functionality to toggle sub-menu visibility when a dropdown is clicked
  const dropdownButtons = document.querySelectorAll(".nav-links .links li");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Prevent the default link behavior
      event.preventDefault();

      // If the clicked item is not the current active item, toggle its visibility
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      } else {
        // Close any other open dropdowns
        document
          .querySelectorAll(".nav-links .links li.active")
          .forEach((openDropdown) => {
            openDropdown.classList.remove("active");
          });
        // Open the clicked dropdown
        button.classList.add("active");
      }
    });
  });
});
