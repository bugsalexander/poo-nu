DROP DATABASE IF EXISTS poonu;
CREATE DATABASE IF NOT EXISTS poonu;
USE poonu;

-------------------------------------------- BUILDING

DROP TABLE IF EXISTS Building;
CREATE TABLE Building (
	building_id int(11) PRIMARY KEY,
    building_name varchar(100) NOT NULL,
    building_latitude decimal(10, 8) NOT NULL,
    building_longitude decimal(10, 8) NOT NULL
);

INSERT INTO Building VALUES
(1, "Alumni Center at Columbus Place (CP)", 0, 0),
(2, "Architecture Studio (RG)", 0, 0),
(3, "Asian American Center (AC)", 0, 0),
(4, "Badger & Rosen SquashBusters Center (SB)", 0, 0),
(5, "Barletta Natatorium (BN)", 0, 0),
(6, "Behrakis Health Sciences Center (BK)", 0, 0),
(7, "Blackman Auditorium (AUDL)", 0, 0),
(8, "Cabot Physical Education Center (CB)", 0, 0),
(9, "Cahners Hall (CA)", 0, 0),
(10, "Cargill Hall (CG)", 0, 0),
(11, "Catholic Center (CC)", 0, 0),
(12, "Churchill Hall (CH)", 0, 0),
(13, "Columbus Place and Alumni Center (CP)", 0, 0),
(14, "Cullinane Hall (CN)", 0, 0),
(15, "Curry Student Center (CSC)", 0, 0),
(16, "Cushing Hall (CU)", 0, 0),
(17, "Dana Research Center (DA)", 0, 0),
(18, "Dockser Hall (DK)", 0, 0),
(19, "Dodge Hall (DG)", 0, 0),
(20, "East Village (EV)", 0, 0),
(21, "Egan Engineering/Science Research Center (EC)", 0, 0),
(22, "Ell Hall (EL)", 0, 0),
(23, "Fenway Center (FC)", 0, 0),
(24, "Forsyth Building (FR)", 0, 0),
(25, "Hastings Hall at the YMCA (YMC)", 0, 0),
(26, "Hayden Hall (HA)", 0, 0),
(27, "Hillel-Frager (HF)", 0, 0),
(28, "Holmes Hall (HO)", 0, 0),
(29, "Hurtig Hall (HT)", 0, 0),
(30, "Interdisciplinary Science and Engineering Complex (ISEC)", 0, 0),
(31, "International Village (INV)", 0, 0),
(32, "Kariotis Hall (KA)", 0, 0),
(33, "Knowles Center (KN)", 0, 0),
(34, "Lake Hall (LA)", 0, 0),
(35, "Latino/a Student Cultural Center (LC)", 0, 0),
(36, "Marino Recreation Center (MC)", 0, 0),
(37, "Matthews Arena (MA)", 0, 0),
(38, "Meserve Hall (ME)", 0, 0),
(39, "Mugar Life Sciences Building (MU)", 0, 0),
(40, "Nightingale Hall (NI)", 0, 0),
(41, "O'Bryant African American Institute (AF)", 0, 0),
(42, "Renaissance Park (RP)", 0, 0),
(43, "Richards Hall (RI)", 0, 0),
(44, "Robinson Hall (RB)", 0, 0),
(45, "ROTC Office (RO)", 0, 0),
(46, "Ryder Hall (RY)", 0, 0),
(47, "Shillman Hall (SH)", 0, 0),
(48, "Snell Engineering Center (SN)", 0, 0),
(49, "Snell Library (SL)", 0, 0),
(50, "Stearns Center (ST)", 0, 0),
(51, "West Village F (WV)", 0, 0),
(52, "West Village G (WV)", 0, 0),
(53, "West Village H (WV)", 0, 0),
(54, "101 Belvidere (BV)", 0, 0),
(55, "140 The Fenway (TF)", 0, 0),
(56, "177 Huntington (177)", 0, 0),
(57, "236 Huntington (236)", 0, 0),
(58, "271 Huntington (271)", 0, 0),
(59, "Burstein Hall (BU)", 0, 0),
(60, "Davenport Commons A (DC)", 0, 0),
(61, "Davenport Commons B (DC)", 0, 0),
(62, "Kennedy Hall (KDY)", 0, 0),
(63, "Kerr Hall (KH)", 0, 0),
(64, "Levine Hall and St. Stephen Street Complex (LV)", 0, 0),
(65, "Light Hall (LH)", 0, 0),
(66, "Loftman Hall and 153 Hemenway Street (LF)", 0, 0),
(67, "Melvin Hall (MH)", 0, 0),
(68, "Rubenstein Hall (464)", 0, 0),
(69, "Smith Hall (SM)", 0, 0),
(70, "Speare Hall (SP)", 0, 0),
(71, "Stetson East (SE)", 0, 0),
(72, "Stetson West (SW)", 0, 0),
(73, "West Village A (WV)", 0, 0),
(74, "West Village B (WV)", 0, 0),
(75, "West Village C (WV)", 0, 0),
(76, "West Village E (WV)", 0, 0),
(77, "White Hall (WH)", 0, 0),
(78, "Willis Hall (WI)", 0, 0),
(79, "10 Coventry Street (CV)", 0, 0),
(80, "142-148 Hemenway Street (142-148)", 0, 0),
(81, "319 Huntington Avenue (319)", 0, 0),
(82, "337 Huntington Avenue (337)", 0, 0),
(83, "407 Huntington Avenue (407)", 0, 0),
(84, "768 Huntington Avenue (768)", 0, 0),
(85, "780 Huntington Avenue (780)", 0, 0);


-------------------------------------------- BATHROOM

DROP TABLE IF EXISTS Bathroom;
CREATE TABLE Bathroom (
	bathroom_id int(11) PRIMARY KEY,
    building_id int(11),
    bathroom_name varchar(100) NOT NULL,
    bathroom_description varchar(255) NOT NULL,
    floor int(11) NOT NULL,
    male tinyint(1) NOT NULL,
    female tinyint(1) NOT NULL,
    all_gender tinyint(1) NOT NULL,
    handicap_accessible tinyint(1) NOT NULL,
    CONSTRAINT fk_bathroom_building FOREIGN KEY (building_id) REFERENCES Building (building_id)
);

-------------------------------------------- RATING

DROP TABLE IF EXISTS Rating;
CREATE TABLE Rating (
	rating_id int(11) PRIMARY KEY,
    bathroom_id int(11),
    rating_content varchar(255) NOT NULL,
    rating_value int(4) NOT NULL,
    CONSTRAINT fk_rating_bathroom FOREIGN KEY (bathroom_id) REFERENCES Bathroom (bathroom_id)
);

-------------------------------------------- IN USE

DROP TABLE IF EXISTS In_Use;
CREATE TABLE In_Use (
	bathroom_id int(11),
    start_time timestamp NOT NULL,
    CONSTRAINT fk_in_use_bathroom FOREIGN KEY (bathroom_id) REFERENCES Bathroom (bathroom_id)
);












