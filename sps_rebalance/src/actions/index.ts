import utils from '../utils';
import {
  AllocationDataProps,
  AssetDataProps,
  ChangeAllocationData,
  AdjustCashDataProps,
  AdjustCashModalEntity,
  HandleAdjustCashDataProps,
  ApiResponse
} from '../types';
import { Dispatch } from 'redux';
import AllocationDataApi from '../api/AllocationDataApi';
import AssetDataApi from '../api/AssetDataApi';

const { getUpdatedAllocationData, getUpdatedTargetData } = utils;

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
      payload: Promise<{}>
    }
  | {
      type: 'UPDATE_ALLOCATION_DATA_SUCCESS',
      payload: AllocationDataProps[]
    }
  | {
      type: 'RESET_ALLOCATION_DATA_SUCCESS',
      payload: AllocationDataProps[]
    }
  | {
      type: 'UPDATE_ALLOCATION_TARGET_DATA',
      payload: Promise<{}>
    }
  | {
      type: 'UPDATE_ALLOCATION_TARGET_DATA_SUCCESS',
      payload: AllocationDataProps[]
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
export function loadedAllocationData(response: ApiResponse) {
  if (response.type === "success") {
    return {
      type: GET_ALLOCATION_DATA_SUCCESS,
      payload: response.data
    };
  } else {
    return {
      type: GET_ALLOCATION_DATA_FAIL,
      payload: response.error
    };
  }
}
export function getAllocationData() {
  return (dispatch: Dispatch<{}>) => {
    return AllocationDataApi.loadAllocationData().then((response: ApiResponse) => {
      dispatch(loadedAllocationData(response));
    })
  };
}

export const GET_ASSET_DATA = 'GET_ASSET_DATA';
export const GET_ASSET_DATA_SUCCESS = 'GET_ASSET_DATA_SUCCESS';
export const GET_ASSET_DATA_FAIL = 'GET_ASSET_DATA_FAIL';
export function loadedAssetData(response: ApiResponse) {
  if (response.type === "success") {
    return {
      type: GET_ASSET_DATA_SUCCESS,
      payload: response.data
    };
  } else {
    return {
      type: GET_ASSET_DATA_FAIL,
      payload: response.error
    };
  }
}
export function getAssetData() {
  return (dispatch: Dispatch<{}>) => {
    return AssetDataApi.loadAssetData().then((response: ApiResponse) => {
      dispatch(loadedAssetData(response));
    })
  };
}

export const UPDATE_ALLOCATION_TARGET_DATA = 'UPDATE_ALLOCATION_TARGET_DATA';
export const UPDATE_ALLOCATION_TARGET_DATA_SUCCESS =
  'UPDATE_ALLOCATION_TARGET_DATA_SUCCESS';
export const UPDATE_ALLOCATION_TARGET_DATA_FAIL =
  'UPDATE_ALLOCATION_TARGET_DATA_FAIL';
export function loadedUpdatedAllocationTargetData(response: AllocationDataProps[]) {
  return {
    type: UPDATE_ALLOCATION_TARGET_DATA_SUCCESS,
    payload: response
  };
}
export function updateAllocationTargetData(
  allocationData: AllocationDataProps[],
  data: ChangeAllocationData
) {
  const updatedTargetData = getUpdatedTargetData(allocationData, data);
  return (dispatch: Dispatch<{}>) => {
    dispatch(loadedUpdatedAllocationTargetData(updatedTargetData));
  };
}

export const UPDATE_ALLOCATION_DATA = 'UPDATE_ALLOCATION_DATA';
export const UPDATE_ALLOCATION_DATA_SUCCESS = 'UPDATE_ALLOCATION_DATA_SUCCESS';
export const UPDATE_ALLOCATION_DATA_FAIL = 'UPDATE_ALLOCATION_DATA_FAIL';
export function loadedUpdateAllocationData(updatedAllocationData: AllocationDataProps[]) {
  return {
    type: UPDATE_ALLOCATION_DATA_SUCCESS,
    payload: updatedAllocationData
  };
}
export function updateAllocationData(
  allocationData: AllocationDataProps[],
  data: AdjustCashDataProps
) {
  const updatedAllocationData = getUpdatedAllocationData(allocationData, data);
  return (dispatch: Dispatch<{}>) => {
    dispatch(loadedUpdateAllocationData(updatedAllocationData));
  }
};

export const CLEAR_ADJUST_CASH_DATA = 'CLEAR_ADJUST_CASH_DATA';
export const clearAdjustCashData = (): Action => ({
  type: CLEAR_ADJUST_CASH_DATA,
  payload: {}
});

export const SHOW_ADJUST_CASH_MODAL = 'SHOW_ADJUST_CASH_MODAL';
export const HIDE_ADJUST_CASH_MODAL = 'HIDE_ADJUST_CASH_MODAL';
export const handleAdjustCashModal = ({type, data}: AdjustCashModalEntity): Action => {
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
