$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-da-tarefa-nova').val();
        const novoItem =$('<li class="oier"></li>');
        
        $(`
        <li>
        ${novaTarefa}
        </li>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#nome-da-tarefa-nova').val('');
        $(novoItem).click(function() {
            $(novoItem).wrap('<strike>');    
    })
})
})