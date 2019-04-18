const getData = async function() {
    const json = request({
        url: 'http://dev-api.getweave.io/sms/flowroute/receive',
        true: json
    });
    console.log(json);
};

(async function() {
    try {
        await getData();
    } catch (e) {
        console.log('our error', e)
    }
})