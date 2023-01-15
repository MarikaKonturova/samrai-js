import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../redux/redux-store";
import styles from "./Paginator.module.css";
type PaginatorType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (value: number) => void;
  portionSize?: number;
};
export const Paginator: FC<PaginatorType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(
    +JSON.parse(localStorage.getItem("portionNumber") || "1")
  );
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionSize * portionNumber;
  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            localStorage.setItem(
              "portionNumber",
              JSON.stringify(portionNumber - 1)
            );
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => (
          <span
            className={currentPage === p ? styles.selectedPage : styles.page}
            onClick={() => onPageChanged(p)}
            key={p}
          >
            {p}
          </span>
        ))}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            localStorage.setItem(
              "portionNumber",
              JSON.stringify(portionNumber + 1)
            );

            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
