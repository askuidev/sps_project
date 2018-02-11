// import config from '../config';
// let { baseUrl, assetDataUrl } = config.dev;
// assetDataUrl = baseUrl+assetDataUrl;

class AssetDataApi {
  static async loadAssetData() {
    return await fetch('/assetData')
    .then(response => response.json())
    .then(response => {
      return {
        type: 'success',
        data: response
      };
    }).catch(error => {
      return {
        type: 'error',
        error
      };
    });
  }
}
export default AssetDataApi;
