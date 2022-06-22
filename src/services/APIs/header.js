import requestServer from "../request-server";
import CONFIG from "./config";

var internals = {};

internals.dashboard = function (data) {
	return requestServer(
		"/api/dashboard?key=AIzaSyDOLvGeM1aYlsUllm-rz1URvngRYzcFlIQ",
		data,
		"GET",
		{},
		null,
		null,
		true,
		CONFIG.ENV
	);
};

internals.getMetadata = function (data) {
	return requestServer(
		"/api/imageList?key=AIzaSyDOLvGeM1aYlsUllm-rz1URvngRYzcFlIQ",
		data,
		"GET",
		{},
		null,
		null,
		true,
		CONFIG.ENV
	);
};

internals.fileUpload = function (data) {
	return requestServer(
		"/api/fileUpload?key=AIzaSyDOLvGeM1aYlsUllm-rz1URvngRYzcFlIQ",
		data,
		"POST",
		{},
		null,
		null,
		true,
		CONFIG.ENV
	);
};

internals.filterbytag = function (data) {

	return requestServer(`${CONFIG.ENV}/api/faces/filterbytag/?tag_name=` + data);
};

internals.progressapi = function (data) {
	return requestServer(
		`${CONFIG.ENV}/api/faces/metadata/status?video_id=` + data
	);
};
internals.masterTagsApi = function (data) {
	return requestServer(`${CONFIG.ENV}/api/faces/mastertags/`);
};

export default internals;
