import React from 'react'
import footerLinksData from '../../data/footerLinksData'

function FooterLinks() {
  return (
    <div className="bg-gray-800 text-white py-12 px-6 flex justify-center border-b border-[#3a4553]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24 w-full max-w-5xl">
        {footerLinksData.map((section) => (
          <div key={section.title} className="flex flex-col space-y-2">
            <h3 className="font-bold text-[16px] mb-2">{section.title}</h3>
            {section.links.map((link) => (
              <a 
                key={link.label} 
                href={link.url} 
                className="text-[14px] text-gray-300 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterLinks