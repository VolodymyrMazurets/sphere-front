import "./ListView.scss";

import { ListViewHeader, ListViewTable } from "../../components/views";

import React from "react";

export const ListView: React.FC = () => {
  return (
    <div className="ListView">
      <ListViewHeader />
      <ListViewTable />
    </div>
  );
};
