let AuthInterceptorFactory = function ($rootScope, $q, AUTH_EVENTS) {
	const statusDict = {
		401: AUTH_EVENTS.notAuthenticated,
		403: AUTH_EVENTS.notAuthorized,
		419: AUTH_EVENTS.sessionTimeout,
		440: AUTH_EVENTS.sessionTimeout
	};

	let responseError = (response) => {
		$rootScope.$broadcast(statusDict[response.status], response);
		return $q.reject(response);
	}

  	return { responseError };
};

AuthInterceptorFactory.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

export default AuthInterceptorFactory;