/**
 * PDF处理工具
 */
import React, { useState } from 'react';
import { Button, message } from 'antd';
import { FolderAddOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import Tabs from '@/components/Tabs';
import {
  getPdfInfo,
  imageDataToBlob,
  exportFile,
  PdfInfo,
} from 'utils/fileUtil';
import Overview from './components/Overview';
import Edit from './components/Edit';
import styles from './index.module.scss';

export interface TabPageProps {
  pdfInfo: PdfInfo;
  exportPdf: (pdfData: any) => void;
  pdfDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClear: () => void;
}

enum TabId {
  'overview',
  'edit',
}

const primaryColor = '#0E5E6F';
const primaryShallowColor = '#3A8891';

const PDFProcessingTool = () => {
  const intl = useIntl();
  const [pdfDragOver, setPdfDragOver] = useState<boolean>(false);
  const [pdfInfo, setPdfInfo] = useState<PdfInfo | null>(null);

  // 导出PDF
  const exportPdf = (imageData: ImageData, exportImageType?: string) => {
    if (!imageData || !pdfInfo) return;
    // imageDataToBlob(imageData, finalImageType, (blob: Blob | null) => {
    //   if (blob) {
    //     let imgName = 'PDF';
    //     if (pdfInfo && pdfInfo.name) {
    //       const arr = pdfInfo.name.split('.');
    //       if (arr.length > 1) {
    //         arr.splice(arr.length - 1, 1, 'pdf');
    //       } else {
    //         arr.push('pdf');
    //       }
    //       imgName = arr.join('.');
    //     }
    //     exportFile(blob, imgName);
    //   }
    // });
  };

  const onTabsChange = (tabId: TabId) => {
    setSelectedTabId(tabId);
  };

  const getFileInfo = (files: FileList) => {
    if (!files || files.length === 0) return;
    getPdfInfo(files[0], (newPdfInfo: PdfInfo | null) => {
      setPdfInfo(newPdfInfo);
      if (!newPdfInfo) {
        message.error(
          intl.formatMessage({
            id: 'common.parsingDataFailure',
          })
        );
      }
    });
  };

  const onUploadChange = (e: any) => {
    const { files } = e.target;
    getFileInfo(files);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!pdfDragOver) {
      setPdfDragOver(true);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    pdfDragOver && setPdfDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    e.preventDefault();
    pdfDragOver && setPdfDragOver(false);
    const { files } = e.dataTransfer;
    getFileInfo(files);
  };

  const onClear = () => {
    setPdfInfo(null);
  };

  const tabPageProps = {
    pdfInfo: pdfInfo as PdfInfo,
    exportPdf,
    pdfDragOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onClear,
  };

  const tabsList = [
    {
      id: TabId.overview,
      label: intl.formatMessage({
        id: 'menu.pdfProcessingTool.overview',
      }),
      element: <Overview {...tabPageProps} />,
    },
    {
      id: TabId.edit,
      label: intl.formatMessage({
        id: 'menu.pdfProcessingTool.edit',
      }),
      element: <Edit {...tabPageProps} />,
    },
  ];
  const [selectedTabId, setSelectedTabId] = useState<TabId>(tabsList[0].id);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tabs
          className={styles.tabs}
          data={tabsList}
          selectedTabId={selectedTabId}
          onChange={onTabsChange}
        />
        {!pdfInfo && (
          <>
            <div
              className={styles.pdfBox}
              style={{
                borderColor: pdfDragOver ? primaryColor : primaryShallowColor,
              }}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <div className={styles.emptyBox}>
                <Button type='primary' className={styles.uploadBtn}>
                  <FolderAddOutlined />
                  {intl.formatMessage({
                    id: 'common.uploadFile',
                  })}
                  <input
                    type='file'
                    accept='application/pdf'
                    onChange={onUploadChange}
                  />
                </Button>
                <p className={styles.text}>
                  {intl.formatMessage({
                    id: 'common.dragTheFileHere',
                  })}
                </p>
                <p className={styles.tips}>
                  {intl.formatMessage({
                    id: 'common.supportedPdfType',
                  })}
                </p>
              </div>
            </div>
          </>
        )}
        {pdfInfo &&
          tabsList.filter((item) => item.id === selectedTabId)[0].element}
      </div>
    </div>
  );
};

export default PDFProcessingTool;
