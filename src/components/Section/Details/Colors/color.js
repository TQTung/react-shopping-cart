import classNames from 'classnames/bind';
import styles from './Colors.module.scss';

const cx = classNames.bind(styles);

function Colors({ colors }) {
    return (
        <div>
            {colors &&
                colors.map((color, index) => (
                    <button key={index} className={cx('btn-color')} style={{ background: color }}></button>
                ))}
        </div>
    );
}

export default Colors;
