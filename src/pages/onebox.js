import React, { useState, useEffect } from 'react';
import styles from './onebox.module.css';

const Onebox = () => {
  const [bgColor, setBgColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#ffffff'); // Set initial text color
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/onebox/list');
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (threadId) => {
    try {
      const response = await fetch(`/onebox/${threadId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete');
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  };

  const changeColor = (bg, text) => {
    setBgColor(bg);
    setTextColor(text);
  };

  return (
    <div className={styles.onebox} style={{ backgroundColor: bgColor, color: textColor }}>
      <header className={styles.header}>
        <div className={styles.logo}>Onebox</div>
        <div className={styles.workspace}>Tim's Workspace</div>
      </header>
      <div className={styles.centeredContent}>
       
        <h1>It's the beginning of a legendary sales pipeline</h1>
        <p>When you have inbound E-mails you'll see them here</p>
      </div>
      <div className={styles.colorButtons}>
        <button onClick={() => changeColor('#ffffff', '#000000')}>Light Mode</button>
        <button onClick={() => changeColor('#000000', '#ffffff')}>Dark Mode</button>
      </div>
      {loading && <p>Loading...</p>}

      {!loading && !error && (
        <ul className={styles.dataList}>
          {data.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Onebox;
