# PCE Integrado

Portal estático com um ponto de entrada para os quatro sistemas anexados. O portal usa Firebase Authentication (e-mail e senha) no mesmo projeto Firebase já configurado pelo módulo Malote. Os módulos ficam em `public/modulos/` e exigem uma sessão ativa.

## Antes de usar com dados reais

1. Crie um repositório GitHub e envie o conteúdo desta pasta.
2. Habilite **Authentication → Email/Password** no projeto Firebase `reserva-de-veiculos-71157` e crie as contas autorizadas. Não cadastre contas compartilhadas.
3. Publique `public/` em uma hospedagem estática HTTPS (por exemplo, GitHub Pages) e adicione o domínio aos domínios autorizados do Firebase Authentication.
4. Configure as regras do Realtime Database para exigir autenticação antes de liberar o uso. Não use regras públicas (`read/write: true`). As regras atuais do banco precisam ser conferidas no Console antes de liberar a equipe.

O `apiKey` presente no HTML é identificador público do app web Firebase; a proteção dos dados depende das regras do Realtime Database e das contas autorizadas. Nunca inclua credenciais de administrador/servidiço no navegador.

## Preservar dados locais antes da migração

Os arquivos `escala.html` e `analise de redução de estoque.html` podem ter alterações guardadas somente no `localStorage` do navegador. Abra cada arquivo antigo no navegador em que ele era usado e clique em **Baixar cópia dos dados locais**. Guarde o JSON. No portal, selecione o JSON em **Importar dados antigos**. A importação grava uma cópia preservada em `migracoes/pce/<uid>` no Realtime Database; não sobrescreve as informações existentes.

A importação é uma cópia de segurança dos valores antigos. Antes de migrá-los para os caminhos operacionais, é necessário validar o conteúdo e as regras de acesso. A análise de reposição depende de planilhas/textos carregados pelo usuário e não persiste os arquivos de entrada. O Malote já grava tarefas, reservas, veículos e configurações no Realtime Database; este portal reutiliza o mesmo projeto e não copia nem apaga esses dados.

## Estado do pacote

Este é um pacote inicial de integração. Ele reúne os quatro HTMLs e oferece autenticação de entrada, navegação e preservação dos dados locais exportados. A tela de perfil antiga do Malote permanece por enquanto, assim como a persistência local das escalas e da análise. A conversão completa desses módulos para gravar e ler dados operacionais do Firebase deve ser feita após testar a cópia migrada e definir perfis/permissões.
