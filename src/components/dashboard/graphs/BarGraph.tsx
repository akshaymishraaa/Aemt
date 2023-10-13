import React, { useState } from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import ExpensesDetails from '../../../constant/graphsjson/expenses.json';
import CustomDialog from '../../../common/dialogBox/CustomDialog';
import { Navigate } from 'react-router';
// import 
type EChartsOption = echarts.EChartsOption;
const BarGraph = (props: any) => {
  const { handleBarClick, barData, title } = props
  var option: EChartsOption = {
    // title: {title},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: barData?.categories,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Month Expenses',
        type: 'bar',
        barWidth: '60%',
        data: barData?.values
      }
    ]
  };
  // option && myChart.setOption(option);
  return (
    <>
      <div className='mainChartsContainer w-100'>
        <ReactECharts option={option} onEvents={{ 'click': handleBarClick }} />
      </div>
    </>

  )
}
export default BarGraph