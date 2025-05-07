import React from 'react'

const SectionElement = ({ title, items }) => {
  return (
    <div className="contentTeamsection">
      <p 
        className="contentTeamtitle" 
        contentEditable 
        suppressContentEditableWarning={true}
        onBlur={(e) => {
          // Handle title update if needed
        }}
      >
        {title}
      </p>
      {items.map((item, index) => (
        <p
          key={index}
          className="contentTeamtext"
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(e) => {
            // Handle item update if needed
          }}
        >
          {item}
        </p>
      ))}
      <button
        className="add-item-btn"
        onClick={() => {
          // Handle adding new item if needed
        }}
      >
        + Add Item
      </button>
    </div>
  )
}

export default SectionElement