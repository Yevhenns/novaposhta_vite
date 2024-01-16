type HistoryListData = {
  number: string;
  status: string;
  sender: string;
  recipient: string;
};

type Info = {
  status: string;
  sender: string;
  recipient: string;
};

type HistoryList = {
  data: THistoryListData[];
  addInfo: (number: string) => void;
};
