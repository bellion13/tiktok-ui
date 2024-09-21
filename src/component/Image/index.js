import classNames from "classnames";
import {forwardRef, useState} from "react";
import imgs from '~/assets/imgs'
import styles from './Image.module.scss'

const  Image = forwardRef(({className,src , alt,...props},ref) => {
    const[fallback,setFullback] = useState('')
    const handleError = () => {
        setFullback(imgs.noImage)
    }
    return ( <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback||src} alt={alt} {...props} omError={handleError} /> );
})

export default Image;