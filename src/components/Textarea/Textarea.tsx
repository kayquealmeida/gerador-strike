import React from 'react';
import styles from './Textarea.module.scss';

interface Props {
  labelTarget: string,
  labelTitle: string
}

const Textarea = (props: Props) => {
  return (
    <div className={styles.checkboxContainer}>
      <label htmlFor={props.labelTarget}>{props.labelTitle}</label>
      <textarea name={props.labelTarget} id={props.labelTarget}></textarea>
    </div>
  )
}

export default Textarea;