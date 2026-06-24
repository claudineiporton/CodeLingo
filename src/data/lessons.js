export const LESSONS = {
    java: [
        {
            id: 'j1',
            title: 'Olá Java!',
            type: 'intro',
            exercises: [
                {
                    id: 'j1_1',
                    type: 'multiple-choice',
                    question: 'Como se imprime texto no console em Java?',
                    options: [
                        'System.out.println()',
                        'console.log()',
                        'print()',
                        'echo()'
                    ],
                    answer: 'System.out.println()'
                },
                {
                    id: 'j1_2',
                    type: 'fill-blank',
                    question: 'Complete o código: public ____ main(String[] args)',
                    options: ['static', 'void', 'class', 'int'],
                    answer: 'static'
                }
            ]
        },
        {
            id: 'j2',
            title: 'Variáveis',
            type: 'concept',
            exercises: [
                {
                    id: 'j2_1',
                    type: 'multiple-choice',
                    question: 'Qual tipo é usado para números inteiros?',
                    options: ['String', 'int', 'boolean', 'double'],
                    answer: 'int'
                }
            ]
        },
        {
            id: 'j3',
            title: 'Condicionais',
            type: 'logic',
            exercises: [
                {
                    id: 'j3_1',
                    type: 'multiple-choice',
                    question: 'Qual palavra-chave é usada para testar uma condição?',
                    options: ['switch', 'if', 'while', 'case'],
                    answer: 'if'
                }
            ]
        }
    ],
    react: [
        {
            id: 'r1',
            title: 'JSX Basics',
            type: 'intro',
            exercises: [
                {
                    id: 'r1_1',
                    type: 'multiple-choice',
                    question: 'O que o JSX nos permite fazer?',
                    options: [
                        'Escrever HTML dentro do JavaScript',
                        'Escrever CSS dentro do HTML',
                        'Compilar Java para Web',
                        'Criar bancos de dados'
                    ],
                    answer: 'Escrever HTML dentro do JavaScript'
                }
            ]
        },
        {
            id: 'r2',
            title: 'Componentes',
            type: 'concept',
            exercises: [
                {
                    id: 'r2_1',
                    type: 'multiple-choice',
                    question: 'Como chamamos as funções que retornam elementos React?',
                    options: ['Hooks', 'Componentes', 'Efeitos', 'Reducers'],
                    answer: 'Componentes'
                }
            ]
        }
    ],
    postgresql: [
        {
            id: 'p1',
            title: 'SQL Básico',
            type: 'intro',
            exercises: [
                {
                    id: 'p1_1',
                    type: 'multiple-choice',
                    question: 'Qual comando é usado para buscar dados em uma tabela?',
                    options: ['SELECT', 'FETCH', 'GET', 'SEARCH'],
                    answer: 'SELECT'
                },
                {
                    id: 'p1_2',
                    type: 'multiple-choice',
                    question: 'Qual cláusula é usada para filtrar resultados?',
                    options: ['WHERE', 'FILTER', 'IF', 'HAVING'],
                    answer: 'WHERE'
                }
            ]
        },
        {
            id: 'p2',
            title: 'JOINs',
            type: 'relational',
            exercises: [
                {
                    id: 'p2_1',
                    type: 'multiple-choice',
                    question: 'Qual JOIN retorna apenas registros com correspondência em ambas as tabelas?',
                    options: ['LEFT JOIN', 'INNER JOIN', 'OUTER JOIN', 'RIGHT JOIN'],
                    answer: 'INNER JOIN'
                }
            ]
        }
    ],
    python: [
        {
            id: 'py1',
            title: 'Introdução ao Python',
            type: 'intro',
            exercises: [
                {
                    id: 'py1_1',
                    type: 'multiple-choice',
                    question: 'Como se define uma função em Python?',
                    options: ['function', 'def', 'func', 'define'],
                    answer: 'def'
                }
            ]
        },
        {
            id: 'py2',
            title: 'Listas',
            type: 'data-structure',
            exercises: [
                {
                    id: 'py2_1',
                    type: 'multiple-choice',
                    question: 'Qual método adiciona um item ao final de uma lista?',
                    options: ['push()', 'add()', 'append()', 'insert()'],
                    answer: 'append'
                }
            ]
        }
    ],
    wsl_docker: [
        {
            id: 'wd1',
            title: 'Configurando o WSL',
            type: 'intro',
            exercises: [
                {
                    id: 'wd1_1',
                    type: 'info',
                    title: 'O que é o WSL?',
                    content: 'O WSL (Windows Subsystem for Linux) permite rodar um ambiente Linux (como Ubuntu) diretamente no Windows, de forma leve e sem a necessidade de máquinas virtuais pesadas.',
                    tip: '💡 Dica: Isso é essencial para rodar Docker e ferramentas de IA locais com a máxima performance de forma nativa!'
                },
                {
                    id: 'wd1_2',
                    type: 'multiple-choice',
                    question: 'Qual a principal vantagem de usar o WSL para desenvolvimento?',
                    options: [
                        'Rodar Linux nativamente dentro do Windows',
                        'Substituir completamente o Windows',
                        'Aumentar o armazenamento do HD',
                        'Criar arquivos de texto'
                    ],
                    answer: 'Rodar Linux nativamente dentro do Windows'
                },
                {
                    id: 'wd1_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para instalar o WSL e a distribuição padrão:',
                    textTemplate: 'wsl --{blank}',
                    options: ['install', 'setup', 'init', 'start'],
                    answer: 'install'
                },
                {
                    id: 'wd1_4',
                    type: 'multiple-choice',
                    question: 'Qual versão do WSL é a mais recente e recomendada para rodar Docker e IA local?',
                    options: [
                        'WSL 2',
                        'WSL 1',
                        'WSL 3',
                        'WSL Enterprise'
                    ],
                    answer: 'WSL 2'
                },
                {
                    id: 'wd1_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para definir a versão padrão do WSL como 2:',
                    textTemplate: 'wsl --set-default-version {blank}',
                    options: ['2', '1', 'active', 'set'],
                    answer: '2'
                }
            ]
        },
        {
            id: 'wd2',
            title: 'Dominando o Docker',
            type: 'concept',
            exercises: [
                {
                    id: 'wd2_1',
                    type: 'info',
                    title: 'Entendendo Containers',
                    content: 'Docker empacota sua aplicação e todas as dependências em um "Container". Isso garante que o software funcione exatamente da mesma forma em qualquer computador.',
                    tip: '💡 Dica: Uma Imagem é como uma receita de bolo (estática), e o Container é o bolo pronto (rodando).'
                },
                {
                    id: 'wd2_2',
                    type: 'multiple-choice',
                    question: 'O que é um container Docker?',
                    options: [
                        'Uma instância em execução de uma imagem',
                        'Um arquivo de texto de configuração',
                        'Uma extensão do Windows Defender',
                        'Um banco de dados em nuvem'
                    ],
                    answer: 'Uma instância em execução de uma imagem'
                },
                {
                    id: 'wd2_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para rodar um container nginx em background (detached) na porta 80:',
                    textTemplate: 'docker run -d -p 80:80 {blank}',
                    options: ['nginx', 'run', 'port', 'image'],
                    answer: 'nginx'
                },
                {
                    id: 'wd2_4',
                    type: 'multiple-choice',
                    question: 'Qual comando é usado para listar todas as imagens baixadas localmente no seu computador?',
                    options: [
                        'docker images',
                        'docker ps',
                        'docker list',
                        'docker show'
                    ],
                    answer: 'docker images'
                },
                {
                    id: 'wd2_5',
                    type: 'tap-fill',
                    question: 'Complete o parâmetro para listar todos os containers (incluindo os parados):',
                    textTemplate: 'docker ps -{blank}',
                    options: ['a', 'all', 'l', 'd'],
                    answer: 'a'
                }
            ]
        },
        {
            id: 'wd3',
            title: 'Gerenciamento do WSL',
            type: 'concept',
            exercises: [
                {
                    id: 'wd3_1',
                    type: 'info',
                    title: 'Gerenciando suas Distros',
                    content: 'Como o WSL roda distribuições Linux completas, é útil saber gerenciá-las. Você pode listar as distribuições instaladas, verificar o status de execução e desligar a máquina virtual para liberar memória RAM.',
                    tip: '💡 Dica: Se o WSL começar a travar ou consumir muita memória, desligar a VM do WSL resolve a maior parte dos problemas.'
                },
                {
                    id: 'wd3_2',
                    type: 'multiple-choice',
                    question: 'Qual comando desliga completamente a máquina virtual do WSL para liberar memória?',
                    options: [
                        'wsl --shutdown',
                        'wsl --stop',
                        'wsl --close',
                        'wsl --exit'
                    ],
                    answer: 'wsl --shutdown'
                },
                {
                    id: 'wd3_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para listar todas as distribuições instaladas e suas versões ativas:',
                    textTemplate: 'wsl -l -{blank}',
                    options: ['v', 'list', 'status', 'version'],
                    answer: 'v'
                },
                {
                    id: 'wd3_4',
                    type: 'multiple-choice',
                    question: 'Como você desinstala e exclui completamente todos os arquivos de uma distribuição do WSL?',
                    options: [
                        'wsl --unregister <distro>',
                        'wsl --remove <distro>',
                        'wsl --delete <distro>',
                        'wsl --clean <distro>'
                    ],
                    answer: 'wsl --unregister <distro>'
                },
                {
                    id: 'wd3_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para remover completamente a distribuição Ubuntu do sistema:',
                    textTemplate: 'wsl --unregister {blank}',
                    options: ['Ubuntu', 'remove', 'distro', 'delete'],
                    answer: 'Ubuntu'
                }
            ]
        },
        {
            id: 'wd4',
            title: 'Integração de Arquivos WSL',
            type: 'concept',
            exercises: [
                {
                    id: 'wd4_1',
                    type: 'info',
                    title: 'Acessando Arquivos entre Sistemas',
                    content: 'O WSL integra perfeitamente os sistemas de arquivos. No terminal Linux, seus discos do Windows estão disponíveis sob a pasta "/mnt/c/". No Windows, você pode acessar os arquivos do Linux usando o caminho de rede "\\\\wsl$\\".',
                    tip: '💡 Dica: Evite editar arquivos do Linux usando ferramentas do Windows fora do VS Code, pois isso pode corromper as permissões de arquivos Linux.'
                },
                {
                    id: 'wd4_2',
                    type: 'multiple-choice',
                    question: 'Onde o disco C: do Windows é montado por padrão dentro do terminal do WSL?',
                    options: [
                        '/mnt/c',
                        '/windows/c',
                        '/drive/c',
                        '/system/c'
                    ],
                    answer: '/mnt/c'
                },
                {
                    id: 'wd4_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para navegar até a pasta do seu usuário Windows via terminal Linux:',
                    textTemplate: 'cd /mnt/{blank}/Users',
                    options: ['c', 'w', 'win', 'd'],
                    answer: 'c'
                },
                {
                    id: 'wd4_4',
                    type: 'multiple-choice',
                    question: 'Como podemos abrir o Windows Explorer diretamente da pasta Linux ativa no terminal do WSL?',
                    options: [
                        'Executar o comando explorer.exe . no terminal',
                        'O Windows Explorer não se conecta ao terminal',
                        'Executar cd //explorer',
                        'Executar wsl --open-explorer'
                    ],
                    answer: 'Executar o comando explorer.exe . no terminal'
                },
                {
                    id: 'wd4_5',
                    type: 'tap-fill',
                    question: 'Complete o comando no WSL para abrir a pasta atual no Windows Explorer:',
                    textTemplate: 'explorer.exe {blank}',
                    options: ['.', 'wsl', 'win', 'c'],
                    answer: '.'
                }
            ]
        },
        {
            id: 'wd5',
            title: 'Construindo com Dockerfile',
            type: 'concept',
            exercises: [
                {
                    id: 'wd5_1',
                    type: 'info',
                    title: 'O que é um Dockerfile?',
                    content: 'Um Dockerfile é um arquivo de texto com instruções passo a passo para criar uma Imagem Docker. Ele define qual será o sistema operacional base, quais arquivos copiar e quais comandos rodar na inicialização.',
                    tip: '💡 Dica: A instrução FROM define a imagem base (como node ou python), e CMD define o comando que rodará quando o container iniciar.'
                },
                {
                    id: 'wd5_2',
                    type: 'multiple-choice',
                    question: 'Qual instrução do Dockerfile é usada para copiar arquivos do seu computador local para dentro da imagem?',
                    options: [
                        'COPY',
                        'ADD_FILE',
                        'MOVE',
                        'IMPORT'
                    ],
                    answer: 'COPY'
                },
                {
                    id: 'wd5_3',
                    type: 'tap-fill',
                    question: 'Complete a primeira linha do Dockerfile para usar a imagem oficial do Ubuntu:',
                    textTemplate: '{blank} ubuntu:latest',
                    options: ['FROM', 'BASE', 'RUN', 'START'],
                    answer: 'FROM'
                },
                {
                    id: 'wd5_4',
                    type: 'multiple-choice',
                    question: 'Qual instrução define a pasta padrão onde todos os comandos subsequentes serão executados na imagem?',
                    options: [
                        'WORKDIR',
                        'CD',
                        'FOLDER',
                        'PATH'
                    ],
                    answer: 'WORKDIR'
                },
                {
                    id: 'wd5_5',
                    type: 'tap-fill',
                    question: 'Complete a instrução para rodar a instalação do curl na construção da imagem:',
                    textTemplate: 'RUN apt-get {blank} -y curl',
                    options: ['install', 'add', 'get', 'run'],
                    answer: 'install'
                }
            ]
        },
        {
            id: 'wd6',
            title: 'Docker Compose',
            type: 'concept',
            exercises: [
                {
                    id: 'wd6_1',
                    type: 'info',
                    title: 'Orquestração Multi-container',
                    content: 'Quando você precisa rodar vários containers juntos (ex: um banco de dados, o Ollama e o OpenClaw), usar comandos "docker run" individuais fica inviável. O Docker Compose permite configurar e iniciar todos os serviços com um único arquivo "docker-compose.yml".',
                    tip: '💡 Dica: Com "docker-compose up -d", todos os serviços sobem em segundo plano de uma vez só!'
                },
                {
                    id: 'wd6_2',
                    type: 'multiple-choice',
                    question: 'Qual é o formato de arquivo usado pelo Docker Compose para definir os serviços?',
                    options: [
                        'YAML (.yml ou .yaml)',
                        'JSON (.json)',
                        'XML (.xml)',
                        'Plain Text (.txt)'
                    ],
                    answer: 'YAML (.yml ou .yaml)'
                },
                {
                    id: 'wd6_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para parar e remover todos os containers criados pelo Compose:',
                    textTemplate: 'docker-compose {blank}',
                    options: ['down', 'stop', 'remove', 'clean'],
                    answer: 'down'
                },
                {
                    id: 'wd6_4',
                    type: 'multiple-choice',
                    question: 'Qual parâmetro no comando docker-compose up roda os containers em background (modo detached)?',
                    options: [
                        '-d',
                        '-b',
                        '-bg',
                        '-detached'
                    ],
                    answer: '-d'
                },
                {
                    id: 'wd6_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para criar e subir os containers do compose forçando o rebuild das imagens:',
                    textTemplate: 'docker-compose {blank} --build',
                    options: ['up', 'start', 'build', 'run'],
                    answer: 'up'
                }
            ]
        }
    ],
    agentes_ia: [
        {
            id: 'ai1',
            title: 'Ollama & LLMs Locais',
            type: 'concept',
            exercises: [
                {
                    id: 'ai1_1',
                    type: 'info',
                    title: 'LLMs na sua Máquina',
                    content: 'O Ollama é uma ferramenta leve que permite baixar e executar Modelos de Linguagem (LLMs) como Llama 3, Mistral e Gemma diretamente no seu hardware local, de forma offline e privada.',
                    tip: '💡 Dica: Ele gerencia os pesos dos modelos e fornece uma API local simples para integrá-los a outras ferramentas.'
                },
                {
                    id: 'ai1_2',
                    type: 'multiple-choice',
                    question: 'Qual é o principal benefício de rodar LLMs locais?',
                    options: [
                        'Privacidade total dos dados e funcionamento offline',
                        'Não consumir memória RAM nem processador',
                        'Os modelos locais são sempre maiores que os da nuvem',
                        'Garantia de que os modelos nunca erram'
                    ],
                    answer: 'Privacidade total dos dados e funcionamento offline'
                },
                {
                    id: 'ai1_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para baixar e rodar o modelo Llama 3 localmente:',
                    textTemplate: 'ollama run {blank}',
                    options: ['llama3', 'start', 'model', 'run'],
                    answer: 'llama3'
                },
                {
                    id: 'ai1_4',
                    type: 'multiple-choice',
                    question: 'Qual comando do Ollama lista todos os modelos que você já baixou e possui localmente no PC?',
                    options: [
                        'ollama list',
                        'ollama show',
                        'ollama ps',
                        'ollama models'
                    ],
                    answer: 'ollama list'
                },
                {
                    id: 'ai1_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para fazer o download (sem rodar) do modelo gemma2:',
                    textTemplate: 'ollama {blank} gemma2',
                    options: ['pull', 'download', 'get', 'run'],
                    answer: 'pull'
                }
            ]
        },
        {
            id: 'ai2',
            title: 'Agente IA com OpenClaw',
            type: 'concept',
            exercises: [
                {
                    id: 'ai2_1',
                    type: 'info',
                    title: 'Conheça o OpenClaw',
                    content: 'OpenClaw é um agente de inteligência artificial autônomo e de código aberto que roda localmente. Ele atua como um assistente pessoal persistente conectando LLMs a arquivos locais e canais como WhatsApp, Slack e Telegram.',
                    tip: '💡 Dica: Ele usa plugins e habilidades para automatizar tarefas em segundo plano.'
                },
                {
                    id: 'ai2_2',
                    type: 'multiple-choice',
                    question: 'Onde o OpenClaw executa suas tarefas?',
                    options: [
                        'Localmente no seu próprio hardware',
                        'Apenas nos servidores da OpenAI',
                        'Diretamente no navegador sem rodar nada',
                        'Exclusivamente em aparelhos iOS'
                    ],
                    answer: 'Localmente no seu próprio hardware'
                },
                {
                    id: 'ai2_3',
                    type: 'tap-fill',
                    question: 'Complete o comando CLI para configurar o endpoint local da API do agente:',
                    textTemplate: 'openclaw --{blank} http://localhost:11434',
                    options: ['endpoint', 'run', 'agent', 'setup'],
                    answer: 'endpoint'
                },
                {
                    id: 'ai2_4',
                    type: 'multiple-choice',
                    question: 'O que o OpenClaw utiliza para estender as capacidades do agente de IA permitindo ler arquivos ou fazer contas?',
                    options: [
                        'Ferramentas e Habilidades (Tools & Skills)',
                        'Arquivos de texto simples',
                        'Apenas scripts em Bash do Windows',
                        'Extensões do Chrome'
                    ],
                    answer: 'Ferramentas e Habilidades (Tools & Skills)'
                },
                {
                    id: 'ai2_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para verificar a versão ativa do OpenClaw no terminal:',
                    textTemplate: 'openclaw --{blank}',
                    options: ['version', 'info', 'help', 'status'],
                    answer: 'version'
                }
            ]
        },
        {
            id: 'ai3',
            title: 'Configurando o OpenClaw',
            type: 'concept',
            exercises: [
                {
                    id: 'ai3_1',
                    type: 'info',
                    title: 'Configurando com config.yaml',
                    content: 'A configuração principal do OpenClaw é feita no arquivo "config.yaml" ou via variáveis do arquivo ".env". Nele, você define qual provedor de IA usar (como Ollama local ou OpenAI na nuvem), o nome do modelo e o endereço de host.',
                    tip: '💡 Dica: Ao usar o Ollama local, o host padrão é "http://localhost:11434".'
                },
                {
                    id: 'ai3_2',
                    type: 'multiple-choice',
                    question: 'Em qual arquivo yaml o OpenClaw centraliza suas configurações de IA, banco de dados e plugins?',
                    options: [
                        'config.yaml',
                        'settings.json',
                        'setup.ini',
                        'openclaw.xml'
                    ],
                    answer: 'config.yaml'
                },
                {
                    id: 'ai3_3',
                    type: 'tap-fill',
                    question: 'Complete o trecho de configuração do host padrão do Ollama no config.yaml:',
                    textTemplate: 'host: http://localhost:{blank}',
                    options: ['11434', '8080', '3000', '5432'],
                    answer: '11434'
                },
                {
                    id: 'ai3_4',
                    type: 'multiple-choice',
                    question: 'Qual variável de ambiente no arquivo .env armazena a credencial necessária para conectar o OpenClaw aos modelos da Anthropic (como o Claude)?',
                    options: [
                        'ANTHROPIC_API_KEY',
                        'CLAUDE_TOKEN',
                        'API_KEY_ANTHROPIC',
                        'SECRET_KEY_OPENAI'
                    ],
                    answer: 'ANTHROPIC_API_KEY'
                },
                {
                    id: 'ai3_5',
                    type: 'tap-fill',
                    question: 'Complete a chave de provedor de LLM para indicar uso do Ollama local no config.yaml:',
                    textTemplate: 'provider: {blank}',
                    options: ['ollama', 'openai', 'local', 'agent'],
                    answer: 'ollama'
                }
            ]
        },
        {
            id: 'ai4',
            title: 'Integração de Ferramentas',
            type: 'concept',
            exercises: [
                {
                    id: 'ai4_1',
                    type: 'info',
                    title: 'Conectando APIs e Buscas',
                    content: 'O verdadeiro poder do OpenClaw vem das suas ferramentas (tools). Você pode habilitar buscas na web e integrações com o Google Workspace (Gmail, Drive e Calendar) no arquivo de configuração do agente, permitindo que a IA gerencie sua agenda ou busque notícias em tempo real.',
                    tip: '💡 Dica: Habilitar ferramentas no config.yaml permite que a LLM decida de forma autônoma quando usá-las para responder o usuário.'
                },
                {
                    id: 'ai4_2',
                    type: 'multiple-choice',
                    question: 'Qual a principal vantagem de integrar ferramentas como o Google Calendar ao OpenClaw?',
                    options: [
                        'Permitir que o agente de IA crie e visualize compromissos na sua agenda',
                        'Aumentar o poder de processamento gráfico (GPU) do PC',
                        'Deixar o modelo de linguagem menor e mais rápido',
                        'Mudar a voz do agente para um tom robótico'
                    ],
                    answer: 'Permitir que o agente de IA crie e visualize compromissos na sua agenda'
                },
                {
                    id: 'ai4_3',
                    type: 'tap-fill',
                    question: 'Complete o parâmetro YAML para ativar a ferramenta de pesquisa web no config.yaml:',
                    textTemplate: 'web_search: {blank}',
                    options: ['true', 'false', 'enabled', 'active'],
                    answer: 'true'
                },
                {
                    id: 'ai4_4',
                    type: 'multiple-choice',
                    question: 'Qual o formato padrão do arquivo de chaves baixado do console do Google Cloud para autenticar as ferramentas do Workspace no OpenClaw?',
                    options: [
                        'OAuth 2.0 (credentials.json)',
                        'Plain text (key.txt)',
                        'XML (auth.xml)',
                        'String única no terminal'
                    ],
                    answer: 'OAuth 2.0 (credentials.json)'
                },
                {
                    id: 'ai4_5',
                    type: 'tap-fill',
                    question: 'Complete a linha indicando o caminho das chaves do Google Calendar nas configurações do agente:',
                    textTemplate: 'google_calendar: {blank}',
                    options: ['credentials.json', 'token', 'key', 'true'],
                    answer: 'credentials.json'
                }
            ]
        },
        {
            id: 'ai5',
            title: 'Ollama: Modelfile',
            type: 'concept',
            exercises: [
                {
                    id: 'ai5_1',
                    type: 'info',
                    title: 'Customizando Prompts com Modelfile',
                    content: 'No Ollama, você pode criar modelos customizados usando um arquivo chamado Modelfile. Nele, você especifica o modelo base (FROM) e parametriza regras de comportamento, como o prompt de sistema (SYSTEM) que dita como a IA deve agir.',
                    tip: '💡 Dica: Você pode definir a temperatura do modelo para deixá-lo mais criativo ou mais preciso.'
                },
                {
                    id: 'ai5_2',
                    type: 'multiple-choice',
                    question: 'Qual comando do Ollama lê o arquivo Modelfile e cria um modelo personalizado no seu PC?',
                    options: [
                        'ollama create',
                        'ollama build',
                        'ollama make',
                        'ollama run'
                    ],
                    answer: 'ollama create'
                },
                {
                    id: 'ai5_3',
                    type: 'tap-fill',
                    question: 'Complete a linha do Modelfile para carregar o modelo llama3 como base:',
                    textTemplate: '{blank} llama3',
                    options: ['FROM', 'MODEL', 'BASE', 'IMPORT'],
                    answer: 'FROM'
                },
                {
                    id: 'ai5_4',
                    type: 'multiple-choice',
                    question: 'Qual parâmetro define a criatividade (aleatoriedade) da resposta no Modelfile?',
                    options: [
                        'PARAMETER temperature',
                        'PARAMETER creativity',
                        'PARAMETER random',
                        'PARAMETER mode'
                    ],
                    answer: 'PARAMETER temperature'
                },
                {
                    id: 'ai5_5',
                    type: 'tap-fill',
                    question: 'Complete a linha de parâmetro para deixar o modelo mais focado e menos criativo:',
                    textTemplate: 'PARAMETER temperature {blank}',
                    options: ['0.2', '2.0', 'high', 'creative'],
                    answer: '0.2'
                }
            ]
        },
        {
            id: 'ai6',
            title: 'Integração RAG Local',
            type: 'concept',
            exercises: [
                {
                    id: 'ai6_1',
                    type: 'info',
                    title: 'Retrieval-Augmented Generation',
                    content: 'RAG é uma técnica que estende o conhecimento de uma LLM usando arquivos locais (como PDFs ou códigos). O texto é convertido em números chamados "Embeddings" por um modelo especial, permitindo que a IA busque nos seus arquivos a resposta exata.',
                    tip: '💡 Dica: Rodar embeddings locais permite fazer perguntas para seus documentos sem enviar nada para a internet.'
                },
                {
                    id: 'ai6_2',
                    type: 'multiple-choice',
                    question: 'O que o modelo de embeddings faz no fluxo de RAG?',
                    options: [
                        'Transforma trechos de texto em vetores numéricos para busca',
                        'Corrige erros de ortografia do usuário',
                        'Traduz o texto de inglês para português',
                        'Desenha gráficos baseados nos dados fornecidos'
                    ],
                    answer: 'Transforma trechos de texto em vetores numéricos para busca'
                },
                {
                    id: 'ai6_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para baixar o popular modelo de embeddings do Ollama:',
                    textTemplate: 'ollama pull nomic-embed-{blank}',
                    options: ['text', 'model', 'vector', 'rag'],
                    answer: 'text'
                },
                {
                    id: 'ai6_4',
                    type: 'multiple-choice',
                    question: 'Onde são armazenados os vetores gerados pelo modelo de embeddings no RAG local?',
                    options: [
                        'Banco de Dados Vetorial (Vector DB)',
                        'Banco relacional SQL comum',
                        'Arquivos TXT planos',
                        'Memória RAM volátil temporária'
                    ],
                    answer: 'Banco de Dados Vetorial (Vector DB)'
                },
                {
                    id: 'ai6_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para baixar o modelo de embeddings nomic:',
                    textTemplate: 'ollama pull {blank}',
                    options: ['nomic-embed-text', 'embed', 'nomic', 'llama3'],
                    answer: 'nomic-embed-text'
                }
            ]
        },
        {
            id: 'ai7',
            title: 'OpenClaw: Habilidades (Skills)',
            type: 'concept',
            exercises: [
                {
                    id: 'ai7_1',
                    type: 'info',
                    title: 'Estendendo a IA com Skills',
                    content: 'As Habilidades (Skills) são scripts em Python que estendem os poderes do OpenClaw. Com elas, o agente de IA pode interagir com o seu computador local, buscar dados na web, ler e-mails ou rodar tarefas em segundo plano.',
                    tip: '💡 Dica: Uma skill é exposta ao agente simplesmente registrando uma função Python com uma descrição detalhada de seu uso.'
                },
                {
                    id: 'ai7_2',
                    type: 'multiple-choice',
                    question: 'Qual linguagem de programação é nativamente usada para escrever novas habilidades (skills) no OpenClaw?',
                    options: [
                        'Python',
                        'Java',
                        'JavaScript',
                        'C++'
                    ],
                    answer: 'Python'
                },
                {
                    id: 'ai7_3',
                    type: 'tap-fill',
                    question: 'Complete a chamada para registrar uma nova habilidade no carregador do OpenClaw:',
                    textTemplate: 'agent.register_{blank}(my_custom_function)',
                    options: ['skill', 'tool', 'plugin', 'action'],
                    answer: 'skill'
                },
                {
                    id: 'ai7_4',
                    type: 'multiple-choice',
                    question: 'Qual decorador (decorator) do OpenClaw é inserido em cima da função Python para indicar que ela é uma habilidade disponível para o agente?',
                    options: [
                        '@skill',
                        '@register',
                        '@tool',
                        '@plugin'
                    ],
                    answer: '@skill'
                },
                {
                    id: 'ai7_5',
                    type: 'tap-fill',
                    question: 'Complete a linha para decorar a função Python como habilidade no OpenClaw:',
                    textTemplate: '{blank}(name="search", description="Buscar")',
                    options: ['@skill', '@tool', '@plugin', 'def'],
                    answer: '@skill'
                }
            ]
        },
        {
            id: 'ai8',
            title: 'OpenClaw: Canais de Chat',
            type: 'concept',
            exercises: [
                {
                    id: 'ai8_1',
                    type: 'info',
                    title: 'Conectando Mensageiros',
                    content: 'Para tornar o OpenClaw um assistente pessoal acessível de qualquer lugar, você pode configurá-lo como um gateway de chat. Ele suporta conexões com o WhatsApp (escaneando um QR Code no terminal) ou Telegram (inserindo o token do Bot).',
                    tip: '💡 Dica: Uma vez conectado, você pode conversar com seu agente local por mensagem de voz ou texto diretamente do celular!'
                },
                {
                    id: 'ai8_2',
                    type: 'multiple-choice',
                    question: 'Como o OpenClaw realiza a autenticação inicial com a conta do WhatsApp?',
                    options: [
                        'Escaneando um QR Code gerado no terminal do WSL/Windows',
                        'Enviando um SMS com código numérico',
                        'Acessando login com e-mail e senha da Meta',
                        'Através de um cabo USB conectado ao computador'
                    ],
                    answer: 'Escaneando um QR Code gerado no terminal do WSL/Windows'
                },
                {
                    id: 'ai8_3',
                    type: 'tap-fill',
                    question: 'Complete o comando de inicialização do canal de gateway do Telegram no OpenClaw:',
                    textTemplate: 'openclaw run --channel {blank}',
                    options: ['telegram', 'whatsapp', 'slack', 'discord'],
                    answer: 'telegram'
                },
                {
                    id: 'ai8_4',
                    type: 'multiple-choice',
                    question: 'Qual biblioteca de navegador invisível (headless) é comumente usada nos bastidores para conectar e ler mensagens do WhatsApp Web?',
                    options: [
                        'Puppeteer ou Playwright',
                        'Axios ou Fetch',
                        'Pandas ou Numpy',
                        'Express ou Fastify'
                    ],
                    answer: 'Puppeteer ou Playwright'
                },
                {
                    id: 'ai8_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para executar o OpenClaw no canal do WhatsApp:',
                    textTemplate: 'openclaw run --channel {blank}',
                    options: ['whatsapp', 'telegram', 'slack', 'web'],
                    answer: 'whatsapp'
                }
            ]
        },
        {
            id: 'ai9',
            title: 'OpenClaw: Arquivos Principais de Configuração',
            type: 'concept',
            exercises: [
                {
                    id: 'ai9_1',
                    type: 'info',
                    title: 'Entendendo a Configuração',
                    content: 'O OpenClaw utiliza principalmente dois arquivos para se configurar: o "config.yaml" e o arquivo ".env". O "config.yaml" centraliza a estrutura do agente: os provedores de LLM (como Ollama, OpenAI), as habilidades habilitadas, os agentes e subagentes definidos, e as portas/canais ativos. O ".env" guarda chaves secretas (como API_KEYs do Google ou Anthropic) de forma segura para não expô-las.',
                    tip: '💡 Dica: Nunca coloque suas senhas ou chaves de API secretas diretamente no config.yaml; use variáveis do .env para isso!'
                },
                {
                    id: 'ai9_2',
                    type: 'multiple-choice',
                    question: 'Qual a principal função do arquivo config.yaml no OpenClaw?',
                    options: [
                        'Centralizar a estrutura do agente, definindo provedores de LLM, subagentes e ferramentas',
                        'Guardar apenas as chaves secretas de API para segurança',
                        'Executar o código em Python das habilidades customizadas',
                        'Instalar as dependências de pacotes do sistema'
                    ],
                    answer: 'Centralizar a estrutura do agente, definindo provedores de LLM, subagentes e ferramentas'
                },
                {
                    id: 'ai9_3',
                    type: 'tap-fill',
                    question: 'Qual arquivo é ideal para armazenar as credenciais e chaves secretas (ex: Anthropic API Key) no OpenClaw?',
                    textTemplate: 'O arquivo {blank} guarda credenciais com segurança.',
                    options: ['.env', 'config.yaml', 'main.py', 'settings.json'],
                    answer: '.env'
                },
                {
                    id: 'ai9_4',
                    type: 'multiple-choice',
                    question: 'Como o OpenClaw lê as credenciais secretas do arquivo .env no config.yaml?',
                    options: [
                        'Ele usa a sintaxe de interpolação de variáveis de ambiente do tipo ${VAR_NAME}',
                        'Ele copia e cola automaticamente o arquivo .env dentro de si',
                        'O config.yaml não consegue ler variáveis do arquivo .env',
                        'Ele envia os dados para um banco de dados externo decifrar'
                    ],
                    answer: 'Ele usa a sintaxe de interpolação de variáveis de ambiente do tipo ${VAR_NAME}'
                },
                {
                    id: 'ai9_5',
                    type: 'tap-fill',
                    question: 'Complete a chave que define a lista de habilidades ativas dentro do arquivo config.yaml:',
                    textTemplate: 'Defina a lista sob a chave {blank}: no config.yaml.',
                    options: ['skills', 'provider', 'host', 'agents'],
                    answer: 'skills'
                }
            ]
        },
        {
            id: 'ai10',
            title: 'OpenClaw: Subindo e Parando o Agente',
            type: 'concept',
            exercises: [
                {
                    id: 'ai10_1',
                    type: 'info',
                    title: 'Como Inicializar e Desligar',
                    content: 'Para rodar o OpenClaw no seu computador, você pode subir o serviço de duas formas principais: executando diretamente o script principal Python com "python main.py", ou usando Docker Compose com o comando "docker-compose up -d" (caso use containers). Para parar o agente, basta pressionar "Ctrl + C" no terminal onde o script roda, ou usar o comando "docker-compose down" para desligar os containers do Docker.',
                    tip: '💡 Dica: O parâmetro "-d" no Docker Compose serve para rodar o serviço em segundo plano (detached mode).'
                },
                {
                    id: 'ai10_2',
                    type: 'multiple-choice',
                    question: 'Qual atalho de terminal padrão você usa para parar a execução local de um script do OpenClaw em andamento?',
                    options: [
                        'Ctrl + C',
                        'Ctrl + V',
                        'Ctrl + Z',
                        'Ctrl + S'
                    ],
                    answer: 'Ctrl + C'
                },
                {
                    id: 'ai10_3',
                    type: 'tap-fill',
                    question: 'Complete o comando do Docker Compose usado para parar e remover os containers do OpenClaw:',
                    textTemplate: 'docker-compose {blank}',
                    options: ['down', 'up', 'stop', 'remove'],
                    answer: 'down'
                },
                {
                    id: 'ai10_4',
                    type: 'multiple-choice',
                    question: 'Qual comando executamos no terminal para inicializar os containers do OpenClaw em segundo plano pelo Docker Compose?',
                    options: [
                        'docker-compose up -d',
                        'docker-compose down',
                        'docker-compose start',
                        'docker-compose run'
                    ],
                    answer: 'docker-compose up -d'
                },
                {
                    id: 'ai10_5',
                    type: 'tap-fill',
                    question: 'Complete o comando básico em Python para iniciar o OpenClaw a partir do seu arquivo principal de entrada:',
                    textTemplate: 'python {blank}',
                    options: ['main.py', 'config.yaml', 'start.sh', 'setup.py'],
                    answer: 'main.py'
                }
            ]
        },
        {
            id: 'ai11',
            title: 'OpenClaw: Conversando com o Agente',
            type: 'concept',
            exercises: [
                {
                    id: 'ai11_1',
                    type: 'info',
                    title: 'Formas de Interagir com o Agente',
                    content: 'Depois de subir o OpenClaw com sucesso, você pode conversar com ele por várias interfaces: \n1) Pelo Terminal Interativo (CLI) rodando o comando com o modo chat ativo. \n2) Pela Interface Web local (geralmente acessível em http://localhost:8000 no navegador). \n3) Pelos Canais de Mensagens integrados (WhatsApp ou Telegram) após conectar os tokens/QR Codes correspondentes.',
                    tip: '💡 Dica: A interface web permite visualizar o histórico de chats e gerenciar os logs de pensamento do agente.'
                },
                {
                    id: 'ai11_2',
                    type: 'multiple-choice',
                    question: 'Qual porta padrão local a interface web do OpenClaw costuma disponibilizar para você conversar com o agente no navegador?',
                    options: [
                        'Porta 8000 (http://localhost:8000)',
                        'Porta 11434 (http://localhost:11434)',
                        'Porta 5432 (http://localhost:5432)',
                        'Porta 3306 (http://localhost:3306)'
                    ],
                    answer: 'Porta 8000 (http://localhost:8000)'
                },
                {
                    id: 'ai11_3',
                    type: 'tap-fill',
                    question: 'Se configurarmos o canal do WhatsApp, qual ação é necessária no terminal do servidor para vincular o celular ao agente?',
                    textTemplate: 'Escaneie o {blank} gerado na tela.',
                    options: ['QR-Code', 'Token', 'Link', 'Password'],
                    answer: 'QR-Code'
                },
                {
                    id: 'ai11_4',
                    type: 'multiple-choice',
                    question: 'Onde o usuário pode acompanhar o log das ferramentas que o agente está decidindo usar para responder uma pergunta?',
                    options: [
                        'No console do terminal ou no painel de logs da interface web',
                        'Apenas em uma notificação SMS do celular',
                        'Nas configurações internas do seu roteador',
                        'No banco de dados do WhatsApp meta'
                    ],
                    answer: 'No console do terminal ou no painel de logs da interface web'
                }
            ]
        },
        {
            id: 'ai12',
            title: 'OpenClaw: Criando Subagentes',
            type: 'concept',
            exercises: [
                {
                    id: 'ai12_1',
                    type: 'info',
                    title: 'Multi-Agentes no OpenClaw',
                    content: 'Um subagente é um agente secundário especializado em uma tarefa (ex: um subagente focado em buscar notícias, outro em gerar gráficos, e outro em traduzir textos). O agente principal (Orquestrador) gerencia a conversa e pode criar e chamar dinamicamente esses subagentes como se fossem ferramentas (tools), delegando tarefas e coletando a resposta final.',
                    tip: '💡 Dica: Definir subagentes reduz o tamanho dos prompts e aumenta muito a precisão de tarefas difíceis!'
                },
                {
                    id: 'ai12_2',
                    type: 'multiple-choice',
                    question: 'O que caracteriza um subagente em uma arquitetura de múltiplos agentes no OpenClaw?',
                    options: [
                        'Um agente focado e instruído a resolver uma tarefa específica, delegado pelo agente principal',
                        'Um antivírus que roda dentro da VM do WSL',
                        'Uma planilha Excel integrada com chaves do Google',
                        'Um modelo de IA com menos de 1 milhão de parâmetros'
                    ],
                    answer: 'Um agente focado e instruído a resolver uma tarefa específica, delegado pelo agente principal'
                },
                {
                    id: 'ai12_3',
                    type: 'tap-fill',
                    question: 'Sob qual chave principal do config.yaml configuramos os perfis e instruções dos nossos agentes do sistema?',
                    textTemplate: 'Configure sob a chave {blank}: no YAML.',
                    options: ['agents', 'skills', 'llm', 'channels'],
                    answer: 'agents'
                },
                {
                    id: 'ai12_4',
                    type: 'multiple-choice',
                    question: 'O que define a instrução inicial e a personalidade que guia a atuação de um subagente?',
                    options: [
                        'O prompt de sistema (system_prompt ou instructions)',
                        'O tamanho de contexto máximo da GPU',
                        'A versão do Python instalada no WSL',
                        'A velocidade da banda de download local'
                    ],
                    answer: 'O prompt de sistema (system_prompt ou instructions)'
                },
                {
                    id: 'ai12_5',
                    type: 'tap-fill',
                    question: 'Para o agente principal poder invocar um subagente no fluxo do chat, ele mapeia esse subagente como uma:',
                    textTemplate: 'O subagente é visto como uma {blank} pelo orquestrador.',
                    options: ['tool', 'database', 'env', 'channel'],
                    answer: 'tool'
                }
            ]
        },
        {
            id: 'ai13',
            title: 'Criando e Configurando Skills',
            type: 'concept',
            exercises: [
                {
                    id: 'ai13_1',
                    type: 'info',
                    title: 'Como incluir uma nova Skill',
                    content: 'Para incluir uma skill customizada no OpenClaw, você deve:\n1. Escrever uma função em Python que realiza a ação desejada.\n2. Decorar essa função usando @skill com um nome e descrição claros.\n3. Salvar o arquivo (ex: clima.py) dentro da pasta "skills/" do seu projeto.\n4. Declarar a skill no arquivo config.yaml do OpenClaw.',
                    tip: '💡 Dica: A descrição que você escreve no decorador @skill é o que a LLM usa para saber QUANDO e COMO chamar sua função. Seja bem descritivo!'
                },
                {
                    id: 'ai13_2',
                    type: 'multiple-choice',
                    question: 'Em qual diretório do OpenClaw devemos colocar os arquivos .py das novas habilidades por padrão?',
                    options: [
                        'skills/',
                        'config/',
                        'models/',
                        'agents/'
                    ],
                    answer: 'skills/'
                },
                {
                    id: 'ai13_3',
                    type: 'info',
                    title: 'Escrevendo o Código Python',
                    content: 'Um exemplo completo de uma skill para consultar o clima:\n\nfrom openclaw.skills import skill\n\n@skill(name="ver_clima", description="Obtém a temperatura atual de uma cidade")\ndef ver_clima(cidade: str) -> str:\n    return f"O clima em {cidade} é de 22°C."\n\nNote que usamos Type Hints (como cidade: str) para que a IA entenda os parâmetros necessários.',
                    tip: '💡 Dica: Seus argumentos e retornos devem sempre usar tipos claros em Python.'
                },
                {
                    id: 'ai13_4',
                    type: 'tap-fill',
                    question: 'Complete o decorador em Python para expor a função obter_xp como uma skill:',
                    textTemplate: '{blank}(name="obter_xp", description="Retorna os pontos do usuário")',
                    options: ['@skill', '@tool', '@plugin', 'def'],
                    answer: '@skill'
                },
                {
                    id: 'ai13_5',
                    type: 'multiple-choice',
                    question: 'Como fazemos para que o OpenClaw ative a skill no arquivo de configuração config.yaml?',
                    options: [
                        'Adicionamos o nome da skill na lista sob a chave "skills:"',
                        'A skill é ativada automaticamente sem configuração extra',
                        'Precisamos compilar o OpenClaw novamente',
                        'Colocamos o caminho da skill no arquivo .env'
                    ],
                    answer: 'Adicionamos o nome da skill na lista sob a chave "skills:"'
                },
                {
                    id: 'ai13_6',
                    type: 'tap-fill',
                    question: 'Complete a configuração para ativar a skill obter_xp no config.yaml:',
                    textTemplate: 'skills:\n  - {blank}',
                    options: ['obter_xp', 'true', 'active', 'ollama'],
                    answer: 'obter_xp'
                }
            ]
        }
    ],
    linux: [
        {
            id: 'l1',
            title: 'O Armário e o Terminal',
            type: 'intro',
            exercises: [
                {
                    id: 'l1_1',
                    type: 'info',
                    title: 'O Armário de Arquivos',
                    content: 'Pense no disco rígido do computador como um grande armário organizador. Cada diretório (pasta) é uma gaveta, que pode conter outras subgavetas dentro dela. Os arquivos são as folhas de papel ou objetos guardados nessas gavetas. O terminal é como um assistente robô que não tem olhos: em vez de abrir as gavetas manualmente, você escreve comandos para ele fazer isso.',
                    tip: '💡 Dica: No Linux, a base de todo o armário é representada por uma barra "/" (chamada de diretório raiz).'
                },
                {
                    id: 'l1_2',
                    type: 'multiple-choice',
                    question: 'Na nossa analogia do armário, o que um diretório (pasta) representa?',
                    options: [
                        'Uma gaveta para organizar arquivos ou outras subgavetas',
                        'Uma folha de papel com anotações de texto',
                        'O teclado usado para enviar mensagens',
                        'O assistente robô que executa as ordens'
                    ],
                    answer: 'Uma gaveta para organizar arquivos ou outras subgavetas'
                },
                {
                    id: 'l1_3',
                    type: 'info',
                    title: 'Onde estamos? (pwd)',
                    content: 'Como o robô assistente não tem olhos, às vezes precisamos perguntar: "Em qual gaveta estamos agora?". Para isso, usamos o comando pwd (Print Working Directory), que imprime o caminho da pasta em que você se encontra.',
                    tip: '💡 Dica: "pwd" significa Print Working Directory (Mostrar Diretório de Trabalho).'
                },
                {
                    id: 'l1_4',
                    type: 'tap-fill',
                    question: 'Complete o comando para perguntar ao terminal o caminho completo da pasta/gaveta atual:',
                    textTemplate: '{blank}',
                    options: ['pwd', 'ls', 'cd', 'dir'],
                    answer: 'pwd'
                },
                {
                    id: 'l1_5',
                    type: 'multiple-choice',
                    question: 'O comando "ls" (List) serve para abrir a gaveta atual e ver o que está guardado nela. O que ele mostra ao ser executado?',
                    options: [
                        'A lista de arquivos e subpastas dentro do diretório atual',
                        'O caminho completo até a raiz do sistema',
                        'Um menu interativo de configurações',
                        'O manual de ajuda do sistema operacional'
                    ],
                    answer: 'A lista de arquivos e subpastas dentro do diretório atual'
                },
                {
                    id: 'l1_6',
                    type: 'tap-fill',
                    question: 'Complete o comando para listar o conteúdo da pasta atual:',
                    textTemplate: '{blank}',
                    options: ['ls', 'pwd', 'cd', 'mkdir'],
                    answer: 'ls'
                }
            ]
        },
        {
            id: 'l2',
            title: 'Navegando entre Gavetas',
            type: 'concept',
            exercises: [
                {
                    id: 'l2_1',
                    type: 'info',
                    title: 'Trocando de Gaveta (cd)',
                    content: 'Para mover o robô assistente de uma gaveta para outra, usamos o comando cd (Change Directory), que significa "trocar de diretório". É como dizer ao robô: "Saia de onde está e vá para a gaveta chamada Documentos". Para isso, executamos "cd Documentos".',
                    tip: '💡 Dica: Lembre-se que as letras maiúsculas importam no Linux! A gaveta "Projetos" é diferente da gaveta "projetos".'
                },
                {
                    id: 'l2_2',
                    type: 'tap-fill',
                    question: 'Complete o comando para navegar/entrar na pasta chamada "Projetos":',
                    textTemplate: 'cd {blank}',
                    options: ['Projetos', 'pwd', 'ls', '..'],
                    answer: 'Projetos'
                },
                {
                    id: 'l2_3',
                    type: 'info',
                    title: 'Subindo uma gaveta (cd ..)',
                    content: 'E se entrarmos em uma subgaveta profunda e quisermos voltar para a gaveta anterior (a pasta pai)? No Linux, usamos o atalho especial ".." (dois pontos) para representar a pasta que contém a atual. Basta comandar "cd ..".',
                    tip: '💡 Dica: O comando "cd .." sempre sobe um degrau na hierarquia das pastas.'
                },
                {
                    id: 'l2_4',
                    type: 'tap-fill',
                    question: 'Complete o comando para subir um nível e voltar para a pasta pai:',
                    textTemplate: 'cd {blank}',
                    options: ['..', '~', 'pwd', 'ls'],
                    answer: '..'
                },
                {
                    id: 'l2_5',
                    type: 'multiple-choice',
                    question: 'Toda conta de usuário tem uma gaveta principal chamada diretório Home. Qual atalho usamos com o comando cd para ir direto para ela?',
                    options: [
                        'cd ~ (til)',
                        'cd .. (dois pontos)',
                        'cd / (barra)',
                        'cd home'
                    ],
                    answer: 'cd ~ (til)'
                }
            ]
        },
        {
            id: 'l3',
            title: 'Criando e Removendo Itens',
            type: 'concept',
            exercises: [
                {
                    id: 'l3_1',
                    type: 'info',
                    title: 'Organizando as Gavetas',
                    content: 'Para manter nosso armário organizado, podemos criar gavetas novas com o comando mkdir (Make Directory) e colocar papéis em branco (arquivos vazios) nelas usando o comando touch. Para descartar algum arquivo permanente, usamos o comando rm (Remove).',
                    tip: '💡 Dica: Tenha cuidado com o comando "rm" porque arquivos deletados no terminal não vão para a lixeira normal, eles desaparecem na hora!'
                },
                {
                    id: 'l3_2',
                    type: 'tap-fill',
                    question: 'Complete o comando para criar uma nova pasta/diretório chamado "fotos":',
                    textTemplate: 'mkdir {blank}',
                    options: ['fotos', 'touch', 'rm', 'cd'],
                    answer: 'fotos'
                },
                {
                    id: 'l3_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para criar um arquivo em branco chamado "diario.txt":',
                    textTemplate: 'touch {blank}',
                    options: ['diario.txt', 'mkdir', 'rm', 'txt'],
                    answer: 'diario.txt'
                },
                {
                    id: 'l3_4',
                    type: 'multiple-choice',
                    question: 'Qual comando diz ao assistente para remover permanentemente um arquivo (jogá-lo fora)?',
                    options: [
                        'rm',
                        'mkdir',
                        'touch',
                        'cd'
                    ],
                    answer: 'rm'
                },
                {
                    id: 'l3_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para excluir o arquivo "diario.txt" da gaveta atual:',
                    textTemplate: 'rm {blank}',
                    options: ['diario.txt', 'touch', 'mkdir', 'rmdir'],
                    answer: 'diario.txt'
                }
            ]
        },
        {
            id: 'l4',
            title: 'Visualizando Arquivos com o cat',
            type: 'concept',
            exercises: [
                {
                    id: 'l4_1',
                    type: 'info',
                    title: 'O Comando cat',
                    content: 'O comando "cat" (abreviação de concatenate) é um dos comandos mais usados no Linux. Ele serve para exibir o conteúdo completo de um ou mais arquivos de texto diretamente na tela do terminal, de forma rápida, sem precisar abrir um editor complexo.',
                    tip: '💡 Dica: O cat é ideal para ver arquivos pequenos de configuração de forma rápida!'
                },
                {
                    id: 'l4_2',
                    type: 'multiple-choice',
                    question: 'Qual é o principal objetivo do comando cat no terminal?',
                    options: [
                        'Exibir o conteúdo de um arquivo de texto no terminal',
                        'Editar o texto de forma interativa como o Word',
                        'Deletar arquivos temporários do sistema',
                        'Mudar a pasta de trabalho ativa'
                    ],
                    answer: 'Exibir o conteúdo de um arquivo de texto no terminal'
                },
                {
                    id: 'l4_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para exibir o conteúdo do arquivo "config.json" na tela do terminal:',
                    textTemplate: 'cat {blank}',
                    options: ['config.json', 'show', 'print', 'read'],
                    answer: 'config.json'
                },
                {
                    id: 'l4_4',
                    type: 'multiple-choice',
                    question: 'O que o comando cat faz quando passamos o nome de dois arquivos em sequência (ex: cat a.txt b.txt)?',
                    options: [
                        'Exibe o conteúdo do arquivo a.txt seguido do conteúdo do b.txt de forma contínua',
                        'Compara as linhas dos dois arquivos mostrando as diferenças',
                        'Cria um novo arquivo vazio chamado a.txt e b.txt',
                        'Deleta ambos os arquivos para liberar espaço'
                    ],
                    answer: 'Exibe o conteúdo do arquivo a.txt seguido do conteúdo do b.txt de forma contínua'
                }
            ]
        },
        {
            id: 'l5',
            title: 'Copiando e Colando Texto em Arquivos',
            type: 'concept',
            exercises: [
                {
                    id: 'l5_1',
                    type: 'info',
                    title: 'Redirecionamento de Saída (> e >>)',
                    content: 'No terminal Linux, podemos escrever texto diretamente para um arquivo usando redirecionamento com cat. \n- Se rodarmos "cat > arquivo.txt", o terminal ficará aguardando digitação. Você pode digitar ou colar qualquer conteúdo e depois apertar "Ctrl + D" para salvar e fechar. Atenção: o operador ">" sobrescreve o arquivo todo! \n- Se quiser apenas anexar texto no final do arquivo sem apagar o existente, use "cat >> arquivo.txt".',
                    tip: '💡 Dica: Use ">>" para adicionar linhas de log ou notas novas sem apagar o histórico anterior.'
                },
                {
                    id: 'l5_2',
                    type: 'multiple-choice',
                    question: 'Qual operador do terminal é usado para criar ou sobrescrever um arquivo com a saída digitada?',
                    options: [
                        '> (maior que)',
                        '>> (dois maior que)',
                        '< (menor que)',
                        '| (pipe)'
                    ],
                    answer: '> (maior que)'
                },
                {
                    id: 'l5_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para criar ou sobrescrever o arquivo "anotações.txt" com o texto que for inserido no console:',
                    textTemplate: 'cat {blank} anotações.txt',
                    options: ['>', '>>', 'touch', 'rm'],
                    answer: '>'
                },
                {
                    id: 'l5_4',
                    type: 'multiple-choice',
                    question: 'Qual atalho de teclado é usado após executar cat > arquivo.txt para sinalizar o fim da digitação, salvar e sair?',
                    options: [
                        'Ctrl + D',
                        'Ctrl + C',
                        'Ctrl + S',
                        'Ctrl + Z'
                    ],
                    answer: 'Ctrl + D'
                },
                {
                    id: 'l5_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para adicionar novas linhas no final de "logs.txt" sem apagar as linhas já existentes:',
                    textTemplate: 'cat {blank} logs.txt',
                    options: ['>>', '>', 'add', 'insert'],
                    answer: '>>'
                }
            ]
        },
        {
            id: 'l6',
            title: 'Copiar, Colar e Selecionar Tudo no Terminal',
            type: 'concept',
            exercises: [
                {
                    id: 'l6_1',
                    type: 'info',
                    title: 'Atalhos no Terminal Linux',
                    content: 'No terminal, os famosos atalhos Ctrl+C e Ctrl+V não copiam ou colam por padrão (já que Ctrl+C interrompe processos). Por isso, no terminal Linux e WSL usamos: \n- Ctrl + Shift + C para Copiar texto selecionado. \n- Ctrl + Shift + V para Colar texto da área de transferência. \n- Para selecionar todo o texto de um arquivo aberto em editores de terminal como o Nano, usamos o atalho "Alt + A" (ou Ctrl + ^ no layout US). No Windows Terminal / WSL, você também pode selecionar texto arrastando o mouse e colar clicando com o botão direito.',
                    tip: '💡 Dica: Lembre-se: Ctrl + C no terminal mata o comando que está rodando, por isso o atalho de cópia precisa do Shift!'
                },
                {
                    id: 'l6_2',
                    type: 'multiple-choice',
                    question: 'Por que o atalho Ctrl + C comum não copia textos por padrão no terminal?',
                    options: [
                        'Porque ele serve para cancelar/interromper o processo que está rodando no terminal',
                        'Porque o terminal não permite transferência de dados entre aplicativos',
                        'Porque o Linux foi criado antes dos teclados terem essa combinação',
                        'Porque essa combinação é de uso exclusivo do navegador web'
                    ],
                    answer: 'Porque ele serve para cancelar/interromper o processo que está rodando no terminal'
                },
                {
                    id: 'l6_3',
                    type: 'tap-fill',
                    question: 'Complete o atalho padrão para colar texto dentro de uma janela de terminal Linux/WSL:',
                    textTemplate: 'Ctrl + Shift + {blank}',
                    options: ['V', 'C', 'X', 'A'],
                    answer: 'V'
                },
                {
                    id: 'l6_4',
                    type: 'multiple-choice',
                    question: 'Em um editor de terminal clássico como o Nano, qual é o atalho usado para marcar/selecionar todo o texto do arquivo?',
                    options: [
                        'Alt + A (ou Ctrl + ^)',
                        'Ctrl + A',
                        'Ctrl + C',
                        'Alt + V'
                    ],
                    answer: 'Alt + A (ou Ctrl + ^)'
                },
                {
                    id: 'l6_5',
                    type: 'tap-fill',
                    question: 'Complete o atalho padrão do terminal para copiar o texto selecionado:',
                    textTemplate: 'Ctrl + Shift + {blank}',
                    options: ['C', 'V', 'Z', 'P'],
                    answer: 'C'
                }
            ]
        },
        {
            id: 'l7',
            title: 'Editores de Texto: Nano e Vim',
            type: 'concept',
            exercises: [
                {
                    id: 'l7_1',
                    type: 'info',
                    title: 'Editando Arquivos no Terminal',
                    content: 'Para editar arquivos de texto direto no terminal (sem interface gráfica), usamos editores de linha de comando. Os dois principais são:\n1) Nano: Muito simples e amigável. Mostra os atalhos na tela. Para salvar usa-se "Ctrl + O" e para sair "Ctrl + X".\n2) Vim: Extremamente poderoso, mas possui curva de aprendizado. Possui o Modo de Inserção (aperte "i" para digitar) e o Modo de Comando (aperte "Esc"). Para salvar e sair, digita-se ":wq" e enter. Para sair sem salvar, digita-se ":q!".',
                    tip: '💡 Dica: Se ficar preso no Vim, aperte Esc várias vezes e digite :q! para sair com segurança.'
                },
                {
                    id: 'l7_2',
                    type: 'multiple-choice',
                    question: 'No editor Nano, qual atalho usamos para fechar o editor (sair)?',
                    options: [
                        'Ctrl + X',
                        'Ctrl + O',
                        'Ctrl + C',
                        ':wq'
                    ],
                    answer: 'Ctrl + X'
                },
                {
                    id: 'l7_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para abrir ou criar o arquivo notas.txt no editor Nano:',
                    textTemplate: '{blank} notas.txt',
                    options: ['nano', 'vim', 'cat', 'open'],
                    answer: 'nano'
                },
                {
                    id: 'l7_4',
                    type: 'multiple-choice',
                    question: 'Qual comando digitamos no Vim (no modo de comando) para salvar as alterações e sair?',
                    options: [
                        ':wq',
                        ':q!',
                        'Ctrl + X',
                        ':save'
                    ],
                    answer: ':wq'
                }
            ]
        },
        {
            id: 'l8',
            title: 'Copiando e Movendo: cp e mv',
            type: 'concept',
            exercises: [
                {
                    id: 'l8_1',
                    type: 'info',
                    title: 'cp e mv',
                    content: 'Para manipular arquivos no terminal:\n- cp (copy): Copia arquivos. Exemplo: "cp original.txt copia.txt". Para copiar pastas inteiras com tudo dentro, adicionamos o parâmetro "-r" (recursivo), ex: "cp -r pasta1 pasta2".\n- mv (move): Move ou renomeia arquivos/pastas. Exemplo: "mv antigo.txt novo.txt" (renomeia) ou "mv arquivo.txt pasta/" (move).',
                    tip: '💡 Dica: O comando "mv" não precisa de parâmetros extras para mover pastas, diferente do "cp"!'
                },
                {
                    id: 'l8_2',
                    type: 'multiple-choice',
                    question: 'Qual comando usamos no Linux para mover ou renomear arquivos e pastas?',
                    options: [
                        'mv',
                        'cp',
                        'rn',
                        'rm'
                    ],
                    answer: 'mv'
                },
                {
                    id: 'l8_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para fazer uma cópia do arquivo index.html como backup.html:',
                    textTemplate: '{blank} index.html backup.html',
                    options: ['cp', 'mv', 'rm', 'mkdir'],
                    answer: 'cp'
                },
                {
                    id: 'l8_4',
                    type: 'multiple-choice',
                    question: 'Qual parâmetro devemos usar com "cp" para copiar uma pasta inteira e seus conteúdos?',
                    options: [
                        '-r (recursivo)',
                        '-d (diretório)',
                        '-f (forçado)',
                        '-a (tudo)'
                    ],
                    answer: '-r (recursivo)'
                },
                {
                    id: 'l8_5',
                    type: 'tap-fill',
                    question: 'Complete o comando para renomear o arquivo teste.txt para final.txt:',
                    textTemplate: 'mv teste.txt {blank}',
                    options: ['final.txt', 'teste.txt', 'cp', 'rename'],
                    answer: 'final.txt'
                }
            ]
        },
        {
            id: 'l9',
            title: 'Procurando Textos com Grep',
            type: 'concept',
            exercises: [
                {
                    id: 'l9_1',
                    type: 'info',
                    title: 'O Poder do Grep',
                    content: 'O comando grep é usado para fazer buscas e encontrar linhas de texto dentro de arquivos de forma rápida. Por exemplo: "grep \"erro\" syslog.log" vai listar todas as linhas que contém a palavra "erro".\nParâmetros úteis:\n- "-i": ignora maiúsculas e minúsculas (case-insensitive).\n- "-r": busca recursiva em todos os arquivos dentro de pastas.',
                    tip: '💡 Dica: Você pode usar o grep em conjunto com outros comandos usando a barra vertical "|" (pipe).'
                },
                {
                    id: 'l9_2',
                    type: 'multiple-choice',
                    question: 'Qual a principal função do comando grep no terminal Linux?',
                    options: [
                        'Procurar padrões de texto dentro de arquivos',
                        'Criar novos arquivos de texto',
                        'Visualizar o espaço livre em disco',
                        'Gerenciar processos em segundo plano'
                    ],
                    answer: 'Procurar padrões de texto dentro de arquivos'
                },
                {
                    id: 'l9_3',
                    type: 'tap-fill',
                    question: 'Complete o comando para buscar a palavra "concluido" no arquivo log.txt:',
                    textTemplate: '{blank} "concluido" log.txt',
                    options: ['grep', 'cat', 'find', 'search'],
                    answer: 'grep'
                },
                {
                    id: 'l9_4',
                    type: 'multiple-choice',
                    question: 'Qual parâmetro usamos para fazer o grep buscar sem diferenciar letras maiúsculas e minúsculas?',
                    options: [
                        '-i',
                        '-r',
                        '-c',
                        '-v'
                    ],
                    answer: '-i'
                }
            ]
        }
    ]
};
