import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function HorizontalBarGraph(props: any) {
    const { data } = props
    const option = {
        // title: {
        //     text: "Cateogories split "
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // legend: { data?.categories },
        grid: {
            left: '3%',
            right: '4%',
            // bottom: '3%',
            top: "2%",
            containLabel: true
        },
        xAxis: {
            type: 'value',
            // boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: data?.categories
        },
        series: [
            {
                name: 'Expenditure',
                type: 'bar',
                data: data?.values,
                barWidth: "25%",
                barGap: "2%"
            },

        ]
    };
    return (
        <ReactECharts option={option} />
    )
}
