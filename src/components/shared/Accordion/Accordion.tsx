import React, { FC, memo, useCallback, useState } from "react";
import styles from "./Accordion.module.css";

type AccordionProps = {
    title: string;
    type: "main" | "secondary";
    onItemSelect: (item: string) => void;
    style?: string;
};

export const Accordion: FC<AccordionProps> = memo(({
                                                       title,
                                                       type,
                                                       onItemSelect,
                                                       style
                                                   }) => {
    const [collapse, setCollapse] = useState(true);
    const [accordionTitle, setAccordionTitle] = useState(title);
    const onClickTitleHandler = useCallback(() => {
        setCollapse(!collapse);
    }, [setCollapse, collapse]);
    const onClickItemHandler = useCallback((item: string) => {
        onItemSelect(item);
        setAccordionTitle(item);
        setCollapse(!collapse);
    }, [onItemSelect, setCollapse, setAccordionTitle, collapse]);

    // Styles
    const fullAccordionStyle =
        styles.accordion + " " + (type === "main" ? styles.accordionMain : styles.accordionSecondary) + " " + style;
    const fullTitleStyle =
        styles.accordionTitle + " " + (type === "main" ? styles.accordionMainTitle : styles.accordionSecondaryTitle);
    const fullItemStyle =
        styles.accordionItem + " " + (type === "main" ? styles.accordionMainItem : styles.accordionSecondaryItem);

    return !collapse ? (
        <div className={fullAccordionStyle}>
            <h3 className={fullTitleStyle} onClick={onClickTitleHandler}>
                {accordionTitle}
            </h3>
            <ul className={styles.accordionList}>
                <li className={fullItemStyle} onClick={() => onClickItemHandler("10")}>
                    10
                </li>
                <li className={fullItemStyle} onClick={() => onClickItemHandler("20")}>
                    20
                </li>
                <li className={fullItemStyle} onClick={() => onClickItemHandler("30")}>
                    30
                </li>
                <li className={fullItemStyle} onClick={() => onClickItemHandler("40")}>
                    40
                </li>
                <li className={fullItemStyle} onClick={() => onClickItemHandler("50")}>
                    50
                </li>
            </ul>
        </div>
    ) : (
        <h3 className={fullAccordionStyle + " " + styles.accordionTitle} onClick={onClickTitleHandler}>
            {accordionTitle}
        </h3>
    );
});
