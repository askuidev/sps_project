// PropTypes for TableRow Data
export interface TableRowDataProps {
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

export interface HandleAdjustCashDataProps {
  actionType?: string;
  actionValue?: string;
  id?: string | number;
  allocationId?: string | number;
}

// PropTypes for TargetAllocationTable component
export interface TargetAllocationProps {
  getAllocationData: () => Promise<{}>;
  handleAdjustCashModal: (props: AdjustCashModalEntity) => void;
  updateAllocationTargetData: (
    allocationData: TableRowDataProps[],
    props: ChangeAllocationData
  ) => Promise<{}>;
  allocationData: TableRowDataProps[];
  allocationId: string;
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
  id: string;
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

// PropTypes for TableRow component props
export interface TableRowEntity {
  rowData?: TableRowDataProps;
  fieldType?: string;
  onAdjustCashClick?: (rowData: TableRowDataProps) => void;
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
  allocationData?: TableRowDataProps[];
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
  value?: string;
  id?: string | number;
  field?: string;
}

export interface TableBodyCallbackProps {
  (param1: TableCellProps, param2?: () => void): void;
}

// PropTypes for TableBody component props
export interface TableBodyProps {
  allocationData?: TableRowDataProps[];
  fieldType?: string;
  onAdjustCashClick?: (allocationData: TableRowDataProps) => void;
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
  allocationData: TableRowDataProps[];
  onAdjustCashClick?: (params: TableRowDataProps) => void;
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
  id?: string | number;
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
  id: string | number;
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
  allocationData: TableRowDataProps[];
  adjustCashData: AdjustCashDataProps;
  allocationId: string | number;
  mainClass: string;
  showAdjustCashModal: boolean;
  handleAdjustCashModal: (props: HandleAdjustCashModalProps) => void;
  updateAllocationData: (allocationData: TableRowDataProps[], props: AdjustCashDataProps) => Promise<{}>;
  getAllData: () => Promise<{}>;
  getAdjustCashData: () => {};
}

// PropTypes for AdjustCashModal component state
export interface AdjustCashModalState {
  actionType: string;
  actionValue: string;
}

export interface InitialStateProps {
  allocationData: TableRowDataProps[];
  assetData: AssetDataProps[];
  allocationId?: string | number;
  showAdjustCashModal: boolean;
  adjustCashData: AdjustCashModalState;
}

export interface MyLinkEvent {
  preventDefault: () => void
}
