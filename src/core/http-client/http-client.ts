import axios from 'axios';

const Http = axios.create({
  baseURL: 'https://www.SetAPIUrlhere.com/'
})

Http.interceptors.request.use(
  request => requestHandler(request)
);


const requestHandler = (request: any) => {
	// Handle loader before request api
  if (request.hasOwnProperty('showLoader') && !request.showLoader) {
		// when user add 'showLoader' = hide in config
		console.log('hideLoader. . . (from requestHandler)');
  } else {
		// by default will showLoader
		console.log('showLoader. . . (from requestHandler)');
	}
  return request
}

Http.interceptors.response.use(
  response => successResponseHandler(response),
  error => errorResponseHandler(error)
);

const successResponseHandler = (response: any) => {
	// by default will hideLoader after get response
	console.log('hideLoader. . . (from successResponseHandler)');
	return response;
}

const errorResponseHandler = (response: any) => {
	// by default will hideLoader after get response
	console.log('hideLoader. . . (from errorResponseHandler)');
  return Promise.reject({ ...response })
}

export default Http;