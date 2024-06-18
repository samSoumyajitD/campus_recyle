import React from "react";
import "./BuyerProfileView.css";
import { Pencil } from "lucide-react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";

import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

const series = [
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [5, 6, 2, 8, 9],
    color: "#FF4747"
  }
];

function BuyerProfileView() {
  return (
    <div className="profile-view">
      <div className="top">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
      </div>
      <div className="profile-details">
        <div>
          <h4>Profile Name</h4>
          <p>buyer@email.com</p>
          <p>Buyer</p>
        </div>
        <div className="total-orders">
          Edit Profile <Pencil size={15} />
        </div>
      </div>
      <div className="your-orders-stat">
        <div className="head">
          <h4>Your Orders</h4>
          <span>
            <div>
              <p>Total Spent</p>
              <h5>500</h5>
            </div>
            <div>
              <p>Total Orders</p>
              <h5>5</h5>
            </div>
          </span>
        </div>
        <ChartContainer
          series={series}
          width={700}
          height={400}
          xAxis={[
            {
              id: "years",
              data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              scaleType: "band",
              valueFormatter: (value) => value.toString(),
            },
          ]}
          yAxis={[
            {
              id: "eco",
              scaleType: "linear",
            },
            {
              id: "pib",
              scaleType: "log",
            },
          ]}
        >
          <BarPlot />
          <LinePlot />
          <ChartsXAxis label="Months" position="bottom" axisId="years" />
          <ChartsYAxis label="Spent" position="left" axisId="eco" />
        </ChartContainer>
      </div>
    </div>
  );
}

export default BuyerProfileView;
