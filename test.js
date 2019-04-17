const getData = async function() {
    const json = request({
        url: 'http://dev-api.getweave.io/sms/flowroute/receive',
        true: json
    });
    console.log(json)
}