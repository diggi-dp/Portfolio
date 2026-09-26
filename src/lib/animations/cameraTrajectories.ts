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
    scrollProgress: 0.2,
  },
  {
    chapterIndex: 3,
    chapterTitle: 'THE SUPPLY LINE',
    runeTitle: 'ᚦᛖ ᛋᚢᛈᛈᛚᛁ ᛚᛁᚾᛖ',
    position: [0, -20, 16],
    target: [0, -22, 0],
    scrollProgress: 0.4,
  },
  {
    chapterIndex: 4,
    chapterTitle: 'CHRONICLES OF CREATION',
    runeTitle: 'ᚲᚺᚱᛟᚾᛁᚲᛚᛖᛋ ᛟᚠ ᚲᚱᛖᚨᛏᛁᛟᚾ',
    position: [15, -28, 12],
    target: [0, -30, 0],
    scrollProgress: 0.6,
  },
  {
    chapterIndex: 5,
    chapterTitle: 'THE TRIAL OF MASTERY',
    runeTitle: 'ᚦᛖ ᛏᚱᛁᚨᛚ ᛟᚠ ᛗᚨᛋᛏᛖᚱᚾ',
    position: [0, -45, 22],
    target: [0, -45, 0],
    scrollProgress: 0.8,
  },
  {
    chapterIndex: 6,
    chapterTitle: 'TRANSMISSION NEXUS',
    runeTitle: 'ᛏᚱᚨᚾᛋᛘᛁᛋᛋᛁᛟᚾ ᚾᛖᛉᚢᛋ',
    position: [0, -62, 16],
    target: [0, -64, 0],
    scrollProgress: 1.0,
  },
];
