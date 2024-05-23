import React, { useEffect, useRef } from "react";
import "2gis-maps";
import DG from "2gis-maps";
import Categories from "../components/MainPage/Categories";

export const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = DG.map(mapContainerRef.current, {
      center: [42.844605, 74.603279],
      zoom: 13  
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="mb-96 pb-40">
      <div className="absolute ml-20 w-[80%] text-xl">
        <Categories />
      </div>
      <div
        ref={mapContainerRef}
        className="absolute ml-96 mt-2 w-[68%] h-[66vh]"
      ></div>
    </div>
  );
};
