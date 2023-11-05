import styles from './styles.module.scss'

const Layout = ({
                    handleClick,
                    isActive,
                    isBlurEnable,
                    handleBlurActive,
                    handleBlurUnActive,
}) => {
    console.log(isActive);

    return (
        <div>
            <div className={`${styles.box} ${isBlurEnable ? styles.blurFilter : ''}`} style={{backgroundColor: isActive ? 'red' : '#fff'}} />

            <button onClick={handleClick}>
                {isActive ? 'Deactivate' : 'Activate'}
            </button>

            <button onMouseEnter={handleBlurActive} onMouseLeave={handleBlurUnActive}>
                {isBlurEnable ? 'Disable Blur' : 'Enable Blur'}
            </button>

            {isActive && <div>Hello, I'm Hidden DIV</div>}
        </div>
    );
};

export default Layout;