# Grid System:


# Hệ thống lưới thường gặp:

-Lưới nhiều cột (multicolumn grid)

-Lưới một cột (single column grid)

-Lưới module (Modular grid)

-Lưới đường cơ sở (baseline grid)


# Vai trò:

- Tổ chức: có các đường căn gióng tiện lợi, dễ dàng sắp xếp các thành phần được ngăn nắp

-Cân bằng: Dù là đối xứng / bất đối xứng, mang lại cái nhìn trực quan, đảm bảo sự cân bằng

- Tách biệt thành phần: Phân chia nội dung, tạo khoảng cách các thành phần hiệu quả



Responsive web design:

-Grid: thành phần cha

-row: dòng

-column: cột

-getter: khoảng cách 2 phía của column


# Thành phần chính (lý thuyết)

1. # Column

Độ rộng sử dụng đơn vị % (tương đối) giúp linh động, dễ dàng tương thích với độ rộng khác nhau của thiết bị . Số lượng cột trong grid system được xác định trước. (12/16 cột, tablet 8 cột mobile 4 cột

2.  # Gutter - Đường ngăn cách (rãnh ngăn)

Là khoảng cách 2 phía của một cột tạo nên rãn ngăn giữa các cột. Độ rộng rãn ngăn có thể thay đổi cho phù hợp với thiết kế hoặc độ rộng màn hình (VD: PC/tablet 24px, mobile 16px

3.  # Margin - Phần lề

Là khoảng cách 2 bên trái/phải của bố cục chính của website. Độ rộng phần lề thay đổi để phù hợp với các kích thước màn hình . VD: phần lề lớn thích hợp cho màn hình lớn như PC, phần lề nhỏ thích hợp cho màn hình như tablet, mobile


# Thành phần chính (làm việc với CSS)

1. Grid -Lưới (Thường là phần cha, chứa Row và Column)
2. Row- Dòng (Dòng - chiều ngang, chứa column)
3. Column - Cột (chứa nội dung / thành phần trên website



# Row 

# Vai trò: 
1. Chứa các columns, giúp các columns nằm theo chiều ngang
2. Khi tổng chiều ngang columns  vượt quá kích thước Row, cho columns xuống hàng
3. Loại bỏ khoảng thừa do gutters tạo ra ở 2 phía


# COlumn 
- Chứa các thành phần trên website
