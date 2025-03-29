import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button";


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

const  StockChart = () => {
       const[activeLable, setActiveLable] = useState("1 Day")

    const series =[
        {
             data: [ 
             [1740603929701, 84033.6738360382],
             [1740607491580, 84508.0886401965],
             [1740611084223, 84301.8119681179],
             [1740614697146, 84136.6270309708],
             [1740618033204, 84539.8586757006],
             [1740622059379, 84559.8487313725],
             [1740625403975, 84283.8164231765],
             [1740629058422, 85132.658271171],
             [1740632952323, 85035.8382625425],
             [1740636285122, 85749.7757679238],
             [1740639868938, 86174.3122494441],
             [1740643468696, 86219.3559099563],
             [1740647078683, 85993.0408767033],
             [1740650684385, 86074.3203114768],
             [1740654290652, 86951.1115096545],
             [1740657898578, 86658.6225623135],
             [1740661482833, 86247.6368050315],
             [1740665094100, 86051.5831147364],
             [1740668684189, 84937.5878459347],
             [1740672725479, 85465.9830879091],
             [1740676005252, 84434.4289818485],
             [1740679475450, 84484.3560760712],
             [1740683369693, 84308.6304529113],
             [1740686689162, 83946.7146868903],
             [1740690281086, 83456.5463986768],
             [1740693897260, 84201.3503995106],
             [1740697470095, 84575.080700767],
             [1740701100195, 84689.5096363508],
             [1740704689739, 84174.6038613675],
             [1740708342417, 81731.4598592273],
             [1740712192358, 81150.2627834259],
             [1740715495802, 80450.7929479466],
             [1740718906910, 80327.9096837063],
             [1740722683440, 79873.2424676397],
             [1740726533466, 79796.0333824768],
             [1740729876289, 79079.2385398883],
             [1740733471902, 78940.4386494287],
             [1740737364105, 79998.5769336598],
             [1740740686563, 79962.4383877028],
             [1740744180812, 80435.1886242044],
             [1740747876416, 80772.6781579594],
             [1740751487958, 81473.4231533346],
             [1740755361818, 82319.0061578152],
             [1740758616928, 83979.3755138023],
             [1740762156098, 84391.4201709688],
             [1740765709181, 83657.4917857399],
            ],
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