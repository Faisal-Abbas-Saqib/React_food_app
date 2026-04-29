import React from 'react'

const Header1 = () => {
  return (
    <div className='header'>
      <div style={styles.textBlock}>
        <h1>Södertälje Food Point</h1>
        <h2>"Fast. Fresh. Delicious. Your cravings, our kitchen!"</h2>
      </div>
    </div>
  )
}

const styles = {
  textBlock: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '18px 24px',
    background: 'rgba(0, 0, 0, 0.82)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderLeft: '4px solid #c9a366',
    borderRadius: '4px',
    maxWidth: '90vw',
  }
}

export default Header1
