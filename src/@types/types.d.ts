type THistoryListData = {
  number: string;
  status: string;
  sender: string;
  recipient: string;
};

type THistoryList = {
  data: THistoryListData[];
  addInfo: (number: string) => void;
};
