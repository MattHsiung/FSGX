let AuthFactory = function ($http, $auth) {

    let auth = {user: null};

    let isAuthenticated = () => $auth.isAuthenticated();

    let getLoggedInUser = () => auth;

    let getUser = () => {
        $http.get('/api/me')
            .then(({data}) => auth.user = data)
            .catch(({data}) => console.log('FAILED: ', data.message));
    };
    //TODO: LOGIN METHOD
    //TODO: UNLINK

    let signup = (credentials) => {
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
        if (!$auth.isAuthenticated()) return;
        return $auth.logout()
            .then(() => auth.user = null)
            .catch(({data}) => data.message );
    };

    return { signup, logout, getLoggedInUser, getUser, isAuthenticated, authenticate};
};

AuthFactory.$inject = ['$http', '$auth'];

export default AuthFactory;