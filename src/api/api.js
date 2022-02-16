export async function get(
  url,
  onSuccess,

  onError = (response) => {
    console.error('¡Error de petición!', response.status, response.statusText);
  },
  onConnectionError = (msg) => {
    console.error('Revise la conexión', msg);
  }
) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const body = await response.json();
      console.log(body);
      onSuccess(body);
    } else {
      onError(response);
    }
  } catch (msg) {
    onConnectionError(msg);
  }
}
