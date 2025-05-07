import React from 'react'

const ImageElement = ({ title, subtitle }) => {
  return (
    <div className="contentCard">
      <div className="contentCardTitle">
        <h3
          className="contentCardTitlestyle"
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => {
            // Handle title update if needed
          }}
        >
          {title}
        </h3>
      </div>
      <div className="contentCardSubtitle">
        <p 
          className="contentTextstyle" 
          contentEditable 
          suppressContentEditableWarning={true}
          onBlur={(e) => {
            // Handle subtitle update if needed
          }}
        >
          {subtitle}
        </p>
      </div>
      <div className="contentcardimagecontainer">
        <div className="contentcardImageratio">
          <div className='contentcardImage'>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                // Handle image upload if needed
              }}
              style={{ display: 'none' }}
              id="image-upload"
            />
            <label htmlFor="image-upload" className="image-upload-label">
              Click to upload image
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageElement