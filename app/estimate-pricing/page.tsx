'use client'

import CardEstimateCalculation from '@/components/card-estimate-calculation/card-estimate-calculation'
import {SelectCustom} from '@/components/select-custom'
import {Button} from '@/components/ui/button'
import React, {useState} from 'react'

const containerStyle = {
  background:
    'radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618',
}

const EstimatePricing = () => {
  const [tab, setTab] = useState(0)
  return (
    <div className='w-full'>
      <div
        className='text-center lg:leading-[50px] p-[30px] leading-[30px]'
        style={containerStyle}
      >
        <h1 className='lg:text-[70px] text-[32px] font-bold lg:leading-[80px] leading-[30px]'>
          Estimate Calculation
        </h1>
        <p className='text-[14px] lg:text-[18px]'>
          프로젝트 착수시 상세 개발 견적을 받을 수 있습니다 담당 개발자가
          배정되어 빠르게 개 발이 진행됩니다
        </p>
      </div>
      <div className='flex flex-col xl:gap-[72px] xl:py-[60px] xl:flex-row md:gap-[60px]'>
        <div className='xl:border-[#1e2736] xl:border-[1px] xl:rounded-[16px] xl:w-fit xl:py-[16px] xl:h-fit hidden xl:inline-block'>
          <p
            className={`px-[32px] py-3 w-[238px] ${
              tab === 0 ? 'bg-gradient-to-b from-[#396FFD] to-[#0744E6]' : ''
            }`}
            onClick={() => setTab(0)}
          >
            UI/UX 디자인
          </p>
          <p
            className={`px-[32px] py-3 ${
              tab === 1 ? 'bg-gradient-to-b from-[#396FFD] to-[#0744E6]' : ''
            }`}
            onClick={() => {
              console.log(8888)
              setTab(1)
            }}
          >
            APP 개발
          </p>
        </div>
        <div className='xl:hidden md:flex hidden md:gap-6'>
          <p
            className={`px-[20px] py-3 border-[#1e2736] border-[1px] rounded-[12px] w-fit font-semibold text-[14px] cursor-pointer ${
              tab === 0 ? 'bg-gradient-to-b from-[#396FFD] to-[#0744E6]' : ''
            }`}
            onClick={() => {
              setTab(0)
            }}
          >
            UI/UX 디자인
          </p>
          <p
            className={`px-[20px] py-3 border-[#1e2736] border-[1px] rounded-[12px] w-fit font-semibold text-[14px] cursor-pointer ${
              tab === 1 ? 'bg-gradient-to-b from-[#396FFD] to-[#0744E6]' : ''
            }`}
            onClick={() => {
              setTab(1)
            }}
          >
            APP 개발
          </p>
        </div>
        <div className='w-full xl:hidden md:hidden lg:hidden mb-10'>
          <SelectCustom />
        </div>
        <div className='flex flex-col gap-10 '>
          <div>
            <label htmlFor='' className='mb-6 flex text-[20px] font-bold'>
              슬뎃놈
            </label>
            <div className='flex gap-6 flex-wrap'>
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
            </div>
          </div>

          <div>
            <label htmlFor='' className='mb-6 flex text-[20px] font-bold'>
              구현할 페이지 분량
            </label>
            <div className='flex gap-6 flex-wrap'>
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
              <CardEstimateCalculation />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center py-5'>
        <div>
          <p className='font-semibold text-sm sm:text-[18px] mb-2'>예상 견적</p>
          <div>
            <span className='bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent font-semibold text-[18px] sm:text-[28px]'>
              9600
            </span>{' '}
            <span className='text-sm text-[#98A1B6] sm:text-[18px]'>
              만 원 (예상 기간 7개월)
            </span>{' '}
          </div>
        </div>
        <Button>견적 보기</Button>
      </div>
    </div>
  )
}

export default EstimatePricing
