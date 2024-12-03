import React from 'react';

import AboutHomeComponent from './AboutHomeComponent';

import { FaMoneyCheck } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import { FaStickerMule } from "react-icons/fa";

const AboutHome = () => {
  return (
    <div className='grid grid-cols-3 gap-11 p-20 pt-8 pb-10 '>
        <AboutHomeComponent Component={FaMoneyCheck} title="Your pick of rides at low prices" description="No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices." />
        <AboutHomeComponent Component={MdPermIdentity} title="Trust who you travel with" description="We take the time to get to know each of our members and car partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform." />
        <AboutHomeComponent Component={FaStickerMule} title="Scroll, click, tap and go!" description="Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes." />
    </div>
  )
}

export default AboutHome
