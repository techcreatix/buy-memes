import React from 'react'
import Layout from '../layout/Layout'
import Banner from '../components/Banner'
import HottestCards from '../components/HottestCards'

export default function LandingPage() {
  return (
   <Layout>
   <Banner/>
   <div class="flex flex-col gap-5 lg:w-[992px] w-full mx-auto">
<h2 class="font-bold text-[32px]">Hottest</h2>
   <HottestCards/>
   </div>
   </Layout>
  )
}
