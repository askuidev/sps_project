import config from '../config';
import utils from '../utils';
import { AssetDataProps } from '../types';
import { Dispatch } from 'redux';

let { baseUrl, allocationDataUrl, assetDataUrl } = config.dev;
allocationDataUrl = baseUrl+allocationDataUrl;
assetDataUrl = baseUrl+assetDataUrl;

const { getUpdatedAllocationData, getUpdatedTargetData } = utils;

interface AllocationDataProps {
  description: string;
  adjustCash: boolean;
  actionType: string;
  actionValue: string;
  currentPer: string;
  symbol: string;
  targetPer: string;
  value: string;
  id: string | number;
  targetPrice: string;
  buySellPrice: string;
  driftPer: string;
}

interface ChangeAllocationDataProps {
  value: string;
  id: string;
  field: string;
}

interface AdjustCashDataProps {
  id: string;
  actionType: string;
  actionValue: string;
}

interface HandleAdjustCashProps {
  type: string;
  data: HandleAdjustCashDataProps;
}

interface HandleAdjustCashDataProps {
  actionType?: string;
  actionValue?: string;
  id?: string | number;
  allocationId?: string | number;
}

export type Action =
  | {
      type: 'GET_ALLOCATION_DATA',
      payload: Promise<{}>
    }
  | {
      type: 'GET_ALLOCATION_DATA_SUCCESS',
      payload: AllocationDataProps[]
    }
  | {
      type: 'GET_ASSET_DATA',
      payload: Promise<{}>
    }
  | {
      type: 'GET_ASSET_DATA_SUCCESS',
      payload: AssetDataProps[]
    }
  | {
      type: 'UPDATE_ALLOCATION_DATA',
      payload: AllocationDataProps[]
    }
  | {
      type: 'UPDATE_ALLOCATION_TARGET_DATA',
      payload: Promise<{}>
    }
  | {
      type: 'UPDATE_ALLOCATION_TARGET_DATA_SUCCESS',
      payload: Promise<{}>
    }
  | {
      type: 'CLEAR_ADJUST_CASH_DATA',
      payload: {}
    }
  | {
      type: 'SHOW_ADJUST_CASH_MODAL',
      payload: HandleAdjustCashDataProps
    }
  | {
      type: 'HIDE_ADJUST_CASH_MODAL',
      payload: HandleAdjustCashDataProps
    };

export const GET_ALLOCATION_DATA = 'GET_ALLOCATION_DATA';
export const GET_ALLOCATION_DATA_SUCCESS = 'GET_ALLOCATION_DATA_SUCCESS';
export const GET_ALLOCATION_DATA_FAIL = 'GET_ALLOCATION_DATA_FAIL';
export function getAllocationData() {
	return function(dispatch: Dispatch<{}>) {
		return fetch(allocationDataUrl)
      .then(response => response.json())
			.then(response => {
				dispatch({
          type: GET_ALLOCATION_DATA_SUCCESS,
          payload: response
        });
			})
			.catch(err => {
        dispatch({
          type: GET_ALLOCATION_DATA_FAIL,
          payload: err
        });
			});
	};
}

export const GET_ASSET_DATA = 'GET_ASSET_DATA';
export const GET_ASSET_DATA_SUCCESS = 'GET_ASSET_DATA_SUCCESS';
export const GET_ASSET_DATA_FAIL = 'GET_ASSET_DATA_FAIL';
export function getAssetData() {
	return function(dispatch: Dispatch<{}>) {
		return fetch(assetDataUrl)
      .then(response => response.json())
			.then(response => {
				dispatch({
          type: GET_ASSET_DATA_SUCCESS,
          payload: response
        });
			})
			.catch(err => {
        dispatch({
          type: GET_ASSET_DATA_FAIL,
          payload: err
        });
			});
	};
}

export const UPDATE_ALLOCATION_DATA = 'UPDATE_ALLOCATION_DATA';
export const updateAllocationData = (
  allocationData: AllocationDataProps[],
  data: AdjustCashDataProps
): Action => {
  const updatedAllocationData = getUpdatedAllocationData(allocationData, data);
  return {
    type: UPDATE_ALLOCATION_DATA,
    payload: updatedAllocationData
  };
};

export const UPDATE_ALLOCATION_TARGET_DATA = 'UPDATE_ALLOCATION_TARGET_DATA';
export const UPDATE_ALLOCATION_TARGET_DATA_SUCCESS =
  'UPDATE_ALLOCATION_TARGET_DATA_SUCCESS';
export const UPDATE_ALLOCATION_TARGET_DATA_FAIL =
  'UPDATE_ALLOCATION_TARGET_DATA_FAIL';
export function updateAllocationTargetData(
  allocationData: AllocationDataProps[],
  data: ChangeAllocationDataProps
) {
	return function(dispatch: Dispatch<{}>) {
    const updatedTargetData = getUpdatedTargetData(allocationData, data);
		return fetch(allocationDataUrl+"/"+data.id, {
        method: 'PUT',
        body: JSON.stringify(updatedTargetData[0]),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
			.then(response => {
				dispatch({
          type: GET_ASSET_DATA_SUCCESS,
          payload: response
        });
			})
			.catch(err => {
        dispatch({
          type: GET_ASSET_DATA_FAIL,
          payload: err
        });
			});
	};
}

export const CLEAR_ADJUST_CASH_DATA = 'CLEAR_ADJUST_CASH_DATA';
export const clearAdjustCashData = (): Action => ({
  type: CLEAR_ADJUST_CASH_DATA,
  payload: {}
});

export const SHOW_ADJUST_CASH_MODAL = 'SHOW_ADJUST_CASH_MODAL';
export const HIDE_ADJUST_CASH_MODAL = 'HIDE_ADJUST_CASH_MODAL';
export const handleAdjustCashModal = ({type, data}: HandleAdjustCashProps): Action => {
  if (type === 'open') {
    return {
      type: SHOW_ADJUST_CASH_MODAL,
      payload: data
    };
  } else {
    return {
      type: HIDE_ADJUST_CASH_MODAL,
      payload: data
    };
  }
};
