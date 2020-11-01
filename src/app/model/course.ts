export interface ICourse {
    biDanh: string;
    danhMucKhoaHoc: {
        maDanhMucKhoahoc: string;
        tenDanhMucKhoaHoc: string;
    };
    hinhAnh: string;
    luotXem: number;
    maKhoaHoc: string;
    maNhom: string;
    moTa: string;
    ngayTao: string;
    nguoiTao: {
        hoTen: string;
        maLoaiNguoiDung: string;
        taiKhoan: string;
        tenLoaiNguoiDung: string;
    };
    soLuongHocVien: number;
    tenKhoaHoc: string;
}
