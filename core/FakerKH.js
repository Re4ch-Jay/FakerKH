
const addresses = require("../faker/addresses.js")
const cities = require("../faker/cities.js")
const days = require("../faker/days.js")
const firstname = require("../faker/firstname.js")
const lastname = require("../faker/lastname.js")
const months = require("../faker/months.js")
const objects = require("../faker/objects.js")
const quotes = require("../faker/quotes.js")
const sentences = require("../faker/sentences.js")
const subjects = require("../faker/subjects.js")
const tels = require("../faker/tels.js")
const titles = require("../faker/titles.js")
const verbs = require("../faker/verbs.js")
const nouns = require("../faker/nouns.js")

const FakerKH = (function () {
    // Private properties
   

    // Private method
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Public methods
    return {
        address: function () {
            return `${getRandomElement(addresses).street}, ${getRandomElement(addresses).city}, ${getRandomElement(addresses).country}`;
        },
        city: function () {
            return getRandomElement(cities).municipalityKh;
        },
        day: function () {
            return getRandomElement(days);
        },
        firstName: function () {
            return getRandomElement(firstname);
        },
        lastName: function () {
            return getRandomElement(lastname);
        },
        month: function () {
            return getRandomElement(months);
        },
        object: function () {
            return getRandomElement(objects);
        },
        quote: function () {
            return getRandomElement(quotes);
        },
        sentence: function () {
            return getRandomElement(sentences);
        },
        subject: function () {
            return getRandomElement(subjects);
        },
        tel: function () {
            return getRandomElement(tels);
        },
        title: function () {
            return getRandomElement(titles);
        },
        verb: function () {
            return getRandomElement(verbs);
        },
        paragraph: function (sentenceCount = 3) {
            let paragraph = "";
            for (let i = 0; i < sentenceCount; i++) {
                paragraph += getRandomElement(sentences);
                if (i < sentenceCount - 1) {
                    paragraph += " ";  // Add space between sentences
                }
            }
            return paragraph;
        },
        noun: function () {
            return getRandomElement(nouns);
        },
        fullName: function () {
            return getRandomElement(firstname) + " " + getRandomElement(lastname);
        }
    };
})();


module.exports = FakerKH;