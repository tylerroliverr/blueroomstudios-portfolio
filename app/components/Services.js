import style from '../styles/services.module.css';
import EmailButton from './EmailButton';

export default function Services() {
    return (
        <>
            <div className={style.servicesContainer}>
                <div className={style.servicesHeaderInfo}>
                    <p className={style.serviceDescription}>i offer free consultations so i can get to know you and your project better. feel free to <EmailButton text="email"/> me {'<3'}</p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>custom code templates</p>
                    <p className={style.serviceDescription}>complete freedom and control. adjust styles, fonts, and layouts to echo your brand's personality. your vision, your website, your way. no monthly website builder fees either.</p>
                    <p className={style.servicePrice}>from $6,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>web design & interactivity</p>
                    <p className={style.serviceDescription}>basic website using any website builder. fine tune and elevate user experience through animations, interactivity and good design.</p>
                    <p className={style.servicePrice}>from $4,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>ecommerce web design & management</p>
                    <p className={style.serviceDescription}>interactivity, animations, and good design. we build an ecom website using one of the major online website builder platforms. get your products out there! have a cool store.</p>
                    <p className={style.servicePrice}>from $4,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>website renewal</p>
                    <p className={style.serviceDescription}>full facelift of your current website. liven the design, add some interactivity and better user experience.</p>
                    <p className={style.servicePrice}>from $3,000 <span className={style.aud}>AUD</span></p>
                </div>
                <div className={style.serviceItem}>
                    <p className={style.serviceTitle}>mobile responsive design</p>
                    <p className={style.serviceDescription}>already got a site that needs to look good on a mobile too? let's make it better... together.</p>
                    <p className={style.servicePrice}>from $2,500 <span className={style.aud}>AUD</span></p>
                </div>
            </div>
        </>
    )
}