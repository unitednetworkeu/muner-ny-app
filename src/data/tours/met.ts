import type { Tour } from './types'

// Piantina SCHEMATICA (non in scala): nord in alto, Fifth Avenue a destra.
export const met: Tour = {
  id: 'met',
  emoji: '🏛️',
  name: { it: 'Metropolitan Museum of Art', en: 'The Metropolitan Museum of Art' },
  duration: { it: '2 ore · 10 tappe', en: '2 hours · 10 stops' },
  intro: {
    it: 'Un viaggio di 5.000 anni in due ore: dall’Egitto dei faraoni alla nascita degli Stati Uniti. Segui le tappe in ordine, ascolta l’audioguida e gioca in ogni sala.',
    en: 'A 5,000-year journey in two hours: from the pharaohs’ Egypt to the birth of the United States. Follow the stops in order, listen to the audio guide and play in every room.',
  },
  closuresUrl: 'https://www.metmuseum.org/plan-your-visit/gallery-closures',
  entrance: { it: 'Ingresso principale, 1000 Fifth Avenue', en: 'Main entrance, 1000 Fifth Avenue' },
  floors: [
    {
      id: '1',
      label: { it: 'Piano terra', en: 'First floor' },
      street: { label: { it: 'Fifth Avenue', en: 'Fifth Avenue' }, side: 'right' },
      zones: [
        { label: { it: 'Great Hall', en: 'Great Hall' }, x: 300, y: 105, w: 60, h: 50, tone: '#f7c948' },
        { label: { it: 'Tempio di Dendur', en: 'Temple of Dendur' }, x: 250, y: 4, w: 110, h: 32 },
        { label: { it: 'Arte egizia', en: 'Egyptian Art' }, x: 270, y: 38, w: 90, h: 64 },
        { label: { it: 'American Wing', en: 'American Wing' }, x: 130, y: 4, w: 116, h: 80 },
        { label: { it: 'Armi e armature', en: 'Arms and Armor' }, x: 170, y: 88, w: 95, h: 40 },
        { label: { it: 'Arte medievale', en: 'Medieval Art' }, x: 200, y: 131, w: 96, h: 30 },
        { label: { it: 'Arte greca e romana', en: 'Greek and Roman Art' }, x: 270, y: 164, w: 90, h: 88 },
        { label: { it: 'Collezione Lehman', en: 'Lehman Collection' }, x: 20, y: 90, w: 95, h: 60 },
        { label: { it: 'Africa e Oceania', en: 'Africa and Oceania' }, x: 20, y: 160, w: 95, h: 92 },
        { label: { it: 'Arte moderna', en: 'Modern Art' }, x: 122, y: 175, w: 142, h: 77 },
      ],
    },
    {
      id: '2',
      label: { it: 'Primo piano', en: 'Second floor' },
      street: { label: { it: 'Fifth Avenue', en: 'Fifth Avenue' }, side: 'right' },
      zones: [
        { label: { it: 'Balconata Great Hall', en: 'Great Hall Balcony' }, x: 300, y: 105, w: 60, h: 50, tone: '#f7c948' },
        { label: { it: 'Pittura europea 1250-1800', en: 'European Paintings 1250–1800' }, x: 175, y: 90, w: 120, h: 70 },
        { label: { it: 'Ottocento europeo', en: '19th-c. European Art' }, x: 130, y: 165, w: 135, h: 55 },
        { label: { it: 'American Wing', en: 'American Wing' }, x: 130, y: 4, w: 116, h: 80 },
        { label: { it: 'Arte asiatica', en: 'Asian Art' }, x: 250, y: 4, w: 110, h: 96 },
        { label: { it: 'Arte greca e romana', en: 'Greek and Roman Art' }, x: 270, y: 164, w: 90, h: 88 },
      ],
    },
  ],
  stops: [
    {
      id: 'great-hall',
      galleries: ['great hall'],
      floor: '1',
      pin: { x: 330, y: 130 },
      minutes: 5,
      title: { it: 'La Great Hall', en: 'The Great Hall' },
      area: { it: 'Ingresso', en: 'Entrance' },
      directions: {
        it: 'Sei nell’atrio d’ingresso, sotto le grandi cupole. Questo è il punto di partenza.',
        en: 'You are in the entrance hall, under the great domes. This is the starting point.',
      },
      audio: {
        it: 'Benvenuti al Metropolitan Museum of Art, il Met! Il museo nasce nel 1870 da un gruppo di cittadini che volevano dare a New York un grande museo d’arte, come quelli di Parigi o Londra. Oggi custodisce oltre due milioni di opere, da 5.000 anni fa a oggi: per vederle tutte non basterebbe una vita intera. Questa facciata su Fifth Avenue e questa sala, la Great Hall, sono state aperte nel 1902. Nelle prossime due ore attraverseremo la storia dell’umanità: l’Egitto dei faraoni, i cavalieri medievali, la Grecia e Roma, i grandi pittori europei e infine la nascita degli Stati Uniti. Prima di partire controllate l’ora del ritrovo nell’app, poi entrate nella sala a destra: ci aspetta l’antico Egitto.',
        en: 'Welcome to the Metropolitan Museum of Art, the Met! The museum was founded in 1870 by a group of citizens who wanted to give New York a great art museum, like those in Paris or London. Today it holds more than two million works, spanning 5,000 years: a lifetime wouldn’t be enough to see them all. This Fifth Avenue façade and this room, the Great Hall, opened in 1902. Over the next two hours we will travel through human history: the pharaohs’ Egypt, medieval knights, Greece and Rome, the great European painters and finally the birth of the United States. Before you start, check the meeting time in the app, then walk into the room on your right: ancient Egypt is waiting.',
      },
      works: [],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'In che anno è nato il Met?', en: 'When was the Met founded?' },
              options: [{ it: '1776', en: '1776' }, { it: '1870', en: '1870' }, { it: '1950', en: '1950' }],
              answer: 1,
              why: { it: 'Fondato nel 1870, la Great Hall è del 1902.', en: 'Founded in 1870; the Great Hall dates from 1902.' },
            },
          ],
        },
      ],
    },
    {
      id: 'perneb',
      galleries: ['100'],
      floor: '1',
      pin: { x: 320, y: 88 },
      minutes: 10,
      title: { it: 'La tomba di Perneb', en: 'The Tomb of Perneb' },
      area: { it: 'Arte egizia · sala 100', en: 'Egyptian Art · Gallery 100' },
      directions: {
        it: 'Dalla Great Hall vai a destra (lato nord): la prima grande struttura in pietra è la tomba di Perneb.',
        en: 'From the Great Hall turn right (north side): the first large stone structure is the Tomb of Perneb.',
      },
      audio: {
        it: 'State per entrare in una vera tomba egizia di oltre 4.300 anni fa. Apparteneva a Perneb, un alto funzionario del faraone, e si trovava a Saqqara, vicino all’antica capitale Menfi. Il Met l’ha acquistata nel 1913 e l’ha ricostruita pietra su pietra. È una mastaba: una tomba a forma di panca, con stanze per le offerte sopra il pozzo dove riposava il defunto. Entrate e cercate la “falsa porta”: una porta scolpita che non si apre. Per gli egizi serviva al ka, lo spirito del defunto, per uscire e ricevere cibo e bevande dai vivi. Guardate le pareti: scene di servitori, animali, offerte. Non erano decorazioni, ma una sorta di “magia”: ciò che era scolpito o dipinto sarebbe esistito per sempre nell’aldilà.',
        en: 'You are about to enter a real Egyptian tomb more than 4,300 years old. It belonged to Perneb, a high official of the pharaoh, and stood at Saqqara, near the ancient capital Memphis. The Met bought it in 1913 and rebuilt it stone by stone. It is a mastaba: a bench-shaped tomb with offering rooms above the shaft where the dead man rested. Go inside and look for the “false door”: a carved door that doesn’t open. For the Egyptians it let the ka, the spirit of the dead, come out and receive food and drink from the living. Look at the walls: servants, animals, offerings. They weren’t decoration but a kind of “magic”: whatever was carved or painted would exist forever in the afterlife.',
      },
      works: [
        {
          title: { it: 'Mastaba di Perneb', en: 'Mastaba Tomb of Perneb' },
          date: 'c. 2381–2323 a.C. / BCE',
          note: { it: 'Antico Regno, V dinastia. Da Saqqara.', en: 'Old Kingdom, Dynasty 5. From Saqqara.' },
        },
      ],
      games: [
        {
          kind: 'hunt',
          prompt: { it: 'Caccia al dettaglio: trova nella tomba…', en: 'Detail hunt: find in the tomb…' },
          items: [
            { it: 'La falsa porta', en: 'The false door' },
            { it: 'Un bue o un altro animale portato in offerta', en: 'An ox or another animal brought as an offering' },
            { it: 'Il nome di Perneb in geroglifici (cerca un cartiglio o un gruppo di segni ripetuto)', en: 'Perneb’s name in hieroglyphs (look for a repeated group of signs)' },
            { it: 'Una persona seduta davanti a una tavola di offerte', en: 'A seated person in front of an offering table' },
          ],
        },
        {
          kind: 'match',
          prompt: { it: 'Abbina la parola egizia al significato', en: 'Match the Egyptian word to its meaning' },
          pairs: [
            [{ it: 'Mastaba', en: 'Mastaba' }, { it: 'Tomba a forma di panca', en: 'Bench-shaped tomb' }],
            [{ it: 'Ka', en: 'Ka' }, { it: 'Lo spirito vitale', en: 'The life spirit' }],
            [{ it: 'Falsa porta', en: 'False door' }, { it: 'Passaggio tra vivi e morti', en: 'Passage between living and dead' }],
            [{ it: 'Saqqara', en: 'Saqqara' }, { it: 'Necropoli di Menfi', en: 'Necropolis of Memphis' }],
          ],
        },
      ],
      ifClosed: {
        it: 'Se la tomba è chiusa, prosegui nelle sale egizie verso nord (sale 101-115) e cerca la grande Sfinge di Hatshepsut.',
        en: 'If the tomb is closed, continue north through the Egyptian galleries (101–115) and look for the great Sphinx of Hatshepsut.',
      },
    },
    {
      id: 'dendur',
      galleries: ['131'],
      floor: '1',
      pin: { x: 305, y: 20 },
      minutes: 15,
      title: { it: 'Il Tempio di Dendur', en: 'The Temple of Dendur' },
      area: { it: 'Arte egizia · sala 131', en: 'Egyptian Art · Gallery 131' },
      directions: {
        it: 'Attraversa tutte le sale egizie verso nord: alla fine si apre un’enorme sala con una vetrata su Central Park. Sei arrivato.',
        en: 'Walk through all the Egyptian galleries heading north: at the end a huge glass-walled room opens onto Central Park. You’ve arrived.',
      },
      audio: {
        it: 'Questo è un vero tempio egizio, arrivato a New York pezzo per pezzo. Fu costruito intorno al 15 avanti Cristo, quando l’Egitto era una provincia dell’Impero romano: sulle pareti vedrete l’imperatore Augusto vestito da faraone, che fa offerte agli dei. Il tempio era dedicato alla dea Iside e a due fratelli, Pedesi e Pihor, figli di un capo locale. Ma perché è qui? Negli anni Sessanta l’Egitto costruisce la grande diga di Assuan, e il lago artificiale avrebbe sommerso decine di monumenti della Nubia. L’UNESCO, l’agenzia dell’ONU per la cultura, lancia allora una campagna internazionale per salvarli. Gli Stati Uniti contribuiscono, e nel 1965 l’Egitto ringrazia regalando questo tempio. Dal 1978 è esposto qui. Avvicinatevi alle pareti: troverete anche firme di viaggiatori dell’Ottocento, i “graffiti” di allora!',
        en: 'This is a real Egyptian temple that came to New York piece by piece. It was built around 15 BCE, when Egypt was a province of the Roman Empire: on the walls you’ll see Emperor Augustus dressed as a pharaoh, making offerings to the gods. The temple was dedicated to the goddess Isis and to two brothers, Pedesi and Pihor, sons of a local chief. But why is it here? In the 1960s Egypt built the great Aswan High Dam, and the new lake would have flooded dozens of Nubian monuments. UNESCO, the UN agency for culture, launched an international campaign to save them. The United States contributed, and in 1965 Egypt said thank you with this temple. It has been on display here since 1978. Get close to the walls: you’ll also find the names of 19th-century travellers, the “graffiti” of their day!',
      },
      works: [
        {
          title: { it: 'Tempio di Dendur', en: 'The Temple of Dendur' },
          date: 'c. 15–10 a.C. / BCE',
          note: { it: 'Arenaria. Dono dell’Egitto agli Stati Uniti (1965), assegnato al Met nel 1967.', en: 'Sandstone. Given by Egypt to the United States (1965), awarded to the Met in 1967.' },
        },
      ],
      games: [
        {
          kind: 'order',
          prompt: { it: 'Metti in ordine la storia del tempio', en: 'Put the temple’s story in order' },
          items: [
            { label: { it: 'Augusto fa costruire il tempio in Nubia', en: 'Augustus has the temple built in Nubia' }, tag: '15 a.C.' },
            { label: { it: 'Viaggiatori europei incidono i loro nomi', en: 'European travellers carve their names' }, tag: '1800' },
            { label: { it: 'L’UNESCO lancia la campagna per salvare i monumenti nubiani', en: 'UNESCO launches the campaign to save Nubian monuments' }, tag: '1960' },
            { label: { it: 'L’Egitto dona il tempio agli Stati Uniti', en: 'Egypt gives the temple to the United States' }, tag: '1965' },
            { label: { it: 'Il tempio apre al pubblico al Met', en: 'The temple opens to the public at the Met' }, tag: '1978' },
          ],
        },
        {
          kind: 'hunt',
          prompt: { it: 'Trova sulle pareti…', en: 'Find on the walls…' },
          items: [
            { it: 'Una firma di un viaggiatore con una data dell’Ottocento', en: 'A traveller’s signature with a 19th-century date' },
            { it: 'Il disco solare con le ali sopra la porta', en: 'The winged sun disk above the doorway' },
            { it: 'Una figura che fa un’offerta (è Augusto!)', en: 'A figure making an offering (it’s Augustus!)' },
          ],
        },
      ],
    },
    {
      id: 'american-court',
      galleries: ['700'],
      floor: '1',
      pin: { x: 190, y: 45 },
      minutes: 8,
      title: { it: 'Il cortile dell’American Wing', en: 'The American Wing Courtyard' },
      area: { it: 'American Wing · sala 700', en: 'American Wing · Gallery 700' },
      directions: {
        it: 'Dal Tempio di Dendur segui le indicazioni “American Wing” verso ovest: entri in un grande cortile coperto, luminoso, con alberi e statue.',
        en: 'From the Temple of Dendur follow the “American Wing” signs heading west: you’ll enter a large, bright covered courtyard with trees and statues.',
      },
      audio: {
        it: 'Siete nel Charles Engelhard Court, il cortile dell’ala americana. Guardate la grande facciata di marmo con le colonne: vi ricorda qualcosa? È la facciata della Branch Bank of the United States, una banca costruita negli anni Venti dell’Ottocento… proprio su Wall Street! Quando l’edificio fu demolito, la facciata fu salvata e rimontata qui. Ora cercate le vetrate colorate: sono di Louis Comfort Tiffany, figlio del fondatore della famosa gioielleria. Tiffany inventò un vetro “opalescente” che sembra dipinto, ma è colore dentro il vetro stesso. Guardate il paesaggio autunnale con il fiume e gli alberi: nessun pennello, solo pezzi di vetro. Intorno a voi ci sono sculture americane dell’Ottocento: l’arte di un Paese giovane che voleva mostrarsi alla pari dell’Europa.',
        en: 'You are in the Charles Engelhard Court, the American Wing’s courtyard. Look at the big marble façade with columns: does it remind you of anything? It is the façade of the Branch Bank of the United States, a bank built in the 1820s… right on Wall Street! When the building was demolished, the façade was saved and rebuilt here. Now find the coloured windows: they are by Louis Comfort Tiffany, son of the founder of the famous jewellery store. Tiffany invented an “opalescent” glass that looks painted, but the colour is inside the glass itself. Look at the autumn landscape with the river and trees: no brush, only pieces of glass. Around you are 19th-century American sculptures: the art of a young country that wanted to stand level with Europe.',
      },
      works: [
        {
          title: { it: 'Facciata della Branch Bank of the United States', en: 'Façade of the Branch Bank of the United States' },
          artist: { it: 'Martin E. Thompson', en: 'Martin E. Thompson' },
          date: '1822–24',
          note: { it: 'Dall’originale su Wall Street.', en: 'From the original on Wall Street.' },
        },
        {
          title: { it: 'Paesaggio d’autunno (vetrata)', en: 'Autumn Landscape (window)' },
          artist: { it: 'Tiffany Studios', en: 'Tiffany Studios' },
          date: '1923–24',
          note: { it: 'Vetro opalescente.', en: 'Opalescent glass.' },
        },
      ],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'Da quale strada viene la facciata della banca?', en: 'Which street does the bank façade come from?' },
              options: [{ it: 'Broadway', en: 'Broadway' }, { it: 'Wall Street', en: 'Wall Street' }, { it: 'Fifth Avenue', en: 'Fifth Avenue' }],
              answer: 1,
              why: { it: 'Ricordi il video su Wall Street? Eccone un pezzo!', en: 'Remember the Wall Street video? Here’s a piece of it!' },
            },
            {
              q: { it: 'Nelle vetrate Tiffany il colore è…', en: 'In Tiffany windows the colour is…' },
              options: [{ it: 'Dipinto sopra il vetro', en: 'Painted on the glass' }, { it: 'Dentro il vetro', en: 'Inside the glass' }, { it: 'Proiettato con una luce', en: 'Projected with a light' }],
              answer: 1,
              why: { it: 'È il vetro opalescente inventato da Tiffany.', en: 'It’s the opalescent glass Tiffany invented.' },
            },
          ],
        },
      ],
    },
    {
      id: 'armor',
      galleries: ['371'],
      floor: '1',
      pin: { x: 215, y: 108 },
      minutes: 12,
      title: { it: 'Cavalieri e armature', en: 'Knights and Armor' },
      area: { it: 'Armi e armature · sala 371', en: 'Arms and Armor · Gallery 371' },
      directions: {
        it: 'Esci dal cortile americano verso sud (lato opposto rispetto alla vetrata): entri in una sala con cavalieri a cavallo in armatura.',
        en: 'Leave the American courtyard heading south (away from the windows): you’ll enter a hall with mounted knights in armor.',
      },
      audio: {
        it: 'Cavalieri al galoppo! Queste armature europee sono soprattutto del Cinquecento, quando le armi da fuoco stavano già cambiando la guerra. Un’armatura completa poteva pesare tra i 15 e i 25 chili: tanti, ma distribuiti su tutto il corpo, tanto che un cavaliere allenato poteva correre e salire a cavallo da solo. Le più ricche non servivano solo a combattere: erano status symbol, incise e decorate in oro per le parate e i tornei. Nelle sale vicine trovate anche armature giapponesi dei samurai: costruite con piccole lamelle legate da cordoni di seta colorata, più leggere e flessibili. Due mondi lontanissimi, stesso problema: proteggere il corpo senza perdere la libertà di movimento. Guardate gli elmi: chi sembra più minaccioso?',
        en: 'Knights at a gallop! These European armors date mostly from the 1500s, when firearms were already changing warfare. A full suit could weigh between 15 and 25 kilos: a lot, but spread over the whole body, so a trained knight could run and mount his horse unaided. The richest ones weren’t only for fighting: they were status symbols, etched and gilded for parades and tournaments. In the nearby galleries you’ll also find Japanese samurai armor: built from small plates laced together with coloured silk cords, lighter and more flexible. Two worlds far apart, one problem: protect the body without losing freedom of movement. Look at the helmets: which looks the most fearsome?',
      },
      works: [
        {
          title: { it: 'Armature equestri', en: 'Equestrian armors' },
          date: '1500–1600',
          note: { it: 'Europa, soprattutto Germania.', en: 'Europe, mainly Germany.' },
        },
        {
          title: { it: 'Armature di samurai', en: 'Samurai armors' },
          date: '1300–1800',
          note: { it: 'Giappone. Lamelle legate con seta.', en: 'Japan. Plates laced with silk.' },
        },
      ],
      games: [
        {
          kind: 'match',
          prompt: { it: 'Abbina la parte dell’armatura alla sua funzione', en: 'Match the armor part to its job' },
          pairs: [
            [{ it: 'Elmo', en: 'Helmet' }, { it: 'Protegge la testa', en: 'Protects the head' }],
            [{ it: 'Corazza', en: 'Breastplate' }, { it: 'Protegge petto e schiena', en: 'Protects chest and back' }],
            [{ it: 'Guanto d’arme', en: 'Gauntlet' }, { it: 'Protegge mani e dita', en: 'Protects hands and fingers' }],
            [{ it: 'Barda', en: 'Barding' }, { it: 'Protegge il cavallo', en: 'Protects the horse' }],
          ],
        },
        {
          kind: 'hunt',
          prompt: { it: 'Trova nella sala…', en: 'Find in the hall…' },
          items: [
            { it: 'Un’armatura con decorazioni dorate', en: 'An armor with gold decoration' },
            { it: 'Un elmo con una maschera sul volto', en: 'A helmet with a face mask' },
            { it: 'Uno scudo con uno stemma', en: 'A shield with a coat of arms' },
          ],
        },
      ],
    },
    {
      id: 'medieval',
      galleries: ['305'],
      floor: '1',
      pin: { x: 248, y: 146 },
      minutes: 8,
      title: { it: 'La sala della scultura medievale', en: 'The Medieval Sculpture Hall' },
      area: { it: 'Arte medievale · sala 305', en: 'Medieval Art · Gallery 305' },
      directions: {
        it: 'Dalle armature prosegui verso sud: la grande sala alta dietro lo scalone principale, con un’enorme cancellata in ferro, è la sala medievale.',
        en: 'From the armor hall continue south: the tall hall behind the main staircase, with a huge iron screen, is the medieval hall.',
      },
      audio: {
        it: 'Questa grande sala ricorda la navata di una chiesa. Sul fondo domina un’enorme cancellata di ferro: è il coro della Cattedrale di Valladolid, in Spagna, alta più di 15 metri e completata nel 1763. Non è medievale, ma è perfetta per dare l’idea di come fossero imponenti le chiese europee. Intorno a voi ci sono sculture del Medioevo: santi, Madonne, capitelli. Provate a distinguere due stili: il romanico, con figure più rigide, frontali, quasi “a blocchi”, e il gotico, con figure più slanciate, che si piegano leggermente e hanno vesti morbide e piene di pieghe. Il Medioevo non fu un’epoca buia: fu il tempo delle cattedrali, delle prime università e dei grandi pellegrinaggi.',
        en: 'This great hall recalls the nave of a church. At the far end stands a huge iron screen: it is the choir screen from Valladolid Cathedral in Spain, over 15 metres tall and completed in 1763. It isn’t medieval, but it perfectly shows how imposing European churches were. Around you are medieval sculptures: saints, Madonnas, capitals. Try to tell two styles apart: Romanesque, with stiffer, frontal, almost “block-like” figures, and Gothic, with slender figures that sway slightly and wear soft, deeply folded robes. The Middle Ages weren’t dark: it was the age of cathedrals, the first universities and great pilgrimages.',
      },
      works: [
        {
          title: { it: 'Cancellata del coro della Cattedrale di Valladolid', en: 'Choir screen from Valladolid Cathedral' },
          date: '1763',
          note: { it: 'Ferro battuto, Spagna.', en: 'Wrought iron, Spain.' },
        },
      ],
      games: [
        {
          kind: 'order',
          prompt: { it: 'Metti in ordine gli stili e le epoche', en: 'Put the styles and eras in order' },
          items: [
            { label: { it: 'Caduta dell’Impero romano d’Occidente', en: 'Fall of the Western Roman Empire' }, tag: '476' },
            { label: { it: 'Carlo Magno imperatore', en: 'Charlemagne crowned emperor' }, tag: '800' },
            { label: { it: 'Stile romanico', en: 'Romanesque style' }, tag: '1000–1150' },
            { label: { it: 'Stile gotico', en: 'Gothic style' }, tag: '1150–1400' },
            { label: { it: 'Cancellata di Valladolid', en: 'Valladolid choir screen' }, tag: '1763' },
          ],
        },
      ],
    },
    {
      id: 'greek-roman',
      galleries: ['150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162'],
      floor: '1',
      pin: { x: 315, y: 205 },
      minutes: 15,
      title: { it: 'Grecia e Roma', en: 'Greece and Rome' },
      area: { it: 'Arte greca e romana · sale 150-162', en: 'Greek and Roman Art · Galleries 150–162' },
      directions: {
        it: 'Torna nella Great Hall e attraversala: entra nelle sale a sinistra (lato sud). Percorri il lungo corridoio delle sculture greche fino al grande cortile romano.',
        en: 'Go back to the Great Hall and cross it: enter the galleries on the left (south side). Walk along the long hall of Greek sculpture to the big Roman court.',
      },
      audio: {
        it: 'Benvenuti in Grecia! All’inizio del corridoio cercate il kouros, la statua di un giovane in piedi, del 590 avanti Cristo circa: è rigido, con un piede avanti e le braccia lungo i fianchi, e un sorriso misterioso. Proseguendo, vedrete le statue diventare sempre più naturali, fino a sembrare respirare: in due secoli gli scultori greci hanno imparato a rappresentare il corpo umano come nessuno prima. Nella sala 160 alzate gli occhi: c’è un’enorme colonna del tempio di Artemide a Sardi, in Turchia, di circa 300 avanti Cristo. Infine il grande cortile romano: ritratti di imperatori, sarcofagi, affreschi. I Romani ammiravano così tanto i Greci che copiavano le loro statue: molti capolavori greci li conosciamo solo grazie alle copie romane.',
        en: 'Welcome to Greece! At the start of the corridor find the kouros, a standing young man from about 590 BCE: he is stiff, with one foot forward, arms by his sides and a mysterious smile. As you walk on, the statues become more and more natural, until they seem to breathe: in two centuries Greek sculptors learned to portray the human body like nobody before. In Gallery 160 look up: there’s a huge column from the Temple of Artemis at Sardis, in Turkey, from about 300 BCE. Finally the great Roman court: portraits of emperors, sarcophagi, frescoes. The Romans admired the Greeks so much that they copied their statues: many Greek masterpieces are known to us only through Roman copies.',
      },
      works: [
        {
          title: { it: 'Kouros in marmo', en: 'Marble kouros' },
          date: 'c. 590–580 a.C. / BCE',
          note: { it: 'Attica. Una delle più antiche statue greche in marmo a grandezza naturale.', en: 'Attica. One of the earliest life-size Greek marble statues.' },
        },
        {
          title: { it: 'Colonna del tempio di Artemide a Sardi', en: 'Column from the Temple of Artemis at Sardis' },
          date: 'c. 300 a.C. / BCE',
          note: { it: 'Sala 160.', en: 'Gallery 160.' },
        },
      ],
      games: [
        {
          kind: 'order',
          prompt: { it: 'Dalla statua più rigida alla più naturale: metti in ordine i periodi', en: 'From stiffest to most natural: order the periods' },
          items: [
            { label: { it: 'Arcaico (kouros)', en: 'Archaic (kouros)' }, tag: '600 a.C.' },
            { label: { it: 'Classico (Partenone)', en: 'Classical (Parthenon)' }, tag: '450 a.C.' },
            { label: { it: 'Ellenistico (colonna di Sardi)', en: 'Hellenistic (Sardis column)' }, tag: '300 a.C.' },
            { label: { it: 'Romano imperiale', en: 'Roman Imperial' }, tag: '1–200 d.C.' },
          ],
        },
        {
          kind: 'match',
          prompt: { it: 'Abbina il dio greco al nome romano', en: 'Match the Greek god to the Roman name' },
          pairs: [
            [{ it: 'Zeus', en: 'Zeus' }, { it: 'Giove', en: 'Jupiter' }],
            [{ it: 'Artemide', en: 'Artemis' }, { it: 'Diana', en: 'Diana' }],
            [{ it: 'Afrodite', en: 'Aphrodite' }, { it: 'Venere', en: 'Venus' }],
            [{ it: 'Ermes', en: 'Hermes' }, { it: 'Mercurio', en: 'Mercury' }],
          ],
        },
      ],
    },
    {
      id: 'european-paintings',
      galleries: Array.from({ length: 41 }, (_, i) => String(600 + i)),
      floor: '2',
      pin: { x: 235, y: 125 },
      minutes: 15,
      title: { it: 'I grandi maestri europei', en: 'The European Old Masters' },
      area: { it: 'Pittura europea · sale 600-640', en: 'European Paintings · Galleries 600–640' },
      directions: {
        it: 'Torna nella Great Hall e sali lo scalone principale: in cima ci sono le sale della pittura europea. Cerca Caravaggio, Vermeer e Rembrandt (chiedi pure al personale: “Where is Caravaggio?”).',
        en: 'Go back to the Great Hall and climb the main staircase: at the top are the European paintings. Look for Caravaggio, Vermeer and Rembrandt (feel free to ask staff: “Where is Caravaggio?”).',
      },
      audio: {
        it: 'In queste sale ci sono sei secoli di pittura europea. Partiamo dall’Italia: cercate “I musici” di Caravaggio, del 1597. Quattro ragazzi preparano un concerto, uno ci guarda dritto negli occhi: Caravaggio dipingeva persone vere, prese dalla strada, con una luce forte che le fa uscire dal buio. Poi spostatevi in Olanda, nel Seicento. Johannes Vermeer dipinge la “Giovane donna con brocca”: una stanza silenziosa, una luce morbida da una finestra, un momento qualunque che diventa eterno. Infine Rembrandt: nell’“Aristotele con il busto di Omero” il grande filosofo appoggia la mano su un poeta del passato. Tre pittori, tre modi di usare la luce: drammatica, delicata, misteriosa. Quale preferite?',
        en: 'These rooms hold six centuries of European painting. Let’s start in Italy: find Caravaggio’s “The Musicians”, from 1597. Four young men prepare a concert, one looks straight at us: Caravaggio painted real people, taken from the street, with a strong light that pulls them out of the darkness. Then move to Holland in the 1600s. Johannes Vermeer paints “Young Woman with a Water Pitcher”: a quiet room, soft light from a window, an ordinary moment made eternal. Finally Rembrandt: in “Aristotle with a Bust of Homer” the great philosopher rests his hand on a poet of the past. Three painters, three ways of using light: dramatic, gentle, mysterious. Which do you prefer?',
      },
      works: [
        { title: { it: 'I musici', en: 'The Musicians' }, artist: { it: 'Caravaggio', en: 'Caravaggio' }, date: '1597', note: { it: 'Italia.', en: 'Italy.' } },
        { title: { it: 'Giovane donna con brocca', en: 'Young Woman with a Water Pitcher' }, artist: { it: 'Johannes Vermeer', en: 'Johannes Vermeer' }, date: 'c. 1662', note: { it: 'Olanda.', en: 'Holland.' } },
        { title: { it: 'Aristotele con il busto di Omero', en: 'Aristotle with a Bust of Homer' }, artist: { it: 'Rembrandt', en: 'Rembrandt' }, date: '1653', note: { it: 'Olanda.', en: 'Holland.' } },
      ],
      games: [
        {
          kind: 'match',
          prompt: { it: 'Abbina il pittore al suo quadro', en: 'Match the painter to the painting' },
          pairs: [
            [{ it: 'Caravaggio', en: 'Caravaggio' }, { it: 'I musici', en: 'The Musicians' }],
            [{ it: 'Vermeer', en: 'Vermeer' }, { it: 'Giovane donna con brocca', en: 'Young Woman with a Water Pitcher' }],
            [{ it: 'Rembrandt', en: 'Rembrandt' }, { it: 'Aristotele con il busto di Omero', en: 'Aristotle with a Bust of Homer' }],
          ],
        },
        {
          kind: 'hunt',
          prompt: { it: 'Trova nei quadri…', en: 'Find in the paintings…' },
          items: [
            { it: 'Il ragazzo dei “Musici” che ti guarda negli occhi', en: 'The young man in “The Musicians” looking at you' },
            { it: 'La finestra da cui entra la luce nel Vermeer', en: 'The window letting light into the Vermeer' },
            { it: 'La catena d’oro di Aristotele', en: 'Aristotle’s gold chain' },
          ],
        },
      ],
      ifClosed: {
        it: 'Se una sala è chiusa, l’opera può essere stata spostata: chiedi al personale o salta direttamente alla tappa successiva.',
        en: 'If a gallery is closed the work may have moved: ask staff or skip to the next stop.',
      },
    },
    {
      id: 'nineteenth',
      galleries: Array.from({ length: 31 }, (_, i) => String(800 + i)),
      floor: '2',
      pin: { x: 197, y: 192 },
      minutes: 15,
      title: { it: 'Van Gogh, Monet e Degas', en: 'Van Gogh, Monet and Degas' },
      area: { it: 'Ottocento europeo · sale 800-830', en: '19th-c. European Art · Galleries 800–830' },
      directions: {
        it: 'Dalle sale della pittura antica segui le indicazioni “19th- and Early 20th-Century European Paintings”. Cerca la sala 825 (Van Gogh) e la 815 (Degas).',
        en: 'From the Old Master galleries follow the signs for “19th- and Early 20th-Century European Paintings”. Look for Gallery 825 (Van Gogh) and 815 (Degas).',
      },
      audio: {
        it: 'Siamo nell’Ottocento, il secolo in cui la pittura cambia per sempre. Gli impressionisti come Claude Monet escono dagli studi e dipingono all’aperto, con pennellate veloci per catturare la luce di un attimo. Cercate poi la “Piccola danzatrice di quattordici anni” di Edgar Degas: è una scultura in bronzo, ma ha un vero tutù di stoffa e un nastro tra i capelli. Quando Degas la presentò nel 1881, in cera, il pubblico rimase scioccato: era troppo realistica! Infine Vincent van Gogh: nell’“Autoritratto con cappello di paglia” del 1887 guardate le pennellate, tante piccole linee di colori diversi una accanto all’altra. Van Gogh non aveva i soldi per pagare un modello, così dipingeva se stesso: in due anni a Parigi fece più di venti autoritratti.',
        en: 'We are in the 19th century, when painting changed forever. Impressionists like Claude Monet left the studio and painted outdoors, with quick brushstrokes to catch the light of a moment. Next find Edgar Degas’s “Little Fourteen-Year-Old Dancer”: she is bronze, but wears a real fabric tutu and a ribbon in her hair. When Degas showed her in wax in 1881, the public was shocked: she was too real! Finally Vincent van Gogh: in the 1887 “Self-Portrait with a Straw Hat” look at the brushstrokes, many small lines of different colours side by side. Van Gogh couldn’t afford a model, so he painted himself: in two years in Paris he made more than twenty self-portraits.',
      },
      works: [
        { title: { it: 'Autoritratto con cappello di paglia', en: 'Self-Portrait with a Straw Hat' }, artist: { it: 'Vincent van Gogh', en: 'Vincent van Gogh' }, date: '1887', note: { it: 'Sala 825.', en: 'Gallery 825.' } },
        { title: { it: 'Piccola danzatrice di quattordici anni', en: 'The Little Fourteen-Year-Old Dancer' }, artist: { it: 'Edgar Degas', en: 'Edgar Degas' }, date: '1878–81 (fusione/cast 1922)', note: { it: 'Bronzo con tutù di cotone e nastro di seta. Sala 815.', en: 'Bronze with cotton tutu and silk ribbon. Gallery 815.' } },
        { title: { it: 'Campo di grano con cipressi', en: 'Wheat Field with Cypresses' }, artist: { it: 'Vincent van Gogh', en: 'Vincent van Gogh' }, date: '1889', note: { it: 'Dipinto a Saint-Rémy.', en: 'Painted at Saint-Rémy.' } },
      ],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'Cosa indossa di vero la danzatrice di Degas?', en: 'What real item does Degas’s dancer wear?' },
              options: [{ it: 'Scarpe di cuoio', en: 'Leather shoes' }, { it: 'Un tutù di stoffa', en: 'A fabric tutu' }, { it: 'Una collana d’oro', en: 'A gold necklace' }],
              answer: 1,
              why: { it: 'Tutù di cotone e nastro di seta.', en: 'A cotton tutu and a silk ribbon.' },
            },
            {
              q: { it: 'Perché Van Gogh dipingeva tanti autoritratti?', en: 'Why did Van Gogh paint so many self-portraits?' },
              options: [{ it: 'Era vanitoso', en: 'He was vain' }, { it: 'Non poteva pagare un modello', en: 'He couldn’t afford a model' }, { it: 'Era un compito della scuola', en: 'It was a school assignment' }],
              answer: 1,
              why: { it: 'Usava uno specchio e se stesso come modello.', en: 'He used a mirror and himself as the model.' },
            },
            {
              q: { it: 'Gli impressionisti dipingevano soprattutto…', en: 'The Impressionists mostly painted…' },
              options: [{ it: 'All’aperto, la luce del momento', en: 'Outdoors, the light of the moment' }, { it: 'Battaglie storiche', en: 'Historic battles' }, { it: 'Solo ritratti di re', en: 'Only portraits of kings' }],
              answer: 0,
              why: { it: 'Pennellate rapide per catturare la luce.', en: 'Quick strokes to catch the light.' },
            },
          ],
        },
      ],
    },
    {
      id: 'washington',
      galleries: ['760'],
      floor: '2',
      pin: { x: 190, y: 45 },
      minutes: 10,
      title: { it: 'Washington attraversa il Delaware', en: 'Washington Crossing the Delaware' },
      area: { it: 'American Wing · sala 760', en: 'American Wing · Gallery 760' },
      directions: {
        it: 'Segui le indicazioni “American Wing” al primo piano verso nord-ovest e cerca la sala 760: il quadro è impossibile da non vedere!',
        en: 'Follow the “American Wing” signs on the second floor heading north-west and find Gallery 760: you can’t miss the painting!',
      },
      audio: {
        it: 'Eccolo: quasi quattro metri di altezza per sei e mezzo di larghezza! È la notte di Natale del 1776. La Rivoluzione americana sta andando male, l’esercito di George Washington è stanco e affamato. Washington decide un attacco a sorpresa: attraversa il fiume Delaware ghiacciato, di notte, e sconfigge le truppe nemiche a Trenton. Fu una svolta della guerra. Il quadro lo dipinse Emanuel Leutze nel 1851, in Germania, per ispirare chi lottava per la libertà in Europa. Ma attenzione ai dettagli: la bandiera a stelle e strisce non esisteva ancora nel 1776, e stare in piedi su una barca così, tra i ghiacci, sarebbe stato pericolosissimo. È più un simbolo che una fotografia. Vi ricorda qualcosa? Washington giurò come primo presidente proprio a Wall Street, nel 1789.',
        en: 'Here it is: almost four metres high and six and a half wide! It is Christmas night, 1776. The American Revolution is going badly, George Washington’s army is tired and hungry. Washington plans a surprise attack: he crosses the icy Delaware River at night and defeats the enemy troops at Trenton. It was a turning point of the war. Emanuel Leutze painted it in 1851, in Germany, to inspire those fighting for freedom in Europe. But watch the details: the Stars and Stripes didn’t exist yet in 1776, and standing up in a boat like that among the ice would have been very dangerous. It is more a symbol than a photograph. Does it ring a bell? Washington was sworn in as first president right on Wall Street, in 1789.',
      },
      works: [
        {
          title: { it: 'Washington attraversa il Delaware', en: 'Washington Crossing the Delaware' },
          artist: { it: 'Emanuel Leutze', en: 'Emanuel Leutze' },
          date: '1851',
          note: { it: 'Olio su tela, circa 3,8 × 6,5 m.', en: 'Oil on canvas, about 3.8 × 6.5 m.' },
        },
      ],
      games: [
        {
          kind: 'order',
          prompt: { it: 'Metti in ordine la nascita degli Stati Uniti', en: 'Put the birth of the United States in order' },
          items: [
            { label: { it: 'Boston Tea Party', en: 'Boston Tea Party' }, tag: '1773' },
            { label: { it: 'Dichiarazione d’Indipendenza', en: 'Declaration of Independence' }, tag: '4/7/1776' },
            { label: { it: 'Washington attraversa il Delaware', en: 'Washington crosses the Delaware' }, tag: '25/12/1776' },
            { label: { it: 'Adottata la bandiera a stelle e strisce', en: 'Stars and Stripes flag adopted' }, tag: '1777' },
            { label: { it: 'Trattato di Parigi: fine della guerra', en: 'Treaty of Paris ends the war' }, tag: '1783' },
            { label: { it: 'Washington primo presidente, a Wall Street', en: 'Washington first president, on Wall Street' }, tag: '1789' },
          ],
        },
        {
          kind: 'hunt',
          prompt: { it: 'Trova gli “errori” storici nel quadro', en: 'Spot the historical “mistakes” in the painting' },
          items: [
            { it: 'La bandiera a stelle e strisce (nel 1776 non c’era ancora)', en: 'The Stars and Stripes (not yet in use in 1776)' },
            { it: 'Washington in piedi sulla barca', en: 'Washington standing in the boat' },
            { it: 'Il cielo già chiaro (la traversata fu di notte)', en: 'The bright sky (the crossing happened at night)' },
          ],
        },
      ],
    },
  ],
  extras: [
    {
      id: 'africa-oceania',
      galleries: ['350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '360', '361'],
      floor: '1',
      pin: { x: 67, y: 205 },
      minutes: 15,
      title: { it: 'Africa e Oceania', en: 'Africa and Oceania' },
      area: { it: 'Ala Michael C. Rockefeller', en: 'Michael C. Rockefeller Wing' },
      directions: {
        it: 'Piano terra, angolo sud-ovest del museo: segui “Arts of Africa, Ancient Americas, Oceania”.',
        en: 'First floor, south-west corner of the museum: follow “Arts of Africa, Ancient Americas, Oceania”.',
      },
      audio: {
        it: 'Quest’ala è stata completamente ripensata e riaperta di recente. Ospita maschere, sculture e oggetti dell’Africa subsahariana, delle antiche Americhe e delle isole del Pacifico. Cercate i grandi pali scolpiti e le canoe dell’Oceania: erano oggetti vivi, usati in cerimonie e viaggi, non pensati per stare in un museo. Chiedetevi: chi racconta la storia di questi oggetti? È una domanda importante anche all’ONU, dove si discute della restituzione dei beni culturali ai Paesi d’origine.',
        en: 'This wing was completely rethought and recently reopened. It holds masks, sculptures and objects from sub-Saharan Africa, the ancient Americas and the Pacific islands. Look for the tall carved poles and the canoes from Oceania: they were living objects, used in ceremonies and voyages, never meant for a museum. Ask yourself: who tells these objects’ story? It’s an important question at the UN too, where the return of cultural property to countries of origin is debated.',
      },
      works: [],
      games: [],
    },
    {
      id: 'astor-court',
      galleries: ['217'],
      floor: '2',
      pin: { x: 305, y: 50 },
      minutes: 10,
      title: { it: 'Il giardino cinese Astor Court', en: 'The Astor Chinese Garden Court' },
      area: { it: 'Arte asiatica · sala 217', en: 'Asian Art · Gallery 217' },
      directions: {
        it: 'Primo piano, ala nord-est: segui “Asian Art” e cerca il cortile con il tetto aperto e le rocce.',
        en: 'Second floor, north-east wing: follow “Asian Art” and look for the courtyard with the open roof and rocks.',
      },
      audio: {
        it: 'Un giardino cinese dentro un museo! L’Astor Court è stato costruito nel 1981 da artigiani arrivati da Suzhou, in Cina, ispirandosi a un giardino del periodo Ming. Hanno usato tecniche tradizionali, senza chiodi né colla. Ogni elemento ha un significato: le rocce rappresentano le montagne, l’acqua la vita, le finestre dalle forme diverse incorniciano il paesaggio come quadri. Fermatevi un minuto in silenzio: è il posto più tranquillo del museo.',
        en: 'A Chinese garden inside a museum! The Astor Court was built in 1981 by craftsmen from Suzhou, China, modelled on a Ming-period garden. They used traditional techniques, without nails or glue. Every element has meaning: rocks stand for mountains, water for life, windows of different shapes frame the view like paintings. Stop for a minute in silence: it’s the quietest place in the museum.',
      },
      works: [],
      games: [],
    },
    {
      id: 'modern',
      galleries: Array.from({ length: 26 }, (_, i) => String(900 + i)),
      floor: '1',
      pin: { x: 193, y: 213 },
      minutes: 15,
      title: { it: 'Arte moderna: Picasso e Pollock', en: 'Modern Art: Picasso and Pollock' },
      area: { it: 'Arte moderna e contemporanea', en: 'Modern and Contemporary Art' },
      directions: {
        it: 'Piano terra e primo piano, ala sud-ovest: segui “Modern and Contemporary Art”. Alcune sale potrebbero essere chiuse per lavori.',
        en: 'First and second floors, south-west wing: follow “Modern and Contemporary Art”. Some galleries may be closed for works.',
      },
      audio: {
        it: 'Nel Novecento l’arte rompe le regole. Cercate il “Ritratto di Gertrude Stein” di Picasso: il volto sembra una maschera, perché Picasso, insoddisfatto, lo ridipinse ispirandosi alla scultura antica. E se trovate “Autumn Rhythm” di Jackson Pollock, avvicinatevi: Pollock stendeva la tela sul pavimento e ci faceva gocciolare la vernice sopra, muovendosi intorno come in una danza. Arte o caos? Decidete voi.',
        en: 'In the 20th century art breaks the rules. Find Picasso’s “Portrait of Gertrude Stein”: the face looks like a mask, because Picasso, unhappy with it, repainted it inspired by ancient sculpture. And if you find Jackson Pollock’s “Autumn Rhythm”, get close: Pollock laid the canvas on the floor and dripped paint on it, moving around it as if dancing. Art or chaos? You decide.',
      },
      works: [],
      games: [],
    },
    {
      id: 'period-rooms',
      galleries: ['745'],
      floor: '1',
      pin: { x: 150, y: 70 },
      minutes: 10,
      title: { it: 'La stanza di Frank Lloyd Wright', en: 'The Frank Lloyd Wright Room' },
      area: { it: 'American Wing · period rooms', en: 'American Wing · period rooms' },
      directions: {
        it: 'Nell’American Wing cerca le “period rooms”, le stanze arredate d’epoca. La stanza di Wright è al piano terra, sala 745.',
        en: 'In the American Wing look for the “period rooms”, furnished historic rooms. The Wright room is on the first floor, Gallery 745.',
      },
      audio: {
        it: 'Questo è il soggiorno di una casa progettata dal grande architetto Frank Lloyd Wright nel 1912-14 per la famiglia Little, in Minnesota. Wright disegnava tutto: muri, finestre, mobili, perfino le lampade. Notate le linee orizzontali e le grandi finestre: voleva che la casa fosse in armonia con la prateria intorno. È lo stesso architetto del Guggenheim, il museo a spirale a pochi isolati da qui.',
        en: 'This is the living room of a house designed by the great architect Frank Lloyd Wright in 1912–14 for the Little family in Minnesota. Wright designed everything: walls, windows, furniture, even the lamps. Notice the horizontal lines and large windows: he wanted the house in harmony with the surrounding prairie. He is the same architect as the Guggenheim, the spiral museum a few blocks from here.',
      },
      works: [],
      games: [],
    },
  ],
}
