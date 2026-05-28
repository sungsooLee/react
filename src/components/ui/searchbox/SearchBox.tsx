import React from "react";
import cn from "classnames";
import styles from "./SearchBox.module.scss";
import { Button } from "../../common/button/Button";
import { Icon } from "../../icons/Icon";

interface SearchBoxProps {
  className?: string;
}

export const SearchBox = ({ className }: SearchBoxProps) => {
  return (
    <div className={cn(styles.search_box, className)}>
      {/* textarea 검색 영역 */}
      <div className={styles.search_area}>
        <textarea name="" id=""></textarea>
      </div>
      <Button
        className={styles.btn_submit}
        variant="normal"
        type={"submit"}
        size={"large"}
      >
        <Icon name={"ic_btn_submit"} size={"xl"} strokeColor="none" />
      </Button>
    </div>
  );
};
