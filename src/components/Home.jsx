import React from 'react'

function Home() {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Third slide"/>
    </div>
  </div>
  <link class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </link>
  <link class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    
  </link>
</div>
    </div>
  )
}

export default Home
