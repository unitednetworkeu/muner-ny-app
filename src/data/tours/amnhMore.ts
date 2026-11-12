import type { Stop } from './types'

// Nuove tappe del Museo di Storia Naturale
export const pacific: Stop = {
  id: 'pacific',
  galleries: ['moai', 'rapa nui', 'isola di pasqua', 'easter island', 'pacifico', 'pacific', 'mead', 'notte al museo', 'night at the museum'],
  floor: '3',
  pin: { x: 120, y: 130 },
  minutes: 8,
  title: { it: 'Il moai di Rapa Nui e i popoli del Pacifico', en: 'The Rapa Nui moai and the Pacific peoples' },
  area: { it: 'Margaret Mead Hall of Pacific Peoples · 3° piano', en: 'Margaret Mead Hall of Pacific Peoples · 3rd floor' },
  directions: {
    it: 'Dalla sala dei mammiferi africani salite al 3° piano e seguite le indicazioni “Pacific Peoples”: all’ingresso della sala vi accoglie la grande testa di pietra.',
    en: 'From the African mammals hall go up to the 3rd floor and follow the signs for “Pacific Peoples”: the great stone head greets you at the entrance to the hall.',
  },
  audio: {
    it: 'Questa sala è dedicata ai popoli dell’Oceano Pacifico, dalle isole della Polinesia alla Nuova Guinea. Porta il nome di Margaret Mead, una delle antropologhe più famose del Novecento, che lavorò per decenni in questo museo. Ma prima di tutto, guardate chi vi accoglie all’ingresso: un gigante di pietra arrivato, almeno nella forma, dall’isola più isolata del mondo.',
    en: 'This hall is devoted to the peoples of the Pacific Ocean, from the islands of Polynesia to New Guinea. It bears the name of Margaret Mead, one of the most famous anthropologists of the 20th century, who worked in this museum for decades. But first of all, look at who greets you at the entrance: a stone giant that came, at least in its shape, from the most isolated island in the world.',
  },
  works: [
    {
      title: { it: 'Il moai di Rapa Nui (Isola di Pasqua)', en: 'The Rapa Nui moai (Easter Island)' },
      date: 'c. 1250–1500 d.C. / CE (originale / original)',
      note: { it: 'Calco di una statua originale dell’isola. Cile, Oceano Pacifico.', en: 'Cast of an original statue from the island. Chile, Pacific Ocean.' },
      audio: {
        it: 'Eccolo: il moai. Forse lo riconoscete dal film “Una notte al museo”, dove questa grande testa si anima di notte e parla con il guardiano. Il film è ambientato proprio in questo museo, e ha fatto crescere moltissimo il numero dei visitatori, soprattutto ragazzi. Ma la storia vera è ancora più affascinante. I moai sono le statue monumentali di Rapa Nui, che noi chiamiamo Isola di Pasqua: un’isola piccolissima in mezzo all’Oceano Pacifico, a più di 3.500 chilometri dalla costa del Cile, lo Stato a cui oggi appartiene. Furono scolpiti dagli antenati del popolo rapanui, più o meno tra il 1250 e il 1500, nella pietra vulcanica di una cava sul fianco di un antico vulcano, il Rano Raraku. Sull’isola ce ne sono quasi mille, e alcuni superano i dieci metri d’altezza e pesano decine di tonnellate. Non rappresentano dei qualsiasi: raffigurano antenati divinizzati, capi importanti, e per questo la maggior parte di loro guardava verso l’interno dell’isola, verso i villaggi, come per proteggerli. Come facevano a spostarli senza ruote né grandi animali da tiro? Secondo i racconti tradizionali, i moai “camminavano”. E alcuni archeologi hanno dimostrato con degli esperimenti che una statua in piedi può davvero essere fatta avanzare dondolandola da un lato all’altro con delle corde, come si fa con un frigorifero: sembra proprio che cammini. Quello che vedete qui è un calco, cioè una copia fedele: l’originale è rimasto sull’isola. Ed è un punto importante, perché alcuni moai originali sono stati portati via nell’Ottocento e si trovano in musei stranieri. Il caso più famoso è quello del British Museum di Londra, che conserva un moai dal 1869. Il popolo rapanui ne chiede da anni la restituzione, perché per loro non è un oggetto da museo ma un antenato. È un tema che si discute anche all’UNESCO e all’ONU: a chi appartiene il patrimonio culturale di un popolo? Nel 2022 il Cile ha riportato sull’isola un moai che era conservato in un museo della capitale, Santiago. Un piccolo passo, molto importante per la comunità.',
        en: 'Here it is: the moai. You may recognise it from the film “Night at the Museum”, where this great head comes to life at night and talks to the guard. The film is set in this very museum, and it greatly increased the number of visitors, especially young people. But the real story is even more fascinating. Moai are the monumental statues of Rapa Nui, which we call Easter Island: a tiny island in the middle of the Pacific Ocean, more than 3,500 kilometres from the coast of Chile, the country it belongs to today. They were carved by the ancestors of the Rapanui people, roughly between 1250 and 1500, from volcanic stone in a quarry on the side of an ancient volcano, Rano Raraku. There are almost a thousand on the island; some are more than ten metres tall and weigh dozens of tons. They don’t represent just anyone: they depict deified ancestors, important chiefs, which is why most of them faced inland, towards the villages, as if to protect them. How did they move them without wheels or large draught animals? Traditional stories say the moai “walked”. And some archaeologists have shown with experiments that a standing statue really can be moved forward by rocking it from side to side with ropes, the way you shift a fridge: it really seems to walk. What you see here is a cast, a faithful copy: the original stayed on the island. That matters, because some original moai were taken away in the 19th century and are now in foreign museums. The best-known case is the British Museum in London, which has held a moai since 1869. The Rapanui people have been asking for its return for years, because to them it isn’t a museum object but an ancestor. It is a question debated at UNESCO and the UN too: who owns a people’s cultural heritage? In 2022 Chile brought back to the island a moai that had been kept in a museum in the capital, Santiago. A small step, very important to the community.',
      },
    },
    {
      title: { it: 'Margaret Mead e i navigatori del Pacifico', en: 'Margaret Mead and the Pacific navigators' },
      date: '1925 – oggi / today',
      note: { it: 'Maschere, canoe, carte di navigazione e oggetti di tutta l’Oceania.', en: 'Masks, canoes, navigation charts and objects from all over Oceania.' },
      audio: {
        it: 'Ora entrate nella sala. Margaret Mead aveva solo 23 anni quando, nel 1925, partì da sola per le isole Samoa, nel Pacifico, per studiare come crescevano le ragazze della vostra età in una cultura diversissima da quella americana. Il libro che ne trasse divenne un bestseller e fece discutere il mondo intero: Mead sosteneva che molti comportamenti che consideriamo “naturali”, come i conflitti dell’adolescenza o i ruoli di uomini e donne, dipendono in gran parte dalla cultura in cui si cresce. Alcune sue conclusioni sono state poi criticate da altri studiosi, ma il suo metodo, vivere con le persone, imparare la loro lingua e ascoltare il loro punto di vista, ha cambiato l’antropologia. Mead lavorò in questo museo per oltre cinquant’anni. Guardatevi intorno: maschere cerimoniali, scudi, ornamenti, tamburi. Cercate anche gli strumenti di navigazione. Migliaia di anni fa, i popoli polinesiani esplorarono e colonizzarono l’oceano più grande del pianeta, dalle Hawaii alla Nuova Zelanda fino a Rapa Nui, con canoe a doppio scafo, senza bussola né carte di carta. Si orientavano osservando le stelle, le onde, il volo degli uccelli e la forma delle nuvole sopra le isole. Nelle Isole Marshall si costruivano perfino “mappe” fatte di bastoncini legati e conchiglie, che rappresentavano le onde e la posizione delle isole. Furono tra i più grandi navigatori della storia, molto prima degli esploratori europei. Oggi molte di queste isole, piccole e basse sul mare, sono minacciate dall’innalzamento degli oceani: un tema che ritroverete nella sala della vita oceanica e, forse, nella vostra commissione.',
        en: 'Now go into the hall. Margaret Mead was only 23 when, in 1925, she set off alone to the Samoan islands in the Pacific to study how girls your age grew up in a culture very different from America’s. The book she wrote became a bestseller and sparked debate worldwide: Mead argued that many behaviours we think of as “natural”, like teenage conflict or the roles of men and women, depend largely on the culture we grow up in. Some of her conclusions were later criticised by other scholars, but her method, living with people, learning their language and listening to their point of view, changed anthropology. Mead worked at this museum for more than fifty years. Look around: ceremonial masks, shields, ornaments, drums. Look also for the navigation tools. Thousands of years ago Polynesian peoples explored and settled the largest ocean on the planet, from Hawaii to New Zealand and on to Rapa Nui, in double-hulled canoes, without compasses or paper charts. They found their way by watching the stars, the waves, the flight of birds and the shape of clouds above islands. In the Marshall Islands people even built “maps” of tied sticks and shells representing the swells and the position of islands. They were among the greatest navigators in history, long before European explorers. Today many of these small, low-lying islands are threatened by rising seas: a theme you’ll find again in the ocean life hall and perhaps in your committee.',
      },
    },
  ],
  games: [
    {
      kind: 'hunt',
      prompt: { it: 'Caccia ai “protagonisti” di Una notte al museo, lungo tutto il percorso', en: 'Hunt for the “stars” of Night at the Museum along the whole route' },
      items: [
        { it: 'La Rotonda di Theodore Roosevelt (2° piano)', en: 'The Theodore Roosevelt Rotunda (2nd floor)' },
        { it: 'Gli elefanti della sala africana (2° piano)', en: 'The elephants in the African hall (2nd floor)' },
        { it: 'La grande testa di pietra di Rapa Nui (3° piano)', en: 'The great Rapa Nui stone head (3rd floor)' },
        { it: 'Lo scheletro del T. rex (4° piano)', en: 'The T. rex skeleton (4th floor)' },
      ],
    },
    {
      kind: 'quiz',
      questions: [
        {
          q: { it: 'Verso dove guardava la maggior parte dei moai?', en: 'Which way did most moai face?' },
          options: [{ it: 'Verso il mare, per spaventare i nemici', en: 'Out to sea, to scare enemies' }, { it: 'Verso l’interno, verso i villaggi', en: 'Inland, towards the villages' }, { it: 'Verso il sole al tramonto', en: 'Towards the setting sun' }],
          answer: 1,
          why: { it: 'Rappresentavano antenati che proteggevano la comunità.', en: 'They represented ancestors protecting the community.' },
        },
        {
          q: { it: 'Come si orientavano i navigatori polinesiani?', en: 'How did Polynesian navigators find their way?' },
          options: [{ it: 'Con la bussola magnetica', en: 'With a magnetic compass' }, { it: 'Con stelle, onde, uccelli e nuvole', en: 'With stars, waves, birds and clouds' }, { it: 'Seguendo le navi europee', en: 'By following European ships' }],
          answer: 1,
          why: { it: 'Senza strumenti europei, attraversarono l’intero Pacifico.', en: 'Without European instruments, they crossed the whole Pacific.' },
        },
      ],
    },
  ],
  ifClosed: {
    it: 'Se la sala è chiusa, saltate questa tappa e salite direttamente al 4° piano.',
    en: 'If the hall is closed, skip this stop and go straight up to the 4th floor.',
  },
}

export const biodiversity: Stop = {
  id: 'biodiversity',
  galleries: ['biodiversità', 'biodiversity', 'dzanga', 'foresta', 'rainforest', 'spettro della vita', 'spectrum of life'],
  floor: '1',
  pin: { x: 312, y: 210 },
  minutes: 6,
  title: { it: 'La sala della biodiversità', en: 'The Hall of Biodiversity' },
  area: { it: 'Hall of Biodiversity · 1° piano', en: 'Hall of Biodiversity · 1st floor' },
  directions: {
    it: 'È subito accanto alla sala della balena, sullo stesso piano.',
    en: 'It is right next to the whale hall, on the same floor.',
  },
  audio: {
    it: 'Dalla balena passiamo alla vita in tutte le sue forme. Questa sala non racconta un animale o un luogo, ma un concetto: la biodiversità, cioè l’incredibile varietà di esseri viventi sulla Terra, e i rischi che corre oggi.',
    en: 'From the whale we move on to life in all its forms. This hall isn’t about one animal or one place but about an idea: biodiversity, the incredible variety of living things on Earth, and the risks it faces today.',
  },
  works: [
    {
      title: { it: 'Lo spettro della vita e la foresta di Dzanga-Sangha', en: 'The Spectrum of Life and the Dzanga-Sangha rainforest' },
      date: '1998',
      note: { it: 'Parete con oltre mille esemplari e ricostruzione di una foresta pluviale della Repubblica Centrafricana.', en: 'A wall of over a thousand specimens and a recreated rainforest from the Central African Republic.' },
      audio: {
        it: 'Guardate la lunghissima parete chiamata “Spettro della vita”. Sono esposti più di mille esemplari, dai batteri e funghi microscopici fino ai grandi mammiferi, ordinati secondo i loro rapporti di parentela evolutiva. È come un albero genealogico di tutta la vita sulla Terra. Gli scienziati hanno descritto finora circa due milioni di specie, ma si stima che ne esistano molte di più: la maggior parte degli esseri viventi del pianeta non ha ancora un nome. Ora giratevi e entrate nella foresta: è la ricostruzione di un tratto di foresta pluviale di Dzanga-Sangha, nella Repubblica Centrafricana, con alberi, piante, animali, perfino suoni. Fa parte di un’area protetta che si estende tra tre Paesi africani ed è Patrimonio Mondiale dell’UNESCO. Le foreste pluviali coprono una piccola parte della superficie terrestre, ma ospitano più della metà delle specie animali e vegetali conosciute. Il messaggio della sala è chiaro: oggi molte specie stanno scomparendo a una velocità molto superiore a quella naturale, soprattutto a causa dell’uomo, con la distruzione degli habitat, l’inquinamento, la caccia eccessiva, le specie invasive e i cambiamenti climatici. Alcuni scienziati parlano di una “sesta estinzione di massa”, dopo le cinque del passato, tra cui quella dei dinosauri. Ma questa volta la causa siamo noi, e possiamo ancora intervenire. Nel 2022, alla conferenza delle Nazioni Unite sulla biodiversità, quasi duecento Paesi si sono impegnati a proteggere almeno il 30 per cento delle terre e dei mari del pianeta entro il 2030. È uno degli obiettivi più ambiziosi mai concordati. Riuscirà il mondo a rispettarlo? Questa è una domanda perfetta per una commissione MUN sull’ambiente.',
        en: 'Look at the very long wall called the “Spectrum of Life”. More than a thousand specimens are on display, from microscopic bacteria and fungi to large mammals, arranged by their evolutionary relationships. It’s like a family tree of all life on Earth. Scientists have described about two million species so far, but there are thought to be many more: most living things on the planet don’t yet have a name. Now turn around and walk into the forest: it recreates a stretch of the Dzanga-Sangha rainforest in the Central African Republic, with trees, plants, animals, even sounds. It is part of a protected area spanning three African countries and is a UNESCO World Heritage Site. Rainforests cover a small part of the Earth’s surface but host more than half of all known animal and plant species. The hall’s message is clear: today many species are disappearing far faster than the natural rate, mainly because of humans, through habitat destruction, pollution, overhunting, invasive species and climate change. Some scientists speak of a “sixth mass extinction”, after the five of the past, including the one that ended the dinosaurs. But this time we are the cause, and we can still act. In 2022, at the United Nations biodiversity conference, almost two hundred countries committed to protecting at least 30 percent of the planet’s land and seas by 2030. It is one of the most ambitious goals ever agreed. Will the world meet it? That’s a perfect question for a MUN environment committee.',
      },
    },
  ],
  games: [
    {
      kind: 'match',
      prompt: { it: 'Abbina la minaccia alla biodiversità al suo esempio', en: 'Match the threat to biodiversity with its example' },
      pairs: [
        [{ it: 'Perdita di habitat', en: 'Habitat loss' }, { it: 'Foreste tagliate per far posto a coltivazioni', en: 'Forests cleared for crops' }],
        [{ it: 'Inquinamento', en: 'Pollution' }, { it: 'Plastica negli oceani', en: 'Plastic in the oceans' }],
        [{ it: 'Specie invasive', en: 'Invasive species' }, { it: 'Animali portati dall’uomo in un nuovo ambiente', en: 'Animals brought by humans to a new place' }],
        [{ it: 'Sfruttamento eccessivo', en: 'Overexploitation' }, { it: 'Pesca e caccia oltre i limiti', en: 'Fishing and hunting beyond limits' }],
      ],
    },
  ],
}

export const gemsIntro = {
  it: 'Dal ferro caduto dal cielo ai cristalli nati nelle profondità della Terra, e poi al nuovo Gilder Center, l’ultima ala costruita dal museo: è l’ultima tappa del percorso, e da qui si esce su Columbus Avenue.',
  en: 'From iron that fell from the sky to crystals born deep inside the Earth, and then to the new Gilder Center, the museum’s newest wing: this is the last stop of the route, and from here you exit onto Columbus Avenue.',
}
