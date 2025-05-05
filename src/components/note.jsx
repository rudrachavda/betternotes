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
                  <h1 className='Titlestyle'>Eagle Scout</h1>
                </div>
                <div className='SubTitle'>
                  <h3 className='SubTitlestyle'>Detailed Project</h3>
                </div>
              </div>

              <div className='contentText'>
                <div className='contentTextcontainer'>
                  <div className='contentTextwrap'>
                    <p className='contentTextstyle'>
                      Since 2017, I have been a part of the Boy Scouts, a
                      journey that has shaped me in countless ways. On May 2,
                      2024, I proudly earned the rank of Eagle Scout as a member
                      of Troop 537 in Tracy. Achieving this rank required years
                      of dedication, learning, and service. One of the final and
                      most significant milestones on this path was completing my
                      Eagle Scout Service Project—a project that not only
                      demonstrated my leadership skills but also contributed to
                      my community in a meaningful way.
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p className='contentTextstyle'>
                      For my project, I chose to construct three picnic tables
                      for Sycamore Grove Park in Livermore, California. These
                      tables were designed with simplicity and durability in
                      mind. Made primarily from redwood, they provide natural
                      weather resistance, eliminating the need for additional
                      sealants or paint. The sturdy construction ensures
                      long-term support for visitors who come to enjoy the
                      park’s serene environment.
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p className='contentTextstyle'>
                      The process of building these tables involved careful
                      planning and coordination. I used carriage bolts to
                      securely fasten the wooden planks, ensuring stability and
                      longevity. With the assistance of park rangers, the tables
                      were placed in strategic locations along the Arroyo Del
                      Valle Regional Trail, a well-traveled path frequented by
                      both youth and elderly visitors. The exact placement was
                      chosen based on the needs of the park’s beneficiaries,
                      ensuring the best use of these new seating areas.
                    </p>
                  </div>

                  <div className='contentCard'>
                    <div className='contentCardTitle'>
                      <h3 className='contentCardTitlestyle'>My Project</h3>
                    </div>

                    <div className='contentCardSubtitle'>
                      <p className='contentTextstyle'>
                        - Three Redwood Benches
                      </p>
                    </div>

                    <div className='contentcardimagecontainer'>
                      <div className='contentcardImageratio'>
                        <div className='contentcardImage'>
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
                        </div>
                      </div>
                    </div>

                    <div className='contentCardgradient' id='first'></div>
                  </div>

                  <div className='contentTextwrap'>
                    <p className='contentTextstyle'>
                      The first step in constructing the picnic tables was
                      gathering all necessary materials. Once the materials were
                      purchased, I started by cutting the 1.5 by 5.5 by 12-foot
                      planks into three groups of four segments, each measuring
                      three feet. These segments would form the legs of each
                      table. After acquiring all the materials, I sorted them
                      based on type, ensuring I had the correct planks: 2 by 5.5
                      inches and 2 by 3.5 inches. Next, I prepared the
                      workspace—my garage—by laying down plastic wrapping on the
                      floor. While not strictly necessary, this helped with
                      easier cleanup of wood shavings, which could later be
                      swept or vacuumed.
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p className='contentTextstyle'>
                      With the workspace ready, I moved on to cutting the
                      corners of the wood pieces designated for the table
                      supports and legs. This step required an electric saw,
                      which was handled only by adults and older volunteers. For
                      younger volunteers, I provided smaller saws for cutting
                      smaller wood pieces, and for those too young to handle
                      tools, I assigned them to cleaning wood shavings and
                      maintaining the worksite.
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p className='contentTextstyle'>
                      Once the wood pieces were cut and aligned, I proceeded to
                      drill holes for the carriage bolts and nuts. After
                      verifying that the holes were properly aligned, we sanded
                      all the wood pieces to ensure a smooth finish. Sanding was
                      done by hand using sandpaper, with an automatic sanding
                      machine available for use by older adolescents and adults.
                    </p>
                  </div>

                  <div className='contentTextwrap'>
                    <p className='contentTextstyle'>
                      After completing the sanding process, we carefully aligned
                      the wood pieces again and secured them using carriage
                      bolts, washers, and hex nuts. This marked the completion
                      of the first picnic table. The first table served as a
                      blueprint for constructing the remaining two tables,
                      ensuring consistency in measurements and design.
                    </p>
                  </div>
                </div>
              </div>

              <div className='contentTeam'>
                <div className='contentTeamsection'>
                  <p className='contentTeamtitle'>Timeline</p>
                  <p className='contentTeamtext'>November 2023</p>
                  <p className='contentTeamtext'>March 2024</p>
                </div>

                <div className='contentTeamsection'>
                  <p className='contentTeamtitle'>Role</p>
                  <p className='contentTeamtext'>Project Lead</p>
                </div>

                <div className='contentTeamsection'>
                  <p className='contentTeamtitle'>Recognition</p>
                  <p className='contentTeamtext'>Congressional</p>
                  <p className='contentTeamtext'>Presidential</p>
                  <p className='contentTeamtext'>City</p>
                </div>

                <div className='contentTeamsection'>
                  <p className='contentTeamtitle'>Team</p>
                  <p className='contentTeamtext'>Volunteers</p>
                  <p className='contentTeamtext'>Myself</p>
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
