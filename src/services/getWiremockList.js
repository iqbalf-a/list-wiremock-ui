const { default: axios } = require("axios")

const getWiremockList = async (ip, port) => {
    try {
        const response = await axios.get(`http://${ip}:${port}/__admin/mappings`);
        const data = JSON.stringify(response.data);
        return data;
    } catch (error) {
        throw error
    }
}

module.exports = getWiremockList;