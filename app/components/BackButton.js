"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/projectDetails.module.css";

export default function BackButton() {

    const router = useRouter();

    return (
        <p className={`${styles.projectPageNavItem} link`} onClick={() => router.back()}>
            [Back]
        </p>
    )
}