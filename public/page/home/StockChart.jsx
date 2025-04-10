import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketChart } from "@/State/Coin/Action";


const timeseries =[
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key: "Time Series(Daily)",
        lable: "1 Day",
        value: 1,

    },

    {
        keyword:"DIGITAL_CURRENCY_WEEKLY",
        key: "Weekly Time Series",
        lable: "1 Week",
        value: 7,
       

    },

    {
        keyword:"DIGITAL_CURRENCY_MONTHLY",
        key: "Monthly Time Series",
        lable: "1 Month",
        value: 30,

    },



];

const  StockChart = ({coinId}) => {
       const dispatch =useDispatch()
       const {coin} = useSelector(store => store)


       const[activeLable, setActiveLable] = useState("1 Day")

    const series =[
        {
             data: coin. marketChart.data,
        },

    ];

    const options = {
        chart: {
             id:"area-datetime",
             type:"area",
             height:500,
             zoom: {
                autoScaleYaxis:true
             },

        },
        dataLabels:{
            enabled:false
        },
        xaxis:{
            type:"datetime",
            tickAmount: 6

        },
        colors:["#758AA2"],
        markers:{
            colors:["#fff"],
            strokeColors:["#fff"],
            size:0,
            strokeWidth:1,
            strokeDashArray:0,
            style:"hollow",

        },

        tooltip:{
            theme:"dark",


        },

        fill:{
            type:"gradient",
            gradient:{
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100],

            },
        },

        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true
        },

    };

    const handleActiveLable =(value) => {


        setActiveLable(value);

    }


    // return <div style={{ width: "50vw", overflow:"hidden"}}>
    //     <div id="chart-timelines" style={{ width: "100%", height: "500px" }}> 
    //         <ReactApexChart options={options} series={series} type="area" height={500}/>

    //     </div>

    // </div>;

    useEffect(()=> {
        dispatch(fetchMarketChart({coinId,days:30, jwt:localStorage.getItem("jwt")}))
    },[dispatch, coinId, activeLable])
    return(
        <div style={{ width: "47vw", overflow:"hidden"}}>

            <div className="space-x-3">
                {timeseries.map((item)=><Button 
                variant={activeLable== item.lable ? "" : "outline"}
                onClick={() =>handleActiveLable(item.lable)} key={item.lable}>
                    {item.lable}

                </Button>)}

            </div>

            <div id="chart-timelines">
                <ReactApexChart
                 options={options}
                 series={series}
                 height={450}
                 type="area"
                 
                 
                 
                 />


            </div>


        </div>

    );
    
};

export default StockChart