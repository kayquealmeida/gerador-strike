import React from "react";
import styles from './Input.module.scss';

interface Props {
  inputType: string,
  labelTarget: string,
  labelTitle: string
}

const Input = (props: Props) => {
  return(
    <div className={styles.inputContainer}>
      <label htmlFor={props.labelTarget}>{props.labelTitle}</label>
      <input type={props.inputType} id={props.labelTarget}/>
    </div>
  )
}

export default Input;