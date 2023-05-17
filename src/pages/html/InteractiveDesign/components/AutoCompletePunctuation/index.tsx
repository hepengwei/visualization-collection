import React, { useCallback, useEffect, useRef } from "react";
import ModuleTitle from "@/components/ModuleTitle";
import styles from "./index.module.scss";

const quotes = {
  "'": "'",
  '"': '"',
  "(": ")",
  "（": "）",
  "【": "】",
  "[": "]",
  "《": "》",
  "「": "」",
  "『": "』",
  "{": "}",
  "“": "”",
  "‘": "’",
};

const AutoCompletePunctuation = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentEditableRef = useRef<HTMLDivElement>(null);

  const onInput = useCallback((e: any) => {
    // @ts-ignore
    const quote = quotes[e.data];
    if (
      quote &&
      (e.inputType === "insertText" || e.type === "compositionend")
    ) {
      if (["TEXTAREA", "INPUT"].includes(e.target.tagName)) {
        e.target.setRangeText(quote);
      } else {
        const newQuote = document.createTextNode(quote);
        const selection = document.getSelection();
        if (selection) {
          const range = selection.getRangeAt(0);
          range.insertNode(newQuote);
          range.setEndBefore(newQuote);
          range.commonAncestorContainer.normalize();
        }
      }
    }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", onInput);
      textareaRef.current.addEventListener("compositionend", onInput);
    }
    if (contentEditableRef.current) {
      contentEditableRef.current.addEventListener("input", onInput);
      contentEditableRef.current.addEventListener("compositionend", onInput);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener("input", onInput);
        textareaRef.current.removeEventListener("compositionend", onInput);
      }
      if (contentEditableRef.current) {
        contentEditableRef.current.removeEventListener("input", onInput);
        contentEditableRef.current.removeEventListener(
          "compositionend",
          onInput
        );
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <ModuleTitle intlTitle="page.htmlVision.interactiveDesign.autoCompletePunctuation" />
      <div className={styles.content}>
        <textarea
          rows={5}
          placeholder="maxLength is 100"
          maxLength={100}
          ref={textareaRef}
        />
        <div contentEditable="true" ref={contentEditableRef}></div>
      </div>
    </div>
  );
};

export default AutoCompletePunctuation;
