import React, { useState, useEffect } from "react";
import GetInTouch from "./GetInTouch";
import Grid from "./Grid";

export default function Home() {
  return (
    <>
      <div className="relative container mx-auto grid md:grid-cols-8 ">
        <div className="md:col-start-2 sm: col-start-1 md:col-span-6 ">
          <h3 className="text-xl mt-20 text-offBlack font-semibold">
            Software Engineer & Product Designer
          </h3>
          <h1 className="text-5xl mt-14 text-offBlack font-semibold">
            Hi i'm Dylan.
          </h1>
          <h1 className="text-5xl my-3 text-offBlack font-semibold">
            I love to code, design, and create.
          </h1>
          <p className="my-10 text-offBlack md:font-light">
            With a background in UX Design and Computer Science, I strive to
            build end-to-end digital experiences that are both fashionable and
            functional. Thanks for taking the time to view my work!
          </p>
          <Grid />
        </div>
      </div>
    </>
  );
}
