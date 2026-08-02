/**
 * Telemetry formatting utilities for coordinates, text decoders, and data strings.
 */

export function formatCoordinates(lat = "64°08'N", long = "21°56'W"): string {
  return `[ LOC: ${lat} ${long} ]`;
}

export function formatTelemetryStatus(status: string): string {
  return `[ SYS: ${status.toUpperCase()} ]`;
}

const RUNIC_CHARACTERS = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛋᛏᛒᛖᛗᛚᛜᛞᛟ⚡AX019';

export function getRandomRuneChar(): string {
  return RUNIC_CHARACTERS[Math.floor(Math.random() * RUNIC_CHARACTERS.length)];
}

export function scrambleString(target: string, progress: number): string {
  if (progress >= 1) return target;
  const revealedLength = Math.floor(target.length * progress);
  let result = '';
  for (let i = 0; i < target.length; i++) {
    if (i < revealedLength || target[i] === ' ') {
      result += target[i];
    } else {
      result += getRandomRuneChar();
    }
  }
  return result;
}
