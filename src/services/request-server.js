import axios from "axios";
const requestServer = function (
	endPoint,
	data,
	method,
	headers,
	url,
	contentType,
	noAuth,
	domain,
	responseType
) {
	let defaultHeaders = {
		Accept: "application/json",
		"Content-Type": contentType || "application/json",
		// 'Access-Control-Allow-Origin' : '*'
	};
	console.log(
		"auth token................",
		window.localStorage.getItem("authtoken"),
		noAuth
	);
	if (noAuth) {
		defaultHeaders["authorization"] = "tVsT0ken;Cata!0g";
	}
	// if(method==="POST"){
	// 	// defaultHeaders["Access-Control-Allow-Origin"] = '*';
	// 	defaultHeaders['Access-Control-Allow-Origin']= '*';
	// 	// defaultHeaders['Access-Control-Allow-Credentials']= 'true';
	// }
	var params = {
		method: method || "GET",
		headers: Object.assign(defaultHeaders),
	};

	if (data) {
		params.data = data;
	}

	params.baseURL = domain;
	params.url = endPoint;

	if (responseType) {
		params.responseType = responseType;
	}

	return axios(params, { crossDomain: true })
		.then(function (response) {
			return response;
		})
		.then(function (response) {
			return response;
		})

		.catch(function (error) {
			throw error;
		});
};

export default requestServer;
