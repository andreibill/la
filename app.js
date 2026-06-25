// ---------- ICONS (Phosphor, fill weight, inline SVG; fara cereri externe) ----------
// Fiecare emoji din site e inlocuit cu o iconita Phosphor. Singura sursa de adevar
// pentru desenul iconitelor e harta de mai jos; `icon(nume)` o impacheteaza intr-un <svg>.
const ICON_PATHS = {
  "arrow-counter-clockwise": '<path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z"/>',
  "arrow-left": '<path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"/>',
  "arrow-right": '<path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"/>',
  "arrow-up": '<path d="M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z"/>',
  "boat": '<path d="M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM136,168a8,8,0,0,1-16,0V104.87a8,8,0,0,1,16,0Zm56-67.1L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9V56H192Z"/>',
  "car": '<path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z"/>',
  "cat": '<path d="M222.83,33.54a16,16,0,0,0-18.14,3.15c-.14.14-.26.27-.38.41L187.05,57A111.28,111.28,0,0,0,69,57L51.69,37.1c-.12-.14-.24-.27-.38-.41a16,16,0,0,0-18.14-3.15A16.4,16.4,0,0,0,24,48.46V136c0,49,40.06,89.63,91.56,95.32a4,4,0,0,0,4.44-4v-32l-13.42-13.43a8.22,8.22,0,0,1-.41-11.37,8,8,0,0,1,11.49-.18L128,180.68l10.34-10.35a8,8,0,0,1,11.49.18,8.22,8.22,0,0,1-.41,11.37L136,195.31v32a4,4,0,0,0,4.44,4C191.94,225.62,232,185,232,136V48.46A16.4,16.4,0,0,0,222.83,33.54ZM84,152a12,12,0,1,1,12-12A12,12,0,0,1,84,152Zm20-64a8,8,0,1,1-16,0V69a8,8,0,0,1,16,0Zm32,0a8,8,0,1,1-16,0V64a8,8,0,0,1,16,0Zm16,0V69a8,8,0,0,1,16,0V88a8,8,0,1,1-16,0Zm20,64a12,12,0,1,1,12-12A12,12,0,0,1,172,152Z"/>',
  "coin": '<path d="M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84Zm-87.58,96v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z"/>',
  "coins": '<path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM56,146.87C36.41,141.4,24,132.39,24,124V109.93c8.16,5.78,19.09,10.44,32,13.57Zm80-23.37c12.91-3.13,23.84-7.79,32-13.57V124c0,8.39-12.41,17.4-32,22.87Zm-16,71.37C100.41,189.4,88,180.39,88,172v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41Zm0-44.62A163,163,0,0,1,96,152a163,163,0,0,1-24-1.75V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54Zm64,48a165.45,165.45,0,0,1-48,0V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54ZM232,172c0,8.39-12.41,17.4-32,22.87V171.5c12.91-3.13,23.84-7.79,32-13.57Z"/>',
  "confetti": '<path d="M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26ZM65.14,161.13l19.2-52.79,63.32,63.32-52.8,19.2ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z"/>',
  "diamond": '<path d="M240,128a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Z"/>',
  "dog": '<path d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM176,208H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.93,56h40.14L200,123.11V184A24,24,0,0,1,176,208Zm-72-68a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z"/>',
  "drop": '<path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Zm9.85,105.59a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"/>',
  "ferris-wheel": '<path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"/>',
  "fire": '<path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"/>',
  "gift": '<path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16h60a4,4,0,0,0,4-4V120H40V88h80v32h16V88h80v32H136v92a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM84.51,59a13.69,13.69,0,0,1-4.5-10A16.62,16.62,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92C109.71,70.39,94,67.43,84.51,59Zm87,0c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08,13.69,13.69,0,0,1,171.49,59Z"/>',
  "hand-pointing": '<path d="M224,104v50.93c0,46.2-36.85,84.55-83,85.06A83.71,83.71,0,0,1,80.6,215.4C58.79,192.33,34.15,136,34.15,136a16,16,0,0,1,6.53-22.23c7.66-4,17.1-.84,21.4,6.62l21,36.44a6.09,6.09,0,0,0,6,3.09l.12,0A8.19,8.19,0,0,0,96,151.74V32a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V104a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V88a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V112a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25v-7.28c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,224,104Z"/>',
  "heart": '<path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"/>',
  "island": '<path d="M239.55,226.65A8,8,0,0,1,232,232H24a8,8,0,0,1-5-14.25c1.63-1.3,38.53-30.26,98.29-33.45A120,120,0,0,1,114,146.37c1.73-21.71,10.91-50.63,42.95-72.48a66.28,66.28,0,0,0-15-1.87l-1.67,0c-19,.62-30.94,11.71-36.5,33.92A8,8,0,0,1,96,112a7.66,7.66,0,0,1-2-.24,8,8,0,0,1-5.82-9.7c9.25-36.95,33.11-45.42,51.5-46a81.43,81.43,0,0,1,21.68,2.45c-3.82-6.33-9.42-12.93-17.21-16.25-10-4.24-22.17-2.39-36.31,5.51a8,8,0,0,1-7.8-14c18.74-10.45,35.72-12.54,50.48-6.2,12.49,5.36,20.73,15.78,25.88,25,6.17-9.64,13.87-16.17,22.38-18.94,11.86-3.87,24.64-.72,38,9.37a8,8,0,0,1-9.64,12.76c-8.91-6.73-16.77-9.06-23.34-6.93-7.3,2.35-12.87,10-16.38,16.61A70.46,70.46,0,0,1,208,73.07c14.61,8.35,32,26.05,32,62.94a8,8,0,0,1-16,0c0-23.46-8.06-40-24-49a50.49,50.49,0,0,0-5.75-2.8,55.64,55.64,0,0,1,5.06,33.06,59.41,59.41,0,0,1-8.86,23.41,8,8,0,0,1-13.09-9.2c.75-1.09,16.33-24.38-3.26-49.37-27,15.21-41.89,37.25-44.16,65.59a104.27,104.27,0,0,0,3.83,36.44c62.65,1.81,101.52,32.33,103.2,33.66A8,8,0,0,1,239.55,226.65ZM52,168a28,28,0,1,0-28-28A28,28,0,0,0,52,168Z"/>',
  "lightning": '<path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"/>',
  "lock": '<path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"/>',
  "money": '<path d="M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm80-64V192a8,8,0,0,1-8,8H16a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H240A8,8,0,0,1,248,64Zm-16,46.35A56.78,56.78,0,0,1,193.65,72H62.35A56.78,56.78,0,0,1,24,110.35v35.3A56.78,56.78,0,0,1,62.35,184h131.3A56.78,56.78,0,0,1,232,145.65Z"/>',
  "music-notes": '<path d="M212.92,17.71a7.89,7.89,0,0,0-6.86-1.46l-128,32A8,8,0,0,0,72,56V166.1A36,36,0,1,0,88,196V102.25l112-28V134.1A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.71Z"/>',
  "piano-keys": '<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,208H48V48H72v96a8,8,0,0,0,8,8h8Zm64,0H104V152h8a8,8,0,0,0,8-8V48h16v96a8,8,0,0,0,8,8h8Zm56,0H168V152h8a8,8,0,0,0,8-8V48h24V208Z"/>',
  "play": '<path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"/>',
  "seal-percent": '<path d="M96,104a8,8,0,1,1,8-8A8,8,0,0,1,96,104Zm64,48a8,8,0,1,0,8,8A8,8,0,0,0,160,152Zm80-24c0,10.44-7.51,18.27-14.14,25.18-3.77,3.94-7.67,8-9.14,11.57-1.36,3.27-1.44,8.69-1.52,13.94-.15,9.76-.31,20.82-8,28.51s-18.75,7.85-28.51,8c-5.25.08-10.67.16-13.94,1.52-3.57,1.47-7.63,5.37-11.57,9.14C146.27,232.49,138.44,240,128,240s-18.27-7.51-25.18-14.14c-3.94-3.77-8-7.67-11.57-9.14-3.27-1.36-8.69-1.44-13.94-1.52-9.76-.15-20.82-.31-28.51-8s-7.85-18.75-8-28.51c-.08-5.25-.16-10.67-1.52-13.94-1.47-3.57-5.37-7.63-9.14-11.57C23.51,146.27,16,138.44,16,128s7.51-18.27,14.14-25.18c3.77-3.94,7.67-8,9.14-11.57,1.36-3.27,1.44-8.69,1.52-13.94.15-9.76.31-20.82,8-28.51s18.75-7.85,28.51-8c5.25-.08,10.67-.16,13.94-1.52,3.57-1.47,7.63-5.37,11.57-9.14C109.73,23.51,117.56,16,128,16s18.27,7.51,25.18,14.14c3.94,3.77,8,7.67,11.57,9.14,3.27,1.36,8.69,1.44,13.94,1.52,9.76.15,20.82.31,28.51,8s7.85,18.75,8,28.51c.08,5.25.16,10.67,1.52,13.94,1.47,3.57,5.37,7.63,9.14,11.57C232.49,109.73,240,117.56,240,128ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm77.66-26.34a8,8,0,0,0-11.32-11.32l-80,80a8,8,0,0,0,11.32,11.32ZM184,160a24,24,0,1,0-24,24A24,24,0,0,0,184,160Z"/>',
  "smiley-blank": '<path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM92,120a12,12,0,1,1,12-12A12,12,0,0,1,92,120Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"/>',
  "smiley-wink": '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM184,116H152a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Z"/>',
  "smiley-x-eyes": '<path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm-18.34,98.34a8,8,0,0,1-11.32,11.32L88,123.31,77.66,133.66a8,8,0,0,1-11.32-11.32L76.69,112,66.34,101.66A8,8,0,0,1,77.66,90.34L88,100.69,98.34,90.34a8,8,0,0,1,11.32,11.32L99.31,112ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm61.66-69.66a8,8,0,0,1-11.32,11.32L168,123.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L156.69,112l-10.35-10.34a8,8,0,0,1,11.32-11.32L168,100.69l10.34-10.35a8,8,0,0,1,11.32,11.32L179.31,112Z"/>',
  "smiley": '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"/>',
  "sparkle": '<path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"/>',
  "speaker-high": '<path d="M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Zm126.77,20.84a8,8,0,0,0-.72,11.3,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88A8,8,0,0,0,186.74,100.84Zm40.89-26.17a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66Z"/>',
  "speaker-slash": '<path d="M213.92,210.62a8,8,0,1,1-11.84,10.76L160,175.09v48.6a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.55-51A4,4,0,0,1,80,176.18V87.09L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-27.21-55.46a8,8,0,0,0,11.29-.7,40,40,0,0,0,0-52.88,8,8,0,1,0-12,10.57,24,24,0,0,1,0,31.72A8,8,0,0,0,186.71,155.16Zm40.92-80.49a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66ZM153,119.87a4,4,0,0,0,7-2.7V32.25a8.27,8.27,0,0,0-2.88-6.4,8,8,0,0,0-10-.16L103.83,59.33a4,4,0,0,0-.5,5.85ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Z"/>',
  "square": '<path d="M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z"/>',
  "sunglasses": '<path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40ZM91.22,179.22a8,8,0,0,1-11.31,0L58.34,157.66a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,91.22,179.22Zm120,0a8,8,0,0,1-11.31,0l-21.57-21.56a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,211.22,179.22Z"/>',
  "thumbs-up": '<path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"/>',
  "trophy": '<path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"/>',
  "wind": '<path d="M120,104H24a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,24.27,88H112a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,111.73,72H92.29a4,4,0,0,1-4-4.58A32,32,0,1,1,120,104Zm119.92-2.29a32,32,0,0,0-63.59-2.29,4,4,0,0,0,4,4.58h19.44a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H32.27A8.17,8.17,0,0,0,24,127.47,8,8,0,0,0,32,136H208A32,32,0,0,0,239.92,101.71ZM152,152H40.27A8.17,8.17,0,0,0,32,159.47,8,8,0,0,0,40,168H143.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H124.29a4,4,0,0,0-4,4.58A32,32,0,1,0,152,152Z"/>'
};
// Construieste markup-ul SVG pentru o iconita. `cls` adauga o clasa optionala (ex. colorare).
function icon(name, cls) {
  const p = ICON_PATHS[name] || '';
  const extra = cls ? ' ' + cls : '';
  return '<svg class="ic ic-' + name + extra + '" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">' + p + '</svg>';
}
// Inlocuieste in HTML toate placeholder-ele <span data-ic="nume" data-ic-cls="..."> cu iconita.
function hydrateIcons(root) {
  (root || document).querySelectorAll('[data-ic]').forEach(el => {
    el.innerHTML = icon(el.dataset.ic, el.dataset.icCls);
  });
}

// ---------- QUIZ ----------
// MODIFICĂ aceste întrebări ca să fie despre prietenia voastră!
// "answer" = poziția răspunsului corect (0 = prima opțiune)
const questions = [
  {
    q: "Unde a fost ucis Tung Tung Tung Sahur?",
    options: ["În Ohio", "În Italia", "Pe lună", "În Skibidi Toilet"],
    answer: 0,
    sound: "tung-tung-sahur.mp3",
    video: "q1.mp4"
  },
  {
    q: "Ce rasă de urs te omoară?",
    options: ["Ursul brun", "Ursul negru", "Ursul din Kazahstan", "Ursul koala"],
    answer: 0,
    sound: "q2.mp3",
    video: "q2.webm"
  },
  {
    q: "Dacă am fi două animale, ce animale am fi?",
    options: ["O vacă și un bou", "Un leneș și un cățel", "Un black cat și un dachshund", "O capră și un cal"],
    answer: 2,
    sound: "q3.mp3",
    videos: ["q3-cat.mp4", "q3-dog.mp4"]
  },
  {
    q: "La un pacient cu fibrilație atrială asociată sindromului Wolff-Parkinson-White (WPW), care dintre următoarele medicamente este CONTRAINDICAT?",
    options: ["Digoxin", "Procainamidă", "Flecainidă", "Ibutilidă"],
    answer: 0,
    sound: "mlg.mp3",
    mlg: true
  },
  {
    q: "Ești gata pentru cadoul tău?",
    final: true
  }
];

// Mesaje afișate la un răspuns greșit (se alege unul la întâmplare)
const wrongMessages = [
  "Mai încearcă! " + icon('smiley-wink'),
  "Nuu, mai gândește-te! " + icon('smiley-blank'),
  "Aproape... dar nu. Încearcă din nou!",
  "Hmm, nu chiar. Mai ai o șansă (sau mai multe) " + icon('smiley')
];
const correctMessage = "Corect! " + icon('heart', 'i-heart');

let current = 0;

// ---------- PROGRESS BAR (drumul spre cadou) ----------
let progressPct = 0;
function setProgress(pct) {
  progressPct = Math.max(progressPct, pct); // only ever move forward
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = progressPct + '%';
}
// progress checkpoint for each quiz question, indexed by `current`
const QUIZ_PCT = [10, 18, 38, 58, 66];

// ---------- REWARD SOUND + ANIMATION (per correct answer) ----------
let sfx = null;
function playSound(src, onEnd) {
  const done = () => { if (onEnd) { onEnd(); onEnd = null; } };
  try {
    if (sfx) sfx.pause();
    sfx = new Audio(src);
    sfx.muted = audioMuted;
    sfx.currentTime = 0;
    sfx.onended = done;
    sfx.onerror = done;       // never trap the user if the file fails
    // triggered by her click on the answer, so sound is allowed
    const p = sfx.play();
    if (p) p.catch(done);     // autoplay blocked / failed -> still let her continue
  } catch (e) { done(); }
}
function celebrateCorrect(btn) {
  if (btn) {
    btn.classList.add('pop');
    setTimeout(() => btn.classList.remove('pop'), 550);
  }
  launchConfetti();
}

// MLG-style hype: continuous confetti + strobe + screen rage + flying tokens.
// runs until the returned stop() is called (we tie it to the sound length).
// fiecare token e ori o iconita (HTML), ori text pur (stilul meme se pastreaza)
const MLG_TOKENS = [
  icon('fire'), icon('seal-percent'), icon('sunglasses'), icon('thumbs-up'),
  icon('confetti'), icon('money'), icon('lightning'), icon('trophy'), icon('smiley-x-eyes'),
  'WOW','MLG','420','GG','NO SCOPE','#REKT','HEADSHOT'
];
function spawnMlgToken() {
  const el = document.createElement('div');
  el.className = 'mlg-token';
  el.innerHTML = MLG_TOKENS[Math.floor(Math.random() * MLG_TOKENS.length)];
  el.style.left = (5 + Math.random() * 85) + 'vw';
  el.style.top = (8 + Math.random() * 75) + 'vh';
  el.style.setProperty('--rot', (Math.random() * 40 - 20) + 'deg');
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}
function mlgCelebrate() {
  const scr = document.getElementById('quiz');
  const strobe = document.getElementById('mlgStrobe');
  if (scr) scr.classList.add('mlg-rage');
  if (strobe) strobe.classList.remove('hidden');
  const iv = setInterval(() => {
    launchConfetti();
    spawnMlgToken();
    spawnMlgToken();
    spawnMlgToken();
  }, 200);
  return () => {
    clearInterval(iv);
    if (scr) scr.classList.remove('mlg-rage');
    if (strobe) strobe.classList.add('hidden');
    document.querySelectorAll('.mlg-token').forEach(t => t.remove());
  };
}

// play one or more green-screen videos as floating overlays (green removed in real time)
let mediaEntries = [];
function playVideoOverlay(srcs, loop) {
  const list = Array.isArray(srcs) ? srcs : [srcs];
  const overlay = document.getElementById('mediaOverlay');
  stopMediaVideos();
  overlay.innerHTML = '';
  overlay.classList.remove('hidden');
  // pisica + teckelul (2 clipuri) umplu aproape tot ecranul; se aseaza unul sub altul
  const maxW = list.length >= 3 ? 44 : list.length === 2 ? 96 : 96;

  // close the overlay only once every clip has finished (no click-to-skip)
  let ended = 0;
  const oneEnded = () => { if (++ended >= list.length) closeMedia(); };

  list.forEach(src => {
    const video = document.createElement('video');
    video.src = src; video.muted = true; video.playsInline = true;
    video.loop = !!loop;                  // loop to fill the sound's duration
    const canvas = document.createElement('canvas');
    canvas.style.maxWidth = maxW + 'vw';
    overlay.appendChild(video);
    overlay.appendChild(canvas);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!loop) video.onended = oneEnded;  // when not looping, close once clips finish
    video.onerror = oneEnded;             // a broken clip shouldn't trap the overlay
    const p = video.play();
    if (p) p.catch(oneEnded);             // autoplay failure shouldn't trap it either
    const entry = { video, raf: null };

    function render() {
      if (video.paused || video.ended) return;
      if (video.videoWidth) {
        // procesam la o rezolutie mai mare ca sa ramana clare cand sunt afisate mari
        const scale = Math.min(1, 700 / video.videoWidth);
        canvas.width = Math.round(video.videoWidth * scale);
        canvas.height = Math.round(video.videoHeight * scale);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = frame.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          // knock out green pixels -> transparent
          if (g > 90 && r < g * 0.8 && b < g * 0.85) d[i + 3] = 0;
        }
        ctx.putImageData(frame, 0, 0);
      }
      entry.raf = requestAnimationFrame(render);
    }
    entry.raf = requestAnimationFrame(render);
    mediaEntries.push(entry);
  });
}
function stopMediaVideos() {
  mediaEntries.forEach(e => {
    if (e.raf) cancelAnimationFrame(e.raf);
    try { e.video.pause(); } catch (_) {}
  });
  mediaEntries = [];
}
function closeMedia() {
  stopMediaVideos();
  const overlay = document.getElementById('mediaOverlay');
  overlay.innerHTML = '';
  overlay.classList.add('hidden');
}

// ---------- RESUME ON REFRESH ----------
function saveStage(stage) {
  try {
    localStorage.setItem('ili_stage', stage);
    localStorage.setItem('ili_current', String(current));
  } catch (e) {}
}
function clearStage() { try { localStorage.removeItem('ili_stage'); localStorage.removeItem('ili_current'); } catch (e) {} }
function restartGame() {
  if (!confirm('Începi de la capăt? Progresul se pierde.')) return;
  clearStage();
  location.reload();
}
function resumeIfSaved() {
  let stage = null, saved = 0;
  try { stage = localStorage.getItem('ili_stage'); saved = parseInt(localStorage.getItem('ili_current') || '0', 10) || 0; } catch (e) {}
  if (!stage || stage === 'welcome') return;
  current = saved;
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('progressWrap').classList.remove('hidden');
  if (stage === 'quiz') { preloadMedia(); document.getElementById('quiz').classList.remove('hidden'); showQuestion(); }
  else if (stage === 'piano') { setProgress(28); document.getElementById('pianoLevel').classList.remove('hidden'); initPiano(); }
  else if (stage === 'wordle') { setProgress(48); document.getElementById('wordleLevel').classList.remove('hidden'); initWordle(); }
  else if (stage === 'driving') { startDriving(); }
  else if (stage === 'gift') { setProgress(100); document.getElementById('gift').classList.remove('hidden'); }
}

function startQuiz() {
  preloadMedia(); // warm up reward clips/sounds during the quiz so they don't stutter
  saveStage('quiz');
  document.getElementById('progressWrap').classList.remove('hidden'); // show progress once started
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
}

// download all media up front (during the quiz) so playback is instant later
let preloaded = false;
function preloadMedia() {
  if (preloaded) return;
  preloaded = true;
  const files = [
    'tung-tung-sahur.mp3', 'q1.mp4', 'q2.mp3', 'q2.webm',
    'q3.mp3', 'q3-cat.mp4', 'q3-dog.mp4', 'mlg.mp3', 'jam.mp3', 'sloth.webp', 'faaah.mp3'
  ].concat(GIFT_PHOTOS || []);
  files.forEach(src => {
    if (/\.(mp4|webm)$/i.test(src)) { const v = document.createElement('video'); v.preload = 'auto'; v.muted = true; v.src = src; }
    else if (/\.mp3$/i.test(src)) { const a = new Audio(); a.preload = 'auto'; a.src = src; }
    else { const i = new Image(); i.src = src; }
  });
}

function showQuestion() {
  saveStage('quiz');
  setProgress(QUIZ_PCT[current] || 0);
  const q = questions[current];
  document.getElementById('qCounter').textContent = `Întrebarea ${current + 1} din ${questions.length}`;
  document.getElementById('qText').textContent = q.q;
  document.getElementById('qFeedback').textContent = '';
  document.getElementById('nextBtn').classList.add('hidden');

  const box = document.getElementById('qOptions');
  box.innerHTML = '';

  // final question: a single "Yes" button that goes straight to the driving level
  if (q.final) {
    const b = document.createElement('button');
    b.innerHTML = 'Da! ' + icon('gift');
    b.onclick = () => {
      document.getElementById('quiz').classList.add('hidden');
      startDriving();
    };
    box.appendChild(b);
    return;
  }

  // shuffle so the correct answer isn't always in the same spot
  const opts = shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer })));
  opts.forEach(o => {
    const b = document.createElement('button');
    b.textContent = o.text;
    b.onclick = () => pickAnswer(o.correct, b);
    box.appendChild(b);
  });
}

// Fisher-Yates shuffle (in place)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickAnswer(isCorrect, btn) {
  const q = questions[current];

  if (isCorrect) {
    // corect: blochează toate opțiunile, marchează doar pe cea aleasă
    document.querySelectorAll('#qOptions button').forEach(b => b.disabled = true);
    btn.classList.add('correct');
    document.getElementById('qFeedback').innerHTML = correctMessage;
    celebrateCorrect(btn);                  // animation on every correct answer
    if (!q.sound) sfxCorrect();             // chime doar cand nu exista deja o melodie-recompensa
    const nextBtn = document.getElementById('nextBtn');
    const vids = q.videos || (q.video ? [q.video] : null);
    // when there's a sound, loop the clips so the animation lasts exactly as long as the sound
    if (vids) playVideoOverlay(vids, !!q.sound);
    const stopMlg = q.mlg ? mlgCelebrate() : null; // runs until stopped
    if (q.sound) {
      // keep "Next" hidden until the sound finishes; every animation ends with it
      nextBtn.classList.add('hidden');
      playSound(q.sound, () => {
        nextBtn.classList.remove('hidden');
        if (stopMlg) stopMlg();
        if (vids) closeMedia();             // close the video animation with the sound
      });
    } else {
      nextBtn.classList.remove('hidden');
      if (stopMlg) setTimeout(stopMlg, 4000); // no sound -> a few seconds of chaos
    }
  } else {
    // greșit: dezactivează doar opțiunea greșită, lasă restul disponibile
    btn.classList.add('wrong');
    btn.disabled = true;
    sfxWrong();
    const msg = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
    document.getElementById('qFeedback').innerHTML = msg;
  }
}

function nextQuestion() {
  current++;
  // after answering question 2, take the piano interlude before question 3
  if (current === 2) {
    setProgress(28);
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('pianoLevel').classList.remove('hidden');
    initPiano();
    return;
  }
  // after answering question 3, play the Wordle round before question 4
  if (current === 3) {
    setProgress(48);
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('wordleLevel').classList.remove('hidden');
    initWordle();
    return;
  }
  if (current < questions.length) {
    showQuestion();
  } else {
    // fallback (the last question is the "ready?" screen that jumps to driving itself)
    document.getElementById('quiz').classList.add('hidden');
    startDriving();
  }
}

// ---------- PIANO INTERLUDE ----------
let audioCtx = null;

// Note frequencies (equal temperament) for the keys we use
const NOTE_FREQ = {
  'E3':164.81,'F#3':185.00,'G3':196.00,'G#3':207.65,'A3':220.00,'B3':246.94,
  'C4':261.63,'C#4':277.18,'D4':293.66,'D#4':311.13,'E4':329.63,'F4':349.23,'F#4':369.99,'G4':392.00,'G#4':415.30,'A4':440.00,'B4':493.88,
  'C5':523.25,'C#5':554.37,'D5':587.33,'E5':659.25
};

// Chords used by the intro progression. Chord name -> notes.
const CHORDS = {
  'G':     ['G3','B3','D4'],
  'B7':    ['B3','D#4','F#4','A4'],
  'Em':    ['E3','G3','B3'],
  'E7/G#': ['G#3','B3','D4','E4'],
  'Am':    ['A3','C4','E4'],
  'D':     ['D4','F#4','A4']
};

// the intro chord cycle:  G | G B7 | Em | Em E7/G# | Am | Am | D | D
const PROGRESSION = ['G','G','B7','Em','Em','E7/G#','Am','Am','D','D'];

let masterBus = null;
let masterOut = null;
let audioMuted = false;
try { audioMuted = localStorage.getItem('ili_muted') === '1'; } catch (e) {}

function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // master bus: gentle compression so overlapping notes glue instead of clipping
    const comp = audioCtx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.knee.value = 24; comp.ratio.value = 4;
    comp.attack.value = 0.003; comp.release.value = 0.25;
    masterOut = audioCtx.createGain();
    masterOut.gain.value = audioMuted ? 0 : 0.9;
    comp.connect(masterOut); masterOut.connect(audioCtx.destination);
    masterBus = comp;
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

// single mute toggle for everything (piano, sound effects, jam loop)
function applyMute() {
  try { localStorage.setItem('ili_muted', audioMuted ? '1' : '0'); } catch (e) {}
  if (jamAudio) jamAudio.muted = audioMuted;
  if (sfx) sfx.muted = audioMuted;
  if (faaahAudio) faaahAudio.muted = audioMuted;
  if (masterOut) masterOut.gain.value = audioMuted ? 0 : 0.9;
  const b = document.getElementById('muteBtn');
  if (b) b.innerHTML = audioMuted ? icon('speaker-slash') : icon('speaker-high');
}
function toggleMute() { audioMuted = !audioMuted; applyMute(); }

// ---------- SOUND EFFECTS (sintetizate cu Web Audio, fara fisiere) ----------
// Toate trec prin masterBus, deci butonul de mute le opreste odata cu pianul.
// un singur beep parametrizabil
function sfxTone(freq, dur, opts) {
  if (!audioCtx || audioMuted) return;
  opts = opts || {};
  const t = audioCtx.currentTime + (opts.when || 0);
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = opts.type || 'triangle';
  o.frequency.setValueAtTime(freq, t);
  if (opts.slideTo) o.frequency.exponentialRampToValueAtTime(opts.slideTo, t + dur);
  const peak = opts.gain == null ? 0.16 : opts.gain;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.008);   // atac rapid
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);   // decadere lina
  o.connect(g); g.connect(masterBus || audioCtx.destination);
  o.start(t); o.stop(t + dur + 0.02);
}
// click scurt de interfata
function sfxClick() { ensureAudio(); sfxTone(620, 0.07, { type: 'square', gain: 0.06, slideTo: 880 }); }
// raspuns corect: trei note ascendente, vesele
function sfxCorrect() {
  ensureAudio();
  [523.25, 659.25, 783.99].forEach((f, i) => sfxTone(f, 0.18, { type: 'triangle', gain: 0.12, when: i * 0.08 }));
}
// raspuns gresit: reda fisierul faaah.mp3 (element audio propriu, ca sa nu se incurce
// cu melodiile-recompensa si sa poata fi pornit din nou la fiecare greseala)
let faaahAudio = null;
function sfxWrong() {
  try {
    if (!faaahAudio) faaahAudio = new Audio('faaah.mp3');
    faaahAudio.muted = audioMuted;
    faaahAudio.currentTime = 0;
    const p = faaahAudio.play();
    if (p) p.catch(() => {});   // daca autoplay e blocat, mergem mai departe
  } catch (e) {}
}
// pop (deschiderea cadoului)
function sfxPop() { ensureAudio(); sfxTone(360, 0.12, { type: 'sine', gain: 0.18, slideTo: 740 }); }
// tic de masina de scris: foarte scurt si discret, cu pitch usor variabil
function sfxType() { sfxTone(1500 + Math.random() * 500, 0.025, { type: 'square', gain: 0.025 }); }
// tasta de Wordle: un "toc" scurt; mai jos cand stergi
function sfxKey(down) {
  ensureAudio();
  if (down) sfxTone(300, 0.05, { type: 'square', gain: 0.06, slideTo: 220 });
  else sfxTone(440, 0.05, { type: 'square', gain: 0.06, slideTo: 560 });
}
// castig: o mica fanfara (arpegiu major + sclipici sus)
function sfxWin() {
  ensureAudio();
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => sfxTone(f, 0.34, { type: 'triangle', gain: 0.14, when: i * 0.11 }));
  sfxTone(1568, 0.5, { type: 'sine', gain: 0.06, when: 0.46 });
}

// click sonor pe orice buton sau pe butoanele "ecran" (hub-ul rotii) — faza de capture,
// ca sa sune chiar daca handler-ul opreste propagarea
document.addEventListener('click', (e) => {
  // tastele de Wordle au propriul sunet (sfxKey), nu si click-ul generic
  if (e.target.closest('.wordle-keyboard')) return;
  if (e.target.closest('button, .wheel-hub')) sfxClick();
}, true);

// relative strength of each harmonic partial (fundamental + overtones), piano-like
const PIANO_PARTIALS = [1.0, 0.5, 0.38, 0.24, 0.14, 0.08];

// play a single note synthesised to sound like a real piano
function playNote(freq, when = 0, dur = 0.9, gainPeak = 0.18) {
  if (!freq || !audioCtx) return;
  const t = audioCtx.currentTime + when;

  // per-note brightness filter that closes as the note decays
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(Math.min(9000, freq * 14), t);
  filter.frequency.exponentialRampToValueAtTime(Math.max(800, freq * 3), t + dur * 0.9);
  filter.Q.value = 0.5;
  filter.connect(masterBus || audioCtx.destination);

  // harmonic partials with string inharmonicity (stiff strings tune slightly sharp)
  const B = 0.0004; // inharmonicity coefficient
  PIANO_PARTIALS.forEach((amp, i) => {
    const n = i + 1;
    const o = audioCtx.createOscillator();
    o.type = 'sine';
    o.frequency.value = freq * n * Math.sqrt(1 + B * n * n);
    o.detune.value = (Math.random() * 2 - 1) * 3; // tiny warmth
    const pg = audioCtx.createGain();
    const peak = gainPeak * amp;
    const partialDur = Math.max(0.09, dur * Math.pow(0.72, i)); // highs fade faster
    pg.gain.setValueAtTime(0, t);
    pg.gain.linearRampToValueAtTime(peak, t + 0.005);          // fast hammer attack
    pg.gain.exponentialRampToValueAtTime(0.0001, t + partialDur);
    o.connect(pg); pg.connect(filter);
    o.start(t); o.stop(t + dur + 0.1);
  });

  // hammer thump: a short filtered noise burst at onset
  const nLen = 0.03;
  const buf = audioCtx.createBuffer(1, Math.ceil(audioCtx.sampleRate * nLen), audioCtx.sampleRate);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
  const noise = audioCtx.createBufferSource();
  noise.buffer = buf;
  const nf = audioCtx.createBiquadFilter();
  nf.type = 'bandpass'; nf.frequency.value = Math.min(4000, freq * 4); nf.Q.value = 0.7;
  const ng = audioCtx.createGain();
  ng.gain.setValueAtTime(gainPeak * 0.45, t);
  ng.gain.exponentialRampToValueAtTime(0.0001, t + nLen);
  noise.connect(nf); nf.connect(ng); ng.connect(masterBus || audioCtx.destination);
  noise.start(t); noise.stop(t + nLen + 0.02);
}

let playingBack = false;

// multiple-choice song options (the correct one is the song you've been working on)
const SONG_OPTIONS = [
  "The Winner Takes It All – ABBA",
  "Dancing Queen – ABBA",
  "Someone Like You – Adele",
  "Let It Be – The Beatles"
];
const CORRECT_SONG = 0;

// play the progression as a flowing arpeggio so it sounds like real piano,
// not flat block chords
function playProgression() {
  ensureAudio();
  if (playingBack) return;
  playingBack = true;
  document.getElementById('pianoContinue').classList.add('hidden');
  document.getElementById('lastChord').innerHTML = 'Ascultă... ' + icon('music-notes');

  const listenBtn = document.getElementById('listenBtn');
  listenBtn.disabled = true;

  const beat = 0.5;            // seconds per beat
  const chordBeats = 2;        // each chord lasts 2 beats
  let when = 0;                // scheduling offset in seconds

  PROGRESSION.forEach((name, ci) => {
    const notes = CHORDS[name];
    // left-hand bass note on the downbeat (an octave below the root)
    const rootFreq = NOTE_FREQ[notes[0]] / 2;
    playNote(rootFreq, when, beat * chordBeats, 0.10);
    // right-hand broken chord: notes spread across the beats
    notes.forEach((n, k) => {
      const t = when + (k + 1) * (beat * chordBeats) / (notes.length + 1);
      playNote(NOTE_FREQ[n], t, beat, 0.11);
    });
    // light keys + button roughly when the chord starts
    setTimeout(() => {
      notes.forEach(n => litKey(n));
    }, when * 1000);
    when += beat * chordBeats;
  });

  setTimeout(() => {
    playingBack = false;
    listenBtn.disabled = false;
    document.getElementById('songOptions').classList.remove('hidden'); // reveal after listening
    document.getElementById('lastChord').innerHTML = 'Ce piesă era? Alege mai jos ' + icon('hand-pointing');
  }, when * 1000 + 200);
}

function guessSong(index, btn) {
  if (index === CORRECT_SONG) {
    document.querySelectorAll('#songOptions button').forEach(b => b.disabled = true);
    btn.classList.add('correct');
    sfxCorrect();
    document.getElementById('lastChord').innerHTML = 'Exact! ' + icon('heart', 'i-heart') + icon('music-notes');
    document.getElementById('pianoContinue').classList.remove('hidden');
  } else {
    btn.classList.add('wrong');
    btn.disabled = true;
    sfxWrong();
    document.getElementById('lastChord').innerHTML = 'Nu chiar... mai ascultă o dată și încearcă ' + icon('smiley');
  }
}

function litKey(note) {
  const el = document.querySelector(`.pkey[data-note="${note}"]`);
  if (el) { el.classList.add('lit'); setTimeout(() => el.classList.remove('lit'), 350); }
}

function initPiano() {
  saveStage('piano');
  document.getElementById('pianoContinue').classList.add('hidden');
  document.getElementById('listenBtn').disabled = false;
  playingBack = false;

  // song options (shuffled so the order isn't a giveaway)
  const order = SONG_OPTIONS.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const opts = document.getElementById('songOptions');
  opts.innerHTML = '';
  order.forEach(idx => {
    const b = document.createElement('button');
    b.textContent = SONG_OPTIONS[idx];
    b.onclick = () => guessSong(idx, b);
    opts.appendChild(b);
  });
  opts.classList.add('hidden'); // revealed only after she's heard the song

  // keyboard covering the notes the chords use (E3 .. A4) — visual only here
  const keys = [
    {n:'E3',  w:true,  l:'E'},
    {n:'F#3', w:false},
    {n:'G3',  w:true,  l:'G'},
    {n:'G#3', w:false},
    {n:'A3',  w:true,  l:'A'},
    {n:'B3',  w:true,  l:'B'},
    {n:'C4',  w:true,  l:'C'},
    {n:'C#4', w:false},
    {n:'D4',  w:true,  l:'D'},
    {n:'D#4', w:false},
    {n:'E4',  w:true,  l:'E'},
    {n:'F#4', w:false},
    {n:'G4',  w:true,  l:'G'},
    {n:'G#4', w:false},
    {n:'A4',  w:true,  l:'A'}
  ];
  const piano = document.getElementById('piano');
  piano.innerHTML = '';
  keys.forEach(k => {
    const el = document.createElement('div');
    el.className = 'pkey' + (k.w ? '' : ' black');
    el.dataset.note = k.n;
    if (k.l) { const s = document.createElement('span'); s.className = 'lbl'; s.textContent = k.l; el.appendChild(s); }
    const hit = () => { ensureAudio(); playNote(NOTE_FREQ[k.n], 0, 0.9, 0.16); litKey(k.n); };
    el.addEventListener('mousedown', hit);
    el.addEventListener('touchstart', (e) => { e.preventDefault(); hit(); });
    piano.appendChild(el);
  });

  document.getElementById('lastChord').innerHTML = '&nbsp;';
}

function finishPiano() {
  document.getElementById('pianoLevel').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion(); // current is already 2 -> question 3
}

// ---------- WORDLE INTERLUDE ----------
const WORDLE_TARGET = 'LENES';   // the word she has to guess
const WORDLE_MAX = 6;            // number of attempts
let wordleRow = 0;
let wordleCol = 0;
let wordleDone = false;


function initWordle() {
  saveStage('wordle');
  wordleRow = 0;
  wordleCol = 0;
  wordleDone = false;
  document.getElementById('wordleContinue').classList.add('hidden');
  document.getElementById('wordleReveal').innerHTML = '';
  document.getElementById('wordleMsg').innerHTML = '&nbsp;';
  document.getElementById('wordleIntro').classList.remove('hidden');
  document.getElementById('wordleMsg').classList.remove('hidden');
  document.getElementById('wordleGrid').classList.remove('hidden');
  document.getElementById('wordleKeyboard').classList.remove('hidden');

  // build the empty grid
  const grid = document.getElementById('wordleGrid');
  grid.innerHTML = '';
  for (let r = 0; r < WORDLE_MAX; r++) {
    const row = document.createElement('div');
    row.className = 'wordle-row';
    row.dataset.row = r;
    for (let c = 0; c < 5; c++) {
      const cell = document.createElement('div');
      cell.className = 'wordle-cell';
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }

  buildWordleKeyboard();
}

// full QWERTY on-screen keyboard, just like the real Wordle
const WORDLE_KEYS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','⌫']
];

function buildWordleKeyboard() {
  const kb = document.getElementById('wordleKeyboard');
  kb.innerHTML = '';
  WORDLE_KEYS.forEach(rowKeys => {
    const row = document.createElement('div');
    row.className = 'krow';
    rowKeys.forEach(k => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'key' + (k === 'ENTER' || k === '⌫' ? ' wide' : '');
      btn.textContent = k;
      btn.dataset.key = k;
      btn.addEventListener('click', () => pressWordleKey(k));
      row.appendChild(btn);
    });
    kb.appendChild(row);
  });
}

function pressWordleKey(k) {
  if (wordleDone) return;
  if (k === 'ENTER') { submitGuess(); return; }
  if (k === '⌫' || k === 'BACKSPACE') { removeLetter(); return; }
  if (/^[A-Z]$/.test(k)) addLetter(k);
}

function currentRowCells() {
  const rowEl = document.querySelector(`.wordle-row[data-row="${wordleRow}"]`);
  return rowEl ? rowEl.children : null;
}

function addLetter(letter) {
  if (wordleCol >= 5) return;
  const cells = currentRowCells();
  if (!cells) return;
  cells[wordleCol].textContent = letter;
  cells[wordleCol].classList.add('filled');
  wordleCol++;
  sfxKey(); // sunet de tastare cand introduci o litera
}

function removeLetter() {
  if (wordleCol <= 0) return;
  wordleCol--;
  const cells = currentRowCells();
  if (!cells) return;
  cells[wordleCol].textContent = '';
  cells[wordleCol].classList.remove('filled');
  sfxKey(true); // toc mai jos cand stergi
}

function readGuess() {
  const cells = currentRowCells();
  if (!cells) return '';
  let g = '';
  for (let i = 0; i < 5; i++) g += (cells[i].textContent || '');
  return g.toUpperCase();
}

// keep keyboard colors, never downgrade a better state (correct > present > absent)
function updateKeyColor(letter, state) {
  const btn = document.querySelector(`.wordle-keyboard .key[data-key="${letter}"]`);
  if (!btn) return;
  const rank = { absent: 0, present: 1, correct: 2 };
  const current = btn.classList.contains('correct') ? 'correct'
    : btn.classList.contains('present') ? 'present'
    : btn.classList.contains('absent') ? 'absent' : null;
  if (current && rank[current] >= rank[state]) return;
  btn.classList.remove('absent', 'present', 'correct');
  btn.classList.add(state);
}

function submitGuess() {
  if (wordleDone) return;
  const guess = readGuess();

  if (!/^[A-Z]{5}$/.test(guess)) {
    document.getElementById('wordleMsg').textContent = 'Scrie exact 5 litere (fără diacritice).';
    return;
  }

  const cells = currentRowCells();
  const target = WORDLE_TARGET.split('');
  const result = new Array(5).fill('absent');
  const remaining = {};

  // first pass: exact matches
  for (let i = 0; i < 5; i++) {
    if (guess[i] === target[i]) {
      result[i] = 'correct';
    } else {
      remaining[target[i]] = (remaining[target[i]] || 0) + 1;
    }
  }
  // second pass: present-but-wrong-spot
  for (let i = 0; i < 5; i++) {
    if (result[i] === 'correct') continue;
    if (remaining[guess[i]] > 0) {
      result[i] = 'present';
      remaining[guess[i]]--;
    }
  }

  for (let i = 0; i < 5; i++) {
    cells[i].textContent = guess[i];
    cells[i].classList.add(result[i]);
    updateKeyColor(guess[i], result[i]);
  }

  if (guess === WORDLE_TARGET) {
    wordleDone = true;
    sfxWin();
    // show ONLY the sloth image + caption + continue button
    document.getElementById('wordleIntro').classList.add('hidden');
    document.getElementById('wordleGrid').classList.add('hidden');
    document.getElementById('wordleKeyboard').classList.add('hidden');
    document.getElementById('wordleMsg').classList.add('hidden');
    document.getElementById('wordleReveal').innerHTML =
      `<img src="sloth.webp" alt="Un leneș drăguț pe un copac"><div class="sloth-caption">(tu)</div>`;
    document.getElementById('wordleContinue').classList.remove('hidden');
    return;
  }

  wordleRow++;
  wordleCol = 0;
  if (wordleRow >= WORDLE_MAX) {
    // a ramas fara incercari (a pierdut nivelul) -> faaah; dar o lasam sa continue
    sfxWrong();
    document.getElementById('wordleMsg').innerHTML =
      `Indiciu: cuvântul e „${WORDLE_TARGET}". Mai scrie-l o dată ` + icon('smiley');
    // add one more bonus row so she can still finish
    const grid = document.getElementById('wordleGrid');
    const row = document.createElement('div');
    row.className = 'wordle-row';
    row.dataset.row = wordleRow;
    for (let c = 0; c < 5; c++) {
      const cell = document.createElement('div');
      cell.className = 'wordle-cell';
      row.appendChild(cell);
    }
    grid.appendChild(row);
  } else {
    document.getElementById('wordleMsg').innerHTML = '&nbsp;';
  }
}

function finishWordle() {
  document.getElementById('wordleLevel').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion(); // current is already 3 -> question 4
}

// physical keyboard support — only active while the Wordle screen is showing
document.addEventListener('keydown', (e) => {
  const screen = document.getElementById('wordleLevel');
  if (!screen || screen.classList.contains('hidden')) return;
  if (e.key === 'Enter') { e.preventDefault(); pressWordleKey('ENTER'); }
  else if (e.key === 'Backspace') { e.preventDefault(); pressWordleKey('⌫'); }
  else if (/^[a-zA-Z]$/.test(e.key)) { e.preventDefault(); pressWordleKey(e.key.toUpperCase()); }
});



// driving-game state globals (these were never declared -> ReferenceError broke the game)
let canvas, ctx, car, gift, enemies, pools, raf;
let keys = {}, started = false, listenersBound = false;

// pre-rendered fire particles for the burn animation
let fire = null;

// car sprite (top-down, front pointing up)
const carImg = new Image();
let carImgReady = false;
carImg.onload = () => { carImgReady = true; };

// cadoul desenat pe canvas: iconita Phosphor (gift) randata dintr-un SVG, aurie
const giftImg = new Image();
let giftImgReady = false;
giftImg.onload = () => { giftImgReady = true; };
giftImg.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#ffd24a">' + ICON_PATHS.gift + '</svg>'
);
carImg.src = "data:image/png;base64,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";

// looping background "jam" while the race is on (until win or crash)
let jamAudio = null;
function startJam() {
  try {
    if (!jamAudio) { jamAudio = new Audio('jam.mp3'); jamAudio.loop = true; }
    jamAudio.muted = audioMuted;
    jamAudio.currentTime = 0;
    const p = jamAudio.play();
    if (p) p.catch(() => {});
  } catch (e) {}
}
function stopJam() {
  if (jamAudio) { jamAudio.pause(); jamAudio.currentTime = 0; }
}

function startDriving() {
  saveStage('driving');
  setProgress(88);
  document.getElementById('lose').classList.add('hidden');
  document.getElementById('driving').classList.remove('hidden');
  startJam();          // jam plays on loop while racing
  initGame();
}

function initGame() {
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');

  car = { x: 80, y: 540, angle: -Math.PI / 2, speed: 0, w: 44, h: 80 };
  gift = { x: 800, y: 80, r: 40 };
  fire = null;
  started = true;

  // enemy cars patrolling the corridors (bounce back and forth)
  // axis 'h' = horizontal, 'v' = vertical; min/max are travel bounds
  enemies = [
    { x: 700, y: 520, r: 24, axis: 'h', min: 600, max: 870, spd:  2.4, dir: 1 },
    { x: 110, y: 360, r: 24, axis: 'v', min: 200, max: 410, spd: -2.0, dir: 1 },
    { x: 450, y: 200, r: 24, axis: 'h', min: 280, max: 600, spd:  2.8, dir: 1 },
    { x: 760, y: 100, r: 24, axis: 'v', min: 60, max: 130, spd: -1.8, dir: 1 }
  ];

  // static oil pools (touching = fire)
  pools = [
    { x: 330, y: 540, r: 30 },
    { x: 150, y: 200, r: 28 },
    { x: 500, y: 200, r: 30 },
    { x: 720, y: 380, r: 28 }
  ];

  // keyboard + touch (bind once)
  if (!listenersBound) {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    bindHold('leftBtn', 'ArrowLeft');
    bindHold('rightBtn', 'ArrowRight');
    bindHold('upBtn', 'ArrowUp');
    listenersBound = true;
  }
  keys = {};

  loop();
}

function onKeyDown(e) {
  if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
    keys[e.key] = true;
    e.preventDefault();
  }
}
function onKeyUp(e) { keys[e.key] = false; }

function bindHold(id, key) {
  const el = document.getElementById(id);
  const down = (e) => { keys[key] = true; e.preventDefault(); };
  const up = (e) => { keys[key] = false; e.preventDefault(); };
  el.addEventListener('touchstart', down);
  el.addEventListener('touchend', up);
  el.addEventListener('mousedown', down);
  el.addEventListener('mouseup', up);
  el.addEventListener('mouseleave', up);
}

// purple buildings forming a winding maze from bottom-left to top-right
// car starts ~(80,540), gift at (800,80) on a 900x620 field
const walls = [
  // lower barrier with a gap on the right
  {x: 0,   y: 440, w: 560, h: 40},
  // vertical divider pushing the car up the left side
  {x: 200, y: 230, w: 40,  h: 250},
  // mid horizontal wall with a gap on the left
  {x: 200, y: 300, w: 480, h: 40},
  // upper-left block
  {x: 0,   y: 120, w: 360, h: 40},
  // guard wall (vertical) — its top is now OPEN so the car enters the
  // gift chamber from the LEFT, driving up the corridor to its right
  {x: 640, y: 160, w: 40,  h: 280},
  // bottom seal of the gift chamber (blocks entering from below)
  {x: 740, y: 160, w: 160, h: 40}
];


function update() {
  if (keys['ArrowUp']) car.speed += 0.3;
  if (keys['ArrowDown']) car.speed -= 0.3;
  car.speed *= 0.93; // a touch more friction
  car.speed = Math.max(-3.5, Math.min(5, car.speed));

  const turn = 0.045 * (car.speed >= 0 ? 1 : -1); // tighter, less forgiving steering
  if (keys['ArrowLeft']) car.angle -= turn;
  if (keys['ArrowRight']) car.angle += turn;

  const nextX = car.x + Math.cos(car.angle) * car.speed;
  const nextY = car.y + Math.sin(car.angle) * car.speed;

  // wall collision -> hard stop + small bounce back
  let blocked = false;
  for (const w of walls) {
    if (nextX > w.x - 16 && nextX < w.x + w.w + 16 &&
        nextY > w.y - 16 && nextY < w.y + w.h + 16) {
      blocked = true; break;
    }
  }
  if (!blocked) {
    car.x = Math.max(22, Math.min(canvas.width - 22, nextX));
    car.y = Math.max(22, Math.min(canvas.height - 22, nextY));
  } else {
    // back off along travel direction and kill momentum
    car.x -= Math.cos(car.angle) * 3;
    car.y -= Math.sin(car.angle) * 3;
    car.x = Math.max(22, Math.min(canvas.width - 22, car.x));
    car.y = Math.max(22, Math.min(canvas.height - 22, car.y));
    car.speed = 0;
  }

  // reached gift?
  const dx = car.x - gift.x, dy = car.y - gift.y;
  if (Math.sqrt(dx*dx + dy*dy) < gift.r + 18) {
    arrive();
    return;
  }

  // move enemy cars along their patrol axis, bouncing at bounds
  for (const e of enemies) {
    if (e.axis === 'h') {
      e.x += e.spd * e.dir;
      if (e.x <= e.min || e.x >= e.max) e.dir *= -1;
    } else {
      e.y += e.spd * e.dir;
      if (e.y <= e.min || e.y >= e.max) e.dir *= -1;
    }
  }

  // hazard collisions -> catch fire, lose
  const carHit = 20; // approx car radius for collision
  for (const e of enemies) {
    if (Math.hypot(car.x - e.x, car.y - e.y) < carHit + e.r) { loseLevel(); return; }
  }
  for (const p of pools) {
    if (Math.hypot(car.x - p.x, car.y - p.y) < carHit + p.r - 6) { loseLevel(); return; }
  }
}

function loseLevel() {
  started = false;
  stopJam();
  sfxWrong();
  // build fire particles at the car position
  fire = { x: car.x, y: car.y, t: 0, parts: [] };
  for (let i = 0; i < 18; i++) {
    fire.parts.push({
      ox: (Math.random() - 0.5) * 30,
      oy: (Math.random() - 0.5) * 40,
      r: 6 + Math.random() * 10,
      vy: 0.8 + Math.random() * 1.4,
      hue: 20 + Math.random() * 30
    });
  }
  // brief burn animation, then show the lose screen
  let frames = 0;
  function burn() {
    draw();
    drawFire();
    frames++;
    if (frames < 48) {
      requestAnimationFrame(burn);
    } else {
      document.getElementById('driving').classList.add('hidden');
      document.getElementById('lose').classList.remove('hidden');
    }
  }
  cancelAnimationFrame(raf);
  burn();
}

function drawFire() {
  if (!fire) return;
  fire.t++;
  for (const p of fire.parts) {
    const y = fire.y + p.oy - fire.t * p.vy;
    const fade = Math.max(0, 1 - fire.t / 48);
    ctx.beginPath();
    ctx.fillStyle = `hsla(${p.hue}, 100%, 55%, ${fade})`;
    ctx.arc(fire.x + p.ox, y, p.r * fade, 0, Math.PI * 2);
    ctx.fill();
  }
  // smoke puff
  ctx.fillStyle = `rgba(60,60,60,${Math.max(0, 0.4 - fire.t / 120)})`;
  ctx.beginPath();
  ctx.arc(fire.x, fire.y - fire.t * 1.5, 30, 0, Math.PI * 2);
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // road dots
  ctx.fillStyle = 'rgba(201,163,240,0.15)';
  for (let i = 30; i < canvas.width; i += 55)
    for (let j = 30; j < canvas.height; j += 55)
      ctx.fillRect(i, j, 4, 4);

  // start marker
  ctx.fillStyle = 'rgba(232,193,74,0.3)';
  ctx.fillRect(48, 500, 64, 64);
  ctx.fillStyle = '#e8c14a';
  ctx.font = '18px Georgia';
  ctx.fillText('START', 46, 590);

  // walls
  ctx.fillStyle = '#6a3d99';
  for (const w of walls) {
    ctx.fillRect(w.x, w.y, w.w, w.h);
  }

  // gift target (iconita Phosphor, desenata ca imagine SVG)
  if (giftImgReady) {
    ctx.drawImage(giftImg, gift.x - 32, gift.y - 32, 64, 64);
  }

  // oil pools (hazard)
  for (const p of pools) {
    const grd = ctx.createRadialGradient(p.x, p.y, 4, p.x, p.y, p.r);
    grd.addColorStop(0, '#3a3a3a');
    grd.addColorStop(1, '#0d0d0d');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.r, p.r * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    // oily sheen
    ctx.strokeStyle = 'rgba(157,95,211,0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // enemy cars (hazard)
  for (const e of enemies) {
    ctx.save();
    ctx.translate(e.x, e.y);
    // body
    ctx.fillStyle = '#c0392b';
    roundRect(ctx, -16, -24, 32, 48, 6);
    ctx.fill();
    // windows
    ctx.fillStyle = '#1a0a26';
    ctx.fillRect(-12, -16, 24, 9);
    ctx.fillRect(-12, 8, 24, 9);
    // headlights
    ctx.fillStyle = '#fff6cc';
    ctx.fillRect(-13, -24, 5, 4);
    ctx.fillRect(8, -24, 5, 4);
    ctx.restore();
  }

  // car (top-down, front points to -Y in local frame)
  ctx.save();
  ctx.translate(car.x, car.y);
  ctx.rotate(car.angle + Math.PI / 2);

  const w = car.w, h = car.h;

  if (carImgReady) {
    // draw sprite scaled to the car bounding box
    ctx.drawImage(carImg, -w/2, -h/2, w, h);
  } else {
    // fallback simple body until image loads
    ctx.fillStyle = '#9d5fd3';
    roundRect(ctx, -w/2, -h/2, w, h, 6);
    ctx.fill();
  }

  // license plate (rear) overlaid on the sprite
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(-18, h/2 - 15, 36, 11);
  ctx.fillStyle = '#000';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('18 KIM', 0, h/2 - 6);
  ctx.textAlign = 'start';

  ctx.restore();
}

function roundRect(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function loop() {
  if (!started) return;
  update();
  draw();
  raf = requestAnimationFrame(loop);
}

function arrive() {
  started = false;
  cancelAnimationFrame(raf);
  stopJam();
  sfxWin();
  saveStage('gift');
  try { localStorage.setItem('ili_finished', '1'); } catch (e) {} // unlocks "Vezi album"
  setProgress(100);
  document.getElementById('driving').classList.add('hidden');
  document.getElementById('gift').classList.remove('hidden');
}

// ---------- GIFT ----------
// ---------- GIFT FINALE ----------
// Drop her photos here (filenames in the project folder). Empty = no slideshow.
const GIFT_PHOTOS = ["lp_image.jpg", "IMG_5538.jpg", "IMG_6485.JPG", "IMG_6728.jpg", "IMG_8858.JPG"];
// The message, typed out line by line.
// fiecare linie e {text, icon?}: textul se scrie litera cu litera, iconita se adauga la final
const GIFT_MESSAGE = [
  { text: "La mulți ani, Ilinca! ", icon: 'heart' },
  { text: "Sper că ți-a plăcut micul joc." },
  { text: "Ești cel mai frumos om din viața mea. ", icon: 'heart' },
  { text: "Ly ", icon: 'heart' }
];

let giftOpened = false;
function openGift() {
  if (giftOpened) return;
  giftOpened = true;
  sfxPop(); // doar pop-ul cutiei; fanfara ar acoperi animatia albumului + scrisul care urmeaza
  document.getElementById('giftBox').classList.add('opening');
  document.getElementById('giftHint').classList.add('hidden');
  try { localStorage.setItem('ili_finished', '1'); } catch (e) {}
  bigConfetti();
  setTimeout(renderGiftReveal, 800);
}

// build the photo album + typed message (shared by the finale and "Vezi album")
function renderGiftReveal() {
  const reveal = document.getElementById('giftReveal');
  const slides = GIFT_PHOTOS.length ? `<div id="giftSlides" class="gift-slides"></div>` : '';
  reveal.innerHTML =
    `<div class="reveal">${icon('heart', 'i-heart')}</div>
     ${slides}
     <div id="giftMessage" class="gift-message"></div>
     <div id="wheelCta"></div>`;
  if (GIFT_PHOTOS.length) startSlideshow();
  typeMessage(GIFT_MESSAGE, document.getElementById('giftMessage'), revealWheelCta);
}

// after the message, offer a button that opens the lucky wheel on its own page
function revealWheelCta() {
  const host = document.getElementById('wheelCta');
  if (!host || host.dataset.shown) return;
  host.dataset.shown = '1';
  host.innerHTML =
    `<div class="wheel-cta">
       <p class="wheel-intro">Stai... mai e ceva. ${icon('sparkle')}</p>
       <button onclick="goToWheel()">Roata norocului ${icon('coins')}</button>
     </div>`;
}

// open the lucky wheel as a full, standalone page
function goToWheel() {
  document.getElementById('gift').classList.add('hidden');
  document.getElementById('wheelScreen').classList.remove('hidden');
  buildWheel();
  window.scrollTo(0, 0);
}

// jump straight to the album from the welcome screen (after finishing once)
function showAlbum() {
  preloadMedia();
  document.getElementById('progressWrap').classList.remove('hidden');
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('giftBox').classList.add('hidden');
  document.getElementById('giftHint').classList.add('hidden');
  document.getElementById('gift').classList.remove('hidden');
  setProgress(100);
  giftOpened = true;
  bigConfetti();
  renderGiftReveal();
}

// show the "Vezi album" button on the welcome screen if she's finished before
function checkAlbumButton() {
  let done = false;
  try { done = localStorage.getItem('ili_finished') === '1'; } catch (e) {}
  if (done) document.getElementById('albumBtn').classList.remove('hidden');
}

// extra-lush confetti for the finale (a few overlapping bursts)
function bigConfetti() {
  let n = 0;
  const iv = setInterval(() => { launchConfetti(); if (++n >= 6) clearInterval(iv); }, 250);
}

// type the message out, one line at a time
function typeMessage(lines, el, onDone) {
  if (!el) { if (onDone) onDone(); return; }
  el.innerHTML = '';
  let li = 0;
  function nextLine() {
    if (li >= lines.length) { if (onDone) onDone(); return; }
    const p = document.createElement('p');
    p.className = 'gift-line';
    el.appendChild(p);
    // suporta atat string-uri simple cat si {text, icon}
    const line = lines[li];
    const text = typeof line === 'string' ? line : line.text;
    const lineIcon = (line && line.icon) ? line.icon : null;
    let ci = 0;
    const typer = setInterval(() => {
      p.textContent = text.slice(0, ++ci);
      if (text[ci - 1] !== ' ') sfxType(); // tic la fiecare litera (nu si la spatii)
      if (ci >= text.length) {
        clearInterval(typer);
        // dupa ce s-a scris textul, adauga iconita (daca exista)
        if (lineIcon) p.innerHTML = text + icon(lineIcon, 'i-heart');
        li++;
        setTimeout(nextLine, 450);
      }
    }, 45);
  }
  nextLine();
}

// gentle crossfade slideshow of her photos
function startSlideshow() {
  const wrap = document.getElementById('giftSlides');
  if (!wrap) return;
  GIFT_PHOTOS.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Ilinca';
    img.className = 'gift-slide' + (i === 0 ? ' on' : '');
    wrap.appendChild(img);
  });
  if (GIFT_PHOTOS.length < 2) return;
  let idx = 0;
  setInterval(() => {
    const imgs = wrap.querySelectorAll('.gift-slide');
    imgs[idx].classList.remove('on');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('on');
  }, 2600);
}

// ---------- ROATA NOROCULUI (rigged lucky wheel) ----------
// Temu look: cream wedges + an orange jackpot at the top, dark "Spin" hub.
// Segments run clockwise from the top. The jackpot "1000 lei" sits at the very
// top (index 0) and "Nimic" right next to it (index 1) so the wheel can teeter
// on their shared border and *barely* tip into the real prize — then come to
// rest upright with 1000 lei under the pointer.
const CREAM = '#fbf1d8', TAN = '#f0debb', BROWN = '#6e3b16';
const WHEEL_SEGMENTS = [
  { label: '1000 lei',  ic: 'coins',       color: CREAM, text: BROWN }, // 0  <- premiul real (rigged), dar nu mai e evidentiat
  { label: 'Nimic',     ic: 'smiley-blank', color: TAN,  text: BROWN }, // 1
  { label: '600 lei',   ic: 'coin',        color: CREAM, text: BROWN }, // 2
  { label: 'Kerastase ulei de par', ic: 'drop', color: TAN, text: BROWN }, // 3  <- pozitia initiala a acului
  { label: 'Mașină',    ic: 'car',         color: CREAM, text: BROWN }, // 4  (jos)
  { label: 'Croazieră', ic: 'boat',        color: TAN,   text: BROWN }, // 5
  { label: '300 lei',   ic: 'money',       color: CREAM, text: BROWN }, // 6
  { label: 'Inel',      ic: 'diamond',     color: TAN,   text: BROWN }, // 7
];
const SEG = 360 / WHEEL_SEGMENTS.length; // 45deg per slice
const WHEEL_FROM = -SEG / 2;             // so segment 0 is centred at the top
// la repaus, acul arata segmentul 3 (Kerastase ulei de par), nu jackpotul -> nu se vede ca e aranjata.
// rotatia finala ramane 2520deg (= 7x360), deci tot 1000 lei se opreste sub ac.
const WHEEL_INITIAL_ROT = -3 * SEG; // -135deg: aduce segmentul 3 in dreptul acului

let wheelBuilt = false, wheelSpinning = false, wheelDone = false;

function buildWheel() {
  if (wheelBuilt) return;
  wheelBuilt = true;
  const host = document.getElementById('wheelHost');
  if (!host) return;
  // wedge fills + thin dark separators between slices, like the reference
  const stops = WHEEL_SEGMENTS.map((s, i) => `${s.color} ${i*SEG}deg ${(i+1)*SEG}deg`).join(', ');
  const lines = `repeating-conic-gradient(from ${WHEEL_FROM}deg, rgba(32,18,12,0.18) 0 1deg, transparent 1deg ${SEG}deg)`;
  const stage = document.createElement('div');
  stage.className = 'wheel-stage';
  stage.innerHTML =
    `<div class="wheel-wrap">
       <div class="wheel-pointer" id="wheelPointer"></div>
       <div class="wheel" id="wheelDisk"
            style="background: ${lines}, conic-gradient(from ${WHEEL_FROM}deg, ${stops}); transform: rotate(${WHEEL_INITIAL_ROT}deg);"></div>
       <div class="wheel-hub" id="wheelHub" onclick="spinWheel()">Spin</div>
     </div>`;
  host.appendChild(stage);
  // tangential labels — text rides the wheel (radial like a real prize wheel)
  const disk = document.getElementById('wheelDisk');
  WHEEL_SEGMENTS.forEach((s, i) => {
    const center = i * SEG; // slice centre, clockwise from the top
    const lab = document.createElement('div');
    lab.className = 'wheel-seg-label';
    lab.style.setProperty('--ang', `${center}deg`);
    lab.style.setProperty('--seg-color', s.text || '#5e3414');
    lab.innerHTML = `<span><span class="we">${icon(s.ic)}</span>${s.label}</span>`;
    disk.appendChild(lab);
  });
}

// short mechanical "tick" as the pointer passes a peg
function wheelTick() {
  const p = document.getElementById('wheelPointer');
  if (p) { p.classList.remove('tick'); void p.offsetWidth; p.classList.add('tick'); }
  if (!audioCtx || audioMuted) return;
  const t = audioCtx.currentTime;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = 'square';
  o.frequency.setValueAtTime(900, t);
  o.frequency.exponentialRampToValueAtTime(430, t + 0.04);
  g.gain.setValueAtTime(0.11, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
  o.connect(g); g.connect(masterBus || audioCtx.destination);
  o.start(t); o.stop(t + 0.06);
}

// ticks that fan out as the wheel decelerates over `duration` ms
function scheduleTicks(duration) {
  let elapsed = 0, gap = 55;
  (function tick() {
    if (elapsed >= duration) return;
    wheelTick();
    gap = Math.min(360, gap * 1.14);
    elapsed += gap;
    setTimeout(tick, gap);
  })();
}
function slowTicks(count, span) {
  const gap = span / (count + 1);
  for (let i = 1; i <= count; i++) setTimeout(wheelTick, gap * i);
}

// The whole thing is rigged. Three beats, all spinning the same way (forward):
//  1) a big decelerating spin that "lands" on Nimic, a hair from the jackpot edge
//  2) an agonising creep that stops ~1.5° shy of the line (still on Nimic)
//  3) it tips over the border and settles on 1000 lei, upright at the top.
// 1000 lei is centred at the top, so the disk ends at a whole turn (2520 = 7×360):
// the jackpot wedge rests dead under the pointer and every label is upright.
function spinWheel() {
  if (wheelSpinning || wheelDone) return;
  ensureAudio();
  buildWheel();
  wheelSpinning = true;
  const hub = document.getElementById('wheelHub');
  if (hub) hub.classList.add('spinning');
  const disk = document.getElementById('wheelDisk');
  if (!disk) return;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    disk.style.transition = 'transform 1.2s ease-out';
    disk.style.transform = 'rotate(2520deg)';
    setTimeout(showWheelResult, 1300);
    return;
  }

  // beat 1 — big spin, decelerate onto Nimic near the jackpot border
  disk.style.transition = 'transform 4.8s cubic-bezier(0.15, 0.72, 0.1, 1)';
  disk.style.transform = 'rotate(2488deg)';
  scheduleTicks(4800);

  // beat 2 — agonising creep to ~1.5° shy of 1000 lei (still "Nimic")
  setTimeout(() => {
    disk.style.transition = 'transform 1.15s cubic-bezier(0.4, 0, 0.5, 1)';
    disk.style.transform = 'rotate(2496deg)';
    slowTicks(3, 1150);
  }, 5450);

  // beat 3 — it tips over the line and settles on the jackpot (upright)
  setTimeout(() => {
    disk.style.transition = 'transform 0.95s cubic-bezier(0.34, 1.4, 0.64, 1)';
    disk.style.transform = 'rotate(2520deg)';
    slowTicks(2, 950);
  }, 7080);

  setTimeout(showWheelResult, 8280);
}

function showWheelResult() {
  wheelSpinning = false; wheelDone = true;
  sfxWin();
  const res = document.getElementById('wheelResult');
  if (res) {
    res.classList.add('show', 'jackpot');
    res.innerHTML =
      `${icon('coins')} 1000 DE LEI! ${icon('coins')}
       <span class="sub">Felicitări, ai câștigat marele premiu! ${icon('heart', 'i-heart')}</span>`;
  }
  bigConfetti();
  const hub = document.getElementById('wheelHub');
  if (hub) { hub.classList.remove('spinning'); hub.innerHTML = icon('confetti'); }
}

function launchConfetti() {
  const colors = ['#b15cff','#ff48b0','#3fe0ff','#ffd24a','#f7f0ff'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(c);
    const fall = 2000 + Math.random() * 2000;
    c.animate([
      { top: '-10px', opacity: 1 },
      { top: '100vh', opacity: 0.2 }
    ], { duration: fall, easing: 'ease-in' });
    setTimeout(() => c.remove(), fall);
  }
}

// show a small sliver of progress on the welcome screen
setProgress(4);
// ---------- PASSWORD GATE (client-side) ----------
const GATE_HASH = "4d64dc6abe58bddd5c2957ae7fc114a74989d3671a1747804ffc8954d59849e7";
async function sha256hex(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
async function checkGate() {
  const v = document.getElementById('gateInput').value;
  let h = '';
  try { h = await sha256hex(v); } catch (e) { h = ''; }
  if (h === GATE_HASH) {
    try { localStorage.setItem('ili_unlocked', '1'); } catch (e) {}
    sfxWin();
    document.getElementById('gate').classList.add('hidden');
    afterUnlock();
  } else {
    sfxWrong();
    document.getElementById('gateMsg').innerHTML = 'Hmm, nu e bine. Mai încearcă ' + icon('smiley-wink');
  }
}
function initGate() {
  let ok = false;
  try { ok = localStorage.getItem('ili_unlocked') === '1'; } catch (e) {}
  if (ok) { document.getElementById('gate').classList.add('hidden'); afterUnlock(); return; }
  const inp = document.getElementById('gateInput');
  if (inp) {
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkGate(); });
    inp.focus();
  }
}
// runs only once she's past the gate, so album/resume animations play when she sees them
let unlockedRan = false;
function afterUnlock() {
  if (unlockedRan) return;
  unlockedRan = true;
  if (location.search.indexOf('album') !== -1) showAlbum(); // ?album=1 preview (still gated)
  else resumeIfSaved();
}

hydrateIcons();     // inlocuieste placeholder-ele [data-ic] din HTML cu iconite SVG
applyMute(); // sync the mute button icon with any saved preference
checkAlbumButton(); // show "Vezi album" on welcome if she's finished before
initGate();         // shows the gate; afterUnlock() fires only once she's in
