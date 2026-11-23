/**
 * VISTA REALE DALL'86° PIANO – Google Street View incorporato (Maps Embed API, gratuita)
 *
 * key:  chiave API del progetto Google Cloud di United Network, abilitata SOLO alla "Maps Embed API"
 *       e limitata ai siti https://muner-ny-app.pages.dev/* e https://*.muner-ny-app.pages.dev/*
 *       (è visibile nel codice della pagina: per questo va limitata al nostro sito).
 * pano: codice della panoramica dell'86° piano (dal link di Google Maps). Se vuoto si usa `location`.
 *
 * Senza `key` si usa l'incorporamento standard di Google Maps ("Condividi → Incorpora una mappa"), che non richiede chiave.
 * Senza connessione si torna sempre al disegno.
 */
export const streetView = {
  key: '',
  pano: 'CIHM0ogKEICAgICUx9Pt-QE', // foto sferica dalla terrazza dell'86° piano scelta da Daniele (23/11/2026)
  location: '40.7484482,-73.9856457',
  /** correzione in gradi se la foto sferica non è orientata esattamente sul nord (da verificare sul telefono) */
  headingOffset: 0,
}
