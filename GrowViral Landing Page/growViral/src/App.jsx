import background2 from './background2.jpg'

function App() {

  return (
    <body className="App">

     <div className="top-back">
      <nav>
        <div className="logo">
          <h3 className="logoH3">Grow Viral </h3>
        </div>

        <div className="menu">
          <p className='page-link'><span>Home</span></p>
          <p className='page-link'>Service</p>
          <p className='page-link'>Blog</p>
          <p className='page-link'>Portfolio</p>
          <p className='page-link'>Pricing</p>
        </div>

        <div className="contactus">
          <button className="contactusbtn">Contact Us</button>
        </div>
      </nav>
     </div>


    
     <div className="top-forward" style={{backgroundImage: `url(${background2})`}}>
     <div id="overlay"></div>
     
    <div className="content1">
    <p className="crawl">EXPERIENCE <span>VIRAL SUCCESS</span> WITH  <br /> <span>GROWVIRAL</span></p>
      <p className="crawl2">Your Trusted Social Media Marketing Agency with Over 5 Years+ <br /> of Proven Results</p>
    </div>

      <div className="buttons">
        <button className="bookacall">Book a Call</button>
        <button className="watchvideo"><i class="bi bi-play-circle"></i>Watch Video</button>
      </div>
     </div>

     <div className="rectangles">
      <div className="rectangle1">
        <span><h3 className="para">5 years+</h3></span>
        <p className="crawl2 paracrawl">of successful journey of this <br /> agency</p>
      </div>

      <div className="rectangle2">
      <span><h3 className="para">500+</h3></span>
      <p className="crawl2 paracrawl">People and brands have worked <br /> with us</p>
      </div>
      <div className="rectangle3">
      <span><h3 className="para">800+</h3></span>
      <p className="crawl2 paracrawl">Successful projected built and <br /> completed</p>
      </div>
     </div>
     {/* section2 begins */}
     <div className="part2">
    <div className="flex1">
      <p className="aboutgrow"><span>About Grow Viral</span></p>
      <p className="crawl3"><span>GrowViral</span> has been making content go viral with our expert touch. Established officially in 2018, we've been delivering top-quality service, generating sales, and providing value for over 5 years. As a full-fledged social media marketing agency, we've helped 70+ businesses, from individuals to corporations, establish their authority in their niches and maintain stability on social media.</p>
      <p className='readmore'>Read More</p>
    </div>

    <div className="flex2">
      
     <div className="grid">
          <div className="square1 square"></div>
          <div className="square2 square"></div>
     

        <div className="center"><p>Grow Viral</p></div>

      
            <div className="square3 square"></div>
            <div className="square4 square"></div>
      </div>
    </div>
     </div>

     {/* part 3 begins */}

     <div className="part3">
      <div className="twoparts">
        <div className="servicesheading">
          <h3>Services <span>Grow Viral</span> Offers You</h3>
        </div>

        <div className="crawl4">
          <ul>
            <p className='listhead'>At Grow Viral Media we have two main agendas which are:</p>
            <li>Create viral contents that resonates with your audience.</li>
            <li>Grow your business through social media for you.</li>
          </ul>

        </div>
      </div>

      <p className='ourservices'>OUR SERVICES</p>

      <div className="flexbox3">
        <div className="box1 box">
          <h2 className='number'>01</h2>
          <h4>Content Creation</h4>
          <p className='box-text'> We create captivating contents that is designed to go viral and capture your audience's attention on various social media platform.</p>
        </div>

        <div className="box2 box">
        <h2 className='number'>02</h2>
        <h4>Social Media Growth</h4>
        <p className='box-text'> We help you grow your social media presence by implementing effective strategies to increase your followers, engagement, and reach.</p>
        </div>

        <div className="box3 box">
        <h2 className='number'>03</h2>
        <h4>Weekly Report</h4>
        <p className='box-text'> We provide detailed weekly reports that outline the performance of your social media accounts, giving you insights on the progress of your campaigns.</p>
        </div>
      </div>

      <div className="flexbox2">
        <div className="box4 box"> 
        <h2 className='number'>04</h2>
        <h4>Video production</h4>
        <p className='box-text'> Our professional video production services create high-quality videos that convey your message in a visually appealing way.</p>
        </div>

        <div className="box5 box">
          <h2 className='number'>05</h2>
          <h4>Video Marketing</h4>
        <p className='box-text'> We develop video marketing strategies to promote your content across various platforms, maximizing its reach and impact.</p>
          </div>
      </div>

     </div>

    </body>
  )
}

export default App
