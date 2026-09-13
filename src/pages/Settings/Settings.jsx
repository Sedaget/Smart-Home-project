import React, { useState } from 'react';
import './Settings.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext.jsx'

const Settings = () => {
   const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(true);
  const { t, i18n } = useTranslation();
   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='settings-container'>
       <h2>{t('settings')}</h2>

      <div className="setting-section">
        <h3>{t('language')}</h3>
        <select style={{fontFamily:"sans-serif", fontSize:"1.2rem"}} value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="az">Azərbaycan dili</option>
        </select>
      </div>

       <div className="setting-section">
        <h3>{t('appearance')}</h3>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"} 
            onChange={toggleTheme}     
          />
          {theme === 'dark' ? t('dark_mode') : t('light_mode')}

        </label>
      </div>

      <div className="setting-section">
        <h3>{t('notifications')}</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          {t('enable_notifications')}
        </label>
      </div>
    </div>
  );
};

export default Settings;