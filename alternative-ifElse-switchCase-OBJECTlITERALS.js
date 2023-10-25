// alternative if else switch case

function getCardinalNumberTranslationIFELSE(rhyme) {
  if (rhyme.toLowerCase() === 1) {
    return "Firt";
  } else if (rhyme.toLowerCase() === 2) {
    return "Second";
  } else if (rhyme.toLowerCase() === 3) {
    return "Third";
  } else if (rhyme.toLowerCase() === 4) {
    return "Fourth";
  } else if (rhyme.toLowerCase() === 5) {
    return "Fifth";
  }

  return "Number not found";
}

function getTranslationSWITCCASE(rhyme) {
  switch (rhyme.toLowerCase()) {
    case "apples and pears":
      return "Stairs";
    case "hampstead heath":
      return "Teeth";
    case "loaf of bread":
      return "Head";
    case "pork pies":
      return "Lies";
    case "whistle and flute":
      return "Suit";
    default:
      return "Rhyme not found";
  }
}

function getTranslationOBJECTLITERALS(rhyme) {
  const rhymeTranslations = {
    "apples and pears": "Stairs",
    "hampstead heath": "Teeth",
    "loaf of bread": "Head",
    "pork pies": "Lies",
    "whistle and flute": "Suit",
  };

  const lowercaseRhyme = rhyme.toLowerCase();
  return rhymeTranslations.hasOwnProperty(lowercaseRhyme)
    ? rhymeTranslations[lowercaseRhyme]
    : "Rhyme not found";
}

console.log(getTranslationOBJECTLITERALS("hampstead heath"));

// how to convert a string to boolean
function stringToBool(str) {
  const boolStrings = {
    "true": true,
    "false": false,
  };

  return boolStrings[str] ?? "String is not a boolean value";
}
