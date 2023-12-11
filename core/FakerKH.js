
const addresses = require("../faker/addresses")
const cities = require("../faker/cities")
const days = require("../faker/days")
const firstname = require("../faker/firstname")
const lastname = require("../faker/lastname")
const months = require("../faker/months")
const objects = require("../faker/objects")
const quotes = require("../faker/quotes")
const sentences = require("../faker/sentences")
const subjects = require("../faker/subjects")
const tels = require("../faker/tels")
const titles = require("../faker/titles")

module.exports = FakerKH = (function () {
    // Private properties
   
    const verbs = require("../faker/verbs")

    // Private method
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Public methods
    return {
        address: function () {
            return `St. ${getRandomElement(addresses).street}, ${getRandomElement(addresses).city} City, ${getRandomElement(addresses).country}`;
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
    };
})();

