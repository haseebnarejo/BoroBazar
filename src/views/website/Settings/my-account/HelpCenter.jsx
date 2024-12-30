import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function HelpCenter() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div className='mb-10'>
        <h3 className='font-bold text-2xl xxl:text-4xl'>
          Help Center
        </h3>
      </div>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`text-base border-b-0 transition-colors ${open === 1 ? "text-theme" : ""
            }`}
        >
          How do I create an account??
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`text-base border-b-0 transition-colors ${open === 2 ? "text-theme" : ""
            }`}
        >
          How to contact with Customer Service?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4 mb-2">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`text-base border-b-0 transition-colors ${open === 3 ? "text-theme" : ""
            }`}
        >
          App installation failed, how to update system information?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`text-base border-b-0 transition-colors ${open === 4 ? "text-theme" : ""
            }`}
        >
          App installation failed, how to update system information?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`text-base border-b-0 transition-colors ${open === 2 ? "text-theme" : ""
            }`}
        >
          How to contact with Customer Service?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4 mb-2">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`text-base border-b-0 transition-colors ${open === 3 ? "text-theme" : ""
            }`}
        >
          App installation failed, how to update system information?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.

        </AccordionBody>
      </Accordion>
    </div>
  )
}

export default HelpCenter