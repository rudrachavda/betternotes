import React, { useState, useRef, useEffect } from 'react'
import './maincanvas.css'

// Import element components
import TextElement from './elements/text'
import SeparatorElement from './elements/separator'
import ImageElement from './elements/image'
import SectionElement from './elements/section'

// Command menu items
const COMMAND_ITEMS = [
  { type: 'text', label: 'Text', icon: '📝' },
  { type: 'separator', label: 'Separator', icon: '—' },
  { type: 'image', label: 'Image', icon: '🖼️' },
  { type: 'section', label: 'Section', icon: '📑' }
]

// Create a new element based on type
const createElement = (type) => {
  switch (type) {
    case 'text':
      return { type, content: 'Start typing...' }
    case 'separator':
      return { type, title: 'Separator Title', date: 'Date' }
    case 'image':
      return { type, title: 'Image Title', subtitle: 'Image Subcaption', images: [] }
    case 'section':
      return { type, title: 'Section', items: ['Item 1'] }
    default:
      return null
  }
}

const Main = () => {
    // State for content blocks (text, separator, image)
    const [contentBlocks, setContentBlocks] = useState([])
    // State for team blocks (sections)
    const [teamBlocks, setTeamBlocks] = useState([])
    // State for command menu
    const [commandMenu, setCommandMenu] = useState({ show: false, position: null, filter: '' })
    const editorRef = useRef(null)

    // Handle key press in editor
    const handleKeyPress = (e) => {
        if (e.key === '/') {
            const selection = window.getSelection()
            const range = selection.getRangeAt(0)
            const rect = range.getBoundingClientRect()
            
            setCommandMenu({
                show: true,
                position: { top: rect.top + window.scrollY, left: rect.left + window.scrollX },
                filter: ''
            })
        } else if (commandMenu.show) {
            if (e.key === 'Escape') {
                setCommandMenu({ show: false, position: null, filter: '' })
            } else if (e.key === 'Backspace' && commandMenu.filter === '') {
                setCommandMenu({ show: false, position: null, filter: '' })
            } else if (e.key.length === 1) {
                setCommandMenu(prev => ({
                    ...prev,
                    filter: prev.filter + e.key
                }))
            }
        }
    }

    // Handle command selection
    const handleCommandSelect = (type) => {
        const newElement = createElement(type)
        if (type === 'section') {
            setTeamBlocks([...teamBlocks, newElement])
        } else {
            setContentBlocks([...contentBlocks, newElement])
        }
        setCommandMenu({ show: false, position: null, filter: '' })
    }

    // Filter command items based on input
    const filteredCommands = COMMAND_ITEMS.filter(item => 
        item.label.toLowerCase().includes(commandMenu.filter.toLowerCase())
    )

    return (
        <div className="detailedprojectpage" style={{ minHeight: "100vh", width: "auto" }} >
            <div className="projectpagecontainer">
                <div className="projectpagestructure">
                    <div className="projectpagecontent">
                        <div className="projectpagecontentstructure">
                            <div className="contentTitle">
                                <div className="Title">
                                    <h1 className="Titlestyle" contentEditable suppressContentEditableWarning={true} >
                                        Title...
                                    </h1>
                                </div>
                                <div className="SubTitle">
                                    <h3 className="SubTitlestyle" contentEditable suppressContentEditableWarning={true} >
                                        Date
                                    </h3>
                                </div>
                            </div>

                            <div className="contentText">
                                <div className="contentTextcontainer">
                                    <div className="contentTextwrap">
                                        <p 
                                            className="contentTextstyle" 
                                            contentEditable 
                                            suppressContentEditableWarning={true}
                                            onKeyDown={handleKeyPress}
                                            ref={editorRef}
                                        >
                                            Welcome to your New Note...
                                        </p>
                                    </div>

                                    {contentBlocks.map((block, index) => {
                                        switch (block.type) {
                                            case 'text':
                                                return <TextElement key={index} content={block.content} />
                                            case 'separator':
                                                return <SeparatorElement key={index} title={block.title} date={block.date} />
                                            case 'image':
                                                return <ImageElement key={index} title={block.title} subtitle={block.subtitle} />
                                            default:
                                                return null
                                        }
                                    })}
                                </div>
                            </div>

                            <div className="contentTeam">
                                {teamBlocks.map((block, index) => (
                                    <SectionElement
                                        key={index}
                                        title={block.title}
                                        items={block.items}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Command Menu */}
            {commandMenu.show && (
                <div
                    className="command-menu"
                    style={{
                        position: 'absolute',
                        top: commandMenu.position.top,
                        left: commandMenu.position.left,
                        zIndex: 1000
                    }}
                >
                    {filteredCommands.map((item) => (
                        <div
                            key={item.type}
                            className="command-menu-item"
                            onClick={() => handleCommandSelect(item.type)}
                        >
                            <span className="command-menu-icon">{item.icon}</span>
                            <span className="command-menu-label">{item.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Main
