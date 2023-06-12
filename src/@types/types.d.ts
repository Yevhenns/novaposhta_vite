type TAddressForm = {
  handlerSabmit: (city: string) => void;
  currentButtonClick: (buttonName: string) => void;
};

type TCurrentDepartments = {
  currentDepartments: string[];
};

type TForm = {
  onSubmit: (number: string) => void;
  addFormNumber: boolean;
  inputNumber: string;
};

type THistoryListData = {
  number: string;
  status: string;
  sender: string;
  recipient: string;
};

type THistoryItemData = {
  number: string;
  addInfo: (number: string) => void;
};

type THistoryList = {
  data: THistoryListData[];
  addInfo: (number: string) => void;
};

type TInfo = Pick<THistoryListData, 'status' | 'sender' | 'recipient'>;

type TPaginationProps = {
  departments: number;
  perPage: number;
  paginate: (_: object, pageNumber: number) => void;
};
