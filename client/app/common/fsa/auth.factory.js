let AuthFactory = function ($http, $rootScope, AUTH_EVENTS, $q) {

    let auth = {user: null};

    let isAuthenticated = () => auth.user;

    let getLoggedInUser = (session) => {
        if(!session) return auth;
        return $http.get('/session')
            .then(loginSuccess)
            .catch(() => null);
    };

    let login = (credentials) => {
        return $http.post('/login', credentials)
            .then(loginSuccess)
            .catch(() => $q.reject({ message: 'Invalid login credentials.' }));
    };

    let logout = () => {
        return $http.get('/logout')
            .then(() => auth.user = null);
    };

    let loginSuccess = ({data}) => auth.user = data.user;

    return { login, logout, getLoggedInUser, isAuthenticated};
};

AuthFactory.$inject = ['$http', '$rootScope', 'AUTH_EVENTS', '$q'];

export default AuthFactory;
