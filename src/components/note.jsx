// src/components/note.jsx
import React, { useState } from 'react'
import './note.css'

// types of blocks we can insert
const BLOCK_TYPES = [
  { type: 'separator', label: 'Separator' },
  { type: 'text', label: 'Text' },
  { type: 'team-section', label: 'Section' }
]

function makeBlock (type) {
  switch (type) {
    case 'separator':
      return { type, title: 'Separator Title…', date: 'Separator Date' }
    case 'text':
      return { type, content: 'Insert Text…' }
    case 'team-section':
      return { type, title: 'Section…', items: ['Item 1'] }
    default:
      return null
  }
}

export default function Note () {
  // initial blocks (you can start with whatever you like)
  const [blocks, setBlocks] = useState([
    { type: 'title', content: 'Title' },
    { type: 'subtitle', content: 'Date' },
    { type: 'text', content: 'Insert Text…' }
  ])
  const [hovered, setHovered] = useState(null)
  const [menuAt, setMenuAt] = useState(null)

  const insertBlock = (idx, type) => {
    const nb = makeBlock(type)
    setBlocks(b => [...b.slice(0, idx), nb, ...b.slice(idx)])
    setMenuAt(null)
  }
  const updateBlock = (i, changes) =>
    setBlocks(b => b.map((blk, j) => (j === i ? { ...blk, ...changes } : blk)))

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
                {/* your existing image wrapper */}
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
                    suppressContentEditableWarning
                    onBlur={e =>
                      updateBlock(0, { content: e.target.textContent })
                    }
                  >
                    {blocks[0].content}
                  </h1>
                </div>
                <div className='SubTitle'>
                  <h3
                    className='SubTitlestyle'
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e =>
                      updateBlock(1, { content: e.target.textContent })
                    }
                  >
                    {blocks[1].content}
                  </h3>
                </div>
              </div>

              <div className='contentText'>
                <div className='contentTextcontainer'>
                  {blocks.slice(2).map((blk, idx) => {
                    const i = idx + 2 // actual index in blocks[]
                    return (
                      <React.Fragment key={i}>
                        {/* Separator block */}
                        {blk.type === 'separator' && (
                          <div
                            className='contentseperator'
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => {
                              setHovered(null)
                              setMenuAt(null)
                            }}
                          >
                            <div className='titleofseperator'>
                              <h3
                                className='titleofseperatorstyle'
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={e =>
                                  updateBlock(i, {
                                    title: e.target.textContent
                                  })
                                }
                              >
                                {blk.title}
                              </h3>
                            </div>
                            <div className='dateofseperator'>
                              <p
                                className='dateofseperatorstyle'
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={e =>
                                  updateBlock(i, { date: e.target.textContent })
                                }
                              >
                                {blk.date}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Text block */}
                        {blk.type === 'text' && (
                          <div
                            className='contentTextwrap'
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => {
                              setHovered(null)
                              setMenuAt(null)
                            }}
                          >
                            <p
                              className='contentTextstyle'
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={e =>
                                updateBlock(i, {
                                  content: e.target.textContent
                                })
                              }
                            >
                              {blk.content}
                            </p>
                          </div>
                        )}

                        {/* Team-section block (if you use it) */}
                        {blk.type === 'team-section' && (
                          <div
                            className='contentTeamsection'
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => {
                              setHovered(null)
                              setMenuAt(null)
                            }}
                          >
                            <p
                              className='contentTeamtitle'
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={e =>
                                updateBlock(i, { title: e.target.textContent })
                              }
                            >
                              {blk.title}
                            </p>
                            {blk.items.map((item, j) => (
                              <p
                                key={j}
                                className='contentTeamtext'
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={e => {
                                  const items = [...blk.items]
                                  items[j] = e.target.textContent
                                  updateBlock(i, { items })
                                }}
                              >
                                {item}
                              </p>
                            ))}
                            <button
                              onClick={() => {
                                const items = [...blk.items, 'New Item']
                                updateBlock(i, { items })
                              }}
                            >
                              + Add Item
                            </button>
                          </div>
                        )}

                        {/* The floating “+” menu, positioned immediately after the block */}

                        <div className='addControl'>
                          <button
                            onClick={() => setMenuAt(menuAt === i ? null : i)}
                          >
                            +
                          </button>
                          {menuAt === i && (
                            <ul className='addMenu'>
                              {BLOCK_TYPES.map(bt => (
                                <li
                                  key={bt.type}
                                  onClick={() => insertBlock(i + 1, bt.type)}
                                >
                                  {bt.label}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>

              {/* ↓↓↓ your existing static team section ↓↓↓ */}
              <div className='contentTeam'>
                <div className='contentTeamsection'>
                  {/* … all your static “Section…” blocks … */}
                </div>
                {/* … more sections … */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
