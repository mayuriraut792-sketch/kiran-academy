// Kiran Academy - JavaScript

// Show welcome message
function showWelcome() {
    alert("Welcome to Kiran Academy!");
}

// Course information
const courses = {
    python: {
        title: "Python Programming",
        description: "Learn Python from basics to advanced programming."
    },
    ai: {
        title: "AI & Machine Learning",
        description: "Learn Artificial Intelligence and Machine Learning concepts."
    },
    web: {
        title: "Web Development",
        description: "Learn HTML, CSS and JavaScript to build websites."
    },
    data: {
        title: "Data Science",
        description: "Learn data analysis, visualization and data science."
    }
};

// Display course details
function showCourse(courseName) {
    const course = courses[courseName];

    if (course) {
        document.getElementById("courseTitle").textContent = course.title;
        document.getElementById("courseDescription").textContent =
            course.description;

        document.getElementById("courseBox").style.display = "block";
    }
}

// Close course box
function closeCourse() {
    document.getElementById("courseBox").style.display = "none";
}

// Contact form
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    alert("Thank you, " + name + "! We will contact you soon.");

    document.getElementById("contactForm").reset();
}

// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
