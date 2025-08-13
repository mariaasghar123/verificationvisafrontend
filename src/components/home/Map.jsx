import React from 'react';

export default function Map() {
  return (
    <div className="w-full px-0 md:px-16 lg:px-32 mt-5">
      <div className="w-full flex justify-content-center h-[300px] md:h-[400px] lg:h-[500px] md:rounded-2xl">
        <iframe
          title="Google Map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67409129784!2d-79.54286306931621!3d43.71812280756121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1755106980825!5m2!1sen!2s"
          className='w-100 w-md-80'
          style={{ height: "300px", border: 0, maxWidth: "1600px" }}
          height="100%"
          display='flex'
          justifyContent='center'
          alignItems= 'center'
          // style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
