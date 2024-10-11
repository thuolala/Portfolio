// Navbar scroll to 
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault(); 
//         const targetId = this.getAttribute('href'); 
//         const targetElement = document.querySelector(targetId); 

//         // Smooth scroll to the target element
//         targetElement.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start' 
//         });
//     });
// });

// Mascot 
const mascot = document.getElementById('girl');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Get current scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Total scrollable height

    // Calculate horizontal and vertical positions based on scroll
    const horizontalPosition = (scrollY / maxScroll) * (window.innerWidth - 300); // Horizontal movement range

    // Move the mascot diagonally from top left to bottom right
    mascot.style.transform = `translateX(${horizontalPosition}px`;
});

// Scroll to contact info
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Select the target element using its ID
    const targetId = 'contact';
    const targetElement = document.getElementById(targetId);

    // Smooth scroll to the target element
    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Back to top 
// Get the button:
var backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when scrolled down 20px from the top of the document
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Copy phone to clipboard
// Function to handle the copy process
function copyToClipboard(textElementId) {
    // Create a temporary textarea element
    const textToCopy = document.getElementById(textElementId).innerText;
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;

    // Append the textarea to the body, select the text, and copy it
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Show the "Copied!" message in the center of the screen
    const copiedMessage = document.getElementById("copiedMessage");
    copiedMessage.style.display = "block";
    copiedMessage.style.opacity = "1"; // Make it visible

    // Hide the message after 2 seconds
    setTimeout(function () {
        copiedMessage.style.opacity = "0"; // Fade it out
        setTimeout(function () {
            copiedMessage.style.display = "none"; // Remove after fade-out
        }, 500); // Wait for fade-out transition to finish
    }, 1000); // 2000 milliseconds = 2 seconds
}

// Add event listeners to all copyable cards
document.querySelectorAll(".copy-card").forEach(function (card) {
    card.addEventListener("click", function () {
        const textElementId = card.getAttribute("data-copy-text");
        copyToClipboard(textElementId);
    });
});

// Get the bottle element
// const bottleCap = document.getElementById('bottleCap');
// const bottle = document.getElementById('bottle');

// // Add event listener for click event
// bottle.addEventListener('click', function () {
//     // Variable to track cap state
//     let isCapOpen = false;
//     if (!isCapOpen) {
//         isCapOpen = true; // Mark the cap as open

//         // Add the class to animate the cap
//         bottleCap.classList.add('cap-open');

//         // Wait for a moment and then return the cap to its original position
//         setTimeout(() => {
//             bottleCap.classList.remove('cap-open');
//             bottleCap.style.transform = 'translateX(-50%)'; // Reset position
//             isCapOpen = false; // Mark the cap as closed
//         }, 1000); // Adjust this duration for how long you want the cap to stay open
//     }
// });

// Select all the books
const books = document.querySelectorAll('.book');

// Apply random rotation to each book
books.forEach(book => {
    const randomAngle = Math.floor(Math.random() * 21) - 15; // Random angle between -10 and 10 degrees
    book.style.transform = `rotate(${randomAngle}deg)`;

    book.addEventListener('click', function () {
        // const randomAngle = Math.floor(Math.random() * 21) - 10; // Random angle between -10 and 10 degrees
        // book.style.transform = `rotate(${randomAngle}deg)`;
        book.style.transform = `rotate(${0}deg)`;
    });
});






