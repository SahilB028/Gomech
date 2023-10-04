import React from 'react'

export default function Frequently() {
  return (
  <> 
  
  <h2>Frequantly Asked Questions?</h2>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What kind of service Gomechanics offer?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      We offer a wide variety of car service for you to choose from. With GoMechanic, you can avail periodic car
servicing, wheel balancing and alignment, car denting painting services, paint protection service, custom
required repairs and even car repairs under an insurance claim.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is the basic charge for a car service with Gomechanics?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The charges for a basic car service starts at just Rs 1,999 at GoMechanic. This, however, depends on the car
make and model. You can fill in your car’s make, model and fuel type to get the best price for your car service.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Do I have to drop my car at the Workshop for my car service?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Absolutely not! When you choose GoMechanic, you choose convenience. Get doorstep pick-up and delivery
absolutely FREE of any cost. Its time for you to sit back and relax!

      </div>
    </div>
    
  </div>
  
  
</div></>
  )
}
