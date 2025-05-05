import React from 'react'
import './note.css'

const Note = () => {
  return (
    <div
      className='detailedprojectpage'
      style={{ minHeight: '100vh', width: 'auto' }}
    >
      <div className='projectpagecontainer'>
        <div className='projectpagestructure'>
          <div className='projectpageimagebackground'>
            <div className='projectpageimagecontainer'>
              <div className='projectpageimagewrapper'>
                {/* <img
                  className='projectpageimagestyle'
                  src='/images/eaglepin.png'
                  alt='Your Image'
                /> */}
              </div>
            </div>
            <div className='projectpagegradient'></div>
          </div>

          <div className='projectpagecontent'>
            <div className='projectpagecontentstructure'>
              <div className='contentTitle'>
                <div className='Title'> 
                  <h1
                    className='Titlestyle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Eagle Scout
                  </h1>
                </div>
                <div className='SubTitle'>
                  <h3
                    className='SubTitlestyle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Detailed Project
                  </h3>
                </div>
              </div>

              <div className='contentseperator' id='beginning'>
                <div className='titleofseperator'>
                  <h3
                    className='titleofseperatorstyle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    The Next Big Thing
                  </h3>
                </div>

                <div className='dateofseperator'>
                  <p
                    className='dateofseperatorstyle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    April 11th, 2025
                  </p>
                </div>
              </div>

              <div className='contentText'>
                <div className='contentTextcontainer'>
                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      Since 2017, I have been a part of the Boy Scouts...
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      For my project, I chose to construct three picnic
                      tables...
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      The process of building these tables involved careful
                      planning...
                    </p>
                  </div>

                  <div className='contentCard'>
                    <div className='contentCardTitle'>
                      <h3
                        className='contentCardTitlestyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        My Project
                      </h3>
                    </div>

                    <div className='contentCardSubtitle'>
                      <p
                        className='contentTextstyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        - Three Redwood Benches
                      </p>
                    </div>

                    <div className='contentcardimagecontainer'>
                      <div className='contentcardImageratio'>
                        {/* <div className='contentcardImage'>
                          <img
                            className='contentcardImagestyle'
                            src='/images/eaglebench.jpg'
                            alt='Project Image'
                          />
                        </div>

                        <div className='contentcardImage'>
                          <img
                            className='contentcardImagestyle'
                            src='/images/workdayone.jpg'
                            alt='Project Image'
                          />
                        </div> */}
                      </div>
                    </div>

                    <div className='contentCardgradient' id='first'></div>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      The first step in constructing the picnic tables was
                      gathering...
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      With the workspace ready, I moved on to cutting...
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      Once the wood pieces were cut and aligned...
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      After completing the sanding process, we carefully
                      aligned...
                    </p>
                  </div>
                </div>
              </div>

              <div className='contentTeam'>
                <div className='contentTeamsection'>
                  <p
                    className='contentTeamtitle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Timeline
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    November 2023
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    March 2024
                  </p>
                </div>

                <div className='contentTeamsection'>
                  <p
                    className='contentTeamtitle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Role
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Project Lead
                  </p>
                </div>

                <div className='contentTeamsection'>
                  <p
                    className='contentTeamtitle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Recognition
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Congressional
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Presidential
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    City
                  </p>
                </div>

                <div className='contentTeamsection'>
                  <p
                    className='contentTeamtitle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Team
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Volunteers
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Myself
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
