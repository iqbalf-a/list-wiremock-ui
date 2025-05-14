const getWiremockList = require('./getWiremockList');
const parseWiremockData = require('./parseWiremockData');
const fs = require('fs');
const pathModule = require('path');

const exportToCsv = async (ip, port, dirPath) => {

    if (!dirPath) {
        throw new Error('Directory path is required.');
    }

    const response = await getWiremockList(ip, port);

    const content = parseWiremockData(response);
    const fileName = `Wiremock_${ip}_${port}.csv`;
    const filePath = pathModule.join(dirPath, fileName);

    await fs.promises.writeFile(filePath, content, 'utf8');
    return filePath;
};

module.exports = exportToCsv;