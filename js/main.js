const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((container) => {
  const plusIcon = container.querySelector(".icon-plus");
  const minusIcon = container.querySelector(".icon-minus");
  const answer = container.querySelector(".answer");

  const toggleAnswer = () => {
    const isVisible = answer.style.display === "block";
    answer.style.display = isVisible ? "none" : "block";
    plusIcon.style.display = isVisible ? "block" : "none";
    minusIcon.style.display = isVisible ? "none" : "block";
  };

  container.addEventListener("click", toggleAnswer);

  container.addEventListener("keydown", (e) => {
    console.log('here');
    if (e.key === "Enter" || e.key === " ") {
      toggleAnswer();
    }
  });
});
