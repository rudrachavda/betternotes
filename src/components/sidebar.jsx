import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div id='main'>
      <div className='outsidecontainer'>
        <div className='sidebarcontainer'>
          <div className='sidebarinsidecontainer'>
            <div className='sidebar'>
              <div className='topsidebarcontainer'>
                <div className='topsidebarcontent'>
                  {/* <a className='logoimage'>
                    <div className='svgContainer'>
                      <img
                        src='/images/macrmlogo.gif'
                        alt='Logo'
                        className='logo-image'
                      />
                    </div>
                  </a> */}

                  <div className='topsidebartextcontainer'>
                    <div className='aboutTextContainer'>
                      <h3 id='title'>
                        <Link to='/'>About</Link>
                      </h3>
                    </div>

                    <div className='projectTextContainer'>
                      <h3 id='title'>
                        <Link to='/Note'> Note </Link>
                      </h3>
                    </div>

                    <div className='CVTextContainer'>
                      <h3 id='title'>
                        <Link to='/Experience'>CV</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className='midsidebarcontent'></div>

              <div className='lowsidebarcontent'>
                <div className='contactcontainer'>
                  <p className='interfacetext'> CONTACT </p>
                </div>

                <div className='contactTags'>
                  <div className='tag'>
                    <p className='tagstyle'>
                      <a
                        href='mailto:rudrabchavda@gmail.com'
                        className='tagstyle'
                      >
                        Mail
                      </a>
                    </p>
                  </div>
                  <div className='tag'>
                    <p className='tagstyle'>
                      <a
                        href='https://github.com/rudrachavda'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='tagstyle'
                      >
                        Github
                      </a>
                    </p>
                  </div>
                  <div className='tag'>
                    <p className='tagstyle'>
                      <a
                        href='https://www.linkedin.com/in/rudra-chavda-8769ab26a/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='tagstyle'
                      >
                        Linkedin
                      </a>
                    </p>
                  </div>
                  <div className='tag'>
                    <p className='tagstyle'>
                      <a
                        href='/assets/RudraResume.pdf'
                        className='tagstyle'
                        download='RudraResume.pdf'
                      >
                        read.cv
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
