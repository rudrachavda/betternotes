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
                    Title
                  </h1>
                </div>
                <div className='SubTitle'>
                  <h3
                    className='SubTitlestyle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Date
                  </h3>
                </div>
              </div>

              <div className='contentText'>
                <div className='contentTextcontainer'>
                  <div className='contentseperator' id='beginning'>
                    <div className='titleofseperator'>
                      <h3
                        className='titleofseperatorstyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        Separator Title...
                      </h3>
                    </div>

                    <div className='dateofseperator'>
                      <p
                        className='dateofseperatorstyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        Separator Date
                      </p>
                    </div>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      Insert Text...
                    </p>
                  </div>

                  <div className='contentCard'>
                    <div className='contentCardTitle'>
                      <h3
                        className='contentCardTitlestyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        Image title
                      </h3>
                    </div>

                    {/* <div className='contentcardimagecontainer'>
                      <div className='contentcardImageratio'>
                        <div className='contentcardImage'>
                          <img
                            className='contentcardImagestyle'
                            src='placeholder.jpg'
                            alt='Project Image'
                          />
                        </div>

                        <div className='contentcardImage'>
                          <img
                            className='contentcardImagestyle'
                            src='placeholdertwo.jpg'
                            alt='Project Image'
                          />
                        </div>
                      </div>
                    </div> */}

                    <div className='contentCardSubtitle'>
                      <p
                        className='contentTextstyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        Image sub caption...
                      </p>
                    </div>

                    <div className='contentcardimagecontainer'>
                      <div className='contentcardImageratio'></div>
                    </div>

                    {/* <div className='contentCardgradient' id='first'></div> */}
                  </div>

                  <div className='contentseperator' id='beginning'>
                    <div className='titleofseperator'>
                      <h3
                        className='titleofseperatorstyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        Separator Title...
                      </h3>
                    </div>

                    <div className='dateofseperator'>
                      <p
                        className='dateofseperatorstyle'
                        contentEditable
                        suppressContentEditableWarning={true}
                      >
                        Separator Date
                      </p>
                    </div>
                  </div>

                  <div className='contentTextwrap'>
                    <p
                      className='contentTextstyle'
                      contentEditable
                      suppressContentEditableWarning={true}
                    >
                      Insert Text...
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
                    Section...
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
                  </p>
                </div>

                <div className='contentTeamsection'>
                  <p
                    className='contentTeamtitle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section...
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
                  </p>
                </div>

                <div className='contentTeamsection'>
                  <p
                    className='contentTeamtitle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section...
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
                  </p>
                </div>

                <div className='contentTeamsection'>
                  <p
                    className='contentTeamtitle'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section...
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
                  </p>
                  <p
                    className='contentTeamtext'
                    contentEditable
                    suppressContentEditableWarning={true}
                  >
                    Section Items
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
