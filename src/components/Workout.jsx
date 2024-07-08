import React from "react";
import SectionWrapper from "./SectionWrapper";
import Exercisecard from "./Exercisecard";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper id={'workout'}
      header={"welcome to"}
      title={["The", "Danger", "zone"]}
    >
      <div className="flex flex-col gap-4">
            {workout.map((exercise, i) => {
              return (
                <Exercisecard i={i} exercise={exercise} key={i}/>
              )
            })}
      </div>
    </SectionWrapper>
  );
}
