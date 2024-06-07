import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Pre register now !</h2>
          <p className="regular-32 text-gray-10">Get 7 days free trial</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
          <Button type="button" title="Pre Register" variant="btn_green" />

          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/getApp.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp