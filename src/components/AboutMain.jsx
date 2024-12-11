import React from 'react'
import { Link } from 'react-router-dom'

function AboutMain() {
  return (
    <div>
      <div className='bg-[url("assets/images/about-us/about-us.png")] bg-cover bg-center h-[450px] mb-8'>
      </div>

      <div className="container">
        <h3 className='text-2xl font-bold mb-6'>About us</h3>
        <p className='text-gray-500 leading-[30px]'>We may automatically track certain information about you based upon your behavior on the website. We use this information to do internal research on our users’ demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website.<span className='font-black'> We may also  share your Mobile IP/Device IP with third party(ies) and to the best of our knowledge, be-life and representations given to us by these third party(ies) this information is not stored.</span> <br /> <br />

          Our Privacy Policy is incorporated into the Terms and Conditions of Use of the website/app, and is subject to change from time to time without notice. It is strongly recommended that you periodically review our Privacy Policy as posted on the App/Web. <br /> <br />

          Should you have any clarifications regarding this Privacy Policy, please do not hesitate to contact us at  <span className='text-theme'>info@borobazar.com</span> .</p>
        <div className="grid grid-cols-2 gap-2 my-8">
          <div>
            <img src="assets/images/about-us/1.webp" alt="about-us" />
          </div>
          <div>
            <img src="assets/images/about-us/2.webp" alt="about-us" />
          </div>
        </div>

        <p className='text-gray-500 leading-[30px]'>To protect against the loss, misuse and alteration of the information under its control, the Company has in place appropriate physical, electronic and managerial procedures. For example, the Company servers are accessible only to authorized personnel and your information is shared with employees and authorized personnel on a need to know basis to complete the transaction and to provide the services requested by you. Although the Company endeavour to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using the website, you agree that the Company will have no liability for disclosure of your information due to errors in transmission and/or unauthorized acts of third parties. <br /><br />

          Please note that the Company will not ask you to share any sensitive data or information via email or telephone. If you receive any such request by email or telephone, please do not respond/divulge any sensitive data or information and forward the information relating to the same to  <span className='text-theme'>info@borobazar.com</span>  for necessary action.</p>

        <div className="grid grid-cols-3 gap-2 my-8">
          <div>
            <img src="assets/images/about-us/3.webp" alt="about-us" />
          </div>
          <div>
            <img src="assets/images/about-us/4.webp" alt="about-us" />
          </div>
          <div>
            <img src="assets/images/about-us/5.webp" alt="about-us" />
          </div>
        </div>

        <p className='text-gray-500 leading-[30px]'>Built on a proprietary technology stack, the Grocers platform serves as a convergence of consumers looking for everyday essentials, partner stores who serve their needs efficiently, and manufacturers looking for a channel to reach a nation of consumers. While our technology caters to the burgeoning population of urban India, it is ready and poised to serve the next 100+ million Indians who are yet to start shopping online. <br /> <br />

          We believe the ecosystem we power can transform the lives of a billion Indians significantly over the coming decade. They will have access to everyday essentials like groceries at the best value, be able to discover products that improve their health and wellbeing, and spend more meaningful time with their families – with the assurance that their essential needs are being looked after by us. On the other side of this virtuous cycle are the millions of local businesses catering to a nation’s needs, helping create more opportunities for employment, growth, and above all, a better life.</p>

        <div className='my-8'>
          <img src="assets/images/about-us/6.webp" alt="about-us" className='w-full ob' />
        </div>

        <h3 className='text-2xl font-bold mb-6'>Be safe, be secure!!</h3>
        <p className='text-gray-500 leading-[30px] mb-3'>
          BoroBazar is leading the charge in transforming India’s vast, unorganized grocery landscape through cutting-edge technology and innovation. We believe every Indian deserves the opportunity to continually improve their life – a process that often begins at home. As part of our mission of helping consumers make healthier, better choices when buying everyday products, we make a wide range of high-quality grocery and household products accessible, affordable, and available right at their doorsteps.
        </p>

        <h3 className='text-xl font-semibold mb-6'>For media enquiries please contact us at:  <span className='text-theme'>press@borobazar.com.</span></h3>
        <p>For all other inquiries, visit our  <Link to="/contact-us" className='text-theme'>Contact Us</Link>  page.</p>

      </div>


    </div>
  )
}

export default AboutMain