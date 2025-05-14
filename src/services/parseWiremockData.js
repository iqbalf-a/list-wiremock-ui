const parseWiremockData = (responseData) => {

    let listWiremock = 'url,fixedDelayMilliseconds\n';
    const content = responseData.split(',');

    content.forEach((item) => {
        if (item.includes('url') || item.includes('urlPattern')) {
            const match = item.match(/:"([^"]+)/);
            if (match) {
                listWiremock += match[1] + ',';
            }
        } else if (item.includes('fixedDelayMilliseconds')) {
            const match = item.match(/:(\d+)/);
            if (match) {
                listWiremock += match[1] + '\n';
            }
        }
    });

    return listWiremock;
}

module.exports = parseWiremockData;