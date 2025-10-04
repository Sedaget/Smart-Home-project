import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          settings: "Settings",
          language: "Language",
          appearance: "Appearence",
          dark_mode: "Dark Mode",
          notifications: "Notifications",
          enable_notifications: "Enable notifications",
          LivingRoom: "Living Room",
          BedRoom: "BedRoom",
          KidRoom: "KidRoom",
          Kitchen:"Kitchen",
          add_device:"+ Add Device",
          welcome:"Welcome Home!",
          Search:"Search..."
        }
      },
      az: {
        translation: {
          settings: "Tənzimləmələr",
          language: "Dil",
          appearance: "Görünüş",
          dark_mode: "Qaranlıq rejim",
          notifications: "Bildirişlər",
          enable_notifications: "Bildirişləri aktiv et",
          LivingRoom:"Qonaq Otağı",
          BedRoom:"Yataq Otağı",
          KidRoom:"Uşaq Otağı",
          Kitchen:"Mətbəx",
          add_device:"+ Yeni qurğu",
          welcome:"Evə Xoşgəldin!",
          Search:"Axtarış"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;