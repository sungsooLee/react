import React, { ReactNode, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./FloatingButton.module.scss";

interface FloatingButtonGroupProps {
  className?: string;
}

export const FloatingButtonGroup = ({className}: FloatingButtonGroupProps) =>{
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        
    })

  return (
    <div className={cn(styles.floatingButtonGroup, className)}>
        <button className={styles.floating_btn} onClick={() => setIsOpen(!isOpen)}>버튼</button>
        <ul className={cn(styles.contents, isOpen && styles.open)}>
            <li>
                <button>첫번째</button>
            </li>
            <li>
                <button>두번째</button>
            </li>
            <li>
                <button>세번째</button>
            </li>
        </ul>
    </div>
  );
};
