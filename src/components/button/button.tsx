import React from 'react'
import Classnames from 'classnames'

type btnSize = 'lg' | 'sm'
type btnType = 'primary' | 'default' | 'danger' | 'link'

interface IButtonAllType {
  btnType?: btnType;
  btnSize?: btnSize;
  disabled?: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}
type ButtonType = IButtonAllType & React.ButtonHTMLAttributes<HTMLElement>
type AType = IButtonAllType & React.AnchorHTMLAttributes<HTMLElement>
type ALLBTNATYPE = ButtonType & AType

const buttonConponents: React.FC<ALLBTNATYPE> = (props) => {
  const { btnType, btnSize, disabled, href, children, className, ...resProps } = props
  const classes = Classnames('aoki-button', `aoki-${btnType}`, className, { [`aoki-${btnSize}`]: btnSize })
  if (btnType === 'link' && href) {
    return <a className={classes} {...resProps} href={href}>{children}</a>
  } else {
    return <button className={classes} {...resProps} disabled={disabled} >{children}</button>
  }
}

buttonConponents.defaultProps = {
  btnType: 'primary',
}

export default buttonConponents