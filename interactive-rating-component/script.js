// ===============================
// ELEMENTS
// ===============================

const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.getElementById("submit-btn");

const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thank-you-card");

const selectedRating = document.getElementById("selected-rating");

// ===============================
// VARIABLES
// ===============================

let currentRating = null;

// ===============================
// SELECT RATING
// ===============================

ratingButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active state from all buttons
        ratingButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        // Save selected rating
        currentRating = button.dataset.value;
    });

});

// ===============================
// SUBMIT
// ===============================

submitButton.addEventListener("click", () => {

    // Don't continue if nothing selected
    if (!currentRating) {
        alert("Please select a rating.");
        return;
    }

    // Display selected rating
    selectedRating.textContent = currentRating;

    // Hide rating card
    ratingCard.classList.add("hidden");

    // Show thank-you card
    thankYouCard.classList.remove("hidden");

});