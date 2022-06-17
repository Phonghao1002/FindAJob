import axios from "axios";
import { useEffect, useState } from "react";
import RecruitNewsAPI from "./RecruitNewsAPI";

export default function RecruitmentAPI() {
  const [filePendings, setFilePending] = useState([]);

  useEffect(() => {
    const getFilePending = () => async () => {
      const res = await axios.get(
        "http://localhost:4110/api/recruitmentPending"
      );
      setFilePending(res.data);
      console.log("sos", filePendings);
    };

    getFilePending();
  }, []);
  return {
    filePendings: [filePendings, setFilePending],
  };
}
