import React from "react";
import "./maincanvas.css";

const Main = () => {
    return (
        <div className="detailedprojectpage" style={{ minHeight: "100vh", width: "auto" }} >
            <div className="projectpagecontainer">
                <div className="projectpagestructure">
                    <div className="projectpagecontent">
                        <div className="projectpagecontentstructure">
                            <div className="contentTitle">
                                <div className="Title">
                                    <h1
                                        className="Titlestyle"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Title...
                                    </h1>
                                </div>
                                <div className="SubTitle">
                                    <h3
                                        className="SubTitlestyle"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Date
                                    </h3>
                                </div>
                            </div>

                            <div className="contentseperator" id="beginning">
                                <div className="titleofseperator">
                                    <h3
                                        className="titleofseperatorstyle"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Separator
                                    </h3>
                                </div>

                                <div className="dateofseperator">
                                    <p className="dateofseperatorstyle" contentEditable suppressContentEditableWarning={true} >
                                        Date
                                    </p>
                                </div>
                            </div>

                            <div className="contentText">
                                <div className="contentTextcontainer">
                                    <div className="contentTextwrap">
                                        <p className="contentTextstyle" contentEditable suppressContentEditableWarning={true} >
                                            Text...
                                        </p>
                                    </div>

                                    <div className="contentCard">
                                        <div className="contentCardTitle">
                                            <h3
                                                className="contentCardTitlestyle"
                                                contentEditable
                                                suppressContentEditableWarning={true}
                                            >
                                                Image Title
                                            </h3>
                                        </div>

                                        <div className="contentCardSubtitle">
                                            <p className="contentTextstyle" contentEditable suppressContentEditableWarning={true} >
                                                Image Subcaption
                                            </p>
                                        </div>

                                        {/* <div className="contentcardimagecontainer">
                                            <div className="contentcardImageratio">
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
                                        </div> */}

                                        {/* <div className='contentCardgradient' id='first'></div> */}
                                    </div>

                                    <div className="contentseperator" id="beginning">
                                        <div className="titleofseperator">
                                            <h3
                                                className="titleofseperatorstyle"
                                                contentEditable
                                                suppressContentEditableWarning={true}
                                            >
                                                Separator
                                            </h3>
                                        </div>

                                        <div className="dateofseperator">
                                            <p className="dateofseperatorstyle" contentEditable suppressContentEditableWarning={true} >
                                                Date
                                            </p>
                                        </div>
                                    </div>

                                    <div className="contentTextwrap">
                                        <p
                                            className="contentTextstyle"
                                            contentEditable
                                            suppressContentEditableWarning={true}
                                        >
                                            Text...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="contentTeam">
                                <div className="contentTeamsection">
                                    <p
                                        className="contentTeamtitle"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section 1
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section Item
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section Item
                                    </p>
                                </div>

                                <div className="contentTeamsection">
                                    <p
                                        className="contentTeamtitle"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section 2
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Project Lead
                                    </p>
                                </div>

                                <div className="contentTeamsection">
                                    <p
                                        className="contentTeamtitle"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section 3
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section Item
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section Item
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section Item
                                    </p>
                                </div>

                                <div className="contentTeamsection">
                                    <p
                                        className="contentTeamtitle"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section 4
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section Item
                                    </p>
                                    <p
                                        className="contentTeamtext"
                                        contentEditable
                                        suppressContentEditableWarning={true}
                                    >
                                        Section Item
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
