import React from 'react'

export default function Logos() {
  return (
    <div>
      <div>
        {/* add logos here  */}
        <div className="flex mx-auto col-12 col-sm-6 col-md-4 justify-content-center items-center gap-4 p-4" >
          <img src="/media/images/Eden_Foods_logo.png" alt="Logo 1" className="img-fluid" style={{ maxWidth: "200px" }}/>
          <img src="/media/images/mapleleaf.jpg" alt="Logo 2" className="img-fluid" style={{ maxWidth: "200px" }}/>
          <img src="/media/images/agfoods.png" alt="Logo 3" className="img-fluid" style={{ maxWidth: "100px" }}/>
        </div>
      </div> {/* ← yeh line galat thi */}
    </div>
  )
}
