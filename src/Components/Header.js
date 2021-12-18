import React from 'react'

const Header = () => {
    return (<>
      <div class="text-center bg-light my-3">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Quiz</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><a href="https://www.iitr.ac.in/nss/index.html">Home</a></button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><a href="https://www.iitr.ac.in/nss/team.html">TEAM</a></button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
</div>
      </div>
</>
    )
}

export default Header
