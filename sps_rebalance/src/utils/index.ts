import {
  AllocationDataProps,
  ChangeAllocationData,
  AdjustCashDataProps,
  GetStyleProps
} from '../types';

/**
 * getCalculatedTotal - Get the sum of [field]s in the allocationData array
 *
 * @param {type} data  allocationData array
 * @param {type} field allocationData field name
 *
 * @returns {type} sum of the provided field
 */
export const getCalculatedTotal = (data: AllocationDataProps[], field: string) => {
    const callback = (prevValue: number, obj: {}) => {
        return prevValue + +obj[field];
    };
    const total = data.reduceRight(callback, 0);
    return total.toFixed(2);
};

/**
 * doAllCalculations - calculations related to TargetAllocationTable
 *
 * @param {type} arr  allocationData array
 *
 * @returns {type} updated allocationData with calculated data
 */
export const doAllCalculations = (arr: AllocationDataProps[]) => {
    const calculatedTotal = getCalculatedTotal(arr, 'value');
    return arr.map(obj => {
        const { value, targetPer } = obj;
        const updatedCurrentPercent: number = (+value / +calculatedTotal) * 100;
        const updatedTargetPrice: number = (+targetPer / 100) * +calculatedTotal;
        const driftPer = updatedCurrentPercent - +targetPer;
        const updatedDriftPrice: number = (+driftPer / 100) * +calculatedTotal;
        obj.currentPer = updatedCurrentPercent.toFixed(3).toString();
        obj.targetPrice = updatedTargetPrice.toFixed(3).toString();
        obj.driftPer = driftPer.toFixed(3).toString();
        obj.buySellPrice = updatedDriftPrice.toFixed(3).toString();
        return obj;
    });
};

/**
 * getUpdatedAllocationData - add/update actionType and actionValue
 *
 * @param {type} arr  allocationData array
 * @param {type} data asjustCash data object
 *
 * @returns {type} updated allocationData with adjustCash data
 */
export const getUpdatedAllocationData = (arr: AllocationDataProps[], data?: AdjustCashDataProps) => {
    const updatedArr = arr.filter((obj) => {
        if (data && ( data.id === obj.id )) {
            obj.actionType = data.actionType;
            obj.actionValue = data.actionValue;
            const val = +obj.value + +obj.actionValue;
            obj.value = val.toString();
            return true;
        }
        return true;
    });
    if (data && !data.actionValue) {
        return updatedArr;
    } else {
        return doAllCalculations(updatedArr);
    }
};

/**
 * getUpdatedTargetData - update any key in the allocationData array
 *
 * @param {type} arr  allocationData array
 * @param {type} data changed allocationData object
 *
 * @returns {type} updated allocationData with new changes
 */
export const getUpdatedTargetData = (arr: AllocationDataProps[], data: ChangeAllocationData) => {
    return arr.filter((obj) => {
        if (data.id === obj.id) {
            obj[data.field] = data.value;
            return true;
        }
        return true;
    });
};

/**
 * getAdjustCashFormData - Get adjustCash data by clicked row data id
 *                         when user clicks on the adjustCash link in the table
 *
 * @param {type} arr  allocationData arrat
 * @param {type} data object which contains selected row data id to filter
 *
 * @returns {type} filtered row from the allocationData array
 *                 based on the provided row id
 */
export const getAdjustCashFormData = (arr: AllocationDataProps[], data: AdjustCashDataProps) => {
    return arr.filter(obj => data.id === obj.id)[0];
};

/**
 * getStyle - Creates a style object for the element
 *
 * @param {type}   prop  element style property name
 * @param {type}   value element style property value
 *
 * @returns {type} style object to add to the element style attribute
 */
export const getStyle = ({ prop, value }: GetStyleProps) => {
    const obj = {};
    obj[prop] = value;
    return obj;
};

/**
 * getStyles - Creates array of styles for the element
 *
 * @param {array} [styles=[]] styles array
 *
 * @returns {type} array of style objects returned from getStyle functon
 */
export const getStyles = (styles = []) => {
    return styles.map(style => getStyle(style));
};

export default {
    getUpdatedAllocationData,
    getUpdatedTargetData,
    getStyle,
    getStyles,
    getCalculatedTotal,
    doAllCalculations
};
