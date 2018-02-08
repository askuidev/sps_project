/**
 * this file contains the configation for our project
 * @type - dev - which means this urls can be used only development purpose
 *
 * @returns {object containing baseUrl, allocationDataUrl, assetDataUrl}
 */

const baseUrl = `http://localhost:5000`;

const config = {
    'dev': {
        baseUrl: baseUrl,
        allocationData: '/allocationData',
        allocationDataUrl: '/allocationData',
        assetData: '/assetData',
        assetDataUrl: '/assetData'
    }
};

export default config;
