import React from "react";
import Icon from "./Icon";
import { EventBox } from "./EventBox";

export const Sidebar = ({
  catDeg,
  catX,
  setCssTransformType,
  setCatDeg,
  setCatX,
  droppedItems,
  setCssTranformClick,
  setDroppedItems,
}) => {
  const leftContent = (
    <>
      {"Turn "}
      <Icon name="undo" size={15} className="text-white mx-2" />
      {"15 degrees left"}
    </>
  );
  const rightContent = (
    <>
      {"Turn "}
      <Icon name="redo" size={15} className="text-white mx-2" />
      {"15 degrees right"}
    </>
  );
  const cssTranformFunc = (type, x, y, deg) => {
    const cssTranformMap = {
      translate: `translate(${x}px, ${y}px)`,
      rotate: `rotate(${deg}deg)`,
    };
    return cssTranformMap[type];
  };

  const resetEvents = () => {
    setCssTranformClick(cssTranformFunc("translate", 0, 0));
    setDroppedItems([]);
  };
  const checkEvents = () => {
    droppedItems.forEach((element, index) => {
      if (element === "Move 10 steps") {
        var cssTypeString = cssTranformFunc("translate", 10, 0);
        setCssTranformClick(cssTypeString);
      } else if (element === "Move 20 steps") {
        var cssTypeString = cssTranformFunc("translate", 20, 0);
        setCssTranformClick(cssTypeString);
      } else if (element === "15 degrees left") {
        var cssTypeString = cssTranformFunc("rotate", 0, 0, -5);
        setCssTranformClick(cssTypeString);
      } else if (element === "15 degrees right") {
        var cssTypeString = cssTranformFunc("rotate", 0, 0, 5);
        setCssTranformClick(cssTypeString);
      }
    });
  };
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div
        onClick={() => checkEvents()}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div
        onClick={() => resetEvents()}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <EventBox
        cssEvtType={"Move 10 steps"}
        setCssTransformType={setCssTransformType}
        setValueType={"translate"}
        eventDeg={catX + 10}
        eventRender={setCatX}
      />
      <EventBox
        cssEvtType={"Move 20 steps"}
        setCssTransformType={setCssTransformType}
        setValueType={"translate"}
        eventDeg={catX + 20}
        eventRender={setCatX}
      />
      <EventBox
        cssEvtType={leftContent}
        setCssTransformType={setCssTransformType}
        setValueType={"rotate"}
        eventDeg={catDeg - 10}
        eventRender={setCatDeg}
      />
      <EventBox
        cssEvtType={rightContent}
        setCssTransformType={setCssTransformType}
        setValueType={"rotate"}
        eventDeg={catDeg + 10}
        eventRender={setCatDeg}
      />
    </div>
  );
};
