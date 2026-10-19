function calculateBMI() {
  const h = parseFloat(document.getElementById("height").value);
  const w = parseFloat(document.getElementById("weight").value);
  const error = document.getElementById("error");
  const output = document.getElementById("output");

  error.innerText = "";

  if (isNaN(h) || isNaN(w)) {
    output.hidden = true;
    error.innerText = "Please enter both height and weight.";
    return;
  }

  if (h < 50 || h > 250 || w < 10 || w > 400) {
    output.hidden = true;
    error.innerText =
      "Check your values: height should be 50-250 cm and weight 10-400 kg.";
    return;
  }

  const heightInMeters = h / 100;
  const bmi = w / (heightInMeters * heightInMeters);

  document.getElementById("result").innerText = bmi.toFixed(1);

  let text = "";
  let cls = "";
  if (bmi < 18.5) {
    text = "Underweight";
    cls = "under";
  } else if (bmi < 25) {
    text = "Normal weight";
    cls = "normal";
  } else if (bmi < 30) {
    text = "Overweight";
    cls = "over";
  } else {
    text = "Obese";
    cls = "obese";
  }

  const condition = document.getElementById("condition");
  condition.innerText = text;
  condition.className = cls;

  // Move the marker along the scale (BMI 10 to 40)
  const clamped = Math.min(Math.max(bmi, 10), 40);
  const percent = ((clamped - 10) / 30) * 100;
  document.getElementById("marker").style.left = percent + "%";

  output.hidden = false;
}
