const rangeBar = document.getElementsByTagName("input")[0];
const views = document.getElementById("views");
const billing = document.getElementById("monthlyPrice");
const billing2 = document.getElementById("monthlyPrice2");
const toggle = document.getElementById("toggle");


yearDiscount = () => {
let monthlyBillingp = Number(billing.textContent);
let monthlyBillingp2 = Number(billing2.textContent);
if (toggle.checked == true) {
  billing.textContent = monthlyBillingp*=(75/100);
  billing2.textContent = monthlyBillingp2*=(75/100);
} else {
  billing.textContent = monthlyBillingp*=(100/75);
  billing2.textContent = monthlyBillingp2*=(100/75);
}
}

changePrice = () => {
  let rangeValue = rangeBar.value;
    switch(rangeValue){
      case "20":
        views.textContent = "10K PAGEVIEWS";
        billing.textContent = "8";
        billing2.textContent = "8";
        rangeBar.style = "background: linear-gradient(90deg, hsl(174, 77%, 80%) 0%, hsl(224, 65%, 95%) 0%)"
        break

      case "40":
        views.textContent = "50K PAGEVIEWS";
        billing.textContent = "12";
        billing2.textContent = "12";
        rangeBar.style = "background: linear-gradient(90deg, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%) 25%)"
        break

      case "60":
        views.textContent = "100K PAGEVIEWS";
        billing.textContent = "16";
        billing2.textContent = "16";
        rangeBar.style = "background: linear-gradient(90deg, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%)"
        break

      case "80":
        views.textContent = "500K PAGEVIEWS";
        billing.textContent = "24";
        billing2.textContent = "24";
        rangeBar.style = "background: linear-gradient(90deg, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%) 75%)"
        break

      case "100":
        views.textContent = "1M PAGEVIEWS";
        billing.textContent = "36";
        billing2.textContent = "36";
        rangeBar.style = "background: linear-gradient(90deg, hsl(174, 77%, 80%) 100%, hsl(224, 65%, 95%) 100%)"
        break
    }

    toggle.checked = false;
}


rangeBar.addEventListener("input", changePrice)
toggle.addEventListener("click", yearDiscount)
