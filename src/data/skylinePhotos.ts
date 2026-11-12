/**
 * FOTO DELLA VISTA DALL'86° PIANO
 *
 * Finché `skylinePhotos` è null, l'app mostra il disegno schematico.
 * Quando arrivano le foto (vostre o acquistate con licenza adatta), mettetele in /public/skyline/
 * e compilate UNA delle due modalità:
 *
 * A) Panoramica 360° (un'unica immagine larga che copre tutto il giro):
 *    { mode: 'pano', src: '/skyline/pano.jpg', startBearing: 0, horizonY: 0.55, credit: '…' }
 *    - startBearing: direzione (in gradi, 0 = nord, 90 = est) che si trova sul bordo SINISTRO dell'immagine
 *    - horizonY: altezza dell'orizzonte nell'immagine (0 = in alto, 1 = in basso)
 *
 * B) Quattro foto (nord, est, sud, ovest):
 *    { mode: 'photos', images: [{ src: '/skyline/n.jpg', center: 0, fov: 95 }, …], horizonY: 0.55, credit: '…' }
 *    - center: direzione al centro della foto; fov: ampiezza orizzontale della foto in gradi
 *
 * `pins` permette di correggere a mano la posizione di un punto cliccabile:
 *    { chrysler: { dBearing: -1.5, y: 0.42 } }  (spostamento in gradi e altezza 0-1 nell'immagine)
 */
export type SkylinePhotos =
  | { mode: 'pano'; src: string; startBearing: number; horizonY: number; credit: string; pins?: Pins }
  | { mode: 'photos'; images: { src: string; center: number; fov: number }[]; horizonY: number; credit: string; pins?: Pins }

type Pins = Record<string, { dBearing?: number; y?: number }>

export const skylinePhotos: SkylinePhotos | null = null
