import Link from "next/link";
import style from "../styles/contact.module.css";

export default function Contact() {
    return (
        <>
            <div className={style.contactDiv}>
                <p className={style.text}><span className={style.title}>Email</span> [help@blueroomstudios.com.au]</p>
                <p className={style.text}><span className={style.title}>Instagram</span> <Link target="_blank" href={"https://www.instagram.com/blueroom.studios/"}>[@blueroom.studios]</Link></p>
            </div>
        </>
    )
}