// components/ClickHistory.jsx
import React from 'react';

const ClickHistory = ({ history }) => {
  return (
    <div style={{
      background: 'var(--bg-secondary, #f5f5f5)',
      borderRadius: '8px',
      padding: '1rem',
      height: '100%'
    }}>
      <h2 style={{
        color: 'var(--text-primary, #000)',
        marginBottom: '1rem',
        fontSize: '1.2rem'
      }}>Riwayat Klik IMEI</h2>
      
      <div style={{
        maxHeight: 'calc(100vh - 200px)',
        overflowY: 'auto'
      }}>
        {history.length === 0 ? (
          <p style={{
            color: 'var(--text-tertiary, #999)',
            textAlign: 'center',
            padding: '1rem'
          }}>Belum ada riwayat klik</p>
        ) : (
          history.map((click, index) => (
            <div key={index} style={{
              background: 'var(--bg-primary, #fff)',
              borderRadius: '6px',
              padding: '0.8rem',
              marginBottom: '0.8rem'
            }}>
              <p style={{
                fontWeight: 'bold',
                color: 'var(--text-primary, #000)',
                marginBottom: '0.2rem'
              }}>{click.nama}</p>
              
              <p style={{
                color: 'var(--text-secondary, #666)',
                fontSize: '0.9rem',
                marginBottom: '0.2rem'
              }}>{click.device}</p>
              
              <p style={{
                color: 'var(--text-secondary, #666)',
                fontSize: '0.9rem'
              }}>{click.jabatan} - IMEI: {click.imei}</p>
              
              <p style={{
                color: 'var(--text-tertiary, #999)',
                fontSize: '0.8rem',
                marginTop: '0.4rem'
              }}>{click.timestamp}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClickHistory;