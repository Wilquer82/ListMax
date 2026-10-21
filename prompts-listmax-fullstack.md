# Prompts para construir a ListMax Full-Stack (Landing + PWA Dashboard + Backend)

> **Contexto da "mistura":**
>
> - **Site A (landing pública):** `myprojectevent.netlify.app/previa2024` — site de marketing da ListMax: hero "Seu evento exclusivo com a plataforma premium", QR Code + Reconhecimento Facial, seções Como Funciona / Recursos / Preços / Parceiros / Blog / Contato / FAQ, navbar com Log In e "Criar meu evento". Paleta: roxo profundo + verde limão neon + rosa magenta, fundo escuro com imagem de palco/fogos.
> - **Site B (app/PWA interno):** `pwa-connect-1.preview.emergentagent.com` — dashboard do organizador logado: sidebar roxa (Visão geral, Convidados, Fotos do evento, Chat dos convidados, Fornecedores, Lista de presentes, Notificações, Criar novo evento, Compartilhar evento), dashboard com métricas (convidados/confirmados, fornecedores, presentes, contagem regressiva), chat em tempo real, álbum colaborativo. Está em "Frontend Preview Only" (sem backend).
>
> **Objetivo:** um produto único e completo = landing pública (A) + app web/PWA do organizador e do convidado (B) + backend real ligando tudo.
>
> **Stack sugerida (cola no primeiro prompt):** Next.js 14+ (App Router) full-stack, TypeScript, Tailwind CSS + shadcn/ui, Prisma + PostgreSQL (ou Supabase), NextAuth/Auth.js (credenciais + magic link), Socket.io (chat real-time), tRPC ou Route Handlers (API), `qrcode` + `react-qr-reader` (check-in), `face-api.js` (reconhecimento facial opcional), `@ducanh2912/next-pwa` (PWA instalável), upload via UploadThing/S3, deploy na Vercel + Neon/Supabase.
>
> **Ordem de execução:** execute um prompt de cada vez, na sequência, em um agente de código (Cursor / Claude Code / Copilot / etc.). Cada prompt referencia o resultado do anterior.

---

## PROMPT #1 — Setup do projeto e arquitetura full-stack

```
Crie um projeto Next.js 14 (App Router, TypeScript, Tailwind, shadcn/ui) chamado "listmax" com arquitetura full-stack para uma plataforma de gestão de eventos. Configure:

ESTRUTURA DE PASTAS:
- app/(marketing)/         -> landing page pública (rotas: /, /como-funciona, /recursos, /precos, /parceiros, /blog, /contato, /faq, /login, /criar-evento)
- app/(app)/dashboard/     -> área logada do organizador (PWA): /dashboard, /dashboard/convidados, /dashboard/fotos, /dashboard/chat, /dashboard/fornecedores, /dashboard/presentes, /dashboard/notificacoes, /dashboard/evento/novo
- app/(guest)/e/[codigo]/  -> área pública do convidado (confirmar presença, ver evento, entrar no chat, subir foto) via link/código do evento
- app/api/                 -> Route Handlers (REST) + app/api/socket/io.ts (Socket.io)
- app/checkin/             -> tela de check-in (leitura de QR / câmera) para portaria
- lib/                     -> prisma client, auth, utils, validadores (zod)
- components/ui/           -> shadcn
- components/marketing/    -> componentes da landing
- components/dashboard/    -> componentes do app
- prisma/schema.prisma

IDENTIDADE VISUAL (tokens no tailwind.config / CSS vars):
- Roxo profundo: #1A0533 (sidebar/fundos escuros), #2D0B4E, gradiente roxo
- Verde limão neon (CTA): #C6F432 / #B8FF00
- Rosa/magenta neon: #FF2EA6
- Fundo app: #FAF8FF (quase branco)
- Texto: #1A0533 / branco em áreas escuras
- Fonte: Inter (ou similar), títulos bold com contraste alto
- Borda arredondada md-lg, sombras suaves, badges coloridas por status

BANCO (Prisma + PostgreSQL): modelos User, Event, Guest (com status: pendente/confirmado/recusou/checkin), GuestGroup (famílias/lotes), Supplier, GiftItem (lista de presentes + reserva), Photo (álbum colaborativo), ChatMessage, Notification, InviteLink (código público do evento), CheckinLog, Payment/Plan (se quiser freemium). Relacionamentos corretos e índices.

AUTH: Auth.js com credenciais (email+senha) e magic link por email; middleware protegendo /dashboard e /checkin; sessão por JWT.

Entregue: projeto rodando (npm run dev), schema.prisma completo, middleware de auth, layout base das três áreas (marketing com navbar roxa; dashboard com sidebar roxa fixa; guest com layout limpo), tokens de cor aplicados. Não precisa popular conteúdo ainda — só estrutura e navegação funcionando.
```

---

## PROMPT #2 — Landing page pública (marketing) — réplica/mistura do Site A

```
Construa a landing page pública em app/(marketing)/ seguindo a identidade visual ListMax (roxo profundo + verde limão + rosa neon). Páginas:

1. HOME (/) — seções:
   - Navbar fixa: logo "listmax", links: Como Funciona, Recursos, Preços, Parceiros, Blog, Contato, Perguntas Frequentes; botão "Log In" (contorno) e "Criar meu evento" (verde limão sólido).
   - Hero: fundo escuro com imagem de palco/show/fogos (use gradiente roxo + overlay), título grande "Seu evento exclusivo com a plataforma premium que ele merece" (destaque verde em "evento exclusivo" e "plataforma premium"), subtítulo mencionando QR Code e Reconhecimento Facial, dois CTAs: "Saiba mais" (verde) e "Assistir vídeo" (ícone play).
   - "Como funciona a ListMax?" — explicação em 3 passos (crie o evento, convide/importe lista, check-in no dia) com cards e mockup de celular mostrando lista de convidados.
   - "Nossos melhores recursos" — grid de cards: Controle Avançado de Convidados (upload de planilha Excel/CSV), Acesso com Look You (reconhecimento facial), Check-in por QR Code, Chat dos convidados, Álbum de fotos colaborativo, Lista de presentes, Fornecedores, Notificações.
   - Preços — 3 planos (Básico / Pro / Premium) com destaque no Pro, botão de CTA.
   - Parceiros — logos (use placeholders/SVG).
   - Depoimentos — carrossel de 3 depoimentos.
   - FAQ — accordion com pelo menos 6 perguntas.
   - Contato — formulário (nome, email, mensagem) + dados.
   - Footer completo.
2. Páginas internas: /como-funciona, /recursos, /precos, /parceiros, /blog (lista), /contato, /faq — cada uma com conteúdo próprio e navbar/footer consistentes.
3. /login e /criar-conta — formulários de autenticação (integre com Auth.js), design escuro com CTA verde.

Requisitos: totalmente responsivo (mobile-first), animações suaves de scroll (framer-motion), SEO (metadata, Open Graph), formulários validados com zod + react-hook-form. Ao clicar em "Criar meu evento" e já estiver logado, redireciona para /dashboard/evento/novo; senão para /criar-conta.
```

---

## PROMPT #3 — Dashboard do organizador (PWA) — réplica do Site B

```
Construa a área logada do organizador em app/(app)/dashboard/ com layout de sidebar roxa escura fixa (240px) e topbar. SIDEBAR: logo "listmax", seletor de evento atual (dropdown com foto/nome), botão verde "+ Criar novo evento", grupo "Planeje, convide e celebre" com itens: Visão geral, Convidados, Fotos do evento, Chat dos convidados (com badge de não lidas), Fornecedores, Lista de presentes; abaixo: Notificações (com ponto verde), perfil do organizador (avatar iniciais, nome, papel "Organizador", menu de sair). TOPBAR: breadcrumb "MEU EVENTO / <página>", sino de notificações, botão "Compartilhar evento" (gera link/código), avatar.

Páginas (todas com dados reais do banco via server components / fetch):

1. VISÃO GERAL (/dashboard):
   - Banner hero do evento (imagem de fundo, tipo do evento ex: "CASAMENTO", data, título "O seu momento. Do seu jeito.", subtítulo, botões "Gerenciar convidados" e "Compartilhar evento", card "FALTAM X DIAS" contagem regressiva em tempo real).
   - Grid de 4 métricas: Convidados (total + confirmados), Fornecedores (total + contratados), Lista de presentes (% reservado + valor arrecadado R$), Contagem regressiva (dias).
   - "O que precisa de atenção" — cards coloridos (verde/rosa/lilás) gerados dinamicamente: convidados pendentes, álbum vazio, presentes reservados esta semana, fornecedores sem confirmar.
   - "Não se esqueça / Próximo passo" — lista de tarefas/lembretes com data e prazo (ex: "Confirmar buffet — prazo amanhã").

2. CONVIDADOS (/dashboard/convidados):
   - Cabeçalho "A sua lista, do seu jeito", busca, input para adicionar convidado (nome + email/whatsapp) + botão "Adicionar", upload de planilha Excel/CSV (parse em lote com feedback).
   - 3 cards de métricas: na lista / confirmados / a responder.
   - Tabela/lista de convidados com: nome, contato, status (badge colorida), lote/grupo, acompanhantes, ações (editar, remover, reenviar convite, marcar check-in). Filtros por status e busca. Paginação.

3. FORNECEDORES (/dashboard/fornecedores): CRUD (buffet, foto, som, decoração...), status (pendente/contratado), valor, contato, data de pagamento.

4. LISTA DE PRESENTES (/dashboard/presentes): CRUD de itens (nome, valor, foto, link), status (disponível/reservado), valor total arrecadado, quem reservou.

5. CRIAR NOVO EVENTO (/dashboard/evento/novo): wizard em 4 passos — tipo de evento (casamento/aniversário/corporativo/festa), nome/data/horário/local, capa (upload), configurações (QR no convite, ativar chat, ativar álbum, lista de presentes). Gera código público do evento e link de convite.

6. NOTIFICAÇÕES (/dashboard/notificacoes): lista em tempo real (novo confirmado, nova mensagem no chat, nova foto, presente reservado) com marcar como lida.

Requisitos: dados reais do Prisma, server components onde possível, client components para interações, estado de loading/skeleton, design responsivo (sidebar vira drawer no mobile).
```

---

## PROMPT #4 — Backend & API (núcleo) + área do convidado

```
Implemente o backend completo (Route Handlers + Server Actions + validação zod) e a área pública do convidado.

API REST (prefixo /api):
- Auth: /api/auth/* (Auth.js)
- Eventos: GET/POST/PATCH/DELETE /api/events, GET /api/events/[id], POST /api/events/[id]/share (gera/retorna link público)
- Convidados: GET/POST /api/events/[id]/guests, PATCH/DELETE /api/guests/[id], POST /api/guests/import (CSV/Excel em lote), POST /api/guests/[id]/invite (envia email/WhatsApp link), GET /api/events/[id]/guests/export (gera CSV)
- Check-in: POST /api/checkin (por QR code ou por busca de nome), GET /api/events/[id]/checkin-log
- Fornecedores: CRUD /api/suppliers
- Presentes: CRUD /api/gifts + POST /api/gifts/[id]/reserve (reserva por convidado)
- Fotos: POST /api/photos (upload multipart para S3/UploadThing), GET /api/events/[id]/photos, DELETE /api/photos/[id]
- Notificações: GET /api/notifications, PATCH /api/notifications/[id]/read
- Webhooks de email (opcional)

ÁREA DO CONVIDADO (app/(guest)/e/[codigo]/ — pública, sem login, identificado pelo código do evento + token do convidado no link):
- Página do evento: capa, data, local, nome dos anfitriões, botão "Confirmar presença" (com quantidade de acompanhantes).
- Após confirmar: acesso ao Chat do evento, Álbum de fotos (pode enviar foto), Lista de presentes (pode reservar um presente), dados do evento.
- Convite chega por email/WhatsApp com link pessoal (contém token do convidado).

Regras de negócio: só o organizador (dono do evento) pode editar; convidado só acessa seu evento via token válido; check-in registra data/hora e método (QR/manual); presentes reservados ficam indisponíveis; upload de fotos com moderação (status pendente/aprovado).

Entregue: coleção Postman/gerada de todos os endpoints, testes de integração básicos, e fluxo completo: criar evento -> adicionar convidado -> convidado recebe link -> confirma -> aparece no dashboard.
```

---

## PROMPT #5 — Chat em tempo real, álbum colaborativo e notificações (Socket.io)

```
Implemente os módulos real-time com Socket.io (app/api/socket/io.ts + client hook useSocket).

1. CHAT DOS CONVIDADOS (/dashboard/chat e também na área do convidado):
   - Sala por evento (canal `event:<id>`).
   - Lista de pessoas online (avatares com iniciais + contador "+N").
   - Mensagens com: autor, texto, horário, status (enviada/entregue/lida).
   - Input de mensagem com botão enviar (verde), suporte a emoji, scroll automático para o fim.
   - Persistência no banco (ChatMessage) + carregamento do histórico ao entrar.
   - Badge de não lidas na sidebar e sino de notificação para o organizador.
   - Design: painel esquerdo roxo com participantes, painel direito branco com mensagens (igual ao protótipo do Site B).

2. ÁLBUM COLABORATIVO DE FOTOS (/dashboard/fotos):
   - Galeria masonry/grid das fotos do evento com upload múltiplo (arrastar e soltar).
   - Toda foto enviada por convidado vai para moderação (pendente); organizador aprova/reprova em /dashboard/fotos.
   - Fotos aprovadas aparecem em tempo real para todos (evento socket `photo:new`).
   - Cabeçalho "As memórias são de todos" + botão verde "Adicionar fotos".

3. NOTIFICAÇÕES EM TEMPO REAL: canal `user:<id>` para o organizador receber: novo confirmado, nova mensagem, nova foto pendente, presente reservado, check-in acontecendo. Sino com contador e lista dropdown.

Requisitos: reconexão automática do socket, histórico paginado, otimização de imagens no upload (sharp), limite de tamanho, indicador de "digitando..." (opcional).
```

---

## PROMPT #6 — Check-in (QR Code + Reconhecimento Facial) + PWA instalável

```
Implemente a tela de check-in de portaria (/checkin) e torne o app um PWA instalável.

CHECK-IN (acessível por organizadores/porteiros logados):
- Dois modos: (a) leitura de QR Code pela câmera (react-qr-reader / html5-qrcamera) — ao detectar, busca o convidado pelo token, marca presença, mostra confirmação verde com nome/foto; (b) busca manual por nome (lista com autocomplete) para quem perdeu o convite.
- Feedback visual: sucesso (verde, nome, lote, acompanhantes), já deu check-in (amarelo aviso), não encontrado (vermelho).
- Registro em CheckinLog com data/hora, método, quem fez o check-in.
- Tela otimizada para celular (em pé, botão grande, câmera em destaque).

QR CODE NO CONVITE: cada convidado recebe no email/WhatsApp um QR Code pessoal (gerado com lib `qrcode`, conteúdo = token do convidado) + link. Incluir o QR no template do convite.

RECONHECIMENTO FACIAL (modo "Look You", feature premium opcional):
- Usando face-api.js (modelos TinyFaceDetector + FaceRecognition): organizador pode cadastrar foto dos convidados no evento; no check-in a câmera compara o rosto e sugere o convidado. Se não usar, deixe desativado por padrão com flag no evento.

PWA: configure @ducanh2912/next-pwa — manifest com nome "ListMax", ícones (verde/roxo), tema roxo, modo standalone, service worker com cache de assets e offline fallback para as páginas do app; tela de instalação "Adicionar à tela inicial".

API PÚBLICA (opcional): documente endpoints com OpenAPI/Swagger em /api/docs para integração com fornecedores.
```

---

## PROMPT #7 — Integração final, dados de exemplo e deploy

```
Faça a integração final e prepare para deploy:
1. Seed do banco: crie um evento de exemplo "Casamento da Ana & Guilherme" (18/out) com ~86 convidados (64 confirmados, 22 a responder), 3 fornecedores (2 contratados), 8 itens de presentes (38% reservados, R$1.840), ~12 fotos, algumas mensagens no chat — para o dashboard ficar exatamente como o protótipo do Site B.
2. Fluxo E2E testado: visitante -> landing -> cria conta -> cria evento -> importa convidados -> convidado recebe link -> confirma -> chat -> sobe foto -> organizador aprova -> dia do evento check-in por QR.
3. Variáveis de ambiente (.env.example): DATABASE_URL, NEXTAUTH_SECRET, RESEND_API_KEY (email), UPLOADTHING_TOKEN (ou S3), NEXT_PUBLIC_SITE_URL.
4. Deploy: pronto para Vercel (frontend + API) + Neon/Supabase (Postgres); README com passo a passo; script de build sem erros; Lighthouse > 90 na landing.
5. Remova qualquer aviso de "Frontend Preview Only" — tudo deve estar funcional.
```

---

## PROMPT #8 — Camada de IA (assistente, chatbot convidado, álbum inteligente, RAG)

```
Adicione uma camada de IA ao projeto ListMax. Crie app/api/ai/ com Vercel AI SDK e chaves via env (OPENAI_API_KEY / ANTHROPIC_API_KEY). Use pgvector no Postgres (extensão vetor(1534), tabela EventEmbedding).

1. ASSISTENTE DO ORGANIZADOR (chat lateral fixo no dashboard, ícone flutuante):
   - LLM com function calling ligado às suas APIs: listar/criar/editar convidados, listar fornecedores, criar tarefa/lembrete, enviar comunicado aos convidados, consultar métricas do evento.
   - Prompt de sistema com contexto do evento atual (nome, data, tipo, contagem de convidados). Respostas em português, tom prestativo.
   - Streaming via SSE. Histórico persistido por usuário (tabela AssistantMessage).

2. GERAÇÃO DE CONTEÚDO:
   - No criar evento: botão "Gerar descrição do evento" e "Gerar texto do convite" (prompt template por tipo de evento: casamento/aniversário/corporativo).
   - No álbum: botão "Sugerir legenda" por foto (visão: GPT-4o / Gemini Vision descreve a foto).
   - Gerar arte de capa do evento via DALL·E/Flux com a paleta roxo/verde (opcional, plano premium).

3. CHATBOT DO CONVIDADO (RAG, na área pública e/[codigo]):
   - Indexa dados do evento (descrição, local, horário, dress code, presentes, FAQ) em embeddings.
   - Convidado pergunta em linguagem natural e recebe resposta baseada APENAS nos dados do evento (RAG com retorno de fontes). Se não souber, diz "pergunte ao organizador" e cria uma pergunta para ele.

4. ÁLBUM INTELIGENTE:
   - Moderação automática de fotos no upload (AWS Rekognition Moderation ou OpenAI Moderation na imagem) — inapropriada já bloqueia sem passar pelo organizador.
   - Quality scoring da foto (CLIP/embedding + regras: blur, faces) para ordenar "melhores momentos".
   - Reconhecimento facial (face-api.js, já usado no check-in) sugere tag do convidado na foto.

5. NOTIFICAÇÕES INTELIGENTES:
   - Análise de sentimento do chat dos convidados (classifica mensagens como duvida/reclamacao/positiva) e resumo diário para o organizador.
   - Alerta: "3 convidados perguntaram sobre <tema> — envie um comunicado?" (botão que já gera e envia).

Requisitos: todas as chamadas de IA passam por /api/ai com cache e rate limit; variáveis em .env; features de visão/vídeo marcadas como premium (controle por plano do usuário). Inclua fallback: se OpenAI falhar, tenta Anthropic/Gemini.
```

---

## PROMPT #9 — Página de Preços (landing) + modelo de monetização

```
Construa a página /precos da landing ListMax (identidade roxo #1A0533 + verde limão #C6F432 + rosa #FF2EA6) com o modelo de precificação abaixo. Inclua: toggle de cobrança (Por evento / Assinatura mensal) que troca os valores dos cards; 4 planos com destaque no "Essencial" (badge "Mais escolhido"); tabela comparativa de features; FAQ de preços em accordion; CTA "Começar grátis (30 convidados)".

MODELO DE PREÇOS (valores em R$, já validados contra concorrentes):
POR EVENTO (B2C — casamento, 15 anos, aniversário):
- Mini (até 60 convidados): R$ 97 — 1 evento, QR no convite, RSVP, check-in, lista, chat básico
- Essencial (até 150): R$ 197 — + álbum de fotos, lista de presentes, fornecedores, 1 porteiro
- Premium (até 300): R$ 347 — + reconhecimento facial, assistente IA, moderação automática de fotos, convites personalizados (badge "Mais escolhido")
- Black (ilimitado): R$ 597+ — + múltiplos porteiros, white-label, gerente de conta, relatório pós-evento com IA

ASSINATURA MENSAL (B2B — cerimonialistas, bufês, promotores, agências):
- Profissional (até 3 eventos/mês): R$ 97/mês — convidados ilimitados por evento
- Agência (até 10 eventos/mês): R$ 247/mês — white-label, multiusuário, API
- Enterprise (ilimitado): R$ 497–997/mês — SLA, integração WhatsApp/SMS, gerente de conta

ADD-ONS (receita variável):
- Lista de presentes: 5–8% sobre o valor arrecadado
- WhatsApp/SMS em massa: R$ 0,15–0,25 por mensagem
- Reconhecimento facial / IA avulso: R$ 97 por evento
- Venda de ingressos (eventos pagos): 8% sobre o ingresso (abaixo dos 10% da Sympla)
- Convite digital personalizado: R$ 197–397 avulso

Regra: plano gratuito de lançamento (até 30 convidados, 1 evento) para aquisição; preço promocional de lançamento nos primeiros 50 eventos. Features de IA e reconhecimento facial só nos planos Premium/Black (justificam o preço alto).
```

---

### Dicas de uso

- **Execute um prompt por vez.** Não cole tudo de uma vez no agente — cada etapa depende da anterior.
- Após o Prompt #1, valide que o projeto roda (`npm run dev`) antes de seguir.
- Se usar Supabase, pode substituir Prisma+Postgres+Auth por Auth do Supabase + Realtime (já substitui o Socket.io do Prompt #5).
- Para envio de convites por WhatsApp, use a API oficial do WhatsApp (Meta) ou Twilio; por email use Resend/Postmark.
- O reconhecimento facial (Prompt #6) é a parte mais pesada — se quiser lançar rápido, deixe como roadmap e lance só com QR Code.
