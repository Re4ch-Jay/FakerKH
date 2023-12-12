# FakerKH

FakerKH is a JavaScript library for generating fake Khmer data. Use this library to create random addresses, names, quotes, and more in Khmer language.

## Installation

```bash
npm install faker-kh
# or
yarn add faker-kh
# or 
pnpm add faker-kh
```

## Usage

In your application, import the FakerKH class and use its methods to generate fake data.

```ts
import { fakerKh } from 'faker-kh';

console.log('Random Address:', fakerKh.address()); // ផ្លូវបាសាក់, ព្រៃវែង, កម្ពុជា
console.log('Random City:', fakerKh.city()); // ក្រុងប៉ៃលិន
console.log('Random First Name:', fakerKh.firstName()); // ណារុង
console.log('Random Last Name:', fakerKh.lastName()); // សន
console.log('Random Month:', fakerKh.month()); // តុលា
console.log('Random Object:', fakerKh.object());​ // សាលារៀន
console.log('Random Quote:', fakerKh.quote()); // ទឹកឡើងត្រីស៊ីស្រមោច ទឹកហោចស្រមោចស៊ីត្រី
console.log('Random Sentence:', fakerKh.sentence()); // ការចាត់ចែងគ្រប់វត្តមានត្រូវបានធ្វើដើម្បីទុកជាបទពិសោធន៍។
console.log('Random Subject:', fakerKh.subject()); // គាត់
console.log('Random Telephone Number:', fakerKh.tel()); // ០៩១ ២៣៤ ៥៦៧៨
console.log('Random Title:', fakerKh.title()); // លោកស្រី
console.log('Random Verb:', fakerKh.verb()); // លេង
```

You can also import only the methods you need.

```ts
import { address, city, firstName, lastName } from 'faker-kh';

console.log('Random Address:', address()); // ផ្លូវបាសាក់, ព្រៃវែង, កម្ពុជា
console.log('Random City:', city()); // ក្រុងប៉ៃលិន
console.log('Random First Name:', firstName()); // ណារុង
console.log('Random Last Name:', lastName()); // សន
```

## Methods

- `address(): string` Generate a random address.
- `city(): string` Generate a random city name.
- `firstName(): string` Generate a random Khmer first name.
- `lastName(): string` Generate a random Khmer last name.
- `month(): string` Generate a random Khmer month name.
- `object(): string` Generate a random Khmer object or item.
- `quote(): string` Generate a random Khmer quote.
- `sentence(): string` Generate a random Khmer sentence.
- `subject(): string` Generate a random Khmer subject.
- `tel(): string` Generate a random Khmer telephone number.
- `title(): string` Generate a random Khmer title - honorific.
- `verb(): string` Generate a random Khmer verb or action word.
- `paragraph(sentenceCount?: number): string` Generate a random Khmer paragraph. Default sentence count is 3.
- `noun(): string` Generate a random Khmer noun.
- `fullName(): string` Generate a random Khmer Full Name.
- `animal(): string` Generate a random Khmer animal.
- `language(): string` Generate a random language.
- More to come :)

## License

This project is licensed under the [MIT License](https://github.com/Re4ch-Jay/FakerKH/blob/main/LICENSE).
