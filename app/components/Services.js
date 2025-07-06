import style from '../styles/services.module.css';
import EmailButton from './EmailButton';

export default function Services() {
  return (
    <>
      <div className={style.servicesContainer}>
        <div className={style.servicesHeaderInfo}>
          <p className={style.serviceDescription}>I offer free consultations so I can get to know you and your project better. Feel free to email me {'<3'}</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Custom code templates <span className={style.servicePrice}>from $6,500 <span className={style.aud}>AUD</span></span></p>
          <p className={style.serviceDescription}>{`Complete freedom and control. Adjust styles, fonts, and layouts to echo your brand's personality. Your vision, your website, your way. No monthly website builder fees either.`}</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Web design & interactivity <span className={style.servicePrice}>from $4,500 <span className={style.aud}>AUD</span></span></p>
          <p className={style.serviceDescription}>Basic website using any website builder. Fine tune and elevate user experience through animations, interactivity and good design.</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>E-commerce website <span className={style.servicePrice}>from $5,500 <span className={style.aud}>AUD</span></span></p>
          <p className={style.serviceDescription}>Interactivity, animations, and good design. We build an e-com website using one of the major online platforms. Get your products out there! Have a cool store.</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Website renewal <span className={style.servicePrice}>from $3,000 <span className={style.aud}>AUD</span></span></p>
          <p className={style.serviceDescription}>Full facelift of your current website. Liven the design, add some interactivity and better user experience.</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Mobile responsive design <span className={style.servicePrice}>from $2,500 <span className={style.aud}>AUD</span></span></p>
          <p className={style.serviceDescription}>{`Already have a site that needs to look good on a mobile too? Let's make it better... Together.`}</p>
        </div>
      </div>
    </>
  )
}