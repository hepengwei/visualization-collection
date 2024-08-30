import React, { useRef } from 'react';
import useCursorMove from '@/hooks/useCursorMove';
import styles from './index.module.scss';

const cursorDefaultRadius = 5;

const FirewormButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const {
    showCursor,
    cursorSize,
    cursorBigRadius,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  } = useCursorMove(containerRef, cursorRef, cursorDefaultRadius);

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={containerRef}
    >
      <div className={styles.content}>
        <div className={`${styles.dot} ${styles.dot1}`} />
        <div className={`${styles.dot} ${styles.dot2}`} />
        <div className={`${styles.dot} ${styles.dot3}`} />
        <div className={`${styles.dot} ${styles.dot4}`} />
        <div className={`${styles.dot} ${styles.dot5}`} />
        <div className={`${styles.dot} ${styles.dot6}`} />
        <div className={`${styles.dot} ${styles.dot7}`} />
        <div className={styles.buttonWrapper}>
          <span>Button</span>
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

export default FirewormButton;
