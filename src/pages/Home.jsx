import React, { useContext, useEffect } from 'react';
import img from '../Images/HomeImg.jpg'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpeg'
import img3 from '../Images/img3.jpeg'
import './Home.css'
import NoteContext from '../Context/NoteContext';
function Home() {
  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle("")
  }, [])


  return (

    <div>
      <marquee className="marquee" >Have you ever made an impulsive purchase just because you were offered a good discount? Or felt encouraged to buy from a brand that is new to you but offers something cheaper?</marquee>
      <div>
        <img src={img} alt="img" className='images' />
      </div>
      <div id='maindiv'>
        <div>
          <img id='img1' src={img1} alt="img1" />
        </div>
        <div>
          <img id='img2' src={img2} alt="img2" />
        </div>
        <div >
          <img id='img3' src={img3} alt="img3" />
        </div>
      </div>
      <div className='content'>
        <div className='contentArea' >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam iusto doloremque nobis. Obcaecati at culpa repudiandae dolore vitae veniam ea dignissimos cumque. Quaerat maxime optio dolorem ipsa sed rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit ullam temporibus aspernatur nulla iure accusamus labore quos ex suscipit. Voluptatibus praesentium, esse quae consequatur veniam cupiditate vero ea voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem quo consectetur earum, et autem sequi iure libero consequatur quod corrupti similique architecto, tenetur in non ipsa quisquam, reprehenderit sit?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod temporibus, eveniet id, incidunt illo saepe aperiam harum molestias optio fuga cum nobis ipsa blanditiis perferendis aliquam at reiciendis! Ducimus, voluptatem?
          </p>
        </div>
        <div className='sideDiv'>
          <h2>Contact US</h2> <hr />
          <tr className='th' >
            <th>Name :-</th>
            <td>Anurag Prajpati</td>
            <th>Email :-</th>
            <td>anuragyuvasoft386@gmail.com</td>
            <th>Mobile No :-</th>
            <td>+91-6265336686</td>
            <th>Address :-</th>
            <td>715,Pukhraj Corporation Navlakha,Indore (M.P)</td>
          </tr>
          <br />
         </div>
      </div>

       <div className='footer' >

      <div class="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="text-white mb-4">Get In Touch</h4>
              <h2 class="text-primary mb-4"><i class="fa fa-car text-white me-2"></i>Your Chice</h2>
              <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>715,Pukhraj Corp.  Indore (M.P)</p>
              <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 6265336686</p>
              <p class="mb-2"><i class="fa fa-envelope me-3"></i>anuragyuvasoft386@gmail</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Quick Links</h4>
              <a class="btn btn-link" href="/about">About Us</a>
              <a class="btn btn-link" href="">Contact Us</a>
              <a class="btn btn-link" href="">Messages</a>
              <a class="btn btn-link" href="">Deshboard</a>
              <a class="btn btn-link" href="">Settings</a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Popular Links</h4>
              <a class="btn btn-link" href="/about">About Us</a>
              <a class="btn btn-link" href="">Contact Us</a>
              <a class="btn btn-link" href="">Messages</a>
              <a class="btn btn-link" href="">Deshboard</a>
              <a class="btn btn-link" href="">Settings</a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="text-light mb-4">Newsletter</h4>
              <form action="">
                <div class="input-group">
                  <input type="text" class="form-control p-3 border-0" placeholder="Your Email Address" />
                    <button class="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <h6 class="text-white mt-4 mb-3">Follow Us</h6>
              <div class="d-flex pt-1" >
                <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-youtube"></i></a>
                <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End  */}


      {/* Copyright Start  */}
      <div class="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
               {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.  */}
              Designed By <a href="https://htmlcodex.com">React JS</a>
              <br />Distributed By: <a href="https://themewagon.com" target="_blank">Anurag Prajpati</a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End  */}
       </div>

    </div>
  );
}

export default Home;

