let AuthFactory = function ($http, $auth) {

    let auth = {user: null};

    let isAuthenticated = () => !!auth.user;

    let getLoggedInUser = () => auth;

    let getUser = () => {
        $http.get('/api/me')
            .then(({data}) => auth.user = data)
            .catch(res => console.log('fail', res));
    };

    let login = (credentials) => {
        return $auth.signup(credentials)
            .then(res => {
                $auth.setToken(res);
                getUser();
            })
            .catch(({data}) => data.message );
    };

    let authenticate = (provider) => {
        return $auth.authenticate(provider)
            .then(getUser)
            .catch(({data}) => data.message );
    };

    let logout = () => {
        return $http.get('/logout')
            .then(() => auth.user = null);
    };

    return { login, logout, getLoggedInUser, getUser, isAuthenticated, authenticate};
};

AuthFactory.$inject = ['$http', '$auth'];

export default AuthFactory;