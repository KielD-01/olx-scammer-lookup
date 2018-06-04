const hApi = require('hapi');

const hApiServer = hApi.server(~~process.env.PORT || 3000, '0.0.0.0');

hApiServer
    .route([
        {
            method: 'GET',
            path: '/',
            handler(r, h) {
                return {
                    dev: 'romanko95.rk@gmail.com'
                }
            }
        },
        {
            method: 'GET',
            path: '/get-phones/{id}/{token}',
            handler: function (r, h) {
                const phonesUrl = `https://www.olx.ua/ajax/misc/contact/phone/${r.params.id}/?pt=${r.params.token}`;

                return {phonesUrl};
            }
        }
    ]);

const init = function () {

    hApiServer.start();
    console.log(`Server running at: ${hApiServer.info.uri}`);
};

init();