import { defaultHeaders } from './Constants';
import { getAllocationDataUrl } from './Utils';
import { AllocationDataProps, AllocationId } from '../types';

class AllocationDataApi {
  static async loadAllocationData() {
    const accId = '000000000';
    return await fetch(getAllocationDataUrl(accId), {
        method: 'GET',
        headers: defaultHeaders,
        cache: 'no-store',
        mode: 'cors',
        credentials: 'include'
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
