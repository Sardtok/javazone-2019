import React from 'react';
import styles from './KidsProgramSection.module.scss';
import Link from "../Link/Link";

interface KidsProgramSectionProps {
    header: string;
    children?: React.ReactNode;
    imageName: string;
    imageType?: string;
    moreInfoLink: string;
    registrationLink: string;
}

export function KidsProgramSection(props: KidsProgramSectionProps) {
    const imageType = !!props.imageType? props.imageType : 'jpg';
    const imagePath = `https://storage.googleapis.com/javazone-assets/images/${props.imageName}.${imageType}`;
    return (
        <div className={styles.section}>
            <h2>{props.header}</h2>
            <div className={styles.container}>
                <div className={styles.imageBlock}>
                    <img className={styles.img} src={imagePath}/>
                </div>
                <div className={styles.content}>
                    {props.children}
                    <div className={styles.buttons}>
                        <Link external url={props.moreInfoLink}>Mer Info</Link>
                        <Link external url={props.registrationLink}>Påmelding</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}