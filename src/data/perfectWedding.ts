export interface PerfectPhoto {
  src: string;
}

const files = [
  "00.jpeg","01.jpeg","02.jpeg","03.jpg","04.jpeg","05.jpeg",
  "06.jpeg","07.jpeg","08.jpeg","09.jpeg","10.jpg","11.jpg",
  "12.jpg","13.jpg","14.jpg","15.jpg","16.jpg",
];

export const perfectPhotos: PerfectPhoto[] = files.map(f => ({
  src: `photos/perfect-wedding/${f}`,
}));
