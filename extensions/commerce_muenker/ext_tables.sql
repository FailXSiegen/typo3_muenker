#
# Table structure for table 'tx_commercemuenker_color'
#
CREATE TABLE tx_commercemuenker_color (
	uid int(11) NOT NULL auto_increment,
	pid int(11) DEFAULT '0' NOT NULL,
	tstamp int(11) DEFAULT '0' NOT NULL,
	crdate int(11) DEFAULT '0' NOT NULL,
	cruser_id int(11) DEFAULT '0' NOT NULL,
	sys_language_uid int(11) DEFAULT '0' NOT NULL,
	l10n_parent int(11) DEFAULT '0' NOT NULL,
	l10n_diffsource mediumblob,
	deleted tinyint(4) DEFAULT '0' NOT NULL,
	hidden tinyint(4) DEFAULT '0' NOT NULL,
	ral_color tinytext,
	ral_text tinytext,
	rgb_code tinytext,
	
	PRIMARY KEY (uid),
	KEY parent (pid)
) ENGINE=InnoDB;