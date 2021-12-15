export const SCALE = 0.5;

const scaleDims = (dims) => dims.map((dim) => dim * SCALE);

export const [BASE_W, BASE_H, BASE_D] = scaleDims([0.4, 0.4, 0.4]);
export const [COLUMN_W, COLUMN_H, COLUMN_D] = scaleDims([0.3, 1, 0.3]);
export const [SUPPORT_W] = scaleDims([0.3]);
export const SPHERE_RADIUS = 0.17 * SCALE;

export const LATTICE_LENGTH = 1.5;
export const TWIG_DIAMETER = 0.01;
export const SPIKES_NUMBER = 7;
export const SPIKE_LENGTH = COLUMN_H * 1.2;
export const SPIKES_DIST =
  ((LATTICE_LENGTH - SPIKES_NUMBER * TWIG_DIAMETER) * 0.7) /
  (SPIKES_NUMBER - 1);
export const SPIKES_PAD =
  (LATTICE_LENGTH -
    (SPIKES_DIST * (SPIKES_NUMBER - 1) + SPIKES_NUMBER * TWIG_DIAMETER)) /
  2;
