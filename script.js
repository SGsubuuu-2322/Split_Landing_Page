// These are the constants containing important HTML elements for further modifications...
const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

// This eventlisteners are for dynamic effects of split...
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
