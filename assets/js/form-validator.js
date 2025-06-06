document.getElementById("entryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const entryAmount = document.getElementById("entryAmount");
    const entryDate = document.getElementById("entryDate");

    let amount = entryAmount.value;
    let date = entryDate.value;    

    if (amount === "") {   
        addAlert("Por favor, preencha o valor.", 'danger', '#modal-alerts')     
    } else if (date === "") {
        addAlert("Por favor, preencha a data!", 'danger', '#modal-alerts')        
    } else {
        addAlert("Cadastrado com sucesso!", 'success', '#page-alerts')
        hideModal("entryModal");
        entryAmount.value = '';
        entryDate.value = '';
        removeAlertsInSelector('#modal-alerts');
    }
});

function hideModal(modalID) {
    let modalElement = document.getElementById(modalID);
    let modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
}

function addAlert(message, type = 'primary', selector = 'body') {
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${type} alert-dismissible fade show`;
  alertElement.role = 'alert';
  alertElement.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  if (selector === 'body') {
    document.body.prepend(alertElement);
  } else {
    const element = document.querySelector(selector);
    if (element) {
      removeAlertsInElement(element);
      element.appendChild(alertElement); 
    }
  }  
}

function removeAlertsInSelector(selector) {
    const element = document.querySelector(selector);
    removeAlertsInElement(element);
}

function removeAlertsInElement(element) {
    element.innerHTML = ''; 
}