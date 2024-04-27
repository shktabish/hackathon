import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts";
import dayjs from "dayjs";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime1, setSelectedTime1] = useState();
  const [selectedTime2, setSelectedTime2] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTimeChange1 = (newValue) => {
    const time1 = newValue.target.value;
    setSelectedTime1(time1);
  };

  const handleTimeChange2 = (newValue) => {
    const time2 = newValue.target.value;
    setSelectedTime2(time2);
  };

  const handleDateChange = (event) => {
    const formatdate = new Date(event.target.value);
    const formattedValue = formatdate.toLocaleDateString("fr-CA");
    setSelectedDate(formattedValue);
  };

  const data = [
    { name: "Page A", uv: 40, amt: 94 },
    { name: "Page B", uv: 30, amt: 25 },
    { name: "Page C", uv: 35, amt: 45 },
    { name: "Page D", uv: 31, amt: 20 },
    { name: "Page E", uv: 10, amt: 51 },
    { name: "Page F", uv: 23, amt: 60 },
    { name: "Page G", uv: 10, amt: 21 },
  ];

  return (
    <>
      <style>
        {`
        .main {
          position: relative;
          width: 100%;
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        
        }
        
        .container {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          /* border: 2px solid black; */
          text-align: center;
          width: 95%;
          height: 80vh;
          backdrop-filter: blur(4px);
          border-radius: 40px;
          padding-top: 20px;
          /* padding-bottom: 20px; */
          font-family: "Inter", sans-serif;
        }
        
        .container,
        .title {
          color: black;
          line-height: 1.5;
          font-size: 1.8rem;
          letter-spacing: 0.045em;
        
          font-weight: bolder;
          /* text-transform: capitalize; */
        }
        
        .add-btn {
          padding-top: 20px;
          display: flex;
          justify-content: center;
        }
        
        .new-btn1 {
          border-radius: 15px;
          width: 100%;
          height: 100%;
          color: #ffffff;
        }
        
        .date1 {
          border-radius: 30px;
        }
        
        .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
          width: 30%;
          align-items: center;
          justify-content: center;
          /* border: 2px solid brown; */
          border-radius: 10%;
        }
        
        #customized-dialog-title {
          letter-spacing: 2px;
        }
        
        .statistics {
          display: flex;
          flex-direction: row;
          margin: 0 auto;
          width: 90%;
          height: 50vh;
          margin-top: 40px;
          /* border: 2px solid brown; */
          padding: 10px 10px 10px 10px;
          gap: 10px;
        }
        
        .duration {
          /* border: 2px solid yellow; */
          width: 50%;
        }
        
        .stats {
          /* border: 2px solid red; */
          width: 50%;
        }
        
        .duration-title {
          /* padding: 20px; */
          margin: 0;
          /* text-align: start; */
          font-size: 1.2rem;
        }
        
        .stats-title {
          /* margin:0; */
          /* text-align: start; */
          font-size: 1.2rem;
        }
        
        .duration-graph {
          /* border: 2px solid rgb(76, 0, 255); */
          position: relative;
        }
        
        tspan {
          font-size: 0.9rem;
        }
        
        .container-table {
          position: relative;
          margin-top: 0.2rem;
          width: 100%;
          height: 40vh;
          /* border: 2px solid black; */
        }
        
        .main-table {
          /* padding: 20px; */
          width: 100%;
          font-size: 0.8rem;
          /* border-radius: 15px ; */
          border-collapse: collapse;
          /* border-spacing: 0; */
        }
        
        td {
          padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        }
        
        td {
          color: gray;
        }
        
        th,
        td {
          padding: 8px;
        }
        
        .main-table thead th,
        .main-table tbody tr:first-child th,
        .main-table tbody tr:first-child td:first-child {
          background-color: transparent;
        }
        
        .main-table tbody td:not(:first-child) {
          /* border-bottom-right-radius: 10px;   */
          /* border-collapse: collapse; */
          background-color: #e0e9f5;
        }
        
        
        .input-group {
          position: relative;
        }
        
        .input {
          width: 100%;
          border: solid 1.5px #9e9e9e;
          border-radius: 1rem;
          background: none;
          padding: 1rem;
          font-size: 1rem;
          /* color: #f5f5f5; */
          transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 10%;
        }
        
        .user-label {
          position: absolute;
          left: 15px;
          /* color: #e8e8e8; */
          pointer-events: none;
          transform: translateY(1rem);
          transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .input:focus,
        input:valid {
          outline: none;
          border: 1.5px solid #1a73e8;
        }
        
        .input:focus~label,
        input:valid~label {
          transform: translateY(-50%) scale(0.8);
          background-color: #212121;
          padding: 0 .2em;
          color: #2196f3;
        }
        `}
      </style>
      <div className="main">
        <div className="container">
          <p className="title">Daily Sleep Tracker</p>

          <div className="add-btn">
            <div>
              <Button
                variant="contained"
                className="new-btn1"
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
              >
                New Entry
              </Button>

              <BootstrapDialog onClose={handleClose} open={open}>
                <BootstrapDialogTitle onClose={handleClose}>
                  <strong> Fill Your Details</strong>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="input-group">
                      &nbsp;<label htmlFor="date">Date</label>
                      <input
                        type="date"
                        name="date"
                        className="input"
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </div>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="input-group">
                      &nbsp;<label htmlFor="wakeup">Wake up time</label>
                      <input
                        type="time"
                        name="wakeuptime"
                        className="input"
                        step="1"
                        pattern="[0-2][0-9]:[0-5][0-9]"
                        value={selectedTime1}
                        onChange={handleTimeChange1}
                      />
                    </div>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="input-group">
                      &nbsp; <label htmlFor="sleeptime">Sleep time</label>
                      <input
                        type="time"
                        name="sleeptime"
                        className="input"
                        step="1"
                        pattern="[0-2][0-9]:[0-5][0-9]"
                        value={selectedTime2}
                        onChange={handleTimeChange2}
                      />
                    </div>
                  </LocalizationProvider>
                </DialogContent>
                <div className="save-btn" style={{ marginBottom: "3%" }}>
                  <DialogActions>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#5795FA",
                        borderRadius: 5,
                        marginTop: "4%",
                      }}
                      autoFocus
                      onClick={handleClose}
                    >
                      Save
                    </Button>
                  </DialogActions>
                </div>
              </BootstrapDialog>
            </div>
          </div>

          <div className="statistics">
            <div className="duration">
              <div className="duration-title">
                <p className="sleep-title">Sleep Duration</p>
              </div>
              <div className="duration-graph">
                <AreaChart
                  width={320}
                  height={300}
                  data={data}
                  margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                >
                  <XAxis
                    dataKey="amt"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    dataKey="uv"
                    axisLine={false}
                    tickLine={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#ccdbef"
                  />
                </AreaChart>
              </div>
            </div>

            <div className="stats">
              <div className="stats-title">
                <p className="sleep-title">Sleep Stats</p>
              </div>
              <div className="container-table">
                <table className="main-table">
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Time of sleep</th>
                      <th>Wake up time</th>
                      <th>Sleep duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                      <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                      <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                      <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                      <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                    <tr>
                      <td>5/1</td>
                      <td>00:00</td>
                      <td>5:00</td>
                      <td>5Hrs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
