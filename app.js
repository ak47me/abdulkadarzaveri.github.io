window.addEventListener('load', function() {
  document.querySelector('.my_image').style.opacity = '0.7'; // Set opacity to 1 to trigger the transition
  document.querySelector('.education').style.transition = 'all 2s ease-in-out';
  const glitchTexts = ['Websites', 'ML models', 'Games', 'things'];
  let index = 0;

  setInterval(() => {
    const glitchElement = document.getElementById('glitch');
    glitchElement.textContent = glitchTexts[index];
    index = (index + 1) % glitchTexts.length;
  }, 2000);
});
window.onload = function() {
  var preloader = document.querySelector('.preloader');
  setTimeout(function() {
    preloader.classList.add('fade-out');
    document.body.classList.add('loaded');
  }, 3000); // 3000 milliseconds = 3 seconds
  
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
  });
  menu_btn.addEventListener('click', function() {
    mobile_menu.classList.toggle('is-active');
  });

};


 
function showTab(tabName) {
  // Hide all tab contents
  var tabContents = document.getElementsByClassName("tab-contents");
  for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
  }
  // Remove active class from all tab links
  var tabLinks = document.getElementsByClassName("tab-links");
  for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active-link");
  }
  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";
  // Add active class to the clicked tab link
  event.currentTarget.classList.add("active-link");
}
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}





// handleScroll();


// JS code

// // Get the timeline items
// const timelineItems = document.querySelectorAll(".timeline-item");

// // Define a function to animate the timeline items on scroll
// function animateTimelineItems() {
//   // Get the window height
//   const windowHeight = window.innerHeight;

//   // Loop through each timeline item
//   timelineItems.forEach(function(item) {
//     // Get the item's position from the top of the document
//     const itemTop = item.getBoundingClientRect().top + window.pageYOffset;

//     // Check if the item is in the viewport
//     if (itemTop < window.pageYOffset + windowHeight - 100) {
//       // Add a class to the item to trigger the animation
//       item.classList.add("animate");
//     }
//   });
// }

// // Add a scroll event listener to the window
// window.addEventListener("scroll", animateTimelineItems);

// // Call the function initially
// animateTimelineItems();

document.querySelector('.menu-icon').addEventListener('click', function() {
  var menu = document.querySelector('.menu');
  menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  var icon = document.querySelector('.menu-icon i');
  icon.className = icon.className === 'fa-solid fa-bars' ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});