$(document).ready(function() {
  if (!$.fn.dataTable.isDataTable('#entries')) {
    $('#entries').DataTable({
      columnDefs: [
            { width: '10%', targets: 0 },  // Primeira coluna (Data)
            { width: '30%', targets: 1 },  // Segunda coluna (Descrição)
            { width: '30%', targets: 2 },  // Terceira coluna (Categoria)
            { width: '10%', targets: 3 },  // Quarta coluna (Valor)
            { width: '10%', targets: 4 },  // Quinta coluna (Status)
            { width: '10%', targets: 5 }   // Sexta coluna (Ações)
        ],
        pageLength: 10,
        lengthMenu: [ [5, 10, 25, 50, -1], [5, 10, 25, 50, "Todos"] ], 
      "language": {
        "sProcessing": "Processando...",
        "sLengthMenu": "Exibir _MENU_ registros por página",
        "sZeroRecords": "Nenhum registro encontrado",
        "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
        "sInfoFiltered": "(filtrado de _MAX_ registros no total)",
        "sSearch": "Pesquisar:"       
      }
    });
  }
});

