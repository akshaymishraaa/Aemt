import React, { useState } from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import ExpensesDetails from '../../../constant/graphsjson/expenses.json';
import CustomDialog from '../../../common/dialogBox/CustomDialog';
import { Navigate } from 'react-router';
// import 
type EChartsOption = echarts.EChartsOption;
const BarGraph = () => {
  // var option: EChartsOption;
  const [showCategorySplit, setShowCategroySplit] = useState(false)
  var MothCategories: string[] = []
  var expenses: number[] = []
  ExpensesDetails?.map((item: any, index: number) => {
    MothCategories.push(item?.monthExpen?.name)
    expenses.push(item?.monthExpen?.value)

  })

  const HandleClick = (props: any) => {
    setShowCategroySplit(true)
  }
  const OpenCustomDialog = () => {
    return (
      <CustomDialog />
    )
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
        name: 'Month Expenses',
        type: 'bar',
        barWidth: '60%',
        data: expenses
      }
    ]
  };
  // option && myChart.setOption(option);
  return (
    <>
      <div className='mainChartsContainer w-100'>
        <ReactECharts option={option} onEvents={{ 'click': HandleClick }} />
        {
          (showCategorySplit) ? <CustomDialog
            open={showCategorySplit}
            setShowCategroySplit={setShowCategroySplit}
            title={'Catogory Wise Expenditure Of Month:'}
          >
            <p>Expenditure of Every Category </p>
          </CustomDialog> : null
        }
      </div>
    </>

  )
}
export default BarGraph