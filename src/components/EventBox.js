import React from "react";
import { useDrag } from "react-dnd";

export const EventBox = ({
  cssEvtType,
  setCssTransformType,
  setValueType,
  eventDeg,
  eventRender,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "test",
    item: { cssEvtType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      onClick={() => {
        setCssTransformType(setValueType);
        eventRender(eventDeg);
      }}
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
    >
      {cssEvtType}
    </div>
  );
};
