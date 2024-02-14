
#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
    image_gallery tinyint(4) DEFAULT 0 NOT NULL,
    gallery_style varchar(50) DEFAULT '' NOT NULL,
);

#
# Table structure for table 'sys_file_reference'
#
CREATE TABLE sys_file_reference (
    image_style varchar(20) DEFAULT '' NOT NULL,
);
