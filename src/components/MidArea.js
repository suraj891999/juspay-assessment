import React from "react";
import { useDrop } from "react-dnd";

const MidArea = ({ handleDropItem, droppedItems }) => {
  const [{ isOver, draggingColor, canDrop, cssEventType }, drop] = useDrop(
    () => ({
      accept: "test",
      drop(item, monitor) {
        handleDropItem(item.cssEvtType);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggingColor: monitor.getItemType(),
      }),
    })
  );
  return (
    <div
      ref={drop}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        height: "100vh",
      }}
    >
      {droppedItems.map((item) => {
        return (
          <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default MidArea;
