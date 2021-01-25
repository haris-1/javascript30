const inputs = document.querySelectorAll("input");

function updateValue() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", updateValue);
  input.addEventListener("mousemove", updateValue);
});
