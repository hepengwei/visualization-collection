import React from 'react';
import { useIntl } from 'react-intl';
import { sizeTostr, PdfInfo } from 'utils/fileUtil';
import styles from '../../index.module.scss';

interface FileBoxProps {
  pdfInfo: PdfInfo;
  pdfDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

const primaryColor = '#0E5E6F';
const primaryShallowColor = '#3A8891';

const FileBox = (props: FileBoxProps) => {
  const { pdfInfo, pdfDragOver, onDragOver, onDragLeave, onDrop } = props;
  const intl = useIntl();

  return (
    <div
      className={styles.pdfBox}
      style={{
        borderColor: pdfDragOver ? primaryColor : primaryShallowColor,
      }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className={styles.fileBox}>
        <img src={pdfInfo.pdfUrl} alt='' />
        <div className={styles.fileInfo}>
          <div className={styles.item}>
            {intl.formatMessage({ id: 'common.filename' })}：{pdfInfo.name}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: 'common.dimension' })}：
            {pdfInfo.width && pdfInfo.height
              ? `${pdfInfo.width}x${pdfInfo.height}`
              : intl.formatMessage({ id: 'common.unknown' })}
          </div>
          <div className={styles.item}>
            {intl.formatMessage({ id: 'common.size' })}：
            {sizeTostr(pdfInfo.size)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileBox;
