let SocketFactory = function () {
  if (!window.io) throw new Error('socket.io not found!');
  return window.io(window.location.origin);
};

export default SocketFactory;
