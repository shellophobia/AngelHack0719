import agent from 'superagent';

export function getToken() {
  var url = 'https://violet-barnacle-3299.twil.io/capability-token';
  agent.get(url).then(response => {
    const token = response.body.token;
    console.log('token =', token);
    const Twilio = window.Twilio;
    const device = new Twilio.Device();
    console.log('device = ', device);
    device.setup(token);

    window.setTimeout(() => {
      const activeConn = device.connect();
      window.callDetails = {
        activeConn
      };
    }, 4 * 1000);
  });
}

export function disconnectCall() {
  window.callDetails &&
    window.callDetails.activeConn &&
    window.callDetails.activeConn.disconnect();
}
