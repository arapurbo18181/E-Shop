export * from "./Tabs";

export type TabProps = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export type TabsDemoProps = {
  tabs: TabProps[];
};
