import React from "react";
import {marquee} from "../content/site";
import Marquee from "../ui/Marquee";

export default function MarqueeBand() {
  return <Marquee items={marquee} />;
}
