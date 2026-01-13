document.addEventListener('DOMContentLoaded', buscarDados);

function buscarDados() {
    const url = `https://api.github.com/users/Miisy`;
    const nome = document.querySelector('#nome');
    const user = document.querySelector('#user');
    const repo = document.querySelector('#repo');
    const follower = document.querySelector('#followers');
    const followin = document.querySelector('#following');
    const avatar = document.querySelector('#avatar');
    const github = document.querySelector('#github');

    fetch(url)
        .then(function(answer){
            return answer.json();
        })
        .then(function(json){
            nome.innerText = json.name;
            user.innerText = json.login;
            repo.innerText = json.public_repos;
            follower.innerText = json.followers;
            followin.innerText = json.following;
            avatar.src = json.avatar_url;
            github.href = json.html_url;
        })
        
        
        .catch (function(erro) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        
    }) 
    .finally(function(){
        console.log("Finished."); 
    })
    
}
