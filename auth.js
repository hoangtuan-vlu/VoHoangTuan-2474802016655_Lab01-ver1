function checkLogin(username, password) {
    if (username === 'admin' && password === '1234') {
        return true;
    }
    return false;
}

// Xuất hàm để sử dụng cho Jest (nếu dùng môi trường Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = checkLogin;
}
