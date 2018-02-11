// import config from '../config';
import { AllocationDataProps, AllocationId } from '../types';
// let { baseUrl, allocationDataUrl } = config.dev;
// allocationDataUrl = baseUrl+allocationDataUrl;

class AllocationDataApi {
  static async loadAllocationData() {
    return await fetch('/allocationData')
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

  static async saveAllocationTargetData(data: AllocationDataProps, id: AllocationId) {
    return await fetch("/allocationData/"+id, {
      method: 'PUT',
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
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

  static async saveAllocationData(data: AllocationDataProps, id: AllocationId) {
    return await fetch("/allocationData/"+id, {
      method: 'PUT',
      body: JSON.stringify(data),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
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

export default AllocationDataApi;
