import type { L } from '../i18n'

/** Punto di osservazione: Empire State Building, terrazza dell'86° piano */
export const ESB = { lat: 40.74844, lon: -73.98566 }

export type Landmark = {
  id: string
  name: L
  lat: number
  lon: number
  /** altezza reale in metri (0 per aree come parchi e fiumi) */
  height: number
  year?: string
  kind: 'tower' | 'spire' | 'bridge' | 'statue' | 'low' | 'area'
  facts: L
  /** id di un video dell'app sullo stesso luogo */
  video?: string
}

export const landmarks: Landmark[] = [
  {
    id: 'owtc', kind: 'spire', height: 541, year: '2014', lat: 40.71274, lon: -74.01338, video: 'wall-street',
    name: { it: 'One World Trade Center', en: 'One World Trade Center' },
    facts: {
      it: 'Il grattacielo più alto dell’emisfero occidentale: 541 metri, cioè 1.776 piedi, come l’anno della Dichiarazione d’Indipendenza. Sorge accanto al luogo delle Torri Gemelle, distrutte negli attentati dell’11 settembre 2001. Dove c’erano le torri oggi ci sono due grandi vasche, il Memoriale, con i nomi delle vittime.',
      en: 'The tallest skyscraper in the Western Hemisphere: 541 metres, or 1,776 feet, the year of the Declaration of Independence. It stands next to the site of the Twin Towers, destroyed in the attacks of 11 September 2001. Where the towers stood there are now two large pools, the Memorial, bearing the victims’ names.',
    },
  },
  {
    id: 'chrysler', kind: 'spire', height: 319, year: '1930', lat: 40.75162, lon: -73.97545,
    name: { it: 'Chrysler Building', en: 'Chrysler Building' },
    facts: {
      it: 'Il gioiello Art Déco di New York. Nel 1930 era in gara con un grattacielo di Wall Street per diventare il più alto del mondo: la guglia fu costruita in segreto dentro l’edificio e poi sollevata in circa un’ora e mezza, battendo il rivale. Il record durò meno di un anno: nel 1931 arrivò l’Empire State. Le decorazioni ricordano le auto Chrysler: aquile d’acciaio e motivi a forma di copriruota.',
      en: 'New York’s Art Deco jewel. In 1930 it was racing a Wall Street tower to become the world’s tallest: the spire was built secretly inside the building and then hoisted into place in about an hour and a half, beating its rival. The record lasted less than a year: in 1931 the Empire State arrived. The decorations recall Chrysler cars: steel eagles and hubcap-like motifs.',
    },
  },
  {
    id: 'vanderbilt', kind: 'spire', height: 427, year: '2020', lat: 40.75302, lon: -73.9787, video: 'grand-central',
    name: { it: 'One Vanderbilt', en: 'One Vanderbilt' },
    facts: {
      it: 'Grattacielo di vetro accanto alla Grand Central Terminal, che avete visto nel video. Alto 427 metri, è collegato direttamente alla stazione con passaggi sotterranei e in cima ospita un osservatorio, SUMMIT, con stanze di specchi.',
      en: 'Glass skyscraper next to Grand Central Terminal, which you saw in the video. 427 metres tall, it connects directly to the station through underground passages and has an observatory at the top, SUMMIT, with mirrored rooms.',
    },
  },
  {
    id: 'un', kind: 'tower', height: 154, year: '1952', lat: 40.74935, lon: -73.9682, video: 'onu',
    name: { it: 'Sede delle Nazioni Unite', en: 'United Nations Headquarters' },
    facts: {
      it: 'Il palazzo stretto e alto sulla riva dell’East River è il Segretariato dell’ONU, 39 piani, completato nel 1952 da un gruppo internazionale di architetti tra cui Le Corbusier e Oscar Niemeyer. Accanto, l’edificio basso con il tetto curvo è l’Assemblea Generale, dove siedono tutti i 193 Stati membri. È il luogo che il vostro MUN simula!',
      en: 'The tall, narrow building on the East River shore is the UN Secretariat, 39 storeys, completed in 1952 by an international team of architects including Le Corbusier and Oscar Niemeyer. Next to it, the low building with the curved roof is the General Assembly, where all 193 Member States sit. It’s the place your MUN simulates!',
    },
  },
  {
    id: 'metlife', kind: 'tower', height: 246, year: '1963', lat: 40.7533, lon: -73.9764,
    name: { it: 'MetLife Building', en: 'MetLife Building' },
    facts: {
      it: 'Il grande blocco ottagonale costruito sopra Grand Central, a cavallo di Park Avenue. Nacque come sede della compagnia aerea Pan Am, il cui nome brillava in cima. Per alcuni anni sul tetto c’era perfino un eliporto, chiuso dopo un incidente nel 1977.',
      en: 'The big octagonal block built above Grand Central, straddling Park Avenue. It was born as the headquarters of the airline Pan Am, whose name shone at the top. For some years there was even a heliport on the roof, closed after an accident in 1977.',
    },
  },
  {
    id: 'cpt', kind: 'spire', height: 472, year: '2020', lat: 40.7663, lon: -73.981,
    name: { it: 'Central Park Tower', en: 'Central Park Tower' },
    facts: {
      it: 'Con 472 metri è l’edificio residenziale più alto del mondo. Fa parte di “Billionaires’ Row”, la fila di grattacieli sottilissimi a sud di Central Park, con appartamenti tra i più costosi del pianeta.',
      en: 'At 472 metres it is the tallest residential building in the world. It belongs to “Billionaires’ Row”, the line of ultra-slim skyscrapers south of Central Park, with some of the most expensive apartments on the planet.',
    },
  },
  {
    id: 'steinway', kind: 'spire', height: 435, year: '2021', lat: 40.7645, lon: -73.9777,
    name: { it: 'Steinway Tower (111 West 57th)', en: 'Steinway Tower (111 West 57th)' },
    facts: {
      it: 'È uno dei grattacieli più sottili del mondo: è alto circa 24 volte la sua larghezza. Alla base incorpora la storica Steinway Hall, lo showroom dei famosi pianoforti aperto nel 1925.',
      en: 'One of the slenderest skyscrapers in the world: it is about 24 times taller than it is wide. At its base it incorporates historic Steinway Hall, the showroom of the famous pianos, opened in 1925.',
    },
  },
  {
    id: '432park', kind: 'tower', height: 426, year: '2015', lat: 40.7616, lon: -73.9719,
    name: { it: '432 Park Avenue', en: '432 Park Avenue' },
    facts: {
      it: 'Lo riconoscete dalla griglia perfetta di finestre quadrate, tutte uguali, di circa tre metri per tre. È un parallelepipedo bianco senza decorazioni, alto 426 metri: per alcuni è elegantissimo, per altri troppo semplice. Voi che ne pensate?',
      en: 'You can recognise it by its perfect grid of identical square windows, about three by three metres. It is a plain white box 426 metres tall: some find it supremely elegant, others too simple. What do you think?',
    },
  },
  {
    id: 'rock', kind: 'tower', height: 259, year: '1933', lat: 40.7587, lon: -73.979,
    name: { it: 'Rockefeller Center (30 Rock)', en: 'Rockefeller Center (30 Rock)' },
    facts: {
      it: 'Il cuore del Rockefeller Center, costruito durante la Grande Depressione dando lavoro a migliaia di persone. In cima c’è l’osservatorio Top of the Rock. La famosa foto degli operai che pranzano seduti su una trave sospesa nel vuoto fu scattata proprio durante la sua costruzione, nel 1932.',
      en: 'The heart of Rockefeller Center, built during the Great Depression and giving work to thousands. At the top is the Top of the Rock observatory. The famous photo of workers eating lunch on a beam suspended in mid-air was taken during its construction, in 1932.',
    },
  },
  {
    id: 'hy', kind: 'tower', height: 387, year: '2019', lat: 40.7539, lon: -74.0011,
    name: { it: 'Hudson Yards ed Edge', en: 'Hudson Yards and Edge' },
    facts: {
      it: 'Un intero quartiere nuovo costruito sopra un deposito ferroviario ancora in funzione: i treni passano sotto i grattacieli. Dalla torre di 387 metri sporge Edge, una terrazza all’aperto con un pavimento di vetro sospeso nel vuoto.',
      en: 'A whole new neighbourhood built on top of a working rail yard: trains run beneath the skyscrapers. From the 387-metre tower juts Edge, an open-air terrace with a glass floor hanging over the void.',
    },
  },
  {
    id: 'flatiron', kind: 'low', height: 87, year: '1902', lat: 40.7411, lon: -73.9897,
    name: { it: 'Flatiron Building', en: 'Flatiron Building' },
    facts: {
      it: 'Il “ferro da stiro”: un edificio a forma di triangolo, nel punto in cui Broadway incrocia in diagonale la Fifth Avenue. Nel 1902 era uno dei primi grattacieli di New York. Nel punto più stretto è largo meno di due metri!',
      en: 'The “iron”: a triangular building where Broadway crosses Fifth Avenue diagonally. In 1902 it was one of New York’s first skyscrapers. At its narrowest point it is less than two metres wide!',
    },
  },
  {
    id: 'woolworth', kind: 'spire', height: 241, year: '1913', lat: 40.7124, lon: -74.0083,
    name: { it: 'Woolworth Building', en: 'Woolworth Building' },
    facts: {
      it: 'Fu il grattacielo più alto del mondo dal 1913 al 1930. Il suo stile neogotico, con guglie e decorazioni come una cattedrale, gli valse il soprannome di “Cattedrale del commercio”. Frank Woolworth, proprietario di una catena di negozi a prezzi bassi, lo pagò in contanti.',
      en: 'It was the world’s tallest skyscraper from 1913 to 1930. Its Gothic Revival style, with spires and decoration like a cathedral, earned it the nickname “Cathedral of Commerce”. Frank Woolworth, owner of a chain of discount stores, paid for it in cash.',
    },
  },
  {
    id: 'brooklyn', kind: 'bridge', height: 84, year: '1883', lat: 40.7061, lon: -73.9969, video: 'brooklyn-bridge',
    name: { it: 'Ponte di Brooklyn', en: 'Brooklyn Bridge' },
    facts: {
      it: 'Lo riconoscete dalle torri di pietra con gli archi a sesto acuto. Inaugurato nel 1883, fu per alcuni anni il ponte sospeso più lungo del mondo. Ricordate la storia di Emily Roebling dal nostro video?',
      en: 'You can recognise it by its stone towers with pointed arches. Opened in 1883, for some years it was the longest suspension bridge in the world. Remember Emily Roebling’s story from our video?',
    },
  },
  {
    id: 'liberty', kind: 'statue', height: 93, year: '1886', lat: 40.68925, lon: -74.0445, video: 'statua-liberta',
    name: { it: 'Statua della Libertà', en: 'Statue of Liberty' },
    facts: {
      it: 'Laggiù, nella baia, a circa 8 chilometri: con il basamento è alta 93 metri, ma da qui sembra minuscola. Nelle giornate limpide si riconosce la sagoma verde con il braccio alzato. Dono della Francia, inaugurata nel 1886.',
      en: 'Out there in the harbour, about 8 kilometres away: with its pedestal it is 93 metres tall, but from here it looks tiny. On clear days you can make out the green figure with its raised arm. A gift from France, dedicated in 1886.',
    },
  },
  {
    id: 'msg', kind: 'low', height: 46, year: '1968', lat: 40.7505, lon: -73.9934,
    name: { it: 'Madison Square Garden', en: 'Madison Square Garden' },
    facts: {
      it: 'L’arena rotonda proprio sotto di voi, verso ovest: qui giocano i Knicks (basket) e i Rangers (hockey) e si tengono grandi concerti. È costruita sopra la Penn Station, la stazione ferroviaria più trafficata del Nord America.',
      en: 'The round arena just below you to the west: home of the Knicks (basketball) and the Rangers (hockey) and of big concerts. It is built on top of Penn Station, the busiest railway station in North America.',
    },
  },
  {
    id: 'times', kind: 'area', height: 0, lat: 40.758, lon: -73.9855, video: 'times-square',
    name: { it: 'Times Square', en: 'Times Square' },
    facts: {
      it: 'A circa un chilometro e mezzo verso nord, tra i grattacieli: di sera la riconoscete dal bagliore degli schermi luminosi. Ricordate perché si chiama così? Il video ve lo ha raccontato.',
      en: 'About a kilometre and a half to the north, among the skyscrapers: at night you can spot it by the glow of its screens. Remember why it’s called that? The video told you.',
    },
  },
  {
    id: 'cpark', kind: 'area', height: 0, lat: 40.7812, lon: -73.9665, video: 'central-park',
    name: { it: 'Central Park', en: 'Central Park' },
    facts: {
      it: 'Il grande rettangolo verde (o bianco, se ha nevicato!) oltre i grattacieli di Billionaires’ Row. È lungo circa 4 chilometri. Sul suo lato destro c’è il Metropolitan Museum, sul lato sinistro il Museo di Storia Naturale: i due musei che avete visitato.',
      en: 'The big green rectangle (or white, if it has snowed!) beyond the Billionaires’ Row towers. It is about 4 kilometres long. On its right side is the Metropolitan Museum, on its left the Natural History Museum: the two museums you visited.',
    },
  },
  {
    id: 'hudson', kind: 'area', height: 0, lat: 40.75, lon: -74.02,
    name: { it: 'Fiume Hudson e New Jersey', en: 'Hudson River and New Jersey' },
    facts: {
      it: 'A ovest scorre il fiume Hudson; sull’altra riva c’è il New Jersey, un altro Stato. Il fiume prende il nome da Henry Hudson, l’esploratore che nel 1609 lo risalì per conto degli olandesi: da lì nacque Nuova Amsterdam.',
      en: 'To the west flows the Hudson River; on the far bank is New Jersey, another state. The river is named after Henry Hudson, the explorer who sailed up it in 1609 for the Dutch: that led to New Amsterdam.',
    },
  },
  {
    id: 'eastriver', kind: 'area', height: 0, lat: 40.745, lon: -73.955,
    name: { it: 'East River, Queens e Brooklyn', en: 'East River, Queens and Brooklyn' },
    facts: {
      it: 'A est c’è l’East River, che in realtà non è un fiume ma un braccio di mare. Al di là ci sono Queens, il borough con più lingue parlate al mondo, e a sud-est Brooklyn. Guardate quanti ponti!',
      en: 'To the east is the East River, which is actually not a river but a tidal strait. Beyond it lie Queens, the borough with more languages spoken than anywhere in the world, and to the south-east Brooklyn. Look how many bridges!',
    },
  },
]

// --- geometria ---
const R = 6371
const rad = (d: number) => (d * Math.PI) / 180

export function bearingDeg(lat: number, lon: number): number {
  const φ1 = rad(ESB.lat), φ2 = rad(lat), Δλ = rad(lon - ESB.lon)
  const y = Math.sin(Δλ) * Math.cos(φ2)
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ)
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360
}

export function distanceKm(lat: number, lon: number): number {
  const φ1 = rad(ESB.lat), φ2 = rad(lat)
  const a = Math.sin((φ2 - φ1) / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(rad(lon - ESB.lon) / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

export function directionName(b: number, lang: 'it' | 'en'): string {
  const it = ['nord', 'nord-est', 'est', 'sud-est', 'sud', 'sud-ovest', 'ovest', 'nord-ovest']
  const en = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west']
  const i = Math.round(b / 45) % 8
  return (lang === 'it' ? it : en)[i]
}
