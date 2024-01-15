function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById("num").value);
  const unit = document.getElementById("unit").value;

  let convertTemperature;
  if (unit == "Celsius") {
    convertTemperature = (inputTemperature * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `${inputTemperature} degrees Celsius = ${convertTemperature} degrees Fahrenheit`;
  } else if (unit == "Fahrenheit") {
    convertTemperature = ((inputTemperature - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `${inputTemperature} degrees Fahrenheit = ${convertTemperature} degrees Celsius`;
  } else {
    document.getElementById("result").textContent =
      "Please select a valid option";
  }
}
