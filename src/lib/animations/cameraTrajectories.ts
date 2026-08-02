export interface CameraWaypoint {
  chapterIndex: number;
  chapterTitle: string;
  runeTitle: string;
  position: [number, number, number];
  target: [number, number, number];
  scrollProgress: number; // 0.0 to 1.0
}

export const cameraWaypoints: CameraWaypoint[] = [
  {
    chapterIndex: 1,
    chapterTitle: 'THE FROZEN RIDGE',
    runeTitle: 'ᚦᛖ ᚠᚱᛟᛉᛖᛚ ᚱᛁᛞᚷᛖ',
    position: [0, 4, 18],
    target: [0, 2, 0],
    scrollProgress: 0.0,
  },
  {
    chapterIndex: 2,
    chapterTitle: 'THE CHAMBER OF EQUILIBRIUM',
    runeTitle: 'ᚦᛖ ᚲᚺᚨᛗᛒᛖᚱ ᛟᚠ ᛖᛚᚢᛁᛚᛁᛒᚱᛁᚢᛗ',
    position: [0, -12, 14],
    target: [0, -14, 0],
    scrollProgress: 0.25,
  },
  {
    chapterIndex: 3,
    chapterTitle: 'CHRONICLES OF CREATION',
    runeTitle: 'ᚲᚺᚱᛟᚾᛁᚲᛚᛖᛋ ᛟᚠ ᚲᚱᛖᚨᛏᛁᛟᚾ',
    position: [15, -28, 12],
    target: [0, -30, 0],
    scrollProgress: 0.5,
  },
  {
    chapterIndex: 4,
    chapterTitle: 'THE TRIAL OF MASTERY',
    runeTitle: 'ᚦᛖ ᛏᚱᛁᚨᛚ ᛟᚠ ᛗᚨᛋᛏᛖᚱᚾ',
    position: [0, -45, 22],
    target: [0, -45, 0],
    scrollProgress: 0.75,
  },
  {
    chapterIndex: 5,
    chapterTitle: 'TRANSMISSION NEXUS',
    runeTitle: 'ᛏᚱᚨᚾᛋᛗᛁᛋᛋᛁᛟᚾ ᚾᛖᛉᚢᛋ',
    position: [0, -62, 16],
    target: [0, -64, 0],
    scrollProgress: 1.0,
  },
];
