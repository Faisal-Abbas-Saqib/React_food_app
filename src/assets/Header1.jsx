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
    gap: '8px',
    padding: '16px 20px',
    background: 'rgba(10, 10, 10, 0.65)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    borderLeft: '3px solid #c9a366',
    borderRadius: '4px',
  }
}

export default Header1
