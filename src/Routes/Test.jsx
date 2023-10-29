import React from "react";
import ButtonParts from "../components/parts/Button";
import RatingParts from "../components/parts/Rating";
import AvaterParts from "../components/parts/Avater";
import AlertParts from "../components/parts/Alert";
import CircularWithValueLabel from "../components/parts/Progress";
import SimpleBottomNavigation from "../components/parts/BottomNavigation";

const Test = () => {
  return (
    <div>
      <ButtonParts />
      <RatingParts />
      <AvaterParts />
      <AlertParts />
      <CircularWithValueLabel />
      <SimpleBottomNavigation />
    </div>
  );
};

export default Test;
