const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide');

  if (height === '' || isNaN(height) || height < 0) {
    results.innerHTML = `Please give a valid hieght ${height}`;
  } else if (weight === '' || isNaN(weight) || weight < 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<h1>${bmi}</h1>`;
    if (bmi < 18.6) {
      guide.innerHTML = `<h1>${'Under Weight'}</h1>`;
    } else if (bmi > 24.9) {
      guide.innerHTML = `<h1>${'Over Weight'}</h1>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      guide.innerHTML = `<h1>${'Normal Weight'}</h1>`;
    }
  }
});
