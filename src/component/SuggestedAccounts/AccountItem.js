import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy offset={[-40,0]} interactive delay={[800, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/b810d74b8d94d17de51ede393858783d.jpeg?lk3s=a5d48078&nonce=35444&refresh_token=8d860b30760f52d9d9a0f0309e7967f1&x-expires=1727236800&x-signature=djJEg2%2B7%2F59EF6%2FC8QG42CTSERI%3D&shp=a5d48078&shcp=81f88b70"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nikname')}>
                            <strong>nguyentrongtai</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Trọng Tài</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
