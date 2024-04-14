const form = document.getElementById('formulario');
const first = document.getElementById('primeiroNumero');
const second = document.getElementById('segundoNumero');
const containerSucesso = document.querySelector('.message');
form.addEventListener('submit', function(e)
{
    e.preventDefault();

    const sucesso = `O número <b>${second.value}</b> é maior que o número <b>${first.value}.</b>`;

    if (second.value > first.value){
        
        containerSucesso.innerHTML = sucesso;
        containerSucesso.style.display ='block';
                
    } else{
        alert('Verifique os números e tente novamente.')
    }

})
form.addEventListener('reset', function(e)
{
    location.reload();
})