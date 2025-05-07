import React from 'react'

const TextElement = ({ content }) => {
    return (
        <div className="contentTextwrap">
            <p className="contentTextstyle" contentEditable suppressContentEditableWarning={true}
                onBlur={(e) => {
                    // Handle content update if needed
                }}
            >
                {content}
            </p>
        </div>
    )
}

export default TextElement