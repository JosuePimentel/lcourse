# Comandos GIT

* git config --global user.name "nomeDoUsario"
* git conif --global user.email emailDoUsuario
* git --version - versão do git.
* git init - Fazer dentro da Pasta que vc quer criar um repositorio.
* git clone link* - clonar um repositorio pelo terminal, *link do * repositorio no github.
* git status - ver o status do repositorio, se há mudanças ou commits a fazer.
* git add nomeDoArquivo - adicionar um aquivo para ser feito posteriormente o commit.
* git diff * - ver a diferença após alguma mudança feita, comando deve ser colocado enquanto ainda estiver como Modified, caso esteja no stagged, adicione no * --staged ou origin/main.
* git commit -m "mensagem" - commitar o que foi adicionado (git add).
* git restore nomeDoArqivo - volta atras um dos estagios, no caso quando estiver Modified, ele retorna para Unmodified, ou seja, "exclui" oq vc escreveu até o último commit.
* git restore --staged nomeDoArquivo - volta do estagio de staged para Modified.
* git log - Mostra os ultimos commits feitos.
* git log --oneline --decorate - Mostra aonde esta o HEAD(Qual branch vc esta).
* git push rementente distinatario- Faz uploud do remoto para a rede, remetente -> origin, destinatario -> main ou master.
* git fetch - Faz download das referencias e arquivos de um repositorio.
* git pull - Atualiza os arquivos remotos com o do repositorio.
* git remote add name url - Quando se da o git init direto do prompt, linka o remoto com a rede(GitHub).
* git remote - Nome do remoto.
* git branch nome - Criar uma nova branch.
* git checkout nome - Escolher qual branch quer trabalhar.
* git merge nomeDaBranch - Mescla um arquivo com outro, *Vc deve estar da branch e deve trazer os arquivos de utro branch para essa que vc esta.

* npm create vite -> Criar Projeto em React
* code . -> abre o projeto do vite

* git status
* git init > git add . > git add commit -m '' > cria o repositorio no github e ai ele ja vai dar os comandos necessarios pra transferir o conteudo pro github

* Outros comandos no terminal do linux:
* pwd -> mostra com o path que vc esta
* ls -a -> lista todos os itens da pasta que vc esta, até os ocultos.
* vi nome.c -> editor pelo linux
* esq + : -> set number, exit, wq (sai e salva)
* i -> insert 
* ls -l -> mosta as permissoes, r - read; w - write; x - executavel; 
* cat arquivo.c -> lê o arquivo
* touch nome.tipo -> cria um arquivo com a extensao que escolher
* echo "oq vai ser adicionado" >> arquivo.tipo -> concatena o texto dentro do arquivo.tipo
* echo "oq vai ser substituido" > arquivo.tipo -> substitui o conteudo do arquivo pelo novo conteudo
* code . -> abre o arquivo do path no vscode
* code arquivo.tipo -> abre o arquivo no vscode
* git config --global init.defaultBranch nome -> criar um repositorio pelo cmd
