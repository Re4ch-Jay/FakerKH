import { addresses } from '../constants/addresses';
import { animals } from '../constants/animals';
import { cities } from '../constants/cities';
import { days } from '../constants/days';
import { firstnames } from '../constants/firstname';
import { lastnames } from '../constants/lastname';
import { months } from '../constants/months';
import { nouns } from '../constants/nouns';
import { objects } from '../constants/objects';
import { quotes } from '../constants/quotes';
import { sentences } from '../constants/sentences';
import { subjects } from '../constants/subjects';
import { tels } from '../constants/tels';
import { titles } from '../constants/titles';
import { verbs } from '../constants/verbs';
import { languages } from '../constants/languages';
import { getRandomElement } from '../lib/utils';

/**
 * Generates a random address like:
 * - `ផ្លូវបាសាក់, ព្រៃវែង, កម្ពុជា`
 *
 * ..example
 * address() // ផ្លូវសេងហៃ, តាខ្មៅ, កម្ពុជា
 * // or
 * fakerKh.address() // ផ្លូវសារ៉េត, បាត់ដំបង, កម្ពុជា
 */
export function address(): string {
  const randomAddress = getRandomElement(addresses);
  return `${randomAddress.street}, ${randomAddress.city}, ${randomAddress.country}`;
}

/**
 * Generates a random animal like:
 * - `ខ្លា, មាន់​`
 *
 * ..example
 * animal() // មាន់
 * // or
 * fakerKh.animal() // ខ្លា
 */
export function animal(): string {
  return getRandomElement(animals);
}

/**
 * Generates a random city string like:
 * - `ក្រុងប៉ៃលិន`
 * ..example
 * city() // បាត់ដំបង
 * // or
 * fakerKh.city() // កោះកុង
 */
export function city(): string {
  return getRandomElement(cities).municipalityKh;
}

/**
 * Generates a random day like this
 * - `ថ្ងៃពុធ`
 * ..example
 * day() // ថ្ងៃច័ន្ទ
 * // or
 * fakerKh.day() // ថ្ងៃអាទិត្យ
 */
export function day(): string {
  return getRandomElement(days);
}

/**
 * Generates a random first name
 * - `ណារុង`
 * ..example
 * firstName() // បុប្ផា
 * // or
 * fakerKh.firstName() // ផល្លា
 */
export function firstName(): string {
  return getRandomElement(firstnames);
}

/**
 * Generates a random last name string.
 * - `អិម`
 * ..example
 * lastName() // សុខ
 * // or
 * fakerKh.lastName() // លឹម
 */
export function lastName(): string {
  return getRandomElement(lastnames);
}

/**
 * Generates a random month string.
 * - `ខែមករា`
 * ..example
 * month() // ខែមិថុនា
 * // or
 * fakerKh.month() // ខែមីនា
 */
export function month(): string {
  return getRandomElement(months);
}

/**
 * Generates a random object string.
 * - `សៀវភៅ`
 * ..example
 * object() // មន្ទីរពេទ្រ
 * // or
 * fakerKh.object() // ព្រៃភ្នំ
 */
export function object(): string {
  return getRandomElement(objects);
}

/**
 * Generates a random quote string.
 * - `ភ្នំមួយមិនអាចមានខ្លាពីរ`
 * ..example
 * quote() // ចេះមកពីរាន មានមកពីរក
 * // or
 * fakerKh.quote() // កុំទុកចិត្តមេឃ កុំទុកចិត្តផ្កាយ
 */
export function quote(): string {
  return getRandomElement(quotes);
}

/**
 * Generates a random sentence string.
 * - `សិទ្ធិប្រើប្រាស់សេរីភាពដើម្បីសម្រួលដល់ការអនុវត្តន៍។`
 * ..example
 * sentence() // គម្រូសារមុននឹងនៅប្រទេសកម្ពុជា។
 * // or
 * fakerKh.sentence() // តាមរយៈកម្មវិធីអក្សរកម្ពុជានៅពេលវេលាដែលនិយាយភាសាអង់គ្លេសរៀនជាប់ដៃ។
 */
export function sentence(): string {
  return getRandomElement(sentences);
}

/**
 * Generates a random subject string.
 * - `ខ្ញុំ`
 * ..example
 * subject() // ស្រី
 * // or
 * fakerKh.subject() // បទុម
 */
export function subject(): string {
  return getRandomElement(subjects);
}

/**
 * Generates a random telephone number string.
 * - `០៩៩ ១២៣ ៤៥៦៧`
 * ..example
 * tel() // ០៩៤ ៤៥៦ ៦៧៨៩
 * // or
 * fakerKh.tel() // ០៩១ ២៣៤ ៥៦៧៨
 */
export function tel(): string {
  return getRandomElement(tels);
}

/**
 * Generates a random title string.
 * - `ព្រះករុណា`
 * ..example
 * title() // ឯកឧត្ដម
 * // or
 * fakerKh.title() // លោកស្រី
 */
export function title(): string {
  return getRandomElement(titles);
}

/**
 * Generates a random verb string.
 * - `ទៅ`
 * ..example
 * verb() // សរសេរ
 * // or
 * fakerKh.verb() // ស្វែងរក
 */
export function verb(): string {
  return getRandomElement(verbs);
}

/**
 * Generates a random paragraph string composed of multiple sentences.
 * Accepts a number of sentences to generate.
 * ..default 3 // sentences
 *
 * ..example
 * paragraph() // សូមអរគុណសម្រាប់ការអនុវត្តន៍។ ខ្ញុំសង្ឃឹមថាសិទ្ធិប្រើប្រាស់សេរីភាពដើម្បីសម្រួលដល់ការអនុវត្តន៍។ គម្រូសារមុននឹងនៅប្រទេសកម្ពុជា។
 * // or
 * fakerKh.paragraph(2) // សូមអរគុណសម្រាប់ការអនុវត្តន៍។ ខ្ញុំសង្ឃឹមថាសិទ្ធិប្រើប្រាស់សេរីភាពដើម្បីសម្រួលដល់ការអនុវត្តន៍។
 */
export function paragraph(sentenceCount: number = 3): string {
  const paragraph = [];
  for (let i = 0; i < sentenceCount; i++) {
    paragraph.push(sentence());
  }
  return paragraph.join(' ');
}

/**
 * Generates a random noun string.
 * - `មនុស្ស`
 * ..example
 * noun() // ធម្មជាតិ
 * // or
 * fakerKh.noun() // កិច្ចការ
 */
export function noun(): string {
  return getRandomElement(nouns);
}

/**
 * Generates a random full name string.
 * - `សន ឯក`
 * ..example
 * fullName() // សារឿន សៀង
 * // or
 * fakerKh.fullName() // ផល្លា សួន
 */
export function fullName(): string {
  return `${firstName()} ${lastName()}`;
}

/**
 * Generates a random language string.
 * - `បារាំង`
 * ..example
 * language() // បារាំង
 * // or
 * fakerKh.language() // បារាំង
 */
export function language(): string {
  return getRandomElement(languages);
}