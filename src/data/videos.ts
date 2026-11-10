import type { L } from '../i18n'

export type QuizQ = { q: L; options: L[]; answer: number; why: L }

export type Video = {
  id: string
  emoji: string
  borough: L
  title: L
  hook: L
  /** ID del video YouTube "non in elenco" (es. "dQw4w9WgXcQ"). Vuoto = segnaposto. */
  youtubeId: string
  deepDive: L[]
  keyDates: { year: string; text: L }[]
  didYouKnow: L
  mun: L
  onSite: L
  quiz: QuizQ[]
}

export const videos: Video[] = [
  {
    id: 'introduzione-ny',
    emoji: '🗽',
    borough: { it: 'Tutta la città', en: 'Citywide' },
    title: { it: 'Introduzione a New York', en: 'Introducing New York' },
    hook: {
      it: 'Perché si chiama New York, perché le strade sono una griglia e perché è la “Grande Mela”?',
      en: 'Why is it called New York, why are the streets a grid, and why is it the “Big Apple”?',
    },
    youtubeId: '',
    deepDive: [
      {
        it: 'Nel 1624 gli olandesi fondano la colonia di Nuova Amsterdam sulla punta meridionale di Manhattan. Nel 1664 gli inglesi la prendono quasi senza combattere e la ribattezzano New York in onore del Duca di York, il futuro re Giacomo II. Porto, commercio e immigrazione la fanno crescere in fretta.',
        en: 'In 1624 the Dutch founded the colony of New Amsterdam at the southern tip of Manhattan. In 1664 the English took it almost without a fight and renamed it New York after the Duke of York, the future King James II. The port, trade and immigration made it grow fast.',
      },
      {
        it: 'Con il Piano dei Commissari del 1811 Manhattan viene disegnata come una griglia: le Street, numerate, vanno da est a ovest; le Avenue da nord a sud. Broadway è l’eccezione: segue un antico sentiero dei nativi americani, che gli olandesi chiamavano “Breede Weg”, la strada larga. Oggi la città è formata da cinque boroughs: Manhattan, Brooklyn, Queens, Bronx e Staten Island, unificati nel 1898.',
        en: 'The Commissioners’ Plan of 1811 laid Manhattan out as a grid: numbered Streets run east–west, Avenues run north–south. Broadway is the exception: it follows an old Native American trail the Dutch called “Breede Weg”, the broad way. Today the city is made of five boroughs: Manhattan, Brooklyn, Queens, the Bronx and Staten Island, consolidated in 1898.',
      },
    ],
    keyDates: [
      { year: '1624', text: { it: 'Nasce Nuova Amsterdam', en: 'New Amsterdam is founded' } },
      { year: '1664', text: { it: 'Diventa New York', en: 'It becomes New York' } },
      { year: '1811', text: { it: 'Piano a griglia di Manhattan', en: 'Manhattan grid plan' } },
      { year: '1898', text: { it: 'Unione dei cinque boroughs', en: 'The five boroughs unite' } },
      { year: '1920s', text: { it: 'Nasce il soprannome “Big Apple”', en: 'The “Big Apple” nickname appears' } },
    ],
    didYouKnow: {
      it: 'Il soprannome “Big Apple” fu reso popolare negli anni Venti dal giornalista sportivo John J. Fitz Gerald, che parlava delle corse dei cavalli di New York come del premio più ambito. Negli anni Settanta l’ufficio del turismo lo rilanciò per tutta la città.',
      en: 'The “Big Apple” nickname was popularised in the 1920s by sportswriter John J. Fitz Gerald, who described New York’s horse races as the ultimate prize. In the 1970s the tourism office revived it for the whole city.',
    },
    mun: {
      it: 'Più di un terzo dei newyorkesi è nato all’estero e in città si parlano centinaia di lingue: New York è una piccola “assemblea generale” vivente. Prova a contare quante lingue senti in metropolitana!',
      en: 'More than a third of New Yorkers were born abroad and hundreds of languages are spoken here: New York is a living “General Assembly”. Try counting how many languages you hear on the subway!',
    },
    onSite: {
      it: 'Per orientarti: dalla 34th alla 42nd Street sono 8 isolati verso nord (uptown). Una “avenue block” è circa tre volte più lunga di un isolato tra due Street.',
      en: 'Getting around: from 34th to 42nd Street is 8 blocks north (uptown). An avenue block is roughly three times longer than a block between two Streets.',
    },
    quiz: [
      {
        q: { it: 'Come si chiamava New York prima del 1664?', en: 'What was New York called before 1664?' },
        options: [{ it: 'Nuova Amsterdam', en: 'New Amsterdam' }, { it: 'Nuova Orange', en: 'New Orange' }, { it: 'Manhattan Town', en: 'Manhattan Town' }],
        answer: 0,
        why: { it: 'Era la colonia olandese di Nuova Amsterdam.', en: 'It was the Dutch colony of New Amsterdam.' },
      },
      {
        q: { it: 'In che direzione corrono le Avenue?', en: 'Which way do the Avenues run?' },
        options: [{ it: 'Da est a ovest', en: 'East to west' }, { it: 'Da nord a sud', en: 'North to south' }, { it: 'In diagonale', en: 'Diagonally' }],
        answer: 1,
        why: { it: 'Le Avenue vanno da nord a sud, le Street da est a ovest.', en: 'Avenues run north–south, Streets run east–west.' },
      },
      {
        q: { it: 'Quanti sono i boroughs di New York?', en: 'How many boroughs does New York have?' },
        options: [{ it: '3', en: '3' }, { it: '5', en: '5' }, { it: '7', en: '7' }],
        answer: 1,
        why: { it: 'Manhattan, Brooklyn, Queens, Bronx e Staten Island.', en: 'Manhattan, Brooklyn, Queens, the Bronx and Staten Island.' },
      },
    ],
  },
  {
    id: 'wall-street',
    emoji: '🧱',
    borough: { it: 'Manhattan · Financial District', en: 'Manhattan · Financial District' },
    title: { it: 'Wall Street', en: 'Wall Street' },
    hook: {
      it: 'Il segreto della strada più famosa della finanza è sotto i tuoi piedi.',
      en: 'The secret of the world’s most famous finance street is under your feet.',
    },
    youtubeId: '',
    deepDive: [
      {
        it: 'Intorno al 1653 gli olandesi costruiscono una palizzata di legno sul confine nord di Nuova Amsterdam, da un fiume all’altro, per difendersi da possibili attacchi inglesi e dei nativi. La strada che la costeggia diventa la “strada del muro”: Wall Street. Il muro viene smantellato dagli inglesi nel 1699.',
        en: 'Around 1653 the Dutch built a wooden palisade along the northern edge of New Amsterdam, from river to river, to defend against possible English and Native American attacks. The street beside it became the “wall street”. The English took the wall down in 1699.',
      },
      {
        it: 'Nel 1792, sotto un platano proprio su Wall Street, 24 commercianti firmano il Buttonwood Agreement: è l’atto di nascita di quella che diventerà la Borsa di New York (NYSE). Oggi “Wall Street” indica l’intero sistema finanziario americano.',
        en: 'In 1792, under a buttonwood tree on Wall Street itself, 24 brokers signed the Buttonwood Agreement: the birth certificate of what would become the New York Stock Exchange (NYSE). Today “Wall Street” stands for the whole US financial system.',
      },
    ],
    keyDates: [
      { year: '1653', text: { it: 'Costruzione della palizzata', en: 'The palisade is built' } },
      { year: '1699', text: { it: 'Il muro viene smantellato', en: 'The wall is dismantled' } },
      { year: '1792', text: { it: 'Buttonwood Agreement', en: 'Buttonwood Agreement' } },
      { year: '1929', text: { it: 'Il crollo della Borsa', en: 'The stock market crash' } },
    ],
    didYouKnow: {
      it: 'Su Wall Street, alla Federal Hall, George Washington giurò come primo presidente degli Stati Uniti nel 1789: per un breve periodo New York fu la capitale del Paese.',
      en: 'On Wall Street, at Federal Hall, George Washington was sworn in as the first US president in 1789: for a short time New York was the nation’s capital.',
    },
    mun: {
      it: 'La crisi del 1929, partita da Wall Street, si allargò a tutto il mondo. È uno dei motivi per cui, dopo la guerra, nacquero istituzioni internazionali come il Fondo Monetario e la Banca Mondiale: l’economia di un Paese riguarda tutti.',
      en: 'The 1929 crash that started on Wall Street spread worldwide. It is one reason why, after the war, international institutions like the IMF and the World Bank were created: one country’s economy affects everyone.',
    },
    onSite: {
      it: 'Sfida: cammina lungo Wall Street e cerca a terra le tracce del percorso dell’antico muro. Poi raggiungi la Federal Hall e trova la statua di Washington.',
      en: 'Challenge: walk along Wall Street and look on the ground for traces of the old wall’s route. Then reach Federal Hall and find Washington’s statue.',
    },
    quiz: [
      {
        q: { it: 'Cosa significa letteralmente “Wall Street”?', en: 'What does “Wall Street” literally mean?' },
        options: [{ it: 'Via della Borsa', en: 'Stock Street' }, { it: 'Via del Muro', en: 'Street of the Wall' }, { it: 'Via del Porto', en: 'Harbour Street' }],
        answer: 1,
        why: { it: 'Prende il nome dalla palizzata olandese.', en: 'It is named after the Dutch palisade.' },
      },
      {
        q: { it: 'Di cosa era fatto il muro?', en: 'What was the wall made of?' },
        options: [{ it: 'Pietra', en: 'Stone' }, { it: 'Mattoni', en: 'Brick' }, { it: 'Legno', en: 'Wood' }],
        answer: 2,
        why: { it: 'Era una palizzata di tronchi di legno.', en: 'It was a palisade of wooden logs.' },
      },
      {
        q: { it: 'Quale accordo del 1792 diede origine alla Borsa di New York?', en: 'Which 1792 agreement gave rise to the NYSE?' },
        options: [{ it: 'Buttonwood Agreement', en: 'Buttonwood Agreement' }, { it: 'Trattato di Parigi', en: 'Treaty of Paris' }, { it: 'Accordo di Bretton Woods', en: 'Bretton Woods Agreement' }],
        answer: 0,
        why: { it: 'Fu firmato sotto un platano (buttonwood).', en: 'It was signed under a buttonwood tree.' },
      },
    ],
  },
  {
    id: 'statua-liberta',
    emoji: '🗽',
    borough: { it: 'Liberty Island', en: 'Liberty Island' },
    title: { it: 'Statua della Libertà', en: 'Statue of Liberty' },
    hook: { it: 'La Statua della Libertà non è nata verde.', en: 'The Statue of Liberty wasn’t born green.' },
    youtubeId: '',
    deepDive: [
      {
        it: 'La statua, il cui nome ufficiale è “La Libertà che illumina il mondo”, è un dono della Francia agli Stati Uniti per il centenario dell’indipendenza americana. Lo scultore è Frédéric Auguste Bartholdi; la struttura interna in ferro è di Gustave Eiffel, lo stesso della torre di Parigi. Arriva a New York nel 1885 smontata in oltre 300 pezzi e viene inaugurata nel 1886.',
        en: 'The statue, officially “Liberty Enlightening the World”, was a gift from France to the United States for the centennial of American independence. The sculptor was Frédéric Auguste Bartholdi; the iron inner frame was designed by Gustave Eiffel, of Paris tower fame. It reached New York in 1885 in over 300 pieces and was dedicated in 1886.',
      },
      {
        it: 'Il rivestimento è in rame, spesso circa quanto due monete. All’inizio era color rame brillante; esposto ad aria e salsedine si è ossidato e in circa 30 anni è diventato verde. Quella patina, chiamata verderame, oggi protegge il metallo.',
        en: 'The skin is copper, about as thick as two coins. At first it was a shiny copper colour; exposed to air and sea salt it oxidised and turned green within about 30 years. That patina, called verdigris, now protects the metal.',
      },
    ],
    keyDates: [
      { year: '1876', text: { it: 'Centenario dell’indipendenza USA', en: 'US independence centennial' } },
      { year: '1885', text: { it: 'Arriva via nave, in pezzi', en: 'Arrives by ship, in pieces' } },
      { year: '1886', text: { it: 'Inaugurazione', en: 'Dedication' } },
      { year: '1984', text: { it: 'Patrimonio UNESCO', en: 'UNESCO World Heritage Site' } },
    ],
    didYouKnow: {
      it: 'Sulla tavola che tiene in mano c’è scritto in numeri romani JULY IV MDCCLXXVI: 4 luglio 1776, il giorno della Dichiarazione d’Indipendenza. Ai suoi piedi c’è una catena spezzata.',
      en: 'The tablet she holds reads JULY IV MDCCLXXVI in Roman numerals: 4 July 1776, the day of the Declaration of Independence. At her feet lies a broken chain.',
    },
    mun: {
      it: 'La statua è nella Lista del Patrimonio Mondiale dell’UNESCO, l’agenzia dell’ONU per educazione, scienza e cultura. Per milioni di migranti arrivati a Ellis Island è stata il primo simbolo di accoglienza: un tema ancora oggi al centro dei dibattiti ONU.',
      en: 'The statue is on the World Heritage List of UNESCO, the UN agency for education, science and culture. For millions of migrants arriving at Ellis Island it was the first symbol of welcome: a theme still at the heart of UN debates today.',
    },
    onSite: {
      it: 'Dal traghetto, osserva i sette raggi della corona: rappresentano i sette continenti e i sette mari.',
      en: 'From the ferry, look at the seven rays of the crown: they stand for the seven continents and the seven seas.',
    },
    quiz: [
      {
        q: { it: 'Di che colore era la statua all’inizio?', en: 'What colour was the statue at first?' },
        options: [{ it: 'Verde', en: 'Green' }, { it: 'Rame brillante', en: 'Shiny copper' }, { it: 'Grigio pietra', en: 'Stone grey' }],
        answer: 1,
        why: { it: 'Il verde è dovuto all’ossidazione del rame.', en: 'The green comes from the copper oxidising.' },
      },
      {
        q: { it: 'Chi progettò la struttura interna?', en: 'Who designed the inner frame?' },
        options: [{ it: 'Gustave Eiffel', en: 'Gustave Eiffel' }, { it: 'Frédéric Bartholdi', en: 'Frédéric Bartholdi' }, { it: 'Le Corbusier', en: 'Le Corbusier' }],
        answer: 0,
        why: { it: 'Bartholdi è lo scultore, Eiffel l’ingegnere.', en: 'Bartholdi was the sculptor, Eiffel the engineer.' },
      },
      {
        q: { it: 'Quale data è incisa sulla tavola?', en: 'Which date is written on the tablet?' },
        options: [{ it: '4 luglio 1776', en: '4 July 1776' }, { it: '28 ottobre 1886', en: '28 October 1886' }, { it: '14 luglio 1789', en: '14 July 1789' }],
        answer: 0,
        why: { it: 'È il giorno della Dichiarazione d’Indipendenza.', en: 'It is the day of the Declaration of Independence.' },
      },
    ],
  },
  {
    id: 'brooklyn-bridge',
    emoji: '🌉',
    borough: { it: 'Manhattan ↔ Brooklyn', en: 'Manhattan ↔ Brooklyn' },
    title: { it: 'Ponte di Brooklyn', en: 'Brooklyn Bridge' },
    hook: {
      it: 'Il ponte salvato da una donna che non era nemmeno un’ingegnera.',
      en: 'The bridge saved by a woman who wasn’t even an engineer.',
    },
    youtubeId: '',
    deepDive: [
      {
        it: 'I lavori iniziano nel 1869-70, pochi anni dopo la Guerra Civile, per unire Manhattan e Brooklyn, allora due città separate. Il progettista John A. Roebling muore per un incidente prima dell’inizio; il figlio Washington Roebling prende il suo posto, ma si ammala gravemente lavorando nei cassoni sott’acqua (la “malattia da decompressione”) e resta costretto a casa.',
        en: 'Work began in 1869–70, a few years after the Civil War, to link Manhattan and Brooklyn, then two separate cities. The designer John A. Roebling died in an accident before construction began; his son Washington Roebling took over but fell seriously ill working in the underwater caissons (“the bends”) and was confined to his home.',
      },
      {
        it: 'Sua moglie Emily Warren Roebling studia ingegneria, matematica e gestione dei cantieri e per oltre dieci anni fa da tramite tra il marito e i cantieri, trattando con ingegneri e politici. Nel 1883, all’inaugurazione, è la prima persona ad attraversare il ponte. Per alcuni anni è il ponte sospeso più lungo del mondo.',
        en: 'His wife Emily Warren Roebling studied engineering, mathematics and site management and for over ten years acted as the link between her husband and the works, dealing with engineers and politicians. At the 1883 opening she was the first person to cross the bridge. For some years it was the longest suspension bridge in the world.',
      },
    ],
    keyDates: [
      { year: '1869', text: { it: 'Muore John A. Roebling', en: 'John A. Roebling dies' } },
      { year: '1870', text: { it: 'Iniziano i lavori', en: 'Construction begins' } },
      { year: '1883', text: { it: 'Inaugurazione', en: 'Opening day' } },
      { year: '1898', text: { it: 'Brooklyn si unisce a New York', en: 'Brooklyn joins New York' } },
    ],
    didYouKnow: {
      it: 'Nel 1884, per dimostrare che il ponte era solido, il circo di P.T. Barnum lo fece attraversare da 21 elefanti.',
      en: 'In 1884, to prove the bridge was safe, P.T. Barnum’s circus marched 21 elephants across it.',
    },
    mun: {
      it: 'La storia di Emily Roebling parla di parità di genere, l’Obiettivo 5 dell’Agenda 2030 dell’ONU. Quante altre donne hanno fatto la storia “senza titolo ufficiale”?',
      en: 'Emily Roebling’s story is about gender equality, Goal 5 of the UN 2030 Agenda. How many other women made history “without an official title”?',
    },
    onSite: {
      it: 'Cerca sulla torre di Brooklyn la targa dedicata a Emily Warren Roebling. Il passaggio pedonale è sopra le corsie delle auto: cammina verso Manhattan per la vista migliore.',
      en: 'Look for the plaque honouring Emily Warren Roebling on the Brooklyn tower. The walkway runs above the car lanes: walk towards Manhattan for the best view.',
    },
    quiz: [
      {
        q: { it: 'Chi attraversò per prima il ponte?', en: 'Who was the first to cross the bridge?' },
        options: [{ it: 'Il presidente USA', en: 'The US president' }, { it: 'Emily Warren Roebling', en: 'Emily Warren Roebling' }, { it: 'John A. Roebling', en: 'John A. Roebling' }],
        answer: 1,
        why: { it: 'Fu un riconoscimento al suo ruolo decisivo.', en: 'It was a tribute to her decisive role.' },
      },
      {
        q: { it: 'In che anno fu inaugurato?', en: 'When did it open?' },
        options: [{ it: '1865', en: '1865' }, { it: '1883', en: '1883' }, { it: '1931', en: '1931' }],
        answer: 1,
        why: { it: 'Dopo circa 13 anni di lavori.', en: 'After about 13 years of work.' },
      },
      {
        q: { it: 'Quali animali lo attraversarono nel 1884?', en: 'Which animals crossed it in 1884?' },
        options: [{ it: 'Cavalli', en: 'Horses' }, { it: 'Cammelli', en: 'Camels' }, { it: 'Elefanti', en: 'Elephants' }],
        answer: 2,
        why: { it: '21 elefanti del circo Barnum.', en: '21 elephants from Barnum’s circus.' },
      },
    ],
  },
  {
    id: 'onu',
    emoji: '🇺🇳',
    borough: { it: 'Manhattan · East Side', en: 'Manhattan · East Side' },
    title: { it: 'Sede delle Nazioni Unite', en: 'United Nations Headquarters' },
    hook: {
      it: 'Quando entri all’ONU sei ancora negli Stati Uniti? Un mito da sfatare.',
      en: 'When you enter the UN, are you still in the United States? A myth to bust.',
    },
    youtubeId: '',
    deepDive: [
      {
        it: 'L’ONU nasce nel 1945, alla fine della Seconda guerra mondiale, con la firma della Carta a San Francisco. Il terreno sull’East River viene donato da John D. Rockefeller Jr.; nel 1947 l’ONU e gli Stati Uniti firmano l’Accordo sulla sede e il complesso, progettato da un gruppo internazionale di architetti tra cui Le Corbusier e Oscar Niemeyer, viene completato nel 1952.',
        en: 'The UN was born in 1945, at the end of the Second World War, when the Charter was signed in San Francisco. The East River site was donated by John D. Rockefeller Jr.; in 1947 the UN and the US signed the Headquarters Agreement, and the complex, designed by an international team including Le Corbusier and Oscar Niemeyer, was completed in 1952.',
      },
      {
        it: 'Si dice spesso che entrando all’ONU “non sei più negli Stati Uniti”. In realtà la sede resta territorio statunitense, ma è inviolabile: le autorità americane non possono entrare senza il permesso del Segretario Generale, e l’ONU ha le sue regole, i suoi francobolli e il suo servizio di sicurezza. Non è uno Stato, ma è un luogo che appartiene simbolicamente a tutti i 193 Stati membri.',
        en: 'People often say that inside the UN “you’re no longer in the United States”. In fact the site remains US territory, but it is inviolable: US authorities cannot enter without the Secretary-General’s consent, and the UN has its own rules, its own postage stamps and its own security service. It is not a state, but it symbolically belongs to all 193 Member States.',
      },
    ],
    keyDates: [
      { year: '1945', text: { it: 'Firma della Carta delle Nazioni Unite', en: 'UN Charter signed' } },
      { year: '1947', text: { it: 'Accordo sulla sede con gli USA', en: 'Headquarters Agreement with the US' } },
      { year: '1952', text: { it: 'Completamento del complesso', en: 'Complex completed' } },
      { year: '2015', text: { it: 'Adottata l’Agenda 2030', en: '2030 Agenda adopted' } },
    ],
    didYouKnow: {
      it: 'L’ufficio postale dell’ONU emette francobolli propri, validi solo se spediti dalla sede: è uno dei souvenir preferiti dai delegati.',
      en: 'The UN post office issues its own stamps, valid only when mailed from the Headquarters: a favourite souvenir among delegates.',
    },
    mun: {
      it: 'Nell’Assemblea Generale ogni Stato ha un voto, grande o piccolo che sia. Nel Consiglio di Sicurezza, invece, i cinque membri permanenti (Cina, Francia, Regno Unito, Russia, USA) hanno il diritto di veto. Pensa a quale dei due sistemi stai simulando nella tua commissione.',
      en: 'In the General Assembly every state has one vote, big or small. In the Security Council, the five permanent members (China, France, the UK, Russia, the US) hold a veto. Think about which system your committee is simulating.',
    },
    onSite: {
      it: 'Davanti all’ingresso dei visitatori cerca la scultura “Non-Violence”, la pistola con la canna annodata, dono del Lussemburgo.',
      en: 'At the visitors’ entrance look for the “Non-Violence” sculpture, the revolver with a knotted barrel, a gift from Luxembourg.',
    },
    quiz: [
      {
        q: { it: 'In che anno nasce l’ONU?', en: 'When was the UN founded?' },
        options: [{ it: '1919', en: '1919' }, { it: '1945', en: '1945' }, { it: '1952', en: '1952' }],
        answer: 1,
        why: { it: 'Nel 1945; il 1952 è l’anno del completamento della sede.', en: 'In 1945; 1952 is when the HQ was completed.' },
      },
      {
        q: { it: 'La sede ONU è uno Stato indipendente?', en: 'Is the UN HQ an independent state?' },
        options: [{ it: 'Sì, come il Vaticano', en: 'Yes, like the Vatican' }, { it: 'No, ma è inviolabile', en: 'No, but it is inviolable' }, { it: 'Sì, ma solo di notte', en: 'Yes, but only at night' }],
        answer: 1,
        why: { it: 'È territorio USA con uno status speciale.', en: 'It is US territory with special status.' },
      },
      {
        q: { it: 'Quanti sono gli Stati membri dell’ONU?', en: 'How many UN Member States are there?' },
        options: [{ it: '51', en: '51' }, { it: '193', en: '193' }, { it: '206', en: '206' }],
        answer: 1,
        why: { it: 'Erano 51 nel 1945, oggi sono 193.', en: 'There were 51 in 1945; today there are 193.' },
      },
    ],
  },
  {
    id: 'grand-central',
    emoji: '🚂',
    borough: { it: 'Manhattan · Midtown', en: 'Manhattan · Midtown' },
    title: { it: 'Grand Central Terminal', en: 'Grand Central Terminal' },
    hook: {
      it: 'A New York c’è un binario segreto che quasi nessuno vede.',
      en: 'New York has a secret platform almost nobody sees.',
    },
    youtubeId: '',
    deepDive: [
      {
        it: 'Grand Central Terminal apre nel 1913 ed è uno dei capolavori dell’ingegneria ferroviaria americana. Ha 44 banchine e 67 binari su due livelli sotterranei: è una delle stazioni con più binari al mondo. Negli anni Sessanta rischia la demolizione; la battaglia per salvarla, sostenuta anche da Jacqueline Kennedy, arriva fino alla Corte Suprema nel 1978 e cambia la tutela dei monumenti in America.',
        en: 'Grand Central Terminal opened in 1913 and is a masterpiece of American railway engineering. It has 44 platforms and 67 tracks on two underground levels: one of the stations with the most tracks in the world. In the 1960s it was threatened with demolition; the fight to save it, backed by Jacqueline Kennedy, reached the Supreme Court in 1978 and changed landmark protection in America.',
      },
      {
        it: 'Sotto l’hotel Waldorf-Astoria si trova il cosiddetto Binario 61, un binario di servizio non usato dai treni passeggeri. Si racconta che il presidente Franklin D. Roosevelt lo usasse per arrivare in hotel lontano dalla folla, senza mostrare in pubblico le difficoltà dovute alla poliomielite. Le prove sono soprattutto racconti dell’epoca: è una delle leggende più affascinanti della città.',
        en: 'Under the Waldorf-Astoria hotel lies the so-called Track 61, a service siding not used by passenger trains. It is said that President Franklin D. Roosevelt used it to reach the hotel away from crowds, without showing in public the difficulties caused by polio. The evidence is mostly accounts from the time: it is one of the city’s most fascinating legends.',
      },
    ],
    keyDates: [
      { year: '1913', text: { it: 'Inaugurazione del terminal', en: 'Terminal opens' } },
      { year: '1930s', text: { it: 'Roosevelt e il Binario 61 (si racconta)', en: 'Roosevelt and Track 61 (so they say)' } },
      { year: '1978', text: { it: 'La Corte Suprema la salva dalla demolizione', en: 'Supreme Court saves it from demolition' } },
      { year: '1998', text: { it: 'Restauro del soffitto stellato', en: 'Star ceiling restored' } },
    ],
    didYouKnow: {
      it: 'Il soffitto con le costellazioni dello zodiaco è dipinto “al contrario”, come visto da fuori della volta celeste. In un angolo è rimasto apposta un piccolo riquadro scuro: mostra quanto fosse sporco prima del restauro.',
      en: 'The zodiac ceiling is painted “backwards”, as if seen from outside the sky. A small dark patch was left on purpose in one corner: it shows how dirty it was before the restoration.',
    },
    mun: {
      it: 'La storia di Grand Central mostra come la tutela del patrimonio possa diventare una questione pubblica e legale: lo stesso principio che guida la Convenzione UNESCO del 1972 sul patrimonio mondiale.',
      en: 'Grand Central’s story shows how protecting heritage can become a public and legal issue: the same principle behind UNESCO’s 1972 World Heritage Convention.',
    },
    onSite: {
      it: 'Prova la “Whispering Gallery”, vicino all’Oyster Bar: mettetevi in due agli angoli opposti dell’arco e sussurrate verso il muro. Vi sentirete perfettamente!',
      en: 'Try the “Whispering Gallery” near the Oyster Bar: two of you stand in opposite corners of the arch and whisper into the wall. You’ll hear each other perfectly!',
    },
    quiz: [
      {
        q: { it: 'In che anno apre Grand Central Terminal?', en: 'When did Grand Central Terminal open?' },
        options: [{ it: '1883', en: '1883' }, { it: '1913', en: '1913' }, { it: '1931', en: '1931' }],
        answer: 1,
        why: { it: 'Nel 1913, dopo dieci anni di lavori.', en: 'In 1913, after ten years of work.' },
      },
      {
        q: { it: 'Sotto quale edificio si trova il Binario 61?', en: 'Under which building is Track 61?' },
        options: [{ it: 'Empire State Building', en: 'Empire State Building' }, { it: 'Waldorf-Astoria', en: 'Waldorf-Astoria' }, { it: 'Chrysler Building', en: 'Chrysler Building' }],
        answer: 1,
        why: { it: 'È un binario di servizio sotto l’hotel.', en: 'It is a service siding under the hotel.' },
      },
      {
        q: { it: 'Cosa c’è dipinto sul soffitto?', en: 'What is painted on the ceiling?' },
        options: [{ it: 'Una mappa di New York', en: 'A map of New York' }, { it: 'Le costellazioni', en: 'The constellations' }, { it: 'Treni storici', en: 'Historic trains' }],
        answer: 1,
        why: { it: 'Lo zodiaco, dipinto al contrario.', en: 'The zodiac, painted backwards.' },
      },
    ],
  },
  {
    id: 'empire-state',
    emoji: '🏙️',
    borough: { it: 'Manhattan · Midtown', en: 'Manhattan · Midtown' },
    title: { it: 'Empire State Building', en: 'Empire State Building' },
    hook: {
      it: 'Perché l’Empire State Building ha una punta così strana?',
      en: 'Why does the Empire State Building have such a strange tip?',
    },
    youtubeId: '',
    deepDive: [
      {
        it: 'Costruito tra il 1930 e il 1931, in piena Grande Depressione, l’Empire State Building sale in poco più di un anno: in alcune settimane cresce di più di quattro piani a settimana. È alto 381 metri fino al tetto, circa 443 con l’antenna, e ha 102 piani. Resta l’edificio più alto del mondo per quasi 40 anni, fino alle Torri Gemelle. Oggi il record di New York appartiene al One World Trade Center, 541 metri.',
        en: 'Built in 1930–31, in the depths of the Great Depression, the Empire State Building rose in just over a year: some weeks it grew more than four floors a week. It is 381 metres tall to the roof, about 443 with the antenna, and has 102 floors. It was the world’s tallest building for almost 40 years, until the Twin Towers. Today New York’s record belongs to One World Trade Center, at 541 metres.',
      },
      {
        it: 'La punta fu pensata come pilone d’attracco per i dirigibili, che allora sembravano il trasporto del futuro: i passeggeri sarebbero scesi direttamente nel cuore di Manhattan. Ma i venti fortissimi a quella quota resero l’idea praticamente impossibile, e dopo pochi tentativi fu abbandonata.',
        en: 'The tip was designed as a mooring mast for airships, which then looked like the transport of the future: passengers would step off right in the heart of Manhattan. But the very strong winds at that height made the idea practically impossible, and it was dropped after a few attempts.',
      },
    ],
    keyDates: [
      { year: '1930', text: { it: 'Iniziano i lavori', en: 'Construction begins' } },
      { year: '1931', text: { it: 'Inaugurazione', en: 'Opening' } },
      { year: '1970', text: { it: 'Superato dalle Torri Gemelle', en: 'Overtaken by the Twin Towers' } },
      { year: '2014', text: { it: 'One WTC diventa il più alto di NY', en: 'One WTC becomes NY’s tallest' } },
    ],
    didYouKnow: {
      it: 'Nei primi anni gran parte degli uffici rimase vuota per la crisi economica, tanto che i newyorkesi lo chiamavano “Empty State Building”. A salvarlo furono i biglietti dell’osservatorio.',
      en: 'In its early years much of the office space stayed empty because of the Depression, so New Yorkers nicknamed it the “Empty State Building”. Observatory tickets kept it going.',
    },
    mun: {
      it: 'Le luci della cima cambiano colore per ricordare eventi e cause internazionali: ogni anno, intorno al 24 ottobre, si illumina di azzurro per la Giornata delle Nazioni Unite.',
      en: 'The lights at the top change colour to mark international events and causes: every year, around 24 October, it glows blue for United Nations Day.',
    },
    onSite: {
      it: 'Dall’osservatorio dell’86° piano cerca: Central Park a nord, la Statua della Libertà a sud, il Chrysler Building a est. La visita guidata completa arriverà nella sezione “Visite guidate”.',
      en: 'From the 86th-floor observatory find: Central Park to the north, the Statue of Liberty to the south, the Chrysler Building to the east. The full guided tour is coming in the “Guided tours” section.',
    },
    quiz: [
      {
        q: { it: 'A cosa doveva servire la punta?', en: 'What was the tip meant for?' },
        options: [{ it: 'Antenna radio', en: 'Radio antenna' }, { it: 'Attracco per dirigibili', en: 'Airship mooring' }, { it: 'Faro per le navi', en: 'Lighthouse for ships' }],
        answer: 1,
        why: { it: 'Il vento rese l’idea impossibile.', en: 'The wind made the idea impossible.' },
      },
      {
        q: { it: 'Quanti piani ha?', en: 'How many floors does it have?' },
        options: [{ it: '86', en: '86' }, { it: '102', en: '102' }, { it: '110', en: '110' }],
        answer: 1,
        why: { it: '102 piani; l’osservatorio principale è all’86°.', en: '102 floors; the main observatory is on the 86th.' },
      },
      {
        q: { it: 'Qual è oggi il grattacielo più alto di New York?', en: 'What is New York’s tallest skyscraper today?' },
        options: [{ it: 'One World Trade Center', en: 'One World Trade Center' }, { it: 'Chrysler Building', en: 'Chrysler Building' }, { it: 'Empire State Building', en: 'Empire State Building' }],
        answer: 0,
        why: { it: '541 metri, simbolicamente 1776 piedi.', en: '541 metres, symbolically 1,776 feet.' },
      },
    ],
  },
  {
    id: 'times-square',
    emoji: '🌃',
    borough: { it: 'Manhattan · Midtown', en: 'Manhattan · Midtown' },
    title: { it: 'Times Square', en: 'Times Square' },
    hook: { it: 'Perché Times Square si chiama così?', en: 'Why is Times Square called that?' },
    youtubeId: '',
    deepDive: [
      {
        it: 'Times Square è l’incrocio tra Broadway e la Seventh Avenue, tra la 42ª e la 47ª Street. A inizio Novecento era Longacre Square, una zona poco sviluppata piena di stalle e officine di carrozze. Nel 1904 il New York Times vi trasferisce la sede nel nuovo Times Building, e la città rinomina la piazza in suo onore.',
        en: 'Times Square is where Broadway crosses Seventh Avenue, between 42nd and 47th Streets. In the early 1900s it was Longacre Square, an underdeveloped area full of stables and carriage shops. In 1904 The New York Times moved into the new Times Building there, and the city renamed the square in its honour.',
      },
      {
        it: 'Per festeggiare, il giornale organizza uno spettacolo pirotecnico per il Capodanno 1904. Dal 1907 la tradizione diventa la discesa della “ball”, la sfera luminosa che scende a mezzanotte, ancora oggi seguita da circa un miliardo di persone nel mondo. Il giornale ha lasciato quella sede da tempo, ma il nome è rimasto.',
        en: 'To celebrate, the paper staged a fireworks show for New Year’s Eve 1904. From 1907 the tradition became the “ball drop”, the lit sphere that descends at midnight, still watched by around a billion people worldwide. The paper left that building long ago, but the name stayed.',
      },
    ],
    keyDates: [
      { year: '1904', text: { it: 'Da Longacre Square a Times Square', en: 'Longacre Square becomes Times Square' } },
      { year: '1907', text: { it: 'Prima discesa della “ball”', en: 'First ball drop' } },
      { year: '1945', text: { it: 'Festa per la fine della guerra (V-J Day)', en: 'End-of-war celebration (V-J Day)' } },
      { year: '2009', text: { it: 'La piazza diventa pedonale', en: 'The square goes pedestrian' } },
    ],
    didYouKnow: {
      it: 'Le regole urbanistiche obbligano gli edifici della zona ad avere grandi insegne luminose: a Times Square la pubblicità non è solo permessa, è richiesta!',
      en: 'Zoning rules require buildings in the area to carry large illuminated signs: in Times Square advertising isn’t just allowed, it’s required!',
    },
    mun: {
      it: 'Nel 1945 Times Square fu il cuore delle celebrazioni per la fine della Seconda guerra mondiale, la stessa guerra da cui nacque l’ONU. Una piazza, due momenti storici collegati.',
      en: 'In 1945 Times Square was the heart of the celebrations for the end of the Second World War, the very war that led to the UN’s founding. One square, two linked moments in history.',
    },
    onSite: {
      it: 'Cerca One Times Square, l’edificio stretto con la sfera di Capodanno in cima: è l’ex Times Building. Poi siediti sulle scalinate rosse (TKTS) per la foto panoramica.',
      en: 'Find One Times Square, the narrow building with the New Year’s ball on top: it’s the former Times Building. Then sit on the red steps (TKTS) for the panoramic photo.',
    },
    quiz: [
      {
        q: { it: 'Come si chiamava prima Times Square?', en: 'What was Times Square called before?' },
        options: [{ it: 'Longacre Square', en: 'Longacre Square' }, { it: 'Herald Square', en: 'Herald Square' }, { it: 'Union Square', en: 'Union Square' }],
        answer: 0,
        why: { it: 'Era una zona di stalle e carrozze.', en: 'It was an area of stables and carriages.' },
      },
      {
        q: { it: 'Da cosa prende il nome?', en: 'What is it named after?' },
        options: [{ it: 'Un orologio gigante', en: 'A giant clock' }, { it: 'Il New York Times', en: 'The New York Times' }, { it: 'Un sindaco', en: 'A mayor' }],
        answer: 1,
        why: { it: 'Il giornale vi spostò la sede nel 1904.', en: 'The paper moved there in 1904.' },
      },
      {
        q: { it: 'Cosa succede qui ogni Capodanno?', en: 'What happens here every New Year’s Eve?' },
        options: [{ it: 'Una parata di elefanti', en: 'An elephant parade' }, { it: 'La discesa della sfera luminosa', en: 'The ball drop' }, { it: 'Una regata', en: 'A regatta' }],
        answer: 1,
        why: { it: 'Una tradizione nata nel 1907.', en: 'A tradition since 1907.' },
      },
    ],
  },
  {
    id: 'central-park',
    emoji: '🌳',
    borough: { it: 'Manhattan', en: 'Manhattan' },
    title: { it: 'Central Park', en: 'Central Park' },
    hook: { it: 'Central Park è naturale? Assolutamente no.', en: 'Is Central Park natural? Not at all.' },
    youtubeId: '',
    deepDive: [
      {
        it: 'Nel 1857 New York decide di creare un grande parco pubblico nel cuore di Manhattan. Il concorso lo vincono Frederick Law Olmsted e Calvert Vaux con il “Greensward Plan”. Il parco è lungo circa 4 km e largo 800 metri, tra la 59ª e la 110ª Street, fra Upper West Side e Upper East Side.',
        en: 'In 1857 New York decided to create a great public park in the heart of Manhattan. Frederick Law Olmsted and Calvert Vaux won the competition with the “Greensward Plan”. The park is about 4 km long and 800 metres wide, from 59th to 110th Street, between the Upper West Side and the Upper East Side.',
      },
      {
        it: 'Quasi tutto è artificiale: laghi, colline, boschi e sentieri sono stati modellati dall’uomo, spostando enormi quantità di terra e roccia e piantando milioni di alberi e arbusti. Le strade per le auto passano in trincea, più in basso, così chi passeggia quasi non le vede. Per costruirlo fu demolito anche Seneca Village, una comunità abitata soprattutto da afroamericani proprietari delle proprie case.',
        en: 'Almost everything is man-made: lakes, hills, woods and paths were shaped by people, moving huge amounts of earth and rock and planting millions of trees and shrubs. The roads for cars run in sunken trenches, so walkers barely see them. Building it also meant demolishing Seneca Village, a community made up mostly of African American homeowners.',
      },
    ],
    keyDates: [
      { year: '1857', text: { it: 'Vince il Greensward Plan', en: 'Greensward Plan wins' } },
      { year: '1858', text: { it: 'Iniziano i lavori', en: 'Construction begins' } },
      { year: '1876', text: { it: 'Il parco è sostanzialmente completato', en: 'Park essentially completed' } },
      { year: '1980', text: { it: 'Nasce la Central Park Conservancy', en: 'Central Park Conservancy founded' } },
    ],
    didYouKnow: {
      it: 'Nel parco ci sono decine di ponti e archi, tutti diversi tra loro: Olmsted e Vaux vollero che nessuno fosse uguale a un altro.',
      en: 'The park has dozens of bridges and arches, each one different: Olmsted and Vaux wanted no two to be alike.',
    },
    mun: {
      it: 'Il verde urbano aiuta contro il caldo e l’inquinamento: è l’Obiettivo 11 dell’Agenda 2030, “Città e comunità sostenibili”. La storia di Seneca Village, invece, apre il tema del diritto alla casa.',
      en: 'Urban green space helps fight heat and pollution: it’s Goal 11 of the 2030 Agenda, “Sustainable cities and communities”. The story of Seneca Village raises the issue of the right to housing.',
    },
    onSite: {
      it: 'Da Bethesda Terrace guarda il lago: sembra naturale, ma è stato scavato. Poi cerca Bow Bridge, il ponte in ghisa più famoso del parco.',
      en: 'From Bethesda Terrace look at the lake: it looks natural, but it was dug out. Then find Bow Bridge, the park’s most famous cast-iron bridge.',
    },
    quiz: [
      {
        q: { it: 'Chi progettò Central Park?', en: 'Who designed Central Park?' },
        options: [{ it: 'Olmsted e Vaux', en: 'Olmsted and Vaux' }, { it: 'Roebling e figlio', en: 'Roebling and son' }, { it: 'Bartholdi ed Eiffel', en: 'Bartholdi and Eiffel' }],
        answer: 0,
        why: { it: 'Con il Greensward Plan del 1857.', en: 'With the 1857 Greensward Plan.' },
      },
      {
        q: { it: 'I laghi del parco sono…', en: 'The park’s lakes are…' },
        options: [{ it: 'Naturali', en: 'Natural' }, { it: 'Artificiali', en: 'Man-made' }, { it: 'Antichi crateri', en: 'Ancient craters' }],
        answer: 1,
        why: { it: 'Quasi tutto il paesaggio è progettato.', en: 'Almost the entire landscape was designed.' },
      },
      {
        q: { it: 'Quanto è lungo circa il parco?', en: 'About how long is the park?' },
        options: [{ it: '1 km', en: '1 km' }, { it: '4 km', en: '4 km' }, { it: '10 km', en: '10 km' }],
        answer: 1,
        why: { it: 'Circa 4 km per 800 metri.', en: 'About 4 km by 800 metres.' },
      },
    ],
  },
]
