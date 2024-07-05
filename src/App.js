import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Sidebar } from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [cssTransformType, setCssTransformType] = useState("");
  const [catX, setCatX] = useState(0);
  const [catY, setCatY] = useState(0);
  const [catDeg, setCatDeg] = useState(0);
  const [catRotate, setCatRotate] = useState(0);
  const [droppedItems, setDroppedItems] = useState([]);
  const cssTranformFunc = (type, x, y, deg) => {
    const cssTranformMap = {
      translate: `translate(${x}px, ${y}px)`,
      rotate: `rotate(${deg}deg)`,
    };
    return cssTranformMap[type];
  };
  const [cssTranformClick, setCssTranformClick] = useState(
    cssTranformFunc(cssTransformType, catX, catY, catDeg)
  );

  useEffect(() => {
    const cssTypeString = cssTranformFunc(cssTransformType, catX, catY, catDeg);
    setCssTranformClick(cssTypeString);
  }, [cssTransformType, catY, catDeg, catX]);
  const handleDropItem = (val) => {
    const values = Array.isArray(val) ? val : [val];
    const combinedArray = values.reduce((acc, value) => {
      if (typeof value === "string") {
        acc.push(value);
      } else if (
        React.isValidElement(value) &&
        value.props &&
        value.props.children
      ) {
        React.Children.forEach(value.props.children[2], (child) => {
          if (typeof child === "string") {
            acc.push(child);
          }
        });
      }
      return acc;
    }, []);
    setDroppedItems((prevValue) => [...prevValue, ...combinedArray]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar
              cssTransformType={cssTransformType}
              catY={catY}
              catDeg={catDeg}
              catX={catX}
              setCssTransformType={setCssTransformType}
              setCatDeg={setCatDeg}
              setCatY={setCatY}
              setCatX={setCatX}
              setCatRotate={setCatRotate}
              catRotate={catRotate}
              droppedItems={droppedItems}
              setCssTranformClick={setCssTranformClick}
              setDroppedItems={setDroppedItems}
            />
            <MidArea
              handleDropItem={handleDropItem}
              droppedItems={droppedItems}
            />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea
              cssTransformType={cssTransformType}
              catY={catY}
              catDeg={catDeg}
              catX={catX}
              setCssTranformClick={setCssTranformClick}
              cssTranformClick={cssTranformClick}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
