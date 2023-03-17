import { faGear, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);

function GeneralInfor() {
  return (
    <div className={cx("container-infor")}>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Title</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Tiêu đề khi share lên MXH</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Mô tả</div>
          <input type="text" className={cx("infor-input")} />
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Keywords</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Tác giả</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Trạng thái</div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>
              (chọn OFF website sẽ bật chế độ bảo trì, admin truy cập bình
              thường)
            </span>
          </div>
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Status update</div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>
              (chọn OFF website sẽ tắt chế độ cập nhật phiên bản tự động)
            </span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Status captcha</div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>(chọn OFF website sẽ tắt capcha chống SPAM)</span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Hotline</div>
          <input type="text" className={cx("infor-input")} />
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Email</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Email SMTP</div>
          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Password Email SMTP</div>
          <input type="password" className={cx("infor-input")} />
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>
            Giá trị đơn hàng tối thiểu để dùng đánh giá{" "}
          </div>
          <div>
            <input type="text" className={cx("infor-input")} />
            <span>
              (Đơn hàng phải lớn hơn hoặc bằng 100.000đ mới có thể sử dụng tính
              năng đánh giá và phản hồi.){" "}
            </span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Thời gian lưu phiên đăng nhập </div>
          <div>
            <input type="text" className={cx("infor-input")} />
            <span>(tính bằng giây)</span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Số tiền nạp tối thiểu </div>
          <div>
            <input type="password" className={cx("infor-input")} />
            <span>(số tiền nạp tối thiểu để được tạo hóa đơn nạp tiền)</span>
          </div>
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Thời gian check live mỗi nick</div>

          <input type="text" className={cx("infor-input")} />
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Thời gian hết hạn hóa đơn</div>
          <div>
            <input type="text" className={cx("infor-input")} />
            <span>(VD 7200 tức hóa đơn nạp tiền sẽ tồn tại trong 2 tiếng)</span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Hiệu ứng nhấp chuột</div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>Hiệu ứng khi nhấp chuột trong trang khách.</span>
          </div>
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>ON/OFF Vòng quay SPIN</div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>Hệ thống sẽ tắt tính năng vòng quay khi bạn chọn Off.</span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Giá trị đơn hàng nhận SPIN</div>
          <div>
            <input type="text" className={cx("infor-input")} />
            <span>
              Đơn hàng có giá trị lớn hơn hoặc bằng 50.000đ sẽ nhận được 1 lượt
              quay (SPIN).
            </span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>
            ON/OFF Hiển Thị Giao Dịch Gần Đây
          </div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>
              Giao dịch mua tài khoản gần đây được hiển thị tại trang home.
            </span>
          </div>
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>
            ON/OFF Login Trước Khi Xem Sản Phẩm
          </div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>
              Nếu bạn chọn ON, khách sẽ phải đăng nhập vào mới có thể xem được
              sản phẩm bạn đang bán.
            </span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Thời Gian Xoá Đơn Hàng</div>
          <div>
            <input type="text" className={cx("infor-input")} />
            <span>
              Hệ thống thực hiện xoá đơn hàng đã mua sau khi đủ thời gian bạn
              điều chỉnh, thời gian tính bằng giây 1 = 1 giây, SET thành 0 để
              tắt chức năng này.
            </span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>Duyệt thành viên khi đăng ký</div>
          <div>
            <select type="text" className={cx("infor-input")}>
              <option className={cx("infor-option")}>ON</option>
              <option className={cx("infor-option")}>OFF</option>
            </select>
            <span>
              Nếu chọn ON, các thành viên khi đăng ký sẽ phải cần BQT duyệt mới
              có thể sử dụng.
            </span>
          </div>
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>
            Giới hạn thời gian mua mỗi lượt
          </div>
          <div>
            <input type="text" className={cx("infor-input")} />
            <span>
              Ví dụ nhập vào số 10: tức sau khi mua hàng, user đó phải đợi 10
              giây mới có thể thực hiện tiếp giao dịch mua
            </span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>
            Thời gian xoá clone DIE tính theo giây
          </div>
          <div>
            <input type="text" className={cx("infor-input")} />
            <span>
              Ví dụ nhập 2592000: tức hệ thống sẽ tự động xoá các tài khoản DIE
              nằm trên hệ thống 4 tuần, để 0 để tắt chức năng này
            </span>
          </div>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>ON/OFF Document API</div>

          <select type="text" className={cx("infor-input")}>
            <option className={cx("infor-option")}>ON</option>
            <option className={cx("infor-option")}>OFF</option>
          </select>
        </div>
      </div>
      <div className={cx("container-infor-wrap")}>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>ON/OFF Menu Liên Hệ</div>

          <select type="text" className={cx("infor-input")}>
            <option className={cx("infor-option")}>ON</option>
            <option className={cx("infor-option")}>OFF</option>
          </select>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>ON/OFF Menu Công Cụ</div>

          <select type="text" className={cx("infor-input")}>
            <option className={cx("infor-option")}>ON</option>
            <option className={cx("infor-option")}>OFF</option>
          </select>
        </div>
        <div className={cx("container-infor-item")}>
          <div className={cx("infor-name")}>ON/OFF Change password định kỳ</div>

          <select type="text" className={cx("infor-input")}>
            <option className={cx("infor-option")}>ON</option>
            <option className={cx("infor-option")}>OFF</option>
          </select>
        </div>
      </div>
      <div className={cx("container-btn")}>
        <button className={cx("btn-wrap", "btn-save")}>
          <FontAwesomeIcon className={cx("btn-icon")} icon={faSave} />
          <span className={cx("btn-name")}>Lưu ngay</span>
        </button>
      </div>
    </div>
  );
}

export default GeneralInfor;
