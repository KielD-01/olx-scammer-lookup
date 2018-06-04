window.core = {
    defaults: {
        api: {
            host: 'http://192.168.1.105:5000',
            endpoints: {}
        },
        selectors: {
            phone: 'div.contact-button.link-phone'
        },
        delimiters: {
            phones: '</span> '
        }
    },
    _f: {},
    _data: {
        phones: {
            list: []
        }
    }
};

/**
 *
 * @returns {*|string}
 */
window.core._f.getPhoneId = function () {
    return $(core.defaults.selectors.phone)
        .attr('class')
        .split('\'')[7];
};

/**
 *
 * @returns {*|string}
 */
window.core._f.getPhoneToken = function () {
    if (typeof window.phoneToken !== "undefined") {
        return window.phoneToken;
    }

    throw console.log("NoPhoneTokenException : No phone token has been provided");
};

window.core._f.getPhonesList = function () {
    $
        .ajax({
            method: 'GET',
            url: `${core.defaults.api.host}/get-phones/${core._f.getPhoneId()}/${core._f.getPhoneToken()}`,
        })
        .then(function (a) {
            console.log(a);
        });

};

document.addEventListener("DOMContentLoaded", function (event) {
    console.log('Loaded');
    console.log($('section#body-container script').text());
});