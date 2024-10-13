import React, { useState, useEffect } from 'react'

function MasterCraftTop({ clickedPledge }) {
  const [bookmark, setBookmark] = useState({
    bookmarkState : false,
    bookmarkWord : "Bookmark",
    bookmarkStyle : null,
    bookmarkImageStyle : {
      fill :'#B1B1B1',
      fillTwo : "#2F2F2F"
    },
  });

    useEffect(() => {
      if(bookmark.bookmarkState === true) {
        setBookmark({...bookmark, bookmarkWord : 'Bookmarked', bookmarkStyle : {color : 'hsl(176, 50%, 47%)'}, bookmarkImageStyle : {fill : '#fff', fillTwo : 'hsl(176, 50%, 47%)'}})
      } else if (bookmark.bookmarkState === false) {
        setBookmark({...bookmark, bookmarkWord : 'Bookmark', bookmarkStyle : null, bookmarkImageStyle : {fill :'#B1B1B1', fillTwo : "#2F2F2F" }})
      }
    }, [bookmark.bookmarkState])

  // console.log(bookmark, bookmark.bookmarkState, bookmark.bookmarkWord)

  return (
    <div className='master-craft-top'>
        <img className='master-logo' src="/logo-mastercraft.svg" alt="master craft logo" />
        <section>
            <h3>Mastercraft Bamboo Monitor Riser</h3>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="master-buttons">
                <button onClick={clickedPledge}>Back this project</button>
                <button style={bookmark.bookmarkStyle} onClick={() => {setBookmark({...bookmark, bookmarkState : !bookmark.bookmarkState});}}>
                    <svg alt='bookmark' viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill={bookmark.bookmarkImageStyle.fillTwo} cx="28" cy="28" r="28"/><path fill={bookmark.bookmarkImageStyle.fill} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                    <span>{bookmark.bookmarkWord}</span>
                </button>
            </div>
        </section>
    </div>
  )
}

export default MasterCraftTop;