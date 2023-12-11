# FakerKH

FakerKH is a JavaScript library for generating fake Khmer data. Use this library to create random addresses, names, quotes, and more in Khmer language.

## Installation

```bash
npm install faker-kh
```

## Usage

In your application, import the FakerKH class and use its methods to generate fake data.

```js
import FakerKH from 'faker-kh';

console.log('Random Address:', FakerKH.address()); // ផ្លូវបាសាក់, ព្រៃវែង, កម្ពុជា
console.log('Random City:', FakerKH.city()); // ក្រុងប៉ៃលិន
console.log('Random First Name:', FakerKH.firstName()); // ណារុង
console.log('Random Last Name:', FakerKH.lastName()); // សន
console.log('Random Month:', FakerKH.month()); // តុលា
console.log('Random Object:', FakerKH.object());​ // សាលារៀន
console.log('Random Quote:', FakerKH.quote()); // ទឹកឡើងត្រីស៊ីស្រមោច ទឹកហោចស្រមោចស៊ីត្រី
console.log('Random Sentence:', FakerKH.sentence()); // ការចាត់ចែងគ្រប់វត្តមានត្រូវបានធ្វើដើម្បីទុកជាបទពិសោធន៍។
console.log('Random Subject:', FakerKH.subject()); // គាត់
console.log('Random Telephone Number:', FakerKH.tel()); // ០៩១ ២៣៤ ៥៦៧៨
console.log('Random Title:', FakerKH.title()); // លោកស្រី
console.log('Random Verb:', FakerKH.verb()); // លេង
```

## Methods

- address(): Generate a random address.
- city(): Generate a random city name.
- firstName(): Generate a random Khmer first name.
- lastName(): Generate a random Khmer last name.
- month(): Generate a random Khmer month name.
- object(): Generate a random Khmer object or item.
- quote(): Generate a random Khmer quote.
- sentence(): Generate a random Khmer sentence.
- subject(): Generate a random Khmer subject or topic.
- tel(): Generate a random Khmer telephone number.
- title(): Generate a random Khmer title or honorific.
- verb(): Generate a random Khmer verb or action word.
- More to come :)

## License

This project is licensed under the [MIT License](https://github.com/Re4ch-Jay/FakerKH/blob/main/LICENSE).
