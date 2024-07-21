"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/projectDetails.module.css";
import { TransitionLink } from "./TransitionLink";

export default function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <TransitionLink onClick={handleBack}>
            <p className={`${styles.projectPageNavItem} link`}>[Back]</p>
        </TransitionLink>
    )
}