const biggerClicked = () => {
  const textArea = document.getElementById("textarea");
  textArea.style.fontSize = "24px";
};

const radioClicked = () => {
  const textArea = document.getElementById("textarea");
  const fancyChecked = document.getElementById("fancy").checked;
  if (fancyChecked) {
    textArea.style.fontWeight = "bold";
    textArea.style.backgroundColor = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.backgroundColor = "white";
    textArea.style.textDecoration = "none";
  }
};

const mooClicked = () => {
  const textArea = document.getElementById("textarea");
  textArea.style.textTransform = "capitalize";

  let string = textArea.value;

  const arr = string.split(".");

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] += "-Moo";
  }

  string = arr.join(".");

  textArea.value = string;
};
