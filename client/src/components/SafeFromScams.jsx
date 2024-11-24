import React from 'react';

import { FaBan,FaMoneyCheck } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const SafeFromScams = () => {
  return (
    <div className='pt-[4.5em]'>
        <section className="h-[25em] bg-[#00AFF5] p-[10em] pt-[3em] pb-[3em] grid grid-cols-2">
          <div>
            <img className='h-[100%] w-[100%] rounded-2xl' src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-illustration-download-in-svg-png-gif-file-formats--support-pack-services-illustrations-7328703.png?f=webp" alt="" />
          </div>
          <div className="flex items-center justify-center">
          <h1 className="text-3xl font-semibold text-white  ">
            Help us keep you safe from scams
          </h1>
          </div>   
        </section>

      {/* What you can do to avoid scams */}
      <section className="bg-[#FFFFFF] p-[8em] pt-6 pb-6">
        <h2 className="p-[1em] pt-4 pb-4 text-4xl font-semibold text-blue-950">
          What you can do to avoid a scam
        </h2>
        <div className="p-[2em] pt-0 pb-0 grid grid-cols-3 gap-10">
          <div>
            <FaBan className='text-4xl text-gray-500 mt-2 mb-4' />
            <p className=" font-semibold text-blue-950 mt-1 mb-1 ">Never visit links sent by drivers</p>
            <p className='text-gray-500'>
                Some fake drivers could try to make you pay outside our app by sending a link, a phone number or an email address.
            </p>
          </div>
          <div>
            <FaMoneyCheck className='text-4xl text-gray-500 mt-2 mb-4' />
            <p className=" font-semibold text-blue-950 mt-1 mb-1 ">For cash-only rides, always pay in the car</p>
            <p className='text-gray-500'>Scammers are getting increasingly sophisticated in their attempts to get your money or payment details. Always pay in cash, in the car, upon departure.</p>
          </div>
          <div>
            <IoCarSport className='text-4xl text-gray-500 mt-2 mb-4' />
            <p className=" font-semibold text-blue-950 mt-1 mb-1 ">Only pay the service fee on our app</p>
           <p className='text-gray-500'>Even if the website sent by fake drivers looks like BlaBlaCar’s, do not transfer money outside our app.</p>
          </div>
        </div>
      </section>

      {/* Scam Info Section */}
      <section className="bg-[#054652] m-[10em] mt-0 mb-0 p-6 pt-[4em] pb-[1em] text-white rounded-xl">
        <h1 className="text-4xl font-semibold mb-4">
          How scammers try to get your money or payment details
        </h1>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className='h-[35%] flex items-center justify-center mb-5'>
              <img className='h-full w-[50%]' src="https://cdni.iconscout.com/illustration/free/thumb/free-otp-security-illustration-download-in-svg-png-gif-file-formats--one-time-password-protection-identity-biometric-verification-pack-crime-illustrations-3763926.png" alt="" />
            </div>
            <p className="mb-2">By building a fake website that looks like Pooool’s</p>
            <p className="mb-4">
            Scams succeed because they look like the real thing. Scammers are getting smarter: they will try to make you visit another website, very similar to ours, that will convince you to give them your money or payment details.
            </p>
            <p className="mb-2">Make sure you’re always paying on Pooool’s app or website.</p>
          </div>
          <div>
            <div className='h-[35%] flex items-center justify-center mb-5'>
              <img className='h-full w-[50%]' src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-standing-for-her-present-profile-with-fear-shadow-behind-illustration-download-in-svg-png-gif-file-formats--imposter-syndrome-fake-winning-the-person-fakes-business-pack-illustrations-7934034.png?f=webp" alt="" />
            </div>
            <p className="mb-2">By creating fake profiles</p>
            <p  className="mb-4">
            Fake profiles are usually created just a few days or hours ago and don’t have any ratings from other members. They also often charge less than ‌other similar rides. Before or after booking the ride, they could try to contact you outside of our platform (through your phone or WhatsApp).
            </p>
            <p className="mb-2">If you think you interacted with a fake profile, you can report it.</p>
          </div>
        </div>
      </section>

      {/* What to do if someone tries to scam */}
      <section className="bg-[#FFFFFF] p-[8em] pt-6 pb-6">
        <h2 className="p-[1em] pt-4 pb-4 text-4xl font-semibold text-blue-950">
          What to do if you think someone is trying to scam you
        </h2>
        <div className="p-[2em] pt-0 pb-0 grid grid-cols-3 gap-10">
          <div>
            <p className=" font-semibold text-blue-950 mt-1 mb-1 ">
              If the driver sends you a link to pay for your ride
            </p>
            <p className='text-gray-500'>
              You can reply: "I’m uncomfortable using the link you sent. I will
              pay in cash in the car."
            </p>
          </div>
          <div>
            <p className=" font-semibold text-blue-950 mt-1 mb-1 ">
              If the driver insists on getting paid in advance
            </p>
            <p className='text-gray-500'>
              You can reply: "Don’t worry, I will pay on the day of departure."
            </p>
          </div>
          <div>
            <p className=" font-semibold text-blue-950 mt-1 mb-1 ">
              If the driver asks you for additional charges
            </p>
            <p className='text-gray-500'>
              You can reply: "I have already paid the service fee on BlaBlaCar's
              app."
            </p>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default SafeFromScams;
