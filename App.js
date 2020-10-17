import React from 'react'
// import Team from './Team';
import Photo1 from './photo1.png'
import Photo2 from './photo2.png'
import Photo3 from './photo3.png'
import Photo4 from './photo4.png'
import Photo5 from './photo5.png'
import Photo6 from './photo6.png'



 function App() {
      return (
          <div>
              <header>
                  <h1 className="iamge_header">The creative crew</h1>
                  <h3 className="sub_image_header">Who we are</h3>
                  <p className="image_paragraph">We are team of creatively divers. Deiven. innovative indivudials working in various location from the world</p>
              </header>
              <div>
                  <nav>
                      <ul className= "image_list">
                          <li className="images" className="bill">
                              <img src={Photo1} alt="one" style={{width: '90%'}} />
                              <div className="image_role"> Product owner</div>
                              <p className="iamge_name"> Bill Mahoney </p>
                          </li>
                          <li className="images" className="saba">
                              <img src={Photo2} alt="two" style={{ width: '90%' }} />
                              <div className="image_role"> Art director </div>
                              <p className="iamge_name"> Saba Cabrera </p>
                          </li>
                          <li className="images" className="le">
                              <img src={Photo3} alt="three" style={{ width: '90%' }} />
                              <div className="image_role"> Teach lead </div>
                              <p className="iamge_name"> Shae Le </p>
                          </li>
                          <li className="images" className="lu">
                              <img src={Photo4} alt="four" style={{ width: '90%' }} />
                              <div className="image_role"> UX disigner </div>
                              <p className="iamge_name"> Skylan Lu </p>
                          </li>
                          <li className="images" className="griff">
                              <img src={Photo5} alt="five" style={{ width: '90%' }} />
                              <div className="image_role">Developer </div>
                              <p className="iamge_name"> Griff Richard </p>
                          </li>
                          <li className="images" className="john">
                              <img src={Photo6} alt="six" style={{ width: '90%' }} />
                              <div className="image_role">Deverloper</div>
                              <p className="iamge_name"> Stan John </p>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>
      )
    }

export default App