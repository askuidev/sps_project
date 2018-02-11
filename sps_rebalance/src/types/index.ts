export interface AllocationDataProps {
  description: string;
  adjustCash: boolean;
  actionType: string;
  actionValue: string;
  currentPer: string;
  symbol: string;
  targetPer: string;
  value: string;
  id: AllocationId;
  targetPrice: string;
  buySellPrice: string;
  driftPer: string;
}

export interface AllocationId {
  id: number | string;
}

export interface GetStyleProps {
  prop: string;
  value: string | number;
}

export interface HandleAdjustCashDataProps {
  actionType?: string;
  actionValue?: string;
  id?: AllocationId;
  allocationId?: AllocationId;
}

// PropTypes for TargetAllocationTable component
export interface TargetAllocationProps {
  getAllocationData: () => Promise<{}>;
  handleAdjustCashModal: (props: AdjustCashModalEntity) => void;
  updateAllocationTargetData: (
    allocationData: AllocationDataProps[],
    props: ChangeAllocationData
  ) => Promise<{}>;
  allocationData: AllocationDataProps[];
  allocationId: AllocationId;
  showAdjustCashModal: boolean;
}

// PropTypes for component state of TargetAllocationTable component
export interface TargetAllocationState {
  leftGroupActive?: string;
  middleGroupActive?: string;
}

// PropTypes for AdjustCashModal Data
export interface AdjustCashModalEntity {
  type: string;
  data: HandleAdjustCashDataProps;
}

// PropTypes for changed allocationData fields
export interface ChangeAllocationData {
  value: string;
  id: AllocationId;
  field: string;
}

// PropTypes for asset data
export interface AssetDataProps {
  color: string;
  assetClass: string;
  difference: string;
}

// PropTypes for DiffAllocationTable component
export interface DiffAllocationTableProps {
  assetData?: AssetDataProps[];
  getAssetData: () => {};
}

// PropTypes for DiffAllocationTableRow
export interface DiffAllocationTableRowProps {
  color?: string;
  assetClass?: string;
  difference?: string;
}

// PropTypes for callback function
export interface CallbackProps {
  (param1: object, param2?: () => void): void;
}

// PropTypes for callback function
export interface CbProps {
  callback: () => void
}

// PropTypes for TableRow component props
export interface TableRowEntity {
  rowData?: AllocationDataProps;
  fieldType?: string;
  onAdjustCashClick?: (rowData: AllocationDataProps) => void;
  onDataChange?: CallbackProps;
}

// PropTypes for TableRow component state
export interface TableRowState {
  targetPer?: string;
  targetPrice?: string;
}

// PropTypes for callback event object
export interface MyEventTarget extends EventTarget {
  value: string;
}

// PropTypes for callback event data
export interface MyFormEvent extends React.FormEvent<HTMLInputElement> {
  target: MyEventTarget;
}

// PropTypes for TableFooter component props
export interface TableFooterProps {
  allocationData?: AllocationDataProps[];
  searchText?: string;
}

// PropTypes for TableFooter component state
export interface TableFooterState {
  searchText: string;
}

// PropTypes for TableControls component props
export interface TableControlsProps {
  leftGroupActive?: string;
  middleGroupActive?: string;
  onLeftGroupClick?: (leftGroupActive: string) => void;
  onMiddleGroupClick?: (middleGroupActive: string) => void;
}

// PropTypes for TableCel of TableBody
export interface TableCellProps {
  value: string;
  id: AllocationId;
  field: string;
}

export interface TableBodyCallbackProps {
  (param1: TableCellProps, param2?: () => void): void;
}

// PropTypes for TableBody component props
export interface TableBodyProps {
  allocationData?: AllocationDataProps[];
  fieldType?: string;
  onAdjustCashClick?: (allocationData: AllocationDataProps) => void;
  onDataChange?: TableBodyCallbackProps;
}

// PropTypes for NoDataRow component props
export interface NoDataRowProps {
  colSpan: number;
  message: string;
}

export interface TableCallbackProps {
  (param1: TableCellProps, param2?: () => void): void;
}

// PropTypes for Table component props
export interface TableProps {
  tableClass?: string;
  fieldType?: string;
  allocationData: AllocationDataProps[];
  onAdjustCashClick?: (params: AllocationDataProps) => void;
  onDataChange?: TableCallbackProps;
}

// PropTypes for ButtonGroup component props
export interface ButtonGroupProps {
  buttonType?: string;
  withIcons?: boolean;
  isGroup?: boolean;
  activeBtn?: string;
  mainClass?: string;
  grouped?: boolean;
  buttons?: ButtonProps[] | RadioBtnProps[];
  checkedRadio?: string;
  onButtonGroupClick?: (field: string) => void;
  onRadioChange?: (text: string, e: MyFormEvent) => void;
  onCheckChange?: (actionType: string, e: MyFormEvent) => void;
  onValueChange?: (e: MyFormEvent) => void;
  onClearClick?: () => void;
}

// PropTypes for Button element props
export interface ButtonProps {
  text?: string;
  field?: string;
  iconClass?: string;
  className?: string;
}

// PropTypes for Radio Button props
export interface RadioBtnProps {
  name?: string;
  type?: string;
  text?: string;
}

// PropTypes for Modal component props
export interface ModalProps {
  children?: any;
  mainClass?: string;
  titleText?: string;
  showModal?: boolean;
  onModalHide?: () => void;
  onSubmitClick?: () => void;
  draggable?: boolean;
  backdrop?: boolean;
  handle?: string;
}

// PropTypes for Checkbox component props
export interface CheckboxProps {
  id?: AllocationId;
  label?: string;
  mainClass?: string;
  onChange?: (id: string | number, e: object) => void;
}

// PropTypes for Panel component props
export interface PanelProps {
  children?: any;
  mainClass?: string;
  headingClass?: string;
  titleText?: string;
  bodyClass?: string;
  mainHeadingChildren?: any;
  subHeadingChildren?: any;
}

// PropTypes for AdjustCashForm component props
export interface AdjustCashFormProps {
  buttonType?: string;
  actionType?: string;
  actionValue?: string;
  withIcons?: boolean;
  isGroup?: boolean;
  activeBtn?: string;
  mainClass?: string;
  grouped?: boolean;
  buttons?: ButtonProps[];
  checkedRadio?: string;
  onCheckChange: (actionType: string, e: MyFormEvent) => void;
  onValueChange: (e: MyFormEvent) => void;
  onClearClick: () => void;
}

// PropTypes for AdjustCash Data props
export interface AdjustCashDataProps {
  id: AllocationId;
  actionType: string;
  actionValue: string;
}

// PropTypes for handleAdjustCashModal function
export interface HandleAdjustCashModalProps {
  type: string;
  data: string;
}

// PropTypes for AdjustCashModal component props
export interface AdjustCashModalProps {
  allocationData: AllocationDataProps[];
  adjustCashData: AdjustCashDataProps;
  allocationId: AllocationId;
  mainClass: string;
  showAdjustCashModal: boolean;
  handleAdjustCashModal: (props: HandleAdjustCashModalProps) => void;
  updateAllocationData: (allocationData: AllocationDataProps[], props: AdjustCashDataProps) => Promise<{}>;
  getAllData: () => Promise<{}>;
  getAdjustCashData: () => {};
}

// PropTypes for AdjustCashModal component state
export interface AdjustCashModalState {
  actionType: string;
  actionValue: string;
}

export interface InitialStateProps {
  allocationData: AllocationDataProps[];
  assetData: AssetDataProps[];
  allocationId?: AllocationId;
  showAdjustCashModal: boolean;
  adjustCashData: AdjustCashModalState;
}

export interface MyLinkEvent {
  preventDefault: () => void
}

export interface ApiResponse {
  type?: string;
  data?: object;
  error?: object;
}

export interface ValidTargetPercent {
  isValid?: boolean;
}
