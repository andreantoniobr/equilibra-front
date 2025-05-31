document.getElementById("entryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let amount = document.getElementById("entryAmount").value;
    let date = document.getElementById("entryDate").value;    

    if (amount === "") {
        alert("Por favor, preencha o valor.");        
    } else if (date === "") {
        alert("Por favor, preencha a data!");        
    } else {
        alert("Formulário enviado com sucesso!");
        hideModal("entryModal");
    }
});

function hideModal(modalID) {
    let modalElement = document.getElementById(modalID);
    let modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
}