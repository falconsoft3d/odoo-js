resp = $.ajax({
    url: 'https://love.123odoo.com/jsonrpc',
    dataType:"json",
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: {
            service: 'common',
            method: 'login',
            args: ['db14-chile', 'admin', '123'],
        },
        id: null,
    }),
    success: function (response) {
        console.log(response);
    },
});
