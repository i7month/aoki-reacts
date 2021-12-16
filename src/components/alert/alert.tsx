import React, { useRef } from 'react'
import Classnames from 'classnames'

type aokiType = 'success' | 'info' | 'warning' | 'error'

interface IAlertAllType {
  closable?: boolean; // 是否显示关闭按钮
  type?: aokiType; // alert的样式
  className?: string;
  children?: React.ReactNode;
  closeText?: string;
  onChange?: () => void;
}
type AlertType = IAlertAllType & React.AllHTMLAttributes<HTMLElement>

const AlertComponents: React.FunctionComponent<AlertType> = (props) => {

  const alertRef = useRef<HTMLDivElement>(null);
  const { closable, type, className, children, closeText, onChange, ...resProps } = props
  const classes = Classnames('aoki-alert', `aoki-${type}`, className)

  const onClose = () => {
    if (onChange) {
      onChange()
    }
    if (alertRef.current) {
      alertRef.current.style.height = '0'
      alertRef.current.style.padding = '0'
    }
  }
  return <div ref={alertRef} className={classes} {...resProps}>
    {children}
    {closable ? <div className="aoki-close" onClick={onClose}>{closeText}</div> : <></>}
  </div >
}
AlertComponents.defaultProps = {
  closable: false,
  type: 'success',
  closeText: 'close',
  children: 'aoki is alert'
}

export default AlertComponents