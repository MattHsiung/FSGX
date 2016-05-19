let SessionFactory = function ($rootScope, AUTH_EVENTS) {
    let id = null;

    let user = null;    

    let create = (sessionId, user) => {
        this.id = sessionId;
        this.user = user;
    };

    let destroy = () => {
        this.id = null;
        this.user = null;
    };
    
    $rootScope.$on(AUTH_EVENTS.notAuthenticated, () => destroy());

    $rootScope.$on(AUTH_EVENTS.sessionTimeout, () => destroy());

    return { id, user, create, destroy };
};

SessionFactory.$inject = ['$rootScope', 'AUTH_EVENTS'];

export default SessionFactory;