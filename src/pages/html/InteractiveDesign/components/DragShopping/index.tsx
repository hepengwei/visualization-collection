import React, { useRef, useState } from "react";
import GridContent from "components/GridContent";
import book1 from "images/html/book1.jpg";
import book2 from "images/html/book2.jpg";
import book3 from "images/html/book3.jpg";
import book4 from "images/html/book4.jpg";
import book5 from "images/html/book5.jpg";
import book6 from "images/html/book6.jpg";
import styles from "./index.module.scss";

const { GridBox } = GridContent;

interface Book {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
}

type Shopping = Book & {
  num: number;
};

const bookList: Book[] = [
  { id: "1", name: "一个星期学会吉他弹唱", price: 68, imgUrl: book1 },
  { id: "2", name: "柳公权楷书教程入门", price: 45, imgUrl: book2 },
  { id: "3", name: "世说新语", price: 52, imgUrl: book3 },
  { id: "4", name: "名人传", price: 124, imgUrl: book4 },
  { id: "5", name: "骆驼祥子", price: 168, imgUrl: book5 },
  { id: "6", name: "阅微堂笔记", price: 56, imgUrl: book6 },
];

const DragShopping = () => {
  const [shoppingList, setShoppingList] = useState<Shopping[]>([]);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [totalMoney, setTotalMoney] = useState<number>(0);

  const onDragStart = (e: React.DragEvent, index: number) => {
    var e = e || window.event;
    const bookInfo = bookList[index];
    e.dataTransfer.setData("id", bookInfo.id);
    e.dataTransfer.effectAllowed = "copy";
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!dragOver) {
      setDragOver(true);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (dragOver) {
      setDragOver(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    let isExist = false;
    let price = 0;
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        isExist = true;
        price = item.price;
        return { ...item, num: item.num + 1 };
      }
      return item;
    }) as Shopping[];
    if (!isExist) {
      let book;
      for (let i = bookList.length - 1; i >= 0; i--) {
        const item = bookList[i];
        if (item.id === id) {
          price = item.price;
          book = item;
          break;
        }
      }
      if (book) {
        newShoppingList.unshift({ ...book, num: 1 });
      }
    }
    setShoppingList(newShoppingList);
    setDragOver(false);
    setTotalMoney(totalMoney + price);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GridContent
          differentScreenCols={[6, 6, 3, 3, 3]}
          rowSpace={0}
          colSpace={0}
        >
          {bookList.map((book: Book, index: number) => {
            const { id, name, price, imgUrl } = book;
            return (
              <GridBox key={id}>
                <div
                  className={styles.bookBox}
                  draggable="true"
                  onDragStart={(e) => onDragStart(e, index)}
                >
                  <img src={imgUrl} draggable="false" />
                  <p>{name}</p>
                  <p>{`￥${price}`}</p>
                </div>
              </GridBox>
            );
          })}
        </GridContent>

        <div
          className={styles.shoppingBox}
          style={
            dragOver ? { border: "1px solid #DD5044", color: "#DD5044" } : {}
          }
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className={styles.tableHead}>
            <div className={styles.tableCell}>书名</div>
            <div className={styles.tableCell}>价格</div>
            <div className={styles.tableCell}>数量</div>
          </div>
          {shoppingList.map((shopping: Shopping) => {
            const { id, num, name, price } = shopping;
            return (
              <div className={styles.tableRow} key={id}>
                <div className={styles.tableCell}>{name}</div>
                <div className={styles.tableCell}>{`￥${price}`}</div>
                <div className={styles.tableCell}>{num}</div>
              </div>
            );
          })}
          {shoppingList.length > 0 && (
            <div className={styles.total}>
              <span className={styles.totalMoney}>
                总计：￥<span>{totalMoney}</span>
              </span>
            </div>
          )}
          <div className={styles.tip}>
            {dragOver ? "可放开添加到购物车" : "拖拽到此区域进行购买"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragShopping;
