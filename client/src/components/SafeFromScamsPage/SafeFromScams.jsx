import React from 'react';

import Footer from '../Footer/Footer';

import { FaBan,FaMoneyCheck } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const SafeFromScams = () => {
  return (
    <div className='pt-[4.5em]'>
        <section className="h-[25em] bg-[#0F4FB4] p-[7em] pt-[2em] pb-[3em] grid grid-cols-[6fr_5fr]">
          <div className='flex justify-center items-center'>
            <img className='h-[90%] w-[90%] rounded-2xl' src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-illustration-download-in-svg-png-gif-file-formats--support-pack-services-illustrations-7328703.png?f=webp" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-semibold text-white">
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
           <p className='text-gray-500'>Even if the website sent by fake drivers looks like Pooool’s, do not transfer money outside our app.</p>
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
              You can reply: "I have already paid the service fee on Pooool's
              app."
            </p>
          </div>
        </div>
      </section>

      <div>
      <h2 className="p-[1em] pt-4 pb-4 text-4xl font-semibold text-blue-950 text-center">Online security tips</h2>
      <section className='bg-[#FFFFFF] p-[8em] pt-0 pb-0'>
        <div className='p-7'> 
          <h2 className="font-semibold mb-2 text-blue-950">Password quality
          </h2>
          <p className="text-gray-500 mb-1 text-sm">Your password should be at least 8 characters with a mix of at least 1 letter, 1 number, and 1 special character (e.g. #, @, &). Having complex and unique passwords on all your accounts, not just your Pooool account, will greatly reduce the chances of having security issues.</p>
          
        </div> 
        <hr />
        </section>

      <section className="bg-[#FFFFFF] p-[8em] pt-0 pb-0">
          <div className='p-7'>
            <h2 className="font-semibold mb-2 text-blue-950">Online safety</h2>
          <p className="text-gray-500 mb-1 text-sm">A few tips to help keep you safe online:</p>
          <ul className="list-disc ml-5">
            <li>
              <p className="text-gray-500 mb-1 text-sm">
                  Check for <strong>“https://”</strong> and <span className="font-bold text-yellow-500">🔒</span> at the
                  beginning of a website: This means your connection is secure.
              </p>
            </li>
            <li>
              <p className="text-gray-500 mb-1 text-sm">
                Check if the URL matches the Pooool website: A link in a message could look right, but if the URL
                doesn’t match the official website (
                <a
                  href="website link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  website link
                </a>
                ) — it’s a scam. Always check the page's entire URL before entering your login or payment info.
              </p>
            </li>
            <li>
              <p className="text-gray-500 mb-1 text-sm">
                Use only your device: Don’t create accounts or enter passwords on a device that’s not yours — like a
                friend’s phone or internet cafe.
              </p>
            </li> 
            <li>
              <p className="text-gray-500 mb-4 text-sm">
                Update your software and devices: These updates often address security risks and introduce new security
                protections.
              </p>
            </li>    
          </ul>  </div>
          <hr/>
      </section>

        {/* Section: Off-site payments and messages */}
        <section className='bg-[#FFFFFF] p-[8em] pt-0 pb-0 mb-1'>
        <div className='p-7'> 
          <h2 className="font-semibold mb-2 text-blue-950">Off-site payments and messages</h2>
          <p className="text-gray-500 mb-1 text-sm">Tips to keep you safe while exchanging messages with other members:</p>
          <ul className="list-disc ml-5">
            <li><p className="text-gray-500 mb-1 text-sm">Only exchange on Pooool: Do not exchange on other platforms (WhatsApp, Messenger) before booking.</p></li>
            <li><p className="text-gray-500 mb-1 text-sm">Keep your personal info secure: Never share your personal information like phone number, email, and payment details before booking a ride.</p></li>
            <li><p className="text-gray-500 mb-1 text-sm">
              Don’t follow links in messages: Never click on or open a link in suspicious or unsolicited messages on the
              Pooool platform or third-party messaging apps.
            </p></li>
          </ul>
        </div> 
        <hr />
        </section>

      </div>
       <Footer /> 
      </div>
  )
}

export default SafeFromScams;
