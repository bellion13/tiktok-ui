import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/b810d74b8d94d17de51ede393858783d.jpeg?lk3s=a5d48078&nonce=27970&refresh_token=83bd43d179e13de64db3d065c403dad6&x-expires=1726542000&x-signature=D5v%2FKo1rbhS17R8YLM9p5lrR%2B3c%3D&shp=a5d48078&shcp=81f88b70" alt="Tai" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Trong Tai</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyentrongtai</span>
            </div>
        </div>
    );
}

export default AccountItem;
