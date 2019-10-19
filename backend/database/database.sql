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
(1, "Alumni Center at Columbus Place (CP)", 42.337698, -71.085275),
(2, "Architecture Studio (RG)", 42.337087, -71.089164),
(3, "Asian American Center (AC)", 42.343170, -71.090341),
(4, "Badger & Rosen SquashBusters Center (SB)", 42.337953, -71.085870),
(5, "Barletta Natatorium (BN)", 42.339023, -71.089851),
(6, "Behrakis Health Sciences Center (BK)", 42.336712, -71.091654),
(7, "Blackman Auditorium (AUDL)", 42.339591, -71.087941),
(8, "Cabot Physical Education Center (CB)", 42.339451, -71.089718),
(9, "Cahners Hall (CA)", 42.341475, -71.091510),
(10, "Cargill Hall (CG)", 42.338943, -71.091635),
(11, "Catholic Center (CC)", 42.341628, -71.087523),
(12, "Churchill Hall (CH)", 42.338774, -71.088923),
(13, "Cullinane Hall (CN)", 42.340084, -71.086506),
(14, "Curry Student Center (CSC)", 42.339146, -71.087568),
(15, "Cushing Hall (CU)", 42.341664, -71.091404),
(16, "Dana Research Center (DA)", 42.338081, -71.089346),
(17, "Dockser Hall (DK)", 42.338682, -71.090493),
(18, "Dodge Hall (DG)", 42.340326, -71.087849),
(19, "East Village (EV)", 42.340439, -71.086879),
(20, "Egan Engineering/Science Research Center (EC)", 42.337669, -71.088892),
(21, "Ell Hall (EL)", 42.339364, -71.087799),
(22, "Fenway Center (FC)", 42.342089, -71.087972),
(23, "Forsyth Building (FR)", 42.338525, -71.089668),
(24, "Hastings Hall at the YMCA (YMC)", 42.340733, -71.087239),
(25, "Hayden Hall (HA)", 42.339465, -71.088528),
(26, "Hillel-Frager (HF)", 42.341573, -71.087674),
(27, "Holmes Hall (HO)", 42.338185, -71.090902),
(28, "Hurtig Hall (HT)", 42.339761, -71.086159),
(29, "Interdisciplinary Science and Engineering Complex (ISEC)", 42.337735, -71.086912),
(30, "International Village (INV)", 42.335252, -71.089378),
(31, "Kariotis Hall (KA)", 42.338629, -71.090910),
(32, "Knowles Center (KN)", 42.339201, -71.090881),
(33, "Lake Hall (LA)", 42.338420, -71.090880),
(34, "Latino/a Student Cultural Center (LC)", 42.338173, -71.089748),
(35, "Marino Recreation Center (MC)", 42.340274, -71.090268),
(36, "Matthews Arena (MA)", 42.341277, -71.084526),
(37, "Meserve Hall (ME)", 42.337813, -71.090937),
(38, "Mugar Life Sciences Building (MU)", 42.339774, -71.087111),
(39, "Nightingale Hall (NI)", 42.338105, -71.089987),
(40, "O'Bryant African American Institute (AF)", 42.337490, -71.091606),
(41, "Renaissance Park (RP)", 42.335576, -71.088207),
(42, "Richards Hall (RI)", 42.339968, -71.088656),
(43, "Robinson Hall (RB)", 42.339261, -71.086780),
(44, "ROTC Office (RO)", 42.340746, -71.088502),
(45, "Ryder Hall (RY)", 42.336610, -71.090849),
(46, "Shillman Hall (SH)", 42.337556, -71.090191),
(47, "Snell Engineering Center (SN)", 42.338287, -71.088860),
(48, "Snell Library (SL)", 42.338400, -71.088071),
(49, "Stearns Center (ST)", 42.339001, -71.091374),
(50, "West Village F (WV)", 42.337360, -71.091593),
(51, "West Village G (WV)", 42.338275, -71.091984),
(52, "West Village H (WV)", 42.338572, -71.092355),
(53, "101 Belvidere (BV)", 42.345333, -71.083797),
(54, "140 The Fenway (TF)", 42.340772, -71.091726),
(55, "177 Huntington (177)", 42.344931, -71.082786),
(56, "236 Huntington (236)", 42.342993, -71.084039),
(57, "271 Huntington (271)", 42.342103, -71.086276),
(58, "Burstein Hall (BU)", 42.338314, -71.093043),
(59, "Davenport Commons A (DC)", 42.337991, -71.084760),
(60, "Davenport Commons B (DC)", 42.338304, -71.084263),
(61, "Kennedy Hall (KDY)", 42.342851, -71.090465),
(62, "Kerr Hall (KH)", 42.341879, -71.091272),
(63, "Levine Hall and St. Stephen Street Complex (LV)", 42.341131, -71.088839),
(64, "Light Hall (LH)", 42.341800, -71.088164),
(65, "Loftman Hall and 153 Hemenway Street (LF)", 42.341731, -71.090868),
(66, "Melvin Hall (MH)", 42.342097, -71.091135),
(67, "Rubenstein Hall (464)", 42.338282, -71.093454),
(68, "Smith Hall (SM)", 42.342510, -71.090594),
(69, "Speare Hall (SP)", 42.340704, -71.089698),
(70, "Stetson East (SE)", 42.341412, -71.090243),
(71, "Stetson West (SW)", 42.340948, -71.090463),
(72, "West Village A (WV)", 42.337779, -71.092823),
(73, "West Village B (WV)", 42.337626, -71.092094),
(74, "West Village C (WV)", 42.336889, -71.092552),
(75, "West Village E (WV)", 42.336738, -71.092056),
(76, "White Hall (WH)", 42.339904, -71.091227),
(77, "Willis Hall (WI)", 42.338180, -71.091343),
(78, "10 Coventry Street (CV)", 42.336940, -71.085939),
(79, "142-148 Hemenway Street (142-148)", 42.341954, -71.090301),
(80, "319 Huntington Avenue (319)", 42.341016, -71.087908),
(81, "337 Huntington Avenue (337)", 42.340684, -71.088901),
(82, "407 Huntington Avenue (407)", 42.339583, -71.091497),
(83, "768 Columbus Avenue (768)", 42.337153, -71.086188),
(84, "780 Columbus Avenue (780)", 42.336842, -71.086897);


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
    capacity int(11) NOT NULL,
    CONSTRAINT fk_bathroom_building FOREIGN KEY (building_id) REFERENCES Building (building_id)
);

INSERT INTO Bathroom VALUES
(1, 1, "b1", "b1 desc", 2, 1, 0, 0, 0, 4),
(2, 2, "b2", "b2 desc", 3, 0, 1, 0, 0, 6),
(3, 3, "b3", "b3 desc", 1, 1, 1, 1, 0, 7);

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



-- FIND CLOSEST BATHROOMS (lat, long, count)
select *, SQRT(POWER((building_latitude - 42.338361), 2) + POWER((building_longitude - -71.090031), 2)) as distance 	-- latitude, longitude
from Building join Bathroom using (building_id)
order by distance asc
limit 10; 	-- count

-- FIND BATHROOMS WITHIN (lat, long, distance)
select building_name, bathroom_name, bathroom_description, floor, male, female, all_gender, handicap_accessible, capacity,
ROUND(((SQRT(POWER((building_latitude - 42.340133), 2) + POWER((building_longitude - -71.088299), 2)) * 10000 / 90) * 3280.4), 0) as ft	-- latitude, longitude
from Building join Bathroom using (building_id)
order by ft asc
limit 2;


-- FIND BUILDINGS WITHIN (lat, long, distance)


-- FIND BATHROOMS IN BUILDING (building_id)









