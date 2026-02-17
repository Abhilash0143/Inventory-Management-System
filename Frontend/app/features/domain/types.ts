
export type ScannedItem = {
  sku: string;
  serial: string;
};

export type InnerBox = {
  innerBoxId: string;
  expectedQty: number;
  items: ScannedItem[];
  verifiedAt: string;
};

export type Session = {
  date: string;
  outerBoxId: string;
  innerBoxes: InnerBox[];
};

export type ResumeState = "NEW_NEEDS_QTY" | "IN_PROGRESS" | "READY_TO_CONFIRM";

export type CurrentInnerBox = {
  innerBoxId: string;
  expectedQty: number;
  sku: string;
  items: ScannedItem[];
};
