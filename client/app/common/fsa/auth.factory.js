let AuthFactory = function ($http, Session, $rootScope, AUTH_EVENTS, $q) {

    let isAuthenticated = () => !!Session.user;

    let getLoggedInUser = (fromServer) => {

        if (isAuthenticated() && fromServer !== true) {
            return $q.when(Session.user);
        };

        return $http.get('/session')
            .then(onSuccessfulLogin)
            .catch(() => null);
    };

    let login = (credentials) => {
        return $http.post('/login', credentials)
            .then(onSuccessfulLogin)
            .catch(() => $q.reject({ message: 'Invalid login credentials.' }));
    };

    let logout = () => {
        return $http.get('/logout')
            .then(() => {
                Session.destroy();
                $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
            });
    };

    let onSuccessfulLogin = ({data}) => {
        Session.create(data.id, data.user);
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        return data.user;
    }

    return { login, logout, getLoggedInUser, isAuthenticated, onSuccessfulLogin};
};

AuthFactory.$inject = ['$http', 'Session', '$rootScope', 'AUTH_EVENTS', '$q'];

export default AuthFactory;
