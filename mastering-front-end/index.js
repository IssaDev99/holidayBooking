//convert today date to input format
const today = new Date().toISOString().split("T")[0];
start_date.value = today;

// Limiter la date dans le passé à aujourd'hui

start_date.min = today;

// tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// convert tomorrow to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

//empecher que la date de début soit supérieur à la date de fin

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

// empecher que la date de fin soit inférieur à la date de début

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

// calcul du prix en fonction des dates

const bookingCalc = () => {
  let diffTime = Math.abs(
    // en millisecondes
    new Date(end_date.value) - new Date(start_date.value)
  );
  //conversion en jours
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //injecter la valeur dans le span multiplier par le prix

  total.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
