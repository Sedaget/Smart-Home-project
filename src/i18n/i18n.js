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
          light_mode: "Light Mode",
          notifications: "Notifications",
          enable_notifications: "Enable notifications",
          LivingRoom: "Living Room",
          BedRoom: "BedRoom",
          KidRoom: "KidRoom",
          Kitchen: "Kitchen",
          add_device: "+ Add Device",
          welcome: "Welcome Home!",
          Search: "Search...",
          Read: "Read",
          Newdevicesadded: "New devices added",
          motiondetected: "Motion detected",
          internetdisconnected: "Internet disconnected",
          temperatureabove30: "Temperature is above 30°C",
          Enterroomname:"Enter room name",
          AddNewRoom:"Add New Room"
        }
      },
      az: {
        translation: {
          settings: "Tənzimləmələr",
          language: "Dil",
          appearance: "Görünüş",
          dark_mode: "Gecə rejimi",
          light_mode: "Gündüz rejimi",
          notifications: "Bildirişlər",
          enable_notifications: "Bildirişləri aktiv et",
          LivingRoom: "Qonaq Otağı",
          BedRoom: "Yataq Otağı",
          KidRoom: "Uşaq Otağı",
          Kitchen: "Mətbəx",
          add_device: "+ Yeni qurğu",
          welcome: "Evə Xoşgəldin!",
          Search: "Axtarış",
          Read: "Oxundu",
          Newdevicesadded: "Yeni qurğu əlavə edildi",
          motiondetected: "Hərəkət aşkar edildi",
          internetdisconnected: "İnternet bağlantısı kəsildi",
          temperatureabove30: "Temperatur 30°C üzərindədir",
          Enterroomname:"Otaq adını daxil edin",
          AddNewRoom:"Yeni otaq əlavə edin"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;