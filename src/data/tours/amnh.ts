import type { Tour } from './types'

// Piantina SCHEMATICA (non in scala): nord in alto, Central Park West a destra.
// Al Museo di Storia Naturale le sale non hanno numeri: si cercano per nome (parole chiave in `galleries`).
export const amnh: Tour = {
  id: 'amnh',
  emoji: '🦖',
  name: { it: 'Museo di Storia Naturale', en: 'American Museum of Natural History' },
  duration: { it: '1 ora e 30 · 8 tappe', en: '1.5 hours · 8 stops' },
  intro: {
    it: 'Dai dinosauri alla balenottera azzurra, dai nostri antenati ai meteoriti: 4 miliardi e mezzo di anni in un’ora e mezza. Si entra da Central Park West, si sale subito al 4° piano e si esce dal Gilder Center su Columbus Avenue.',
    en: 'From dinosaurs to the blue whale, from our ancestors to meteorites: four and a half billion years in an hour and a half. Enter from Central Park West, go straight up to the 4th floor and leave through the Gilder Center on Columbus Avenue.',
  },
  closuresUrl: 'https://www.amnh.org/plan-your-visit/hours',
  entrance: { it: 'Ingresso Central Park West, all’altezza della 79ª Street', en: 'Central Park West entrance, at 79th Street' },
  roomSearch: true,
  floors: [
    {
      id: '1',
      label: { it: '1° piano', en: '1st floor' },
      street: { label: { it: 'Central Park West', en: 'Central Park West' }, side: 'right' },
      zones: [
        { label: { it: 'Rose Center', en: 'Rose Center' }, x: 150, y: 4, w: 130, h: 60 },
        { label: { it: 'Meteoriti', en: 'Meteorites' }, x: 150, y: 70, w: 60, h: 40 },
        { label: { it: 'Gemme e minerali', en: 'Gems & Minerals' }, x: 85, y: 70, w: 60, h: 50 },
        { label: { it: 'Gilder Center', en: 'Gilder Center' }, x: 20, y: 60, w: 60, h: 120, tone: '#e9d5ff' },
        { label: { it: 'Origini umane', en: 'Human Origins' }, x: 215, y: 70, w: 70, h: 40 },
        { label: { it: 'Vita oceanica', en: 'Ocean Life' }, x: 150, y: 175, w: 120, h: 75 },
        { label: { it: 'Biodiversità', en: 'Biodiversity' }, x: 275, y: 175, w: 75, h: 75 },
        { label: { it: 'Mammiferi N. America', en: 'N. American Mammals' }, x: 215, y: 115, w: 135, h: 55 },
        { label: { it: 'Costa nord-ovest', en: 'Northwest Coast' }, x: 85, y: 125, w: 60, h: 115 },
      ],
    },
    {
      id: '2',
      label: { it: '2° piano', en: '2nd floor' },
      street: { label: { it: 'Central Park West', en: 'Central Park West' }, side: 'right' },
      zones: [
        { label: { it: 'Rotonda Roosevelt', en: 'Roosevelt Rotunda' }, x: 290, y: 105, w: 60, h: 55, tone: '#f7c948' },
        { label: { it: 'Mammiferi africani', en: 'African Mammals' }, x: 195, y: 100, w: 90, h: 65 },
        { label: { it: 'Mammiferi asiatici', en: 'Asian Mammals' }, x: 195, y: 170, w: 90, h: 50 },
        { label: { it: 'Popoli dell’Asia', en: 'Asian Peoples' }, x: 60, y: 100, w: 130, h: 65 },
        { label: { it: 'Rose Center (piano alto)', en: 'Rose Center (upper)' }, x: 150, y: 4, w: 130, h: 60 },
      ],
    },
    {
      id: '4',
      label: { it: '4° piano', en: '4th floor' },
      street: { label: { it: 'Central Park West', en: 'Central Park West' }, side: 'right' },
      zones: [
        { label: { it: 'Orientation Center', en: 'Orientation Center' }, x: 240, y: 105, w: 80, h: 55, tone: '#f7c948' },
        { label: { it: 'Dinosauri saurischi', en: 'Saurischian Dinosaurs' }, x: 150, y: 165, w: 170, h: 60 },
        { label: { it: 'Dinosauri ornitischi', en: 'Ornithischian Dinosaurs' }, x: 150, y: 40, w: 170, h: 60 },
        { label: { it: 'Mammiferi primitivi', en: 'Primitive Mammals' }, x: 40, y: 40, w: 105, h: 60 },
        { label: { it: 'Mammiferi avanzati', en: 'Advanced Mammals' }, x: 40, y: 165, w: 105, h: 60 },
        { label: { it: 'Vertebrati', en: 'Vertebrate Origins' }, x: 150, y: 105, w: 85, h: 55 },
      ],
    },
  ],
  stops: [
    {
      id: 'rotunda',
      galleries: ['rotonda', 'rotunda', 'roosevelt', 'barosauro', 'barosaurus', 'ingresso', 'entrance'],
      floor: '2',
      pin: { x: 320, y: 125 },
      minutes: 5,
      title: { it: 'La Rotonda Theodore Roosevelt', en: 'The Theodore Roosevelt Rotunda' },
      area: { it: '2° piano · ingresso Central Park West', en: '2nd floor · Central Park West entrance' },
      directions: {
        it: 'Entrando da Central Park West salite la scalinata: siete nella grande sala con le colonne e lo scheletro di dinosauro che si alza sulle zampe posteriori.',
        en: 'Coming in from Central Park West, climb the steps: you are in the great columned hall with the dinosaur skeleton rearing up on its hind legs.',
      },
      audio: {
        it: 'Benvenuti all’American Museum of Natural History, uno dei più grandi musei di scienze naturali al mondo. Fu fondato nel 1869 e oggi custodisce decine di milioni di reperti: fossili, animali, rocce, meteoriti, oggetti di culture di tutto il pianeta. Solo una piccolissima parte è esposta; il resto è studiato ogni giorno dai ricercatori del museo, che è anche un grande centro di ricerca scientifica. Il nostro percorso è un viaggio nel tempo: prima i dinosauri al quarto piano, poi gli animali, gli oceani, l’evoluzione umana e infine lo spazio, con i meteoriti. Guardate in alto: è il momento di cominciare.',
        en: 'Welcome to the American Museum of Natural History, one of the largest natural science museums in the world. It was founded in 1869 and today holds tens of millions of specimens: fossils, animals, rocks, meteorites, objects from cultures all over the planet. Only a tiny part is on display; the rest is studied every day by the museum’s researchers, since it is also a major scientific research centre. Our route is a journey through time: first the dinosaurs on the fourth floor, then animals, the oceans, human evolution and finally space, with the meteorites. Look up: it’s time to begin.',
      },
      works: [
        {
          title: { it: 'Barosauro e Allosauro', en: 'Barosaurus and Allosaurus' },
          date: '150 milioni di anni fa / million years ago',
          note: { it: 'Calchi montati nel 1991. Giurassico superiore, Nord America.', en: 'Casts mounted in 1991. Late Jurassic, North America.' },
          audio: {
            it: 'Davanti a voi va in scena un dramma di 150 milioni di anni fa. Una madre Barosauro, un enorme dinosauro erbivoro dal collo lunghissimo, si alza sulle zampe posteriori per difendere il suo piccolo dall’attacco di un Allosauro, un predatore carnivoro. Con la testa raggiunge un’altezza di circa quindici metri: è uno dei dinosauri montati più alti del mondo. Gli scheletri che vedete non sono ossa vere, ma calchi, cioè copie leggere fatte di materiali moderni: le ossa originali sarebbero troppo pesanti per reggere una posa del genere. Questa scena ha fatto discutere anche gli scienziati. Un animale così grande poteva davvero alzarsi su due zampe? Il suo cuore riusciva a pompare il sangue fino a una testa così in alto? Gli esperti non sono tutti d’accordo, e il museo ha scelto volutamente una posa spettacolare per far riflettere i visitatori: la scienza non è un elenco di certezze, ma un continuo lavoro di ipotesi, prove e discussioni. Il Barosauro apparteneva ai sauropodi, il gruppo dei giganti dal collo lungo. Mangiava foglie e piante, e probabilmente viveva in branchi, proprio come fanno oggi gli elefanti. L’Allosauro era uno dei grandi predatori del Giurassico, molto prima del Tyrannosaurus rex: tra i due ci sono circa 80 milioni di anni di distanza, più di quanti ne separino il T. rex da noi! Prima di salire, guardate le pareti: i grandi murales raccontano la vita di Theodore Roosevelt, a cui è dedicata questa sala.',
            en: 'In front of you a drama from 150 million years ago is unfolding. A mother Barosaurus, a huge plant-eating dinosaur with an extremely long neck, rears up on her hind legs to defend her baby from an Allosaurus, a meat-eating predator. Her head reaches about fifteen metres: it is one of the tallest mounted dinosaurs in the world. The skeletons you see aren’t real bones but casts, light copies made of modern materials: the original bones would be far too heavy to hold such a pose. This scene has even caused debate among scientists. Could such a big animal really stand on two legs? Could its heart pump blood up to a head so high? Experts don’t all agree, and the museum deliberately chose a spectacular pose to make visitors think: science isn’t a list of certainties but a continuous process of hypotheses, evidence and debate. Barosaurus belonged to the sauropods, the group of long-necked giants. It ate leaves and plants and probably lived in herds, just as elephants do today. Allosaurus was one of the great predators of the Jurassic, long before Tyrannosaurus rex: about 80 million years separate the two, more than separate T. rex from us! Before going up, look at the walls: the large murals tell the life of Theodore Roosevelt, to whom this hall is dedicated.',
          },
        },
        {
          title: { it: 'Theodore Roosevelt, naturalista e Premio Nobel per la pace', en: 'Theodore Roosevelt, naturalist and Nobel Peace laureate' },
          date: '1858–1919',
          note: { it: 'Murales e citazioni nella Rotonda. Memoriale aperto nel 1936.', en: 'Murals and quotations in the Rotunda. Memorial opened in 1936.' },
          audio: {
            it: 'Theodore Roosevelt fu il ventiseiesimo presidente degli Stati Uniti, dal 1901 al 1909. Ma il legame con questo museo inizia prima: suo padre fu tra i fondatori del museo, e Theodore da ragazzo collezionava animali e scriveva appunti da naturalista. Da presidente protesse enormi territori naturali, creando parchi, riserve e monumenti nazionali: è considerato uno dei padri della conservazione della natura in America. Guardate i murales sulle pareti: raccontano alcuni momenti della sua vita, tra cui la costruzione del Canale di Panama e il trattato di pace che mise fine alla guerra tra Russia e Giappone nel 1905. Per quella mediazione, nel 1906, Roosevelt ricevette il Premio Nobel per la pace: fu il primo americano a vincerlo. Per voi delegati è un esempio interessante di diplomazia: un Paese terzo che aiuta due nemici a trovare un accordo. Ma la sua figura è anche discussa. Per molti anni, davanti a questo ingresso, c’era una statua di Roosevelt a cavallo, con accanto un uomo africano e un nativo americano a piedi, in posizione inferiore. Molti la consideravano un simbolo di gerarchie razziali e coloniali. Dopo un lungo dibattito pubblico, nel 2022 la città di New York ha deciso di rimuoverla. Il museo oggi presenta anche questi aspetti: un modo per ricordare che la storia va raccontata in modo completo, con le sue luci e le sue ombre. Ora prendete gli ascensori e salite al quarto piano: i dinosauri vi aspettano.',
            en: 'Theodore Roosevelt was the 26th president of the United States, from 1901 to 1909. But his link with this museum started earlier: his father was one of the museum’s founders, and as a boy Theodore collected animals and kept naturalist’s notes. As president he protected vast natural areas, creating parks, reserves and national monuments: he is considered one of the fathers of nature conservation in America. Look at the murals on the walls: they show moments of his life, including the building of the Panama Canal and the peace treaty that ended the war between Russia and Japan in 1905. For that mediation, in 1906, Roosevelt received the Nobel Peace Prize: he was the first American to win it. For you as delegates it is an interesting example of diplomacy: a third country helping two enemies reach an agreement. But he is also a debated figure. For many years, in front of this entrance, stood a statue of Roosevelt on horseback, flanked by an African man and a Native American man on foot, in a lower position. Many saw it as a symbol of racial and colonial hierarchy. After a long public debate, in 2022 the City of New York decided to remove it. Today the museum presents these aspects too: a way of remembering that history must be told in full, with its lights and shadows. Now take the elevators up to the fourth floor: the dinosaurs are waiting.',
          },
        },
      ],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'Per cosa Roosevelt vinse il Nobel per la pace?', en: 'Why did Roosevelt win the Nobel Peace Prize?' },
              options: [{ it: 'Per la mediazione tra Russia e Giappone', en: 'For mediating between Russia and Japan' }, { it: 'Per aver fondato l’ONU', en: 'For founding the UN' }, { it: 'Per il Canale di Panama', en: 'For the Panama Canal' }],
              answer: 0,
              why: { it: 'Il trattato di Portsmouth del 1905 chiuse la guerra russo-giapponese.', en: 'The 1905 Treaty of Portsmouth ended the Russo-Japanese War.' },
            },
            {
              q: { it: 'Gli scheletri nella Rotonda sono…', en: 'The skeletons in the Rotunda are…' },
              options: [{ it: 'Ossa vere', en: 'Real bones' }, { it: 'Calchi, cioè copie', en: 'Casts, i.e. copies' }, { it: 'Statue di marmo', en: 'Marble statues' }],
              answer: 1,
              why: { it: 'Le ossa vere sarebbero troppo pesanti per quella posa.', en: 'Real bones would be too heavy for that pose.' },
            },
          ],
        },
      ],
      ifClosed: {
        it: 'Se l’ingresso su Central Park West è chiuso, entrate dal Gilder Center (Columbus Avenue) e salite direttamente al 4° piano.',
        en: 'If the Central Park West entrance is closed, enter through the Gilder Center (Columbus Avenue) and go straight up to the 4th floor.',
      },
    },
    {
      id: 'african-mammals',
      galleries: ['akeley', 'africa', 'african', 'mammiferi africani', 'elefanti', 'elephants'],
      floor: '2',
      pin: { x: 240, y: 125 },
      minutes: 10,
      title: { it: 'I mammiferi africani', en: 'African Mammals' },
      area: { it: 'Akeley Hall · 2° piano', en: 'Akeley Hall · 2nd floor' },
      directions: {
        it: 'Dalla Rotonda entrate nella sala subito accanto, verso l’interno del museo: al centro, nella penombra, c’è un branco di elefanti.',
        en: 'From the Rotunda enter the hall right next to it, towards the inside of the museum: in the half-light at its centre stands a herd of elephants.',
      },
      audio: {
        it: 'Entrate in silenzio: questa sala è un piccolo viaggio in Africa. Al centro, un branco di elefanti; tutto intorno, finestre luminose che si aprono su savane, foreste e montagne. Si chiamano diorami: sono scene tridimensionali in cui gli animali, preparati con grande cura, sono collocati davanti a sfondi dipinti che riproducono luoghi reali dell’Africa, così come erano un secolo fa. Sono tra i più famosi diorami del mondo.',
        en: 'Walk in quietly: this hall is a small journey to Africa. In the centre, a herd of elephants; all around, glowing windows opening onto savannas, forests and mountains. They are called dioramas: three-dimensional scenes in which carefully prepared animals stand in front of painted backgrounds that reproduce real places in Africa as they were a century ago. They are among the most famous dioramas in the world.',
      },
      works: [
        {
          title: { it: 'Il branco di elefanti e l’arte dei diorami', en: 'The elephant herd and the art of dioramas' },
          artist: { it: 'Carl Akeley e collaboratori', en: 'Carl Akeley and collaborators' },
          date: '1936',
          note: { it: 'Sala aperta nel 1936. 28 diorami.', en: 'Hall opened in 1936. 28 dioramas.' },
          audio: {
            it: 'Questa sala porta il nome di Carl Akeley, un naturalista, esploratore e inventore americano. Akeley rivoluzionò il modo di preparare gli animali per i musei. Prima di lui, gli animali venivano semplicemente imbottiti di paglia e risultavano deformi e innaturali. Akeley invece studiava l’anatomia di ogni animale, scolpiva un modello dei muscoli e poi vi applicava la pelle, ottenendo animali che sembrano vivi, in movimento. Guardate gli elefanti al centro: sembrano camminare insieme, con l’esemplare più grande in testa, attento e vigile. Poi avvicinatevi ai diorami intorno alla sala. Ogni scena rappresenta un luogo preciso: una pozza d’acqua, una pianura, il fianco di un vulcano. Gli artisti partivano per l’Africa insieme agli scienziati, raccoglievano piante, rocce e terra, facevano schizzi e fotografie e poi ricostruivano tutto qui. Gli sfondi sono dipinti su pareti curve, in modo che non si veda dove finisce la scena e inizia la pittura. Provate a capire dove si trova il confine tra gli oggetti veri in primo piano e il paesaggio dipinto: non è facile! Ricordiamo però anche un aspetto che oggi ci fa riflettere: per creare queste scene, gli animali furono cacciati. Allora era considerato normale per la scienza. Oggi i musei non lo fanno più, e molte di queste specie sono minacciate. Questi diorami sono quindi anche una finestra su un mondo che in parte è scomparso.',
            en: 'This hall bears the name of Carl Akeley, an American naturalist, explorer and inventor. Akeley revolutionised the way animals were prepared for museums. Before him, animals were simply stuffed with straw and looked misshapen and unnatural. Akeley instead studied each animal’s anatomy, sculpted a model of the muscles and then applied the skin, creating animals that look alive and in motion. Look at the elephants in the centre: they seem to walk together, with the largest one in front, alert and watchful. Then go up to the dioramas around the hall. Each scene shows a specific place: a waterhole, a plain, the slope of a volcano. Artists travelled to Africa with the scientists, collected plants, rocks and soil, made sketches and photographs and then rebuilt everything here. The backgrounds are painted on curved walls, so you can’t see where the scene ends and the painting begins. Try to find the border between the real objects in front and the painted landscape: it isn’t easy! We should also remember something that makes us think today: to create these scenes, the animals were hunted. At the time this was considered normal for science. Museums no longer do it, and many of these species are now threatened. So these dioramas are also a window onto a world that has partly disappeared.',
          },
        },
        {
          title: { it: 'I gorilla di montagna e il primo parco nazionale africano', en: 'Mountain gorillas and Africa’s first national park' },
          date: '1925–1926',
          note: { it: 'Diorama dei gorilla, ambientato sui monti Virunga.', en: 'Gorilla diorama, set in the Virunga Mountains.' },
          audio: {
            it: 'Cercate il diorama dei gorilla di montagna: un gruppo di gorilla tra la vegetazione, sullo sfondo di montagne vulcaniche avvolte dalla nebbia. Questa scena è legata a una storia importante. Carl Akeley andò sui monti Virunga, al confine tra gli attuali Repubblica Democratica del Congo, Ruanda e Uganda, per raccogliere esemplari di gorilla per il museo. Ma lì accadde qualcosa: osservando questi animali da vicino, Akeley capì che erano creature pacifiche, intelligenti e sociali, molto diverse dai mostri feroci delle leggende dell’epoca. E capì anche che erano pochissimi, e in pericolo. Tornato in America, convinse il re del Belgio, che allora controllava il Congo come colonia, a proteggere quella zona. Nel 1925 nacque così il Parco Nazionale Alberto, il primo parco nazionale dell’Africa, oggi chiamato Parco Nazionale dei Virunga. Akeley tornò lì nel 1926 e morì durante la spedizione: è sepolto proprio su quelle montagne, vicino ai luoghi rappresentati nel diorama. Oggi il Parco dei Virunga è Patrimonio Mondiale dell’UNESCO, ma è anche in una zona colpita da conflitti armati, e i ranger che proteggono i gorilla rischiano la vita. Grazie a decenni di protezione, il numero dei gorilla di montagna è tornato lentamente a crescere. È una storia che collega scienza, colonialismo, conservazione e pace: esattamente il tipo di intreccio che si discute all’ONU.',
            en: 'Look for the mountain gorilla diorama: a group of gorillas among the vegetation, against a background of mist-wrapped volcanic mountains. This scene is linked to an important story. Carl Akeley went to the Virunga Mountains, on the border of today’s Democratic Republic of the Congo, Rwanda and Uganda, to collect gorilla specimens for the museum. But something happened there: watching these animals up close, Akeley understood that they were peaceful, intelligent, social creatures, very different from the fierce monsters of the legends of the time. He also understood that there were very few of them, and that they were in danger. Back in America, he persuaded the King of Belgium, who then controlled the Congo as a colony, to protect the area. So in 1925 Albert National Park was born, Africa’s first national park, now called Virunga National Park. Akeley went back in 1926 and died during the expedition: he is buried on those very mountains, near the places shown in the diorama. Today Virunga is a UNESCO World Heritage Site, but it is also in an area hit by armed conflict, and the rangers who protect the gorillas risk their lives. Thanks to decades of protection, the number of mountain gorillas has slowly started to grow again. It’s a story connecting science, colonialism, conservation and peace: exactly the kind of tangle discussed at the UN.',
          },
        },
      ],
      games: [
        {
          kind: 'match',
          prompt: { it: 'Abbina l’animale al suo habitat', en: 'Match the animal to its habitat' },
          pairs: [
            [{ it: 'Gorilla di montagna', en: 'Mountain gorilla' }, { it: 'Foreste dei vulcani Virunga', en: 'Forests of the Virunga volcanoes' }],
            [{ it: 'Leone', en: 'Lion' }, { it: 'Savana', en: 'Savanna' }],
            [{ it: 'Ippopotamo', en: 'Hippopotamus' }, { it: 'Fiumi e laghi', en: 'Rivers and lakes' }],
            [{ it: 'Orice', en: 'Oryx' }, { it: 'Deserto e zone aride', en: 'Desert and dry lands' }],
          ],
        },
        {
          kind: 'hunt',
          prompt: { it: 'Trova nella sala…', en: 'Find in the hall…' },
          items: [
            { it: 'L’elefante che guida il branco', en: 'The elephant leading the herd' },
            { it: 'Un diorama con un vulcano sullo sfondo', en: 'A diorama with a volcano in the background' },
            { it: 'Il punto in cui il terreno vero diventa dipinto', en: 'The spot where the real ground turns into painting' },
          ],
        },
      ],
    },
    {
      id: 'titanosaur',
      galleries: ['titanosauro', 'titanosaur', 'orientation', 'wallach', 'ascensori', 'elevators'],
      floor: '4',
      pin: { x: 280, y: 125 },
      minutes: 8,
      title: { it: 'Il Titanosauro', en: 'The Titanosaur' },
      area: { it: 'Wallach Orientation Center · 4° piano', en: 'Wallach Orientation Center · 4th floor' },
      directions: {
        it: 'Prendete gli ascensori fino al 4° piano: appena si aprono le porte, la testa del Titanosauro è davanti a voi.',
        en: 'Take the elevators to the 4th floor: as soon as the doors open, the Titanosaur’s head is right in front of you.',
      },
      audio: {
        it: 'Benvenuti al quarto piano, il regno dei fossili. Questo è il centro di orientamento: da qui partono le sale dedicate all’evoluzione dei vertebrati, dai primi pesci ai dinosauri, fino ai mammiferi. Ma prima, alzate lo sguardo verso il gigante che occupa tutta la sala, e anche un po’ di più.',
        en: 'Welcome to the fourth floor, the kingdom of fossils. This is the orientation centre: from here start the halls devoted to the evolution of vertebrates, from the first fish to the dinosaurs and on to mammals. But first, look up at the giant that fills the whole room, and a bit more.',
      },
      works: [
        {
          title: { it: 'Patagotitan mayorum', en: 'Patagotitan mayorum' },
          date: 'c. 100 milioni di anni fa / million years ago',
          note: { it: 'Calco lungo 37 metri (122 piedi). Fossili scoperti in Patagonia, Argentina.', en: 'Cast 37 metres (122 feet) long. Fossils found in Patagonia, Argentina.' },
          audio: {
            it: 'Eccolo: il Titanosauro. È lungo circa 37 metri, più o meno come tre autobus messi in fila, ed è così grande che non entra nella sala: la sua testa sporge fuori, verso gli ascensori, come per salutare i visitatori. Si stima che da vivo pesasse circa 70 tonnellate, quanto una decina di elefanti africani. È uno dei più grandi animali mai vissuti sulla Terra. Il suo nome scientifico è Patagotitan mayorum: “titano della Patagonia”, con un omaggio alla famiglia Mayo, proprietaria del ranch dove furono trovati i fossili. La storia della scoperta è curiosa. Nel 2010 un contadino, in un ranch della provincia di Chubut, in Argentina, notò un osso enorme che spuntava dal terreno. Gli scienziati del Museo Paleontologico Egidio Feruglio, che porta il nome di un geologo italiano emigrato in Argentina, iniziarono gli scavi e trovarono più di 200 ossa, appartenenti ad almeno sei individui. Gli animali vissero circa 100 milioni di anni fa, nel Cretaceo. Lo scheletro che vedete è un calco: le ossa originali sono rimaste in Argentina, dove vengono studiate. Questo è un esempio di come funziona oggi la scienza: un Paese conserva i suoi fossili, li condivide con il mondo attraverso copie e ricerche, e i musei collaborano a livello internazionale. Guardate le zampe: erano colonne in grado di reggere un peso enorme. E il collo lunghissimo permetteva al Titanosauro di raggiungere le foglie degli alberi più alti senza muoversi, risparmiando energia.',
            en: 'Here it is: the Titanosaur. It is about 37 metres long, roughly three buses in a row, and so big that it doesn’t fit in the room: its head sticks out towards the elevators, as if greeting visitors. It is estimated to have weighed about 70 tons when alive, as much as ten African elephants. It is one of the largest animals ever to have lived on Earth. Its scientific name is Patagotitan mayorum: “titan of Patagonia”, with a tribute to the Mayo family, who owned the ranch where the fossils were found. The story of the discovery is curious. In 2010 a farmhand on a ranch in Chubut province, Argentina, noticed a huge bone sticking out of the ground. Scientists from the Egidio Feruglio Palaeontological Museum, named after an Italian geologist who emigrated to Argentina, began digging and found more than 200 bones belonging to at least six individuals. The animals lived about 100 million years ago, in the Cretaceous. The skeleton you see is a cast: the original bones stayed in Argentina, where they are studied. This is an example of how science works today: a country keeps its fossils, shares them with the world through copies and research, and museums cooperate internationally. Look at the legs: they were pillars able to bear an enormous weight. And the very long neck let the Titanosaur reach the leaves of the tallest trees without moving, saving energy.',
          },
        },
      ],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'Quanto è lungo il Titanosauro, più o meno?', en: 'About how long is the Titanosaur?' },
              options: [{ it: 'Come un’automobile', en: 'Like a car' }, { it: 'Come tre autobus in fila', en: 'Like three buses in a row' }, { it: 'Come un campo da calcio', en: 'Like a football pitch' }],
              answer: 1,
              why: { it: 'Circa 37 metri.', en: 'About 37 metres.' },
            },
            {
              q: { it: 'Dove sono state trovate le sue ossa?', en: 'Where were its bones found?' },
              options: [{ it: 'In Patagonia, Argentina', en: 'In Patagonia, Argentina' }, { it: 'Nel Montana, USA', en: 'In Montana, USA' }, { it: 'In Mongolia', en: 'In Mongolia' }],
              answer: 0,
              why: { it: 'Le ossa originali sono rimaste in Argentina.', en: 'The original bones stayed in Argentina.' },
            },
          ],
        },
      ],
    },
    {
      id: 'saurischian',
      galleries: ['saurischi', 'saurischian', 't rex', 't. rex', 'trex', 'tirannosauro', 'tyrannosaurus'],
      floor: '4',
      pin: { x: 235, y: 192 },
      minutes: 15,
      title: { it: 'Tyrannosaurus rex e i saurischi', en: 'Tyrannosaurus rex and the saurischians' },
      area: { it: 'Hall of Saurischian Dinosaurs · 4° piano', en: 'Hall of Saurischian Dinosaurs · 4th floor' },
      directions: {
        it: 'Dall’Orientation Center seguite le indicazioni “Saurischian Dinosaurs”: cercate il grande scheletro del T. rex in posizione orizzontale.',
        en: 'From the Orientation Center follow the signs for “Saurischian Dinosaurs”: look for the large T. rex skeleton in a horizontal pose.',
      },
      audio: {
        it: 'I dinosauri si dividono in due grandi gruppi, in base alla forma del bacino. Questa sala è dedicata ai saurischi, “dal bacino di lucertola”: comprende i grandi carnivori come il T. rex e i giganti erbivori dal collo lungo, come l’Apatosauro. Un dettaglio sorprendente: gli uccelli discendono proprio da questo gruppo. Il piccione che vedete in strada è, in un certo senso, un dinosauro!',
        en: 'Dinosaurs are divided into two large groups, based on the shape of the hip. This hall is devoted to the saurischians, the “lizard-hipped” dinosaurs: it includes the big meat-eaters like T. rex and the long-necked plant-eating giants like Apatosaurus. A surprising detail: birds descend from this very group. The pigeon you see in the street is, in a way, a dinosaur!',
      },
      works: [
        {
          title: { it: 'Tyrannosaurus rex', en: 'Tyrannosaurus rex' },
          date: 'c. 66–68 milioni di anni fa / million years ago',
          note: { it: 'Ossa fossili vere, rinvenute in Montana da Barnum Brown all’inizio del Novecento.', en: 'Real fossil bones, found in Montana by Barnum Brown in the early 1900s.' },
          audio: {
            it: 'Ecco il re dei dinosauri: il Tyrannosaurus rex. A differenza del Titanosauro, quasi tutto ciò che vedete qui è osso fossile vero, vecchio di circa 66 milioni di anni. I resti furono scoperti nel Montana all’inizio del Novecento da Barnum Brown, il più famoso cacciatore di fossili del museo, soprannominato “Mister Bones”. Fu proprio il museo di New York, nel 1905, a dare a questo animale il suo nome: Tyrannosaurus rex, cioè “re dei rettili tiranni”. Guardate la postura. Per decenni il T. rex fu esposto in piedi, dritto, con la coda appoggiata a terra, come un canguro gigante. Negli anni Novanta gli scienziati capirono che era sbagliato: le impronte fossili non mostrano segni di coda trascinata, e l’anatomia indica un animale bilanciato in orizzontale, con il corpo parallelo al terreno e la coda sollevata come contrappeso. Così lo scheletro fu smontato e rimontato nella posizione che vedete oggi. È un altro esempio di come la scienza corregge se stessa. Osservate i denti: alcuni sono lunghi come una banana e hanno il bordo seghettato come un coltello da pane. Il morso del T. rex era tra i più potenti mai esistiti, capace di frantumare le ossa. E le zampe anteriori, così piccole? Ancora oggi gli scienziati discutono a cosa servissero. Infine, ricordate: il T. rex visse alla fine dell’era dei dinosauri. Poco dopo, un asteroide colpì la Terra e cambiò tutto. Ne riparleremo davanti ai meteoriti.',
            en: 'Here is the king of the dinosaurs: Tyrannosaurus rex. Unlike the Titanosaur, almost everything you see here is real fossil bone, about 66 million years old. The remains were discovered in Montana in the early 1900s by Barnum Brown, the museum’s most famous fossil hunter, nicknamed “Mr. Bones”. It was this very New York museum that, in 1905, gave the animal its name: Tyrannosaurus rex, “king of the tyrant lizards”. Look at the posture. For decades T. rex was displayed upright, with its tail resting on the ground, like a giant kangaroo. In the 1990s scientists realised this was wrong: fossil footprints show no marks of a dragging tail, and the anatomy points to an animal balanced horizontally, its body parallel to the ground and its tail raised as a counterweight. So the skeleton was dismantled and remounted in the position you see today. It is another example of science correcting itself. Look at the teeth: some are as long as a banana and have serrated edges like a bread knife. T. rex had one of the most powerful bites ever, able to crush bone. And those tiny front arms? Scientists still debate what they were for. Finally, remember: T. rex lived at the very end of the age of dinosaurs. Shortly afterwards an asteroid hit the Earth and changed everything. We’ll come back to that in front of the meteorites.',
          },
        },
        {
          title: { it: 'Apatosauro e le impronte di Glen Rose', en: 'Apatosaurus and the Glen Rose trackway' },
          date: '150 e 113 milioni di anni fa / million years ago',
          note: { it: 'Impronte fossili dal letto del fiume Paluxy, Texas, scavate nel 1938.', en: 'Fossil footprints from the Paluxy River bed, Texas, excavated in 1938.' },
          audio: {
            it: 'Nella stessa sala trovate due testimonianze dei giganti erbivori. La prima è l’Apatosauro, un sauropode lungo più di 20 metri. Forse lo conoscete con un altro nome: Brontosauro, “lucertola del tuono”. Per oltre un secolo gli scienziati hanno discusso se Brontosauro e Apatosauro fossero lo stesso animale: è una delle storie più divertenti della paleontologia, piena di errori, rivalità e ripensamenti. Ora cercate una lunga lastra di roccia con grandi impronte: è la pista di Glen Rose, in Texas. Circa 113 milioni di anni fa, su una distesa di fango vicino al mare, un enorme sauropode camminò lasciando impronte rotonde grandi come pneumatici. E accanto alle sue ci sono impronte a tre dita di un predatore carnivoro. Lo stava inseguendo? Erano passati nello stesso momento? Gli scienziati ne discutono ancora. Le impronte furono scavate nel 1938 da Roland T. Bird, un paleontologo del museo, che le tagliò in blocchi e le fece trasportare fino a New York. Le impronte sono preziosissime perché raccontano qualcosa che le ossa non dicono: come si muovevano gli animali, a che velocità, se camminavano soli o in gruppo. Sono come una fotografia di un attimo di vita, rimasta impressa nella pietra per oltre cento milioni di anni. Mettete la vostra scarpa accanto a un’impronta: quanto siete piccoli?',
            en: 'In the same hall you’ll find two witnesses to the plant-eating giants. The first is Apatosaurus, a sauropod more than 20 metres long. You may know it by another name: Brontosaurus, “thunder lizard”. For over a century scientists argued about whether Brontosaurus and Apatosaurus were the same animal: it is one of palaeontology’s funniest stories, full of mistakes, rivalries and second thoughts. Now look for a long slab of rock with large footprints: it is the Glen Rose trackway, from Texas. About 113 million years ago, on a muddy flat near the sea, a huge sauropod walked along, leaving round footprints as big as tyres. Next to them are three-toed prints of a meat-eating predator. Was it chasing the sauropod? Did they pass at the same time? Scientists are still debating. The prints were excavated in 1938 by Roland T. Bird, a museum palaeontologist, who cut them into blocks and had them shipped to New York. Footprints are extremely valuable because they tell us things bones don’t: how animals moved, how fast, whether they walked alone or in groups. They are like a snapshot of a moment of life, pressed into stone for over a hundred million years. Put your shoe next to a footprint: how small are you?',
          },
        },
      ],
      games: [
        {
          kind: 'order',
          prompt: { it: 'Metti in ordine dal più antico', en: 'Order from oldest' },
          items: [
            { label: { it: 'Nascita della Terra', en: 'Earth forms' }, tag: '4,5 mld' },
            { label: { it: 'Primi pesci', en: 'First fish' }, tag: '500 mln' },
            { label: { it: 'Barosauro e Allosauro (Giurassico)', en: 'Barosaurus and Allosaurus (Jurassic)' }, tag: '150 mln' },
            { label: { it: 'Impronte di Glen Rose', en: 'Glen Rose trackway' }, tag: '113 mln' },
            { label: { it: 'Titanosauro', en: 'Titanosaur' }, tag: '100 mln' },
            { label: { it: 'T. rex e l’asteroide', en: 'T. rex and the asteroid' }, tag: '66 mln' },
          ],
        },
        {
          kind: 'hunt',
          prompt: { it: 'Trova nella sala…', en: 'Find in the hall…' },
          items: [
            { it: 'Un dente del T. rex con il bordo seghettato', en: 'A serrated T. rex tooth' },
            { it: 'Un’impronta a tre dita', en: 'A three-toed footprint' },
            { it: 'Il collo lunghissimo dell’Apatosauro', en: 'Apatosaurus’s very long neck' },
          ],
        },
      ],
    },
    {
      id: 'ornithischian',
      galleries: ['ornitischi', 'ornithischian', 'triceratopo', 'triceratops', 'stegosauro', 'stegosaurus'],
      floor: '4',
      pin: { x: 235, y: 68 },
      minutes: 10,
      title: { it: 'Triceratopo, Stegosauro e la “mummia”', en: 'Triceratops, Stegosaurus and the “mummy”' },
      area: { it: 'Hall of Ornithischian Dinosaurs · 4° piano', en: 'Hall of Ornithischian Dinosaurs · 4th floor' },
      directions: {
        it: 'Attraversate l’Orientation Center e seguite “Ornithischian Dinosaurs”, sul lato opposto rispetto al T. rex.',
        en: 'Cross the Orientation Center and follow “Ornithischian Dinosaurs”, on the opposite side from T. rex.',
      },
      audio: {
        it: 'Questi sono gli ornitischi, i dinosauri “dal bacino di uccello”: un nome che inganna, perché gli uccelli in realtà discendono dall’altro gruppo! Erano tutti erbivori, e per difendersi dai predatori svilupparono soluzioni incredibili: corna, placche, corazze, code a mazza. Una vera esposizione di armature, come quella dei cavalieri al Met.',
        en: 'These are the ornithischians, the “bird-hipped” dinosaurs: a misleading name, because birds actually descend from the other group! They were all plant-eaters, and to defend themselves from predators they developed incredible solutions: horns, plates, body armour, club tails. A real exhibition of armour, like the knights at the Met.',
      },
      works: [
        {
          title: { it: 'Triceratopo e Stegosauro', en: 'Triceratops and Stegosaurus' },
          date: '68–66 e 150 milioni di anni fa / million years ago',
          note: { it: 'Due strategie di difesa a 80 milioni di anni di distanza.', en: 'Two defence strategies 80 million years apart.' },
          audio: {
            it: 'Cominciamo dal Triceratopo, “faccia con tre corna”. Visse alla fine del Cretaceo, nello stesso tempo e negli stessi luoghi del T. rex: erano vicini di casa, e probabilmente nemici. Guardate il cranio: è enorme, con due lunghe corna sopra gli occhi, un corno più piccolo sul naso e un grande collare osseo dietro la testa. A cosa serviva il collare? Per difendersi, certo, ma molti scienziati pensano che servisse anche a farsi riconoscere e ad attirare i partner, un po’ come la coda del pavone. Su alcuni fossili di Triceratopo sono stati trovati segni di morsi di T. rex: la prova di un vero duello. Ora spostatevi verso lo Stegosauro, con le sue grandi placche ossee lungo la schiena e quattro lunghi aculei sulla coda. Lo Stegosauro visse molto prima, nel Giurassico. Le placche erano forse utili a regolare la temperatura del corpo o a impressionare i rivali, mentre la coda con gli aculei era un’arma micidiale. Una curiosità che fa sempre sorridere: lo Stegosauro era lungo quanto un autobus, ma il suo cervello era grande più o meno come una noce. Eppure è sopravvissuto per milioni di anni: l’intelligenza non è l’unico modo per avere successo nell’evoluzione! Cercate anche l’Ankylosauro, il “carro armato” dei dinosauri, coperto di placche e con una coda a mazza capace di rompere le ossa di un predatore.',
            en: 'Let’s start with Triceratops, “three-horned face”. It lived at the end of the Cretaceous, at the same time and in the same places as T. rex: they were neighbours, and probably enemies. Look at the skull: it’s huge, with two long horns above the eyes, a smaller horn on the nose and a big bony frill behind the head. What was the frill for? Defence, of course, but many scientists think it also helped individuals recognise each other and attract mates, a bit like a peacock’s tail. Some Triceratops fossils bear T. rex bite marks: proof of a real duel. Now move to Stegosaurus, with its large bony plates along its back and four long spikes on its tail. Stegosaurus lived much earlier, in the Jurassic. The plates may have helped regulate body temperature or impress rivals, while the spiked tail was a deadly weapon. A fact that always raises a smile: Stegosaurus was as long as a bus, but its brain was roughly the size of a walnut. Yet it survived for millions of years: intelligence isn’t the only route to evolutionary success! Look also for Ankylosaurus, the dinosaurs’ “tank”, covered in plates and with a club tail able to break a predator’s bones.',
          },
        },
        {
          title: { it: 'La “mummia” di Edmontosauro', en: 'The Edmontosaurus “mummy”' },
          date: 'c. 66 milioni di anni fa / million years ago',
          note: { it: 'Scoperta in Wyoming nel 1908. Con impronte fossili della pelle.', en: 'Found in Wyoming in 1908. With fossil skin impressions.' },
          audio: {
            it: 'Cercate ora un fossile molto speciale: la cosiddetta “mummia” di dinosauro. È un Edmontosauro, un dinosauro dal becco d’anatra, scoperto nel 1908 in Wyoming da una famiglia di cacciatori di fossili, gli Sternberg. Non è una vera mummia come quelle egizie: non ci sono tessuti conservati. Ma attorno alle ossa sono rimaste le impronte della pelle, con la sua trama di piccole squame, come una specie di calco naturale. È uno dei primi fossili che hanno mostrato agli scienziati come fosse davvero la pelle di un dinosauro. Come è possibile? Probabilmente l’animale morì in un luogo asciutto, il suo corpo si seccò al sole, e poi fu sepolto rapidamente dalla sabbia di un fiume in piena, che ne conservò la forma prima che si decomponesse. Guardate la posizione: il corpo è sdraiato sulla schiena, con la testa piegata all’indietro e le zampe raccolte, una posa tipica degli animali che si disidratano dopo la morte. Gli Edmontosauri vivevano in grandi branchi, avevano centinaia di denti che si rinnovavano continuamente per masticare piante dure, e forse comunicavano con suoni. Pensateci: questo animale visse negli ultimi momenti dell’era dei dinosauri, poco prima dell’asteroide. È una finestra su un mondo che stava per scomparire. Ora scendete al primo piano: dal mondo dei dinosauri passiamo al gigante più grande che sia mai esistito, e che vive ancora oggi.',
            en: 'Now look for a very special fossil: the so-called dinosaur “mummy”. It is an Edmontosaurus, a duck-billed dinosaur, discovered in 1908 in Wyoming by a family of fossil hunters, the Sternbergs. It isn’t a real mummy like the Egyptian ones: no tissue survives. But impressions of the skin remain around the bones, with their texture of small scales, like a natural cast. It was one of the first fossils to show scientists what dinosaur skin really looked like. How is it possible? The animal probably died in a dry place, its body dried out in the sun and was then quickly buried by sand from a flooding river, which preserved its shape before it decayed. Look at the position: the body lies on its back, head bent backwards and legs drawn in, a typical pose of animals that dry out after death. Edmontosaurs lived in large herds, had hundreds of teeth that were constantly replaced to chew tough plants, and may have communicated with sounds. Think about it: this animal lived in the very last moments of the age of dinosaurs, just before the asteroid. It is a window onto a world about to disappear. Now go down to the first floor: from the world of dinosaurs we move to the largest giant that has ever existed, and that still lives today.',
          },
        },
      ],
      games: [
        {
          kind: 'match',
          prompt: { it: 'Abbina il dinosauro alla sua difesa', en: 'Match the dinosaur to its defence' },
          pairs: [
            [{ it: 'Triceratopo', en: 'Triceratops' }, { it: 'Tre corna e collare osseo', en: 'Three horns and a bony frill' }],
            [{ it: 'Stegosauro', en: 'Stegosaurus' }, { it: 'Placche sul dorso e coda con aculei', en: 'Back plates and spiked tail' }],
            [{ it: 'Ankylosauro', en: 'Ankylosaurus' }, { it: 'Corazza e coda a mazza', en: 'Armour and club tail' }],
            [{ it: 'Edmontosauro', en: 'Edmontosaurus' }, { it: 'Vivere in grandi branchi', en: 'Living in large herds' }],
          ],
        },
      ],
    },
    {
      id: 'ocean',
      galleries: ['balena', 'whale', 'oceano', 'ocean', 'milstein', 'vita oceanica', 'ocean life'],
      floor: '1',
      pin: { x: 210, y: 210 },
      minutes: 12,
      title: { it: 'La balenottera azzurra', en: 'The blue whale' },
      area: { it: 'Milstein Hall of Ocean Life · 1° piano', en: 'Milstein Hall of Ocean Life · 1st floor' },
      directions: {
        it: 'Scendete al 1° piano e seguite le indicazioni “Ocean Life”: entrerete in una grande sala blu, con la balena sospesa al soffitto.',
        en: 'Go down to the 1st floor and follow the “Ocean Life” signs: you’ll enter a large blue hall with the whale hanging from the ceiling.',
      },
      audio: {
        it: 'Dalla terra al mare. Questa sala, illuminata di blu, è dedicata alla vita negli oceani, che coprono più del 70 per cento del pianeta e ospitano un’enorme varietà di specie, molte delle quali ancora sconosciute. Affacciatevi dalla balconata o scendete al piano inferiore: il soffitto è dominato dalla balenottera azzurra.',
        en: 'From land to sea. This blue-lit hall is devoted to life in the oceans, which cover more than 70 percent of the planet and host an enormous variety of species, many still unknown. Look out from the balcony or go down to the lower level: the ceiling is dominated by the blue whale.',
      },
      works: [
        {
          title: { it: 'La balenottera azzurra', en: 'The blue whale' },
          date: '1969 (modello / model)',
          note: { it: 'Modello a grandezza naturale, lungo circa 29 metri (94 piedi).', en: 'Life-size model, about 29 metres (94 feet) long.' },
          audio: {
            it: 'Sopra le vostre teste nuota l’animale più grande che sia mai esistito sulla Terra, più grande anche dei dinosauri: la balenottera azzurra. Il modello è lungo circa 29 metri ed è stato costruito nel 1969, ispirandosi a una femmina reale. Non è un animale vero, ma una ricostruzione accurata in materiali leggeri. Pensate a qualche numero: il cuore di una balenottera azzurra pesa quanto una piccola automobile, la lingua quanto un elefante, e il suo verso è uno dei suoni più forti prodotti da un animale, udibile a centinaia di chilometri di distanza sott’acqua. Eppure si nutre di animali minuscoli: il krill, piccoli crostacei lunghi pochi centimetri, di cui può mangiare tonnellate in un solo giorno, filtrando l’acqua con i fanoni. Nel Novecento la caccia commerciale portò le balene azzurre vicino all’estinzione: ne furono uccise centinaia di migliaia. Dal 1966 sono protette a livello internazionale, e nel 1986 la Commissione Baleniera Internazionale ha introdotto una moratoria sulla caccia commerciale alle balene. Le popolazioni stanno lentamente recuperando, ma restano minacciate da collisioni con le navi, inquinamento, rumore sottomarino e cambiamenti climatici. Una curiosità: nel 2003, durante un restauro, alla balena è stato aggiunto un ombelico, perché le balene sono mammiferi e nascono dal grembo della madre, proprio come noi. Il museo lo ha annunciato come una notizia importante!',
            en: 'Above your heads swims the largest animal that has ever lived on Earth, bigger even than the dinosaurs: the blue whale. The model is about 29 metres long and was built in 1969, based on a real female. It isn’t a real animal but an accurate reconstruction in light materials. Think of some numbers: a blue whale’s heart weighs as much as a small car, its tongue as much as an elephant, and its call is one of the loudest sounds made by any animal, audible hundreds of kilometres away underwater. Yet it feeds on tiny animals: krill, small crustaceans a few centimetres long, of which it can eat tons in a single day, filtering the water through its baleen. In the 20th century commercial hunting brought blue whales close to extinction: hundreds of thousands were killed. Since 1966 they have been internationally protected, and in 1986 the International Whaling Commission introduced a moratorium on commercial whaling. Populations are slowly recovering but remain threatened by ship strikes, pollution, underwater noise and climate change. A curiosity: in 2003, during a restoration, the whale was given a belly button, because whales are mammals and are born from their mother’s womb, just like us. The museum announced it as important news!',
          },
        },
        {
          title: { it: 'I diorami degli oceani e il trattato sull’alto mare', en: 'The ocean dioramas and the High Seas Treaty' },
          date: '1933 – oggi / today',
          note: { it: 'Diorami lungo le pareti, tra cui il capodoglio contro il calamaro gigante.', en: 'Dioramas along the walls, including the sperm whale versus giant squid.' },
          audio: {
            it: 'Ora girate lungo le pareti e osservate i diorami. Cercate la scena più drammatica: un capodoglio che lotta contro un calamaro gigante, nel buio delle profondità. Per secoli il calamaro gigante è stato considerato una leggenda dei marinai, il “kraken”; solo nel 2004 è stato fotografato vivo per la prima volta nel suo ambiente naturale. Le profondità marine sono ancora oggi uno dei luoghi meno esplorati del pianeta: conosciamo meglio la superficie della Luna che i fondali degli oceani. Cercate poi la barriera corallina delle Bahamas: i coralli sono animali, non piante, e le barriere ospitano circa un quarto di tutte le specie marine, pur coprendo una piccolissima parte dei fondali. Oggi sono minacciate dal riscaldamento delle acque, che le fa “sbiancare”. E qui arriviamo all’ONU. Gli oceani sono l’Obiettivo 14 dell’Agenda 2030: “La vita sott’acqua”. Ma c’è un problema: quasi due terzi degli oceani sono “alto mare”, cioè acque che non appartengono a nessuno Stato. Per decenni nessuno era responsabile di proteggerle. Dopo quasi vent’anni di negoziati, nel 2023 le Nazioni Unite hanno adottato un nuovo trattato per proteggere la biodiversità in alto mare, che permette di creare aree marine protette anche nelle acque internazionali. Per entrare in vigore aveva bisogno di essere ratificato da almeno 60 Stati. È un esempio perfetto di come la diplomazia multilaterale possa proteggere un bene comune dell’umanità. Se nella vostra conferenza c’è una commissione sull’ambiente, questo è un tema da conoscere.',
            en: 'Now walk along the walls and look at the dioramas. Find the most dramatic scene: a sperm whale fighting a giant squid in the dark depths. For centuries the giant squid was considered a sailors’ legend, the “kraken”; it was photographed alive in its natural habitat for the first time only in 2004. The deep sea is still one of the least explored places on the planet: we know the surface of the Moon better than the ocean floor. Then look for the Bahamas coral reef: corals are animals, not plants, and reefs host about a quarter of all marine species while covering a tiny part of the seabed. Today they are threatened by warming waters, which make them “bleach”. And here we come to the UN. The oceans are Goal 14 of the 2030 Agenda: “Life below water”. But there’s a problem: almost two thirds of the oceans are “high seas”, waters that belong to no state. For decades nobody was responsible for protecting them. After almost twenty years of negotiations, in 2023 the United Nations adopted a new treaty to protect biodiversity on the high seas, making it possible to create marine protected areas in international waters too. To enter into force it needed ratification by at least 60 states. It is a perfect example of how multilateral diplomacy can protect a common good of humanity. If your conference has an environment committee, this is a topic worth knowing.',
          },
        },
      ],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'Di cosa si nutre la balenottera azzurra?', en: 'What does the blue whale eat?' },
              options: [{ it: 'Squali', en: 'Sharks' }, { it: 'Krill, piccoli crostacei', en: 'Krill, tiny crustaceans' }, { it: 'Alghe', en: 'Seaweed' }],
              answer: 1,
              why: { it: 'Ne filtra tonnellate al giorno con i fanoni.', en: 'It filters tons a day through its baleen.' },
            },
            {
              q: { it: 'Cos’è l’“alto mare”?', en: 'What are the “high seas”?' },
              options: [{ it: 'Il mare con onde alte', en: 'Sea with high waves' }, { it: 'Le acque che non appartengono a nessuno Stato', en: 'Waters belonging to no state' }, { it: 'Il mare vicino ai poli', en: 'Sea near the poles' }],
              answer: 1,
              why: { it: 'Sono quasi due terzi degli oceani.', en: 'Almost two thirds of the oceans.' },
            },
            {
              q: { it: 'Quale Obiettivo dell’Agenda 2030 riguarda gli oceani?', en: 'Which 2030 Agenda Goal concerns the oceans?' },
              options: [{ it: 'Obiettivo 6', en: 'Goal 6' }, { it: 'Obiettivo 14', en: 'Goal 14' }, { it: 'Obiettivo 17', en: 'Goal 17' }],
              answer: 1,
              why: { it: '“La vita sott’acqua”.', en: '“Life below water”.' },
            },
          ],
        },
      ],
      ifClosed: {
        it: 'Il piano inferiore della sala a volte chiude prima: in quel caso guardate la balena dalla balconata superiore.',
        en: 'The hall’s lower level sometimes closes early: in that case view the whale from the upper balcony.',
      },
    },
    {
      id: 'human-origins',
      galleries: ['origini umane', 'human origins', 'spitzer', 'lucy', 'evoluzione', 'evolution'],
      floor: '1',
      pin: { x: 250, y: 85 },
      minutes: 10,
      title: { it: 'Le origini dell’umanità', en: 'Human origins' },
      area: { it: 'Spitzer Hall of Human Origins · 1° piano', en: 'Spitzer Hall of Human Origins · 1st floor' },
      directions: {
        it: 'Dalla sala della balena seguite le indicazioni “Human Origins”, verso il lato nord del museo.',
        en: 'From the whale hall follow the “Human Origins” signs towards the north side of the museum.',
      },
      audio: {
        it: 'Questa sala racconta la storia più vicina a noi: la nostra. Come siamo diventati umani? Da dove veniamo? Le risposte arrivano dai fossili e, negli ultimi decenni, dal DNA. Preparatevi a scoprire che, in un certo senso, siamo tutti parenti stretti.',
        en: 'This hall tells the story closest to us: our own. How did we become human? Where do we come from? The answers come from fossils and, in recent decades, from DNA. Get ready to discover that, in a way, we are all close relatives.',
      },
      works: [
        {
          title: { it: 'Lucy e le impronte di Laetoli', en: 'Lucy and the Laetoli footprints' },
          date: '3,2 e 3,6 milioni di anni fa / million years ago',
          note: { it: 'Calchi. Originali in Etiopia e Tanzania.', en: 'Casts. Originals in Ethiopia and Tanzania.' },
          audio: {
            it: 'Cercate lo scheletro di Lucy. Nel 1974, in Etiopia, un gruppo di ricercatori trovò circa il 40 per cento dello scheletro di una giovane femmina vissuta 3,2 milioni di anni fa. La sera, all’accampamento, ascoltavano la canzone dei Beatles “Lucy in the Sky with Diamonds”, e così la chiamarono Lucy. In Etiopia è chiamata Dinknesh, che significa “sei meravigliosa”. Lucy apparteneva alla specie Australopithecus afarensis. Era alta poco più di un metro, aveva un cervello piccolo, simile a quello di uno scimpanzé, ma camminava già in posizione eretta su due gambe. Questa scoperta fu fondamentale: dimostrò che i nostri antenati hanno imparato a camminare in piedi molto prima di sviluppare un cervello grande. Ora cercate le impronte di Laetoli. Sono state trovate in Tanzania nel 1978 da un gruppo guidato dall’archeologa britannica Mary Leakey. Circa 3,6 milioni di anni fa, due o tre individui camminarono su uno strato di cenere vulcanica bagnata dalla pioggia, che poi si indurì come cemento. Guardate le orme: l’alluce è allineato alle altre dita, l’arco del piede è simile al nostro. Sono le più antiche impronte conosciute di antenati che camminavano come noi. Il diorama vi mostra una possibile ricostruzione: due figure che camminano vicine, forse un adulto e un giovane. È una scena di quasi quattro milioni di anni fa, eppure stranamente familiare.',
            en: 'Look for Lucy’s skeleton. In 1974, in Ethiopia, a team of researchers found about 40 percent of the skeleton of a young female who lived 3.2 million years ago. In the evening, at camp, they listened to the Beatles song “Lucy in the Sky with Diamonds”, so they called her Lucy. In Ethiopia she is called Dinknesh, meaning “you are marvellous”. Lucy belonged to the species Australopithecus afarensis. She was just over a metre tall and had a small brain, similar to a chimpanzee’s, but she already walked upright on two legs. This discovery was fundamental: it showed that our ancestors learned to walk upright long before developing a large brain. Now look for the Laetoli footprints. They were found in Tanzania in 1978 by a team led by the British archaeologist Mary Leakey. About 3.6 million years ago, two or three individuals walked across a layer of volcanic ash dampened by rain, which then hardened like cement. Look at the prints: the big toe is in line with the other toes and the arch of the foot is like ours. They are the oldest known footprints of ancestors who walked as we do. The diorama shows a possible reconstruction: two figures walking close together, perhaps an adult and a youngster. It is a scene from almost four million years ago, yet strangely familiar.',
          },
        },
        {
          title: { it: 'Una sola famiglia umana', en: 'One human family' },
          date: '300.000 anni fa – oggi / years ago – today',
          note: { it: 'Homo sapiens, Neanderthal, DNA e le prime opere d’arte.', en: 'Homo sapiens, Neanderthals, DNA and the first works of art.' },
          audio: {
            it: 'Proseguendo nella sala incontrate i volti delle diverse specie umane: Homo erectus, i Neanderthal e infine noi, Homo sapiens, comparsi in Africa circa 300.000 anni fa. Per decine di migliaia di anni sulla Terra hanno convissuto più specie umane. I Neanderthal, per esempio, vivevano in Europa e in Asia, seppellivano i loro morti, usavano il fuoco e forse creavano ornamenti. E oggi sappiamo dal DNA che molti di noi portano ancora una piccola percentuale di geni neanderthaliani: i nostri antenati si sono incontrati e mescolati. Poi c’è la scoperta più importante per voi delegati. Confrontando il DNA di persone di tutto il mondo, gli scienziati hanno scoperto che tutti gli esseri umani sono geneticamente identici per circa il 99,9 per cento. Le differenze che vediamo, come il colore della pelle, sono adattamenti recenti all’ambiente, legati per esempio alla quantità di sole. E c’è di più: la maggior parte della varietà genetica umana si trova all’interno dell’Africa, perché è lì che la nostra specie ha vissuto più a lungo, prima che alcuni gruppi partissero per popolare il resto del mondo. In altre parole, siamo tutti discendenti di antenati africani. La scienza smentisce l’idea di “razze” umane separate. Infine guardate le riproduzioni delle pitture rupestri e dei primi oggetti d’arte, come le statuette e i flauti d’osso: la capacità di creare simboli, raccontare storie e fare musica è forse ciò che ci rende davvero umani. Ricordatelo quando, alla vostra conferenza, siederete accanto a delegati di altri Paesi: apparteniamo tutti a un’unica famiglia.',
            en: 'Walking on through the hall you meet the faces of different human species: Homo erectus, the Neanderthals and finally us, Homo sapiens, who appeared in Africa about 300,000 years ago. For tens of thousands of years several human species shared the Earth. Neanderthals, for example, lived in Europe and Asia, buried their dead, used fire and perhaps made ornaments. And today we know from DNA that many of us still carry a small percentage of Neanderthal genes: our ancestors met and mixed. Then comes the most important discovery for you as delegates. By comparing the DNA of people from all over the world, scientists found that all human beings are about 99.9 percent genetically identical. The differences we see, such as skin colour, are recent adaptations to the environment, linked for example to the amount of sunlight. And there’s more: most human genetic variety is found within Africa, because that’s where our species lived longest before some groups left to populate the rest of the world. In other words, we all descend from African ancestors. Science refutes the idea of separate human “races”. Finally look at the reproductions of cave paintings and the first art objects, such as figurines and bone flutes: the ability to create symbols, tell stories and make music is perhaps what truly makes us human. Remember it when, at your conference, you sit next to delegates from other countries: we all belong to a single family.',
          },
        },
      ],
      games: [
        {
          kind: 'order',
          prompt: { it: 'Metti in ordine i nostri antenati, dal più antico', en: 'Order our ancestors, oldest first' },
          items: [
            { label: { it: 'Impronte di Laetoli', en: 'Laetoli footprints' }, tag: '3,6 mln' },
            { label: { it: 'Lucy (Australopithecus)', en: 'Lucy (Australopithecus)' }, tag: '3,2 mln' },
            { label: { it: 'Homo erectus', en: 'Homo erectus' }, tag: '1,9 mln' },
            { label: { it: 'Primi Homo sapiens in Africa', en: 'First Homo sapiens in Africa' }, tag: '300.000' },
            { label: { it: 'Pitture rupestri in Europa', en: 'Cave paintings in Europe' }, tag: '40.000' },
          ],
        },
      ],
    },
    {
      id: 'meteorites-gems',
      galleries: ['meteoriti', 'meteorites', 'gemme', 'gems', 'minerali', 'minerals', 'gilder', 'insectarium', 'insetti', 'ross', 'mignone'],
      floor: '1',
      pin: { x: 145, y: 95 },
      minutes: 15,
      title: { it: 'Meteoriti, gemme e Gilder Center', en: 'Meteorites, gems and the Gilder Center' },
      area: { it: 'Hall of Meteorites, Hall of Gems · Gilder Center · 1° piano', en: 'Hall of Meteorites, Hall of Gems · Gilder Center · 1st floor' },
      directions: {
        it: 'Seguite le indicazioni “Meteorites” e poi “Gems and Minerals”. Da lì proseguite nel Gilder Center, la sala con le pareti curve come un canyon: l’uscita è su Columbus Avenue.',
        en: 'Follow the signs for “Meteorites” and then “Gems and Minerals”. From there continue into the Gilder Center, the hall with canyon-like curving walls: the exit is on Columbus Avenue.',
      },
      audio: {
        it: 'Ultima tappa: dallo spazio alla Terra, e dalla Terra al futuro della scienza. Vedremo pietre cadute dal cielo, cristalli formati in milioni di anni nelle profondità del pianeta e infine il nuovo Gilder Center, dove il museo mostra come si fa ricerca oggi.',
        en: 'Last stop: from space to Earth, and from Earth to the future of science. We’ll see stones that fell from the sky, crystals formed over millions of years deep inside the planet and finally the new Gilder Center, where the museum shows how research is done today.',
      },
      works: [
        {
          title: { it: 'Ahnighito, il meteorite di Cape York', en: 'Ahnighito, the Cape York meteorite' },
          date: 'Caduto c. 10.000 anni fa / Fell c. 10,000 years ago',
          note: { it: 'Ferro, circa 34 tonnellate. Dalla Groenlandia, portato a New York nel 1897.', en: 'Iron, about 34 tons. From Greenland, brought to New York in 1897.' },
          audio: {
            it: 'Toccatelo pure, se è permesso: è uno dei pochi pezzi del museo che si possono toccare. Questo blocco di ferro di circa 34 tonnellate è Ahnighito, il frammento più grande del meteorite di Cape York, ed è il meteorite più grande esposto in un museo. È caduto in Groenlandia circa 10.000 anni fa. È così pesante che non poggia sul pavimento del museo: è sostenuto da colonne che arrivano fino alla roccia sotto l’edificio. Per secoli gli Inuit della Groenlandia hanno usato frammenti di questo ferro caduto dal cielo per fabbricare punte di arpione e coltelli: in una terra senza miniere, era una risorsa preziosissima. Nel 1897 l’esploratore americano Robert Peary lo portò a New York e lo vendette al museo. Con lui portò anche sei Inuit, che furono studiati come “esemplari”; quattro di loro morirono presto di malattie, e un bambino, Minik, rimase solo a New York. È una pagina dolorosa, che oggi il museo racconta apertamente. E ora torniamo ai dinosauri. Circa 66 milioni di anni fa un asteroide largo una decina di chilometri colpì la Terra nell’attuale penisola dello Yucatán, in Messico. L’impatto sollevò enormi quantità di polveri che oscurarono il cielo per anni: circa tre quarti delle specie viventi scomparvero, compresi tutti i dinosauri non aviani. Senza quell’asteroide, i mammiferi, e quindi noi, forse non avremmo mai avuto spazio per evolverci. Oggi le agenzie spaziali sorvegliano gli asteroidi vicini alla Terra, e nel 2022 la NASA ha dimostrato con la missione DART che è possibile deviarne uno. Una sfida per cui serve la cooperazione di tutto il mondo.',
            en: 'Go ahead and touch it, if allowed: it is one of the few pieces in the museum you can touch. This block of iron weighing about 34 tons is Ahnighito, the largest fragment of the Cape York meteorite and the largest meteorite on display in any museum. It fell in Greenland about 10,000 years ago. It is so heavy that it doesn’t rest on the museum floor: it is held up by columns that go all the way down to the bedrock beneath the building. For centuries the Inuit of Greenland used fragments of this iron from the sky to make harpoon tips and knives: in a land without mines, it was a precious resource. In 1897 the American explorer Robert Peary brought it to New York and sold it to the museum. He also brought six Inuit, who were studied as “specimens”; four of them soon died of disease, and a boy, Minik, was left alone in New York. It is a painful chapter that the museum now tells openly. And now back to the dinosaurs. About 66 million years ago an asteroid some ten kilometres wide struck the Earth in today’s Yucatán Peninsula, in Mexico. The impact threw up huge amounts of dust that darkened the sky for years: about three quarters of living species disappeared, including all non-avian dinosaurs. Without that asteroid, mammals, and so we, might never have had room to evolve. Today space agencies watch asteroids near the Earth, and in 2022 NASA’s DART mission showed that it is possible to deflect one. A challenge that requires cooperation from the whole world.',
          },
        },
        {
          title: { it: 'La Stella dell’India e il Gilder Center', en: 'The Star of India and the Gilder Center' },
          date: '— / 2023',
          note: { it: 'Zaffiro stellato di 563 carati. Gilder Center aperto nel 2023.', en: '563-carat star sapphire. Gilder Center opened in 2023.' },
          audio: {
            it: 'Nelle sale delle gemme e dei minerali, cercate la Stella dell’India: uno zaffiro blu grande come una pallina da golf, di 563 carati, tra i più grandi zaffiri stellati del mondo. Guardatelo sotto la luce: al suo interno appare una stella a sei punte, prodotta da minuscoli cristalli che riflettono la luce. Ha anche una storia da film: nel 1964 fu rubato da questo museo da un gruppo di ladri che entrarono di notte da una finestra. Fu ritrovato pochi mesi dopo in una cassetta di sicurezza a Miami. Intorno a voi ci sono cristalli enormi e minerali di tutti i colori. Ogni pietra racconta una storia di calore, pressione e tempo nelle profondità della Terra. E molti minerali sono oggi al centro della politica internazionale: litio, cobalto, terre rare servono per batterie, telefoni e auto elettriche. Chi li estrae, in quali condizioni, e chi ne trae profitto? Sono domande che si discutono anche alle Nazioni Unite. Infine entrate nel Gilder Center, aperto nel 2023. Guardate l’architettura: le pareti curve e i ponti sospesi ricordano un canyon scavato dall’acqua e dal vento. Qui trovate le grandi pareti che mostrano una parte delle collezioni del museo: milioni di esemplari studiati dagli scienziati di tutto il mondo. Il messaggio finale del museo è questo: la scienza non è finita, c’è ancora moltissimo da scoprire. Forse qualcuno di voi, un giorno, lo farà.',
            en: 'In the gem and mineral halls, look for the Star of India: a blue sapphire the size of a golf ball, 563 carats, one of the largest star sapphires in the world. Look at it under the light: a six-pointed star appears inside, produced by tiny crystals reflecting the light. It also has a story worthy of a film: in 1964 it was stolen from this museum by a gang of thieves who climbed in through a window at night. It was found a few months later in a locker in Miami. Around you are huge crystals and minerals of every colour. Each stone tells a story of heat, pressure and time deep inside the Earth. And many minerals are now at the centre of international politics: lithium, cobalt and rare earths are needed for batteries, phones and electric cars. Who mines them, in what conditions, and who profits? These questions are debated at the United Nations too. Finally enter the Gilder Center, opened in 2023. Look at the architecture: the curving walls and suspended bridges recall a canyon carved by water and wind. Here you’ll find the large walls showing part of the museum’s collections: millions of specimens studied by scientists from all over the world. The museum’s final message is this: science isn’t finished, there is still a great deal to discover. Perhaps one of you will do it one day.',
          },
        },
      ],
      games: [
        {
          kind: 'quiz',
          questions: [
            {
              q: { it: 'Perché Ahnighito non poggia sul pavimento?', en: 'Why doesn’t Ahnighito rest on the floor?' },
              options: [{ it: 'È magnetico', en: 'It is magnetic' }, { it: 'È troppo pesante: poggia su colonne fino alla roccia', en: 'Too heavy: it rests on columns down to the bedrock' }, { it: 'Per proteggerlo dai furti', en: 'To protect it from theft' }],
              answer: 1,
              why: { it: 'Pesa circa 34 tonnellate.', en: 'It weighs about 34 tons.' },
            },
            {
              q: { it: 'Dove cadde l’asteroide dei dinosauri?', en: 'Where did the dinosaur asteroid hit?' },
              options: [{ it: 'In Siberia', en: 'In Siberia' }, { it: 'Nello Yucatán, in Messico', en: 'In Yucatán, Mexico' }, { it: 'In Groenlandia', en: 'In Greenland' }],
              answer: 1,
              why: { it: 'Circa 66 milioni di anni fa.', en: 'About 66 million years ago.' },
            },
            {
              q: { it: 'Cosa successe alla Stella dell’India nel 1964?', en: 'What happened to the Star of India in 1964?' },
              options: [{ it: 'Fu rubata e poi ritrovata', en: 'It was stolen and then recovered' }, { it: 'Fu tagliata in due', en: 'It was cut in two' }, { it: 'Fu restituita all’India', en: 'It was returned to India' }],
              answer: 0,
              why: { it: 'Ritrovata pochi mesi dopo a Miami.', en: 'Recovered a few months later in Miami.' },
            },
          ],
        },
      ],
    },
  ],
  extras: [
    {
      id: 'rose-center',
      galleries: ['rose', 'hayden', 'sfera', 'sphere', 'spazio', 'space', 'universo', 'universe'],
      floor: '1',
      pin: { x: 215, y: 30 },
      minutes: 15,
      title: { it: 'Rose Center e la sfera Hayden', en: 'Rose Center and the Hayden Sphere' },
      area: { it: 'Rose Center for Earth and Space', en: 'Rose Center for Earth and Space' },
      directions: {
        it: 'Lato nord del museo: il grande cubo di vetro con la sfera bianca al centro. La Rampa Cosmica è inclusa nel biglietto base; lo spettacolo del planetario no.',
        en: 'North side of the museum: the big glass cube with the white sphere inside. The Cosmic Pathway is included in general admission; the planetarium show is not.',
      },
      audio: {
        it: 'Il Rose Center, inaugurato nel 2000, è un cubo di vetro che contiene una sfera gigantesca: dentro c’è il planetario. Percorrete la rampa a spirale che gira intorno alla sfera: ogni passo corrisponde a milioni di anni, dal Big Bang a oggi. Alla fine della rampa, tutta la storia dell’umanità occupa uno spazio sottilissimo, quanto lo spessore di un capello. Un modo potente per capire quanto siamo piccoli, e quanto è preziosa la Terra.',
        en: 'The Rose Center, opened in 2000, is a glass cube containing a gigantic sphere: inside is the planetarium. Walk the spiral ramp around the sphere: each step equals millions of years, from the Big Bang to today. At the end of the ramp, the whole history of humanity takes up a sliver as thin as a hair. A powerful way to grasp how small we are, and how precious the Earth is.',
      },
      works: [],
      games: [],
    },
    {
      id: 'biodiversity',
      galleries: ['biodiversità', 'biodiversity', 'dzanga', 'foresta', 'rainforest'],
      floor: '1',
      pin: { x: 312, y: 210 },
      minutes: 10,
      title: { it: 'La sala della biodiversità', en: 'The Hall of Biodiversity' },
      area: { it: 'Hall of Biodiversity · 1° piano', en: 'Hall of Biodiversity · 1st floor' },
      directions: {
        it: 'Accanto alla sala della balena, 1° piano.',
        en: 'Next to the whale hall, 1st floor.',
      },
      audio: {
        it: 'Su una parete lunghissima, la “Spettro della vita”, sono esposti centinaia di organismi, dai batteri ai mammiferi, per mostrare la straordinaria varietà della vita. Di fronte, una ricostruzione della foresta pluviale della Repubblica Centrafricana, con suoni e odori. La sala racconta anche la crisi della biodiversità: oggi molte specie scompaiono a una velocità mai vista. Proteggerle è l’Obiettivo 15 dell’Agenda 2030.',
        en: 'Along a very long wall, the “Spectrum of Life”, hundreds of organisms are displayed, from bacteria to mammals, to show the extraordinary variety of life. Opposite, a recreation of the rainforest of the Central African Republic, with sounds and smells. The hall also tells the story of the biodiversity crisis: today many species are disappearing at an unprecedented rate. Protecting them is Goal 15 of the 2030 Agenda.',
      },
      works: [],
      games: [],
    },
    {
      id: 'na-mammals',
      galleries: ['mammiferi nordamericani', 'north american mammals', 'bernard', 'bisonte', 'bison', 'orso', 'bear'],
      floor: '1',
      pin: { x: 290, y: 140 },
      minutes: 10,
      title: { it: 'I mammiferi del Nord America', en: 'North American Mammals' },
      area: { it: 'Bernard Family Hall · 1° piano', en: 'Bernard Family Hall · 1st floor' },
      directions: {
        it: '1° piano, vicino alla sala della balena.',
        en: '1st floor, near the whale hall.',
      },
      audio: {
        it: 'Diorami con orsi grizzly, bisonti, alci e lupi, ambientati in paesaggi reali dei parchi nazionali americani come Yellowstone e Yosemite. Molti di questi parchi furono protetti proprio grazie a Theodore Roosevelt, che avete incontrato all’ingresso. Il bisonte americano, che nell’Ottocento era stato quasi sterminato, è oggi il mammifero nazionale degli Stati Uniti.',
        en: 'Dioramas with grizzly bears, bison, moose and wolves, set in real landscapes of American national parks such as Yellowstone and Yosemite. Many of these parks were protected thanks to Theodore Roosevelt, whom you met at the entrance. The American bison, almost wiped out in the 19th century, is today the national mammal of the United States.',
      },
      works: [],
      games: [],
    },
    {
      id: 'northwest-coast',
      galleries: ['costa nord-ovest', 'northwest coast', 'canoa', 'canoe', 'totem'],
      floor: '1',
      pin: { x: 115, y: 180 },
      minutes: 10,
      title: { it: 'La sala della Costa nord-occidentale', en: 'The Northwest Coast Hall' },
      area: { it: 'Northwest Coast Hall · 1° piano', en: 'Northwest Coast Hall · 1st floor' },
      directions: {
        it: '1° piano, verso il Gilder Center.',
        en: '1st floor, towards the Gilder Center.',
      },
      audio: {
        it: 'È la sala più antica del museo, completamente rinnovata e riaperta nel 2022 in collaborazione con le comunità indigene della costa del Pacifico, tra Canada e Stati Uniti. Pali scolpiti, maschere e una grande canoa raccontano culture vive ancora oggi, con le parole delle comunità stesse. È un esempio di come i musei stanno cambiando: non più parlare “di” un popolo, ma “con” un popolo. Un principio vicino alla Dichiarazione ONU sui diritti dei popoli indigeni del 2007.',
        en: 'It is the museum’s oldest hall, completely renewed and reopened in 2022 in collaboration with Indigenous communities of the Pacific coast, between Canada and the United States. Carved poles, masks and a great canoe tell of cultures that are still alive today, in the communities’ own words. It shows how museums are changing: no longer speaking “about” a people, but “with” a people. A principle close to the 2007 UN Declaration on the Rights of Indigenous Peoples.',
      },
      works: [],
      games: [],
    },
  ],
}
