import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import ExpensesDetails from '../../../constant/graphsjson/expenses.json';
// import 
type EChartsOption = echarts.EChartsOption;
const BarGraph = () => {
  // var option: EChartsOption;
  var MothCategories: string[] = []
  var expenses: number[] = []
  ExpensesDetails?.map((item: any, index: number) => {
    MothCategories.push(item?.monthExpen?.name)
    expenses.push(item?.monthExpen?.value)

  })

  const HandleClick = (props: any) => {
    console.log("hiiii", MothCategories)

  }

  var option: EChartsOption = {
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
        data: MothCategories,
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
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: expenses
      }
    ]
  };
  // option && myChart.setOption(option);
  return (
    <>
      <div style={{ width: "600", height: "400" }}>

        <ReactECharts option={option} onEvents={{ 'click': HandleClick }} />
      </div>
    </>

  )
}
export default BarGraph