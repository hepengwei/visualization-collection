import React, { useRef } from 'react';
import { useIntl } from 'react-intl';
import useCursorMove from '@/hooks/useCursorMove';
import discuss from 'images/html/discuss.jpg';
import styles from './index.module.scss';

interface Article {
  name: string;
  href: string;
}

const articles = [
  {
    name: '两个跨域页面进行跳转传参的终极方案',
    href: 'https://juejin.cn/post/7134967869326458916',
  },
  {
    name: '面试秘籍之手写系列',
    href: 'https://juejin.cn/post/7134975263707758606',
  },
  {
    name: '一款将打包后的Chrome插件自动化加载到浏览器的webpack插件',
    href: 'https://juejin.cn/post/7134991167095062565',
  },
  {
    name: '全网最全AutoIt3基础教程及实战案例',
    href: 'https://juejin.cn/post/7134952028870017060',
  },
];

const MouseHover1 = () => {
  const intl = useIntl();
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const {
    showCursor,
    cursorSize,
    cursorDefaultRadius,
    cursorBigRadius,
    setCursorSize,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  } = useCursorMove(containerRef, cursorRef);

  const onMouseEnterItem = () => {
    setCursorSize('big');
  };

  const onMouseLeaveItem = () => {
    setCursorSize('default');
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
    >
      <div className={styles.content}>
        <p
          className={styles.title}
          onMouseEnter={onMouseEnterItem}
          onMouseLeave={onMouseLeaveItem}
        >
          {intl.formatMessage({
            id: 'page.htmlVision.interactiveDesign.personalArticle',
          })}
        </p>
        <div className={styles.bottom}>
          <img
            src={discuss}
            alt=''
            onMouseEnter={onMouseEnterItem}
            onMouseLeave={onMouseLeaveItem}
          />
          <div className={styles.right}>
            {articles.map((article: Article, index: number) => (
              <a
                key={index}
                href={article.href}
                target='_blank'
                onMouseEnter={onMouseEnterItem}
                onMouseLeave={onMouseLeaveItem}
              >
                {article.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className={styles.cursor}
        style={{
          visibility: showCursor ? 'visible' : 'hidden',
          width: `${
            cursorSize === 'big' ? cursorBigRadius * 2 : cursorDefaultRadius * 2
          }px`,
          height: `${
            cursorSize === 'big' ? cursorBigRadius * 2 : cursorDefaultRadius * 2
          }px`,
        }}
        ref={cursorRef}
      />
    </div>
  );
};

export default MouseHover1;
