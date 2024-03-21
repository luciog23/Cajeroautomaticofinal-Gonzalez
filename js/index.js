const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})

const saldoSpan = document.getElementById("saldo");
const retiroInput = document.getElementById("retiro");
const retirarBtn = document.getElementById("retirarBtn");
const depositoInput = document.getElementById("deposito");
const depositaBtn = document.getElementById("depositarBtn");
const depositoSpan = document.getElementById("udeposito");
const retiroSpan = document.getElementById("uretiro");

retirarBtn.addEventListener("click", function() {
    let saldoActual = parseFloat(saldoSpan.textContent);
    let cantidadRetiro = parseFloat(retiroInput.value);

    if (!isNaN(cantidadRetiro) && cantidadRetiro > 0 && cantidadRetiro <= saldoActual) {
        saldoActual -= cantidadRetiro;
        saldoSpan.textContent = saldoActual.toFixed(2);
        retiroSpan.textContent = cantidadRetiro;
        localStorage.setItem("numero",saldoActual.toFixed(2));
        Swal.fire(`Retiro exitoso. Nuevo saldo: ${saldoActual.toFixed(2)} USD`);
        retiroInput.value = "";
    } else {
        Swal.fire("Cantidad de retiro no válida. Por favor, ingrese una cantidad válida.");
    }
});

depositarBtn.addEventListener("click", function() {
    let saldoActual = parseFloat(saldoSpan.textContent);
    let cantidadDeposito = parseFloat(depositoInput.value);

    if (!isNaN(cantidadDeposito) && cantidadDeposito > 0) {
        saldoActual += cantidadDeposito;
        saldoSpan.textContent = saldoActual.toFixed(2);
        depositoSpan.textContent = cantidadDeposito;
        localStorage.setItem("numero",saldoActual.toFixed(2))
        Swal.fire(`Deposito exitoso. Nuevo saldo: ${saldoActual.toFixed(2)} USD`);
        depositoInput.value = "";
    } else {
        Swal.fire("Cantidad de deposito no válida. Por favor, ingrese una cantidad válida.");
    }
});