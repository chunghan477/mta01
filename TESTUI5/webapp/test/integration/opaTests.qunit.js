/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TESTUI5/TESTUI5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});