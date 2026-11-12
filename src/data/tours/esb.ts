import type { Tour } from './types'

// Piantina SCHEMATICA dei piani visitati (non in scala). Le sale non hanno numeri: ricerca per nome.
export const esb: Tour = {
  id: 'esb',
  emoji: '🏙️',
  name: { it: 'Empire State Building', en: 'Empire State Building' },
  duration: { it: '1 ora circa · 5 tappe', en: 'About 1 hour · 5 stops' },
  intro: {
    it: 'Dalla strada al cielo: l’ingresso su 34th Street, le gallerie del 2° piano sulla costruzione del grattacielo, l’80° piano e infine la terrazza all’aperto dell’86°, con la vista interattiva a 360° su tutta New York.',
    en: 'From street to sky: the 34th Street entrance, the 2nd-floor galleries on how the skyscraper was built, the 80th floor and finally the open-air 86th-floor deck, with the interactive 360° view over all of New York.',
  },
  closuresUrl: 'https://www.esbnyc.com/',
  entrance: { it: 'Ingresso visitatori: 20 West 34th Street', en: 'Visitor entrance: 20 West 34th Street' },
  roomSearch: true,
  floors: [
    {
      id: '1',
      label: { it: 'Ingresso', en: 'Entrance' },
      street: { label: { it: 'Fifth Avenue', en: 'Fifth Avenue' }, side: 'right' },
      zones: [
        { label: { it: 'Ingresso osservatorio (34th St)', en: 'Observatory entrance (34th St)' }, x: 120, y: 190, w: 160, h: 55, tone: '#f7c948' },
        { label: { it: 'Lobby Art Déco', en: 'Art Deco Lobby' }, x: 230, y: 80, w: 125, h: 90 },
        { label: { it: 'Ascensori', en: 'Elevators' }, x: 120, y: 80, w: 100, h: 90 },
      ],
    },
    {
      id: '2',
      label: { it: '2° piano', en: '2nd floor' },
      zones: [
        { label: { it: 'Gallerie: la costruzione', en: 'Galleries: construction' }, x: 30, y: 30, w: 160, h: 100 },
        { label: { it: 'Ascensori, energia, cinema', en: 'Elevators, energy, film' }, x: 200, y: 30, w: 160, h: 100 },
        { label: { it: 'Verso l’80° piano', en: 'To the 80th floor' }, x: 120, y: 150, w: 160, h: 60, tone: '#f7c948' },
      ],
    },
    {
      id: '80',
      label: { it: '80° piano', en: '80th floor' },
      zones: [
        { label: { it: 'Luci della torre e città', en: 'Tower lights & the city' }, x: 60, y: 40, w: 280, h: 140 },
      ],
    },
    {
      id: '86',
      label: { it: '86° piano', en: '86th floor' },
      zones: [
        { label: { it: 'Lato nord: Midtown, Central Park', en: 'North: Midtown, Central Park' }, x: 60, y: 4, w: 280, h: 46, tone: '#dbeafe' },
        { label: { it: 'Lato sud: Downtown, Statua', en: 'South: Downtown, Statue' }, x: 60, y: 200, w: 280, h: 46, tone: '#dbeafe' },
        { label: { it: 'Ovest: Hudson', en: 'West: Hudson' }, x: 14, y: 55, w: 80, h: 140, tone: '#dbeafe' },
        { label: { it: 'Est: ONU, Queens', en: 'East: UN, Queens' }, x: 306, y: 55, w: 80, h: 140, tone: '#dbeafe' },
        { label: { it: 'Torre', en: 'Tower' }, x: 140, y: 80, w: 120, h: 90, tone: '#f7c948' },
      ],
    },
  ],
  stops: [
    {
      id: 'entrance',
      galleries: ['ingresso', 'entrance', '34th', 'lobby', 'atrio', 'piano terra'],
      floor: '1',
      pin: { x: 200, y: 210 },
      minutes: 5,
      title: { it: 'La corsa verso il cielo', en: 'The race to the sky' },
      area: { it: 'Ingresso su 34th Street', en: '34th Street entrance' },
      directions: {
        it: 'L’ingresso per i visitatori è su 34th Street, tra la Fifth e la Sixth Avenue. Dopo i controlli di sicurezza seguite il percorso verso il 2° piano.',
        en: 'The visitor entrance is on 34th Street, between Fifth and Sixth Avenues. After security, follow the route up to the 2nd floor.',
      },
      audio: {
        it: 'Benvenuti all’Empire State Building, forse il grattacielo più famoso del mondo. Il video vi ha già raccontato la sua punta pensata per i dirigibili. Ora scopriremo come è stato costruito, chi lo ha costruito e, alla fine, saliremo fino alla terrazza dell’86° piano, dove l’app vi mostrerà una vista interattiva di tutta la città. Tenete il telefono carico: lassù vi servirà!',
        en: 'Welcome to the Empire State Building, perhaps the most famous skyscraper in the world. The video already told you about its tip designed for airships. Now we’ll discover how it was built and who built it, and finally we’ll go up to the 86th-floor deck, where the app will show you an interactive view of the whole city. Keep your phone charged: you’ll need it up there!',
      },
      works: [
        {
          title: { it: 'La gara dei grattacieli', en: 'The skyscraper race' },
          date: '1929–1931',
          note: { it: 'Architetti: Shreve, Lamb & Harmon. Inaugurazione: 1° maggio 1931.', en: 'Architects: Shreve, Lamb & Harmon. Opened: 1 May 1931.' },
          audio: {
            it: 'Alla fine degli anni Venti, New York è in piena euforia. L’economia corre, e i grandi imprenditori fanno a gara per costruire il grattacielo più alto del mondo, come simbolo del proprio potere. In corsa ci sono il Chrysler Building, voluto dal re delle automobili Walter Chrysler, e un grattacielo di Wall Street. Nel 1929 entrano in gara anche John Jakob Raskob, un dirigente della General Motors, grande rivale della Chrysler, e Al Smith, ex governatore dello Stato di New York. Il loro progetto è semplice e ambizioso: superare tutti. Racconta una leggenda che Raskob, per spiegare agli architetti che cosa voleva, prese una matita, la tenne in verticale e chiese: “Quanto in alto potete farlo senza che cada?”. Poi, il 29 ottobre 1929, crolla la Borsa di Wall Street: è l’inizio della Grande Depressione. Molti progetti vengono abbandonati, ma l’Empire State va avanti. I lavori iniziano nel marzo 1930 e procedono a una velocità mai vista. Intanto il Chrysler Building, con il trucco della guglia montata in segreto, conquista il record. Ma per poco: l’Empire State aggiunge piani e la sua famosa punta, arrivando a 381 metri fino al tetto. Il 1° maggio 1931 il presidente degli Stati Uniti Herbert Hoover, da Washington, preme un pulsante che accende simbolicamente le luci dell’edificio. L’Empire State resterà il più alto del mondo per quasi quarant’anni. Ma, come vi ha raccontato il video, all’inizio molti uffici rimasero vuoti: per anni fu chiamato “Empty State Building”. Se all’uscita passate dalla lobby su Fifth Avenue, alzate gli occhi: soffitti dorati in stile Art Déco e un grande rilievo dell’edificio con raggi di luce, il simbolo di un’epoca che credeva nel futuro.',
            en: 'At the end of the 1920s New York is in full euphoria. The economy is booming, and great businessmen compete to build the world’s tallest skyscraper as a symbol of their power. In the race are the Chrysler Building, commissioned by car king Walter Chrysler, and a Wall Street tower. In 1929 John Jakob Raskob, a General Motors executive and big rival of Chrysler, joins the race together with Al Smith, a former governor of New York State. Their plan is simple and ambitious: beat everyone. Legend has it that Raskob, to explain to the architects what he wanted, held a pencil upright and asked: “How high can you make it so that it won’t fall down?”. Then, on 29 October 1929, the Wall Street stock market crashes: it is the start of the Great Depression. Many projects are abandoned, but the Empire State goes ahead. Work starts in March 1930 and moves at an unprecedented speed. Meanwhile the Chrysler Building, with its secretly assembled spire, takes the record. But not for long: the Empire State adds floors and its famous tip, reaching 381 metres to the roof. On 1 May 1931 the President of the United States, Herbert Hoover, presses a button in Washington that symbolically turns on the building’s lights. The Empire State will remain the world’s tallest for almost forty years. But, as the video told you, at first many offices stayed empty: for years it was called the “Empty State Building”. If on the way out you pass through the Fifth Avenue lobby, look up: golden Art Deco ceilings and a large relief of the building with rays of light, the symbol of an age that believed in the future.',
          },
        },
      ],
      games: [
        {
          kind: 'order',
          prompt: { it: 'Metti in ordine i “grattacieli più alti del mondo” di New York', en: 'Put New York’s “world’s tallest” skyscrapers in order' },
          items: [
            { label: { it: 'Woolworth Building', en: 'Woolworth Building' }, tag: '1913' },
            { label: { it: 'Chrysler Building', en: 'Chrysler Building' }, tag: '1930' },
            { label: { it: 'Empire State Building', en: 'Empire State Building' }, tag: '1931' },
            { label: { it: 'Torri Gemelle (World Trade Center)', en: 'Twin Towers (World Trade Center)' }, tag: '1970–72' },
          ],
        },
      ],
    },
    {
      id: 'construction',
      galleries: ['costruzione', 'construction', 'operai', 'workers', 'hine', '2° piano', 'second floor', 'gallerie'],
      floor: '2',
      pin: { x: 110, y: 85 },
      minutes: 10,
      title: { it: 'Costruito in poco più di un anno', en: 'Built in just over a year' },
      area: { it: '2° piano · gallerie sulla costruzione', en: '2nd floor · construction galleries' },
      directions: {
        it: 'Al 2° piano seguite il percorso delle gallerie: cercate le statue in bronzo degli operai e le grandi fotografie in bianco e nero.',
        en: 'On the 2nd floor follow the gallery route: look for the bronze statues of workers and the large black-and-white photographs.',
      },
      audio: {
        it: 'Le gallerie del secondo piano raccontano la parte più incredibile di questa storia: la costruzione. Pensate che l’intero grattacielo fu completato in poco più di un anno, in circa 410 giorni. Oggi, con macchinari molto più moderni, edifici simili richiedono molto più tempo.',
        en: 'The second-floor galleries tell the most incredible part of this story: the construction. Consider that the whole skyscraper was completed in just over a year, in about 410 days. Today, with far more modern machinery, similar buildings take much longer.',
      },
      works: [
        {
          title: { it: 'Gli uomini del cielo', en: 'The sky boys' },
          artist: { it: 'Fotografie di Lewis Hine', en: 'Photographs by Lewis Hine' },
          date: '1930–1931',
          note: { it: 'Fino a circa 3.400 operai al lavoro nello stesso giorno.', en: 'Up to about 3,400 workers on site in a single day.' },
          audio: {
            it: 'Guardate le fotografie e le statue degli operai in equilibrio sulle travi d’acciaio, a centinaia di metri d’altezza, senza imbracature né reti di sicurezza. Molte di queste immagini sono di Lewis Hine, un fotografo che prima aveva documentato il lavoro minorile nelle fabbriche americane, contribuendo a far approvare leggi per proteggere i bambini. Qui voleva mostrare la dignità e il coraggio dei lavoratori. Nei giorni di massima attività, lavoravano in cantiere fino a circa 3.400 persone. C’erano carpentieri, muratori, elettricisti, idraulici, e tantissimi immigrati: italiani, irlandesi, polacchi, ebrei dell’Europa orientale. Tra i più esperti nel lavorare in altezza c’erano gli operai mohawk, nativi americani della comunità di Kahnawake, in Canada, famosi per la loro abilità sulle travi. Il cantiere funzionava come una catena di montaggio. Le travi d’acciaio arrivavano dalle acciaierie della Pennsylvania già numerate e tagliate su misura, e venivano montate poche ore dopo l’arrivo. I rivetti venivano scaldati fino a diventare incandescenti in piccoli forni, poi lanciati con le pinze da un operaio all’altro, afferrati al volo dentro un secchio e martellati nella trave. In alcune settimane l’edificio crebbe di più di quattro piani. Per non perdere tempo, ai piani alti c’erano perfino mense e punti di ristoro, così gli operai non dovevano scendere per pranzo. Il lavoro era però pericolosissimo: secondo i dati ufficiali, durante la costruzione morirono cinque operai. Pensate a queste persone ogni volta che salite su un grattacielo: la città che vedrete dall’alto è stata costruita da mani come le loro, molte delle quali venivano dall’Italia.',
            en: 'Look at the photographs and the statues of workers balancing on steel beams hundreds of metres up, with no harnesses or safety nets. Many of these images are by Lewis Hine, a photographer who had earlier documented child labour in American factories, helping to pass laws to protect children. Here he wanted to show the dignity and courage of the workers. On the busiest days up to about 3,400 people worked on site. There were carpenters, bricklayers, electricians, plumbers and many immigrants: Italians, Irish, Poles, Eastern European Jews. Among the most skilled at working at height were Mohawk ironworkers, Native Americans from the Kahnawake community in Canada, famous for their skill on the beams. The site worked like an assembly line. Steel beams arrived from the Pennsylvania mills already numbered and cut to size, and were put in place within hours of arriving. Rivets were heated red-hot in small forges, then tossed with tongs from one worker to another, caught in a bucket and hammered into the beam. Some weeks the building grew by more than four floors. To save time there were even canteens on the upper floors, so workers didn’t have to go down for lunch. The work was very dangerous, though: according to official figures, five workers died during construction. Think of these people whenever you go up a skyscraper: the city you’ll see from above was built by hands like theirs, many of them from Italy.',
          },
        },
      ],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'In quanto tempo fu costruito l’Empire State?', en: 'How long did it take to build the Empire State?' },
              options: [{ it: 'Poco più di un anno', en: 'Just over a year' }, { it: 'Cinque anni', en: 'Five years' }, { it: 'Dieci anni', en: 'Ten years' }],
              answer: 0,
              why: { it: 'Circa 410 giorni, dal marzo 1930 al maggio 1931.', en: 'About 410 days, from March 1930 to May 1931.' },
            },
            {
              q: { it: 'Cosa aveva fotografato Lewis Hine prima dell’Empire State?', en: 'What had Lewis Hine photographed before the Empire State?' },
              options: [{ it: 'Le stelle del cinema', en: 'Film stars' }, { it: 'Il lavoro minorile nelle fabbriche', en: 'Child labour in factories' }, { it: 'La Prima guerra mondiale', en: 'The First World War' }],
              answer: 1,
              why: { it: 'Le sue foto aiutarono a far approvare leggi contro lo sfruttamento dei bambini.', en: 'His photos helped pass laws against child exploitation.' },
            },
          ],
        },
      ],
    },
    {
      id: 'elevators-film',
      galleries: ['ascensori', 'elevators', 'otis', 'king kong', 'cinema', 'film', 'energia', 'energy'],
      floor: '2',
      pin: { x: 280, y: 85 },
      minutes: 10,
      title: { it: 'Ascensori, un aereo e King Kong', en: 'Elevators, a plane and King Kong' },
      area: { it: '2° piano · gallerie', en: '2nd floor · galleries' },
      directions: {
        it: 'Proseguite nelle gallerie del 2° piano: troverete la sala degli ascensori Otis, quella sull’energia e la galleria dedicata al cinema, con la mano gigante di King Kong.',
        en: 'Continue through the 2nd-floor galleries: you’ll find the Otis elevator room, the one on energy and the gallery devoted to film, with King Kong’s giant hand.',
      },
      audio: {
        it: 'Un grattacielo non è solo acciaio e cemento: è anche tecnologia. Senza ascensori sicuri e veloci, nessuno avrebbe mai salito ottanta piani a piedi. E un edificio così famoso è diventato anche un protagonista della storia e del cinema.',
        en: 'A skyscraper isn’t just steel and concrete: it’s also technology. Without safe, fast elevators nobody would ever have climbed eighty floors on foot. And such a famous building has also become a star of history and film.',
      },
      works: [
        {
          title: { it: 'Ascensori, un incidente e una sopravvissuta', en: 'Elevators, an accident and a survivor' },
          date: '1931 · 1945 · 2010',
          note: { it: 'Oltre 70 ascensori. Il 28 luglio 1945 un bombardiere colpì il 79° piano.', en: 'More than 70 elevators. On 28 July 1945 a bomber hit the 79th floor.' },
          audio: {
            it: 'I grattacieli sono nati grazie a un’invenzione: il freno di sicurezza per ascensori, presentato da Elisha Otis a New York nel 1854. Otis salì su una piattaforma sospesa, fece tagliare la corda davanti al pubblico, e la piattaforma si bloccò. Da quel momento salire in alto diventò sicuro. L’Empire State ha oltre settanta ascensori, e quelli che vi porteranno all’80° piano salgono in meno di un minuto. Ma questo edificio ha vissuto anche un giorno terribile. Il 28 luglio 1945, pochi giorni prima della fine della Seconda guerra mondiale, un bombardiere B-25 dell’esercito americano, perso nella nebbia, si schiantò contro il 79° piano. Morirono quattordici persone. Un motore attraversò l’edificio da parte a parte. E qui c’è una storia incredibile: una giovane addetta agli ascensori, Betty Lou Oliver, rimase ferita e fu messa in un ascensore per essere portata giù. Ma i cavi, danneggiati dall’incidente, si spezzarono, e l’ascensore precipitò per circa 75 piani. Betty sopravvisse, grazie ai freni di sicurezza e all’aria compressa nel vano: ancora oggi è un record mondiale. Due giorni dopo, l’edificio era già di nuovo aperto. Facciamo un salto ai giorni nostri: tra il 2009 e il 2010 l’Empire State è stato oggetto di un grande progetto di risparmio energetico. Le sue oltre seimila finestre sono state smontate e rinnovate direttamente nell’edificio, aggiungendo strati isolanti. Il consumo di energia è calato di quasi il 40 per cento. Un esempio importante, perché gli edifici sono tra le principali fonti di emissioni nelle città: anche un grattacielo del 1931 può diventare più sostenibile.',
            en: 'Skyscrapers were made possible by one invention: the elevator safety brake, demonstrated by Elisha Otis in New York in 1854. Otis stood on a raised platform, had the rope cut in front of the crowd, and the platform locked in place. From then on, going up high was safe. The Empire State has more than seventy elevators, and the ones taking you to the 80th floor climb in under a minute. But this building also lived through a terrible day. On 28 July 1945, a few days before the end of the Second World War, a US Army B-25 bomber, lost in fog, crashed into the 79th floor. Fourteen people died. One engine went right through the building. And here is an incredible story: a young elevator operator, Betty Lou Oliver, was injured and placed in an elevator to be taken down. But the cables, damaged in the crash, snapped, and the car fell about 75 floors. Betty survived, thanks to the safety brakes and the compressed air in the shaft: it is still a world record. Two days later the building was already open again. Let’s jump to the present: in 2009–2010 the Empire State underwent a major energy-saving project. Its more than six thousand windows were taken out and refurbished inside the building, adding insulating layers. Energy use dropped by almost 40 percent. An important example, since buildings are among the main sources of emissions in cities: even a 1931 skyscraper can become more sustainable.',
          },
        },
        {
          title: { it: 'King Kong e il cinema', en: 'King Kong and the movies' },
          date: '1933 – oggi / today',
          note: { it: 'L’edificio è apparso in centinaia di film e serie.', en: 'The building has appeared in hundreds of films and series.' },
          audio: {
            it: 'Nel 1933 uscì un film destinato a diventare leggendario: King Kong. Un gigantesco gorilla, catturato su un’isola misteriosa e portato a New York come attrazione, fugge e si arrampica fino in cima all’Empire State Building, dove combatte contro gli aerei. La scena finale è una delle più famose della storia del cinema. Il film uscì in piena Grande Depressione, quando l’edificio era nuovo, alto e ancora in gran parte vuoto: la storia del mostro in cima al grattacielo divenne un simbolo dell’epoca, tra paura e meraviglia per la modernità. Da allora l’Empire State è apparso in centinaia di film, serie televisive, cartoni animati e videogiochi. Nelle commedie romantiche come “Insonnia d’amore” la terrazza dell’86° piano è il luogo degli appuntamenti del destino; nei film di fantascienza è spesso il primo edificio colpito dagli alieni. Perché proprio lui? Perché, per oltre un secolo, l’Empire State è stato il simbolo stesso di New York e dell’America: ambizione, modernità, sogno. Quando un regista vuole dire allo spettatore “siamo a New York” con una sola immagine, inquadra questa punta. Una curiosità: nel 1983, per il cinquantesimo anniversario del film, sulla punta del grattacielo fu gonfiato un enorme King Kong. Ma il vento lo bucò ripetutamente e l’impresa fu un mezzo fallimento. Nelle gallerie potete farvi una foto con la mano del gorilla: è uno dei punti più fotografati dell’edificio. Poi prendete gli ascensori: si sale all’80° piano.',
            en: 'In 1933 a film came out that was destined to become legendary: King Kong. A gigantic gorilla, captured on a mysterious island and brought to New York as an attraction, escapes and climbs to the top of the Empire State Building, where he fights off aeroplanes. The final scene is one of the most famous in film history. The film came out in the depths of the Great Depression, when the building was new, tall and still largely empty: the story of the monster on top of the skyscraper became a symbol of the age, between fear and wonder at modernity. Since then the Empire State has appeared in hundreds of films, TV series, cartoons and video games. In romantic comedies like “Sleepless in Seattle” the 86th-floor deck is the place of fateful meetings; in science fiction films it is often the first building hit by aliens. Why this one? Because for nearly a century the Empire State has been the very symbol of New York and America: ambition, modernity, dreams. When a director wants to tell the audience “we’re in New York” with a single shot, they frame this tip. A curiosity: in 1983, for the film’s fiftieth anniversary, a huge inflatable King Kong was put up on the tower. But the wind kept tearing it and the stunt was half a failure. In the galleries you can take a photo with the gorilla’s hand: it’s one of the most photographed spots in the building. Then take the elevators: up to the 80th floor.',
          },
        },
      ],
      games: [
        {
          kind: 'match',
          prompt: { it: 'Abbina l’anno all’evento', en: 'Match the year to the event' },
          pairs: [
            [{ it: '1854', en: '1854' }, { it: 'Otis presenta il freno di sicurezza', en: 'Otis demonstrates the safety brake' }],
            [{ it: '1931', en: '1931' }, { it: 'Inaugurazione dell’Empire State', en: 'Empire State opens' }],
            [{ it: '1933', en: '1933' }, { it: 'Esce il film King Kong', en: 'King Kong is released' }],
            [{ it: '1945', en: '1945' }, { it: 'Un bombardiere colpisce il 79° piano', en: 'A bomber hits the 79th floor' }],
          ],
        },
      ],
    },
    {
      id: 'eightieth',
      galleries: ['80', '80°', '80th', 'luci', 'lights', 'ottantesimo'],
      floor: '80',
      pin: { x: 200, y: 110 },
      minutes: 5,
      title: { it: 'L’80° piano e le luci della torre', en: 'The 80th floor and the tower lights' },
      area: { it: '80° piano', en: '80th floor' },
      directions: {
        it: 'Gli ascensori vi portano all’80° piano: è uno spazio al chiuso con le prime vetrate sulla città. Da qui si prosegue verso l’86°.',
        en: 'The elevators take you to the 80th floor: an indoor space with the first windows onto the city. From here you continue to the 86th.',
      },
      audio: {
        it: 'Benvenuti all’80° piano: avete appena salito circa 300 metri in meno di un minuto. Guardate fuori dalle vetrate: è un’anteprima di ciò che vedrete tra poco all’aperto. Qui il racconto si allarga dall’edificio alla città. Una sezione è dedicata alle luci della torre: dal 2012 la punta dell’Empire State è illuminata da un sistema a LED capace di produrre milioni di colori diversi, anche in movimento. Ogni sera i colori cambiano per celebrare feste, ricorrenze, squadre sportive, cause umanitarie e Paesi di tutto il mondo. Sono un vero linguaggio, che i newyorkesi imparano a leggere alzando lo sguardo. Questa sera, quando sarete per strada, cercate la punta illuminata: di che colore sarà? Ora preparate il telefono e salite all’86° piano: vi aspetta la vista più famosa di New York.',
        en: 'Welcome to the 80th floor: you’ve just risen about 300 metres in under a minute. Look out of the windows: it’s a preview of what you’ll soon see outdoors. Here the story widens from the building to the city. One section is devoted to the tower lights: since 2012 the top of the Empire State has been lit by an LED system able to produce millions of different colours, even in motion. Every evening the colours change to celebrate holidays, anniversaries, sports teams, humanitarian causes and countries all over the world. They are a real language that New Yorkers learn to read by looking up. Tonight, when you’re out in the street, look for the lit-up top: what colour will it be? Now get your phone ready and go up to the 86th floor: New York’s most famous view awaits.',
      },
      works: [],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'Perché le luci della torre cambiano colore?', en: 'Why do the tower lights change colour?' },
              options: [{ it: 'Per segnalare il meteo', en: 'To signal the weather' }, { it: 'Per celebrare feste, Paesi e cause', en: 'To celebrate holidays, countries and causes' }, { it: 'Per guidare gli aerei', en: 'To guide planes' }],
              answer: 1,
              why: { it: 'Dal 2012 un sistema a LED crea milioni di colori.', en: 'Since 2012 an LED system creates millions of colours.' },
            },
          ],
        },
      ],
    },
    {
      id: 'deck86',
      galleries: ['86', '86°', '86th', 'terrazza', 'deck', 'osservatorio', 'observatory', 'vista', 'view', 'panorama'],
      floor: '86',
      pin: { x: 200, y: 125 },
      minutes: 25,
      widget: 'skyline',
      title: { it: 'La terrazza dell’86° piano', en: 'The 86th-floor deck' },
      area: { it: 'Osservatorio all’aperto · 86° piano', en: 'Open-air observatory · 86th floor' },
      directions: {
        it: 'Uscite sulla terrazza all’aperto, che gira tutto intorno alla torre. Fate il giro completo: la vista interattiva qui sotto vi aiuta a riconoscere ogni edificio.',
        en: 'Step out onto the open-air deck, which runs all around the tower. Walk the full circuit: the interactive view below helps you recognise every building.',
      },
      audio: {
        it: 'Eccoci: siete a circa 320 metri d’altezza, sull’unica terrazza panoramica all’aperto a 360 gradi nel centro di Manhattan, aperta fin dal 1931. In inverno ci sono dei riscaldatori, ma copritevi bene: quassù il vento è forte. Nelle giornate limpide si vede fino a circa 130 chilometri di distanza, in cinque Stati diversi. Facciamo il giro della terrazza insieme. Cominciate dal lato nord: davanti a voi c’è il cuore di Midtown, con il Rockefeller Center, i grattacieli sottilissimi di Billionaires’ Row e, oltre, il rettangolo verde di Central Park, con ai suoi lati i due musei che avete visitato. Spostatevi verso est: ecco il Chrysler Building, con la sua guglia a raggiera, e, sulla riva dell’East River, il palazzo stretto e alto del Segretariato delle Nazioni Unite. Proprio lì, dall’altra parte della città, ogni settembre si riuniscono i capi di Stato di tutto il mondo. Girate verso sud: in fondo, la punta di Manhattan con il One World Trade Center, e nelle giornate limpide, nella baia, la piccola sagoma della Statua della Libertà. A sud-est, i ponti sull’East River, tra cui il Ponte di Brooklyn. Infine il lato ovest: il fiume Hudson, il New Jersey, i nuovi grattacieli di Hudson Yards e, proprio sotto di voi, la cupola rotonda del Madison Square Garden. Due curiosità prima di usare la vista interattiva: l’Empire State viene colpito dai fulmini circa venti volte l’anno, e funziona da gigantesco parafulmine che protegge gli edifici intorno. E qui in cima l’elettricità statica è così forte che, nelle giornate secche, toccandosi si può prendere una piccola scossa! Ora prendete il telefono: scorrete la vista a 360 gradi, toccate gli edifici e scoprite le loro storie. Se il vostro telefono lo permette, attivate la bussola e puntatelo verso la città.',
        en: 'Here we are: you are about 320 metres up, on the only 360-degree open-air observation deck in the heart of Manhattan, open since 1931. In winter there are heaters, but wrap up well: the wind up here is strong. On clear days you can see about 130 kilometres away, into five different states. Let’s walk round the deck together. Start on the north side: in front of you is the heart of Midtown, with Rockefeller Center, the ultra-slim towers of Billionaires’ Row and, beyond, the green rectangle of Central Park, with the two museums you visited on either side. Move east: here is the Chrysler Building with its sunburst spire and, on the East River shore, the tall narrow building of the United Nations Secretariat. Right there, across town, heads of state from all over the world meet every September. Turn south: in the distance, the tip of Manhattan with One World Trade Center and, on clear days, in the harbour, the small figure of the Statue of Liberty. To the south-east, the bridges over the East River, including the Brooklyn Bridge. Finally the west side: the Hudson River, New Jersey, the new towers of Hudson Yards and, right below you, the round dome of Madison Square Garden. Two curiosities before you use the interactive view: the Empire State is struck by lightning about twenty times a year and acts as a giant lightning rod protecting the buildings around it. And up here static electricity is so strong that on dry days you can get a little shock just by touching someone! Now take your phone: swipe the 360-degree view, tap the buildings and discover their stories. If your phone allows it, turn on the compass and point it at the city.',
      },
      works: [],
      games: [
        {
          kind: 'hunt',
          prompt: { it: 'Caccia dall’alto: trova dalla terrazza…', en: 'Spot from the deck…' },
          items: [
            { it: 'La sede dell’ONU sull’East River (lato est)', en: 'The UN Headquarters on the East River (east side)' },
            { it: 'La guglia del Chrysler Building (nord-est)', en: 'The Chrysler Building spire (north-east)' },
            { it: 'Central Park (nord)', en: 'Central Park (north)' },
            { it: 'One World Trade Center (sud)', en: 'One World Trade Center (south)' },
            { it: 'La Statua della Libertà (sud-ovest, se è limpido)', en: 'The Statue of Liberty (south-west, if clear)' },
            { it: 'Il Ponte di Brooklyn (sud-est)', en: 'The Brooklyn Bridge (south-east)' },
          ],
        },
        {
          kind: 'match',
          prompt: { it: 'Abbina il grattacielo alla sua curiosità', en: 'Match the skyscraper to its fact' },
          pairs: [
            [{ it: 'One World Trade Center', en: 'One World Trade Center' }, { it: 'Alto 1.776 piedi', en: '1,776 feet tall' }],
            [{ it: 'Chrysler Building', en: 'Chrysler Building' }, { it: 'Guglia montata in segreto', en: 'Spire assembled in secret' }],
            [{ it: 'Flatiron Building', en: 'Flatiron Building' }, { it: 'A forma di triangolo', en: 'Triangle-shaped' }],
            [{ it: 'Steinway Tower', en: 'Steinway Tower' }, { it: 'Uno dei grattacieli più sottili del mondo', en: 'One of the world’s slimmest towers' }],
          ],
        },
      ],
    },
  ],
  extras: [],
}
