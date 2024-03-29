import "./ListView.scss";

import { ListViewHeader, ListViewTable } from "../../components/views";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/types";
import { TheLoader } from "../../components/common";
import { listActions } from "../../store/modules/list";

export const ListView: React.FC = () => {
  const dispatch = useDispatch();
  const { lists, loading } = useSelector(
    ({ listState }: RootState) => listState
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleDelete = async (e: string) => {
    await dispatch(listActions["LIST_DELETE"](e));
    setIsSettingsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(listActions["LIST_REQUEST"]());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="ListView">
      <TheLoader loading={loading}>
        <ListViewHeader
          onSettigsClick={() => setIsSettingsOpen((prevState) => !prevState)}
        />
        <ListViewTable
          editClicked={() => {}}
          deleteClicked={(e) => handleDelete(e)}
          isSettingsOpen={isSettingsOpen}
          data={lists}
        />
      </TheLoader>
    </div>
  );
};
