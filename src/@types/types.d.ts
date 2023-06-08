type TAddressForm = {
  handlerSabmit: (city: string) => void;
  currentButtonClick: (buttonName: string) => void;
};

type TCurrentDepartments = {
  currentDepartments: string[];
};

type TForm = {
  onSubmit: (umber: string) => void;
  addFormNumber: boolean;
  inputNumber: string;
};

type THistoryItemData = {
  number: string;
  addInfo: (number: string) => void;
};

interface IHistoryListData {
  number: string;
  status: string;
  sender: string;
  recipient: string;
}

type THistoryList = {
  data: IHistoryListData[];
  addInfo: (number: string) => void;
};

type TInfo = Pick<IHistoryListData, 'status' | 'sender' | 'recipient'>;

type TPaginationProps = {
  departments: number;
  perPage: number;
  paginate: (_: object, pageNumber: number) => void;
};
