import { useState, useEffect } from "react";
const api =
  "https://raw.githubusercontent.com/GeorgeRangelCode/curriculumvitae/master/src/data/data.json";

const useGetData = () => {
  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return mydata;
};

export default useGetData;
