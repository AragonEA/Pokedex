export function getOffset(URL) {
  let offset;
  try {
    offset = /offset=([0-9]+)/gi.exec(URL).pop();
  } catch (e) {
    offset = undefined;
  }
  return offset;
}