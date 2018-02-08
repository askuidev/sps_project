import { createStore, applyMiddleware } from 'redux';
import { Action } from '../actions';
import * as Actions from '../actions';
import {
    doAllCalculations
} from '../utils';
import { InitialStateProps } from '../types';
import thunk from 'redux-thunk';

let initialState = {
    allocationData: [],
    assetData: [],
    allocationId: '',
    showAdjustCashModal: false,
    adjustCashData: {
        actionType: '',
        actionValue: ''
    }
};

const reducer = (state: InitialStateProps = initialState, action: Action) => {
    switch (action.type) {
        case Actions.GET_ALLOCATION_DATA_SUCCESS:
            /**
             * this case will execute once
             * the [GET] request for [allocationData] api got success
             * @param action.payload.data will contain the response from the api
             *
             * @returns {object}  - state object with allocationData
             */
            const allocData = action.payload;
            const calculatedData = doAllCalculations(allocData);
            state = Object.assign({}, state, { allocationData: calculatedData });
            break;
        case Actions.UPDATE_ALLOCATION_DATA:
            /**
             * this case will execute once
             * the [GET] request for [allocationData] api got success
             * @param action.payload.data will contain the response from the api
             *
             * @returns {object}  - state object with allocationData
             */
            state = Object.assign({}, state, { allocationData: action.payload });
            break;
        case Actions.GET_ASSET_DATA_SUCCESS:
            /**
             * this case will execute once
             * the [GET] request for [assetData] api got success
             * @param action.payload.data will contain the response from the api
             *
             * @returns {object}  - state object with assetData
             */
            state = Object.assign({}, state, { assetData: action.payload });
            break;
        case Actions.CLEAR_ADJUST_CASH_DATA:
            /**
             * this case will execute
             * when the user dispatch an action to clear Adjust Cash Form
             *
             * @returns {object}  - state object with adjustCashData empty values
             */
            state = Object.assign({}, state, { adjustCashData: initialState.adjustCashData });
            break;
        case Actions.SHOW_ADJUST_CASH_MODAL:
            /**
             * this case will execute
             * when the user dispatch an action to show the adjust cast modal
             *
             * @returns {object}  - state object with adjustCashData and selected allocationId data row id
             */
            const showAdjustCashFormData = {
                actionType: action.payload.actionType || '',
                actionValue: action.payload.actionValue || ''
            };
            const showAdjustCashData = {
                showAdjustCashModal: true,
                allocationId: action.payload.id,
                adjustCashData: showAdjustCashFormData
            };
            state = Object.assign({}, state, showAdjustCashData);
            break;
        case Actions.HIDE_ADJUST_CASH_MODAL:
            /**
             * this case will execute
             * when the user dispatch an action to hide the adjust cast modal
             *
             * @returns {object} - state object with empty adjustCashData and nullyfying the selected row id
             */
            const hideAdjustCashFormData = {
                actionType: '',
                actionValue: ''
            };
            const hideAdjustCashData = {
                showAdjustCashModal: false,
                allocationId: null,
                adjustCashData: hideAdjustCashFormData
            };
            state = Object.assign({}, state, hideAdjustCashData);
            break;
        default:

    }
    return state;
};

const configureStore = () => {
    return createStore(reducer, initialState, applyMiddleware(thunk));
};

export default configureStore;
