import React, {useState} from "react";
import SelectChapter from "./SelectChapter";
import SelectSubject from "./SelectSubject";

export default function Index() {
  const [selectedSubject, setSelectedSubject] = useState("0");
  return selectedSubject === "0" ? (
    <SelectSubject setSelectedSubject={setSelectedSubject}/>
  ) : (
    <SelectChapter  setSelectedSubject={setSelectedSubject} />
  );
}
