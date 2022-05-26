// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/img/best-seller-1__lg-gram.jpg',
'LG Gram 17Z90N-V.AH75A5 (i7 1065G7/8GB RAM/512GB SSD/17inch IPS/FP/Win 10 Home Plus/Xám Bạc) (model 2020)',
'LG',
'38989000',
`CPU: Intel Core i7 1065G7 (1.3Ghz upto 3.9Ghz)
RAM: 8GB DDR4 3200Mhz
Ổ cứng: 512GB SSD
VGA: Onboard Intel Iris Plus
Màn hình: 17 inch WQXGA (2560 x 1600) IPS 16:10
HĐH: Win 10 Home Plus
Màu: Xám bạc (Dark Silver) - Vỏ hợp kim Nano Carbon Magnesium siêu bền (theo tiêu chuẩn quân đội MIL - STD 810G)
Cân nặng: 1350g
Pin: 80Wh up to 17 hours`,
'12 Tháng');

BestSeller.add('./asset/img/best-seller-2__dell-gaming-g5.png',
'Dell Gaming G5 15 5500 (70225486) (i7 10750H/8GB RAM/ 512GB SSD /15.6 inch FHD 144Hz/RTX2060 6G/Win10/Đen (2020)',
'Dell',
'33489000',
`CPU: Intel Core i7 10750H (2.6Ghz /12MB cache)
RAM: 8GB DDR4 2933Mhz (2*4GB)
Ổ cứng: 512GB SSD M.2 PCIe NVMe
VGA: Nvidia Geforce RTX2060 6G DDR6
Màn hình: 15.6 inch FHD(1920x1080) 300nits WVA Anti-Glare LED Backlit Display(non-touch), 144Hz
Bàn phím: có đèn led
HĐH: Win 10 Home SL 64bit
Màu: Đen
Cân nặng: 2.34kg
Pin: 4 cell (68Whr)`,
'12 Tháng');

BestSeller.add('./asset/img/best-seller-3__msi_nb_gf63__8_.jpg',
`Laptop MSI Gaming GF63 9RCX 646VN (i5 9300H/8GB RAM/GTX 1050Ti/512GB SSD/15.6 inch FHD/Win 10)`,
'MSI',
'18989000',
`CPU: Intel Core i5 9300H
RAM: 8GB DDR4 (2666Mhz)
Ổ cứng: 512GB NVMe PCIe SSD
Khả năng mở rộng lưu trữ:
SSD: 1x M.2 SSD Combo slot (NVMe PCIe Gen3 / SATA)
HDD: 1x 2.5" SATA HDD
VGA: GeForce® GTX 1050Ti, 4GB GDDR5
Màn hình: 15.6" FHD (1920*1080), 60Hz IPS 45% Narrow Bezel
HĐH: Windows10 Home /High End Devices
Màu: Đen
Cân nặng: 1.86 kg
Pin: 3 cell, 51Wh`,
'24 Tháng');

BestSeller.add('./asset/img/best-seller-4__asus-rog-zephyrus.png',
`Asus Gaming ROG Zephyrus GA401IU-HA075T (R7 4800HS/2*8GB RAM/512GB SSD/14 2K/GTX 1660Ti 6GB/Win10/Túi/Xám)`,
'Asus',
'34999000',
`CPU: AMD Ryzen 7 4800HS 2.9GHz up to 4.2GHz 8MB
RAM: 16GB DDR4 3200MHz (8GB + 8GB Onboard)
Ổ cứng: 512GB SSD PCIE G3X4
VGA: NVIDIA GeForce GTX 1660Ti 6GB GDDR6 VRAM (Boost Clock: 1435MHz, 60W)
Màn hình: 14" WQHD (2560 x 1440) IPS with 72% NTSC, 60Hz, 100% sRGB, Pantone® Validated, 75% AdobeRGB, 300nits
Bàn phím: có đèn led
HĐH: Windows 10 Home - ASUS recommends Windows 10 Pro for business
Màu: Xám
Cân nặng: 1.7 Kg
Pin: 4 Cell 76WHrs`,
'24 Tháng')

BestSeller.add('./asset/img/best-seller-5__asus_gaming_tuf_fx505dt_al118t_.jpg',
`Laptop Asus Gaming TUF FX505DT-AL118T (R5 3550H/8GB RAM/512GB SSD/15.6 inch FHD 120Hz/GTX 1650 4GB/Win 10/Xám)`,
'Asus',
'16999000',
`CPU: AMD Ryzen 5 3550H Processor (4 x 2.10 GHz), Max Boost Clock : 3.70 GHz
RAM: 1 x 8GB DDR4/3200 MHz (2 slots)
Ổ cứng: 512GB SSD PCIe (M.2 2280)
VGA: NVIDIA GeForce GTX 1650 (4GB of GDDR5 SDRAM, Bus Width : 128-bit) ; AMD Radeon Vega 8 Graphics
Màn hình: 15.6" inch (16:9) LED-backlit FHD (1920x1080) 120Hz Anti-Glare IPS-level Panel with 45% NTSC
HĐH: Windows 10 Home Single Language 64-bit
Màu: Xám
Cân nặng: 2.139 kg
Pin: 3 Cell Int (48Wh)`,
'24 Tháng')

BestSeller.add('./asset/img/best-seller-6__vivo_book_a412.png',
`Laptop Asus VivoBook A412FA-EK734T (i5 10210U/8GB/512GB SSD/14 inch FHD/Win 10/Bạc)`,
'Asus',
'15999000',
`CPU: Intel Core i5-10210U Processor (4 x 1.60 GHz), Max Turbo Frequency : 4.20 GHz
RAM: 4GB onboard DDR4/ 2666MHz + [1 x 4GB DDR4/ 2666MHz (1 slot)]
Ổ cứng: 512GB SSD PCIe (M.2 2280)
VGA: Intel UHD Graphics
Màn hình: 14.0" inch (16:9) LED backlit FHD (1920 x 1080 pixels) 60Hz Anti-Glare Panel with 45% NTSC
HĐH: Windows 10 Home Single Language 64-bit
Màu: Bạc
Cân nặng: 1.406 kg
Pin: 2 Cell Int (37Wh)`,
'24 Tháng')

BestSeller.add('./asset/img/best-seller-7__laptop_dell_inspiron_5391__70197461__i7_bac.png',
`Laptop Dell Inspiron 5593A (P90F002N93A) (i7 1065G7/8GB RAM/512GB SSD/MX230 4G/15.6 inch FHD/Win 10/Bạc)`,
'Dell',
'23289000',
`CPU: Intel Core i7 1065G7(upto 3.8Ghz/ 8MB Cache)
RAM: 8GB DDR4 2666Mhz (8GB *1)
Ổ cứng: 512GB SSD PCIe (M.2 2280)
VGA: Nvidia Geforce MX230 4G DDR5
Màn hình: 15.6” FHD (1920 * 1080) Anti-Glare LED-Backlit
HĐH: Windows 10 Home Single Language 64-bit
Màu: Bạc
Cân nặng: 1.9Kg
Pin: 3 Cell (42wh)`,
'12 Tháng')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('./asset/img/56228_vivobook_a415__6_.png',
`Laptop Asus VivoBook A415EA-EB358T (i3 1115G4/4Gb/256Gb SSD/14 UHD/Win 10/Bạc)`,
'Asus',
`12849000`,
`CPU: Intel Core i3 1115G4
RAM: 4GB
Ổ cứng: 256GB SSD
VGA: Onboard
Màn hình: 14 inch FHD
HĐH: Win 10
Màu: Bạc`,
'24 Tháng');

FeatureProduct.add('./asset/img/56227_envy13_2020__4_.png',
`Laptop HP Envy 13-ba1028TU (2K0B2PA) (i5 1135G7/8GB RAM/512GB SSD/13.3"FHD/FP/Win10/Office/Vàng)`,
'HP',
`23499000`,
`CPU: 11th Gen Intel Core i5-1135G7 Processor (4 x 2.40 GHz), Max Turbo Frequency : 4.20 GHz
RAM: 8GB onboard DDR4/ 2933MHz
Ổ cứng: 512GB SSD PCIe (M.2 2280)
VGA: Intel Iris Xe Graphics
Màn hình: 13.3" inch diagonal FHD (1920 x 1080) 60Hz IPS BrightView micro-edge WLED-backlit
HĐH: Windows 10 Home Single Language 64-bit + OFFICE
Màu: Vàng
Cân nặng: 1.236 kg
Pin: 3 Cell Int (51Wh)`,
'12 Tháng');

FeatureProduct.add('./asset/img/56223_latitude3410__6_.png',
`Laptop Dell Latitude 3410 (L3410I5SSD) (i5 10210U 8GB RAM/256GB SSD/14.0 inch/Fedora/Xám)`,
'Dell',
`16989000`,
`CPU: Intel Core™ i5 10210U (1.6Ghz, 6MB Cache)
RAM: 8GB DDR4 2667Mhz (1*8GB) 
Ổ cứng: 256GB SSD M2 PCIe NVMe
VGA: Intel UHD 620
Màn hình: 14.0 inch HD (1366x768) Anti-Glare
HĐH: Fedora
Màu: Xám (Dark Gray)
Cân nặng: 1.61Kg
Pin: 3 cell (42Whr)`,
'12 Tháng');

FeatureProduct.add('./asset/img/56199_msi_gaming_bravo_15_a4dc_052vn__5_.jpg',
`Laptop MSI Gaming Bravo 15 A4DCR (270VN) (R5-4600H/8GB RAM/256GBSSD/RX 5300 3GB/15.6 inch FHD 144Hz/Win 10/Đen) (2020)`,
'MSI',
`19189000`,
`CPU: AMD Ryzen 5-4600H
RAM: 8GB DDR4 (3200Mhz)
Ổ cứng: 256GB NVMe PCle SSD
(1x M.2 SSD slot (NVMe PCIe Gen3);
1x M.2 SSD Combo slot (NVMe PCIe Gen3 / SATA))
VGA: AMD Radeon RX 5300M 3GB GDDR6
Màn hình: 15.6 inch FHD (1920*1080), IPS 144Hz
HĐH: Windows10 Home
Màu: Đen
Cân nặng: 1.96 kg
Pin: 3 cell, 51Wh`,
'12 Tháng');

FeatureProduct.add('./asset/img/56169_51483_laptop_hp_14s_dq1065tu__8qn32pa__i5_bac.jpg',
`Laptop HP 14s-dq1065TU (9TZ44PA) (i5 1035G1/8GB RAM/512GB SSD/14"HD/Win10/Bạc) (HÀNG THANH LÝ)`,
'HP',
`13999000`,
`CPU: Intel Core i5 1035G1
RAM: 8 GB DDR4-2400 SDRAM (1 x 8 GB)
Ổ cứng: 512Gb SSD
VGA: Intel® UHD Graphics 605
Màn hình: 14" HD
HĐH: Windows10 Home
Màu: Bạc
Cân nặng: 1,46 kg
Pin: 3-cell, 41 Wh Li-ion`,
'12 Tháng');

FeatureProduct.add('./asset/img/56166_50453_laptop_lenovo_ideapad_s540_15iml__81ng004pvn__i3_xam.jpg',
`Laptop Lenovo IdeaPad S540-15IML (81NG004PVN) (i3 10110U/4GB RAM/512GB SSD/15.6"FHD/Win10/Xám) (HÀNG THANH LÝ - MỚI 95%)`,
'Lenovo',
`10999000`,
`CPU: Intel® Core™ i3-10110U Comet Lake 2.1Ghz upto 4.1GHz
RAM: 4GB DDR4
Ổ cứng: SSD 512GB M.2 NVMe
VGA: Intel® UHD Graphics
Màn hình: 15.6" FHD (1920x1080) IPS
HĐH: Windows10 Home
Màu: Xám
Cân nặng: 1.8 kg
Pin: 3Cell 52.5 WHr`,
'12 Tháng');

FeatureProduct.add('./asset/img/55872_stealth15w__4_.png',
`Laptop MSI Gaming Stealth 15M A11SDK (060VN) (i7-1185G7/16GB RAM/512GB SSD/GTX1660Ti 6G MaxQ/15.6 inch FHD/Win 10/Trắng) (2020)`,
'MSI',
`33989000`,
`CPU: Tiger lake Core i7-1185G7 - CPU Intel thế hệ 11
RAM: 16GB DDR4 (2666Mhz) (2*8GB)
Ổ cứng: 512GB NVMe PCle SSD
VGA: GTX1660Ti 6G MaxQ GDDR6
Màn hình: 15.6 inch FHD (1920*1080) IPS, 144Hz
HĐH: Windows10 Home
Màu: Trắng
Cân nặng: 1.69 kg
Pin: 3 cell, 52Wh`,
'24 Tháng');

FeatureProduct.add('./asset/img/56046_fx506__6_.jpg',
`Laptop Asus Gaming TUF FX506LI-HN096T (i7 10870H/8GB RAM/512GB SSD/15.6 inch FHD 144hz/GTX 1650Ti 4GB/Win10/Xám)`,
'Asus',
`26699000`,
`CPU: Intel® Core™ i7-10870H Processor 2.2 GHz (16M Cache, up to 5.0 GHz, 8 cores)
RAM: 8GB DDR4 SO-DIMM
Ổ cứng: 512GB M.2 NVMe™ PCIe® 3.0 SSD
VGA: NVIDIA GeForce GTX 1650Ti/ 4GB GDDR6
Màn hình: 15.6" inch (16:9) LED-backlit FHD (1920 x 1080) 144Hz Anti-Glare IPS-level Panel with 72% NTSC with Adaptive GSyncN/A , 250 nits, Adobe % 47.1%, SRGB 62.5%.
HĐH: Windows 10 Home - ASUS recommends Windows 10 Pro for business
Màu: Grey Metal
Cân nặng: 2.30 Kg
Pin: 48WHrs, 3S1P, 3-cell Li-ion`,
'24 Tháng');

FeatureProduct.add('./asset/img/56042_envy13__4_.png',
`Laptop HP Envy 13-ba1027TU (2K0B1PA) (i5 1135G7/8GB RAM/256GB SSD/13.3 inch FHD/FP/Win10/Office/Vàng)`,
'HP',
`22499000`,
`CPU: 11th Gen Intel Core i5-1135G7 Processor (4 x 2.40 GHz), Max Turbo Frequency : 4.20 GHz
RAM: 8GB onboard DDR4/ 2933MHz
Ổ cứng: 256GB SSD PCIe (M.2 2280)
VGA: Intel Iris Xe Graphics
Màn hình: 13.3" inch diagonal FHD (1920 x 1080) 60Hz IPS BrightView micro-edge WLED-backlit
HĐH: Windows 10 Home Single Language 64-bit + OFFICE
Màu: Vàng
Cân nặng: 1.236 kg
Pin: 3 Cell Int (51Wh)`,
'12 Tháng');

FeatureProduct.add('./asset/img/56038_asus_x409ma_bv034t__5_.jpg',
`Laptop Asus X409MA-BV260T (Pen N5030/4G/256GB SSD/14 HD/Win 10/Bạc)`,
'Asus',
`7899000`,
`CPU: Intel Pentium Silver N5030 Processor (4 x 1.10 GHz)
RAM: 1 x 4GB DDR4/ 2666MHz (1 slot)
Ổ cứng: 256GB SSD PCIe (M.2 2280)
VGA: 
Màn hình: 14.0" inch (16:9) LED-backlit HD (1366 x 768) 60Hz, Anti-glare
HĐH: Windows 10 Home Single Language 64-bit
Màu: Bạc
Cân nặng: 1.413 kg
Pin: 2 Cell Int (32Wh)`,
'24 Tháng');

FeatureProduct.add('./asset/img/56030_gl75__4_.png',
`Laptop MSI Gaming GL75 Leopard 10SDR (495VN) (i7-10750H/16GBRAM/512GB SSD/GTX 1660Ti 6G/17.3 inch FHD 144Hz/Win 10/Đen) (2020)`,
'HP',
`32489000`,
`CPU: Intel Core i7-10750H
RAM: 16GB DDR4 (2666Mhz) (8GB *2)
Ổ cứng: 512GB NVMe PCle SSD
VGA: GTX 1660Ti 6GB GDDR6
Màn hình: 17.3 inch FHD (1920*1080), 144Hz
HĐH: Windows 10 Home
Màu: Đen
Cân nặng: 2.6 kg
Pin: 6 cell, 51Wh`,
'24 Tháng');

FeatureProduct.add('./asset/img/56001_zenbook_14_ux425__8_.png',
`Laptop Asus ZenBook UX425EA-BM069T (i5 1135G7/8GB RAM/512GB SSD/14 FHD/Win10/Xám)`,
'Asus',
`22899000`,
`CPU: Intel® Tiger Lake Core ™ i5 _ 1135G7 thế hệ thứ 11 (2,40 GHz, 8M bộ nhớ đệm, tối đa 4,20 GHz)
RAM: 8GB LPDDR4X Bus 4266MHz tích hợp
Ổ cứng: SSD 512GB PCIe® NVMe ™ M.2
VGA: Intel® Iris® Xe
Màn hình: 14 inch Full HD IPS (1920 x 1080) 
HĐH: Windows 10 Home SL 64bit
Màu: Xám
Cân nặng: 1.75 kg
Pin: 4 Cell Pin 67 Whrs`,
'24 Tháng');

FeatureProduct.add('./asset/img/55982_xps_9500__5_.png',
`Laptop Dell XPS 15 9500 (70221010) (i7 10750H/16GB RAM/512GBSSD/1650Ti 4G/15.6 inch UHD Touch/Win 10) (2020)`,
'Dell',
`59489000`,
`CPU: Intel® Core™ i7 10750H 
RAM: 16GB DDR4 2933Mhz (2*8GB)
Ổ cứng: 512GB  M.2 PCIe NVMe SSD
VGA: Nvidia Geforce GTX1650Ti 4G DDR6
Màn hình: 15.6" UHD (3840 x 2160), Touch
HĐH: Windows 10 Home
Màu: Bạc – Vỏ nhôm khối, siêu mỏng
Cân nặng: 2kg
Pin: 6 cell 82Whr`,
'12 Tháng');

FeatureProduct.add('./asset/img/55891_lenovo_thinkpad_e14__7_.jpg',
`Laptop Lenovo Thinkpad E14 (20RA007CVA) (i5 10210U/8GB RAM/512GB SSD/14 FHD/Dos/Đen)`,
'HP',
`17299000`,
`CPU: Intel Core i5-10210U (4C / 8T, 1.6 / 4.2GHz, 6MB)
RAM: 8GB SO-DIMM DDR4-2666
Ổ cứng: 512GB SSD M.2 2242 PCIe NVMe 3.0x2
VGA: Integrated Intel UHD Graphics
Màn hình: 14" FHD (1920x1080) IPS 250nits Anti-glare
HĐH: None
Màu: Đen
Cân nặng: 1.73kg
Pin: Integrated 45Wh`,
'12 Tháng');

FeatureProduct.add('./asset/img/55890_dell_inspiron_3493__8_.png',
`Laptop Dell Inspiron 3493 (N4I5122WA) (i5 1035G1/8G RAM/256GB SSD/14.0 inch FHD/ Win10/Đen)`,
'Dell',
`14689000`,
`CPU: Intel Core i5-1035G1 (1.0Ghz/6MB cache)
RAM: 8GB DDR4 2666Mhz
Ổ cứng: 256GB SSD M.2 PCIe NVMe
VGA: Intel HD 620
Màn hình: 14.0 inch FHD (1920*1080) Anti-Glare LED Backlit
HĐH: Win 10 Home SL 64
Màu: Đen
Cân nặng: 1.66Kg
Pin: 3Cell (42Whr)`,
'12 Tháng');

FeatureProduct.add('./asset/img/55811_legion5__4_.png',
`Laptop Lenovo Legion 5-15ARH05 (82B500GTVN) (R7 4800H/8GB RAM/512GB SSD/15.6 FHD 144hz/GTX1650Ti 4G/Win/Đen`,
'HP',
`26999000`,
`CPU: Intel Core i5-1035G1 (1.0Ghz/6MB cache)
RAM: 8GB DDR4 2666Mhz
Ổ cứng: 256GB SSD M.2 PCIe NVMe
VGA: Intel HD 620
Màn hình: 14.0 inch FHD (1920*1080) Anti-Glare LED Backlit
HĐH: Win 10 Home SL 64
Màu: Đen
Cân nặng: 1.66Kg
Pin: 3Cell (42Whr)`,
'12 Tháng');

FeatureProduct.add('./asset/img/55675_vostro_3491__5_.png',
`Laptop Dell Vostro 3491 (70223127) (i3 1005G1 4GB RAM/256GB SSD/14.0 inch FHD/FP/Win10/Đen)`,
'Dell',
`10989000`,
`CPU: Intel Core i3-1005G1 (1.2Ghz/4MB cache)
RAM: 4GB DDR4 2666Mhz
Ổ cứng: 256GB SSD M.2 PCIe NVMe
VGA: Intel® UHD Graphics
Màn hình: 14.0 inch FHD (1920 x 1080) Anti-Glare LED-Backlit
HĐH: Win 10 Home SL 64
Màu: Đen
Cân nặng: 1.8Kg
Pin: 3 cell 42Wh`,
'12 Tháng');

FeatureProduct.add('./asset/img/55649_hp_15s__5_.jpg',
`Laptop HP 15s-fq1106TU (193Q2PA) (i3 1005G1/4GB RAM/256GB SSD/15.6 HD/Dos/Bạc)`,
'HP',
`9799000`,
`CPU: Intel® Core™ i3-1005G1 (1.2 GHz base frequency, up to 3.4 GHz with Intel® Turbo Boost Technology, 4 MB L3 cache, 2 cores)
RAM: 4 GB DDR4-2666 SDRAM (1 x 4 GB)
Ổ cứng: 256 GB PCIe® NVMe™ M.2 SSD
VGA: Intel® UHD Graphics
Màn hình: 15.6"HD
HĐH: FreeDOS
Màu: Bạc
Cân nặng: 1,69 kg
Pin: 3-cell, 41 Wh Li-ion`,
'12 Tháng');

FeatureProduct.add('./asset/img/55498_morden_14_black__5_.png',
`Laptop MSI Modern 14 B10RASW (202VN) (i7-10510U/8GB RAM/512GB SSD/MX330 2GB/ 14 inch FHD/Win 10/Đen) (2020)`,
'Dell',
`23589000`,
`CPU: Intel Core i7-10510U
RAM: 8GB DDR4 (2666Mhz)
Ổ cứng: 512GB NVMe PCle SSD
VGA: MX330 2GB GDDR5
Màn hình: 14 inch FHD (1920*1080), IPS-level, 60Hz
HĐH: Windows 10 Home
Màu: Đen
Cân nặng: 1.19 kg
Pin: 4 cell, 50Wh`,
'12 Tháng');

FeatureProduct.add('./asset/img/55522_acernitro5__5_.jpg',
`Laptop Acer Gaming Nitro 5 AN515-55-77P9 (NH.Q7NSV.003) (Core i7 10750H/8GB RAM/512GB SSD/GTX1650Ti 4G/15.6FHD IPS 144Hz/Win 10)`,
'Asus',
`27999000`,
`CPU: Intel Core i7 10750H (2.6Ghz/12MB cache)
RAM: 8GB DDR4 2933Mhz
Ổ cứng: 512GB SSD PCIe
(nâng cấp tối đa thêm HDD: 2TB, SSD: 2 khe M.2, mỗi khe 1TB SSD NVMe PCIe - RAI0)
VGA: NVIDIA® GeForce® GTX 1650Ti 4G-GDDR5
Màn hình: 15.6 inch FHD IPS 144Hz slim bezel LCD (1920 * 1080)
HĐH: Win 10 Home SL 64
Màu: Đen
Cân nặng: 2.3 kg 
Pin: 4 Cell , 57.5Wh`,
'12 Tháng');

localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));