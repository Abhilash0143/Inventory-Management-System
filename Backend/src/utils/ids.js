export function opIdFromName(name) {
  return `op:${String(name).trim().toLowerCase()}`;
}
