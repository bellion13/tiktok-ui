import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/b810d74b8d94d17de51ede393858783d.jpeg?lk3s=a5d48078&nonce=35444&refresh_token=8d860b30760f52d9d9a0f0309e7967f1&x-expires=1727236800&x-signature=djJEg2%2B7%2F59EF6%2FC8QG42CTSERI%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>Following</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nikname')}>
                    <strong>nguyentrongtai</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Trọng Tài</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
