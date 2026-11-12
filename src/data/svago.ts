import type { L } from '../i18n'

// ---------- Bandiere ----------
export const flags: { e: string; it: string; en: string }[] = [
  { e: '🇮🇹', it: 'Italia', en: 'Italy' }, { e: '🇺🇸', it: 'Stati Uniti', en: 'United States' },
  { e: '🇫🇷', it: 'Francia', en: 'France' }, { e: '🇬🇧', it: 'Regno Unito', en: 'United Kingdom' },
  { e: '🇨🇳', it: 'Cina', en: 'China' }, { e: '🇷🇺', it: 'Russia', en: 'Russia' },
  { e: '🇩🇪', it: 'Germania', en: 'Germany' }, { e: '🇪🇸', it: 'Spagna', en: 'Spain' },
  { e: '🇵🇹', it: 'Portogallo', en: 'Portugal' }, { e: '🇬🇷', it: 'Grecia', en: 'Greece' },
  { e: '🇳🇱', it: 'Paesi Bassi', en: 'Netherlands' }, { e: '🇧🇪', it: 'Belgio', en: 'Belgium' },
  { e: '🇨🇭', it: 'Svizzera', en: 'Switzerland' }, { e: '🇦🇹', it: 'Austria', en: 'Austria' },
  { e: '🇸🇪', it: 'Svezia', en: 'Sweden' }, { e: '🇳🇴', it: 'Norvegia', en: 'Norway' },
  { e: '🇵🇱', it: 'Polonia', en: 'Poland' }, { e: '🇺🇦', it: 'Ucraina', en: 'Ukraine' },
  { e: '🇹🇷', it: 'Turchia', en: 'Türkiye' }, { e: '🇪🇬', it: 'Egitto', en: 'Egypt' },
  { e: '🇲🇦', it: 'Marocco', en: 'Morocco' }, { e: '🇳🇬', it: 'Nigeria', en: 'Nigeria' },
  { e: '🇰🇪', it: 'Kenya', en: 'Kenya' }, { e: '🇿🇦', it: 'Sudafrica', en: 'South Africa' },
  { e: '🇪🇹', it: 'Etiopia', en: 'Ethiopia' }, { e: '🇬🇭', it: 'Ghana', en: 'Ghana' },
  { e: '🇸🇳', it: 'Senegal', en: 'Senegal' }, { e: '🇨🇩', it: 'Rep. Dem. del Congo', en: 'DR Congo' },
  { e: '🇮🇳', it: 'India', en: 'India' }, { e: '🇯🇵', it: 'Giappone', en: 'Japan' },
  { e: '🇰🇷', it: 'Corea del Sud', en: 'South Korea' }, { e: '🇮🇩', it: 'Indonesia', en: 'Indonesia' },
  { e: '🇵🇰', it: 'Pakistan', en: 'Pakistan' }, { e: '🇸🇦', it: 'Arabia Saudita', en: 'Saudi Arabia' },
  { e: '🇮🇷', it: 'Iran', en: 'Iran' }, { e: '🇮🇱', it: 'Israele', en: 'Israel' },
  { e: '🇻🇳', it: 'Vietnam', en: 'Vietnam' }, { e: '🇹🇭', it: 'Thailandia', en: 'Thailand' },
  { e: '🇨🇦', it: 'Canada', en: 'Canada' }, { e: '🇲🇽', it: 'Messico', en: 'Mexico' },
  { e: '🇧🇷', it: 'Brasile', en: 'Brazil' }, { e: '🇦🇷', it: 'Argentina', en: 'Argentina' },
  { e: '🇨🇱', it: 'Cile', en: 'Chile' }, { e: '🇨🇴', it: 'Colombia', en: 'Colombia' },
  { e: '🇵🇪', it: 'Perù', en: 'Peru' }, { e: '🇨🇺', it: 'Cuba', en: 'Cuba' },
  { e: '🇦🇺', it: 'Australia', en: 'Australia' }, { e: '🇳🇿', it: 'Nuova Zelanda', en: 'New Zealand' },
  { e: '🇫🇯', it: 'Figi', en: 'Fiji' }, { e: '🇹🇻', it: 'Tuvalu', en: 'Tuvalu' },
  { e: '🇮🇪', it: 'Irlanda', en: 'Ireland' }, { e: '🇩🇰', it: 'Danimarca', en: 'Denmark' },
  { e: '🇫🇮', it: 'Finlandia', en: 'Finland' }, { e: '🇭🇺', it: 'Ungheria', en: 'Hungary' },
  { e: '🇷🇴', it: 'Romania', en: 'Romania' }, { e: '🇭🇷', it: 'Croazia', en: 'Croatia' },
]

// ---------- Puzzle (immagini Open Access del Met) ----------
export const puzzles: { id: string; met: number; expect: string; title: L; artist: L; detail: L }[] = [
  {
    id: 'van-gogh', met: 436532, expect: 'Straw Hat',
    title: { it: 'Autoritratto con cappello di paglia', en: 'Self-Portrait with a Straw Hat' },
    artist: { it: 'Vincent van Gogh, 1887', en: 'Vincent van Gogh, 1887' },
    detail: { it: 'Lo trovi al primo piano del Met, nella sala 825.', en: 'You’ll find it on the Met’s second floor, Gallery 825.' },
  },
  {
    id: 'cipressi', met: 436535, expect: 'Cypresses',
    title: { it: 'Campo di grano con cipressi', en: 'Wheat Field with Cypresses' },
    artist: { it: 'Vincent van Gogh, 1889', en: 'Vincent van Gogh, 1889' },
    detail: { it: 'Dipinto in Provenza: guarda il cielo che si muove come un mare.', en: 'Painted in Provence: look at the sky moving like a sea.' },
  },
  {
    id: 'washington', met: 11417, expect: 'Delaware',
    title: { it: 'Washington attraversa il Delaware', en: 'Washington Crossing the Delaware' },
    artist: { it: 'Emanuel Leutze, 1851', en: 'Emanuel Leutze, 1851' },
    detail: { it: 'Quasi 4 metri per 6,5: è nella sala 760 del Met.', en: 'Almost 4 by 6.5 metres: it’s in the Met’s Gallery 760.' },
  },
]

// ---------- Trova le differenze ----------
export const spotDiff = {
  a: '/svago/pattinatori-a.jpg',
  b: '/svago/pattinatori-b.jpg',
  ratio: 1400 / 955,
  title: { it: 'Central Park d’inverno: il lago dei pattinatori', en: 'Central Park in winter: the skating pond' },
  credit: 'Currier & Ives, “Central Park, Winter – The Skating Pond”, 1862 · The Metropolitan Museum of Art, Open Access (CC0)',
  // coordinate normalizzate (x, y sul lato dell'immagine), raggio rispetto alla larghezza
  diffs: [
    { id: 'flag', x: 0.8064, y: 0.1754, r: 0.0232 },
    { id: 'smoke', x: 0.9071, y: 0.2565, r: 0.0214 },
    { id: 'dog', x: 0.9, y: 0.923, r: 0.0607 },
    { id: 'hat', x: 0.8554, y: 0.5733, r: 0.02 },
    { id: 'yellow-dress', x: 0.5839, y: 0.4136, r: 0.025 },
    { id: 'urn', x: 0.6382, y: 0.2916, r: 0.02 },
    { id: 'pavilion', x: 0.3161, y: 0.266, r: 0.0232 },
    { id: 'coat', x: 0.6679, y: 0.7173, r: 0.0821 },
    { id: 'birds', x: 0.4464, y: 0.1047, r: 0.0286 },
    { id: 'scarf', x: 0.0321, y: 0.6649, r: 0.0321 },
  ],
}

// ---------- Metti la città sulla mappa ----------
export const mapPlaces: { id: string; name: L; lat: number; lon: number }[] = [
  { id: 'esb', name: { it: 'Empire State Building', en: 'Empire State Building' }, lat: 40.7484, lon: -73.9857 },
  { id: 'un', name: { it: 'Sede dell’ONU', en: 'UN Headquarters' }, lat: 40.7489, lon: -73.968 },
  { id: 'wall', name: { it: 'Wall Street', en: 'Wall Street' }, lat: 40.7064, lon: -74.0094 },
  { id: 'times', name: { it: 'Times Square', en: 'Times Square' }, lat: 40.758, lon: -73.9855 },
  { id: 'gct', name: { it: 'Grand Central Terminal', en: 'Grand Central Terminal' }, lat: 40.7527, lon: -73.9772 },
  { id: 'cpark', name: { it: 'Central Park (centro)', en: 'Central Park (middle)' }, lat: 40.7812, lon: -73.9665 },
  { id: 'met', name: { it: 'Metropolitan Museum', en: 'The Met' }, lat: 40.7794, lon: -73.9632 },
  { id: 'amnh', name: { it: 'Museo di Storia Naturale', en: 'Natural History Museum' }, lat: 40.7813, lon: -73.974 },
  { id: 'bridge', name: { it: 'Ponte di Brooklyn (lato Manhattan)', en: 'Brooklyn Bridge (Manhattan end)' }, lat: 40.7115, lon: -74.0026 },
  { id: 'liberty', name: { it: 'Statua della Libertà', en: 'Statue of Liberty' }, lat: 40.6892, lon: -74.0445 },
]

/** contorno semplificato di Manhattan (dalla Battery fino alla 110ª Street circa) */
export const manhattanOutline: [number, number][] = [
  [40.7006, -74.0171], [40.7060, -74.0190], [40.7120, -74.0163], [40.7220, -74.0130], [40.7300, -74.0110],
  [40.7400, -74.0105], [40.7500, -74.0085], [40.7600, -74.0010], [40.7700, -73.9940], [40.7800, -73.9880],
  [40.7900, -73.9800], [40.8000, -73.9720], [40.8030, -73.9600], [40.7990, -73.9440], [40.7960, -73.9300],
  [40.7880, -73.9380], [40.7800, -73.9420], [40.7700, -73.9480], [40.7600, -73.9580], [40.7500, -73.9680],
  [40.7420, -73.9720], [40.7330, -73.9720], [40.7260, -73.9720], [40.7180, -73.9760], [40.7110, -73.9780],
  [40.7090, -73.9960], [40.7060, -74.0040], [40.7020, -74.0110],
]

// ---------- Indovina l'edificio ----------
export const buildingQuiz: { id: string; name: L; fact: L }[] = [
  { id: 'esb', name: { it: 'Empire State Building', en: 'Empire State Building' }, fact: { it: '1931, 381 metri al tetto: costruito in circa 410 giorni.', en: '1931, 381 metres to the roof: built in about 410 days.' } },
  { id: 'chrysler', name: { it: 'Chrysler Building', en: 'Chrysler Building' }, fact: { it: '1930: la guglia a raggiera fu montata in segreto.', en: '1930: the sunburst spire was assembled in secret.' } },
  { id: 'owtc', name: { it: 'One World Trade Center', en: 'One World Trade Center' }, fact: { it: '541 metri, cioè 1.776 piedi, come l’anno dell’indipendenza.', en: '541 metres, or 1,776 feet, like the year of independence.' } },
  { id: 'flatiron', name: { it: 'Flatiron Building', en: 'Flatiron Building' }, fact: { it: '1902: il “ferro da stiro” triangolare tra Broadway e Fifth Avenue.', en: '1902: the triangular “iron” between Broadway and Fifth Avenue.' } },
  { id: 'un', name: { it: 'Sede dell’ONU', en: 'UN Headquarters' }, fact: { it: 'Il Segretariato (39 piani) e la cupola bassa dell’Assemblea Generale.', en: 'The Secretariat (39 storeys) and the low dome of the General Assembly.' } },
  { id: '432park', name: { it: '432 Park Avenue', en: '432 Park Avenue' }, fact: { it: 'Una griglia perfetta di finestre quadrate, alta 426 metri.', en: 'A perfect grid of square windows, 426 metres tall.' } },
  { id: 'liberty', name: { it: 'Statua della Libertà', en: 'Statue of Liberty' }, fact: { it: 'Dono della Francia, inaugurata nel 1886.', en: 'A gift from France, dedicated in 1886.' } },
  { id: 'brooklyn', name: { it: 'Ponte di Brooklyn', en: 'Brooklyn Bridge' }, fact: { it: '1883: torri di pietra con archi a sesto acuto.', en: '1883: stone towers with pointed arches.' } },
  { id: 'woolworth', name: { it: 'Woolworth Building', en: 'Woolworth Building' }, fact: { it: 'La “cattedrale del commercio”, il più alto del mondo dal 1913 al 1930.', en: 'The “Cathedral of Commerce”, world’s tallest from 1913 to 1930.' } },
]
