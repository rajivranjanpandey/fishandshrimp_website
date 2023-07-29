export const detectIsMobileView = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let fromMobile = false;
    let agent = 'desktop';
    if (/android/i.test(userAgent)) {
        fromMobile = true;
        agent = 'android';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        fromMobile = true;
        agent = 'iphone';
    }
    return fromMobile;
}