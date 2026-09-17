const checkLogin = require('./auth');

describe('Kiểm tra hàm đăng nhập (checkLogin)', () => {
    test('Trả về true khi nhập đúng tài khoản và mật khẩu (admin / 123)', () => {
        expect(checkLogin('admin', '123')).toBe(true);
    });

    test('Trả về false khi nhập sai mật khẩu', () => {
        expect(checkLogin('admin', 'wrongpassword')).toBe(false);
    });

    test('Trả về false khi nhập sai tên đăng nhập', () => {
        expect(checkLogin('user123', '123')).toBe(false);
    });

    test('Trả về false khi để trống cả hai', () => {
        expect(checkLogin('', '')).toBe(false);
    });
});
