import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [recruitments, setRecruitment] = useState([]);

  useEffect(() => {
    const getRecruitment = async () => {
      const res = await axios.get("http://localhost:4110/api/listRecruitment");
      setRecruitment(res.data);
      console.log("Recruitments", recruitments);
    };

    getRecruitment();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Họ Tên</TableCell>
            <TableCell className="tableCell">File CV</TableCell>
            <TableCell className="tableCell">Số điện thoại</TableCell>
            <TableCell className="tableCell">email</TableCell>
            <TableCell className="tableCell">Ngày nộp hồ sơ</TableCell>
            {/* <TableCell className="tableCell">Payment Method</TableCell> */}
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recruitments.map((recruitment, index) => (
            <TableRow key={recruitment._id}>
              <TableCell className="tableCell">{index + 1}</TableCell>
              <TableCell className="tableCell">
                {/* <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.userName}
                </div> */}
                {recruitment.name}
              </TableCell>
              <TableCell>
                {" "}
                <a href={recruitment.urlCV} target="_blank">
                  {recruitment.name}_CV
                </a>
              </TableCell>
              <TableCell className="tableCell">
                {recruitment.phoneNumber}
              </TableCell>
              <TableCell className="tableCell">{recruitment.email}</TableCell>
              <TableCell className="tableCell">
                {new Date(recruitment.createdAt).toLocaleDateString()}
              </TableCell>
              {/* <TableCell className="tableCell">{recruitment.name}</TableCell> */}
              {/* <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell> */}
              <TableCell className="tableCell">
                <span className={`status ${recruitment.status}`}>
                  {recruitment.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
