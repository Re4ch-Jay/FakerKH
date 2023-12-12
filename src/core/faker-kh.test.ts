import { describe, expect } from 'vitest';
import {
  address,
  animal,
  city,
  firstName,
  lastName,
  month,
  noun,
  fullName,
  object,
  paragraph,
  quote,
  sentence,
  subject,
  verb,
  day,
  tel,
  title,
  language,
} from './faker-kh';
import { titles } from '../constants/titles';
import { cities } from '../constants/cities';
import { firstnames } from '../constants/firstname';
import { lastnames } from '../constants/lastname';
import { months } from '../constants/months';
import { nouns } from '../constants/nouns';
import { objects } from '../constants/objects';
import { quotes } from '../constants/quotes';
import { sentences } from '../constants/sentences';
import { subjects } from '../constants/subjects';
import { verbs } from '../constants/verbs';
import { days } from '../constants/days';
import { animals } from '../constants/animals';
import { languages } from '../constants/languages';

describe(address, it => {
  it('returns a random address', () => {
    const randomAddress = address();
    const [street, city, country] = randomAddress.split(', ');
    expect(street).toBeTruthy();
    expect(city).toBeTruthy();
    expect(country).toBeTruthy();
  });
});

describe(animal, it => {
  it('returns a random animal', () => {
    const randomAnimal = animal();
    expect(randomAnimal).toBeTruthy();
  });

  it('city should be in animal constant', () => {
    const randomAnimal = animal();
    expect(animals.flatMap(animal => animal)).toContain(randomAnimal);
  });
});

describe(city, it => {
  it('returns a random city', () => {
    const randomCity = city();
    expect(randomCity).toBeTruthy();
  });

  it('city should be in cities constant', () => {
    const randomCity = city();
    expect(cities.flatMap(city => city.municipalityKh)).toContain(randomCity);
  });
});

describe(firstName, it => {
  it('returns a random first name', () => {
    const randomFirstName = firstName();
    expect(randomFirstName).toBeTruthy();
  });

  it('firstname should be in firstnames constant', () => {
    const randomFirstName = firstName();
    expect(firstnames).toContain(randomFirstName);
  });
});

describe(lastName, it => {
  it('returns a random last name', () => {
    const randomLastName = lastName();
    expect(randomLastName).toBeTruthy();
  });

  it('lastname should be in lastnames constant', () => {
    const randomLastName = lastName();
    expect(lastnames).toContain(randomLastName);
  });
});

describe(month, it => {
  it('returns a random month', () => {
    const randomMonth = month();
    expect(randomMonth).toBeTruthy();
  });

  it('should be from months constant', () => {
    const randomMonth = month();
    expect(months).toContain(randomMonth);
  });
});

describe(noun, it => {
  it('returns a random noun', () => {
    const randomNoun = noun();
    expect(randomNoun).toBeTruthy();
  });

  it('should be from nouns constant', () => {
    const randomNoun = noun();
    expect(nouns).toContain(randomNoun);
  });
});

describe(fullName, it => {
  it('returns a random full name', () => {
    const randomFullName = fullName();
    expect(randomFullName).toBeTruthy();
  });

  it('both first and last name should be from constant', () => {
    const [firstName, lastName] = fullName().split(' ');
    expect(firstnames).toContain(firstName);
    expect(lastnames).toContain(lastName);
  });
});

describe(object, it => {
  it('returns a random object', () => {
    const randomObject = object();
    expect(randomObject).toBeTruthy();
  });

  it('should be from objects constant', () => {
    const randomObject = object();
    expect(objects).toContain(randomObject);
  });
});

describe(paragraph, it => {
  it('returns a random paragraph', () => {
    const randomParagraph = paragraph();
    expect(randomParagraph).toBeTruthy();
  });

  it('returns a random paragraph with 3 sentences', () => {
    const randomParagraph = paragraph();
    const sentences = randomParagraph.split(' ');
    expect(sentences.length).toBe(3);
  });

  it('returns a random paragraph with 5 sentences', () => {
    const randomParagraph = paragraph(5);
    const sentences = randomParagraph.split(' ');
    expect(sentences.length).toBe(5);
  });
});

describe(quote, it => {
  it('returns a random quote', () => {
    const randomQuote = quote();
    expect(randomQuote).toBeTruthy();
  });

  it('should be in constant', () => {
    const randomQuote = quote();
    expect(quotes).toContain(randomQuote);
  });
});

describe(sentence, it => {
  it('returns a random sentence', () => {
    const randomSentence = sentence();
    expect(randomSentence).toBeTruthy();
  });

  it('should be from constant', () => {
    const randomSentence = sentence();
    expect(sentences).toContain(randomSentence);
  });
});

describe(subject, it => {
  it('returns a random subject', () => {
    const randomSubject = subject();
    expect(randomSubject).toBeTruthy();
  });

  it('should be from constant', () => {
    const randomSubject = subject();
    expect(subjects).toContain(randomSubject);
  });
});

describe(verb, it => {
  it('returns a random verb', () => {
    const randomVerb = verb();
    expect(randomVerb).toBeTruthy();
  });

  it('should be from constant', () => {
    const randomVerb = verb();
    expect(verbs).toContain(randomVerb);
  });
});

describe(day, it => {
  it('returns a random day', () => {
    const randomDay = day();
    expect(randomDay).toBeTruthy();
  });

  it('should be from constant', () => {
    const randomDay = day();
    expect(days).toContain(randomDay);
  });
});

describe(tel, it => {
  it('returns a random telephone number', () => {
    const randomTel = tel();
    expect(randomTel).toBeTruthy();
  });
});

describe(title, it => {
  it('returns a random title', () => {
    const randomTitle = title();
    expect(randomTitle).toBeTruthy();
  });

  it('returns a random title from the titles array', () => {
    const randomTitle = title();
    expect(titles).toContain(randomTitle);
  });
});

describe(language, it => {
  it('returns a random title', () => {
    const randomLanguage = title();
    expect(randomLanguage).toBeTruthy();
  });

  it('returns a random language from the languages array', () => {
    const randomLanguage = language();
    expect(languages).toContain(randomLanguage);
  });
});
