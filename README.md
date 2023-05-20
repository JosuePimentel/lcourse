# Comandos GIT

* git config --global user.name "nomeDoUsario"
* git conif --global user.email emailDoUsuario
* git --version - versão do git
* git init - Fazer dentro da Pasta que vc quer criar um repositorio.
* git clone link* - clonar um repositorio pelo terminal, *link do * repositorio no github.
* git status - ver o status do repositorio, se há mudanças ou commits a fazer.
* git add nomeDoArquivo - adicionar um aquivo para ser feito posteriormente o commit.
* git diff * - ver a diferença após alguma mudança feita, comando deve ser colocado enquanto ainda estiver como Modified, caso esteja no stagged, adicione no * --staged.
* git commit -m "mensagem" - commitar o que foi adicionado (git add).
* git restore nomeDoArqivo - volta atras um dos estagios, no caso quando estiver Modified, ele retorna para Unmodified, ou seja, "exclui" oq vc escreveu até o último commit.
* git restore --staged nomeDoArquivo - volta do estagio de staged para Modified.
* git log - Mostra os ultimos commits feitos.
* git push rementente distinatario- Faz uploud do remoto para a rede, remetente -> origin, destinatario -> main ou master.
* git fetch - Faz download das referencias e arquivos de um repositorio.
* git pull - Atualiza os arquivos remotos com o do repositorio.
* git remote add name url - Quando se da o git init direto do prompt, linka o remoto com a rede(GitHub).
* git remote
