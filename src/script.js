export function solve(text) {

  const lines = text.trim().split(/\r?\n/);

  const groups = {};

  for (const num of lines) {
    const key = num.slice(0, 2);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(num);
  }

  let bestString = "";

  function findBestString(currentString, last2, used) {
    const candidates = groups[last2] || [];

    let hasExtension = false;

    if (candidates.length === 0) {
      if (currentString.length > bestString.length) {
        bestString = currentString;
      }
      return;
    }

    for (const candidate of candidates) {
      if (!used.has(candidate)) {
        hasExtension = true;

        used.add(candidate);

        findBestString(
          currentString + candidate.slice(2),
          candidate.slice(-2),
          used
        );

        used.delete(candidate);
      }
    }

    if (!hasExtension) {
      if (currentString.length > bestString.length) {
        bestString = currentString;
      }
    }
  }

  for (const start of lines) {
    findBestString(
      start,
      start.slice(-2),
      new Set([start])
    );
  }

  return {
    result: bestString,
    length: bestString.length
  };
}
