


document.getElementById("increase").addEventListener("click", doCount ());

function doCount() {
    let x = document.getElementById('total-money').value;
    let total = parseInt(x) + 5;
    document.getElementById('total-money').innerHTML = total;
  }

