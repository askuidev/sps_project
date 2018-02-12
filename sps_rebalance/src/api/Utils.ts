import config from '../config';

export const getAllocationDataUrl = (accId: string) => {
    return config.getRequired('dsServicePath') + `BrokerageAccountTargetAllocations?$filter=acctId eq '${+accId}' and acctCtx eq 'BETA.ACCT' and currInd eq 'Y'`;
}
