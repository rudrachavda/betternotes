import React from 'react'

const SeparatorElement = ({ title, date }) => {
  return (
    <div className="contentseperator">
      <div className="titleofseperator">
        <h3 
          className="titleofseperatorstyle" 
          contentEditable 
          suppressContentEditableWarning={true}
          onBlur={(e) => {
            // Handle title update if needed
          }}
        >
          {title}
        </h3>
      </div>
      <div className="dateofseperator">
        <p 
          className="dateofseperatorstyle" 
          contentEditable 
          suppressContentEditableWarning={true}
          onBlur={(e) => {
            // Handle date update if needed
          }}
        >
          {date}
        </p>
      </div>
    </div>
  )
}

export default SeparatorElement