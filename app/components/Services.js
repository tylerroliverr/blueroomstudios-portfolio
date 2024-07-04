import style from '../styles/services.module.css';
import EmailButton from './EmailButton';

export default function Services() {
    return (
        <>
            <div className={style.servicesContainer}>
                <div className={style.servicesHeaderInfo}>
                    <p className={style.serviceDescription}>I offer free consultations so i can get to know you and your project better. Feel free to <EmailButton text="email"/> me {'<3'}</p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>Custom code templates</p>
                    <p className={style.serviceDescription}>complete freedom and control. adjust styles, fonts, and layouts to echo your brand's personality. your vision, your website, your way. no monthly website builder fees either.</p>
                    <p className={style.servicePrice}>from $6,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>Web design & interactivity</p>
                    <p className={style.serviceDescription}>Basic website using any website builder. Fine tune and elevate user experience through animations, interactivity and good design.</p>
                    <p className={style.servicePrice}>from $4,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>E-commerce web design & management</p>
                    <p className={style.serviceDescription}>Interactivity, animations, and good design. We build an ecom website using one of the major online website builder platforms. Get your products out there! Have a cool store.</p>
                    <p className={style.servicePrice}>from $4,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>Website renewal</p>
                    <p className={style.serviceDescription}>Full facelift of your current website. Liven the design, add some interactivity and better user experience.</p>
                    <p className={style.servicePrice}>from $3,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>Mobile responsive design</p>
                    <p className={style.serviceDescription}>Already have a site that needs to look good on a mobile too? Let's make it better... Together.</p>
                    <p className={style.servicePrice}>from $2,500 <span className={style.aud}>AUD</span></p>
                </div>
            </div>
        </>
    )
}