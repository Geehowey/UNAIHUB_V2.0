const options = {
  typeSpeed: 50,
  backSpeed: 25,
  startDelay: 1000,
  backDelay: 500,
  loop: false,
  cursorChar: "|",
};

// Title options with completion callback to start slogan typing
const titleOptions = {
  ...options,
  strings: ["# WELCOME TO UNAIHUB"],
  onComplete: () => {
    // Once title typing is complete, start the slogan typing
    new Typed("#slogan", sloganOptions);
    // Hide the title cursor after completion
    document.querySelector("#title .typed-cursor").style.display = "none";
  },
  showCursor: true, // Ensure this is true to show the cursor during typing
};

const sloganOptions = {
  ...options,
  strings: ["The future of AI collaboration starts here."],
  onComplete: () => {
    // Hide the slogan cursor after completion
    document.querySelector("#slogan .typed-cursor").style.display = "none";
  },
  showCursor: true, // Ensure this is true to show the cursor during typing
};

// Initialize typing effect for the title
new Typed("#title", titleOptions);
